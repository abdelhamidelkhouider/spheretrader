import React, { useRef, useCallback } from 'react';
import { TrendingUp, Coins, Radio, Clock } from 'lucide-react';
import MiniChart from './MiniChart';

export interface StatCardData {
  icon: string;
  value: string;
  label: string;
  trend?: string;
  trendDir?: 'up' | 'down';
  accent: 'cyan' | 'emerald' | 'purple' | 'amber';
}

const ICON_MAP: Record<string, React.ReactNode> = {
  trades: <TrendingUp size={20} />,
  volume: <Coins size={20} />,
  intents: <Radio size={20} />,
  uptime: <Clock size={20} />,
};

const COLORS: Record<string, string> = {
  cyan: '#00e5ff',
  emerald: '#00e676',
  purple: '#7c4dff',
  amber: '#ffab00',
};

interface Props { stats: StatCardData[]; }

const StatCard: React.FC<{ data: StatCardData; iconKey: string }> = ({ data, iconKey }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    cardRef.current.style.transform = `perspective(600px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-4px)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (cardRef.current) cardRef.current.style.transform = '';
  }, []);

  return (
    <div
      ref={cardRef}
      className={`stat-card accent-${data.accent}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="stat-card-header">
        <div className="stat-icon-wrap" style={{ color: COLORS[data.accent] }}>
          {ICON_MAP[iconKey] || <TrendingUp size={20} />}
        </div>
        <MiniChart color={COLORS[data.accent]} width={90} height={32} />
      </div>
      <div className="stat-value">{data.value}</div>
      <div className="stat-label">{data.label}</div>
      <div className="stat-footer">
        {data.trend && (
          <span className={`stat-trend ${data.trendDir === 'up' ? 'up' : 'neutral'}`}>
            {data.trendDir === 'up' && <TrendingUp size={11} />}
            {data.trend}
          </span>
        )}
      </div>
    </div>
  );
};

const KEYS = ['trades', 'volume', 'intents', 'uptime'];

const StatsCards: React.FC<Props> = ({ stats }) => (
  <div className="stats-row">
    {stats.map((s, i) => <StatCard key={i} data={s} iconKey={KEYS[i]} />)}
  </div>
);

export default StatsCards;
