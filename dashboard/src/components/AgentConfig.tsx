import React from 'react';

interface ConfigEntry {
  label: string;
  value: string;
  highlight?: boolean;
}

const CONFIG: ConfigEntry[] = [
  { label: 'Agent Nametag',       value: '@spheretrader',    highlight: true },
  { label: 'Trading Pair',        value: 'UCT / USDU',      highlight: true },
  { label: 'Buy Price (max)',     value: '0.97 USDU' },
  { label: 'Sell Price (min)',    value: '1.03 USDU' },
  { label: 'Spread',             value: '6.19%' },
  { label: 'Max Trade Size',     value: '1,000 UCT' },
  { label: 'Min Trade Size',     value: '10 UCT' },
  { label: 'Budget Limit',       value: '10,000 USDU' },
  { label: 'Budget Used',        value: '2,347.50 USDU' },
  { label: 'Active Strategies',  value: 'MM · DCA · Arb',   highlight: true },
  { label: 'Auto-Negotiate',     value: 'Enabled ✓',        highlight: true },
  { label: 'Settlement Mode',    value: 'Instant (Sphere)' },
  { label: 'Risk Level',         value: 'Conservative' },
  { label: 'Network',            value: 'Sphere Testnet v2' },
];

const AgentConfig: React.FC = () => {
  return (
    <div className="glass-card panel animate-in" style={{ animationDelay: '0.4s' }}>
      <div className="panel-header">
        <h3 className="panel-title">⚙️ Agent Configuration</h3>
        <span className="badge badge-network" style={{ fontSize: '0.65rem' }}>Read-only</span>
      </div>
      <div className="panel-body">
        <div className="config-grid">
          {CONFIG.map((entry, i) => (
            <div key={i} className="config-row">
              <span className="config-label">{entry.label}</span>
              <span className={`config-value ${entry.highlight ? 'highlight' : ''}`}>
                {entry.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgentConfig;
