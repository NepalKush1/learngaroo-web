"use client";

import { useMemo, useState } from "react";
import type { ConsultationService } from "@/data/consultations";

export interface SelectedSlot {
  date: string; // YYYY-MM-DD
  time: string; // HH:mm, 24h
  label: string; // human-readable, e.g. "Tue, 8 July · 10:00 AM"
}

const BUSINESS_HOURS = { startHour: 9, endHour: 17 };
const DAYS_AHEAD = 14;
const WEEKDAY_LABELS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

// Local-date key (YYYY-MM-DD) — deliberately not using date.toISOString(),
// which converts to UTC first and can roll the date back a day for any
// timezone ahead of UTC (e.g. Australia, the timezone this booking flow is
// actually for).
function toDateKey(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

interface DayAvailability {
  date: string;
  label: string;
  slots: { time: string; label: string }[];
}

// Placeholder availability logic only — no server/database exists yet, so
// this cannot actually prevent double-booking. It generates business-hour
// slots for the next two weeks (weekdays only) and filters out times that
// have already passed today. Replace with a real server-validated
// availability check once a backend is connected.
function buildAvailableDays(durationMinutes: number): DayAvailability[] {
  const days: DayAvailability[] = [];
  const now = new Date();

  for (let offset = 0; offset < DAYS_AHEAD; offset++) {
    const day = new Date(now);
    day.setDate(now.getDate() + offset);
    const isWeekend = day.getDay() === 0 || day.getDay() === 6;
    if (isWeekend) continue;

    const slots: { time: string; label: string }[] = [];
    for (
      let minutes = BUSINESS_HOURS.startHour * 60;
      minutes + durationMinutes <= BUSINESS_HOURS.endHour * 60;
      minutes += 45
    ) {
      const slotDate = new Date(day);
      slotDate.setHours(0, minutes, 0, 0);

      if (slotDate.getTime() < now.getTime()) continue;

      const hours24 = Math.floor(minutes / 60);
      const mins = minutes % 60;
      const time = `${String(hours24).padStart(2, "0")}:${String(mins).padStart(2, "0")}`;
      const label = slotDate.toLocaleTimeString("en-AU", {
        hour: "numeric",
        minute: "2-digit",
      });
      slots.push({ time, label });
    }

    if (slots.length > 0) {
      days.push({
        date: toDateKey(day),
        label: day.toLocaleDateString("en-AU", {
          weekday: "short",
          day: "numeric",
          month: "short",
        }),
        slots,
      });
    }
  }

  return days;
}

function Calendar({
  availableDates,
  selectedDate,
  onSelectDate,
}: {
  availableDates: Map<string, string>; // date key -> short label
  selectedDate: string;
  onSelectDate: (date: string) => void;
}) {
  const todayKey = toDateKey(new Date());

  const [viewMonth, setViewMonth] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });

  const year = viewMonth.getFullYear();
  const month = viewMonth.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startWeekday = new Date(year, month, 1).getDay();

  const cells: (Date | null)[] = [
    ...Array.from({ length: startWeekday }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => new Date(year, month, i + 1)),
  ];

  const canGoPrev = !(year === new Date().getFullYear() && month === new Date().getMonth());

  return (
    <div className="rounded-2xl border border-gray-200 p-4">
      <div className="mb-3 flex items-center justify-between">
        <button
          type="button"
          disabled={!canGoPrev}
          onClick={() => setViewMonth(new Date(year, month - 1, 1))}
          aria-label="Previous month"
          className="flex h-8 w-8 items-center justify-center rounded-full text-brand-navy transition-colors hover:bg-brand-surface disabled:cursor-not-allowed disabled:opacity-30"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <p className="font-heading text-sm font-semibold text-brand-navy">
          {viewMonth.toLocaleDateString("en-AU", { month: "long", year: "numeric" })}
        </p>
        <button
          type="button"
          onClick={() => setViewMonth(new Date(year, month + 1, 1))}
          aria-label="Next month"
          className="flex h-8 w-8 items-center justify-center rounded-full text-brand-navy transition-colors hover:bg-brand-surface"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-gray-400">
        {WEEKDAY_LABELS.map((label, index) => (
          <div key={`${label}-${index}`}>{label}</div>
        ))}
      </div>

      <div className="mt-1 grid grid-cols-7 gap-1">
        {cells.map((date, index) => {
          if (!date) return <div key={`empty-${index}`} />;

          const key = toDateKey(date);
          const isAvailable = availableDates.has(key);
          const isSelected = key === selectedDate;
          const isToday = key === todayKey;

          return (
            <button
              key={key}
              type="button"
              disabled={!isAvailable}
              onClick={() => onSelectDate(key)}
              aria-current={isToday ? "date" : undefined}
              aria-pressed={isSelected}
              className={`aspect-square rounded-lg text-sm font-medium transition-colors ${
                isSelected
                  ? "bg-brand-blue text-white"
                  : isAvailable
                    ? "text-brand-navy hover:bg-brand-surface"
                    : "cursor-not-allowed text-gray-300"
              } ${isToday && !isSelected ? "ring-1 ring-inset ring-brand-teal" : ""}`}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function StepDateTime({
  service,
  onSelect,
}: {
  service: ConsultationService;
  onSelect: (slot: SelectedSlot) => void;
}) {
  const days = useMemo(
    () => buildAvailableDays(service.durationMinutes),
    [service.durationMinutes],
  );
  const [activeDate, setActiveDate] = useState(days[0]?.date ?? "");

  const availableDates = useMemo(
    () => new Map(days.map((day) => [day.date, day.label])),
    [days],
  );
  const activeDay = days.find((day) => day.date === activeDate);

  if (days.length === 0) {
    return (
      <p className="text-gray-600">
        There are no available times in the next {DAYS_AHEAD} days. Please
        contact us directly to arrange a suitable time.
      </p>
    );
  }

  return (
    <div>
      <p className="text-sm text-gray-500">
        Times shown in Australia/Sydney (AEST/AEDT).
      </p>

      <div className="mt-4 grid gap-6 sm:grid-cols-[minmax(0,320px)_1fr]">
        <Calendar
          availableDates={availableDates}
          selectedDate={activeDate}
          onSelectDate={setActiveDate}
        />

        <div>
          {activeDay ? (
            <>
              <p className="text-sm font-medium text-brand-navy">
                {activeDay.label}
              </p>
              <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {activeDay.slots.map((slot) => (
                  <button
                    key={slot.time}
                    type="button"
                    onClick={() =>
                      onSelect({
                        date: activeDay.date,
                        time: slot.time,
                        label: `${activeDay.label} · ${slot.label}`,
                      })
                    }
                    className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-medium text-brand-navy transition-colors hover:border-brand-blue hover:bg-brand-surface"
                  >
                    {slot.label}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <p className="text-sm text-gray-500">
              Select a highlighted date on the calendar to see available times.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
