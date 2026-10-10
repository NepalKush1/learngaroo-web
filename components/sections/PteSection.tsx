import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site-config";

// Cross-promotes the Learniiz PTE practice platform, framed around what it
// means for a visa: English and NAATI CCL are worth points. PTE scores are
// the Home Affairs minimums for tests taken on or after 7 August 2025
// (re-checked 10 October 2026).

const levels = [
  { level: "Competent", points: 0, scores: "54 / 51 / 48 / 47" },
  { level: "Proficient", points: 10, scores: "76 / 69 / 59 / 58" },
  { level: "Superior", points: 20, scores: "88 / 85 / 70 / 69" },
];

const features = [
  "AI-scored practice in the PTE Academic format",
  "Full PTE mock tests with instant feedback",
  "IELTS and NAATI CCL practice too",
  "Detailed analytics on your weak spots",
];

export function PteSection() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-brand-green/15 blur-3xl" aria-hidden="true" />
      <Container className="relative grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <Eyebrow>Learniiz PTE practice</Eyebrow>
          <h2 className="font-heading mt-4 text-3xl font-extrabold text-brand-navy sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
            Your English score is worth up to <span className="text-gradient-brand">20 points</span>
          </h2>
          <p className="mt-4 max-w-xl text-lg text-gray-600">
            For points-tested skilled visas, moving from Competent to Superior English adds
            20 points, often one of the biggest gains available. Practise on Learniiz, our own
            PTE, IELTS and NAATI CCL platform, then plan your visa with us.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-[15px] text-brand-navy">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-primary text-white">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} className="h-3 w-3" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m5 12.5 4.5 4.5L19 7.5" />
                  </svg>
                </span>
                {feature}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={siteConfig.pte.signupUrl}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-primary/25 transition-all hover:-translate-y-0.5 hover:bg-brand-primary-dark"
            >
              Start practising free ↗
            </a>
            <a
              href={siteConfig.pte.url}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full border border-brand-navy/15 bg-white px-6 py-3 text-sm font-semibold text-brand-navy transition-all hover:-translate-y-0.5 hover:bg-brand-mint"
            >
              Explore learniiz.com
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-[2rem] bg-brand-navy p-7 text-white shadow-[0_30px_60px_-30px_rgba(11,26,46,0.6)] sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-green-light">
              English points for skilled visas
            </p>
            <ul className="mt-5 space-y-3">
              {levels.map((item) => (
                <li key={item.level} className="flex items-center justify-between gap-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                  <span>
                    <span className="font-heading text-lg font-bold">{item.level}</span>
                    <span className="block text-xs text-white/55">PTE S / W / R / L: {item.scores}</span>
                  </span>
                  <span className="font-heading text-3xl font-extrabold text-brand-green-light">+{item.points}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center justify-between gap-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
              <span>
                <span className="font-heading text-lg font-bold">NAATI CCL</span>
                <span className="block text-xs text-white/55">Credentialled community language</span>
              </span>
              <span className="font-heading text-3xl font-extrabold text-brand-green-light">+5</span>
            </div>
            <p className="mt-5 text-xs text-white/50">
              Minimum PTE Academic score in each part, as set by the Department of Home Affairs
              for tests taken on or after 7 August 2025. Check the latest requirements before
              you test.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
