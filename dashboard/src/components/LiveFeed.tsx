import React, { useEffect, useRef } from 'react';
import { Activity, Settings, FileText, MessageSquare, Send, CheckCircle, DollarSign, Wallet, Tag, AlertCircle } from 'lucide-react';
import type { Activity as ActivityType } from '../api';

const TYPE_CONFIG: Record<string, { icon: React.ReactNode; color: string }> = {
  system: { icon: <Settings size={14} />, color: '#484d6e' },
  intent_posted: { icon: <FileText size={14} />, color: '#00e5ff' },
  dm_received: { icon: <MessageSquare size={14} />, color: '#22d3ee' },
  dm_sent: { icon: <Send size={14} />, color: '#c084fc' },
  trade_started: { icon: <Activity size={14} />, color: '#ffab00' },
  trade_settled: { icon: <CheckCircle size={14} />, color: '#00e676' },
  payment_sent: { icon: <DollarSign size={14} />, color: '#ffab00' },
  payment_received: { icon: <Wallet size={14} />, color: '#00e676' },
  balance_update: { icon: <Wallet size={14} />, color: '#00e5ff' },
  nametag_registered: { icon: <Tag size={14} />, color: '#c084fc' },
  error: { icon: <AlertCircle size={14} />, color: '#ff1744' },
};

interface Props { activities: ActivityType[]; }

const LiveFeed: React.FC<Props> = ({ activities }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const prevCount = useRef(0);

  useEffect(() => {
    if (activities.length > prevCount.current && scrollRef.current) scrollRef.current.scrollTop = 0;
    prevCount.current = activities.length;
  }, [activities.length]);

  const formatTime = (ts: string) => new Date(ts).toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });

  return (
    <div className="card" style={{ minHeight: 400 }}>
      <div className="card-header">
        <h2 className="card-title"><Activity size={16} /> LIVE FEED</h2>
        <span className="badge badge-live"><span style={{ width: 5, height: 5, borderRadius: '50%', background: '#ff1744', boxShadow: '0 0 8px #ff1744' }} /> LIVE</span>
      </div>
      <div ref={scrollRef} className="feed-scroll">
        {activities.length === 0 ? (
          <div style={{ padding: 40, textAlign: 'center', color: 'var(--text-muted)', fontFamily: "'JetBrains Mono', monospace", fontSize: 12 }}>
            Awaiting agent telemetry...
          </div>
        ) : activities.map((act, i) => {
          const cfg = TYPE_CONFIG[act.type] || { icon: <Activity size={14} />, color: '#484d6e' };
          return (
            <div key={act.id} className={`feed-item ${i === 0 ? 'newest' : ''}`}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <span style={{ color: cfg.color, flexShrink: 0, marginTop: 2, filter: `drop-shadow(0 0 4px ${cfg.color}40)` }}>
                  {cfg.icon}
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: cfg.color, lineHeight: 1.5, wordBreak: 'break-word' }}>
                    {act.message}
                  </div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: 'var(--text-muted)', marginTop: 3, opacity: 0.5 }}>
                    {formatTime(act.timestamp)}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LiveFeed;
