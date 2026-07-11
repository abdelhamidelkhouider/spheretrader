// ─────────────────────────────────────────────────────────────
// SphereTrader Agent — Entry Point
// Loads environment, creates the trader, starts the API & loop
// ─────────────────────────────────────────────────────────────

import 'dotenv/config';
import { loadConfig } from './config.js';
import { Trader } from './trader.js';
import { createApiServer, startApiServer } from './api-server.js';
import { logger } from './logger.js';

// ── Banner ──────────────────────────────────────────────────
function printBanner(): void {
  console.log(`
╔══════════════════════════════════════════════════════════╗
║                                                          ║
║   ⚡ SphereTrader — Autonomous Market Maker              ║
║   Built on Unicity Sphere SDK                            ║
║                                                          ║
║   Network:  Testnet v2                                   ║
║   Track:    Autonomous Agents                            ║
║                                                          ║
╚══════════════════════════════════════════════════════════╝
  `);
}

// ── Main ────────────────────────────────────────────────────
async function main(): Promise<void> {
  printBanner();

  // Load and validate config
  const config = loadConfig();
  logger.log('system', `Config loaded — nametag: @${config.agentNametag}, pair: ${config.tradingPair}`);
  logger.log('system', `Spread: buy@${config.buyPrice} / sell@${config.sellPrice}, max: ${config.maxTradeAmount}`);

  // Create the trader
  const trader = new Trader(config);

  // Create and start the API server
  const app = createApiServer(config, trader);
  await startApiServer(app, config.apiPort);

  // Start the autonomous trading agent
  await trader.start();

  // ── Graceful Shutdown ──
  let shuttingDown = false;

  async function shutdown(signal: string): Promise<void> {
    if (shuttingDown) return;
    shuttingDown = true;
    logger.log('system', `\n⚡ ${signal} received — shutting down...`);

    try {
      await trader.destroy();
    } catch (err: any) {
      console.error('Shutdown error:', err);
    }

    process.exit(0);
  }

  process.on('SIGINT', () => shutdown('SIGINT'));
  process.on('SIGTERM', () => shutdown('SIGTERM'));

  // Keep alive
  process.on('uncaughtException', (err) => {
    logger.log('error', `Uncaught exception: ${err.message}`);
    console.error(err);
  });

  process.on('unhandledRejection', (reason) => {
    logger.log('error', `Unhandled rejection: ${reason}`);
    console.error(reason);
  });
}

main().catch((err) => {
  console.error('Fatal startup error:', err);
  process.exit(1);
});
