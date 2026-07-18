import React, { useEffect, useRef } from 'react';
import type { Activity } from '../api';

const TYPE_CONFIG: Record<string, { icon: string; color: string }> = {
  system: { icon: '⚙', color: '#5a6088' },
  intent_posted: { icon: '◈', color: '#00e5ff' },
  dm_received: { icon: '◄', color: '#22d3ee' },
  dm_sent: { icon: '►', color: '#c084fc' },
  trade_started: { icon: '⬡', color: '#ffab00' },
  trade_settled: { icon: '✦', color: '#00e676' },
  payment_sent: { icon: '↗', color: '#ffab00' },
  payment_received: { icon: '↙', color: '#00e676' },
  balance_update: { icon: '◇', color: '#00e5ff' },
  nametag_registered: { icon: '⊕', color: '#c084fc' },
  error: { icon: '✕', color: '#ff1744' },
};

interface Props {
  activities: Activity[];
}

const LiveFeed: React.FC<Props> = ({ activities }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const prevCount = useRef(0);

  useEffect(() => {
    if (activities.length > prevCount.current && scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
    prevCount.current = activities.length;
  }, [activities.length]);

  const formatTime = (ts: string) => {
    const d = new Date(ts);
    return d.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };

  return (
    <div className="card" style={{ minHeight: 400 }}>
      <div className="card-header">
        <h2 className="card-title">◉ LIVE FEED</h2>
        <span className="badge-live badge">● LIVE</span>
      </div>
      <div ref={scrollRef} className="feed-scroll">
        {activities.length === 0 ? (
          <div style={{ padding: 40, textAlign: 'center', color: 'var(--text-muted)', fontFamily: "'JetBrains Mono', monospace", fontSize: 12 }}>
            {'>'} AWAITING AGENT TELEMETRY...
          </div>
        ) : (
          activities.map((act, i) => {
            const cfg = TYPE_CONFIG[act.type] || { icon: '●', color: '#5a6088' };
            return (
              <div
                key={act.id}
                className={`feed-item ${i === 0 ? 'newest' : ''}`}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 14,
                    color: cfg.color,
                    textShadow: `0 0 8px ${cfg.color}40`,
                    flexShrink: 0,
                    marginTop: 1,
                    width: 16,
                    textAlign: 'center',
                  }}>
                    {cfg.icon}
                  </span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 12,
                      color: cfg.color,
                      lineHeight: 1.5,
                      wordBreak: 'break-word',
                      textShadow: act.type === 'trade_settled' ? `0 0 10px ${cfg.color}30` : undefined,
                    }}>
                      {act.message}
                    </div>
                    <div style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 10,
                      color: 'var(--text-muted)',
                      marginTop: 4,
                      opacity: 0.5,
                    }}>
                      {formatTime(act.timestamp)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default LiveFeed;
