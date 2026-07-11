// ─────────────────────────────────────────────────────────────
// SphereTrader Agent — Activity Logger
// Colored console output + in-memory ring buffer for the API
// ─────────────────────────────────────────────────────────────

export type ActivityType =
  | 'intent_posted'
  | 'dm_received'
  | 'dm_sent'
  | 'trade_started'
  | 'trade_settled'
  | 'payment_sent'
  | 'payment_received'
  | 'balance_update'
  | 'nametag_registered'
  | 'system'
  | 'error';

export interface Activity {
  id: string;
  timestamp: string;
  type: ActivityType;
  message: string;
  details?: Record<string, unknown>;
}

// ── ANSI Color codes ──────────────────────────────────────────
const COLORS = {
  reset: '\x1b[0m',
  dim: '\x1b[2m',
  bold: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  bgRed: '\x1b[41m',
  bgGreen: '\x1b[42m',
  bgBlue: '\x1b[44m',
  bgMagenta: '\x1b[45m',
  bgCyan: '\x1b[46m',
} as const;

const TYPE_STYLES: Record<ActivityType, { icon: string; color: string }> = {
  intent_posted: { icon: '📋', color: COLORS.blue },
  dm_received: { icon: '📩', color: COLORS.cyan },
  dm_sent: { icon: '📤', color: COLORS.magenta },
  trade_started: { icon: '🤝', color: COLORS.yellow },
  trade_settled: { icon: '✅', color: COLORS.green },
  payment_sent: { icon: '💸', color: COLORS.yellow },
  payment_received: { icon: '💰', color: COLORS.green },
  balance_update: { icon: '🏦', color: COLORS.cyan },
  nametag_registered: { icon: '🏷️', color: COLORS.magenta },
  system: { icon: '⚙️', color: COLORS.dim },
  error: { icon: '❌', color: COLORS.red },
};

const MAX_ACTIVITIES = 100;

class ActivityLogger {
  private activities: Activity[] = [];
  private counter = 0;

  /**
   * Log an activity to both console and the in-memory buffer.
   */
  log(type: ActivityType, message: string, details?: Record<string, unknown>): Activity {
    const activity: Activity = {
      id: `act_${Date.now()}_${++this.counter}`,
      timestamp: new Date().toISOString(),
      type,
      message,
      details,
    };

    // Store in ring buffer
    this.activities.push(activity);
    if (this.activities.length > MAX_ACTIVITIES) {
      this.activities.shift();
    }

    // Pretty-print to console
    this.printToConsole(activity);

    return activity;
  }

  /**
   * Shorthand for error logging with optional Error object.
   */
  error(message: string, err?: unknown, details?: Record<string, unknown>): Activity {
    const errorDetails: Record<string, unknown> = { ...details };
    if (err instanceof Error) {
      errorDetails.errorName = err.name;
      errorDetails.errorMessage = err.message;
      errorDetails.stack = err.stack?.split('\n').slice(0, 3).join('\n');
    } else if (err !== undefined) {
      errorDetails.rawError = String(err);
    }
    return this.log('error', message, errorDetails);
  }

  /**
   * Return all stored activities (most-recent last).
   */
  getActivities(limit?: number): Activity[] {
    const acts = [...this.activities];
    if (limit && limit > 0) {
      return acts.slice(-limit);
    }
    return acts;
  }

  /**
   * Get activities of a specific type.
   */
  getByType(type: ActivityType, limit?: number): Activity[] {
    const filtered = this.activities.filter((a) => a.type === type);
    if (limit && limit > 0) {
      return filtered.slice(-limit);
    }
    return filtered;
  }

  /**
   * Get the count of activities.
   */
  get count(): number {
    return this.activities.length;
  }

  // ── Private ───────────────────────────────────────────────

  private printToConsole(activity: Activity): void {
    const style = TYPE_STYLES[activity.type];
    const time = new Date(activity.timestamp).toLocaleTimeString('en-US', { hour12: false });
    const typeTag = activity.type.toUpperCase().padEnd(18);

    const line = [
      `${COLORS.dim}[${time}]${COLORS.reset}`,
      `${style.icon}`,
      `${style.color}${COLORS.bold}${typeTag}${COLORS.reset}`,
      activity.message,
    ].join(' ');

    console.log(line);

    // Print details on a second line if present
    if (activity.details && Object.keys(activity.details).length > 0) {
      const detailStr = Object.entries(activity.details)
        .filter(([, v]) => v !== undefined)
        .map(([k, v]) => `${k}=${typeof v === 'object' ? JSON.stringify(v) : v}`)
        .join('  ');
      if (detailStr) {
        console.log(`${COLORS.dim}           ↳ ${detailStr}${COLORS.reset}`);
      }
    }
  }
}

// Singleton instance
export const logger = new ActivityLogger();
