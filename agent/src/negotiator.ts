// ─────────────────────────────────────────────────────────────
// SphereTrader Agent — Negotiator
// Handles DM-based trade negotiation protocol
// Uses the REAL Sphere SDK: sphere.communications.sendDM()
// ─────────────────────────────────────────────────────────────

import type { Config } from './config.js';
import type { WalletManager } from './wallet.js';
import type { MarketIntent } from './market-scanner.js';
import {
  parse,
  serialize,
  createRequestId,
  isTimestampFresh,
  type TradeRequest,
  type TradeAccept,
  type TradeReject,
} from './protocol.js';
import { logger } from './logger.js';

export type NegotiationStatus =
  | 'pending'
  | 'requested'
  | 'accepted'
  | 'rejected'
  | 'settled'
  | 'expired'
  | 'failed';

export interface Negotiation {
  id: string;
  counterparty: string;
  side: 'buy' | 'sell';
  amount: string;
  price: string;
  currency: string;
  status: NegotiationStatus;
  intentId: string;
  settlementMethod: 'payment' | 'swap';
  createdAt: number;
  updatedAt: number;
  txId?: string;
  error?: string;
}

export class Negotiator {
  private config: Config;
  private wallet: WalletManager;
  private negotiations: Map<string, Negotiation> = new Map();
  private processedMessageIds: Set<string> = new Set();

  constructor(config: Config, wallet: WalletManager) {
    this.config = config;
    this.wallet = wallet;
  }

  /**
   * Start listening for incoming DMs using the SDK's onDirectMessage callback.
   * The trader.ts sets up the main listener and forwards messages here.
   */
  startListening(): void {
    logger.log('system', 'Negotiator ready — DMs are handled by the trader event loop');
  }

  /**
   * Initiate a negotiation with a counterparty based on a discovered market intent.
   * Sends a trade_request DM using sphere.communications.sendDM().
   */
  async initiateNegotiation(intent: MarketIntent): Promise<Negotiation | null> {
    // Don't re-negotiate if we already have an active negotiation with this counterparty
    const existing = [...this.negotiations.values()].find(
      (n) => n.counterparty === (intent.ownerNametag || intent.owner) && n.status === 'requested'
    );
    if (existing) {
      logger.log('system', `Already negotiating with ${intent.ownerNametag || intent.owner}, skipping`);
      return null;
    }

    const requestId = createRequestId();
    const now = Date.now();

    // Determine trade parameters
    const tradeAmount = this.calculateTradeAmount(intent);
    if (!tradeAmount) {
      logger.log('system', `Trade amount calculation failed for intent ${intent.id}`);
      return null;
    }

    // Create negotiation record
    const negotiation: Negotiation = {
      id: requestId,
      counterparty: intent.ownerNametag ? `@${intent.ownerNametag}` : intent.owner,
      side: intent.side === 'sell' ? 'buy' : 'sell',
      amount: tradeAmount.amount,
      price: tradeAmount.price,
      currency: this.config.tradingPair,
      status: 'requested',
      intentId: intent.id,
      settlementMethod: 'payment',
      createdAt: now,
      updatedAt: now,
    };

    // Build the trade request message
    const request: TradeRequest = {
      type: 'trade_request',
      intentId: intent.id,
      wantAmount: tradeAmount.wantAmount,
      wantCurrency: tradeAmount.wantCurrency,
      offerAmount: tradeAmount.offerAmount,
      offerCurrency: tradeAmount.offerCurrency,
      timestamp: now,
    };

    try {
      // Send DM via Sphere SDK's real API
      const recipient = intent.ownerNametag ? `@${intent.ownerNametag}` : intent.owner;
      await this.wallet.sendDM(recipient, serialize(request));

      this.negotiations.set(requestId, negotiation);
      logger.log('dm_sent', `Trade request sent to ${recipient}`, {
        requestId,
        amount: tradeAmount.amount,
        price: tradeAmount.price,
        side: negotiation.side,
      });

      return negotiation;
    } catch (err: any) {
      logger.log('error', `Failed to send trade request to ${intent.owner}: ${err.message}`);
      return null;
    }
  }

