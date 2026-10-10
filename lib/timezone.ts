// Small time-zone helpers built on Intl — no date library needed. Used by
// both the server (building available slots in the practice's time zone)
// and the browser (showing each slot in the visitor's own time zone).

const partsFormatters = new Map<string, Intl.DateTimeFormat>();

function partsFormatter(timeZone: string): Intl.DateTimeFormat {
  let formatter = partsFormatters.get(timeZone);
  if (!formatter) {
    formatter = new Intl.DateTimeFormat("en-US", {
      timeZone,
      hourCycle: "h23",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      weekday: "short",
    });
    partsFormatters.set(timeZone, formatter);
  }
  return formatter;
}

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export interface ZonedParts {
  year: number;
  month: number; // 1–12
  day: number;
  hour: number;
  minute: number;
  second: number;
  weekday: number; // 0 = Sunday
}

export function getZonedParts(date: Date, timeZone: string): ZonedParts {
  const values: Record<string, string> = {};
  for (const part of partsFormatter(timeZone).formatToParts(date)) {
    values[part.type] = part.value;
  }
  return {
    year: Number(values.year),
    month: Number(values.month),
    day: Number(values.day),
    hour: Number(values.hour),
    minute: Number(values.minute),
    second: Number(values.second),
    weekday: WEEKDAYS.indexOf(values.weekday),
  };
}

// Offset of `timeZone` from UTC at `date`, in minutes (e.g. +600 for AEST).
function offsetMinutes(date: Date, timeZone: string): number {
  const p = getZonedParts(date, timeZone);
  const asUtc = Date.UTC(p.year, p.month - 1, p.day, p.hour, p.minute, p.second);
  return Math.round((asUtc - Math.floor(date.getTime() / 1000) * 1000) / 60000);
}

// Converts a wall-clock date + time in `timeZone` to the real instant.
// e.g. ("2026-10-12", "09:00", "Australia/Melbourne") → 2026-10-11T22:00Z
export function zonedTimeToUtc(dateKey: string, time: string, timeZone: string): Date {
  const [year, month, day] = dateKey.split("-").map(Number);
  const [hour, minute] = time.split(":").map(Number);
  const wallAsUtc = Date.UTC(year, month - 1, day, hour, minute);

  // Two passes handle the hour either side of a daylight-saving change.
  let result = wallAsUtc - offsetMinutes(new Date(wallAsUtc), timeZone) * 60000;
  result = wallAsUtc - offsetMinutes(new Date(result), timeZone) * 60000;
  return new Date(result);
}

// "YYYY-MM-DD" for the calendar day `date` falls on in `timeZone`.
export function dateKeyInZone(date: Date, timeZone: string): string {
  const p = getZonedParts(date, timeZone);
  return `${p.year}-${String(p.month).padStart(2, "0")}-${String(p.day).padStart(2, "0")}`;
}

// Pure calendar arithmetic on "YYYY-MM-DD" keys (time-zone independent).
export function addDaysToKey(dateKey: string, days: number): string {
  const [year, month, day] = dateKey.split("-").map(Number);
  const next = new Date(Date.UTC(year, month - 1, day + days));
  return next.toISOString().slice(0, 10);
}

export function weekdayOfKey(dateKey: string): number {
  const [year, month, day] = dateKey.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day)).getUTCDay();
}

export function formatInZone(
  date: Date | string,
  timeZone: string,
  options: Intl.DateTimeFormatOptions,
): string {
  return new Intl.DateTimeFormat("en-AU", { timeZone, ...options }).format(new Date(date));
}

// e.g. "Mon 12 Oct 2026, 9:00 am AEDT"
export function formatAppointment(date: Date | string, timeZone: string): string {
  return formatInZone(date, timeZone, {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  });
}

export function isValidTimeZone(timeZone: string | undefined): timeZone is string {
  if (!timeZone) return false;
  try {
    new Intl.DateTimeFormat("en-AU", { timeZone });
    return true;
  } catch {
    return false;
  }
}
