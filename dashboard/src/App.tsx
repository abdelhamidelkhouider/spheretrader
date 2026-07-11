import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import StatsCards, { StatCardData } from './components/StatsCards';
import LiveFeed from './components/LiveFeed';
import MarketBrowser from './components/MarketBrowser';
import TradeHistory from './components/TradeHistory';
import AgentConfig from './components/AgentConfig';

function formatUptime(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return `${h}h ${m.toString().padStart(2, '0')}m ${s.toString().padStart(2, '0')}s`;
}

const App: React.FC = () => {
  const [uptime, setUptime] = useState(7342); // ~2 hours of uptime

  useEffect(() => {
    const interval = setInterval(() => {
      setUptime((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const stats: StatCardData[] = [
    {
      icon: '📈',
      value: '48',
      label: 'Total Trades',
      trend: '+12 today',
      trendDir: 'up',
      accent: 'cyan',
    },
    {
      icon: '💰',
      value: '2,347.50',
      label: 'Volume (USDU)',
      trend: '+18.4%',
      trendDir: 'up',
      accent: 'emerald',
    },
    {
      icon: '📡',
      value: '6',
      label: 'Active Intents',
      trend: '3 buy · 3 sell',
      accent: 'purple',
    },
    {
      icon: '⏱️',
      value: formatUptime(uptime),
      label: 'Agent Uptime',
      accent: 'amber',
    },
  ];

  return (
    <>
      <Header agentOnline={true} />

      <main className="dashboard">
        <StatsCards stats={stats} />

        <div className="main-grid">
          {/* Left Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <LiveFeed />
            <MarketBrowser />
          </div>

          {/* Right Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <TradeHistory />
            <AgentConfig />
          </div>
        </div>

        <footer className="footer">
          <strong className="gradient-text">SphereTrader</strong> — Autonomous Market Maker
          &nbsp;·&nbsp; Built for the{' '}
          <a href="https://unicity.network" target="_blank" rel="noopener noreferrer">
            Unicity Sphere Hackathon
          </a>
          &nbsp;·&nbsp; Powered by{' '}
          <a href="https://alphabill.org" target="_blank" rel="noopener noreferrer">
            Alphabill
          </a>
        </footer>
      </main>
    </>
  );
};

export default App;
