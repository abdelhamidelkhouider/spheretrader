// ─────────────────────────────────────────────────────────────
// SphereTrader Agent — Settler
// Executes payments for agreed trades, tracks settlement status
// Uses the REAL Sphere SDK via WalletManager
// ─────────────────────────────────────────────────────────────

import type { Config } from './config.js';
import type { WalletManager } from './wallet.js';
import type { Negotiation, Negotiator } from './negotiator.js';
import { serialize } from './protocol.js';
import { logger } from './logger.js';

export interface TradeRecord {
  id: string;
  negotiationId: string;
  counterparty: string;
  side: 'buy' | 'sell';
  amount: string;
  price: string;
  currency: string;
  txId: string;
  settledAt: number;
  status: 'completed' | 'failed';
  error?: string;
}

export class Settler {
  private config: Config;
  private wallet: WalletManager;
  private negotiator: Negotiator;
  private tradeHistory: TradeRecord[] = [];
  private settlingIds: Set<string> = new Set();

  constructor(config: Config, wallet: WalletManager, negotiator: Negotiator) {
    this.config = config;
    this.wallet = wallet;
    this.negotiator = negotiator;
  }

  /**
   * Settle an accepted negotiation by executing the payment.
   * Uses wallet.sendPayment() which calls sphere.payments.send().
   */
  async settleTrade(negotiation: Negotiation): Promise<TradeRecord | null> {
    // Prevent duplicate settlement
    if (this.settlingIds.has(negotiation.id)) {
      logger.log('system', `Already settling negotiation ${negotiation.id}, skipping`);
      return null;
    }

    this.settlingIds.add(negotiation.id);

    const record: TradeRecord = {
      id: `trade_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      negotiationId: negotiation.id,
      counterparty: negotiation.counterparty,
      side: negotiation.side,
      amount: negotiation.amount,
      price: negotiation.price,
      currency: negotiation.currency,
      txId: '',
      settledAt: 0,
      status: 'failed',
    };

    try {
      logger.log('trade_started', `Settling trade with ${negotiation.counterparty}`, {
        negotiationId: negotiation.id,
        side: negotiation.side,
        amount: negotiation.amount,
        price: negotiation.price,
      });

      // Execute the payment with retry
      const txId = await this.executeWithRetry(negotiation, 3);

      record.txId = txId;
      record.status = 'completed';
      record.settledAt = Date.now();

      // Update negotiation status
      this.negotiator.markSettled(negotiation.id, txId);

      // Notify counterparty via DM
      await this.notifyCompletion(negotiation.counterparty, negotiation.id, txId);

      logger.log('trade_settled', `✅ Trade settled with ${negotiation.counterparty}: ${negotiation.amount} ${negotiation.currency}`, {
        txId,
        amount: negotiation.amount,
        side: negotiation.side,
      });
    } catch (err: any) {
      const errorMsg = err.message || String(err);
      record.error = errorMsg;
      record.status = 'failed';
      record.settledAt = Date.now();

      this.negotiator.markFailed(negotiation.id, errorMsg);
      logger.log('error', `Settlement failed for ${negotiation.id}: ${errorMsg}`);
    } finally {
      this.tradeHistory.push(record);
      this.settlingIds.delete(negotiation.id);
    }

    return record;
  }

  /** Get all trade history records. */
  getTradeHistory(): TradeRecord[] {
    return [...this.tradeHistory];
  }

  /** Get trade count. */
  getTradeCount(): number {
    return this.tradeHistory.length;
  }

  /** Get total volume of completed trades. */
  getTotalVolume(): number {
    return this.tradeHistory
      .filter((t) => t.status === 'completed')
      .reduce((sum, t) => sum + parseFloat(t.amount || '0'), 0);
  }

  // ── Private ────────────────────────────────────────────────

  /**
   * Execute payment with retry logic.
   * Handles CERTIFICATION_UNCONFIRMED by calling resumeOpenIntents().
   */
  private async executeWithRetry(negotiation: Negotiation, maxRetries: number): Promise<string> {
    let lastError: Error | null = null;

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        logger.log('payment_sent', `Payment attempt ${attempt}/${maxRetries} to ${negotiation.counterparty}...`);

        const txId = await this.wallet.sendPayment(
          negotiation.counterparty,
          negotiation.amount,
          negotiation.currency,
          `SphereTrader trade settlement: ${negotiation.amount} ${negotiation.currency} (${negotiation.side})`,
        );

        return txId;
      } catch (err: any) {
        lastError = err;
        const msg = err.message || '';

        // Handle CERTIFICATION_UNCONFIRMED — resume, don't retry send
        if (msg.includes('CERTIFICATION_UNCONFIRMED') || msg.includes('unconfirmed')) {
          logger.log('system', 'Token has unconfirmed certification — calling resumeOpenIntents...');
          try {
            await this.wallet.sphere.payments.resumeOpenIntents();
            // Wait a bit for confirmation to propagate
            await new Promise((resolve) => setTimeout(resolve, 3000));
          } catch (resumeErr: any) {
            logger.log('error', `resumeOpenIntents failed: ${resumeErr.message}`);
          }
          continue;
        }

        // For other errors, wait and retry
        if (attempt < maxRetries) {
          const waitMs = Math.min(attempt * 2000, 10000);
          logger.log('system', `Payment attempt ${attempt} failed, retrying in ${waitMs / 1000}s: ${msg}`);
          await new Promise((resolve) => setTimeout(resolve, waitMs));
        }
      }
    }

    throw lastError || new Error('Payment failed after all retries');
  }

  /**
   * Notify counterparty of trade completion via DM.
   */
  private async notifyCompletion(counterparty: string, requestId: string, txId: string): Promise<void> {
    try {
      const complete = {
        type: 'trade_complete',
        requestId,
        txId,
        settled: true,
        timestamp: Date.now(),
      };

      await this.wallet.sendDM(counterparty, serialize(complete));
      logger.log('dm_sent', `Trade completion notification sent to ${counterparty}`);
    } catch (err: any) {
      // Non-fatal: the trade is settled even if notification fails
      logger.log('error', `Failed to notify ${counterparty} of completion: ${err.message}`);
    }
  }
}
