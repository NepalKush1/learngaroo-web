"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Confetti } from "@/components/motion/Confetti";
import type { MythFact } from "@/data/visas/explainers/types";

// Myth or fact? Each card flips to the verified rule. A small score keeps
// track of how many myths you've busted.

export function MythFacts({ myths }: { myths: MythFact[] }) {
  const [flipped, setFlipped] = useState<number[]>([]);
  const busted = flipped.length;
  const all = busted === myths.length;

  const toggle = (index: number) => setFlipped((current) => (current.includes(index) ? current.filter((item) => item !== index) : [...current, index]));

  return (
    <section id="myths" className="relative scroll-mt-32 overflow-hidden bg-brand-surface py-16 sm:py-24">
      <Confetti />
      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="Myth or fact?"
            title="Things people get wrong"
            highlight="get wrong"
            subtitle="Tap a card to flip it. Each answer is the rule as it stands, from Home Affairs and the legislation."
            align="center"
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mx-auto mt-8 flex max-w-md items-center gap-4 rounded-full bg-white px-5 py-3 shadow-sm ring-1 ring-gray-100">
            <span className="text-sm font-bold text-brand-navy" aria-live="polite">
              {all ? "All myths busted" : `Myths busted: ${busted} of ${myths.length}`}
            </span>
            <span className="h-2 flex-1 overflow-hidden rounded-full bg-gray-100" aria-hidden="true">
              <span className="bg-gradient-brand block h-full rounded-full transition-all duration-500" style={{ width: `${(busted / myths.length) * 100}%` }} />
            </span>
            <button
              type="button"
              onClick={() => setFlipped(all ? [] : myths.map((_, index) => index))}
              className="shrink-0 text-xs font-bold text-brand-primary hover:underline"
            >
              {all ? "Reset" : "Flip all"}
            </button>
          </div>
        </Reveal>

        <p className="mt-6 text-center text-xs font-semibold text-gray-500 sm:hidden">Swipe for more →</p>
        <div className="-mx-6 mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 [scrollbar-width:none] sm:mx-0 sm:mt-10 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4">
          {myths.map((item, index) => {
            const isFlipped = flipped.includes(index);
            return (
              <Reveal key={item.myth} delay={(index % 4) * 70} className="w-[82%] shrink-0 snap-center sm:w-auto">
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-pressed={isFlipped}
                  data-flipped={isFlipped}
                  className="flip-card block h-full w-full text-left focus-visible:outline-none"
                >
                  <span className="flip-inner h-full">
                    <span
                      className="flip-face flex h-full min-h-[13rem] flex-col rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-float"
                      aria-hidden={isFlipped}
                    >
                      <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-rose-100 px-2.5 py-1 text-xs font-extrabold uppercase tracking-wider text-rose-700">
                        <span aria-hidden="true">✕</span> Myth
                      </span>
                      <span className="font-heading mt-4 block flex-1 text-lg font-bold leading-snug text-brand-navy">&ldquo;{item.myth}&rdquo;</span>
                      <span className="mt-4 text-xs font-bold text-brand-primary">Tap to see the fact ↻</span>
                    </span>
                    <span
                      className="flip-face flip-back flex h-full min-h-[13rem] flex-col rounded-3xl bg-gradient-to-br from-brand-primary-dark to-[#0f4f31] p-6 text-white shadow-float"
                      aria-hidden={!isFlipped}
                    >
                      <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-xs font-extrabold uppercase tracking-wider text-brand-green-light">
                        <span aria-hidden="true">✓</span> Fact
                      </span>
                      <span className="mt-4 block flex-1 text-[15px] leading-relaxed text-white/90">{item.fact}</span>
                      <span className="mt-4 text-xs font-bold text-white/60">Tap to flip back ↻</span>
                    </span>
                  </span>
                </button>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
