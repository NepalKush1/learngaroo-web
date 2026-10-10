import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button, ArrowIcon } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { agent } from "@/data/agent";

function PersonSilhouette() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      className="h-16 w-16"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0"
      />
    </svg>
  );
}

function ShieldCheckIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className} aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
      />
    </svg>
  );
}

// "Meet your Registered Migration Agent": a register-style ID card over the
// photo (state, name, MARN, role · city, verify link, as on large agency
// sites) beside the bio and quick facts. The full story is on /about.
export function AgentProfile() {
  return (
    <section className="bg-brand-surface py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Who you’ll work with"
            title="Meet your Registered Migration Agent"
            subtitle="You work directly with a MARN-registered agent, from your first consultation onwards."
            align="center"
          />
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14">
          <Reveal>
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-30px_rgba(11,26,46,0.45)]">
                {agent.photoSrc ? (
                  <Image
                    src={agent.photoSrc}
                    alt={`${agent.name}, ${agent.title}`}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover object-top"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-3 rounded-3xl border border-dashed border-gray-300 bg-white text-gray-400">
                    <PersonSilhouette />
                    <p className="text-sm">[Agent photo to be added]</p>
                  </div>
                )}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-navy/60 to-transparent" aria-hidden="true" />
              </div>

              {/* Register-style ID card */}
              <div className="absolute inset-x-4 -bottom-8 rounded-2xl bg-white p-5 shadow-xl ring-1 ring-gray-100 sm:inset-x-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-primary">{agent.state}</p>
                    <p className="font-heading mt-1 text-xl font-extrabold text-brand-navy">{agent.name}</p>
                    <p className="text-sm text-gray-600">
                      {agent.title} · {agent.city}
                    </p>
                  </div>
                  <span className="pulse-ring flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-primary text-white">
                    <ShieldCheckIcon />
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-gray-100 pt-3">
                  <span className="rounded-full bg-brand-mint px-3 py-1 text-xs font-extrabold text-brand-navy">
                    MARN {agent.marn}
                  </span>
                  {agent.verifyUrl && (
                    <a
                      href={agent.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-brand-primary hover:underline"
                    >
                      Verify on the OMARA register ↗<span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="pt-8 lg:pt-0">
            <p className="text-gray-600 lg:text-lg lg:leading-relaxed">{agent.shortBio}</p>

            <dl className="mt-8 grid grid-cols-2 gap-3">
              {agent.quickFacts.map((fact) => (
                <div key={fact.label} className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <dt className="text-xs font-semibold text-gray-500">{fact.label}</dt>
                  <dd className="font-heading mt-1 font-bold text-brand-navy">{fact.value}</dd>
                </div>
              ))}
            </dl>

            {agent.languages.length > 0 && (
              <p className="mt-5 text-sm text-gray-600">
                <span className="font-semibold text-brand-navy">Consultations in: </span>
                {agent.languages.join(", ")}
              </p>
            )}

            <ul className="mt-6 space-y-2">
              {agent.credibilityPoints.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-gray-700">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-primary text-white">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} className="h-3 w-3" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m5 12.5 4.5 4.5L19 7.5" />
                    </svg>
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Button href="/bookings">
                Book a consultation with {agent.name.split(" ")[0]}
                <ArrowIcon />
              </Button>
              <Link
                href="/about#kush-kumar-nepal"
                className="text-sm font-semibold text-brand-primary hover:underline"
              >
                View full profile →
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
