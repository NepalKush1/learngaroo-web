"use client";

import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

// Illustrates how we work (the same four steps as the Process section).
// It is a walkthrough of the service, not a real client's case status.
const STAGES = ["Assess", "Plan", "Apply", "Support"];
const STEP_MS = 2200;

export function JourneyTracker({ className = "" }: { className?: string }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [tick, setTick] = useState(0);
  const active = prefersReducedMotion ? STAGES.length - 1 : tick % STAGES.length;

  useEffect(() => {
    if (prefersReducedMotion) return;
    const id = window.setInterval(() => setTick((value) => value + 1), STEP_MS);
    return () => window.clearInterval(id);
  }, [prefersReducedMotion]);

  return (
    <div
      className={`w-60 rounded-2xl bg-white/90 p-4 shadow-xl ring-1 ring-gray-100 backdrop-blur ${className}`}
      aria-hidden="true"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-[0.14em] text-gray-500">How we work</span>
        <span className="text-xs font-bold text-brand-primary">
          {active + 1}/{STAGES.length}
        </span>
      </div>
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-gray-100">
        <div
          className="bg-gradient-brand h-full rounded-full transition-[width] duration-700 ease-out"
          style={{ width: `${((active + 1) / STAGES.length) * 100}%` }}
        />
      </div>
      <ol className="mt-3 grid grid-cols-4 gap-1">
        {STAGES.map((stage, index) => {
          const done = index < active;
          const current = index === active;
          return (
            <li key={stage} className="flex flex-col items-center gap-1.5">
              <span
                className={`flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-extrabold transition-all duration-500 ${
                  current
                    ? "scale-110 bg-brand-primary text-white shadow-md shadow-brand-primary/30"
                    : done
                      ? "bg-brand-mint text-brand-primary"
                      : "bg-gray-100 text-gray-400"
                }`}
              >
                {done ? "✓" : index + 1}
              </span>
              <span
                className={`text-[11px] font-semibold transition-colors duration-500 ${
                  current ? "text-brand-navy" : "text-gray-400"
                }`}
              >
                {stage}
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
