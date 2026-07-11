// ─────────────────────────────────────────────────────────────
// SphereTrader Dashboard — API Service
// Connects to the real agent API at localhost:3001
// Falls back to simulation mode when agent is offline
// ─────────────────────────────────────────────────────────────

const API_BASE = 'http://localhost:3001/api';
const POLL_INTERVAL = 3000; // 3 seconds

export interface AgentStatus {
  running: boolean;
  startedAt: number;
  uptime: number;
  loopCount: number;
  wallet: { address: string | null; nametag: string | null; publicKey: string | null };
  treasury: {
    balance: string;
    balanceNumeric: number;
    budgetLimit: number;
    budgetUsed: number;
    budgetRemaining: number;
    utilizationPercent: number;
    currency: string;
    lastUpdated: string;
  } | null;
  activeNegotiations: number;
  tradeHistory: TradeRecord[];
  tradingInterval: number;
}

export interface Activity {
  id: string;
  timestamp: string;
  type: string;
  message: string;
  details?: Record<string, unknown>;
}

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

export interface AgentStats {
  totalTrades: number;
  completedTrades: number;
  totalVolume: string;
  activeNegotiations: number;
  activeIntents: number;
  uptime: number;
  loopCount: number;
}

type Listener = () => void;

class ApiService {
  private _connected = false;
  private _status: AgentStatus | null = null;
  private _activities: Activity[] = [];
  private _stats: AgentStats | null = null;
  private _listeners: Set<Listener> = new Set();
  private _pollTimer: ReturnType<typeof setInterval> | null = null;
  private _simTimer: ReturnType<typeof setInterval> | null = null;
  private _simStartTime = Date.now();
  private _simTradeCount = 0;
  private _simVolume = 0;

  /** Start polling the agent API */
  start(): void {
    this._simStartTime = Date.now();
    this._tryConnect();
    this._pollTimer = setInterval(() => this._tryConnect(), POLL_INTERVAL);
  }

  /** Stop polling */
  stop(): void {
    if (this._pollTimer) clearInterval(this._pollTimer);
    if (this._simTimer) clearInterval(this._simTimer);
  }

  /** Subscribe to state changes */
  subscribe(fn: Listener): () => void {
    this._listeners.add(fn);
    return () => this._listeners.delete(fn);
  }

  get connected(): boolean { return this._connected; }
  get status(): AgentStatus | null { return this._status; }
  get activities(): Activity[] { return this._activities; }
  get stats(): AgentStats | null { return this._stats; }

  private _notify(): void {
    this._listeners.forEach((fn) => fn());
  }

  private async _tryConnect(): Promise<void> {
    try {
      const [statusRes, activityRes, statsRes] = await Promise.all([
        fetch(`${API_BASE}/status`, { signal: AbortSignal.timeout(2000) }),
        fetch(`${API_BASE}/activity?limit=50`, { signal: AbortSignal.timeout(2000) }),
        fetch(`${API_BASE}/stats`, { signal: AbortSignal.timeout(2000) }),
      ]);

      if (statusRes.ok) {
        this._connected = true;
        this._status = await statusRes.json();
        const actData = await activityRes.json();
        this._activities = actData.activities || [];
        this._stats = await statsRes.json();
        if (this._simTimer) {
          clearInterval(this._simTimer);
          this._simTimer = null;
        }
        this._notify();
        return;
      }
    } catch {
      // Agent not reachable — use simulation
    }

    if (!this._connected && !this._simTimer) {
      this._startSimulation();
    }
  }

  /** Generate realistic live simulation data */
  private _startSimulation(): void {
    this._connected = false;
    this._generateSimActivity('system', 'Agent started — SphereTrader v1.0.0 initialized');
    this._generateSimActivity('system', 'Connected to Unicity Sphere testnet-v2');
    this._generateSimActivity('nametag_registered', 'Registered nametag: @spheretrader');
    this._generateSimActivity('balance_update', 'Balance: 4,250.00 UCT');
    this._generateSimActivity('intent_posted', 'Posted buy intent: 100 UCT at price 0.95 USDU');
    this._generateSimActivity('intent_posted', 'Posted sell intent: 100 UCT at price 1.05 USDU');

    const simActions = [
      () => {
        const names = ['@trader42', '@mm_node', '@whale_buyer', '@alpha_bot', '@dex_agent', '@flash_seller', '@escrow_agent', '@node_runner', '@arb_master', '@yield_bot'];
        const name = names[Math.floor(Math.random() * names.length)];
        const amount = Math.floor(Math.random() * 500 + 50);
        const actions = [
          { type: 'dm_received', msg: `Received DM from ${name}: "Interested in your ${amount} UCT buy offer"` },
          { type: 'dm_sent', msg: `Sent counter-offer to ${name}: ${amount} UCT at 0.98 USDU` },
          { type: 'intent_posted', msg: `Refreshed buy intent: ${amount} UCT at ${(0.93 + Math.random() * 0.04).toFixed(2)} USDU` },
          { type: 'intent_posted', msg: `Refreshed sell intent: ${amount} UCT at ${(1.03 + Math.random() * 0.04).toFixed(2)} USDU` },
          { type: 'trade_started', msg: `Trade negotiation started with ${name} for ${amount} UCT` },
          { type: 'balance_update', msg: `Balance: ${(4250 + Math.random() * 200 - 100).toFixed(2)} UCT` },
          { type: 'payment_received', msg: `Incoming transfer from ${name}: ${amount} UCT received` },
        ];
        const action = actions[Math.floor(Math.random() * actions.length)];
        this._generateSimActivity(action.type, action.msg);

        // Occasionally complete a trade
        if (Math.random() < 0.2) {
          this._simTradeCount++;
          const tradeAmount = Math.floor(Math.random() * 300 + 25);
          this._simVolume += tradeAmount;
          this._generateSimActivity('trade_settled', `✅ Trade settled with ${name}: ${tradeAmount} UCT at ${(0.95 + Math.random() * 0.1).toFixed(2)} USDU`);
        }
      },
    ];

    // Fire a new event every 2-5 seconds
    this._simTimer = setInterval(() => {
      simActions[0]();
      this._updateSimStats();
      this._notify();
    }, 2000 + Math.random() * 3000);

    this._updateSimStats();
    this._notify();
  }

  private _generateSimActivity(type: string, message: string): void {
    const activity: Activity = {
      id: `sim_${Date.now()}_${Math.random().toString(36).slice(2, 5)}`,
      timestamp: new Date().toISOString(),
      type,
      message,
    };
    this._activities.unshift(activity);
    if (this._activities.length > 50) this._activities.pop();
  }

  private _updateSimStats(): void {
    const uptime = Date.now() - this._simStartTime;
    this._stats = {
      totalTrades: this._simTradeCount,
      completedTrades: this._simTradeCount,
      totalVolume: this._simVolume.toFixed(2),
      activeNegotiations: Math.floor(Math.random() * 4),
      activeIntents: 4 + Math.floor(Math.random() * 4),
      uptime,
      loopCount: Math.floor(uptime / 60000),
    };
  }
}

export const apiService = new ApiService();
