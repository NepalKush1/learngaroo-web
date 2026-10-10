import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site-config";

export const tools = [
  {
    href: "/tools/points-calculator",
    title: "Skilled Visa Points Calculator",
    description: "Estimate your 189, 190 and 491 points in two minutes and see where you can gain more.",
    cta: "Calculate my points",
    tone: "from-brand-primary to-brand-green",
    icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2Z",
    external: false,
  },
  {
    href: "/tools/visa-finder",
    title: "Visa Pathway Finder",
    description: "Answer three quick questions to find the visa pathway and consultation that fits your goal.",
    cta: "Find my pathway",
    tone: "from-brand-blue-dark to-brand-blue",
    icon: "M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z",
    external: false,
  },
  {
    href: siteConfig.pte.url,
    title: "PTE, IELTS & NAATI CCL Practice",
    description: "AI-scored practice and full mock tests on Learniiz — higher English scores mean more points.",
    cta: "Start practising free",
    tone: "from-brand-navy to-brand-navy-light",
    icon: "M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z",
    external: true,
  },
];

export function ToolCards() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {tools.map((tool, index) => {
        const card = (
          <>
            <span className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${tool.tone} text-white shadow-lg`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-7 w-7" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d={tool.icon} />
              </svg>
            </span>
            <h3 className="font-heading mt-5 text-xl font-bold text-brand-navy">{tool.title}</h3>
            <p className="mt-2 flex-1 text-[15px] leading-relaxed text-gray-600">{tool.description}</p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary">
              {tool.cta} {tool.external ? "↗" : "→"}
            </span>
          </>
        );
        const className =
          "group flex h-full flex-col rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-20px_rgba(31,127,83,0.35)]";
        return (
          <Reveal key={tool.href} delay={index * 80}>
            {tool.external ? (
              <a href={tool.href} target="_blank" rel="noopener" className={className}>
                {card}
              </a>
            ) : (
              <Link href={tool.href} className={className}>
                {card}
              </Link>
            )}
          </Reveal>
        );
      })}
    </div>
  );
}

export function ToolsSection() {
  return (
    <section className="bg-brand-surface py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Free planning tools"
            title="Stop guessing. Start planning."
            subtitle="Check where you stand before you spend money on applications — free, private and no sign-up needed."
            align="center"
          />
        </Reveal>
        <div className="mt-14">
          <ToolCards />
        </div>
      </Container>
    </section>
  );
}
