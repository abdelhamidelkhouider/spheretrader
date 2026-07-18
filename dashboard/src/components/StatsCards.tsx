import React, { useRef, useCallback } from 'react';

export interface StatCardData {
  icon: string;
  value: string;
  label: string;
  trend?: string;
  trendDir?: 'up' | 'down';
  accent: 'cyan' | 'emerald' | 'purple' | 'amber';
}

interface Props {
  stats: StatCardData[];
}

const StatCard: React.FC<{ data: StatCardData }> = ({ data }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    cardRef.current.style.transform = `perspective(600px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) translateY(-4px)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(600px) rotateY(0deg) rotateX(0deg) translateY(0)';
  }, []);

  return (
    <div
      ref={cardRef}
      className={`stat-card accent-${data.accent}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: 'transform 0.15s ease-out, border-color 0.4s, box-shadow 0.4s' }}
    >
      <div className="stat-icon">{data.icon}</div>
      <div className="stat-value" style={{ animation: 'counter-glow 3s ease-in-out infinite' }}>
        {data.value}
      </div>
      <div className="stat-label">{data.label}</div>
      {data.trend && (
        <span className={`stat-trend ${data.trendDir === 'up' ? 'up' : 'neutral'}`}>
          {data.trendDir === 'up' ? '▲ ' : ''}{data.trend}
        </span>
      )}
    </div>
  );
};

const StatsCards: React.FC<Props> = ({ stats }) => (
  <div className="stats-row">
    {stats.map((s, i) => (
      <StatCard key={i} data={s} />
    ))}
  </div>
);

export default StatsCards;
