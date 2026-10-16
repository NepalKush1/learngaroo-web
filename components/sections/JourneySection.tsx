"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowIcon } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import { accents, type AccentName } from "@/lib/accents";

// The whole journey, from the first idea to permanent residence, as an
// interactive timeline. It autoplays through the stages (pausing on hover,
// focus or touch, and off entirely for reduced motion), and can be driven
// by tapping a stage, the arrow keys, swiping, or the previous/next buttons.
// Content is general: it shows the usual order, not a promise about anyone's
// own pathway.

interface Stage {
  id: string;
  accent: AccentName;
  short: string;
  title: string;
  description: string;
  points: string[];
  links: { label: string; href: string; external?: boolean }[];
  icon: string;
}

const stages: Stage[] = [
  {
    id: "plan",
    accent: "blue",
    short: "Plan",
    title: "You start with a goal",
    description:
      "Study, work, join a partner, or settle for good. The right visa depends on where you are now and where you want to end up, so the plan comes before the forms.",
    points: ["Which visas you could be eligible for", "What each one costs and how long it takes", "The order to do things in"],
    links: [
      { label: "Find your pathway", href: "/tools/visa-finder" },
      { label: "Book a consultation", href: "/bookings" },
    ],
    icon: "M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z",
  },
  {
    id: "english",
    accent: "violet",
    short: "English",
    title: "Prove your English",
    description:
      "Almost every pathway needs an English test result: for a course, a visa, a skills assessment or extra points. A higher score can open more options.",
    points: ["PTE Academic, IELTS and others are accepted", "Proficient English adds 10 points, Superior adds 20", "Results usually valid for 3 years for visas"],
    links: [{ label: "Practise PTE on Learniiz", href: siteConfig.pte.url, external: true }],
    icon: "M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z",
  },
  {
    id: "study",
    accent: "orange",
    short: "Study",
    title: "Study in Australia",
    description:
      "A Student visa (subclass 500) lets you study a CRICOS-registered course and work part time. A strong Genuine Student case and clear finances matter from the start.",
    points: ["Up to 6 years, in line with enrolment", "48 hours of work a fortnight during term", "Government fee from A$2,500"],
    links: [{ label: "Student visas", href: "/services/student-visas" }],
    icon: "M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342",
  },
  {
    id: "graduate",
    accent: "teal",
    short: "Graduate",
    title: "Work after you graduate",
    description:
      "The Temporary Graduate visa (subclass 485) gives you time to gain Australian experience. Most graduates have 6 months after their Student visa to apply.",
    points: ["Usually 2 to 3 years after a degree", "Up to 18 months after a vocational qualification", "Age 35 or under at application, with exceptions"],
    links: [{ label: "Post-study options", href: "/services/student-visas" }],
    icon: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0",
  },
  {
    id: "assess",
    accent: "pink",
    short: "Assess",
    title: "Get your skills assessed",
    description:
      "Skilled and most employer-sponsored visas need a positive skills assessment from the authority for your occupation. It confirms your qualification and experience match the job.",
    points: ["Authority depends on occupation", "Evidence of qualifications and detailed work references", "Usually valid for 3 years"],
    links: [
      { label: "Skills assessments", href: "/services/skills-assessments" },
      { label: "Find your occupation", href: "/occupations" },
    ],
    icon: "M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z",
  },
  {
    id: "skilled",
    accent: "green",
    short: "Skilled",
    title: "Apply through points or an employer",
    description:
      "With a skills assessment you can lodge an Expression of Interest for a points-tested visa (189, 190 or 491), or be sponsored by an Australian employer (482, 186 or 494).",
    points: ["Minimum 65 points, invitations favour higher scores", "State nomination adds 5 or 15 points", "Sponsored work can lead to permanent residence after 2 years"],
    links: [
      { label: "Check your points", href: "/tools/points-calculator" },
      { label: "State nomination", href: "/state-nomination" },
      { label: "Employer-sponsored visas", href: "/services/employer-sponsored-visas" },
    ],
    icon: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21",
  },
  {
    id: "pr",
    accent: "amber",
    short: "PR",
    title: "Permanent residence",
    description:
      "Subclasses 189, 190 and 186 are permanent. Provisional visas 491 and 494 lead to the permanent subclass 191 after 3 years in regional Australia.",
    points: ["Live, work and study anywhere in Australia", "Sponsor eligible family", "Apply for citizenship once you meet the residence requirement"],
    links: [{ label: "Talk through your PR options", href: "/bookings" }],
    icon: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
  },
  {
    id: "family",
    accent: "blue",
    short: "Family",
    title: "Bring the people you love",
    description:
      "Partner and family visas run alongside the rest of the journey. They turn on relationship evidence across finances, household, social life and commitment.",
    points: ["Partner visas are two-stage: temporary then permanent", "Visitor visas for shorter stays by family", "Prospective Marriage visa for fiancé(e)s"],
    links: [
      { label: "Family and partner visas", href: "/services/family-partner-visas" },
      { label: "Visitor visas", href: "/services/visitor-tourist-visas" },
    ],
    icon: "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z",
  },
];

