import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button, ArrowIcon } from "@/components/ui/Button";
import { processingTimesUrl } from "@/data/visa-guides";
import type { Service } from "@/data/services";
import type { ConsultationService } from "@/data/consultations";
import type { ServiceExplainer } from "@/data/service-explainers/types";
import { siteConfig } from "@/lib/site-config";
import { serviceAccent } from "@/lib/accents";

// Hero for a service page: the service in one sentence, the three ideas that
// carry it, and an "at a glance" card that ends with the consultation offer.

function Icon({ path, className = "h-5 w-5" }: { path: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
  );
}

// "A$150", or "A$150.50" when there are cents.
export function consultationPrice(consultation: ConsultationService): string {
  const dollars = consultation.priceInCents / 100;
  return `A$${dollars.toLocaleString("en-AU", { minimumFractionDigits: consultation.priceInCents % 100 ? 2 : 0 })}`;
}

export function ServiceHero({ service, explainer, consultation }: { service: Service; explainer: ServiceExplainer; consultation?: ConsultationService }) {
  const accent = serviceAccent(service.slug);
  return (
    <section className="relative overflow-hidden bg-brand-navy text-white">
      <div className="bg-dots pointer-events-none absolute inset-0 opacity-30 invert" aria-hidden="true" />
      <div className="hero-blob pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-pink-500/20 blur-3xl" aria-hidden="true" />
      <div className="hero-blob pointer-events-none absolute -bottom-32 left-1/4 h-96 w-96 rounded-full bg-brand-green/20 blur-3xl" aria-hidden="true" />
      <Container className="relative grid gap-12 py-14 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <nav aria-label="Breadcrumb" className="hero-rise text-sm text-white/60">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/services" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white/80">{service.title}</li>
            </ol>
          </nav>

          <div className="hero-rise mt-6 flex flex-wrap items-center gap-2" style={{ ["--rise-delay" as string]: "80ms" }}>
            <span className="rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-white/80 ring-1 ring-white/15">Migration service</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-green/20 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-brand-green-light ring-1 ring-brand-green/30">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-green-light" aria-hidden="true" />
              Explained simply · 5 minutes
            </span>
          </div>

          <h1 className="hero-rise font-heading mt-5 text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-[3.5rem]" style={{ ["--rise-delay" as string]: "140ms" }}>
            {service.title}{" "}
            <span className="text-gradient-animated mt-2 block bg-clip-text text-2xl leading-snug text-transparent sm:text-3xl">{explainer.accent}</span>
          </h1>

          <p className="hero-rise mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl" style={{ ["--rise-delay" as string]: "200ms" }}>
            {explainer.oneLiner}
          </p>

          <ol className="mt-8 grid gap-3 sm:grid-cols-3">
            {explainer.bigIdeas.map((idea, index) => (
              <li
                key={idea.title}
                className="hero-rise rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur transition-colors hover:bg-white/10"
                style={{ ["--rise-delay" as string]: `${280 + index * 90}ms` }}
              >
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-brand-green text-sm font-extrabold text-white">{index + 1}</span>
                  <span className="font-heading text-[15px] font-bold leading-snug">{idea.title}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{idea.body}</p>
              </li>
            ))}
          </ol>

          <div className="hero-rise mt-8 flex flex-wrap items-center gap-3" style={{ ["--rise-delay" as string]: "560ms" }}>
            {explainer.finder ? (
              <Button href="#finder" className="cta-shimmer">
                {/visa/i.test(explainer.finder.navLabel) ? "Find your visa" : "See your options"}
                <ArrowIcon />
              </Button>
            ) : (
              <Button href="#self-check" className="cta-shimmer">
                Take the 2-minute check
                <ArrowIcon />
              </Button>
            )}
            <Button href="/bookings" variant="ghost-light" track="book_cta">
              Book a consultation
            </Button>
            {explainer.finder && (
              <a href="#self-check" className="px-2 text-sm font-semibold text-white/75 underline-offset-4 hover:text-white hover:underline">
                Or take the 2-minute check
              </a>
            )}
          </div>
        </div>

        {/* At-a-glance card */}
        <div className="hero-rise relative" style={{ ["--rise-delay" as string]: "240ms" }}>
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-pink-500/30 via-brand-primary/20 to-brand-blue/30 blur-2xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[2rem] bg-white p-6 text-brand-navy shadow-deep sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className={`text-xs font-bold uppercase tracking-[0.16em] ${accent.text}`}>At a glance</p>
                <p className="font-heading mt-1 text-2xl font-extrabold">{service.shortLabel}</p>
              </div>
              <span className="pulse-ring flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-green text-white" aria-hidden="true">
                <Icon path="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" className="h-6 w-6" />
              </span>
            </div>
            <dl className="mt-6 space-y-2.5">
              {explainer.heroCard.map((row, index) => (
                <div
                  key={row.label}
                  className="hero-rise flex items-center gap-3 rounded-2xl bg-brand-surface px-3.5 py-3"
                  style={{ ["--rise-delay" as string]: `${420 + index * 110}ms` }}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-brand-primary shadow-sm">
                    <Icon path={row.icon} className="h-[18px] w-[18px]" />
                  </span>
                  <div className="min-w-0">
                    <dt className="text-[11px] font-bold uppercase tracking-wider text-gray-500">{row.label}</dt>
                    <dd className="text-[15px] font-bold leading-snug">{row.value}</dd>
                  </div>
                </div>
              ))}
            </dl>
            {consultation && (
              <Link
                href="/bookings"
                data-track="book_cta"
                className="hero-rise group mt-4 flex items-center gap-3 rounded-2xl bg-brand-navy px-4 py-3.5 text-white transition-colors hover:bg-brand-primary-dark"
                style={{ ["--rise-delay" as string]: `${420 + explainer.heroCard.length * 110}ms` }}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-green-light">
                  <Icon path="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" className="h-[18px] w-[18px]" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-white/60">Talk it through with us</span>
                  <span className="block text-[15px] font-bold leading-snug">
                    {consultation.durationMinutes}-minute consultation · {consultationPrice(consultation)}
                    {consultation.gstIncluded ? " incl. GST" : ""}
                  </span>
                </span>
                <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                  <ArrowIcon />
                </span>
              </Link>
            )}
          </div>
        </div>
      </Container>

      <Container className="relative pb-8">
        <p className="text-xs leading-relaxed text-white/50">
          Facts checked {explainer.factsAsAt} against {explainer.checkedAgainst ?? "the Department of Home Affairs and the Migration Act and Regulations"} ·{" "}
          <a href={processingTimesUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-white/70 underline-offset-2 hover:text-white hover:underline">
            Current processing times ↗
          </a>{" "}
          · {siteConfig.fullName}, Registered Migration Agent MARN {siteConfig.marn} · General information, not advice for your circumstances. Government fees are separate from our consultation fee.
        </p>
      </Container>
    </section>
  );
}
