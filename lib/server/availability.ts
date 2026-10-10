import "server-only";
import { availability } from "@/data/availability";
import {
  addDaysToKey,
  dateKeyInZone,
  weekdayOfKey,
  zonedTimeToUtc,
} from "@/lib/timezone";
import { getBusyRanges } from "./bookings";

export interface AvailableDay {
  date: string; // "YYYY-MM-DD" in the practice's time zone
  slots: string[]; // UTC ISO start times
}

const MINUTE = 60_000;

function minutesToTime(totalMinutes: number): string {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

function timeToMinutes(time: string): number {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

// Every bookable start time for an appointment of `durationMinutes`, in
// the configured window, minus anything already booked, held or blocked.
export function getAvailableDays(durationMinutes: number, now = new Date()): AvailableDay[] {
  const { timeZone, weeklyHours, slotIntervalMinutes, bufferMinutes } = availability;
  const earliest = now.getTime() + availability.minimumNoticeHours * 60 * MINUTE;
  const todayKey = dateKeyInZone(now, timeZone);
  const lastKey = addDaysToKey(todayKey, availability.daysAhead);

  const busy = getBusyRanges(
    zonedTimeToUtc(todayKey, "00:00", timeZone).toISOString(),
    zonedTimeToUtc(addDaysToKey(lastKey, 1), "00:00", timeZone).toISOString(),
    now,
  ).map((range) => ({
    start: Date.parse(range.start),
    end: Date.parse(range.end) + bufferMinutes * MINUTE,
  }));

  const days: AvailableDay[] = [];

  for (let offset = 0; offset <= availability.daysAhead; offset++) {
    const dateKey = addDaysToKey(todayKey, offset);
    if (availability.closedDates.includes(dateKey)) continue;

    const slots: string[] = [];
    for (const [open, close] of weeklyHours[weekdayOfKey(dateKey)] ?? []) {
      const closeMinutes = timeToMinutes(close);
      for (
        let minutes = timeToMinutes(open);
        minutes + durationMinutes <= closeMinutes;
        minutes += slotIntervalMinutes
      ) {
        const start = zonedTimeToUtc(dateKey, minutesToTime(minutes), timeZone).getTime();
        if (start < earliest) continue;

        const endWithBuffer = start + (durationMinutes + bufferMinutes) * MINUTE;
        const clashes = busy.some((range) => start < range.end && range.start < endWithBuffer);
        if (!clashes) slots.push(new Date(start).toISOString());
      }
    }

    if (slots.length > 0) days.push({ date: dateKey, slots });
  }

  return days;
}

export function isSlotAvailable(durationMinutes: number, startsAt: string, now = new Date()): boolean {
  const target = new Date(startsAt).toISOString();
  return getAvailableDays(durationMinutes, now).some((day) => day.slots.includes(target));
}
