"use client";

import { useState } from "react";
import Link from "next/link";
import { ServiceIcon } from "@/components/icons/ServiceIcon";
import { getServiceBySlug } from "@/data/services";
import { siteConfig } from "@/lib/site-config";

// A three-question guide that points visitors to the most relevant service
// and consultation. It suggests where to start — it doesn't assess
// eligibility.

type Location = "offshore" | "onshore";
type Goal = "study" | "skilled" | "employer" | "family" | "visit" | "refused";

const GOALS: { value: Goal; label: string; description: string }[] = [
  { value: "study", label: "Study in Australia", description: "Courses, Student visa, post-study options" },
  { value: "skilled", label: "Skilled migration (points-tested)", description: "Subclass 189, 190 or 491 visas" },
  { value: "employer", label: "Work for an Australian employer", description: "Employer sponsorship and nomination" },
  { value: "family", label: "Join my partner or family", description: "Partner, Prospective Marriage and family visas" },
  { value: "visit", label: "Visit, holiday or business trip", description: "Visitor visa (subclass 600)" },
  { value: "refused", label: "My visa was refused or cancelled", description: "Review rights and deadlines" },
];

interface Recommendation {
  primary: string; // service slug
  also?: string[];
  note?: string;
  pte?: boolean;
  urgent?: boolean;
}

function recommend(location: Location, goal: Goal, hasAssessment: boolean | null): Recommendation {
  switch (goal) {
    case "study":
      return {
        primary: "student-visas",
        note:
          location === "onshore"
            ? "Already studying here? We can help with changing course, applying for a further Student visa and planning your options after graduation."
            : "Most Student visa applicants need to show their English language ability, often with a test score, so start practising early.",
        pte: true,
      };
    case "skilled":
      return hasAssessment
        ? {
            primary: "skilled-visas",
            note: "With a skills assessment in hand, the next steps are checking your points and choosing between the subclass 189, 190 and 491 visas.",
            pte: true,
          }
        : {
            primary: "skills-assessments",
            also: ["skilled-visas"],
            note: "Points-tested skilled visas need a suitable skills assessment before you can be invited to apply, so that's usually the place to start.",
            pte: true,
          };
    case "employer":
      return { primary: "employer-sponsored-visas", also: ["skills-assessments"] };
    case "family":
      return { primary: "family-partner-visas" };
    case "visit":
      return { primary: "visitor-tourist-visas" };
    case "refused":
      return {
        primary: "art-reviews",
        urgent: true,
        note: "Not every decision can be reviewed, and review applications have strict time limits. Your decision letter should tell you whether you can apply for review and by when. Book as soon as possible and have the letter ready.",
      };
  }
}

function ChoiceButton({
  selected,
  onClick,
  title,
  description,
}: {
  selected: boolean;
  onClick: () => void;
  title: string;
  description?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`rounded-2xl border p-4 text-left transition-all ${
        selected
          ? "border-brand-primary bg-brand-mint ring-1 ring-brand-primary"
          : "border-gray-200 bg-white hover:-translate-y-0.5 hover:border-brand-primary/40 hover:shadow-md"
      }`}
    >
      <span className="block font-bold text-brand-navy">{title}</span>
      {description && <span className="mt-0.5 block text-sm text-gray-500">{description}</span>}
    </button>
  );
}

