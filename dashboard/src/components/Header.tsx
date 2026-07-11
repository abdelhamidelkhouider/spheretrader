import React from 'react';

interface HeaderProps {
  agentOnline: boolean;
}

const Header: React.FC<HeaderProps> = ({ agentOnline }) => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="header-logo">
          <div className="header-logo-icon">⚡</div>
          <h1 className="header-title">
            <span className="gradient-text">SphereTrader</span>
          </h1>
        </div>
        <span
          style={{
            fontSize: '0.72rem',
            color: 'var(--text-muted)',
            fontWeight: 500,
            letterSpacing: '0.03em',
          }}
        >
          Autonomous Market Maker
        </span>
      </div>

      <div className="header-right">
        <span className={`badge ${agentOnline ? 'badge-online' : 'badge-offline'}`}>
          <span className="pulse-dot" />
          {agentOnline ? 'Agent Online' : 'Agent Offline'}
        </span>
        <span className="badge badge-network">◆ Testnet v2</span>
        <span
          className="badge badge-info"
          style={{ fontSize: '0.68rem' }}
        >
          Built on Unicity
        </span>
      </div>
    </header>
  );
};

export default Header;
