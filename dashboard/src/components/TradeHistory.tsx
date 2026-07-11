import React from 'react';

type TradeStatus = 'completed' | 'pending' | 'failed';

interface Trade {
  id: string;
  counterparty: string;
  type: 'Buy' | 'Sell';
  amount: string;
  price: string;
  status: TradeStatus;
  time: string;
}

const STATUS_LABELS: Record<TradeStatus, string> = {
  completed: '✓ Completed',
  pending: '⏳ Pending',
  failed: '✗ Failed',
};

const MOCK_TRADES: Trade[] = [
  { id: '#0048', counterparty: '@node_runner',   type: 'Sell', amount: '50 UCT',   price: '1.05 USDU', status: 'completed', time: '04:26' },
  { id: '#0047', counterparty: '@trader42',      type: 'Buy',  amount: '100 UCT',  price: '0.96 USDU', status: 'completed', time: '04:19' },
  { id: '#0046', counterparty: '@mm_node',       type: 'Buy',  amount: '250 UCT',  price: '0.95 USDU', status: 'completed', time: '03:48' },
  { id: '#0045', counterparty: '@whale_buyer',   type: 'Sell', amount: '500 UCT',  price: '1.03 USDU', status: 'completed', time: '03:15' },
  { id: '#0044', counterparty: '@dca_bot',       type: 'Buy',  amount: '100 UCT',  price: '0.97 USDU', status: 'completed', time: '02:30' },
  { id: '#0043', counterparty: '@flash_seller',  type: 'Buy',  amount: '300 UCT',  price: '1.00 USDU', status: 'completed', time: '01:52' },
  { id: '#0042', counterparty: '@alphadealer',   type: 'Sell', amount: '75 UCT',   price: '1.04 USDU', status: 'pending',   time: '01:10' },
  { id: '#0041', counterparty: '@escrow_agent',  type: 'Buy',  amount: '1000 UCT', price: '0.94 USDU', status: 'failed',    time: '00:45' },
  { id: '#0040', counterparty: '@node_runner',   type: 'Sell', amount: '200 UCT',  price: '1.02 USDU', status: 'completed', time: '00:12' },
];

const TradeHistory: React.FC = () => {
  return (
    <div className="glass-card panel animate-in" style={{ animationDelay: '0.3s' }}>
      <div className="panel-header">
        <h3 className="panel-title">📊 Trade History</h3>
        <span className="badge badge-info" style={{ fontSize: '0.65rem' }}>
          {MOCK_TRADES.length} trades
        </span>
      </div>
      <div className="panel-body" style={{ padding: 0 }}>
        <table className="trade-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Counterparty</th>
              <th>Side</th>
              <th>Amount</th>
              <th>Price</th>
              <th>Status</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_TRADES.map((trade) => (
              <tr key={trade.id}>
                <td className="trade-id">{trade.id}</td>
                <td className="trade-counterparty">{trade.counterparty}</td>
                <td>
                  <span
                    className={`market-type ${trade.type === 'Buy' ? 'buy' : 'sell'}`}
                    style={{ fontSize: '0.68rem' }}
                  >
                    {trade.type}
                  </span>
                </td>
                <td className="trade-amount font-mono">{trade.amount}</td>
                <td className="font-mono" style={{ color: 'var(--text-secondary)' }}>
                  {trade.price}
                </td>
                <td>
                  <span className={`trade-status ${trade.status}`}>
                    {STATUS_LABELS[trade.status]}
                  </span>
                </td>
                <td className="font-mono" style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>
                  {trade.time}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TradeHistory;
