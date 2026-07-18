import React, { useState, useEffect, useCallback } from 'react';
import GlobeVisualization from './components/GlobeVisualization';
import Header from './components/Header';
import StatsCards, { StatCardData } from './components/StatsCards';
import LiveFeed from './components/LiveFeed';
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
      <Header agentOnline={true} connected={connected} />

      {/* ═══ CINEMATIC HERO ═══ */}
      <section className="hero">
        {/* Background layers */}
        <div className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1920&q=80"
            alt=""
            className="hero-bg-img"
          />
          <div className="hero-gradient-overlay" />
          <div className="hero-noise" />
        </div>

        {/* 3D Globe */}
        <div className="hero-globe-container">
          <GlobeVisualization />
        </div>

        {/* Content */}
        <div className="hero-inner">
          <div className="hero-badge">
            <span className="hero-dot" /> AUTONOMOUS AGENT — LIVE ON TESTNET V2
          </div>
          <h1 className="hero-title">
            SPHERE<br />
            <span className="hero-title-accent">TRADER</span>
          </h1>
          <p className="hero-desc">
            Autonomous AI market maker — discovers, negotiates, and settles trades
            on the Unicity Sphere network with zero human intervention.
          </p>
          <div className="hero-metrics">
            <div className="hero-metric">
              <span className="hero-metric-val">{stats?.totalTrades ?? 0}</span>
              <span className="hero-metric-label">TRADES</span>
            </div>
            <div className="hero-metric-divider" />
            <div className="hero-metric">
              <span className="hero-metric-val">{stats?.activeIntents ?? 0}</span>
              <span className="hero-metric-label">INTENTS</span>
            </div>
            <div className="hero-metric-divider" />
            <div className="hero-metric">
              <span className="hero-metric-val" style={{ color: 'var(--emerald)' }}>
                {connected ? 'LIVE' : 'SIM'}
              </span>
              <span className="hero-metric-label">STATUS</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FEATURES STRIP ═══ */}
      <section className="features-strip">
        {[
          { img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80', title: 'Peer-to-Peer DMs', desc: 'Negotiate trades via encrypted direct messaging' },
          { img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80', title: 'Autonomous Settlement', desc: 'Payments execute automatically on-chain' },
          { img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80', title: 'Market Scanning', desc: 'Discovers and matches intents at machine speed' },
          { img: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80', title: 'SDK Primitives', desc: 'Built on all 6 Sphere SDK modules' },
        ].map((f, i) => (
          <div key={i} className="feature-card">
            <img src={f.img} alt={f.title} className="feature-card-img" />
            <div className="feature-card-overlay" />
            <div className="feature-card-content">
              <h3 className="feature-card-title">{f.title}</h3>
              <p className="feature-card-desc">{f.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* ═══ DASHBOARD ═══ */}
      <main className="dashboard">
        <div className="section-header">
          <h2 className="section-title">LIVE DASHBOARD</h2>
          <div className="section-line" />
        </div>

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
        </footer>
      </main>
    </>
  );
};

export default App;
