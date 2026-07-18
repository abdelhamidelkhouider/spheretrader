import React, { useState, useEffect, useCallback } from 'react';
import GlobeVisualization from './components/GlobeVisualization';
import Header from './components/Header';
import StatsCards, { StatCardData } from './components/StatsCards';
import LiveFeed from './components/LiveFeed';
import MarketBrowser from './components/MarketBrowser';
import TradeHistory from './components/TradeHistory';
import AgentConfig from './components/AgentConfig';
import { apiService } from './api';

function formatUptime(ms: number): string {
  const totalSec = Math.floor(ms / 1000);
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = totalSec % 60;
  return `${h}h ${m.toString().padStart(2, '0')}m ${s.toString().padStart(2, '0')}s`;
}

const App: React.FC = () => {
  const [, setTick] = useState(0);
  const refresh = useCallback(() => setTick(t => t + 1), []);

  useEffect(() => {
    apiService.start();
    const unsub = apiService.subscribe(refresh);
    const uptimeTimer = setInterval(() => setTick(t => t + 1), 1000);
    return () => { unsub(); clearInterval(uptimeTimer); apiService.stop(); };
  }, [refresh]);

  const stats = apiService.stats;
  const connected = apiService.connected;

  const statCards: StatCardData[] = [
    { icon: 'trades', value: String(stats?.totalTrades ?? 0), label: 'Total Trades',
      trend: stats ? `+${stats.completedTrades} settled` : 'initializing...', trendDir: (stats?.completedTrades ?? 0) > 0 ? 'up' : undefined, accent: 'cyan' },
    { icon: 'volume', value: stats?.totalVolume ?? '0.00', label: 'Volume (UCT)',
      trend: stats ? `${stats.loopCount} loops` : 'scanning...', trendDir: parseFloat(stats?.totalVolume ?? '0') > 0 ? 'up' : undefined, accent: 'emerald' },
    { icon: 'intents', value: String(stats?.activeIntents ?? 0), label: 'Active Intents',
      trend: stats ? `${stats.activeNegotiations} negotiating` : 'posting...', accent: 'purple' },
    { icon: 'uptime', value: formatUptime(stats?.uptime ?? 0), label: 'Agent Uptime', accent: 'amber' },
  ];

  return (
    <>
      {/* Gradient mesh background */}
      <div className="gradient-mesh">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="orb orb-4" />
      </div>

      {/* Grid overlay */}
      <div className="grid-overlay" />

      <Header agentOnline={true} connected={connected} />

      <main className="dashboard">
        {/* Hero Section with 3D Globe */}
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-label">
              <span className="dot" />
              AUTONOMOUS AGENT ACTIVE
            </div>
            <h1 className="hero-title">
              Trading the<br />Machine Economy
            </h1>
            <p className="hero-desc">
              SphereTrader autonomously discovers, negotiates, and settles trades
              on the Unicity Sphere network — zero human intervention.
            </p>
            <div className="hero-stats">
              <div className="hero-stat-item">
                <div className="hero-stat-value">{stats?.totalTrades ?? 0}</div>
                <div className="hero-stat-label">Trades</div>
              </div>
              <div className="hero-stat-item">
                <div className="hero-stat-value">{stats?.activeIntents ?? 0}</div>
                <div className="hero-stat-label">Intents</div>
              </div>
              <div className="hero-stat-item">
                <div className="hero-stat-value" style={{ color: 'var(--emerald)' }}>
                  {connected ? 'Live' : 'Sim'}
                </div>
                <div className="hero-stat-label">Status</div>
              </div>
            </div>
          </div>
          <div className="hero-globe">
            <GlobeVisualization />
          </div>
        </section>

        <StatsCards stats={statCards} />

        <div className="main-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <LiveFeed activities={apiService.activities} />
            <MarketBrowser />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <TradeHistory />
            <AgentConfig connected={connected} />
          </div>
        </div>

        <footer className="footer">
          <span className="gradient-text">SPHERETRADER</span>
          &nbsp;&nbsp;·&nbsp;&nbsp; Autonomous Market Maker
          &nbsp;&nbsp;·&nbsp;&nbsp;
          <a href="https://unicity.network" target="_blank" rel="noopener noreferrer">Unicity Sphere</a>
          &nbsp;&nbsp;·&nbsp;&nbsp;
          {connected
            ? <span style={{ color: 'var(--emerald)' }}>● API CONNECTED</span>
            : <span style={{ color: 'var(--amber)' }}>◌ SIMULATION MODE</span>
          }
        </footer>
      </main>
    </>
  );
};

export default App;
