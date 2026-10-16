"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import type { RoleGuide } from "@/data/visas/explainers/types";
import { RichText } from "./RichText";
import { TONES } from "./tones";

// Pick your side (worker or employer, applicant or sponsor), so each
// reader sees only what they have to do.

export function RoleSwitch({ roles }: { roles: RoleGuide[] }) {
  const [active, setActive] = useState(roles[0]?.id);
  const role = roles.find((item) => item.id === active) ?? roles[0];
  if (!role) return null;
  const tone = TONES[role.tone ?? "green"];

  return (
    <section id="roles" className="relative scroll-mt-32 py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Who does what" title="Your checklist, by role" highlight="by role" subtitle="Choose your side to see only what you need to do." align="center" />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-full bg-brand-surface p-1.5 shadow-inner" role="tablist" aria-label="Choose your role">
              {roles.map((item) => {
                const selected = item.id === role.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    id={`role-tab-${item.id}`}
                    aria-selected={selected}
                    aria-controls={`role-panel-${item.id}`}
                    onClick={() => setActive(item.id)}
                    className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all sm:px-7 ${
                      selected ? `${TONES[item.tone ?? "green"].bg} text-white shadow-lg` : "text-brand-navy/70 hover:text-brand-navy"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        <div key={role.id} id={`role-panel-${role.id}`} role="tabpanel" aria-labelledby={`role-tab-${role.id}`} className="hero-rise mt-10">
          <p className="mx-auto max-w-2xl text-center text-[17px] leading-relaxed text-gray-700">
            <RichText text={role.intro} />
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {role.groups.map((group, index) => (
              <div key={group.title} className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className={`flex h-9 w-9 items-center justify-center rounded-xl text-sm font-extrabold text-white ${tone.bg}`}>
                    {index + 1}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-brand-navy">{group.title}</h3>
                </div>
                <ul className="mt-4 space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-gray-700">
                      <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md ${tone.soft} ${tone.text}`} aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} className="h-3 w-3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m5 12.5 4.5 4.5L19 7.5" />
                        </svg>
                      </span>
                      <span>
                        <RichText text={item} />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {role.link && (
            <p className="mt-8 text-center">
              <Link href={role.link.href} className="text-sm font-bold text-brand-primary hover:underline">
                {role.link.label} →
              </Link>
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
