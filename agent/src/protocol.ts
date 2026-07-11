// ─────────────────────────────────────────────────────────────
// SphereTrader Agent — DM Negotiation Protocol
// Typed message definitions and parse/serialize utilities
// ─────────────────────────────────────────────────────────────

// ── Message Types ────────────────────────────────────────────

export interface TradeRequest {
  type: 'trade_request';
  intentId: string;
  wantAmount: string;
  wantCurrency: string;
  offerAmount: string;
  offerCurrency: string;
  timestamp: number;
}

export interface TradeAccept {
  type: 'trade_accept';
  requestId: string;
  agreedAmount: string;
  agreedPrice: string;
  settlementMethod: 'payment' | 'swap';
  timestamp: number;
}

export interface TradeReject {
  type: 'trade_reject';
  requestId: string;
  reason: string;
  timestamp: number;
}

export interface TradeComplete {
  type: 'trade_complete';
  requestId: string;
  txId: string;
  settled: boolean;
  timestamp: number;
}

export type ProtocolMessage = TradeRequest | TradeAccept | TradeReject | TradeComplete;
export type MessageType = ProtocolMessage['type'];

// ── Protocol version tag (future-proofing) ──────────────────
const PROTOCOL_VERSION = 'spheretrader-v1';

interface Envelope {
  protocol: string;
  payload: ProtocolMessage;
}

// ── Serialization ────────────────────────────────────────────

/**
 * Serialize a protocol message to a JSON string wrapped in an envelope.
 */
export function serialize(message: ProtocolMessage): string {
  const envelope: Envelope = {
    protocol: PROTOCOL_VERSION,
    payload: message,
  };
  return JSON.stringify(envelope);
}

/**
 * Parse a raw DM string into a typed protocol message.
 * Returns null if the message is not a valid SphereTrader protocol message.
 */
export function parse(raw: string): ProtocolMessage | null {
  try {
    const data = JSON.parse(raw);

    // Unwrap envelope if present
    let payload: unknown;
    if (data && typeof data === 'object' && data.protocol === PROTOCOL_VERSION && data.payload) {
      payload = data.payload;
    } else if (data && typeof data === 'object' && 'type' in data) {
      // Accept bare messages too (interop)
      payload = data;
    } else {
      return null;
    }

    // Validate message type
    const msg = payload as Record<string, unknown>;
    if (!msg.type || typeof msg.type !== 'string') return null;

    switch (msg.type) {
      case 'trade_request':
        return validateTradeRequest(msg);
      case 'trade_accept':
        return validateTradeAccept(msg);
      case 'trade_reject':
        return validateTradeReject(msg);
      case 'trade_complete':
        return validateTradeComplete(msg);
      default:
        return null;
    }
  } catch {
    return null;
  }
}

// ── Validators ───────────────────────────────────────────────

function validateTradeRequest(msg: Record<string, unknown>): TradeRequest | null {
  if (
    typeof msg.intentId !== 'string' ||
    typeof msg.wantAmount !== 'string' ||
    typeof msg.wantCurrency !== 'string' ||
    typeof msg.offerAmount !== 'string' ||
    typeof msg.offerCurrency !== 'string' ||
    typeof msg.timestamp !== 'number'
  ) {
    return null;
  }
  return {
    type: 'trade_request',
    intentId: msg.intentId,
    wantAmount: msg.wantAmount,
    wantCurrency: msg.wantCurrency,
    offerAmount: msg.offerAmount,
    offerCurrency: msg.offerCurrency,
    timestamp: msg.timestamp,
  };
}

function validateTradeAccept(msg: Record<string, unknown>): TradeAccept | null {
  if (
    typeof msg.requestId !== 'string' ||
    typeof msg.agreedAmount !== 'string' ||
    typeof msg.agreedPrice !== 'string' ||
    (msg.settlementMethod !== 'payment' && msg.settlementMethod !== 'swap') ||
    typeof msg.timestamp !== 'number'
  ) {
    return null;
  }
  return {
    type: 'trade_accept',
    requestId: msg.requestId,
    agreedAmount: msg.agreedAmount,
    agreedPrice: msg.agreedPrice,
    settlementMethod: msg.settlementMethod,
    timestamp: msg.timestamp,
  };
}

function validateTradeReject(msg: Record<string, unknown>): TradeReject | null {
  if (
    typeof msg.requestId !== 'string' ||
    typeof msg.reason !== 'string' ||
    typeof msg.timestamp !== 'number'
  ) {
    return null;
  }
  return {
    type: 'trade_reject',
    requestId: msg.requestId,
    reason: msg.reason,
    timestamp: msg.timestamp,
  };
}

function validateTradeComplete(msg: Record<string, unknown>): TradeComplete | null {
  if (
    typeof msg.requestId !== 'string' ||
    typeof msg.txId !== 'string' ||
    typeof msg.settled !== 'boolean' ||
    typeof msg.timestamp !== 'number'
  ) {
    return null;
  }
  return {
    type: 'trade_complete',
    requestId: msg.requestId,
    txId: msg.txId,
    settled: msg.settled,
    timestamp: msg.timestamp,
  };
}

// ── Helpers ──────────────────────────────────────────────────

/**
 * Create a unique request ID for correlating negotiation messages.
 */
export function createRequestId(): string {
  return `req_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

/**
 * Check if a timestamp is within the acceptable age window (default 5 minutes).
 */
export function isTimestampFresh(timestamp: number, maxAgeMs: number = 300_000): boolean {
  return Date.now() - timestamp < maxAgeMs;
}