  /**
   * Process an incoming DM message. Called by trader.ts's onDirectMessage handler.
   * Accepts the raw message object from the SDK.
   */
  async handleIncomingDM(message: any): Promise<void> {
    const from = message.senderNametag
      ? `@${message.senderNametag}`
      : message.senderPubkey || 'unknown';
    const content = message.content || '';
    const messageId = message.id || `${from}_${Date.now()}`;

    // Deduplicate
    if (this.processedMessageIds.has(messageId)) return;
    this.processedMessageIds.add(messageId);

    // Trim dedup set
    if (this.processedMessageIds.size > 500) {
      const arr = [...this.processedMessageIds];
      this.processedMessageIds = new Set(arr.slice(-250));
    }

    // Parse the protocol message
    const parsed = parse(content);
    if (!parsed) {
      logger.log('dm_received', `Non-protocol DM from ${from}: ${content.slice(0, 100)}`);
      return;
    }

    // Check timestamp freshness
    if (!isTimestampFresh(parsed.timestamp)) {
      logger.log('system', `Ignoring stale message from ${from}`);
      return;
    }

    logger.log('dm_received', `${parsed.type} from ${from}`, { messageType: parsed.type });

    switch (parsed.type) {
      case 'trade_request':
        await this.handleTradeRequest(from, parsed as TradeRequest);
        break;
      case 'trade_accept':
        await this.handleTradeAccept(from, parsed as TradeAccept);
        break;
      case 'trade_reject':
        this.handleTradeReject(from, parsed as TradeReject);
        break;
      case 'trade_complete':
        this.handleTradeComplete(from, parsed);
        break;
    }
  }

  /**
   * Handle payment request from counterparty (called by trader).
   */
  async handlePaymentRequest(req: any): Promise<void> {
    logger.log('payment_received', `Payment request received — evaluating...`, {
      amount: req.amount,
      from: req.senderNametag || 'unknown',
    });
    // For now, log but don't auto-pay unknown requests
    // The agent only pays for accepted negotiations
  }

  /** Get all active (non-terminal) negotiations. */
  getActiveNegotiations(): Negotiation[] {
    return [...this.negotiations.values()].filter(
      (n) => n.status === 'pending' || n.status === 'requested' || n.status === 'accepted'
    );
  }

  /** Get negotiations ready for settlement (accepted). */
  getReadyForSettlement(): Negotiation[] {
    return [...this.negotiations.values()].filter((n) => n.status === 'accepted');
  }

  /** Get all negotiations for history. */
  getAllNegotiations(): Negotiation[] {
    return [...this.negotiations.values()];
  }

  /** Mark a negotiation as settled. */
  markSettled(negotiationId: string, txId: string): void {
    const neg = this.negotiations.get(negotiationId);
    if (neg) {
      neg.status = 'settled';
      neg.txId = txId;
      neg.updatedAt = Date.now();
    }
  }

  /** Mark a negotiation as failed. */
  markFailed(negotiationId: string, error: string): void {
    const neg = this.negotiations.get(negotiationId);
    if (neg) {
      neg.status = 'failed';
      neg.error = error;
      neg.updatedAt = Date.now();
    }
  }

  /** Expire old negotiations. */
  expireStaleNegotiations(maxAgeMs: number = 600_000): void {
    const now = Date.now();
    for (const [id, neg] of this.negotiations) {
      if (
        (neg.status === 'pending' || neg.status === 'requested') &&
        now - neg.createdAt > maxAgeMs
      ) {
        neg.status = 'expired';
        neg.updatedAt = now;
        logger.log('system', `Negotiation ${id} expired`);
      }
    }
  }

  /** Stop the negotiator. */
  stop(): void {
    logger.log('system', 'Negotiator stopped');
  }

  // ── Private ────────────────────────────────────────────────

