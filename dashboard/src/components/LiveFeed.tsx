import React from 'react';

type FeedType = 'intent' | 'dm' | 'trade' | 'payment' | 'error' | 'system';

interface FeedEntry {
  id: number;
  type: FeedType;
  text: string;
  time: string;
}

const ICONS: Record<FeedType, string> = {
  intent:  '📡',
  dm:      '💬',
  trade:   '🤝',
  payment: '💸',
  error:   '⚠️',
  system:  '⚙️',
};

const MOCK_FEED: FeedEntry[] = [
  { id: 1,  type: 'system',  text: 'Agent started — SphereTrader v1.0.0 initialized', time: '04:17:01' },
  { id: 2,  type: 'system',  text: 'Connected to Unicity Sphere testnet-v2', time: '04:17:02' },
  { id: 3,  type: 'intent',  text: 'Posted buy intent: <strong>100 UCT</strong> at price 0.95 USDU', time: '04:17:05' },
  { id: 4,  type: 'intent',  text: 'Posted sell intent: <strong>50 UCT</strong> at price 1.05 USDU', time: '04:17:06' },
  { id: 5,  type: 'dm',      text: 'Received DM from <strong>@trader42</strong>: "Interested in your 100 UCT buy offer"', time: '04:18:12' },
  { id: 6,  type: 'dm',      text: 'Sent counter-offer to <strong>@trader42</strong>: 100 UCT at 0.96 USDU', time: '04:18:15' },
  { id: 7,  type: 'trade',   text: 'Negotiation complete with <strong>@trader42</strong> — settling trade #47', time: '04:19:30' },
  { id: 8,  type: 'payment', text: 'Payment sent: <strong>96 USDU</strong> → @trader42 (trade #47)', time: '04:19:31' },
  { id: 9,  type: 'trade',   text: 'Trade <strong>#47</strong> settled successfully ✓ — received 100 UCT', time: '04:19:34' },
  { id: 10, type: 'intent',  text: 'Refreshed sell intent: <strong>150 UCT</strong> at 1.04 USDU', time: '04:20:01' },
  { id: 11, type: 'dm',      text: 'Received DM from <strong>@alphadealer</strong>: "Can you do 200 UCT at 0.97?"', time: '04:22:44' },
  { id: 12, type: 'dm',      text: 'Auto-rejected <strong>@alphadealer</strong> — price below minimum threshold', time: '04:22:45' },
  { id: 13, type: 'intent',  text: 'Market scan complete — found <strong>3 matching</strong> counter-intents', time: '04:25:10' },
  { id: 14, type: 'payment', text: 'Received payment: <strong>52.5 USDU</strong> from @node_runner (trade #48)', time: '04:26:02' },
  { id: 15, type: 'trade',   text: 'Trade <strong>#48</strong> settled successfully ✓ — sold 50 UCT', time: '04:26:05' },
];

const LiveFeed: React.FC = () => {
  return (
    <div className="glass-card panel animate-in" style={{ animationDelay: '0.1s' }}>
      <div className="panel-header">
        <h3 className="panel-title">
          <span style={{ color: 'var(--emerald)' }}>●</span> Live Activity Feed
        </h3>
        <span className="badge badge-online" style={{ fontSize: '0.65rem' }}>
          <span className="pulse-dot" />
          LIVE
        </span>
      </div>
      <div className="panel-body">
        <div className="feed-list">
          {MOCK_FEED.map((entry) => (
            <div key={entry.id} className="feed-item">
              <div className={`feed-icon ${entry.type}`}>
                {ICONS[entry.type]}
              </div>
              <div className="feed-content">
                <div
                  className="feed-text"
                  dangerouslySetInnerHTML={{ __html: entry.text }}
                />
                <div className="feed-time">{entry.time} UTC</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveFeed;
