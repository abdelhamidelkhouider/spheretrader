// ─────────────────────────────────────────────────────────────
// SphereTrader Agent — Market Scanner
// Posts intents, scans for matches, subscribes to the live feed
// Uses the REAL Sphere SDK MarketModule API
// ─────────────────────────────────────────────────────────────

import type { Config } from './config.js';
import type { WalletManager } from './wallet.js';
import { logger } from './logger.js';

export interface MarketIntent {
  id: string;
  owner: string;
  ownerNametag?: string;
  side: 'buy' | 'sell';
  description: string;
  price: number;
  currency: string;
  score?: number;
  wantAmount: string;
  wantCurrency: string;
  offerAmount: string;
  offerCurrency: string;
}

export interface PostedIntent {
  id: string;
  side: 'buy' | 'sell';
  postedAt: number;
  expiresAt: number;
}

export class MarketScanner {
  private config: Config;
  private wallet: WalletManager;
  private postedIntents: PostedIntent[] = [];
  private feedUnsubscribe: (() => void) | null = null;
  private matchBuffer: MarketIntent[] = [];

  constructor(config: Config, wallet: WalletManager) {
    this.config = config;
    this.wallet = wallet;
  }

  /**
   * Post the agent's buy and sell intents on the Sphere market.
   * Uses the real MarketModule.postIntent() API signature:
   *   { description, intentType, category?, price?, currency?, expiresInDays? }
   */
  async postIntents(): Promise<void> {
    const sphere = this.wallet.sphere;
    const symbol = this.config.tradingPair;

    // Ensure market module is available
    if (!sphere.market) {
      logger.log('error', 'Market module not available — was market: true passed to Sphere.init()?');
      return;
    }

    try {
      const now = Date.now();

      // Remove expired intents from tracking
      this.postedIntents = this.postedIntents.filter((i) => i.expiresAt > now);

      // Post BUY intent if we don't already have one
      const hasBuy = this.postedIntents.some((i) => i.side === 'buy');
      if (!hasBuy) {
        try {
          const result = await sphere.market.postIntent({
            description: `SphereTrader — Buying up to ${this.config.maxTradeAmount} ${symbol} at ${this.config.buyPrice} per token. DM me to trade.`,
            intentType: 'buy',
            category: 'market-making',
            price: this.config.buyPrice,
            currency: symbol,
            expiresInDays: 7,
          });

          const intentId = result.intentId || String(result);

          this.postedIntents.push({
            id: intentId,
            side: 'buy',
            postedAt: now,
            expiresAt: now + (7 * 24 * 60 * 60 * 1000), // 7 days
          });

          logger.log('intent_posted', `Posted BUY intent: ${this.config.maxTradeAmount} ${symbol} @ ${this.config.buyPrice}`, {
            intentId,
            price: this.config.buyPrice,
          });
        } catch (err: any) {
          logger.log('error', `Failed to post BUY intent: ${err.message}`);
        }
      }

      // Post SELL intent if we don't already have one
      const hasSell = this.postedIntents.some((i) => i.side === 'sell');
      if (!hasSell) {
        try {
          const result = await sphere.market.postIntent({
            description: `SphereTrader — Selling up to ${this.config.maxTradeAmount} ${symbol} at ${this.config.sellPrice} per token. DM me to trade.`,
            intentType: 'sell',
            category: 'market-making',
            price: this.config.sellPrice,
            currency: symbol,
            expiresInDays: 7,
          });

          const intentId = result.intentId || String(result);

          this.postedIntents.push({
            id: intentId,
            side: 'sell',
            postedAt: now,
            expiresAt: now + (7 * 24 * 60 * 60 * 1000),
          });

          logger.log('intent_posted', `Posted SELL intent: ${this.config.maxTradeAmount} ${symbol} @ ${this.config.sellPrice}`, {
            intentId,
            price: this.config.sellPrice,
          });
        } catch (err: any) {
          logger.log('error', `Failed to post SELL intent: ${err.message}`);
        }
      }
    } catch (err: any) {
      logger.log('error', `Market intent posting failed: ${err.message}`);
    }
  }

