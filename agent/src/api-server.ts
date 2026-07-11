// ─────────────────────────────────────────────────────────────
// SphereTrader Agent — Express API Server
// Exposes agent status, activity, trades, and config to the dashboard
// ─────────────────────────────────────────────────────────────

import express from 'express';
import cors from 'cors';
import type { Config } from './config.js';
import { getSafeConfig } from './config.js';
import { logger } from './logger.js';
import type { Trader } from './trader.js';

export function createApiServer(config: Config, trader: Trader): express.Express {
  const app = express();

  // Enable CORS for all origins (testnet app)
  app.use(cors());
  app.use(express.json());

  // ── Health check ──
  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // ── Agent status ──
  app.get('/api/status', (_req, res) => {
    try {
      res.json(trader.getStatus());
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  // ── Recent activity log ──
  app.get('/api/activity', (req, res) => {
    const limit = parseInt(req.query.limit as string) || 50;
    const activities = logger.getActivities(limit);
    res.json({ activities, count: activities.length });
  });

  // ── Trade history ──
  app.get('/api/trades', (_req, res) => {
    try {
      const stats = trader.getStats();
      res.json({
        trades: (trader.getStatus() as any).tradeHistory || [],
        stats,
      });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  // ── Agent config (sanitized — no secrets) ──
  app.get('/api/config', (_req, res) => {
    res.json(getSafeConfig(config));
  });

  // ── Trading stats ──
  app.get('/api/stats', (_req, res) => {
    try {
      res.json(trader.getStats());
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  return app;
}

export function startApiServer(
  app: express.Express,
  port: number,
): Promise<void> {
  return new Promise((resolve) => {
    app.listen(port, () => {
      logger.log('system', `📡 API server listening on http://localhost:${port}`);
      resolve();
    });
  });
}
