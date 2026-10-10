import "server-only";
import { randomBytes, randomUUID } from "node:crypto";
import { availability } from "@/data/availability";
import type { ConsultationService } from "@/data/consultations";
import type { ClientDetails } from "@/lib/booking-schema";
import { db, transaction } from "./db";
import { isSlotAvailable } from "./availability";

export type BookingStatus =
  | "pending_payment" // waiting for the client to finish paying (slot held)
  | "confirmed" // paid
  | "requested" // online payment not set up — the practice confirms manually
  | "blocked" // time blocked out by the practice
  | "cancelled"
  | "expired"; // payment never completed; slot released

export interface Booking {
  id: string;
  reference: string;
  kind: "booking" | "block";
  status: BookingStatus;
  service_id: string | null;
  service_title: string | null;
  price_cents: number | null;
  currency: string | null;
  starts_at: string;
  ends_at: string;
  client_time_zone: string | null;
  first_name: string | null;
  last_name: string | null;
  email: string | null;
  details_json: string | null;
  stripe_session_id: string | null;
  hold_expires_at: string | null;
  note: string | null;
  created_at: string;
  updated_at: string;
}

export class SlotUnavailableError extends Error {
  constructor() {
    super("That time is no longer available.");
  }
}

const nowIso = () => new Date().toISOString();

function makeReference(): string {
  // Unambiguous characters only (no 0/O, 1/I).
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const bytes = randomBytes(6);
  let code = "";
  for (const byte of bytes) code += alphabet[byte % alphabet.length];
  return `LMV-${code}`;
}

// Releases slots held by bookings whose payment window has passed.
export function expireStaleHolds(now = new Date()): void {
  db()
    .prepare(
      `UPDATE bookings SET status = 'expired', updated_at = ?
       WHERE status = 'pending_payment' AND hold_expires_at < ?`,
    )
    .run(nowIso(), now.toISOString());
}

// Time ranges that can't be booked: confirmed, requested, blocked, and
// unpaid bookings whose hold hasn't expired yet.
export function getBusyRanges(fromIso: string, toIso: string, now = new Date()) {
  return db()
    .prepare(
      `SELECT starts_at AS start, ends_at AS end FROM bookings
       WHERE starts_at < ? AND ends_at > ?
         AND (status IN ('confirmed', 'requested', 'blocked')
              OR (status = 'pending_payment' AND hold_expires_at > ?))`,
    )
    .all(toIso, fromIso, now.toISOString()) as { start: string; end: string }[];
}

