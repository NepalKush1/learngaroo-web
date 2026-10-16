"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import type { ExplainerActor, ExplainerFlow } from "@/data/visas/explainers/types";
import { RichText } from "./RichText";
import { TONES, countWord } from "./tones";

// "The visa in one picture": the players and the moves between them. The
// story plays step by step once the diagram is on screen; tap a step to
// jump, or tap a player to see everything they do. Works for two, three or
// four players: "you" sits at the bottom (or on the left with two).

const VIEW = { w: 600, h: 360 };
// Distance from a player's centre where an arrow starts or stops.
const CLEARANCE = 54;
const STEP_MS = 4200;

type Point = { x: number; y: number };

function layout(actors: ExplainerActor[]): Record<string, Point> {
  const you = actors.find((actor) => actor.id === "you") ?? actors[0];
  const others = actors.filter((actor) => actor !== you);
  const positions: Record<string, Point> = {};
  if (others.length === 1) {
    positions[you.id] = { x: 140, y: 190 };
    positions[others[0].id] = { x: 460, y: 190 };
  } else if (others.length === 2) {
    positions[others[0].id] = { x: 110, y: 96 };
    positions[others[1].id] = { x: 490, y: 96 };
    positions[you.id] = { x: 300, y: 282 };
  } else {
    positions[others[0].id] = { x: 92, y: 182 };
    positions[others[1].id] = { x: 300, y: 70 };
    positions[others[2].id] = { x: 508, y: 182 };
    positions[you.id] = { x: 300, y: 296 };
  }
  return positions;
}

// A curved arrow between two players. Arrows in opposite directions bend to
// opposite sides; repeated moves in the same direction share one curve.
function curve(from: Point, to: Point) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const length = Math.hypot(dx, dy) || 1;
  const ux = dx / length;
  const uy = dy / length;
  const nx = uy;
  const ny = -ux;
  const bend = 34;
  // The name badge sits under each tile, so leave more room below a player.
  const startGap = CLEARANCE + (uy > 0.3 ? 16 : 0);
  const endGap = CLEARANCE + (uy < -0.3 ? 16 : 0);
  const start = { x: from.x + ux * startGap, y: from.y + uy * startGap };
  const end = { x: to.x - ux * endGap, y: to.y - uy * endGap };
  const control = { x: (start.x + end.x) / 2 + nx * bend * 2, y: (start.y + end.y) / 2 + ny * bend * 2 };
  const mid = { x: 0.25 * start.x + 0.5 * control.x + 0.25 * end.x, y: 0.25 * start.y + 0.5 * control.y + 0.25 * end.y };
  return {
    d: `M ${start.x.toFixed(1)} ${start.y.toFixed(1)} Q ${control.x.toFixed(1)} ${control.y.toFixed(1)} ${end.x.toFixed(1)} ${end.y.toFixed(1)}`,
    label: { x: Math.min(VIEW.w - 70, Math.max(70, mid.x + nx * 10)), y: Math.min(VIEW.h - 12, Math.max(14, mid.y + ny * 10)) },
  };
}

const CARD_GRID: Record<number, string> = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-2 xl:grid-cols-4",
};

function Icon({ path, className = "h-6 w-6" }: { path: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
  );
}

