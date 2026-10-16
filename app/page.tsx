import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button, ArrowIcon } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { AgentProfile } from "@/components/sections/AgentProfile";
import { WorldFlightMap } from "@/components/sections/WorldFlightMap";
import { VideoShowcase } from "@/components/video/VideoShowcase";
import { IntroVideoButton } from "@/components/video/IntroVideoButton";
import { ToolsSection } from "@/components/sections/ToolsSection";
import { HeroPointsPicker } from "@/components/sections/HeroPointsPicker";
import { VisaLibrarySection } from "@/components/sections/VisaLibrarySection";
import { WhyLearniiz } from "@/components/sections/WhyLearniiz";
import { JourneySection } from "@/components/sections/JourneySection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { PteSection } from "@/components/sections/PteSection";
import { FeesSection } from "@/components/sections/FeesSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { SocialSection } from "@/components/sections/SocialSection";
import { JourneyTracker } from "@/components/motion/JourneyTracker";
import { Spotlight } from "@/components/motion/Spotlight";
import { Confetti } from "@/components/motion/Confetti";
import { RotatingWord } from "@/components/motion/RotatingWord";
import { serviceAccent } from "@/lib/accents";
import { agent } from "@/data/agent";
import { services } from "@/data/services";
import { siteConfig } from "@/lib/site-config";

const steps = [
  {
    title: "Assess",
    description:
      "We start with your goals, background and eligibility.",
  },
  {
    title: "Plan",
    description:
      "You get a clear plan: the right pathway, the steps and the documents.",
  },
  {
    title: "Apply",
    description:
      "If you engage us, we prepare and lodge your application and keep you updated.",
  },
  {
    title: "Support",
    description:
      "We stay with you after lodgement and help plan your next steps.",
  },
];

const trustPoints = [
  `MARN ${siteConfig.marn}`,
  "OMARA registered",
  "Personalised advice",
];