export function createBooking({
  service,
  startsAt,
  details,
  clientTimeZone,
  awaitingPayment,
}: {
  service: ConsultationService;
  startsAt: string;
  details: ClientDetails;
  clientTimeZone?: string;
  awaitingPayment: boolean;
}): Booking {
  const start = new Date(startsAt);
  const end = new Date(start.getTime() + service.durationMinutes * 60_000);
  const now = new Date();

  return transaction(() => {
    expireStaleHolds(now);
    if (!isSlotAvailable(service.durationMinutes, start.toISOString(), now)) {
      throw new SlotUnavailableError();
    }

    const booking: Booking = {
      id: randomUUID(),
      reference: makeReference(),
      kind: "booking",
      status: awaitingPayment ? "pending_payment" : "requested",
      service_id: service.id,
      service_title: service.title,
      price_cents: service.priceInCents,
      currency: service.currency,
      starts_at: start.toISOString(),
      ends_at: end.toISOString(),
      client_time_zone: clientTimeZone ?? null,
      first_name: details.firstName,
      last_name: details.lastName,
      email: details.emails[0],
      details_json: JSON.stringify(details),
      stripe_session_id: null,
      hold_expires_at: awaitingPayment
        ? new Date(now.getTime() + availability.paymentHoldMinutes * 60_000).toISOString()
        : null,
      note: null,
      created_at: now.toISOString(),
      updated_at: now.toISOString(),
    };

    db()
      .prepare(
        `INSERT INTO bookings (id, reference, kind, status, service_id, service_title,
           price_cents, currency, starts_at, ends_at, client_time_zone, first_name,
           last_name, email, details_json, stripe_session_id, hold_expires_at, note,
           created_at, updated_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      )
      .run(
        booking.id, booking.reference, booking.kind, booking.status, booking.service_id,
        booking.service_title, booking.price_cents, booking.currency, booking.starts_at,
        booking.ends_at, booking.client_time_zone, booking.first_name, booking.last_name,
        booking.email, booking.details_json, booking.stripe_session_id,
        booking.hold_expires_at, booking.note, booking.created_at, booking.updated_at,
      );

    return booking;
  });
}

export function createBlock({
  startsAt,
  endsAt,
  note,
}: {
  startsAt: string;
  endsAt: string;
  note?: string;
}): Booking {
  const now = nowIso();
  const id = randomUUID();
  db()
    .prepare(
      `INSERT INTO bookings (id, reference, kind, status, starts_at, ends_at, note, created_at, updated_at)
       VALUES (?, ?, 'block', 'blocked', ?, ?, ?, ?, ?)`,
    )
    .run(id, makeReference(), startsAt, endsAt, note ?? null, now, now);
  return getBookingById(id)!;
}

export function getBookingById(id: string): Booking | undefined {
  return db().prepare("SELECT * FROM bookings WHERE id = ?").get(id) as Booking | undefined;
}

export function getBookingByStripeSession(sessionId: string): Booking | undefined {
  return db()
    .prepare("SELECT * FROM bookings WHERE stripe_session_id = ?")
    .get(sessionId) as Booking | undefined;
}

export function attachStripeSession(id: string, sessionId: string): void {
  db()
    .prepare("UPDATE bookings SET stripe_session_id = ?, updated_at = ? WHERE id = ?")
    .run(sessionId, nowIso(), id);
}

// Marks a booking paid. Returns `changed: false` if it was already confirmed,
// so callers (success page + webhook) only send emails once.
export function confirmPaidBooking(id: string): { booking: Booking; changed: boolean } | null {
  return transaction(() => {
    const booking = getBookingById(id);
    if (!booking) return null;
    if (booking.status === "confirmed") return { booking, changed: false };
    if (booking.status !== "pending_payment" && booking.status !== "expired") {
      return { booking, changed: false };
    }

    // Paid after the hold lapsed: confirm anyway (the client has paid), but
    // flag it in case someone else booked the same time in the meantime.
    const note =
      booking.status === "expired"
        ? "Payment completed after the hold expired — check for a clashing booking."
        : booking.note;
    db()
      .prepare(
        `UPDATE bookings SET status = 'confirmed', hold_expires_at = NULL, note = ?, updated_at = ?
         WHERE id = ?`,
      )
      .run(note, nowIso(), id);
    return { booking: getBookingById(id)!, changed: true };
  });
}

// Client backed out of payment: free the slot straight away.
export function releaseHold(id: string): void {
  db()
    .prepare(
      `UPDATE bookings SET status = 'cancelled', updated_at = ?
       WHERE id = ? AND status = 'pending_payment'`,
    )
    .run(nowIso(), id);
}

export function cancelBooking(id: string): Booking | undefined {
  db()
    .prepare(
      `UPDATE bookings SET status = 'cancelled', updated_at = ?
       WHERE id = ? AND status IN ('confirmed', 'requested', 'pending_payment', 'blocked')`,
    )
    .run(nowIso(), id);
  return getBookingById(id);
}

export function markExpiredBySession(sessionId: string): void {
  db()
    .prepare(
      `UPDATE bookings SET status = 'expired', updated_at = ?
       WHERE stripe_session_id = ? AND status = 'pending_payment'`,
    )
    .run(nowIso(), sessionId);
}

export function listUpcoming(now = new Date()): Booking[] {
  expireStaleHolds(now);
  return db()
    .prepare(
      `SELECT * FROM bookings
       WHERE ends_at >= ? AND status IN ('confirmed', 'requested', 'pending_payment', 'blocked')
       ORDER BY starts_at ASC`,
    )
    .all(now.toISOString()) as unknown as Booking[];
}

export function listRecent(limit = 30, now = new Date()): Booking[] {
  return db()
    .prepare(
      `SELECT * FROM bookings
       WHERE kind = 'booking' AND (ends_at < ? OR status IN ('cancelled', 'expired'))
       ORDER BY starts_at DESC LIMIT ?`,
    )
    .all(now.toISOString(), limit) as unknown as Booking[];
}

export function parseDetails(booking: Booking): ClientDetails | null {
  if (!booking.details_json) return null;
  try {
    return JSON.parse(booking.details_json) as ClientDetails;
  } catch {
    return null;
  }
}