export function ThreeParties({ actors, flows, visaName }: { actors: ExplainerActor[]; flows: ExplainerFlow[]; visaName: string }) {
  const [step, setStep] = useState(0);
  const [focus, setFocus] = useState<string | null>(null);
  const [inView, setInView] = useState(false);
  const [stopped, setStopped] = useState(false);
  const reduced = usePrefersReducedMotion();
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = box.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.35 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const playing = inView && !stopped && !reduced && focus === null;
  useEffect(() => {
    if (!playing) return;
    const timer = window.setTimeout(() => setStep((current) => (current + 1) % flows.length), STEP_MS);
    return () => window.clearTimeout(timer);
  }, [playing, step, flows.length]);

  const positions = layout(actors);
  const shapes = flows.map((flow) => curve(positions[flow.from], positions[flow.to]));
  // Every label fits only when there are few moves and no two share a curve.
  const pairs = flows.map((flow) => `${flow.from}>${flow.to}`);
  const allLabels = flows.length <= 4 && new Set(pairs).size === pairs.length;

  const isLit = (index: number) => (focus ? flows[index].from === focus || flows[index].to === focus : index === step);
  const activeActors = new Set<string>(focus ? [focus] : [flows[step].from, flows[step].to]);

  const pickStep = (index: number) => {
    setFocus(null);
    setStep(index);
    setStopped(true);
  };
  const pickActor = (id: string) => {
    setFocus((current) => (current === id ? null : id));
    setStopped(true);
  };

  return (
    <section id="picture" className="relative scroll-mt-32 overflow-hidden py-16 sm:py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-brand-mint/60 blur-3xl" aria-hidden="true" />
      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="How it works"
            title={`The ${visaName} in one picture`}
            highlight="one picture"
            subtitle={`${countWord(actors.length)} players, ${countWord(flows.length).toLowerCase()} moves. Watch the story play, tap a step to jump to it, or tap a player to see everything they do.`}
            align="center"
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
            {/* Diagram */}
            <div ref={box} className="relative mx-auto aspect-[5/3] w-full max-w-2xl">
              <svg viewBox={`0 0 ${VIEW.w} ${VIEW.h}`} className="absolute inset-0 h-full w-full" aria-hidden="true">
                <defs>
                  <marker id="arrow-on" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" className="fill-brand-primary" />
                  </marker>
                  <marker id="arrow-off" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" className="fill-gray-300" />
                  </marker>
                </defs>
                {/* One path per distinct curve; unlit first so lit ones draw on top. */}
                {[...new Set(pairs)]
                  .map((pair) => ({ pair, index: pairs.indexOf(pair), on: pairs.some((item, i) => item === pair && isLit(i)) }))
                  .sort((a, b) => Number(a.on) - Number(b.on))
                  .map(({ pair, index, on }) => {
                    return (
                      <path
                        key={pair}
                        d={shapes[index].d}
                        fill="none"
                        strokeWidth={on ? 3.5 : 2}
                        strokeLinecap="round"
                        markerEnd={`url(#${on ? "arrow-on" : "arrow-off"})`}
                        className={`transition-all duration-500 ${on ? "flow-dash stroke-brand-primary" : "stroke-gray-300"}`}
                      />
                    );
                  })}
              </svg>

              {/* Arrow labels: the lit move's label always shows; with few moves, all show. */}
              {flows.map((flow, index) => {
                const on = isLit(index);
                if (!on && !allLabels) return null;
                const pos = shapes[index].label;
                return (
                  <span
                    key={`label-${index}`}
                    className={`absolute hidden -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-bold shadow-sm transition-all duration-300 sm:block ${
                      on ? "z-10 scale-105 bg-brand-primary text-white shadow-brand-primary/30" : "bg-white text-gray-500 ring-1 ring-gray-200"
                    }`}
                    style={{ left: `${(pos.x / VIEW.w) * 100}%`, top: `${(pos.y / VIEW.h) * 100}%` }}
                    aria-hidden="true"
                  >
                    {index + 1}. {flow.label}
                  </span>
                );
              })}

              {/* Players */}
              {actors.map((actor) => {
                const pos = positions[actor.id];
                const tone = TONES[actor.tone];
                const lit = activeActors.has(actor.id);
                return (
                  <button
                    key={actor.id}
                    type="button"
                    onClick={() => pickActor(actor.id)}
                    aria-pressed={focus === actor.id}
                    aria-label={`${actor.name}: ${actor.role.replace(/\[\[([a-z0-9-]+)(?:\|([^\]]+))?\]\]/g, (_, id: string, label?: string) => label ?? id)}`}
                    className="group absolute z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center focus-visible:outline-none"
                    style={{ left: `${(pos.x / VIEW.w) * 100}%`, top: `${(pos.y / VIEW.h) * 100}%` }}
                  >
                    <span
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg transition-all duration-300 group-focus-visible:ring-4 sm:h-20 sm:w-20 sm:rounded-3xl ${tone.bg} ${
                        lit ? `scale-110 ring-4 ${tone.ring}` : "opacity-80 group-hover:scale-105 group-hover:opacity-100"
                      }`}
                    >
                      <Icon path={actor.icon} className="h-7 w-7 sm:h-9 sm:w-9" />
                    </span>
                    <span className={`mt-2 max-w-[8rem] rounded-full bg-white px-2.5 py-0.5 text-center text-xs font-bold leading-tight shadow-sm ring-1 ring-gray-100 sm:text-sm ${tone.text}`}>
                      {actor.short}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Story */}
            <div>
              <ol className="space-y-2.5">
                {flows.map((flow, index) => {
                  const isActive = focus === null && index === step;
                  return (
                    <li
                      key={`${flow.from}-${flow.to}-${index}`}
                      className={`rounded-2xl border transition-all duration-300 ${
                        isActive ? "border-brand-primary/30 bg-white shadow-float" : "border-transparent bg-white/60 hover:bg-white"
                      }`}
                    >
                      <button type="button" onClick={() => pickStep(index)} aria-pressed={isActive} className="flex w-full items-center gap-3 p-4 text-left">
                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-sm font-extrabold transition-colors ${
                            isActive ? "bg-brand-primary text-white" : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          {index + 1}
                        </span>
                        <span className={`font-heading text-[15px] font-bold ${isActive ? "text-brand-navy" : "text-brand-navy/70"}`}>{flow.label}</span>
                      </button>
                      {isActive && (
                        <p className="hero-rise -mt-2 px-4 pb-4 pl-[3.75rem] text-sm leading-relaxed text-gray-600">
                          <RichText text={flow.detail} />
                        </p>
                      )}
                    </li>
                  );
                })}
              </ol>
              {!reduced && (
                <button
                  type="button"
                  onClick={() => {
                    setFocus(null);
                    setStopped((value) => !value);
                  }}
                  className="mt-4 inline-flex items-center gap-2 rounded-full border border-brand-navy/15 bg-white px-4 py-2 text-sm font-bold text-brand-navy transition-colors hover:bg-brand-mint"
                >
                  <span className={`h-2 w-2 rounded-full ${playing ? "bg-brand-green" : "bg-gray-400"}`} aria-hidden="true" />
                  {stopped ? "Play the story" : "Pause"}
                </button>
              )}
            </div>
          </div>
        </Reveal>

        {/* What each player does */}
        <div className={`mt-12 grid gap-4 ${CARD_GRID[actors.length] ?? "md:grid-cols-3"}`}>
          {actors.map((actor, index) => {
            const tone = TONES[actor.tone];
            const isFocus = focus === actor.id;
            return (
              <Reveal key={actor.id} delay={index * 80}>
                <div
                  className={`flex h-full w-full flex-col rounded-3xl border bg-white p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-float ${
                    isFocus ? `border-transparent shadow-float ring-2 ${tone.ring}` : "border-gray-100 shadow-sm"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-white ${tone.bg}`}>
                      <Icon path={actor.icon} className="h-5 w-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-heading text-lg font-bold leading-snug text-brand-navy">{actor.name}</h3>
                      <button
                        type="button"
                        onClick={() => pickActor(actor.id)}
                        aria-pressed={isFocus}
                        className={`text-xs font-bold uppercase tracking-wider underline-offset-2 hover:underline ${tone.text}`}
                      >
                        {isFocus ? "Showing on the diagram" : "Show on the diagram"}
                      </button>
                    </div>
                  </div>
                  <p className="mt-3 text-[15px] leading-relaxed text-gray-600">
                    <RichText text={actor.role} />
                  </p>
                  <ul className="mt-4 space-y-2 border-t border-gray-100 pt-4">
                    {actor.does.map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-gray-700">
                        <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${tone.bg}`} aria-hidden="true" />
                        <span>
                          <RichText text={item} />
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
