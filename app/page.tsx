import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button, ArrowIcon } from "@/components/ui/Button";
import { SectionHeading, Eyebrow } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { AgentProfile } from "@/components/sections/AgentProfile";
import { WorldFlightMap } from "@/components/sections/WorldFlightMap";
import { ServiceIcon } from "@/components/icons/ServiceIcon";
import { VideoShowcase } from "@/components/video/VideoShowcase";
import { IntroVideoButton } from "@/components/video/IntroVideoButton";
import { services } from "@/data/services";
import { siteConfig } from "@/lib/site-config";

const steps = [
  {
    title: "Assess",
    description:
      "We start with a clear picture of your goals, background and eligibility across visa and study pathways.",
  },
  {
    title: "Plan",
    description:
      "You get a straightforward plan outlining the right pathway, timeline and documents needed.",
  },
  {
    title: "Apply",
    description:
      "We help prepare and lodge your application, keeping you informed at every step.",
  },
  {
    title: "Support",
    description:
      "We stay with you after lodgement, responding to requests and planning your next steps.",
  },
];

const trustPoints = [
  `MARN ${siteConfig.marn}`,
  "OMARA registered",
  "Personalised advice",
];

function CheckIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative -mt-20 overflow-hidden bg-gradient-to-b from-brand-mint/70 via-white to-white pb-16 pt-32 lg:pb-24 lg:pt-36">
        <div className="bg-dots pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" aria-hidden="true" />
        <div className="hero-blob pointer-events-none absolute -left-32 top-24 h-96 w-96 rounded-full bg-brand-green/20 blur-3xl" aria-hidden="true" />
        <div className="hero-blob pointer-events-none absolute -right-20 top-10 h-[28rem] w-[28rem] rounded-full bg-brand-blue/15 blur-3xl" aria-hidden="true" />

        <Container className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <Reveal>
            <Eyebrow>Registered Migration Agent · Australia</Eyebrow>
            <h1 className="font-heading mt-6 text-5xl font-extrabold leading-[1.05] text-brand-navy sm:text-6xl lg:text-7xl">
              <span className="text-gradient-brand">Your journey.</span>
              <br />
              Our guidance.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
              Building your future in Australia shouldn&apos;t feel
              overwhelming. At {siteConfig.fullName}, we simplify every step of
              your migration journey with clear advice, personalised guidance,
              and professional support you can trust.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button href="/bookings" className="px-7 py-3.5 text-base">
                Book a Consultation
                <ArrowIcon />
              </Button>
              <Button href="/services" variant="outline" className="px-7 py-3.5 text-base">
                Explore Services
              </Button>
              <IntroVideoButton />
            </div>
            <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-brand-navy/80">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-primary text-white">
                    <CheckIcon className="h-3 w-3" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="relative mx-auto max-w-xl lg:max-w-none">
              <Image
                src="/brand/hero-australia.png"
                alt="Sydney Opera House and city skyline set within a map of Australia"
                width={885}
                height={635}
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-auto w-full drop-shadow-[0_30px_40px_rgba(11,26,46,0.12)]"
              />

              <div className="float-slow absolute -left-2 bottom-10 flex items-center gap-3 rounded-2xl bg-white/90 p-3 pr-5 shadow-xl ring-1 ring-gray-100 backdrop-blur sm:left-0">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary text-white">
                  <CheckIcon className="h-5 w-5" />
                </span>
                <span className="leading-tight">
                  <span className="block text-sm font-extrabold text-brand-navy">MARN {siteConfig.marn}</span>
                  <span className="block text-xs text-gray-500">Registered Migration Agent</span>
                </span>
              </div>

              <div className="float-slow absolute bottom-24 right-0 hidden rounded-2xl bg-white/90 p-3 px-4 shadow-xl ring-1 ring-gray-100 backdrop-blur [animation-delay:-3s] sm:block">
                <span className="block text-xs font-semibold text-gray-500">{siteConfig.values}</span>
              </div>
            </div>
          </Reveal>
        </Container>

        {/* Service quick links — mirrors the row on the brand cover. */}
        <Container className="relative mt-14">
          <Reveal delay={200}>
            <div className="grid grid-cols-2 gap-3 rounded-3xl bg-white/80 p-3 shadow-[0_20px_50px_-30px_rgba(11,26,46,0.35)] ring-1 ring-gray-100 backdrop-blur sm:grid-cols-3 lg:grid-cols-6">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group flex items-center gap-3 rounded-2xl p-3 transition-colors hover:bg-brand-mint"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-mint text-brand-primary transition-colors group-hover:bg-brand-primary group-hover:text-white">
                    <ServiceIcon slug={service.slug} className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-bold leading-tight text-brand-navy">{service.shortLabel}</span>
                </Link>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── Services ─────────────────────────────────────────────────── */}
      <section className="py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Migration assistance"
              title="Services built around your pathway"
              subtitle="Every migration journey is different. Here are the services we offer most often — explore the full list to find the right fit for you."
              align="center"
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 80}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/services" variant="outline">
              View all services
              <ArrowIcon />
            </Button>
          </div>
        </Container>
      </section>

      <VideoShowcase />

      <AgentProfile />

      {/* ── Process ──────────────────────────────────────────────────── */}
      <section className="py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="How it works"
              title="A straightforward process, from first chat to lodgement"
              align="center"
            />
          </Reveal>
          <div className="relative mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-gradient-brand absolute left-[12.5%] right-[12.5%] top-7 hidden h-0.5 opacity-30 lg:block" aria-hidden="true" />
            {steps.map((step, index) => (
              <Reveal key={step.title} delay={index * 80}>
                <div className="relative h-full rounded-3xl border border-gray-100 bg-white p-7 text-center shadow-[0_1px_2px_rgba(11,26,46,0.04)]">
                  <span className="bg-gradient-brand mx-auto -mt-0 flex h-14 w-14 items-center justify-center rounded-2xl text-lg font-extrabold text-white shadow-lg shadow-brand-primary/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-heading mt-5 text-xl font-bold text-brand-navy">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-gray-600">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Global reach ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-brand-navy py-24 text-white">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-green/20 blur-3xl" aria-hidden="true" />
        <Container className="relative grid items-center gap-12 lg:grid-cols-[1fr_1.5fr]">
          <Reveal>
            <SectionHeading
              tone="light"
              eyebrow="From anywhere to Australia"
              title="Guiding people from around the world"
              subtitle="Whether you're starting from Kathmandu, Delhi, Manila or London, we help you understand the visa pathway that gets you to Australia."
            />
            <div className="mt-8">
              <Button href="/bookings">
                Start your journey
                <ArrowIcon />
              </Button>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <WorldFlightMap />
          </Reveal>
        </Container>
      </section>

      <ConsultationCTA />
    </>
  );
}
