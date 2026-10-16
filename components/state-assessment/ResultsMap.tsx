"use client";

import { useState } from "react";
import { mapShapes } from "@/data/australia-map";
import { stateNames, type StateResult, type StateVerdict } from "@/lib/state-assessment";

// Your results on the map: each state coloured by how well you fit its
// published criteria. Tap a state to jump to its card.

export const VERDICT_STYLE: Record<StateVerdict, { fill: string; swatch: string; label: string; badge: string }> = {
  match: { fill: "fill-emerald-500", swatch: "bg-emerald-500", label: "You fit, and it's taking applications", badge: "bg-emerald-600 text-white" },
  paused: { fill: "fill-amber-300", swatch: "bg-amber-300", label: "You fit its last criteria; program paused", badge: "bg-amber-400 text-brand-navy" },
  soon: { fill: "fill-sky-300", swatch: "bg-sky-300", label: "You could fit within 12 months", badge: "bg-sky-500 text-white" },
  closed: { fill: "fill-rose-200", swatch: "bg-rose-200", label: "You fit, but the stream is closed", badge: "bg-rose-500 text-white" },
  no: { fill: "fill-gray-200", swatch: "bg-gray-200", label: "No pathway on these answers", badge: "bg-gray-200 text-gray-700" },
};

export function ResultsMap({ results }: { results: StateResult[] }) {
  const [hovered, setHovered] = useState<string | null>(null);
  const bySlug = new Map(results.map((result) => [result.data.state as string, result]));
  const hoveredShape = hovered ? mapShapes.find((shape) => shape.slug === hovered) : undefined;
  const hoveredResult = hovered ? bySlug.get(hovered) : undefined;

  const jump = (slug: string) => document.getElementById(`state-${slug}`)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="relative min-w-0 rounded-[2rem] border border-gray-100 bg-white p-4 shadow-card sm:p-6">
      <svg viewBox="0 0 960 700" className="h-auto w-full" role="group" aria-label="Map of your results by state">
        {mapShapes.map((shape) => {
          const result = bySlug.get(shape.slug);
          const verdict = result?.verdict ?? "no";
          const name = result ? stateNames[result.data.state].name : shape.slug;
          return (
            <path
              key={shape.slug}
              d={shape.path}
              role="button"
              tabIndex={0}
              aria-label={`${name}: ${VERDICT_STYLE[verdict].label}`}
              onMouseEnter={() => setHovered(shape.slug)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(shape.slug)}
              onBlur={() => setHovered(null)}
              onClick={() => jump(shape.slug)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  jump(shape.slug);
                }
              }}
              className={`cursor-pointer stroke-white outline-none transition-all duration-500 [stroke-width:2] hover:opacity-80 focus-visible:stroke-brand-navy ${VERDICT_STYLE[verdict].fill}`}
            />
          );
        })}
        {mapShapes.map((shape) => {
          const short = stateNames[shape.slug as keyof typeof stateNames]?.short;
          if (!short) return null;
          if (shape.callout) {
            return (
              <g key={`${shape.slug}-label`} className="pointer-events-none">
                <line x1={shape.callout[0]} y1={shape.callout[1]} x2={shape.label[0] - 8} y2={shape.label[1] - 4} className="stroke-brand-navy/50" strokeWidth={1.5} />
                <text x={shape.label[0]} y={shape.label[1]} className="fill-brand-navy text-[20px] font-extrabold" style={{ fontFamily: "inherit" }}>
                  {short}
                </text>
              </g>
            );
          }
          return (
            <text key={`${shape.slug}-label`} x={shape.label[0]} y={shape.label[1]} textAnchor="middle" className="pointer-events-none fill-brand-navy text-[22px] font-extrabold" style={{ fontFamily: "inherit" }}>
              {short}
            </text>
          );
        })}
      </svg>

      {hoveredShape && hoveredResult && (
        <div
          className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-full rounded-xl bg-brand-navy px-3 py-2 text-xs text-white shadow-lg"
          style={{ left: `${(hoveredShape.label[0] / 960) * 100}%`, top: `${(hoveredShape.label[1] / 700) * 100}%` }}
        >
          <span className="font-bold">{stateNames[hoveredResult.data.state].name}</span>
          <span className="ml-2">{VERDICT_STYLE[hoveredResult.verdict].label}</span>
        </div>
      )}

      <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-gray-600" aria-label="Legend">
        {(Object.keys(VERDICT_STYLE) as StateVerdict[]).map((key) => (
          <li key={key} className="flex items-center gap-1.5">
            <span className={`h-3 w-3 rounded-sm ${VERDICT_STYLE[key].swatch}`} aria-hidden="true" />
            {VERDICT_STYLE[key].label}
          </li>
        ))}
      </ul>
    </div>
  );
}