// Words for the hero typewriter line, each in its service colour.
const rotatingServices = services.map((service) => ({
  text: service.shortLabel.toLowerCase().replace("art reviews", "ART reviews"),
  className: serviceAccent(service.slug).text,
}));

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
      <section className="relative -mt-20 overflow-hidden bg-gradient-to-b from-brand-mint/70 via-white to-white pb-10 pt-32 lg:pb-12 lg:pt-36">
        <div className="bg-dots pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" aria-hidden="true" />
        <div className="hero-blob pointer-events-none absolute -left-32 top-24 h-96 w-96 rounded-full bg-brand-green/20 blur-3xl" aria-hidden="true" />
        <div className="hero-blob pointer-events-none absolute -right-20 top-10 h-[28rem] w-[28rem] rounded-full bg-brand-blue/15 blur-3xl" aria-hidden="true" />
        <Confetti preset="hero" />

        <Container className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <h1 className="hero-rise font-heading text-5xl font-extrabold leading-[1.05] text-brand-navy sm:text-6xl lg:text-7xl">
              <span className="text-gradient-brand text-gradient-animated">Your journey.</span>
              <br />
              Our guidance.
            </h1>
            <p className="hero-rise font-heading mt-4 text-xl font-bold text-brand-navy/80 [--rise-delay:200ms] sm:text-2xl">
              Clear advice on <RotatingWord words={rotatingServices} />
            </p>
            <p className="hero-rise [--rise-delay:260ms] mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
              Honest, personalised advice from a Registered Migration Agent, so
              every step of your journey to Australia feels clear.
            </p>
            <div className="hero-rise [--rise-delay:400ms] mt-9 flex flex-wrap items-center gap-3">
              <Button href="/bookings" size="lg" track="book_cta" className="cta-shimmer px-7">
                Book a Consultation
                <ArrowIcon />
              </Button>
              <Button href="/services" variant="outline" className="px-7 py-3.5 text-base">
                Explore Services
              </Button>
              <IntroVideoButton />
            </div>
            <ul className="hero-rise [--rise-delay:540ms] mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-brand-navy/80">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-primary text-white">
                    <CheckIcon className="h-3 w-3" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <HeroPointsPicker />
          </div>

          <Reveal delay={120} className="relative">
            <div className="relative mx-auto max-w-xl lg:max-w-none">
              {/* Bold colour blocks behind the artwork, Expert-style. */}
              <div className="absolute right-[4%] top-[2%] h-[80%] w-[66%] rotate-3 rounded-[2.5rem] bg-gradient-to-br from-amber-200 to-amber-300" aria-hidden="true" />
              <div className="absolute bottom-[6%] left-[8%] h-[46%] w-[40%] -rotate-6 rounded-[2rem] bg-gradient-to-br from-emerald-200 to-brand-green-light/70" aria-hidden="true" />
              <Image
                src="/brand/hero-australia.webp"
                alt="Sydney Opera House and city skyline set within a map of Australia"
                width={885}
                height={635}
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="relative h-auto w-full drop-shadow-deep"
              />

              <a
                href={agent.verifyUrl ?? "/about"}
                target={agent.verifyUrl ? "_blank" : undefined}
                rel={agent.verifyUrl ? "noopener noreferrer" : undefined}
                className="group absolute -left-2 bottom-10 flex items-center gap-3 rounded-2xl bg-white/90 p-3 pr-5 shadow-xl ring-1 ring-gray-100 backdrop-blur transition-shadow hover:shadow-2xl sm:left-0"
              >
                <span className="pulse-ring flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary text-white">
                  <CheckIcon className="h-5 w-5" />
                </span>
                <span className="leading-tight">
                  <span className="block text-sm font-extrabold text-brand-navy">MARN {siteConfig.marn}</span>
                  <span className="block text-xs text-gray-500">Registered Migration Agent</span>
                  {agent.verifyUrl && (
                    <span className="block text-[11px] font-semibold text-brand-primary group-hover:underline">
                      Verify on the OMARA register ↗
                    </span>
                  )}
                </span>
              </a>

              {/* Anchored to the bottom-right over open water, mirroring the MARN badge
                  on the left, so the plane, skyline and pin stay clear. */}
              <JourneyTracker className="absolute -bottom-8 -right-4 hidden md:block lg:-right-10" />

            </div>
          </Reveal>
        </Container>

      </section>

      <ToolsSection />

      <JourneySection />

      {/* ── Services ─────────────────────────────────────────────────── */}
      <section className="relative py-16 sm:py-24">
        <Confetti />
        <Container className="relative">
          <Reveal>
            <SectionHeading
              eyebrow="Migration assistance"
              title="Services built around your pathway"
              highlight="your pathway"
              subtitle="Every journey is different. Find the service that fits yours."
              align="center"
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service, index) => (
              <Reveal key={service.slug} delay={index * 80}>
                <Spotlight>
                  <ServiceCard service={service} />
                </Spotlight>
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

      <VisaLibrarySection />

      <WhyLearniiz />

      <ComparisonSection />

      <VideoShowcase />

      <AgentProfile />

      <PteSection />

      {/* ── Process ──────────────────────────────────────────────────── */}
      <section className="bg-brand-surface py-16 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="How it works"
              title="A straightforward process, from first chat to lodgement"
              highlight="first chat to lodgement"
              align="center"
            />
          </Reveal>
          <div className="relative mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Reveal className="absolute left-[12.5%] right-[12.5%] top-7 hidden lg:block">
              <div className="bg-gradient-brand draw-line h-0.5 opacity-50" aria-hidden="true" />
            </Reveal>
            {steps.map((step, index) => (
              <Reveal key={step.title} delay={index * 220}>
                <div className="relative h-full rounded-3xl border border-gray-100 bg-white p-7 text-center shadow-card">
                  <span className="bg-gradient-brand-deep step-pop mx-auto -mt-0 flex h-14 w-14 items-center justify-center rounded-2xl text-lg font-extrabold text-white shadow-lg shadow-brand-primary/25">
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

      <FeesSection />

      <TestimonialsSection />

      <FaqSection />

      {/* ── Global reach ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-brand-navy py-16 sm:py-24 text-white">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-green/20 blur-3xl" aria-hidden="true" />
        <Container className="relative grid items-center gap-12 lg:grid-cols-[1fr_1.5fr]">
          <Reveal>
            <SectionHeading
              tone="light"
              eyebrow="From anywhere to Australia"
              title="Guiding people from around the world"
              subtitle="From Kathmandu to London, we help you understand the visa pathways that may be open to you."
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

      <SocialSection />

      <ConsultationCTA />
    </>
  );
}