const AUTOPLAY_MS = 6000;
const SWIPE_PX = 40;

export function JourneySection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [userStopped, setUserStopped] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const touchStart = useRef<number | null>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const playing = !prefersReducedMotion && !userStopped && !paused;
  const stage = stages[active];
  const accent = accents[stage.accent];
  // Node centres sit 2.5rem in from each edge (nodes are 5rem wide).
  const progress = `calc(2.5rem + (100% - 5rem) * ${active / (stages.length - 1)})`;

  const goTo = useCallback((index: number, fromUser = true) => {
    setActive((index + stages.length) % stages.length);
    if (fromUser) setUserStopped(true);
  }, []);

  // Autoplay: advance every AUTOPLAY_MS while playing. The timer resets
  // whenever the active stage changes so a manual tap starts a full interval.
  useEffect(() => {
    if (!playing) return;
    const timer = window.setTimeout(() => setActive((current) => (current + 1) % stages.length), AUTOPLAY_MS);
    return () => window.clearTimeout(timer);
  }, [playing, active]);

  const onKeyDown = (event: React.KeyboardEvent) => {
    const keys: Record<string, number> = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
    if (event.key in keys) {
      event.preventDefault();
      const next = (active + keys[event.key] + stages.length) % stages.length;
      goTo(next);
      tabRefs.current[next]?.focus();
    } else if (event.key === "Home") {
      event.preventDefault();
      goTo(0);
      tabRefs.current[0]?.focus();
    } else if (event.key === "End") {
      event.preventDefault();
      goTo(stages.length - 1);
      tabRefs.current[stages.length - 1]?.focus();
    }
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
      className="relative overflow-hidden py-16 sm:py-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-mint/60 blur-3xl" aria-hidden="true" />
      <div className={`pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full opacity-40 blur-3xl transition-colors duration-700 ${accent.soft}`} aria-hidden="true" />
      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="The whole journey"
            title="From the first idea to permanent residence"
            highlight="permanent residence"
            subtitle="Most journeys to Australia follow a similar order. Tap a stage, swipe, or use the arrow keys. It plays on its own until you take over."
            align="center"
          />
        </Reveal>

        <Reveal delay={100}>
          {/* Stage selector: a horizontal timeline that scrolls on small screens. */}
          <div className="mt-12 overflow-x-auto pb-2 [scrollbar-width:none]">
            <ol
              className="relative mx-auto flex min-w-[640px] max-w-4xl items-start justify-between"
              role="tablist"
              aria-label="Journey stages"
              onKeyDown={onKeyDown}
            >
              <span className="absolute left-10 right-10 top-6 border-t-2 border-dashed border-brand-navy/15" aria-hidden="true" />
              <span
                className="absolute left-10 top-6 h-0.5 -translate-y-px bg-gradient-brand transition-all duration-500 ease-out"
                style={{ width: `calc((100% - 5rem) * ${active / (stages.length - 1)})` }}
                aria-hidden="true"
              />
              {/* Plane marker that flies along the path to the active stage. */}
              <span
                className="pointer-events-none absolute top-6 z-10 -translate-x-1/2 -translate-y-[2.25rem] transition-all duration-500 ease-out"
                style={{ left: progress }}
                aria-hidden="true"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-navy text-white shadow-md">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5 rotate-45">
                    <path d="M3.478 2.405a.75.75 0 0 0-.926.94l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.405Z" />
                  </svg>
                </span>
              </span>
              {stages.map((item, index) => {
                const reached = index <= active;
                const isActive = index === active;
                return (
                  <li key={item.id} className="relative flex w-20 flex-col items-center">
                    <button
                      ref={(node) => { tabRefs.current[index] = node; }}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={`journey-${item.id}`}
                      id={`journey-tab-${item.id}`}
                      tabIndex={isActive ? 0 : -1}
                      onClick={() => goTo(index)}
                      onMouseEnter={() => { if (!userStopped) setActive(index); }}
                      className="group flex flex-col items-center rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-primary"
                    >
                      <span className="relative flex h-12 w-12 items-center justify-center">
                        {/* Progress ring around the active node while autoplaying. */}
                        {isActive && playing && (
                          <svg viewBox="0 0 48 48" className="absolute inset-0 h-12 w-12 -rotate-90" aria-hidden="true">
                            <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-primary/20" />
                            <circle
                              key={active}
                              cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                              className="journey-ring text-brand-primary"
                              style={{ animationDuration: `${AUTOPLAY_MS}ms` }}
                            />
                          </svg>
                        )}
                        <span
                          className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                            isActive
                              ? "scale-110 border-brand-primary bg-brand-primary text-white shadow-lg shadow-brand-primary/30"
                              : reached
                                ? "border-brand-primary bg-white text-brand-primary"
                                : "border-brand-navy/15 bg-white text-brand-navy/50 group-hover:border-brand-primary/50 group-hover:text-brand-primary"
                          }`}
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                          </svg>
                        </span>
                      </span>
                      <span className={`mt-2 text-xs font-bold transition-colors ${isActive ? "text-brand-navy" : "text-brand-navy/60"}`}>
                        {item.short}
                      </span>
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
            id={`journey-${stage.id}`}
            role="tabpanel"
            aria-labelledby={`journey-tab-${stage.id}`}
            className="hero-rise mx-auto mt-8 grid max-w-4xl overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-float lg:grid-cols-[0.9fr_1.3fr]"
          >
            {/* Colour panel: the stage's identity. */}
            <div className={`relative overflow-hidden bg-gradient-to-br ${accent.card} p-8 text-white sm:p-10`}>
              <span className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-[2.5rem] bg-white/10" aria-hidden="true" />
              <span className="pointer-events-none absolute -bottom-16 left-6 h-36 w-36 rounded-[2rem] bg-white/5" aria-hidden="true" />
              <span className="font-heading pointer-events-none absolute -bottom-6 right-4 text-[9rem] font-extrabold leading-none text-white/10" aria-hidden="true">
                {active + 1}
              </span>
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 ring-1 ring-white/25 backdrop-blur">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-7 w-7" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d={stage.icon} />
                </svg>
              </div>
              <span className="relative mt-6 block text-xs font-bold uppercase tracking-[0.16em] text-white/70">
                Stage {active + 1} of {stages.length}
              </span>
              <h3 className="font-heading relative mt-2 text-2xl font-extrabold sm:text-3xl">{stage.title}</h3>
              <ul className="relative mt-6 space-y-2.5">
                {stage.points.map((point, index) => (
                  <li
                    key={point}
                    className="hero-rise flex gap-3 text-sm leading-relaxed text-white/90"
                    style={{ ["--rise-delay" as string]: `${120 + index * 90}ms` }}
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20 ring-1 ring-white/30" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-3 w-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m5 12.5 4.5 4.5L19 7.5" />
                      </svg>
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Detail panel. */}
            <div className="flex flex-col p-8 sm:p-10">
              <p className="text-[15px] leading-relaxed text-gray-600 sm:text-base">{stage.description}</p>
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-gray-400">Where we can help</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {stage.links.map((link) =>
                  link.external ? (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-brand-navy/15 bg-white px-4 py-2 text-sm font-bold text-brand-navy transition-colors hover:border-brand-primary/40 hover:bg-brand-mint"
                    >
                      {link.label} ↗
                    </a>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="inline-flex items-center gap-1.5 rounded-full bg-brand-primary px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-brand-primary-dark"
                    >
                      {link.label}
                      <ArrowIcon className="h-3.5 w-3.5" />
                    </Link>
                  ),
                )}
              </div>
              {/* Mini map of the whole route, with the current stage lit. */}
              <ol className="mt-auto flex items-center gap-1.5 pt-8" aria-hidden="true">
                {stages.map((item, index) => (
                  <li
                    key={item.id}
                    className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                      index === active ? `${accents[item.accent].tile} flex-[2]` : index < active ? "bg-brand-primary/40" : "bg-gray-200"
                    }`}
                  />
                ))}
              </ol>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => goTo(active - 1)}
              className="rounded-full border border-brand-navy/15 bg-white px-4 py-2 text-sm font-bold text-brand-navy transition-colors hover:bg-brand-mint"
            >
              ← Previous
            </button>
            {!prefersReducedMotion && (
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
            <button
              type="button"
              onClick={() => goTo(active + 1)}
              className="rounded-full border border-brand-navy/15 bg-white px-4 py-2 text-sm font-bold text-brand-navy transition-colors hover:bg-brand-mint"
            >
              Next stage →
            </button>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-gray-500">
            General information only. The order and options differ for every person; figures are the 1 July 2026 government fees and rules.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
