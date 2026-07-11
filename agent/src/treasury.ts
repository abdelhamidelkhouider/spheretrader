// ─────────────────────────────────────────────────────────────
// SphereTrader Agent — Treasury
// Tracks balances, enforces budget limits, validates trades
// ─────────────────────────────────────────────────────────────

import type { Config } from './config.js';
import type { WalletManager } from './wallet.js';
import { logger } from './logger.js';

export interface TreasuryStatus {
  balance: string;
  balanceNumeric: number;
  budgetLimit: number;
  budgetUsed: number;
  budgetRemaining: number;
  utilizationPercent: number;
  currency: string;
  lastUpdated: string;
}

export class Treasury {
  private config: Config;
  private wallet: WalletManager;
  private budgetUsed: number = 0;
  private lastBalance: string = '0';
  private lastUpdated: Date = new Date();

  constructor(config: Config, wallet: WalletManager) {
    this.config = config;
    this.wallet = wallet;
  }

  /**
   * Refresh the balance from the wallet.
   */
  async refreshBalance(): Promise<string> {
    try {
      const balance = await this.wallet.getBalance(this.config.tradingPair);
      this.lastBalance = balance;
      this.lastUpdated = new Date();

      logger.log('balance_update', `Balance: ${balance} ${this.config.tradingPair}`, {
        balance,
        budgetUsed: this.budgetUsed,
        budgetRemaining: this.config.budgetLimit - this.budgetUsed,
      });

      return balance;
    } catch (err) {
      logger.error('Failed to refresh treasury balance', err);
      return this.lastBalance;
    }
  }

  /**
   * Check whether a trade of the given amount is within budget.
   */
  canAffordTrade(amount: string): boolean {
    const amountNum = parseFloat(amount);
    if (isNaN(amountNum) || amountNum <= 0) return false;

    // Check against max single trade limit
    if (amountNum > this.config.maxTradeAmount) {
      logger.log('system', `Trade ${amountNum} exceeds max trade amount ${this.config.maxTradeAmount}`);
      return false;
    }

    // Check against remaining budget
    const remaining = this.config.budgetLimit - this.budgetUsed;
    if (amountNum > remaining) {
      logger.log('system', `Trade ${amountNum} exceeds remaining budget ${remaining}`);
      return false;
    }

    // Check against actual balance
    const balanceNum = parseFloat(this.lastBalance);
    if (amountNum > balanceNum) {
      logger.log('system', `Trade ${amountNum} exceeds balance ${balanceNum}`);
      return false;
    }

    return true;
  }

  /**
   * Record a trade's cost against the budget.
   */
  recordSpend(amount: string): void {
    const amountNum = parseFloat(amount);
    if (!isNaN(amountNum) && amountNum > 0) {
      this.budgetUsed += amountNum;
      logger.log('system', `Budget spend recorded: ${amountNum} (total used: ${this.budgetUsed})`);
    }
  }

  /**
   * Record incoming funds (reduces used budget).
   */
  recordIncome(amount: string): void {
    const amountNum = parseFloat(amount);
    if (!isNaN(amountNum) && amountNum > 0) {
      // Income offsets budget usage (we got value back)
      this.budgetUsed = Math.max(0, this.budgetUsed - amountNum);
      logger.log('system', `Budget income recorded: ${amountNum} (total used: ${this.budgetUsed})`);
    }
  }

  /**
   * Get the current treasury status.
   */
  getStatus(): TreasuryStatus {
    const balanceNumeric = parseFloat(this.lastBalance) || 0;
    const remaining = Math.max(0, this.config.budgetLimit - this.budgetUsed);
    const utilization =
      this.config.budgetLimit > 0
        ? Math.round((this.budgetUsed / this.config.budgetLimit) * 10000) / 100
        : 0;

    return {
      balance: this.lastBalance,
      balanceNumeric,
      budgetLimit: this.config.budgetLimit,
      budgetUsed: Math.round(this.budgetUsed * 100) / 100,
      budgetRemaining: Math.round(remaining * 100) / 100,
      utilizationPercent: utilization,
      currency: this.config.tradingPair,
      lastUpdated: this.lastUpdated.toISOString(),
    };
  }

  /**
   * Check if the treasury is healthy (has balance and budget).
   */
  isHealthy(): boolean {
    const balanceNum = parseFloat(this.lastBalance);
    const remaining = this.config.budgetLimit - this.budgetUsed;
    return balanceNum > 0 && remaining > 0;
  }

  /**
   * Reset budget tracking (e.g. for a new trading session).
   */
  resetBudget(): void {
    this.budgetUsed = 0;
    logger.log('system', 'Treasury budget reset');
  }
}
