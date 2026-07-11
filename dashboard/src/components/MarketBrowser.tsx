import React, { useEffect, useState } from 'react';

interface MarketIntent {
  id: string;
  type: 'buy' | 'sell' | 'service' | 'unknown';
  description: string;
  price?: string;
  currency?: string;
  agent?: string;
  created?: string;
  score?: number;
}

/* ── Mock data used as fallback when the API is unreachable ── */
const MOCK_INTENTS: MarketIntent[] = [
  {
    id: 'int-a1b2c3',
    type: 'buy',
    description: 'Looking to buy 500 UCT tokens at market rate. Immediate settlement preferred.',
    price: '0.96',
    currency: 'USDU',
    agent: '@spheretrader',
    created: '2026-07-11T04:10:00Z',
    score: 0.98,
  },
  {
    id: 'int-d4e5f6',
    type: 'sell',
    description: 'Selling 200 UCT tokens. Willing to negotiate on quantity.',
    price: '1.04',
    currency: 'USDU',
    agent: '@alphadealer',
    created: '2026-07-11T03:55:00Z',
    score: 0.94,
  },
  {
    id: 'int-g7h8i9',
    type: 'service',
    description: 'Offering OTC market-making service for UCT/USDU pairs. Low spread, fast settlement.',
    price: '0.5%',
    currency: 'spread',
    agent: '@mm_node',
    created: '2026-07-11T03:30:00Z',
    score: 0.91,
  },
  {
    id: 'int-j1k2l3',
    type: 'buy',
    description: 'Bid for 1,000 UCT — bulk purchase. Looking for best offer.',
    price: '0.94',
    currency: 'USDU',
    agent: '@whale_buyer',
    created: '2026-07-11T02:45:00Z',
    score: 0.89,
  },
  {
    id: 'int-m4n5o6',
    type: 'sell',
    description: 'Liquidating 750 UCT position. Accepting bids above 1.01 USDU.',
    price: '1.01',
    currency: 'USDU',
    agent: '@node_runner',
    created: '2026-07-11T02:20:00Z',
    score: 0.87,
  },
  {
    id: 'int-p7q8r9',
    type: 'buy',
    description: 'Recurring weekly buy order: 100 UCT at ≤ 0.97.',
    price: '0.97',
    currency: 'USDU',
    agent: '@dca_bot',
    created: '2026-07-11T01:10:00Z',
    score: 0.84,
  },
  {
    id: 'int-s1t2u3',
    type: 'service',
    description: 'Escrow service for large UCT trades. Fee: 0.3%. Trustless settlement via Sphere.',
    price: '0.3%',
    currency: 'fee',
    agent: '@escrow_agent',
    created: '2026-07-10T23:50:00Z',
    score: 0.81,
  },
  {
    id: 'int-v4w5x6',
    type: 'sell',
    description: 'Flash sale — 300 UCT at 1.00 flat. First come, first served.',
    price: '1.00',
    currency: 'USDU',
    agent: '@flash_seller',
    created: '2026-07-10T22:15:00Z',
    score: 0.78,
  },
];

const TYPE_CLASS: Record<string, string> = {
  buy: 'buy',
  sell: 'sell',
  service: 'service',
  unknown: 'unknown',
};

function fmtDate(iso?: string): string {
  if (!iso) return '—';
  try {
    const d = new Date(iso);
    return d.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
  } catch {
    return iso;
  }
}

