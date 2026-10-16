import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button, ArrowIcon } from "@/components/ui/Button";
import { processingTimesUrl } from "@/data/visa-guides";
import type { VisaCategory, VisaPage } from "@/data/visas";
import type { VisaExplainer } from "@/data/visas/explainers/types";
import { siteConfig } from "@/lib/site-config";
import { categoryAccent } from "@/lib/accents";

// Hero for an explainer page: what the visa is in one sentence, the three
// ideas that carry it, and a "at a glance" card that builds itself in.

function Icon({ path, className = "h-5 w-5" }: { path: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
  );
}

// Splits a page title into the main line and a coloured second line:
// "Partner visa (subclasses 820 and 801)", "PIC 4020: bogus documents …".
function splitTitle(title: string): { main: string; accent?: string; sub?: string } {
  const subclass = title.match(/\s*\((subclass(?:es)? [^)]+)\)/i);
  if (subclass) return { main: title.replace(subclass[0], "").replace(/\s{2,}/g, " ").trim(), accent: `(${subclass[1]})` };
  const trailing = title.match(/^(.*\S)\s*\(([^)]+)\)$/);
  if (trailing) return { main: trailing[1], accent: `(${trailing[2]})` };
  const colon = title.indexOf(": ");
  if (colon > 0) {
    const rest = title.slice(colon + 2);
    return { main: title.slice(0, colon + 1), sub: rest.charAt(0).toUpperCase() + rest.slice(1) };
  }
  return { main: title };
}

export function ExplainerHero({ page, category, explainer }: { page: VisaPage; category: VisaCategory; explainer: VisaExplainer }) {
  const title = splitTitle(page.title);
  return (
    <section className="relative overflow-hidden bg-brand-navy text-white">
      <div className="bg-dots pointer-events-none absolute inset-0 opacity-30 invert" aria-hidden="true" />
      <div className="hero-blob pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-pink-500/20 blur-3xl" aria-hidden="true" />
      <div className="hero-blob pointer-events-none absolute -bottom-32 left-1/4 h-96 w-96 rounded-full bg-brand-green/20 blur-3xl" aria-hidden="true" />
      <Container className="relative grid gap-12 py-14 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <nav aria-label="Breadcrumb" className="hero-rise text-sm text-white/60">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li><Link href="/visas" className="hover:text-white">Visas</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href={`/visas/${category.slug}`} className="hover:text-white">{category.shortName}</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white/80">{page.name}</li>
            </ol>
          </nav>

          <div className="hero-rise mt-6 flex flex-wrap items-center gap-2" style={{ ["--rise-delay" as string]: "80ms" }}>
            {page.subclass && (
              <span className="rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-brand-green-light ring-1 ring-white/15">
                Subclass {page.subclass}
              </span>
            )}
            <span className="rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-white/80 ring-1 ring-white/15">
              {page.kind === "guide" ? "Guide" : page.permanent ? "Permanent visa" : "Temporary visa"}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-green/20 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-brand-green-light ring-1 ring-brand-green/30">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-green-light" aria-hidden="true" />
              Explained simply · 5 minutes
            </span>
          </div>

          <h1 className="hero-rise font-heading mt-5 text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-[3.5rem]" style={{ ["--rise-delay" as string]: "140ms" }}>
            {title.main}
            {title.accent && (
              <>
                {" "}
                <span className="text-gradient-animated mt-1 block bg-clip-text text-transparent">{title.accent}</span>
              </>
            )}
            {title.sub && (
              <>
                {" "}
                <span className="text-gradient-animated mt-2 block bg-clip-text text-2xl leading-snug text-transparent sm:text-3xl">{title.sub}</span>
              </>
            )}
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

          <div className="hero-rise mt-8 flex flex-wrap gap-3" style={{ ["--rise-delay" as string]: "560ms" }}>
            <Button href="#self-check" className="cta-shimmer">
              Take the 2-minute check
              <ArrowIcon />
            </Button>
            <Button href="/bookings" variant="ghost-light" track="book_cta">
              Book a consultation
            </Button>
          </div>
        </div>

        {/* At-a-glance card */}
        <div className="hero-rise relative" style={{ ["--rise-delay" as string]: "240ms" }}>
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-pink-500/30 via-brand-primary/20 to-brand-blue/30 blur-2xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[2rem] bg-white p-6 text-brand-navy shadow-deep sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className={`text-xs font-bold uppercase tracking-[0.16em] ${categoryAccent(category.slug).text}`}>{page.subclass ? `Your ${page.subclass} at a glance` : "At a glance"}</p>
                <p className="font-heading mt-1 text-2xl font-extrabold">{page.name}</p>
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
          </div>
        </div>
      </Container>

      <Container className="relative pb-8">
        <p className="text-xs leading-relaxed text-white/50">
          Facts checked {explainer.factsAsAt} against {explainer.checkedAgainst ?? "the Department of Home Affairs and the Migration Act and Regulations"} ·{" "}
          <a href={processingTimesUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-white/70 underline-offset-2 hover:text-white hover:underline">
            Current processing times ↗
          </a>{" "}
          · {siteConfig.fullName}, Registered Migration Agent MARN {siteConfig.marn} · General information, not advice for your circumstances.
        </p>
      </Container>
    </section>
  );
}
