// ─────────────────────────────────────────────────────────────
// SphereTrader Agent — Configuration
// Loads and validates environment variables with sensible defaults
// ─────────────────────────────────────────────────────────────

export interface Config {
  // Wallet
  mnemonic: string;
  agentNametag: string;

  // Network
  network: 'testnet' | 'mainnet';
  aggregatorApiKey: string;
  walletApiUrl: string;

  // Trading
  buyPrice: number;
  sellPrice: number;
  maxTradeAmount: number;
  budgetLimit: number;
  tradingPair: string;

  // Server
  apiPort: number;

  // Directories
  dataDir: string;
  tokensDir: string;

  // Timing
  tradingIntervalMs: number;
  intentRefreshMs: number;
  dmPollIntervalMs: number;
}

function envStr(key: string, fallback: string): string {
  return process.env[key]?.trim() || fallback;
}

function envNum(key: string, fallback: number): number {
  const raw = process.env[key]?.trim();
  if (!raw) return fallback;
  const parsed = parseFloat(raw);
  if (isNaN(parsed)) {
    console.warn(`⚠ Invalid number for ${key}="${raw}", using default ${fallback}`);
    return fallback;
  }
  return parsed;
}

export function loadConfig(): Config {
  const config: Config = {
    // Wallet
    mnemonic: envStr('MNEMONIC', ''),
    agentNametag: envStr('AGENT_NAMETAG', 'spheretrader'),

    // Network
    network: (envStr('NETWORK', 'testnet') as Config['network']),
    aggregatorApiKey: envStr('AGGREGATOR_API_KEY', 'sk_ddc3cfcc001e4a28ac3fad7407f99590'),
    walletApiUrl: envStr('WALLET_API_URL', 'https://wallet-api.unicity.network'),

    // Trading
    buyPrice: envNum('BUY_PRICE', 0.95),
    sellPrice: envNum('SELL_PRICE', 1.05),
    maxTradeAmount: envNum('MAX_TRADE_AMOUNT', 1000),
    budgetLimit: envNum('BUDGET_LIMIT', 10000),
    tradingPair: envStr('TRADING_PAIR', 'UCT'),

    // Server
    apiPort: envNum('API_PORT', 3001),

    // Directories
    dataDir: envStr('DATA_DIR', './data/wallet'),
    tokensDir: envStr('TOKENS_DIR', './data/tokens'),

    // Timing (in milliseconds)
    tradingIntervalMs: envNum('TRADING_INTERVAL_MS', 60_000),
    intentRefreshMs: envNum('INTENT_REFRESH_MS', 300_000),
    dmPollIntervalMs: envNum('DM_POLL_INTERVAL_MS', 10_000),
  };

  // Validate critical configuration
  const errors: string[] = [];

  if (!config.mnemonic || config.mnemonic === 'your twelve word mnemonic phrase goes here') {
    errors.push('MNEMONIC is required — set a valid 12 or 24 word mnemonic in .env');
  }

  if (config.buyPrice <= 0 || config.buyPrice >= config.sellPrice) {
    errors.push(`BUY_PRICE (${config.buyPrice}) must be > 0 and < SELL_PRICE (${config.sellPrice})`);
  }

  if (config.maxTradeAmount <= 0) {
    errors.push('MAX_TRADE_AMOUNT must be positive');
  }

  if (config.budgetLimit <= 0) {
    errors.push('BUDGET_LIMIT must be positive');
  }

  if (errors.length > 0) {
    console.error('\n╔══════════════════════════════════════════════════════╗');
    console.error('║          CONFIGURATION ERRORS                       ║');
    console.error('╚══════════════════════════════════════════════════════╝');
    errors.forEach((e) => console.error(`  ✖ ${e}`));
    console.error('\nCopy .env.example to .env and update the values.\n');
    process.exit(1);
  }

  return config;
}

/**
 * Returns a sanitized copy of the config (no secrets) for the API.
 */
export function getSafeConfig(config: Config): Record<string, unknown> {
  return {
    agentNametag: config.agentNametag,
    network: config.network,
    walletApiUrl: config.walletApiUrl,
    buyPrice: config.buyPrice,
    sellPrice: config.sellPrice,
    maxTradeAmount: config.maxTradeAmount,
    budgetLimit: config.budgetLimit,
    tradingPair: config.tradingPair,
    apiPort: config.apiPort,
    tradingIntervalMs: config.tradingIntervalMs,
    intentRefreshMs: config.intentRefreshMs,
    dmPollIntervalMs: config.dmPollIntervalMs,
  };
}
