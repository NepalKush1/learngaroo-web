import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site-config";

export const tools = [
  {
    href: "/tools/points",
    title: "Points Calculators",
    description: "The federal 189, 190 and 491 points test plus the Victoria, Tasmania and ACT rankings, in one place with your score carried across.",
    cta: "Check my points",
    tone: "from-brand-primary to-brand-green",
    icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2Z",
    external: false,
  },
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
    href: "/state-nomination/assessment",
    title: "State Nomination Assessment",
    description: "Enter your occupation, location, work and points to see which states' 190 and 491 criteria you meet.",
    cta: "Find my states",
    tone: "from-brand-primary to-brand-green",
    icon: "M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z",
    external: false,
  },
  {
    href: "/tools/visa-finder",
    title: "Visa Pathway Finder",
    description: "Answer three quick questions to find the visa pathway and consultation that fits your goal.",
    cta: "Find my pathway",
    tone: "from-brand-primary to-brand-green",
    icon: "M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z",
    external: false,
  },
  {
    href: "/tools/tasmania-points-calculator",
    title: "Tasmania Nomination Calculator",
    description: "Check your occupation, the minimum requirements for your pathway, and your Gold, Green or Orange pass for 190 and 491.",
    cta: "Check my Tasmania ranking",
    tone: "from-brand-primary to-brand-green",
    icon: "M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6",
    external: false,
  },
  {
    href: "/tools/victoria-points-calculator",
    title: "Victorian Points Test Calculator",
    description: "Work out your VPT total for Victorian 190 and 491 nomination, with the 2026-27 priority occupations and the Home Affairs minimums.",
    cta: "Score my VPT",
    tone: "from-brand-primary to-brand-green",
    icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z",
    external: false,
  },
  {
    href: "/tools/canberra-matrix-calculator",
    title: "Canberra Matrix Calculator",
    description: "Estimate your ACT nomination score as a Canberra resident or overseas applicant.",
    cta: "Score my Matrix",
    tone: "from-brand-primary to-brand-green",
    icon: "M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z",
    external: false,
  },
  {
    href: "/tools/fee-calculator",
    title: "Visa Fee Calculator",
    description: "Government charges for your visa with family members and card surcharges, at 1 July 2026 prices.",
    cta: "Estimate my fees",
    tone: "from-brand-primary to-brand-green",
    icon: "M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
    external: false,
  },
  {
    href: "/tools/regional-postcode-checker",
    title: "Regional Postcode Checker",
    description: "See whether a postcode is a designated regional area for subclass 491, 494 and regional study points.",
    cta: "Check a postcode",
    tone: "from-brand-primary to-brand-green",
    icon: "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z",
    external: false,
  },
  {
    href: "/state-nomination",
    title: "State Nomination Map",
    description: "Interactive map of which states are open for 190 and 491 nomination, with places, streams and a guide for each.",
    cta: "Open the map",
    tone: "from-brand-primary to-brand-green",
    icon: "M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z",
    external: false,
  },
  {
    href: "/occupations",
    title: "Occupation Guides",
    description: "Assessing authority, occupation lists and visa options for the skilled occupations we advise on most.",
    cta: "Find my occupation",
    tone: "from-brand-primary to-brand-green",
    icon: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0",
    external: false,
  },
  {
    href: siteConfig.pte.url,
    title: "PTE, IELTS & NAATI CCL Practice",
    description: "AI-scored practice and full mock tests on Learniiz. A higher English score can earn you more points.",
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
          "group flex h-full flex-col rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-glow";
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

const featuredHrefs = ["/tools/points", "/state-nomination/assessment", "/tools/visa-finder"];

// Home-page version: the three tools a visitor should try first as full
// cards, the rest as a row of chips. The complete grid lives on /tools.
export function ToolsSection() {
  const featured = featuredHrefs.map((href) => tools.find((tool) => tool.href === href)!);
  const rest = tools.filter((tool) => !featuredHrefs.includes(tool.href));

  return (
    <section className="bg-brand-surface py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Start with a free check"
            title="Know where you stand before you book."
            highlight="before you book."
            subtitle="Three questions tell you whether a skilled visa is realistic. Each tool is free, takes a few minutes and needs no sign-up."
            align="center"
          />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {featured.map((tool, index) => (
            <Reveal key={tool.href} delay={index * 80}>
              <Link
                href={tool.href}
                className="group flex h-full flex-col rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
              >
                <span className="flex items-center justify-between">
                  <span className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${tool.tone} text-white shadow-lg`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-7 w-7" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d={tool.icon} />
                    </svg>
                  </span>
                  <span className="rounded-full bg-brand-mint px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-brand-primary-dark">
                    Step {index + 1}
                  </span>
                </span>
                <h3 className="font-heading mt-5 text-xl font-bold text-brand-navy">{tool.title}</h3>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-gray-600">{tool.description}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary">
                  {tool.cta} →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal delay={240}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <span className="mr-1 text-sm font-semibold text-gray-500">More tools:</span>
            {rest.map((tool) =>
              tool.external ? (
                <a key={tool.href} href={tool.href} target="_blank" rel="noopener" className="rounded-full border border-gray-200 bg-white px-3.5 py-1.5 text-sm font-semibold text-brand-navy transition-colors hover:border-brand-primary hover:text-brand-primary">
                  {tool.title} ↗
                </a>
              ) : (
                <Link key={tool.href} href={tool.href} className="rounded-full border border-gray-200 bg-white px-3.5 py-1.5 text-sm font-semibold text-brand-navy transition-colors hover:border-brand-primary hover:text-brand-primary">
                  {tool.title}
                </Link>
              ),
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
