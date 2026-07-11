# 🤖 SphereTrader — Autonomous Market Maker on Unicity

> **An AI agent that autonomously trades on the Unicity Sphere network.** It posts market intents, discovers counterparties, negotiates trades via DM, and settles payments — all without human intervention.

![Track](https://img.shields.io/badge/Track-Autonomous%20Agents-00e5ff?style=for-the-badge)
![Network](https://img.shields.io/badge/Network-Unicity%20Testnet%20v2-7c4dff?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Agentic-00e676?style=for-the-badge)

## 🎯 What Is This?

SphereTrader is an **autonomous market-making agent** built on the Unicity Sphere SDK. It provides liquidity to the Unicity token economy by:

1. **📢 Posting Intents** — Advertises buy/sell offers on the Sphere Intent Market
2. **🔍 Discovering Counterparties** — Searches the market for matching trades using semantic search
3. **💬 Negotiating via DM** — Communicates with counterparties through NIP-17 encrypted DMs
4. **💰 Settling Autonomously** — Executes payments and swaps to complete trades
5. **🔄 Running Continuously** — Operates in a perpetual loop with no human clicks required

Plus a **premium web dashboard** for monitoring the agent's activity, browsing the market, and viewing trade history.

## 📦 Architecture

```
┌─────────────────────────────────────────────────────┐
│              SphereTrader System                     │
│                                                     │
│  ┌──────────────────────────────────────────────┐   │
│  │         Agent Backend (Node.js)               │   │
│  │                                               │   │
│  │  ┌─────────┐  ┌──────────┐  ┌────────────┐  │   │
│  │  │ Market   │→ │ Negotia- │→ │ Settlement │  │   │
│  │  │ Scanner  │  │ tion     │  │ Engine     │  │   │
│  │  │ + Poster │  │ (DM)     │  │ (Pay/Swap) │  │   │
│  │  └─────────┘  └──────────┘  └────────────┘  │   │
│  │       ↕              ↕             ↕          │   │
│  │  ┌──────────────────────────────────────┐     │   │
│  │  │     Sphere SDK (sphere-sdk)          │     │   │
│  │  │  wallet · market · DMs · payments    │     │   │
│  │  └──────────────────────────────────────┘     │   │
│  └──────────────────────────────────────────────┘   │
│                        ↕ REST API                     │
│  ┌──────────────────────────────────────────────┐   │
│  │      Dashboard (React + Vite)                 │   │
│  │  📊 Live Feed · 💰 Wallet · 📈 Market · ⚙️   │   │
│  └──────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────┘
```

## 🛠 Sphere SDK Primitives Used

| Primitive | How It's Used |
|-----------|---------------|
| **Payments** | UCT transfers for trade settlements |
| **Payment Requests** | Request payment from counterparty after trade agreement |
| **Market (Intents)** | Post buy/sell intents; search for matching offers |
| **Messaging (NIP-17 DMs)** | Agent-to-agent trade negotiation protocol |
| **Nametags** | Agent registers `@spheretrader` for identity |
| **Token Swaps** | Atomic P2P token exchange for matched trades |

## 🚀 Quick Start

### Prerequisites

- **Node.js** ≥ 20.0.0
- **npm** ≥ 9
- A **Sphere wallet mnemonic** (12/24 words)
- **Testnet UCT tokens** (agent self-mints on first run)

### 1. Clone & Install

```bash
git clone https://github.com/abdelhamidelkhouider/spheretrader.git
cd spheretrader

# Install agent dependencies
cd agent && npm install

# Install dashboard dependencies
cd ../dashboard && npm install
```

### 2. Configure the Agent

```bash
cd agent
cp .env.example .env
```

Edit `.env` with your wallet mnemonic:

```env
MNEMONIC=your twelve word mnemonic phrase goes here
AGENT_NAMETAG=spheretrader
NETWORK=testnet
AGGREGATOR_API_KEY=sk_ddc3cfcc001e4a28ac3fad7407f99590
```

### 3. Run the Agent

```bash
cd agent
npm run start
```

The agent will:
- Initialize the Sphere wallet
- Register the nametag (first run only)
- Self-mint UCT tokens if balance is zero
- Start posting intents on the market
- Begin scanning for matching trades
- Listen for incoming DMs and payment requests
- Log all activity to the console

### 4. Run the Dashboard

```bash
cd dashboard
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to see the live dashboard.

### 5. Deploy Dashboard to Vercel

```bash
cd dashboard
npm run build
```

Then deploy the `dist/` folder to Vercel, or connect the GitHub repo and set:
- **Root Directory:** `dashboard`
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

## 🤖 Autonomous Agent Loop

The agent runs a continuous trading cycle every 60 seconds:

```
┌─────────────────────────────────────────────┐
│           TRADING LOOP (every 60s)           │
│                                              │
│  1. Check wallet balance & budget            │
│  2. Post/refresh buy & sell intents          │
│  3. Scan market for matching intents         │
│  4. Send trade requests to matches (DM)      │
│  5. Process incoming trade requests (DM)     │
│  6. Settle agreed trades (payments/swaps)    │
│  7. Log activity & update stats              │
│                                              │
│  [Repeat forever — no human intervention]    │
└─────────────────────────────────────────────┘
```

## 💬 DM Negotiation Protocol

Agents communicate via NIP-17 encrypted DMs using a structured JSON protocol:

```
Agent A (Maker)                    Agent B (Taker)
     │                                  │
     │── Post intent on market ────────→│ (discovers via search)
     │                                  │
     │←── DM: trade_request ───────────│ (wants to trade)
     │    {want: 100 UCT, offer: ...}   │
     │                                  │
     │── DM: trade_accept ────────────→│ (terms agreed)
     │    {price: 1.02, amount: 100}    │
     │                                  │
     │── Payment settlement ──────────→│ (UCT transferred)
     │                                  │
     │── DM: trade_complete ──────────→│ (confirmation)
     │    {txId: "...", settled: true}   │
```

## 📊 Dashboard Features

- **Live Activity Feed** — Real-time stream of agent actions
- **Market Browser** — Browse and search the Sphere Intent Market
- **Trade History** — View all completed trades with status
- **Wallet Overview** — Balance, tokens, and transaction history
- **Agent Configuration** — View current trading parameters
- **Stats Cards** — Key metrics: trades, volume, uptime

## 🏗 Project Structure

```
spheretrader/
├── agent/                     # Autonomous trading agent
│   ├── src/
│   │   ├── index.ts           # Entry point
│   │   ├── trader.ts          # Main trading loop
│   │   ├── market-scanner.ts  # Intent market operations
│   │   ├── negotiator.ts      # DM negotiation protocol
│   │   ├── settler.ts         # Payment settlement
│   │   ├── treasury.ts        # Budget management
│   │   ├── wallet.ts          # Sphere SDK wrapper
│   │   ├── protocol.ts        # DM message protocol
│   │   ├── logger.ts          # Activity logger
│   │   ├── api-server.ts      # REST API for dashboard
│   │   └── config.ts          # Configuration
│   └── .env.example
│
├── dashboard/                 # Web monitoring dashboard
│   ├── src/
│   │   ├── App.tsx            # Main app
│   │   ├── components/        # UI components
│   │   └── index.css          # Premium dark theme
│   └── index.html
│
├── README.md
├── LICENSE
└── package.json
```

## ⚡ Technical Details

- **Network:** Unicity Testnet v2 (`testnet2` gateway)
- **SDK Version:** `@unicitylabs/sphere-sdk` latest
- **Runtime:** Node.js 22+ (agent), Vite + React (dashboard)
- **Transport:** Nostr relays for DMs and nametags
- **Settlement:** L3 token engine (v2 state-transition SDK)
- **Market API:** `https://market-api.unicity.network`

## 🏆 Hackathon Submission

- **Track:** Autonomous Agents
- **This submission is agentic:** ✅ Yes — the agent initiates and completes economic actions autonomously
- **AstridOS:** Does not run on AstridOS
- **Network:** Unicity v2 testnet (`testnet2`)
- **Value movement:** ✅ Yes — the agent sends/receives UCT tokens for trade settlement

## 📝 License

MIT — see [LICENSE](./LICENSE)

---

Built with ❤️ for the [Unicity Sphere Call for Builders](https://developers.unicity.network/)
