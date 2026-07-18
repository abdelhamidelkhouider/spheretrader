import React from 'react';
import { Zap, Wifi, WifiOff, Globe, Shield } from 'lucide-react';

interface Props {
  agentOnline: boolean;
  connected?: boolean;
}

const Header: React.FC<Props> = ({ agentOnline, connected }) => (
  <header className="header">
    <div className="header-left">
      <div className="logo">
        <div className="logo-icon">
          <Zap size={18} />
        </div>
        <span className="logo-text">SphereTrader</span>
      </div>
      <span className="header-subtitle">Autonomous Market Maker</span>
    </div>
    <div className="header-right">
      <span className={`badge ${agentOnline ? 'badge-online' : ''}`}>
        <span style={{
          width: 7, height: 7, borderRadius: '50%',
          background: agentOnline ? 'var(--emerald)' : 'var(--red)',
          boxShadow: agentOnline ? '0 0 8px var(--emerald)' : undefined,
          animation: agentOnline ? 'pulse 2s infinite' : undefined,
        }} />
        {agentOnline ? 'AGENT ONLINE' : 'OFFLINE'}
      </span>
      {connected !== undefined && (
        <span className="badge" style={{
          background: connected ? 'rgba(0,230,118,0.06)' : 'rgba(255,171,0,0.06)',
          borderColor: connected ? 'rgba(0,230,118,0.2)' : 'rgba(255,171,0,0.2)',
          color: connected ? 'var(--emerald)' : 'var(--amber)',
        }}>
          {connected ? <Wifi size={11} /> : <WifiOff size={11} />}
          {connected ? 'API LIVE' : 'SIMULATION'}
        </span>
      )}
      <span className="badge badge-network"><Globe size={11} /> TESTNET V2</span>
      <span className="badge badge-brand"><Shield size={11} /> UNICITY</span>
    </div>
  </header>
);

export default Header;
