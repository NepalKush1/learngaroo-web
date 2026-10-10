// ─────────────────────────────────────────────────────────────────────────
// BOOKING AVAILABILITY — edit this file to change when clients can book.
//
// All times are in the practice's own time zone (below), so clients
// anywhere in the world see the correct appointment time. Already-booked
// and blocked times are removed automatically. One-off blocks (leave, a
// public holiday at short notice) can also be added from the admin page.
// ─────────────────────────────────────────────────────────────────────────

export const availability = {
  // IANA time zone of the practice (Melbourne observes AEST/AEDT).
  timeZone: "Australia/Melbourne",

  // Opening hours per weekday (0 = Sunday … 6 = Saturday), 24-hour "HH:mm".
  // Leave a day's array empty to close that day. Several ranges per day are
  // allowed, e.g. a lunch break: [["09:00", "12:30"], ["13:30", "17:00"]].
  weeklyHours: {
    0: [],
    1: [["09:00", "17:00"]],
    2: [["09:00", "17:00"]],
    3: [["09:00", "17:00"]],
    4: [["09:00", "17:00"]],
    5: [["09:00", "17:00"]],
    6: [],
  } as Record<number, [string, string][]>,

  // A new appointment can start every N minutes.
  slotIntervalMinutes: 30,

  // Gap kept free after each appointment (notes, running over).
  bufferMinutes: 15,

  // Earliest a client can book, measured from now.
  minimumNoticeHours: 12,

  // How far ahead clients can book.
  daysAhead: 30,

  // Whole days closed (public holidays, leave) as "YYYY-MM-DD".
  closedDates: [] as string[],

  // How long an unpaid booking holds its time slot while the client is at
  // the payment page. Stripe Checkout sessions must last at least 30 min.
  paymentHoldMinutes: 30,
};
