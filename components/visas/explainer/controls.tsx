"use client";

import type { ReactNode } from "react";

// Small form controls shared by the explainer tools: a +/- counter, an
// on/off switch and a segmented choice. Each is labelled for screen readers.

export function Stepper({ label, hint, value, min, max, onChange }: { label: string; hint?: string; value: number; min: number; max: number; onChange: (value: number) => void }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <p className="text-sm font-bold text-brand-navy">{label}</p>
        {hint && <p className="text-xs text-gray-500">{hint}</p>}
      </div>
      <div className="flex items-center gap-2" role="group" aria-label={label}>
        <button
          type="button"
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          aria-label={`Fewer: ${label}`}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-navy/15 bg-white text-lg font-bold text-brand-navy hover:bg-brand-mint disabled:opacity-30"
        >
          −
        </button>
        <span className="font-heading w-8 text-center text-xl font-extrabold text-brand-navy" aria-live="polite">
          {value}
        </span>
        <button
          type="button"
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          aria-label={`More: ${label}`}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-navy/15 bg-white text-lg font-bold text-brand-navy hover:bg-brand-mint disabled:opacity-30"
        >
          +
        </button>
      </div>
    </div>
  );
}

export function Switch({ label, hint, checked, onChange }: { label: ReactNode; hint?: ReactNode; checked: boolean; onChange: (value: boolean) => void }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <p className="text-sm font-bold text-brand-navy">{label}</p>
        {hint && <p className="text-xs text-gray-500">{hint}</p>}
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative h-8 w-14 shrink-0 rounded-full transition-colors ${checked ? "bg-brand-primary" : "bg-gray-300"}`}
      >
        <span className="sr-only">{typeof label === "string" ? label : "Toggle"}</span>
        <span className={`absolute top-1 h-6 w-6 rounded-full bg-white shadow transition-all ${checked ? "left-7" : "left-1"}`} />
      </button>
    </div>
  );
}

export function Segmented<T extends string | number>({ label, value, options, onChange }: { label: string; value: T; options: { value: T; label: string }[]; onChange: (value: T) => void }) {
  return (
    <div>
      <p className="text-sm font-bold text-brand-navy">{label}</p>
      <div className="mt-2 inline-flex flex-wrap rounded-full bg-brand-surface p-1" role="radiogroup" aria-label={label}>
        {options.map((option) => (
          <button
            key={String(option.value)}
            type="button"
            role="radio"
            aria-checked={value === option.value}
            onClick={() => onChange(option.value)}
            className={`rounded-full px-4 py-1.5 text-sm font-bold transition-all ${value === option.value ? "bg-brand-navy text-white shadow" : "text-brand-navy/70 hover:text-brand-navy"}`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
