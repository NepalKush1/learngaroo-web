import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { AgentProfile } from "@/components/sections/AgentProfile";
import { WorldFlightMap } from "@/components/sections/WorldFlightMap";
import { services } from "@/data/services";

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

export default function Home() {
  return (
    <>
      <section className="hero-gradient-animated relative overflow-hidden bg-gradient-to-br from-brand-navy via-brand-navy to-brand-navy-light py-24 text-white">
        <div
          className="hero-blob pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-teal/20 blur-3xl"
          aria-hidden="true"
        />
        <Container className="relative grid gap-8 lg:grid-cols-[1fr_1.35fr] lg:items-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-teal">
              Learn · Migrate · Work
            </p>
            <h1 className="font-heading mt-3 text-4xl font-semibold sm:text-5xl">
              Your Future in Australia Starts Here
            </h1>
            <p className="mt-6 max-w-xl text-lg text-blue-100">
              Building your future in Australia shouldn&apos;t feel
              overwhelming. At Learngaroo, we simplify every step of your
              migration journey with clear advice, personalised guidance, and
              professional support you can trust.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                href="/bookings"
                className="group text-xl shadow-md shadow-brand-blue/30"
              >
                <span className="relative inline-block">
                  Book a Consultation
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100" />
                </span>
              </Button>
              <Button
                href="/services"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
              >
                Explore Our Services
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <WorldFlightMap />
          </Reveal>
        </Container>
      </section>

      <AgentProfile />

      <section className="py-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Migration Assistance"
              title="Services built around your pathway"
              subtitle="Every migration journey is different. Here are the services we offer most often — explore the full list to find the right fit for you."
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 80}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/services" variant="outline">
              View all services
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-brand-surface py-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="How it works"
              title="A straightforward process, from first chat to lodgement"
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <Reveal key={step.title} delay={index * 80}>
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <span className="text-sm font-semibold text-brand-teal">
                    Step {index + 1}
                  </span>
                  <h3 className="font-heading mt-2 text-lg font-semibold text-brand-navy">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ConsultationCTA />
    </>
  );
}
