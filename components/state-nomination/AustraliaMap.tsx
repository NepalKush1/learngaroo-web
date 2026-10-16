"use client";

import { useState } from "react";
import Link from "next/link";
import { mapShapes } from "@/data/australia-map";
import { statePrograms, statusLabels, type ProgramStatus } from "@/data/state-nomination";

// Interactive map of Australia coloured by each program's current status.
// Hover highlights a state and shows a tooltip; click (or keyboard) selects
// it and fills the panel beside the map with its summary and guide link.

const fill: Record<ProgramStatus, string> = {
  open: "fill-emerald-400",
  limited: "fill-amber-300",
  closed: "fill-rose-300",
  pending: "fill-gray-300",
};
const fillHover: Record<ProgramStatus, string> = {
  open: "hover:fill-emerald-500",
  limited: "hover:fill-amber-400",
  closed: "hover:fill-rose-400",
  pending: "hover:fill-gray-400",
};

export function AustraliaMap() {
  const [selected, setSelected] = useState<string>("tasmania");
  const [hovered, setHovered] = useState<string | null>(null);
  const program = statePrograms.find((item) => item.slug === selected) ?? statePrograms[0];
  const hoveredProgram = hovered ? statePrograms.find((item) => item.slug === hovered) : null;
  const hoveredShape = hovered ? mapShapes.find((shape) => shape.slug === hovered) : null;

  return (
    <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
      <div className="relative rounded-[2rem] border border-gray-100 bg-white p-4 shadow-card sm:p-6">
        <svg viewBox="0 0 960 700" className="h-auto w-full" role="group" aria-label="Map of Australia showing state nomination status">
          <defs>
            <filter id="map-shadow" x="-5%" y="-5%" width="110%" height="110%">
              <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#0f2a3d" floodOpacity="0.18" />
            </filter>
          </defs>
          {mapShapes.map((shape) => {
            const item = statePrograms.find((entry) => entry.slug === shape.slug);
            if (!item) return null;
            const isSelected = selected === shape.slug;
            const isHovered = hovered === shape.slug;
            return (
              <g key={shape.slug}>
                <path
                  d={shape.path}
                  role="button"
                  tabIndex={0}
                  aria-label={`${item.name}: ${statusLabels[item.status].label}`}
                  aria-pressed={isSelected}
                  onMouseEnter={() => setHovered(shape.slug)}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered(shape.slug)}
                  onBlur={() => setHovered(null)}
                  onClick={() => setSelected(shape.slug)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setSelected(shape.slug);
                    }
                  }}
                  className={`cursor-pointer stroke-white transition-all duration-200 outline-none ${fill[item.status]} ${fillHover[item.status]} ${
                    isSelected ? "stroke-brand-navy [stroke-width:3]" : "[stroke-width:2]"
                  } ${isSelected || isHovered ? "opacity-100" : "opacity-90"}`}
                  style={isSelected ? { filter: "url(#map-shadow)" } : undefined}
                />
              </g>
            );
          })}
          {/* Labels drawn after shapes so they sit on top. */}
          {mapShapes.map((shape) => {
            const item = statePrograms.find((entry) => entry.slug === shape.slug);
            if (!item) return null;
            if (shape.callout) {
              return (
                <g key={`${shape.slug}-label`} className="pointer-events-none">
                  <line x1={shape.callout[0]} y1={shape.callout[1]} x2={shape.label[0] - 8} y2={shape.label[1] - 4} className="stroke-brand-navy/50" strokeWidth={1.5} />
                  <text x={shape.label[0]} y={shape.label[1]} className="fill-brand-navy text-[20px] font-extrabold" style={{ fontFamily: "inherit" }}>{item.short}</text>
                </g>
              );
            }
            return (
              <text key={`${shape.slug}-label`} x={shape.label[0]} y={shape.label[1]} textAnchor="middle" className="pointer-events-none fill-brand-navy text-[22px] font-extrabold" style={{ fontFamily: "inherit" }}>
                {item.short}
              </text>
            );
          })}
        </svg>

        {/* Tooltip */}
        {hoveredProgram && hoveredShape && (
          <div
            className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-full rounded-xl bg-brand-navy px-3 py-2 text-xs text-white shadow-lg"
            style={{ left: `${(hoveredShape.label[0] / 960) * 100}%`, top: `${(hoveredShape.label[1] / 700) * 100}%` }}
          >
            <span className="font-bold">{hoveredProgram.name}</span>
            <span className="ml-2 rounded-full bg-white/15 px-1.5 py-0.5">{statusLabels[hoveredProgram.status].label}</span>
          </div>
        )}

        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-gray-600" aria-label="Legend">
          {(["open", "limited", "closed", "pending"] as const).map((key) => (
            <li key={key} className="flex items-center gap-1.5">
              <span className={`h-3 w-3 rounded-sm ${fill[key].replace("fill-", "bg-")}`} aria-hidden="true" />
              {statusLabels[key].label}
            </li>
          ))}
          <li className="ml-auto text-gray-400">Tap a state for its summary</li>
        </ul>
      </div>

      {/* Selected state panel */}
      <div key={program.slug} className="hero-rise flex flex-col rounded-[2rem] border border-gray-100 bg-white p-6 shadow-card sm:p-8">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="font-heading text-3xl font-extrabold text-brand-navy">{program.short}</span>
            <span className="block text-sm font-semibold text-brand-navy/70">{program.name}</span>
          </div>
          <span className={`rounded-full px-3 py-1 text-xs font-bold ring-1 ${statusLabels[program.status].className}`}>{statusLabels[program.status].label}</span>
        </div>
        <dl className="mt-5 grid grid-cols-2 gap-2 text-sm">
          <div className="rounded-xl bg-brand-surface p-3">
            <dt className="text-[11px] font-bold uppercase tracking-wider text-gray-500">190 places {program.allocation.year}</dt>
            <dd className="font-heading text-xl font-extrabold text-brand-navy">{program.allocation.sc190?.toLocaleString("en-AU") ?? "TBA"}</dd>
          </div>
          <div className="rounded-xl bg-brand-surface p-3">
            <dt className="text-[11px] font-bold uppercase tracking-wider text-gray-500">491 places {program.allocation.year}</dt>
            <dd className="font-heading text-xl font-extrabold text-brand-navy">{program.allocation.sc491?.toLocaleString("en-AU") ?? "TBA"}</dd>
          </div>
          <div className="rounded-xl bg-brand-surface p-3">
            <dt className="text-[11px] font-bold uppercase tracking-wider text-gray-500">Streams</dt>
            <dd className="font-heading text-xl font-extrabold text-brand-navy">{program.streams.length}</dd>
          </div>
          <div className="rounded-xl bg-brand-surface p-3">
            <dt className="text-[11px] font-bold uppercase tracking-wider text-gray-500">Checked</dt>
            <dd className="text-sm font-bold text-brand-navy">{program.checkedOn}</dd>
          </div>
        </dl>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-600">{program.statusNote}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link href={`/state-nomination/${program.slug}`} className="inline-flex items-center gap-1.5 rounded-full bg-brand-primary px-4 py-2 text-sm font-bold text-white hover:bg-brand-primary-dark">
            Read the {program.short} guide →
          </Link>
          <a href={program.officialUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full border border-brand-navy/15 bg-white px-4 py-2 text-sm font-bold text-brand-navy hover:bg-brand-mint">
            Official site ↗
          </a>
        </div>
      </div>
    </div>
  );
}
