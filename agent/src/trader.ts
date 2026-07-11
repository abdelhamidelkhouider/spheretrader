// ─────────────────────────────────────────────────────────────
// SphereTrader Agent — Main Trader (Orchestrator)
// Runs the autonomous trading loop: scan → negotiate → settle
// ─────────────────────────────────────────────────────────────

import type { Config } from './config.js';
import { WalletManager } from './wallet.js';
import { MarketScanner } from './market-scanner.js';
import { Negotiator } from './negotiator.js';
import { Settler } from './settler.js';
import { Treasury } from './treasury.js';
import { logger } from './logger.js';

export class Trader {
  private config: Config;
  private wallet: WalletManager;
  private marketScanner!: MarketScanner;
  private negotiator!: Negotiator;
  private settler!: Settler;
  private treasury!: Treasury;
  private loopTimer: ReturnType<typeof setInterval> | null = null;
  private _running = false;
  private _startedAt: number = 0;
  private _loopCount = 0;

  constructor(config: Config) {
    this.config = config;
    this.wallet = new WalletManager(config);
  }

  /** Full initialization: wallet → modules → listeners */
  async start(): Promise<void> {
    logger.log('system', '🚀 Starting SphereTrader Agent...');
    this._startedAt = Date.now();

    // Step 1: Initialize wallet (creates Sphere instance)
    await this.wallet.initialize();

    // Step 2: Create sub-modules — they all take (config, walletManager)
    this.treasury = new Treasury(this.config, this.wallet);
    this.negotiator = new Negotiator(this.config, this.wallet);
    this.settler = new Settler(this.config, this.wallet, this.negotiator);
    this.marketScanner = new MarketScanner(this.config, this.wallet);

    // Step 3: Receive any pending tokens
    try {
      logger.log('system', 'Checking for pending incoming tokens...');
      const rx = await this.wallet.sphere.payments.receive();
      if (rx.transfers && rx.transfers.length > 0) {
        logger.log('payment_received', `Received ${rx.transfers.length} pending transfer(s)`);
      }
    } catch (err: any) {
      logger.log('error', `Failed to receive pending tokens: ${err.message}`);
    }

    // Step 4: Update treasury with initial balance
    await this.treasury.refreshBalance();

    // Step 5: Set up event listeners
    this.setupListeners();

    // Step 6: Start DM listener in negotiator
    this.negotiator.startListening();

    // Step 7: Do an immediate first trading pass
    await this.tradingPass();

    // Step 8: Start the continuous trading loop
    this._running = true;
    this.loopTimer = setInterval(async () => {
      if (!this._running) return;
      try {
        await this.tradingPass();
      } catch (err: any) {
        logger.log('error', `Trading loop error: ${err.message}`);
      }
    }, this.config.tradingIntervalMs);

    logger.log('system', `✅ Agent is LIVE — trading loop every ${this.config.tradingIntervalMs / 1000}s`);
  }

  /** Set up SDK event listeners (payments, swaps) */
  private setupListeners(): void {
    const sphere = this.wallet.sphere;

    // Listen for incoming DMs → feed them to the negotiator
    sphere.communications.onDirectMessage(async (message) => {
      // Ignore own messages
      if (message.senderPubkey === sphere.identity?.chainPubkey) return;

      const label = message.senderNametag
        ? `@${message.senderNametag}`
        : message.senderPubkey.slice(0, 12) + '...';

      logger.log('dm_received', `DM from ${label}: ${message.content.slice(0, 80)}`, {
        sender: label,
        content: message.content,
      });

      try {
        await this.negotiator.handleIncomingDM(message);
      } catch (err: any) {
        logger.log('error', `Error handling DM from ${label}: ${err.message}`);
      }
    });

    // Listen for incoming transfers
    sphere.on('transfer:incoming', (transfer: any) => {
      const from = transfer.senderNametag
        ? `@${transfer.senderNametag}`
        : (transfer.senderPubkey?.slice(0, 12) || 'unknown') + '...';
      logger.log('payment_received', `Incoming transfer from ${from}: ${transfer.tokens?.length || 0} token(s)`, {
        from,
        tokenCount: transfer.tokens?.length || 0,
      });
      // Refresh treasury balance
      this.treasury.refreshBalance().catch(() => {});
    });

    // Listen for incoming payment requests
    sphere.payments.onPaymentRequest((req: any) => {
      const from = req.senderNametag ? `@${req.senderNametag}` : 'unknown';
      logger.log('payment_received', `Payment request from ${from}: ${req.amount} ${req.symbol || 'UCT'}`, {
        from,
        amount: req.amount,
      });
    });

    logger.log('system', '👂 Event listeners registered (DMs, payments, swaps)');
  }

