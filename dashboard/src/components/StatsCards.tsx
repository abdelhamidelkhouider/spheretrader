import React from 'react';

interface StatCardData {
  icon: string;
  value: string;
  label: string;
  trend?: string;
  trendDir?: 'up' | 'down';
  accent: 'cyan' | 'purple' | 'emerald' | 'amber';
}

interface StatsCardsProps {
  stats: StatCardData[];
}

const StatsCards: React.FC<StatsCardsProps> = ({ stats }) => {
  return (
    <div className="stats-row animate-in">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="glass-card stat-card"
          style={{ animationDelay: `${i * 0.08}s` }}
        >
          <div className="stat-card-header">
            <div className={`stat-icon ${stat.accent}`}>{stat.icon}</div>
            {stat.trend && (
              <span className={`stat-trend ${stat.trendDir ?? 'up'}`}>
                {stat.trendDir === 'down' ? '▼' : '▲'} {stat.trend}
              </span>
            )}
          </div>
          <div className="stat-value">{stat.value}</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
export type { StatCardData };
