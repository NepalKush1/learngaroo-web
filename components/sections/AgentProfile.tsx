import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MarnBadge } from "@/components/ui/MarnBadge";
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

// Concise "Meet Your Migration Agent" card for the homepage — the full
// story lives on the About page (components/sections/AgentFullStory.tsx).
export function AgentProfile() {
  return (
    <section className="bg-brand-surface py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <Reveal>
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl lg:max-w-none">
              {agent.photoSrc ? (
                <Image
                  src={agent.photoSrc}
                  alt={agent.name}
                  fill
                  className="object-cover object-top"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-3 rounded-3xl border border-dashed border-gray-300 bg-white text-gray-400">
                  <PersonSilhouette />
                  <p className="text-sm">[Agent photo to be added]</p>
                </div>
              )}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-brand-teal" aria-hidden="true" />
              <p className="text-base font-semibold uppercase tracking-[0.2em] text-brand-teal sm:text-lg">
                Meet Your Migration Agent
              </p>
            </div>
            <p className="font-heading mt-2 text-2xl font-semibold text-brand-navy sm:text-3xl">
              {agent.name}
            </p>
            <p className="mt-1 text-base font-medium text-brand-blue">
              {agent.title}
            </p>
            <p className="mt-4 max-w-lg text-gray-600">{agent.shortBio}</p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {agent.credibilityPoints.map((point) => (
                <li
                  key={point}
                  className="rounded-full bg-white px-3.5 py-1.5 text-xs font-medium text-brand-navy shadow-sm"
                >
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <MarnBadge marn={agent.marn} />
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Button href="/bookings" className="group text-xl">
                <span className="relative inline-block">
                  Book a Consultation
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100" />
                </span>
              </Button>
              <Link
                href="/about#kush-kumar-nepal"
                className="text-sm font-semibold text-brand-blue hover:underline"
              >
                Read Kush&apos;s Full Story →
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
