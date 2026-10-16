"use client";

import { useEffect, useMemo, useState } from "react";
import type { ConsultationService } from "@/data/consultations";
import { addDaysToKey, formatInZone, weekdayOfKey } from "@/lib/timezone";

export interface SelectedSlot {
  startsAt: string; // UTC ISO
  label: string; // in the practice's time zone, e.g. "Mon, 12 Oct 2026, 9:00 am AEDT"
  localLabel: string | null; // in the visitor's time zone, when different
}

interface AvailabilityResponse {
  timeZone: string;
  days: { date: string; slots: string[] }[];
}

const WEEKDAY_LABELS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export function visitorTimeZone(): string {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
    return "UTC";
  }
}

function monthOf(dateKey: string) {
  const [year, month] = dateKey.split("-").map(Number);
  return { year, month }; // month 1–12
}

function keyFor(year: number, month: number, day: number) {
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function shiftMonth(year: number, month: number, delta: number) {
  const index = year * 12 + (month - 1) + delta;
  return { year: Math.floor(index / 12), month: (index % 12) + 1 };
}

// Calendar works purely on "YYYY-MM-DD" keys in the practice's time zone,
// so the highlighted days match the practice's calendar wherever the
// visitor is.
function Calendar({
  availableDates,
  firstDate,
  lastDate,
  selectedDate,
  onSelectDate,
}: {
  availableDates: Set<string>;
  firstDate: string;
  lastDate: string;
  selectedDate: string;
  onSelectDate: (date: string) => void;
}) {
  const [view, setView] = useState(() => monthOf(selectedDate || firstDate));
  const daysInMonth = new Date(Date.UTC(view.year, view.month, 0)).getUTCDate();
  const startWeekday = weekdayOfKey(keyFor(view.year, view.month, 1));
  const cells = [
    ...Array.from({ length: startWeekday }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => keyFor(view.year, view.month, i + 1)),
  ];

  const first = monthOf(firstDate);
  const last = monthOf(lastDate);
  const canGoPrev = view.year * 12 + view.month > first.year * 12 + first.month;
  const canGoNext = view.year * 12 + view.month < last.year * 12 + last.month;
  const title = formatInZone(`${keyFor(view.year, view.month, 1)}T12:00:00Z`, "UTC", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="rounded-2xl border border-gray-200 p-4">
      <div className="mb-3 flex items-center justify-between">
        <button
          type="button"
          disabled={!canGoPrev}
          onClick={() => setView(shiftMonth(view.year, view.month, -1))}
          aria-label="Previous month"
          className="flex h-8 w-8 items-center justify-center rounded-full text-brand-navy transition-colors hover:bg-brand-surface disabled:cursor-not-allowed disabled:opacity-30"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <p className="font-heading text-sm font-semibold text-brand-navy" aria-live="polite">
          {title}
        </p>
        <button
          type="button"
          disabled={!canGoNext}
          onClick={() => setView(shiftMonth(view.year, view.month, 1))}
          aria-label="Next month"
          className="flex h-8 w-8 items-center justify-center rounded-full text-brand-navy transition-colors hover:bg-brand-surface disabled:cursor-not-allowed disabled:opacity-30"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-gray-500">
        {WEEKDAY_LABELS.map((label, index) => (
          <div key={`${label}-${index}`}>{label}</div>
        ))}
      </div>

      <div className="mt-1 grid grid-cols-7 gap-1">
        {cells.map((key, index) => {
          if (!key) return <div key={`empty-${index}`} />;
          const isAvailable = availableDates.has(key);
          const isSelected = key === selectedDate;
          const isToday = key === firstDate;

          return (
            <button
              key={key}
              type="button"
              disabled={!isAvailable}
              onClick={() => onSelectDate(key)}
              aria-current={isToday ? "date" : undefined}
              aria-pressed={isSelected}
              aria-label={`${formatInZone(`${key}T12:00:00Z`, "UTC", { weekday: "long", day: "numeric", month: "long" })}${isAvailable ? "" : " — unavailable"}`}
              className={`aspect-square rounded-lg text-sm font-medium transition-colors ${
                isSelected
                  ? "bg-brand-primary text-white"
                  : isAvailable
                    ? "bg-brand-mint/60 text-brand-navy hover:bg-brand-mint"
                    : "cursor-not-allowed text-gray-300"
              } ${isToday && !isSelected ? "ring-1 ring-inset ring-brand-green" : ""}`}
            >
              {Number(key.slice(8))}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function StepDateTime({
  service,
  notice,
  onSelect,
}: {
  service: ConsultationService;
  notice?: string | null;
  onSelect: (slot: SelectedSlot) => void;
}) {
  const [data, setData] = useState<AvailabilityResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [activeDate, setActiveDate] = useState("");
  const [localZone] = useState(visitorTimeZone);

  useEffect(() => {
    let cancelled = false;
    fetch(`/api/availability?service=${encodeURIComponent(service.id)}`, { cache: "no-store" })
      .then((response) => {
        if (!response.ok) throw new Error();
        return response.json() as Promise<AvailabilityResponse>;
      })
      .then((result) => {
        if (cancelled) return;
        setData(result);
        setActiveDate(result.days[0]?.date ?? "");
      })
      .catch(() => {
        if (!cancelled) setError("We couldn't load available times. Please refresh the page, or contact us to book.");
      });
    return () => {
      cancelled = true;
    };
  }, [service.id]);

  const availableDates = useMemo(() => new Set(data?.days.map((day) => day.date)), [data]);

  if (error) return <p className="rounded-xl bg-red-50 p-4 text-sm text-red-700">{error}</p>;

  if (!data) {
    return (
      <div className="grid gap-6 sm:grid-cols-[minmax(0,320px)_1fr]" aria-busy="true" aria-label="Loading available times">
        <div className="h-72 animate-pulse rounded-2xl bg-gray-100" />
        <div className="grid h-fit grid-cols-2 gap-3 sm:grid-cols-3">
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i} className="h-11 animate-pulse rounded-xl bg-gray-100" />
          ))}
        </div>
      </div>
    );
  }

  if (data.days.length === 0) {
    return (
      <p className="text-gray-600">
        There are no available times at the moment. Please contact us
        directly to arrange a suitable time.
      </p>
    );
  }

  const practiceZone = data.timeZone;
  const showLocal = localZone !== practiceZone;
  const activeDay = data.days.find((day) => day.date === activeDate);
  const firstDate = data.days[0].date;
  const lastDate = data.days[data.days.length - 1].date ?? addDaysToKey(firstDate, 30);
  const zoneName = formatInZone(new Date(), practiceZone, { timeZoneName: "short" }).split(" ").pop();

  return (
    <div>
      {notice && (
        <p className="mb-4 rounded-xl bg-amber-50 p-4 text-sm font-medium text-amber-800" role="alert">
          {notice}
        </p>
      )}
      <p className="text-sm text-gray-500">
        Times are shown in Melbourne time ({zoneName})
        {showLocal && <> with your local time ({localZone.replace(/_/g, " ")}) underneath</>}.
      </p>

      <div className="mt-4 grid gap-6 sm:grid-cols-[minmax(0,320px)_1fr]">
        <Calendar
          availableDates={availableDates}
          firstDate={firstDate}
          lastDate={lastDate}
          selectedDate={activeDate}
          onSelectDate={setActiveDate}
        />

        <div>
          {activeDay ? (
            <>
              <p className="text-sm font-semibold text-brand-navy">
                {formatInZone(`${activeDay.date}T12:00:00Z`, "UTC", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                })}
              </p>
              <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {activeDay.slots.map((startsAt) => {
                  const time = formatInZone(startsAt, practiceZone, { hour: "numeric", minute: "2-digit" });
                  const local = showLocal
                    ? formatInZone(startsAt, localZone, { weekday: "short", hour: "numeric", minute: "2-digit" })
                    : null;
                  return (
                    <button
                      key={startsAt}
                      type="button"
                      onClick={() =>
                        onSelect({
                          startsAt,
                          label: formatInZone(startsAt, practiceZone, {
                            weekday: "short",
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                            hour: "numeric",
                            minute: "2-digit",
                            timeZoneName: "short",
                          }),
                          localLabel: showLocal
                            ? formatInZone(startsAt, localZone, {
                                weekday: "short",
                                day: "numeric",
                                month: "short",
                                hour: "numeric",
                                minute: "2-digit",
                                timeZoneName: "short",
                              })
                            : null,
                        })
                      }
                      className="rounded-xl border border-gray-200 px-3 py-2.5 text-sm font-semibold text-brand-navy transition-colors hover:border-brand-primary hover:bg-brand-mint"
                    >
                      {time}
                      {local && <span className="block text-xs font-medium text-gray-500">{local} your time</span>}
                    </button>
                  );
                })}
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
