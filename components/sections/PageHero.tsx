import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-20 text-white sm:py-16 sm:py-24">
      <div className="bg-dots pointer-events-none absolute inset-0 opacity-30 invert" aria-hidden="true" />
      <div
        className="hero-blob pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-green/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="hero-blob pointer-events-none absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-brand-blue/20 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative">
        {eyebrow && <Eyebrow tone="light">{eyebrow}</Eyebrow>}
        <h1 className="font-heading mt-5 max-w-3xl text-4xl font-extrabold sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg text-white/70">{subtitle}</p>
        )}
      </Container>
    </section>
  );
}