export function VisaFinder() {
  const [location, setLocation] = useState<Location | null>(null);
  const [goal, setGoal] = useState<Goal | null>(null);
  const [hasAssessment, setHasAssessment] = useState<boolean | null>(null);

  const needsAssessmentQuestion = goal === "skilled";
  const ready = location && goal && (!needsAssessmentQuestion || hasAssessment !== null);
  const result = ready ? recommend(location, goal, hasAssessment) : null;
  const primary = result ? getServiceBySlug(result.primary) : undefined;

  return (
    <div className="space-y-8">
      <section aria-labelledby="q1">
        <h2 id="q1" className="font-heading text-lg font-bold text-brand-navy">
          1. Where are you right now?
        </h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <ChoiceButton
            selected={location === "offshore"}
            onClick={() => setLocation("offshore")}
            title="Outside Australia"
          />
          <ChoiceButton
            selected={location === "onshore"}
            onClick={() => setLocation("onshore")}
            title="In Australia"
          />
        </div>
      </section>

      {location && (
        <section aria-labelledby="q2">
          <h2 id="q2" className="font-heading text-lg font-bold text-brand-navy">
            2. What would you like to do?
          </h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {GOALS.map((item) => (
              <ChoiceButton
                key={item.value}
                selected={goal === item.value}
                onClick={() => {
                  setGoal(item.value);
                  setHasAssessment(null);
                }}
                title={item.label}
                description={item.description}
              />
            ))}
          </div>
        </section>
      )}

      {needsAssessmentQuestion && (
        <section aria-labelledby="q3">
          <h2 id="q3" className="font-heading text-lg font-bold text-brand-navy">
            3. Do you already have a positive skills assessment?
          </h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <ChoiceButton selected={hasAssessment === true} onClick={() => setHasAssessment(true)} title="Yes" />
            <ChoiceButton
              selected={hasAssessment === false}
              onClick={() => setHasAssessment(false)}
              title="No / not sure"
            />
          </div>
        </section>
      )}

      {result && primary && (
        <section
          aria-live="polite"
          className="overflow-hidden rounded-3xl bg-brand-navy text-white shadow-deep"
        >
          <div className="bg-gradient-brand h-1.5" aria-hidden="true" />
          <div className="grid gap-8 p-7 sm:p-9 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-green-light">
                Suggested starting point
              </p>
              <div className="mt-3 flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-brand-green-light">
                  <ServiceIcon slug={primary.slug} className="h-6 w-6" />
                </span>
                <h2 className="font-heading text-2xl font-extrabold">{primary.title}</h2>
              </div>
              <p className="mt-3 text-white/75">{primary.summary}</p>
              {result.note && (
                <p
                  className={`mt-4 rounded-xl p-3 text-sm ${
                    result.urgent ? "bg-amber-400/15 text-amber-100" : "bg-white/5 text-white/80"
                  }`}
                >
                  {result.note}
                </p>
              )}
              {result.also && (
                <p className="mt-4 text-sm text-white/60">
                  Also relevant:{" "}
                  {result.also.map((slug, index) => {
                    const service = getServiceBySlug(slug);
                    return service ? (
                      <span key={slug}>
                        {index > 0 && ", "}
                        <Link href={`/services/${slug}`} className="font-semibold text-white underline">
                          {service.title}
                        </Link>
                      </span>
                    ) : null;
                  })}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-3 lg:justify-center">
              <Link
                href="/bookings"
                className="inline-flex items-center justify-center rounded-full bg-brand-green px-6 py-3 font-semibold text-white hover:bg-brand-primary"
              >
                Book a consultation →
              </Link>
              <Link
                href={`/services/${primary.slug}`}
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 font-semibold text-white hover:bg-white/10"
              >
                Learn about {primary.shortLabel}
              </Link>
              {goal === "skilled" && (
                <Link href="/tools/points-calculator" className="text-center text-sm font-semibold text-brand-green-light underline">
                  Estimate your points first
                </Link>
              )}
              {result.pte && (
                <a
                  href={siteConfig.pte.url}
                  target="_blank"
                  rel="noopener"
                  className="text-center text-sm font-semibold text-brand-green-light underline"
                >
                  Prepare for PTE with Learniiz ↗
                </a>
              )}
            </div>
          </div>
        </section>
      )}

      <p className="text-xs text-gray-500">
        This guide suggests a starting point only and isn&apos;t migration advice. Your
        options depend on your full circumstances, and a consultation is the way to confirm
        them.
      </p>
    </div>
  );
}
