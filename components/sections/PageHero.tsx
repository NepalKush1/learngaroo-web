import { Container } from "@/components/ui/Container";

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
    <section className="hero-gradient-animated relative overflow-hidden bg-gradient-to-br from-brand-navy to-brand-navy-light py-20 text-white">
      <div
        className="hero-blob pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-teal/20 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-teal">
            {eyebrow}
          </p>
        )}
        <h1 className="font-heading mt-2 max-w-3xl text-4xl font-semibold sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg text-blue-100">{subtitle}</p>
        )}
      </Container>
    </section>
  );
}