  /**
   * Search the market for matching intents using semantic search.
   * Uses the real MarketModule.search() API:
   *   search(query, { filters?: { intentType, minScore }, limit? })
   */
  async scanForMatches(): Promise<MarketIntent[]> {
    const sphere = this.wallet.sphere;
    if (!sphere.market) return [];

    const results: MarketIntent[] = [];

    try {
      // Search for sellers (we want to buy from them)
      const sellResults = await sphere.market.search(
        `selling ${this.config.tradingPair} tokens`,
        {
          filters: {
            intentType: 'sell',
            minScore: 0.3,
          },
          limit: 10,
        }
      );

      for (const intent of sellResults.intents) {
        // Skip our own intents
        if (intent.agentNametag === this.config.agentNametag) continue;

        // Check if the price is within our buy range
        if (intent.price && intent.price <= this.config.buyPrice * 1.1) {
          results.push({
            id: intent.id,
            owner: intent.agentPublicKey,
            ownerNametag: intent.agentNametag,
            side: 'sell',
            description: intent.description,
            price: intent.price || 0,
            currency: intent.currency,
            score: intent.score,
            wantAmount: String(this.config.maxTradeAmount),
            wantCurrency: this.config.tradingPair,
            offerAmount: String(Math.round(this.config.maxTradeAmount * (intent.price || this.config.buyPrice))),
            offerCurrency: this.config.tradingPair,
          });
        }
      }

      // Search for buyers (we want to sell to them)
      const buyResults = await sphere.market.search(
        `buying ${this.config.tradingPair} tokens`,
        {
          filters: {
            intentType: 'buy',
            minScore: 0.3,
          },
          limit: 10,
        }
      );

      for (const intent of buyResults.intents) {
        if (intent.agentNametag === this.config.agentNametag) continue;

        if (intent.price && intent.price >= this.config.sellPrice * 0.9) {
          results.push({
            id: intent.id,
            owner: intent.agentPublicKey,
            ownerNametag: intent.agentNametag,
            side: 'buy',
            description: intent.description,
            price: intent.price || 0,
            currency: intent.currency,
            score: intent.score,
            wantAmount: String(this.config.maxTradeAmount),
            wantCurrency: this.config.tradingPair,
            offerAmount: String(this.config.maxTradeAmount),
            offerCurrency: this.config.tradingPair,
          });
        }
      }

      if (results.length > 0) {
        logger.log('system', `Market scan found ${results.length} potential match(es)`);
      }
    } catch (err: any) {
      logger.log('error', `Market scan failed: ${err.message}`);
    }

    this.matchBuffer = results;
    return results;
  }

  /**
   * Subscribe to the live market feed via WebSocket.
   */
  startFeedSubscription(): void {
    const sphere = this.wallet.sphere;
    if (!sphere.market) return;

    try {
      this.feedUnsubscribe = sphere.market.subscribeFeed((msg) => {
        if (msg.type === 'new') {
          logger.log('system', `New market listing: ${msg.listing.title} by ${msg.listing.agentName}`, {
            listingId: msg.listing.id,
            type: msg.listing.type,
          });
        }
      });
      logger.log('system', '📡 Subscribed to market live feed');
    } catch (err: any) {
      logger.log('error', `Failed to subscribe to market feed: ${err.message}`);
    }
  }

  /** Get count of currently active (non-expired) intents */
  getActiveIntentCount(): number {
    const now = Date.now();
    return this.postedIntents.filter((i) => i.expiresAt > now).length;
  }

  /** Get the last scan results */
  getLastMatches(): MarketIntent[] {
    return this.matchBuffer;
  }

  /** Stop feed subscription and cleanup */
  stop(): void {
    if (this.feedUnsubscribe) {
      this.feedUnsubscribe();
      this.feedUnsubscribe = null;
    }
  }
}