const MarketBrowser: React.FC = () => {
  const [intents, setIntents] = useState<MarketIntent[]>([]);
  const [loading, setLoading] = useState(true);
  const [source, setSource] = useState<'api' | 'mock'>('mock');

  useEffect(() => {
    let cancelled = false;

    async function fetchIntents() {
      try {
        // Try the search endpoint first
        const res = await fetch('https://market-api.unicity.network/api/search', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query: 'tokens', limit: 10 }),
          signal: AbortSignal.timeout(6000),
        });

        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();

        if (!cancelled && Array.isArray(data) && data.length > 0) {
          const mapped: MarketIntent[] = data.map((item: any, idx: number) => ({
            id: item.id ?? item.intent_id ?? `api-${idx}`,
            type: detectType(item),
            description: item.description ?? item.content ?? item.text ?? JSON.stringify(item).slice(0, 120),
            price: item.price ?? item.amount ?? undefined,
            currency: item.currency ?? 'UCT',
            agent: item.agent ?? item.sender ?? item.author ?? undefined,
            created: item.created_at ?? item.timestamp ?? undefined,
            score: item.score ?? undefined,
          }));
          setIntents(mapped);
          setSource('api');
          setLoading(false);
          return;
        }
      } catch {
        // Try the feed endpoint as fallback
        try {
          const res2 = await fetch('https://market-api.unicity.network/api/feed/recent', {
            signal: AbortSignal.timeout(6000),
          });
          if (!res2.ok) throw new Error(`HTTP ${res2.status}`);
          const data2 = await res2.json();
          if (!cancelled && Array.isArray(data2) && data2.length > 0) {
            const mapped: MarketIntent[] = data2.slice(0, 10).map((item: any, idx: number) => ({
              id: item.id ?? `feed-${idx}`,
              type: detectType(item),
              description: item.description ?? item.content ?? item.text ?? JSON.stringify(item).slice(0, 120),
              price: item.price ?? item.amount ?? undefined,
              currency: item.currency ?? 'UCT',
              agent: item.agent ?? item.sender ?? item.author ?? undefined,
              created: item.created_at ?? item.timestamp ?? undefined,
              score: undefined,
            }));
            setIntents(mapped);
            setSource('api');
            setLoading(false);
            return;
          }
        } catch {
          // fall through to mock data
        }
      }

      // Fallback: use mock data
      if (!cancelled) {
        setIntents(MOCK_INTENTS);
        setSource('mock');
        setLoading(false);
      }
    }

    fetchIntents();
    return () => { cancelled = true; };
  }, []);

  return (
    <div className="glass-card panel animate-in" style={{ animationDelay: '0.2s' }}>
      <div className="panel-header">
        <h3 className="panel-title">🌐 Market Intent Browser</h3>
        <span className={`badge ${source === 'api' ? 'badge-online' : 'badge-amber'}`} style={{ fontSize: '0.65rem' }}>
          {source === 'api' ? '● API Connected' : '◌ Sample Data'}
        </span>
      </div>
      <div className="panel-body">
        {loading ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="skeleton" style={{ height: 72, width: '100%' }} />
            ))}
          </div>
        ) : intents.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-icon">📭</div>
            <div className="empty-state-text">No intents found on the market.</div>
          </div>
        ) : (
          <div className="market-list">
            {intents.map((intent, i) => (
              <div
                key={intent.id}
                className="market-item"
                style={{ '--i': i } as React.CSSProperties}
              >
                <div className="market-item-top">
                  <span className={`market-type ${TYPE_CLASS[intent.type] ?? 'unknown'}`}>
                    {intent.type.toUpperCase()}
                  </span>
                  {intent.price && (
                    <span className="market-price">
                      {intent.price} {intent.currency}
                    </span>
                  )}
                </div>
                <div className="market-desc">{intent.description}</div>
                <div className="market-meta">
                  {intent.agent && <span>👤 {intent.agent}</span>}
                  {intent.created && <span>🕒 {fmtDate(intent.created)}</span>}
                  {intent.score !== undefined && (
                    <span style={{ color: 'var(--cyan)' }}>
                      ★ {intent.score.toFixed(2)}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

function detectType(item: any): 'buy' | 'sell' | 'service' | 'unknown' {
  const text = JSON.stringify(item).toLowerCase();
  if (text.includes('buy') || text.includes('bid') || text.includes('purchase')) return 'buy';
  if (text.includes('sell') || text.includes('ask') || text.includes('offer') || text.includes('liquidat')) return 'sell';
  if (text.includes('service') || text.includes('escrow') || text.includes('otc')) return 'service';
  return 'unknown';
}

export default MarketBrowser;
