"use client";

import type { ReactNode } from "react";

// Shared building blocks for the step-by-step calculators: a progress
// header, big tappable option cards, and the Back / Next footer. Each
// calculator owns its own questions and scoring; this file is only UI.

export function WizardProgress({ step, total, label }: { step: number; total: number; label: string }) {
  const percent = Math.round(((step + 1) / total) * 100);
  return (
    <div>
      <div className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.14em] text-gray-500">
        <span>{label}</span>
        <span>
          Step {step + 1} of {total}
        </span>
      </div>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-200" role="progressbar" aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100}>
        <div className="h-full rounded-full bg-gradient-brand transition-all duration-500 ease-out" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}

export function WizardQuestion({ title, help, children }: { title: string; help?: ReactNode; children: ReactNode }) {
  return (
    <div key={title} className="hero-rise">
      <h2 className="font-heading text-2xl font-extrabold text-brand-navy sm:text-3xl">{title}</h2>
      {help && <p className="mt-2 text-[15px] leading-relaxed text-gray-600">{help}</p>}
      <div className="mt-6">{children}</div>
    </div>
  );
}

export interface WizardChoice<T extends string> {
  value: T;
  label: string;
  hint?: string;
  badge?: string;
}

export function WizardChoices<T extends string>({
  name,
  value,
  options,
  onChange,
  columns = 2,
}: {
  name: string;
  value: T | undefined;
  options: WizardChoice<T>[];
  onChange: (value: T) => void;
  columns?: 1 | 2 | 3;
}) {
  const grid = columns === 1 ? "grid-cols-1" : columns === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2";
  return (
    <div className={`grid gap-3 ${grid}`} role="radiogroup" aria-label={name}>
      {options.map((option, index) => {
        const selected = value === option.value;
        return (
          <label
            key={option.value}
            className={`hero-rise flex cursor-pointer items-start gap-3 rounded-2xl border-2 p-4 transition-all duration-200 hover:-translate-y-0.5 ${
              selected ? "border-brand-primary bg-brand-mint shadow-md" : "border-gray-200 bg-white hover:border-brand-primary/40"
            }`}
            style={{ ["--rise-delay" as string]: `${index * 50}ms` }}
          >
            <input type="radio" name={name} value={option.value} checked={selected} onChange={() => onChange(option.value)} className="sr-only" />
            <span
              className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                selected ? "border-brand-primary bg-brand-primary text-white" : "border-gray-300 bg-white text-transparent"
              }`}
              aria-hidden="true"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} className="h-3.5 w-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m5 12.5 4.5 4.5L19 7.5" />
              </svg>
            </span>
            <span className="flex-1">
              <span className="block text-[15px] font-bold leading-snug text-brand-navy">{option.label}</span>
              {option.hint && <span className="mt-0.5 block text-xs leading-relaxed text-gray-500">{option.hint}</span>}
            </span>
            {option.badge && (
              <span className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-bold ${selected ? "bg-brand-primary text-white" : "bg-gray-100 text-gray-600"}`}>
                {option.badge}
              </span>
            )}
          </label>
        );
      })}
    </div>
  );
}

export function WizardFooter({
  canBack,
  canNext,
  onBack,
  onNext,
  nextLabel = "Next",
  onReset,
}: {
  canBack: boolean;
  canNext: boolean;
  onBack: () => void;
  onNext: () => void;
  nextLabel?: string;
  onReset?: () => void;
}) {
  return (
    <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 pt-6">
      <button
        type="button"
        onClick={onBack}
        disabled={!canBack}
        className="rounded-full border border-brand-navy/15 bg-white px-5 py-2.5 text-sm font-bold text-brand-navy transition-colors hover:bg-brand-mint disabled:opacity-40 disabled:hover:bg-white"
      >
        ← Back
      </button>
      <div className="flex items-center gap-3">
        {onReset && (
          <button type="button" onClick={onReset} className="text-sm font-semibold text-gray-500 hover:text-brand-navy hover:underline">
            Start over
          </button>
        )}
        <button
          type="button"
          onClick={onNext}
          disabled={!canNext}
          className="rounded-full bg-brand-primary px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand-primary/25 transition-all hover:-translate-y-0.5 hover:bg-brand-primary-dark disabled:translate-y-0 disabled:opacity-40"
        >
          {nextLabel} →
        </button>
      </div>
    </div>
  );
}

export function WizardShell({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-3xl rounded-[2rem] border border-gray-100 bg-white p-6 shadow-float sm:p-10">{children}</div>;
}
