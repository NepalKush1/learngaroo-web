"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Confetti } from "@/components/motion/Confetti";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { accents } from "@/lib/accents";
import type { ExplainerActor, ExplainerStage } from "@/data/visas/explainers/types";
import { RichText } from "./RichText";
import { accentOf, toneOf } from "./tones";

// The whole process as the same autoplaying timeline used on the homepage.
// Each stage says who acts, what it costs and what you hold at the end, so
// progress is always visible. Colours follow the players in the diagram.

const AUTOPLAY_MS = 6500;
const SWIPE_PX = 40;

function Icon({ path, className = "h-5 w-5" }: { path: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
  );
}

export function ExplainerJourney({
  stages,
  actors,
  visaName,
  title,
  highlight,
}: {
  stages: ExplainerStage[];
  actors: ExplainerActor[];
  visaName: string;
  title: string;
  highlight?: string;
}) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [userStopped, setUserStopped] = useState(false);
  const [inView, setInView] = useState(false);
  const reduced = usePrefersReducedMotion();
  const touchStart = useRef<number | null>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.3 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const playing = inView && !reduced && !userStopped && !paused;
  const stage = stages[active];
  const accent = accentOf(actors, stage.who[0]);
  const shortName = (id: string) => actors.find((actor) => actor.id === id)?.short ?? id;
  // Only players who act somewhere in the timeline appear in the key.
  const keyActors = actors.filter((actor) => stages.some((item) => item.who.includes(actor.id)));
  const last = stages.length - 1;
  const progress = `calc(2.5rem + (100% - 5rem) * ${active / last})`;

  const goTo = useCallback(
    (index: number, fromUser = true) => {
      setActive((index + stages.length) % stages.length);
      if (fromUser) setUserStopped(true);
    },
    [stages.length],
  );

  useEffect(() => {
    if (!playing) return;
    const timer = window.setTimeout(() => setActive((current) => (current + 1) % stages.length), AUTOPLAY_MS);
    return () => window.clearTimeout(timer);
  }, [playing, active, stages.length]);

  const onKeyDown = (event: React.KeyboardEvent) => {
    const keys: Record<string, number> = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
    let next: number | null = null;
    if (event.key in keys) next = (active + keys[event.key] + stages.length) % stages.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = last;
    if (next === null) return;
    event.preventDefault();
    goTo(next);
    tabRefs.current[next]?.focus();
  };

  const onTouchStart = (event: React.TouchEvent) => {
    touchStart.current = event.touches[0].clientX;
    setPaused(true);
  };
  const onTouchEnd = (event: React.TouchEvent) => {
    setPaused(false);
    if (touchStart.current === null) return;
    const delta = event.changedTouches[0].clientX - touchStart.current;
    touchStart.current = null;
    if (Math.abs(delta) > SWIPE_PX) goTo(active + (delta < 0 ? 1 : -1));
  };

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="relative scroll-mt-32 overflow-hidden bg-brand-surface py-16 sm:py-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <Confetti />
      <div className={`pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full opacity-40 blur-3xl transition-colors duration-700 ${accent.soft}`} aria-hidden="true" />
      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="Step by step"
            title={title}
            highlight={highlight}
            subtitle={`The ${visaName} in ${stages.length} stages. It plays on its own; tap a stage, swipe, or use the arrow keys to take over.`}
            align="center"
          />
          <ul className="mt-6 flex flex-wrap justify-center gap-2 text-xs font-bold" aria-label="Colour key">
            {keyActors.map((actor) => (
              <li key={actor.id} className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-brand-navy/70 shadow-sm ring-1 ring-gray-100">
                <span className={`h-2.5 w-2.5 rounded-full ${accents[toneOf(actors, actor.id).accent].tile}`} aria-hidden="true" />
                {actor.short} {actor.id === "you" ? "act" : "acts"}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 overflow-x-auto pb-2 [scrollbar-width:none]">
            <ol className="relative mx-auto flex min-w-[680px] max-w-5xl items-start justify-between" role="tablist" aria-label="Application stages" onKeyDown={onKeyDown}>
              <span className="absolute left-10 right-10 top-6 border-t-2 border-dashed border-brand-navy/15" aria-hidden="true" />
              <span
                className="absolute left-10 top-6 h-0.5 -translate-y-px bg-gradient-brand transition-all duration-500 ease-out"
                style={{ width: `calc((100% - 5rem) * ${active / last})` }}
                aria-hidden="true"
              />
              <span className="pointer-events-none absolute top-6 z-10 -translate-x-1/2 -translate-y-[2.25rem] transition-all duration-500 ease-out" style={{ left: progress }} aria-hidden="true">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-navy text-white shadow-md">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5 rotate-45">
                    <path d="M3.478 2.405a.75.75 0 0 0-.926.94l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.405Z" />
                  </svg>
                </span>
              </span>
              {stages.map((item, index) => {
                const isActive = index === active;
                const reached = index <= active;
                const tone = accentOf(actors, item.who[0]);
                return (
                  <li key={item.id} className="relative flex w-20 flex-col items-center">
                    <button
                      ref={(node) => {
                        tabRefs.current[index] = node;
                      }}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={`stage-${item.id}`}
                      id={`stage-tab-${item.id}`}
                      tabIndex={isActive ? 0 : -1}
                      onClick={() => goTo(index)}
                      className="group flex flex-col items-center rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-primary"
                    >
                      <span className="relative flex h-12 w-12 items-center justify-center">
                        {isActive && playing && (
                          <svg viewBox="0 0 48 48" className="absolute inset-0 h-12 w-12 -rotate-90" aria-hidden="true">
                            <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-primary/20" />
                            <circle
                              key={active}
                              cx="24"
                              cy="24"
                              r="22"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              className="journey-ring text-brand-primary"
                              style={{ animationDuration: `${AUTOPLAY_MS}ms` }}
                            />
                          </svg>
                        )}
                        <span
                          className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                            isActive
                              ? `scale-110 border-transparent text-white shadow-lg ${tone.tile}`
                              : reached
                                ? "border-brand-primary bg-white text-brand-primary"
                                : "border-brand-navy/15 bg-white text-brand-navy/50 group-hover:border-brand-primary/50 group-hover:text-brand-primary"
                          }`}
                        >
                          <Icon path={item.icon} />
                        </span>
                      </span>
                      <span className={`mt-2 text-xs font-bold transition-colors ${isActive ? "text-brand-navy" : "text-brand-navy/60"}`}>{item.short}</span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div
            key={stage.id}
            id={`stage-${stage.id}`}
            role="tabpanel"
            aria-labelledby={`stage-tab-${stage.id}`}
            className="hero-rise mx-auto mt-8 grid max-w-5xl overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-float lg:grid-cols-[0.95fr_1.25fr]"
          >
            <div className={`relative overflow-hidden bg-gradient-to-br ${accent.card} p-8 text-white sm:p-10`}>
              <span className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-[2.5rem] bg-white/10" aria-hidden="true" />
              <span className="font-heading pointer-events-none absolute -bottom-6 right-4 text-[9rem] font-extrabold leading-none text-white/10" aria-hidden="true">
                {active + 1}
              </span>
              <div className="relative flex items-center gap-3">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 ring-1 ring-white/25 backdrop-blur">
                  <Icon path={stage.icon} className="h-7 w-7" />
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-white/75">
                  Stage {active + 1} of {stages.length}
                </span>
              </div>
              <h3 className="font-heading relative mt-6 text-2xl font-extrabold sm:text-3xl">{stage.title}</h3>
              <div className="relative mt-4 flex flex-wrap gap-2">
                {stage.who.map((who) => (
                  <span key={who} className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-bold ring-1 ring-white/25">
                    <span className={`h-2 w-2 rounded-full ${toneOf(actors, who).dot}`} aria-hidden="true" />
                    {shortName(who)}
                  </span>
                ))}
              </div>
              <ul className="relative mt-6 space-y-2.5">
                {stage.points.map((point, index) => (
                  <li key={point} className="hero-rise flex gap-3 text-sm leading-relaxed text-white/90" style={{ ["--rise-delay" as string]: `${120 + index * 90}ms` }}>
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20 ring-1 ring-white/30" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-3 w-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m5 12.5 4.5 4.5L19 7.5" />
                      </svg>
                    </span>
                    <span>
                      <RichText text={point} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col p-8 sm:p-10">
              <p className="text-base leading-relaxed text-gray-700 sm:text-[17px]">
                <RichText text={stage.description} />
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-brand-mint p-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-brand-primary-dark">At the end you hold</p>
                  <p className="mt-1 text-sm font-bold leading-snug text-brand-navy">{stage.youHold}</p>
                </div>
                {stage.cost ? (
                  <div className="rounded-2xl bg-brand-surface p-4">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-gray-500">Cost at this stage</p>
                    <p className="mt-1 text-sm font-bold leading-snug text-brand-navy">{stage.cost}</p>
                  </div>
                ) : (
                  <div className="rounded-2xl bg-brand-surface p-4">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-gray-500">Who acts</p>
                    <p className="mt-1 text-sm font-bold leading-snug text-brand-navy">{stage.who.map(shortName).join(" + ")}</p>
                  </div>
                )}
              </div>
              <ol className="mt-auto flex items-center gap-1.5 pt-8" aria-hidden="true">
                {stages.map((item, index) => (
                  <li
                    key={item.id}
                    className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                      index === active ? `${accentOf(actors, item.who[0]).tile} flex-[2]` : index < active ? "bg-brand-primary/40" : "bg-gray-200"
                    }`}
                  />
                ))}
              </ol>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button type="button" onClick={() => goTo(active - 1)} className="rounded-full border border-brand-navy/15 bg-white px-4 py-2 text-sm font-bold text-brand-navy transition-colors hover:bg-brand-mint">
              ← Previous
            </button>
            {!reduced && (
              <button
                type="button"
                onClick={() => setUserStopped((stopped) => !stopped)}
                aria-pressed={!userStopped}
                className="inline-flex items-center gap-2 rounded-full border border-brand-navy/15 bg-white px-4 py-2 text-sm font-bold text-brand-navy transition-colors hover:bg-brand-mint"
              >
                <span className={`h-2 w-2 rounded-full ${playing ? "bg-brand-green" : "bg-gray-400"}`} aria-hidden="true" />
                {userStopped ? "Play" : "Pause"}
              </button>
            )}
            <button type="button" onClick={() => goTo(active + 1)} className="rounded-full border border-brand-navy/15 bg-white px-4 py-2 text-sm font-bold text-brand-navy transition-colors hover:bg-brand-mint">
              Next stage →
            </button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