  /**
   * Handle an incoming trade request from a counterparty.
   */
  private async handleTradeRequest(from: string, request: TradeRequest): Promise<void> {
    logger.log('trade_started', `Trade request from ${from}`, {
      intentId: request.intentId,
      wantAmount: request.wantAmount,
      offerAmount: request.offerAmount,
    });

    // Validate the trade against our parameters
    const wantNum = parseFloat(request.wantAmount);
    const offerNum = parseFloat(request.offerAmount);

    if (isNaN(wantNum) || isNaN(offerNum) || wantNum <= 0 || offerNum <= 0) {
      const reject: TradeReject = {
        type: 'trade_reject',
        requestId: request.intentId,
        reason: 'Invalid amounts',
        timestamp: Date.now(),
      };
      await this.wallet.sendDM(from, serialize(reject));
      return;
    }

    // Check if the implied price is acceptable
    const impliedPrice = offerNum / wantNum;
    const isAcceptable =
      impliedPrice >= this.config.buyPrice * 0.9 &&
      impliedPrice <= this.config.sellPrice * 1.1 &&
      wantNum <= this.config.maxTradeAmount;

    if (isAcceptable) {
      // Accept the trade
      const requestId = createRequestId();
      const negotiation: Negotiation = {
        id: requestId,
        counterparty: from,
        side: 'sell', // They want to buy, so we sell
        amount: request.wantAmount,
        price: impliedPrice.toFixed(4),
        currency: request.wantCurrency,
        status: 'accepted',
        intentId: request.intentId,
        settlementMethod: 'payment',
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };

      this.negotiations.set(requestId, negotiation);

      const accept: TradeAccept = {
        type: 'trade_accept',
        requestId: request.intentId,
        agreedAmount: request.wantAmount,
        agreedPrice: impliedPrice.toFixed(4),
        settlementMethod: 'payment',
        timestamp: Date.now(),
      };

      try {
        await this.wallet.sendDM(from, serialize(accept));
        logger.log('dm_sent', `Trade accepted — ${request.wantAmount} at ${impliedPrice.toFixed(4)}`, {
          counterparty: from,
        });
      } catch (err: any) {
        logger.log('error', `Failed to send accept DM to ${from}: ${err.message}`);
      }
    } else {
      const reject: TradeReject = {
        type: 'trade_reject',
        requestId: request.intentId,
        reason: `Price ${impliedPrice.toFixed(4)} outside acceptable range [${this.config.buyPrice}, ${this.config.sellPrice}] or amount ${wantNum} exceeds max ${this.config.maxTradeAmount}`,
        timestamp: Date.now(),
      };

      try {
        await this.wallet.sendDM(from, serialize(reject));
        logger.log('dm_sent', `Trade rejected — price/amount outside range`, {
          counterparty: from,
          impliedPrice: impliedPrice.toFixed(4),
        });
      } catch (err: any) {
        logger.log('error', `Failed to send reject DM: ${err.message}`);
      }
    }
  }

  /**
   * Handle a trade accept from counterparty (response to our request).
   */
  private async handleTradeAccept(from: string, accept: TradeAccept): Promise<void> {
    // Find the matching negotiation by intentId
    const neg = [...this.negotiations.values()].find(
      (n) => n.intentId === accept.requestId && n.status === 'requested'
    );

    if (neg) {
      neg.status = 'accepted';
      neg.price = accept.agreedPrice;
      neg.amount = accept.agreedAmount;
      neg.settlementMethod = accept.settlementMethod;
      neg.updatedAt = Date.now();

      logger.log('trade_started', `Trade accepted by ${from}! Amount: ${accept.agreedAmount} @ ${accept.agreedPrice}`, {
        negotiationId: neg.id,
      });
    } else {
      logger.log('system', `Received trade_accept from ${from} but no matching pending negotiation found`);
    }
  }

  /**
   * Handle a trade reject from counterparty.
   */
  private handleTradeReject(from: string, reject: TradeReject): void {
    const neg = [...this.negotiations.values()].find(
      (n) => n.intentId === reject.requestId && n.status === 'requested'
    );

    if (neg) {
      neg.status = 'rejected';
      neg.error = reject.reason;
      neg.updatedAt = Date.now();
      logger.log('system', `Trade rejected by ${from}: ${reject.reason}`);
    }
  }

  /**
   * Handle a trade completion notification.
   */
  private handleTradeComplete(from: string, complete: any): void {
    logger.log('trade_settled', `Trade completion confirmed by ${from}`, {
      txId: complete.txId,
      settled: complete.settled,
    });
  }

  /**
   * Calculate trade amounts based on a discovered intent and our config.
   */
  private calculateTradeAmount(intent: MarketIntent): {
    amount: string;
    price: string;
    wantAmount: string;
    wantCurrency: string;
    offerAmount: string;
    offerCurrency: string;
  } | null {
    const maxAmount = Math.min(
      this.config.maxTradeAmount,
      parseFloat(intent.wantAmount) || this.config.maxTradeAmount
    );

    if (maxAmount <= 0) return null;

    const price = intent.side === 'sell' ? this.config.buyPrice : this.config.sellPrice;
    const totalCost = Math.round(maxAmount * price * 100) / 100;

    return {
      amount: String(maxAmount),
      price: String(price),
      wantAmount: String(maxAmount),
      wantCurrency: this.config.tradingPair,
      offerAmount: String(totalCost),
      offerCurrency: this.config.tradingPair,
    };
  }
}
