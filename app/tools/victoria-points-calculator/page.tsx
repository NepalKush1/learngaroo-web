import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { PointsHubBacklink } from "@/components/tools/PointsHubBacklink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqItem } from "@/components/sections/FaqItem";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { VictoriaPointsCalculator } from "@/components/tools/VictoriaPointsCalculator";
import {
  victoriaFees,
  victoriaPointsAsAt,
  victoriaPointsUrls,
  vptAge,
  vptEarnings,
  vptEducation,
  vptEnglish,
  vptExperience,
  vptGroupLabel,
  vptMaximum,
  vptMaximumTotal,
  vptPartnerPoints,
  vptPriorityGroups,
  vptSkillLevelPoints,
} from "@/data/victoria-points";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Victorian Points Test (VPT) Calculator 2026-27: Victoria 190 & 491 Nomination",
  description:
    "Work out your Victorian Points Test total for subclass 190 and 491 nomination: age, English, experience, education, skill level, partner and earnings, with Victoria's 2026-27 priority occupations and fees.",
  alternates: { canonical: `${siteConfig.url}/tools/victoria-points-calculator` },
};

const money = (value: number) => `A$${value.toLocaleString("en-AU")}`;
const priorityCount = vptPriorityGroups.reduce((sum, group) => sum + group.occupations.length, 0);

const faqs = [
  {
    question: "What is the Victorian Points Test?",
    answer: `Victoria's own ranking for Registrations of Interest (ROIs) for subclass 190 and 491 nomination. It adds up seven weighted factors (age, English, years of experience in your nominated occupation, education, occupation skill level, partner's skill and annual earnings from skilled employment in Victoria) to a total out of ${vptMaximumTotal}. It is separate from the Home Affairs SkillSelect points test, where you still need at least 65 points.`,
  },
  {
    question: "What VPT score do I need?",
    answer: "There is no pass mark. In each invitation round Victoria invites the ROIs with the highest VPT totals in the pool at that time, so the score needed depends on who else has registered and how many places remain. Victoria says it can't tell you your likelihood of an invitation or how your total compares with others.",
  },
  {
    question: "How do Victoria's priority industries work?",
    answer: `Every ROI is ranked in the most competitive group, across all eligible occupations. ROIs in one of the ${priorityCount} priority occupations for 2026-27 (healthcare, social assistance, education and construction) are also ranked within their priority industry or subgroup, and the highest totals in each are invited too.`,
  },
  {
    question: "Does it cost anything to register with Victoria?",
    answer: `Yes, from 2026-27. A Registration of Interest costs ${money(victoriaFees.roi.excludingGst)} (${money(victoriaFees.roi.includingGst)} with GST if you're in Australia when you pay), charged once per program year. If you're invited, the subclass 190 or 491 nomination application costs ${money(victoriaFees.nomination190.excludingGst)} (${money(victoriaFees.nomination190.includingGst)} with GST). Fees are generally non-refundable, including when an ROI isn't invited.`,
  },
  {
    question: "Is Victoria's 2026-27 program open?",
    answer: `Not when we checked on ${victoriaPointsAsAt}. Victoria has published its ranking factors, priority occupations and fees, and says information about the 2026-27 program will be published when available. ROIs from earlier program years don't carry over: you need to submit a new one when the program opens.`,
  },
];

export default function VictoriaPointsCalculatorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
  };
  const tables: { title: string; max: number; rows: { label: string; points: number }[] }[] = [
    {
      title: "Age",
      max: vptMaximum.age,
      rows: vptAge.map((band) => ({ label: band.from === band.to ? String(band.from) : `${band.from}-${band.to}`, points: band.points })),
    },
    { title: "English language level", max: vptMaximum.english, rows: vptEnglish.map((item) => ({ label: item.label, points: item.points })) },
    { title: "Years of experience in nominated occupation", max: vptMaximum.experience, rows: vptExperience.map((item) => ({ label: item.label, points: item.points })) },
    { title: "Education level", max: vptMaximum.education, rows: vptEducation.map((item) => ({ label: item.label, points: item.points })) },
    {
      title: "Occupation skill level",
      max: vptMaximum.skillLevel,
      rows: [3, 2, 1].map((level) => ({ label: `Skill level ${level} occupation`, points: vptSkillLevelPoints[level] })),
    },
    {
      title: "Partner's skill",
      max: vptMaximum.partner,
      rows: [
        { label: "10 Partner Skills points claimed in your EOI, partner included in the visa application, and partner's occupation a current priority industry occupation", points: vptPartnerPoints },
        { label: "Single, Australian partner, or not all of the above", points: 0 },
      ],
    },
    {
      title: "Annual earnings from current skilled employment in Victoria",
      max: vptMaximum.earnings,
      rows: vptEarnings.map((band, index) => {
        const nextBand = vptEarnings[index + 1];
        return { label: nextBand ? `${money(band.from)}-${money(nextBand.from - 1)}` : `${money(band.from)} and over`, points: band.points };
      }),
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <PageHero
        eyebrow="Free tool · 2026-27 program"
        title="Victorian Points Test calculator"
        subtitle="Victoria ranks every Registration of Interest for subclass 190 and 491 nomination with its own points test. Answer eight short questions to see your total out of 950, whether your occupation is a 2026-27 priority, and the Home Affairs minimums you also need."
      />

      <section className="bg-brand-surface py-16">
        <Container>
          <PointsHubBacklink tab="victoria" />
          <VictoriaPointsCalculator />
          <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-relaxed text-gray-500">
            From Live in Melbourne (Victorian Government), checked {victoriaPointsAsAt}. Compare states on the{" "}
            <Link href="/state-nomination" className="font-semibold text-brand-primary hover:underline">
              state nomination map
            </Link>
            , see which states could nominate you in the{" "}
            <Link href="/state-nomination/assessment" className="font-semibold text-brand-primary hover:underline">
              state nomination assessment
            </Link>
            , or check your{" "}
            <Link href="/tools/points-calculator" className="font-semibold text-brand-primary hover:underline">
              SkillSelect points
            </Link>
            .
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="The Victorian Points Test"
            title={`Seven factors, ${vptMaximumTotal} points`}
            highlight={`${vptMaximumTotal} points`}
            subtitle="As Victoria publishes them for the 2026-27 program. There is no pass mark: the highest totals in the pool are invited in each round."
            align="center"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {tables.map((table) => (
              <div key={table.title} className="rounded-3xl border border-gray-100 bg-white p-5 shadow-card">
                <div className="flex items-baseline justify-between gap-3">
                  <h2 className="font-heading text-base font-bold text-brand-navy">{table.title}</h2>
                  <span className="shrink-0 text-xs font-bold text-brand-primary">up to {table.max}</span>
                </div>
                <table className="mt-3 w-full text-sm">
                  <thead className="sr-only">
                    <tr>
                      <th scope="col">Range</th>
                      <th scope="col">Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    {table.rows.map((row) => (
                      <tr key={row.label} className="border-t border-gray-100">
                        <td className="py-1.5 pr-3 text-gray-700">{row.label}</td>
                        <td className="py-1.5 text-right font-bold text-brand-navy">{row.points}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-surface py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="2026-27 priority industries"
            title={`${priorityCount} priority occupations in four industries`}
            highlight="four industries"
            subtitle="ROIs in these occupations are also ranked within their industry or subgroup, as well as against everyone. Every other eligible occupation can still register."
            align="center"
          />
          <div className="mx-auto mt-10 max-w-4xl space-y-3">
            {vptPriorityGroups.map((group) => (
              <details key={group.id} className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm open:ring-1 open:ring-brand-primary/20">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
                  <span className="font-heading text-lg font-bold text-brand-navy">{vptGroupLabel(group)}</span>
                  <span className="flex items-center gap-3">
                    <span className="rounded-full bg-brand-mint px-2.5 py-0.5 text-xs font-bold text-brand-primary-dark">{group.occupations.length} {group.occupations.length === 1 ? "occupation" : "occupations"}</span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-mint text-brand-primary transition-transform duration-200 group-open:rotate-45" aria-hidden="true">
                      +
                    </span>
                  </span>
                </summary>
                <ul className="mt-4 grid gap-x-6 gap-y-1.5 border-t border-gray-100 pt-4 text-sm text-gray-700 sm:grid-cols-2">
                  {group.occupations.map((occupation) => (
                    <li key={occupation.code} className="flex gap-2">
                      <span className="w-14 shrink-0 font-mono text-xs leading-5 text-gray-400">{occupation.code}</span>
                      {occupation.title}
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-center text-xs text-gray-500">
            From the{" "}
            <a href={victoriaPointsUrls.vpt} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-primary hover:underline">
              Victorian Points Test page ↗
            </a>
            , checked {victoriaPointsAsAt}.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="About the VPT" title="Good to know" highlight="know" align="center" />
          <div className="mx-auto mt-10 max-w-3xl space-y-3">
            {faqs.map((faq) => (
              <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-center text-xs text-gray-500">
            Sources:{" "}
            <a href={victoriaPointsUrls.update} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-primary hover:underline">
              Victoria&apos;s 2026-27 program update (13 October 2026) ↗
            </a>{" "}
            and{" "}
            <a href={victoriaPointsUrls.fees} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-primary hover:underline">
              fees ↗
            </a>
            . Read our{" "}
            <Link href="/state-nomination/victoria" className="font-semibold text-brand-primary hover:underline">
              Victoria nomination guide
            </Link>
            .
          </p>
        </Container>
      </section>

      <ConsultationCTA title="Want help with your Victorian ROI?" subtitle="We check your SkillSelect claims and your VPT factors, and prepare your Registration of Interest and nomination application with you." />
    </>
  );
}
