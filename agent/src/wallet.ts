// ─────────────────────────────────────────────────────────────
// SphereTrader Agent — Wallet Wrapper
// Initializes Sphere SDK, manages nametag, and self-mints for testing
// Uses the REAL Sphere SDK API (sphere.identity, sphere.payments, etc.)
// ─────────────────────────────────────────────────────────────

import { Sphere } from '@unicitylabs/sphere-sdk';
import { createNodeProviders } from '@unicitylabs/sphere-sdk/impl/nodejs';
import { createWalletApiProviders } from '@unicitylabs/sphere-sdk/impl/shared/wallet-api';
import type { Config } from './config.js';
import { logger } from './logger.js';

export interface WalletInfo {
  address: string | null;
  nametag: string | null;
  publicKey: string | null;
}

export class WalletManager {
  public sphere!: Sphere;
  private config: Config;
  private _info: WalletInfo | null = null;
  private _initialized = false;

  constructor(config: Config) {
    this.config = config;
  }

  /**
   * Initialize the Sphere SDK with the exact provider pattern from docs.
   */
  async initialize(): Promise<void> {
    if (this._initialized) return;

    logger.log('system', 'Initializing Sphere SDK...');

    try {
      // Step 1: Create base Node.js providers
      const base = createNodeProviders({
        network: this.config.network,
        dataDir: this.config.dataDir,
        tokensDir: this.config.tokensDir,
        oracle: { apiKey: this.config.aggregatorApiKey },
      });

      // Step 2: Wrap with Wallet API providers (adds delivery + token storage)
      const providers = createWalletApiProviders(base, {
        baseUrl: this.config.walletApiUrl,
        network: 'testnet2',
        deviceId: 'spheretrader-agent-v1',
      });

      // Step 3: Init Sphere with mnemonic and modules
      // network MUST be passed directly — SDK needs it for TokenRegistry
      const { sphere, created, generatedMnemonic } = await Sphere.init({
        ...providers,
        network: 'testnet2',
        mnemonic: this.config.mnemonic,
        autoGenerate: false,
        market: true,   // Enable MarketModule
        swap: true,     // Enable SwapModule
        accounting: true, // Enable AccountingModule
      });

      this.sphere = sphere;
      this._initialized = true;

      if (created) {
        logger.log('system', 'New wallet created from mnemonic');
        if (generatedMnemonic) {
          logger.log('system', '⚠ A mnemonic was auto-generated — back it up!');
        }
      } else {
        logger.log('system', 'Existing wallet loaded successfully');
      }

      // Read identity info
      const identity = sphere.identity;
      if (identity) {
        logger.log('system', `Direct address: ${identity.directAddress || 'N/A'}`);
        logger.log('system', `Chain pubkey: ${identity.chainPubkey}`);
        logger.log('system', `Nametag: @${identity.nametag || this.config.agentNametag || 'none'}`);
      }

      // Step 4: Register nametag if needed
      await this.ensureNametag();

      // Step 5: Self-mint if zero balance (testnet only)
      if (this.config.network === 'testnet') {
        await this.ensureTestTokens();
      }

      logger.log('system', 'Wallet initialization complete ✓');
    } catch (err: any) {
      logger.log('error', `Failed to initialize Sphere SDK: ${err.message}`);
      throw err;
    }
  }

  /**
   * Get the balance for a specific coin symbol using the real SDK.
   * sphere.payments.getBalance() returns Asset[] with totalAmount.
   */
  async getBalance(symbol: string): Promise<string> {
    this.assertInitialized();
    try {
      const assets = this.sphere.payments.getBalance();
      // Find the asset matching our symbol
      const asset = assets.find((a: any) =>
        a.symbol?.toLowerCase() === symbol.toLowerCase() ||
        a.coinId?.toLowerCase().includes(symbol.toLowerCase())
      );
      if (asset) {
        return String(asset.totalAmount || '0');
      }
      // Try getAssets for more complete data
      const fullAssets = await this.sphere.payments.getAssets();
      const fullAsset = fullAssets.find((a: any) =>
        a.symbol?.toLowerCase() === symbol.toLowerCase()
      );
      return String(fullAsset?.totalAmount || '0');
    } catch (err: any) {
      logger.log('error', `Failed to get balance for ${symbol}: ${err.message}`);
      return '0';
    }
  }

