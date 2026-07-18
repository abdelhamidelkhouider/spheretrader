import React from 'react';
import { Settings, Tag, ArrowLeftRight, TrendingDown, TrendingUp, Percent, BarChart2, Briefcase, Timer, Globe, Link } from 'lucide-react';

interface Props { connected?: boolean; }

const AgentConfig: React.FC<Props> = ({ connected }) => {
  const config = [
    { label: 'Agent Nametag', value: '@spheretrader', icon: <Tag size={15} /> },
    { label: 'Trading Pair', value: 'UCT / USDU', icon: <ArrowLeftRight size={15} /> },
    { label: 'Buy Price', value: '0.95 USDU', icon: <TrendingDown size={15} /> },
    { label: 'Sell Price', value: '1.05 USDU', icon: <TrendingUp size={15} /> },
    { label: 'Spread', value: '10.5%', icon: <Percent size={15} /> },
    { label: 'Max Trade', value: '1,000 UCT', icon: <BarChart2 size={15} /> },
    { label: 'Budget Limit', value: '10,000 UCT', icon: <Briefcase size={15} /> },
    { label: 'Trading Interval', value: '60 seconds', icon: <Timer size={15} /> },
    { label: 'Network', value: 'Testnet v2', icon: <Globe size={15} /> },
    { label: 'Settlement', value: 'Sphere Payments', icon: <Link size={15} /> },
  ];

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title"><Settings size={16} /> CONFIGURATION</h2>
        <span className="badge" style={{
          background: connected ? 'rgba(0,230,118,0.06)' : 'rgba(255,171,0,0.06)',
          borderColor: connected ? 'rgba(0,230,118,0.2)' : 'rgba(255,171,0,0.2)',
          color: connected ? 'var(--emerald)' : 'var(--amber)',
        }}>
          {connected ? 'LIVE' : 'DEMO'}
        </span>
      </div>
      <div style={{ display: 'grid', gap: 4 }}>
        {config.map(item => (
          <div key={item.label} className="config-row">
            <span className="config-label">{item.icon} {item.label}</span>
            <span className="config-value">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentConfig;
