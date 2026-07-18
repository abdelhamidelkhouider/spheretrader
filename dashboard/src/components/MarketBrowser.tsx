import React, { useEffect, useState } from 'react';
import { Search, Globe, ArrowUpRight, ArrowDownRight, Briefcase, Clock, User, Star } from 'lucide-react';

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

const MOCK_INTENTS: MarketIntent[] = [
  {
    id: 'int-a1b2c3', type: 'buy',
    description: 'Looking to buy 500 UCT tokens at market rate. Immediate settlement preferred.',
    price: '0.96', currency: 'USDU', agent: '@spheretrader',
    created: '2026-07-11T04:10:00Z', score: 0.98,
  },
  {
    id: 'int-d4e5f6', type: 'sell',
    description: 'Selling 200 UCT tokens. Willing to negotiate on quantity.',
    price: '1.04', currency: 'USDU', agent: '@alphadealer',
    created: '2026-07-11T03:55:00Z', score: 0.94,
  },
  {
    id: 'int-g7h8i9', type: 'service',
    description: 'Offering OTC market-making service for UCT/USDU pairs. Low spread, fast settlement.',
    price: '0.5%', currency: 'spread', agent: '@mm_node',
    created: '2026-07-11T03:30:00Z', score: 0.91,
  },
  {
    id: 'int-j1k2l3', type: 'buy',
    description: 'Bid for 1,000 UCT — bulk purchase. Looking for best offer.',
    price: '0.94', currency: 'USDU', agent: '@whale_buyer',
    created: '2026-07-11T02:45:00Z', score: 0.89,
  },
];

function fmtDate(iso?: string): string {
  if (!iso) return '—';
  try {
    const d = new Date(iso);
    return d.toLocaleString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false });
  } catch {
    return iso;
  }
}

const MarketBrowser: React.FC = () => {
  const [intents, setIntents] = useState<MarketIntent[]>(MOCK_INTENTS);
  const [source, setSource] = useState<'api' | 'mock'>('mock');

  useEffect(() => {
    // Keeping this simple for the cinematic demo
    setIntents(MOCK_INTENTS);
    setSource('mock');
  }, []);

  const TypeIcon = ({ type }: { type: string }) => {
    if (type === 'buy') return <ArrowUpRight size={12} />;
    if (type === 'sell') return <ArrowDownRight size={12} />;
    if (type === 'service') return <Briefcase size={12} />;
    return <Search size={12} />;
  };

  return (
    <div className="card" style={{ minHeight: 400 }}>
      <div className="card-header">
        <h2 className="card-title"><Search size={16} /> MARKET INTENT BROWSER</h2>
        <span className="badge" style={{ background: 'rgba(255,171,0,0.1)', borderColor: 'rgba(255,171,0,0.2)', color: 'var(--amber)' }}>
          <Globe size={11} style={{ marginRight: 4 }} /> DEMO DATA
        </span>
      </div>
      <div className="feed-scroll">
        {intents.map((intent, i) => (
          <div key={intent.id} className="feed-item" style={{ borderLeft: `2px solid ${intent.type === 'buy' ? 'var(--emerald)' : intent.type === 'sell' ? 'var(--red)' : 'var(--purple)'}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, alignItems: 'center' }}>
              <span className={`side-badge ${intent.type}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                <TypeIcon type={intent.type} /> {intent.type.toUpperCase()}
              </span>
              {intent.price && (
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.85rem', color: '#fff', fontWeight: 600 }}>
                  {intent.price} <span style={{ color: 'var(--text-muted)' }}>{intent.currency}</span>
                </span>
              )}
            </div>
            <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', marginBottom: 12, lineHeight: 1.4 }}>
              {intent.description}
            </div>
            <div style={{ display: 'flex', gap: 16, fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: "'JetBrains Mono', monospace" }}>
              {intent.agent && <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><User size={10} /> {intent.agent}</span>}
              {intent.created && <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Clock size={10} /> {fmtDate(intent.created)}</span>}
              {intent.score && <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'var(--cyan)' }}><Star size={10} /> {intent.score}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketBrowser;
