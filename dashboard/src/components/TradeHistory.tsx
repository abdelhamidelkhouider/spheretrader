import React, { useState, useEffect } from 'react';
import { BarChart3, ArrowUpRight, ArrowDownRight, CheckCircle, Clock, XCircle } from 'lucide-react';

interface SimTrade {
  id: string; counterparty: string; side: 'buy' | 'sell';
  amount: number; price: number; status: 'completed' | 'pending' | 'failed'; time: string;
}

const AGENTS = ['@node_runner','@trader42','@mm_node','@whale_buyer','@alpha_bot','@dex_agent','@flash_seller','@escrow_agent','@arb_master','@yield_bot'];

function randomTrade(id: number): SimTrade {
  return {
    id: `#${48000 + id}`,
    counterparty: AGENTS[Math.floor(Math.random() * AGENTS.length)],
    side: Math.random() > 0.5 ? 'buy' : 'sell',
    amount: Math.floor(Math.random() * 900 + 50),
    price: parseFloat((0.9 + Math.random() * 0.2).toFixed(2)),
    status: Math.random() > 0.85 ? (Math.random() > 0.5 ? 'pending' : 'failed') : 'completed',
    time: new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }),
  };
}

const TradeHistory: React.FC = () => {
  const [trades, setTrades] = useState<SimTrade[]>(() => Array.from({ length: 8 }, (_, i) => randomTrade(i)));

  useEffect(() => {
    const timer = setInterval(() => {
      setTrades(prev => [randomTrade(prev.length + Math.floor(Math.random() * 100)), ...prev.slice(0, 9)]);
    }, 4000 + Math.random() * 6000);
    return () => clearInterval(timer);
  }, []);

  const StatusIcon: React.FC<{ status: string }> = ({ status }) => {
    if (status === 'completed') return <CheckCircle size={12} />;
    if (status === 'pending') return <Clock size={12} />;
    return <XCircle size={12} />;
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title"><BarChart3 size={16} /> TRADE HISTORY</h2>
        <span className="badge" style={{ background: 'rgba(124,77,255,0.08)', borderColor: 'rgba(124,77,255,0.2)', color: 'var(--purple)' }}>
          {trades.length} TRADES
        </span>
      </div>
      <div style={{ overflowX: 'auto', maxHeight: 380 }}>
        <table className="trade-table">
          <thead><tr>
            <th>ID</th><th>Counterparty</th><th>Side</th>
            <th style={{ textAlign: 'right' }}>Amount</th><th style={{ textAlign: 'right' }}>Price</th>
            <th style={{ textAlign: 'center' }}>Status</th><th style={{ textAlign: 'right' }}>Time</th>
          </tr></thead>
          <tbody>
            {trades.map((t, i) => (
              <tr key={t.id + i} className={i === 0 ? 'new-row' : ''}>
                <td style={{ color: 'var(--text-muted)', fontFamily: "'JetBrains Mono', monospace" }}>{t.id}</td>
                <td style={{ color: 'var(--cyan)', fontWeight: 500 }}>{t.counterparty}</td>
                <td>
                  <span className={`side-badge ${t.side}`}>
                    {t.side === 'buy' ? <ArrowUpRight size={10} style={{ marginRight: 2 }} /> : <ArrowDownRight size={10} style={{ marginRight: 2 }} />}
                    {t.side.toUpperCase()}
                  </span>
                </td>
                <td style={{ textAlign: 'right', fontFamily: "'JetBrains Mono', monospace" }}>{t.amount} UCT</td>
                <td style={{ textAlign: 'right', fontFamily: "'JetBrains Mono', monospace" }}>{t.price} USDU</td>
                <td style={{ textAlign: 'center' }}>
                  <span className={`status-badge ${t.status}`}>
                    <StatusIcon status={t.status} /> {t.status === 'completed' ? 'Done' : t.status === 'pending' ? 'Pending' : 'Failed'}
                  </span>
                </td>
                <td style={{ textAlign: 'right', color: 'var(--text-muted)', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem' }}>{t.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TradeHistory;
