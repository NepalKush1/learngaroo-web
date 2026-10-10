import "server-only";
import { mkdirSync } from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";

// Single-file SQLite database (Node's built-in driver). It lives in
// ./storage by default — set DATABASE_PATH to put it on a persistent disk
// in production. Requires a long-running Node host (VPS, Render, Railway,
// Fly.io); serverless hosts like Vercel don't keep files between requests.

const DATABASE_PATH =
  process.env.DATABASE_PATH ?? path.join(process.cwd(), "storage", "learniiz.db");

const SCHEMA = `
  CREATE TABLE IF NOT EXISTS bookings (
    id                TEXT PRIMARY KEY,
    reference         TEXT NOT NULL UNIQUE,
    kind              TEXT NOT NULL DEFAULT 'booking',  -- 'booking' | 'block'
    status            TEXT NOT NULL,
    service_id        TEXT,
    service_title     TEXT,
    price_cents       INTEGER,
    currency          TEXT,
    starts_at         TEXT NOT NULL,   -- UTC ISO-8601
    ends_at           TEXT NOT NULL,   -- UTC ISO-8601, excludes buffer
    client_time_zone  TEXT,
    first_name        TEXT,
    last_name         TEXT,
    email             TEXT,
    details_json      TEXT,            -- full form submission
    stripe_session_id TEXT,
    hold_expires_at   TEXT,
    note              TEXT,
    created_at        TEXT NOT NULL,
    updated_at        TEXT NOT NULL
  );
  CREATE INDEX IF NOT EXISTS bookings_starts_at ON bookings (starts_at);
  CREATE INDEX IF NOT EXISTS bookings_status ON bookings (status);
  CREATE INDEX IF NOT EXISTS bookings_stripe ON bookings (stripe_session_id);

  CREATE TABLE IF NOT EXISTS enquiries (
    id          TEXT PRIMARY KEY,
    name        TEXT NOT NULL,
    email       TEXT NOT NULL,
    phone       TEXT,
    service     TEXT,
    message     TEXT NOT NULL,
    status      TEXT NOT NULL DEFAULT 'new',  -- 'new' | 'handled'
    created_at  TEXT NOT NULL
  );
`;

// Reuse one connection across hot reloads in development.
const globalForDb = globalThis as unknown as { learniizDb?: DatabaseSync };

export function db(): DatabaseSync {
  if (!globalForDb.learniizDb) {
    mkdirSync(path.dirname(DATABASE_PATH), { recursive: true });
    const database = new DatabaseSync(DATABASE_PATH);
    database.exec("PRAGMA journal_mode = WAL; PRAGMA busy_timeout = 5000;");
    database.exec(SCHEMA);
    globalForDb.learniizDb = database;
  }
  return globalForDb.learniizDb;
}

// Runs `fn` inside a write transaction. node:sqlite is synchronous, so the
// whole check-then-insert happens without any other request interleaving.
export function transaction<T>(fn: () => T): T {
  const database = db();
  database.exec("BEGIN IMMEDIATE");
  try {
    const result = fn();
    database.exec("COMMIT");
    return result;
  } catch (error) {
    database.exec("ROLLBACK");
    throw error;
  }
}