  /** Single pass of the trading loop */
  private async tradingPass(): Promise<void> {
    this._loopCount++;
    logger.log('system', `─── Trading pass #${this._loopCount} ───`);

    try {
      // 1. Refresh balance
      await this.treasury.refreshBalance();
      const status = this.treasury.getStatus();
      logger.log('balance_update',
        `Balance: ${status.balance} ${status.currency} | Budget: ${status.budgetUsed}/${status.budgetLimit}`
      );

      // 2. Post/refresh intents on the market
      if (this.treasury.canTrade()) {
        await this.marketScanner.postIntents();
      } else {
        logger.log('system', '⏸ Budget limit reached — skipping intent posting');
      }

      // 3. Scan market for matching intents
      const matches = await this.marketScanner.scanForMatches();
      if (matches.length > 0) {
        logger.log('system', `Found ${matches.length} matching intent(s) on the market`);

        // 4. Initiate negotiations with top matches (max 3 per pass)
        for (const match of matches.slice(0, 3)) {
          if (!this.treasury.canAffordTrade(match.wantAmount)) {
            logger.log('system', `Cannot afford trade of ${match.wantAmount}, skipping`);
            continue;
          }
          try {
            await this.negotiator.initiateNegotiation(match);
          } catch (err: any) {
            logger.log('error', `Failed to negotiate with ${match.owner}: ${err.message}`);
          }
        }
      }

      // 5. Process any accepted negotiations ready for settlement
      const ready = this.negotiator.getReadyForSettlement();
      for (const negotiation of ready) {
        try {
          await this.settler.settleTrade(negotiation);
        } catch (err: any) {
          logger.log('error', `Settlement failed: ${err.message}`);
        }
      }

      // 6. Receive any new tokens
      try {
        await this.wallet.sphere.payments.receive();
      } catch {
        // Silently ignore receive errors in the loop
      }

    } catch (err: any) {
      logger.log('error', `Trading pass #${this._loopCount} failed: ${err.message}`);
    }
  }

  /** Get current status for the API */
  getStatus(): Record<string, unknown> {
    return {
      running: this._running,
      startedAt: this._startedAt,
      uptime: this._running ? Date.now() - this._startedAt : 0,
      loopCount: this._loopCount,
      wallet: this.wallet.getInfo(),
      treasury: this.treasury?.getStatus() || null,
      activeNegotiations: this.negotiator?.getActiveNegotiations().length || 0,
      tradeHistory: this.settler?.getTradeHistory() || [],
      tradingInterval: this.config.tradingIntervalMs,
    };
  }

  /** Get stats for the API */
  getStats(): Record<string, unknown> {
    const trades = this.settler?.getTradeHistory() || [];
    const completed = trades.filter((t: any) => t.status === 'completed');
    const totalVolume = completed.reduce((sum: number, t: any) => sum + parseFloat(t.amount || '0'), 0);
    return {
      totalTrades: trades.length,
      completedTrades: completed.length,
      totalVolume: totalVolume.toFixed(2),
      activeNegotiations: this.negotiator?.getActiveNegotiations().length || 0,
      activeIntents: this.marketScanner?.getActiveIntentCount() || 0,
      uptime: this._running ? Date.now() - this._startedAt : 0,
      loopCount: this._loopCount,
    };
  }

  /** Graceful shutdown */
  async destroy(): Promise<void> {
    logger.log('system', '🛑 Shutting down SphereTrader...');
    this._running = false;

    if (this.loopTimer) {
      clearInterval(this.loopTimer);
      this.loopTimer = null;
    }

    this.marketScanner?.stop();

    try {
      await this.wallet.sphere.destroy();
    } catch (err: any) {
      logger.log('error', `Wallet cleanup error: ${err.message}`);
    }

    logger.log('system', '👋 SphereTrader shut down gracefully');
  }
}