  /**
   * Send a payment using the real SDK: sphere.payments.send()
   */
  async sendPayment(
    recipient: string,
    amount: string,
    coinSymbol: string,
    memo?: string
  ): Promise<string> {
    this.assertInitialized();
    try {
      const result = await this.sphere.payments.send({
        recipient,
        amount,
        coinId: coinSymbol, // SDK resolves short symbols via registry
        memo: memo || `SphereTrader payment: ${amount} ${coinSymbol}`,
      });

      const txId = result.id || '';
      logger.log('payment_sent', `Sent ${amount} ${coinSymbol} to ${recipient}`, {
        txId,
        status: result.status,
      });
      return txId;
    } catch (err: any) {
      logger.log('error', `Payment failed: ${amount} ${coinSymbol} to ${recipient} — ${err.message}`);
      throw err;
    }
  }

  /**
   * Send a DM using the real SDK: sphere.communications.sendDM()
   */
  async sendDM(recipient: string, content: string): Promise<void> {
    this.assertInitialized();
    try {
      await this.sphere.communications.sendDM(recipient, content);
      logger.log('dm_sent', `DM sent to ${recipient}: ${content.slice(0, 60)}...`);
    } catch (err: any) {
      logger.log('error', `Failed to send DM to ${recipient}: ${err.message}`);
      throw err;
    }
  }

  /**
   * Return wallet info (cached after first call).
   */
  getInfo(): WalletInfo {
    if (this._info) return this._info;
    const identity = this.sphere?.identity;
    this._info = {
      address: identity?.directAddress || null,
      nametag: identity?.nametag || this.config.agentNametag || null,
      publicKey: identity?.chainPubkey || null,
    };
    return this._info;
  }

  get isInitialized(): boolean {
    return this._initialized;
  }

  // ── Private ────────────────────────────────────────────────

  private async ensureNametag(): Promise<void> {
    const tag = this.config.agentNametag;
    if (!tag) return;

    try {
      await this.sphere.registerNametag(tag);
      logger.log('nametag_registered', `Registered nametag: @${tag}`);
    } catch (err: any) {
      const msg = err.message || String(err);
      if (msg.includes('already') || msg.includes('registered') || msg.includes('exists')) {
        logger.log('system', `Nametag @${tag} already registered`);
      } else {
        logger.log('error', `Failed to register nametag @${tag}: ${msg}`);
      }
    }
  }

  /**
   * Self-mint test tokens if balance is zero (testnet only).
   * Uses sphere.payments.mintFungibleToken(coinIdHex, amount)
   */
  private async ensureTestTokens(): Promise<void> {
    const symbol = this.config.tradingPair;
    try {
      const balance = await this.getBalance(symbol);
      const balNum = parseFloat(balance);

      if (balNum <= 0) {
        logger.log('system', `Zero ${symbol} balance — attempting self-mint for testing...`);
        try {
          // UCT coin ID on testnet2 — resolve from assets or use known hex
          // The SDK accepts short symbols in some APIs but mintFungibleToken needs hex coinId
          const assets = await this.sphere.payments.getAssets();
          let coinIdHex = '';
          const asset = assets.find((a: any) => a.symbol?.toLowerCase() === symbol.toLowerCase());
          if (asset) {
            coinIdHex = asset.coinId;
          }

          if (coinIdHex) {
            const mintResult = await this.sphere.payments.mintFungibleToken(coinIdHex, 5000n);
            if (mintResult.success) {
              logger.log('system', `Self-minted 5000 ${symbol} for testing`);
            } else {
              logger.log('error', `Mint failed: ${mintResult.error}`);
            }
          } else {
            logger.log('system', `Cannot determine coinId for ${symbol} — skip self-mint`);
          }
        } catch (mintErr: any) {
          logger.log('error', `Self-mint failed: ${mintErr.message}`);
        }
      } else {
        logger.log('balance_update', `Current ${symbol} balance: ${balance}`);
      }
    } catch (err: any) {
      logger.log('error', `Balance check failed during init: ${err.message}`);
    }
  }

  private assertInitialized(): void {
    if (!this._initialized) {
      throw new Error('WalletManager not initialized — call initialize() first');
    }
  }
}
