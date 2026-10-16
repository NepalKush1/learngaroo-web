import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { FaqItem } from "@/components/sections/FaqItem";
import { StateAssessment } from "@/components/state-assessment/StateAssessment";
import { stateProgramsCheckedOn } from "@/data/state-nomination";

export const metadata: Metadata = {
  title: "Which State Could Nominate Me? 190 & 491 Assessment",
  description:
    "Free state nomination assessment: enter your occupation, location, work, study, points and English to see which states' published subclass 190 and 491 criteria you meet in 2026.",
  alternates: { canonical: "/state-nomination/assessment" },
};

const faqs = [
  {
    question: "Does a match mean a state will nominate me?",
    answer:
      "No. A match means your answers meet the published criteria the tool can check. States rank candidates, places are limited, and some criteria (like a genuine commitment to live there or an employer's history) can only be assessed by the state. Treat it as a shortlist to look into.",
  },
  {
    question: "Why does a state show as paused?",
    answer:
      "Several states had not opened their 2026-27 programs when the data was checked. For those, the tool uses each state's last published settings and tells you so. New settings, lists and criteria are usually published when a program reopens, so check again then.",
  },
  {
    question: "Where do the occupation lists come from?",
    answer:
      "From the Home Affairs skilled occupation lists for subclasses 190 and 491 and from each state's own published lists, transcribed from the official sites. Each result shows the list's program year and the date we checked it, with a link to the official page.",
  },
  {
    question: "Is my information saved?",
    answer:
      "No. The assessment runs in your browser and nothing you enter is stored or sent. If you choose to book a consultation, a short summary of your answers is added to the booking form for you to review before you submit it.",
  },
  {
    question: "What should I do next?",
    answer:
      "Read the guide for each state you match, check your occupation on its current list, and make sure your skills assessment and English result will be valid when you lodge an expression or registration of interest. If you'd like a second opinion, book a consultation.",
  },
];

export default function StateAssessmentPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="no-print">
        <PageHero
          eyebrow="Free state nomination assessment"
          title="Which state could nominate you?"
          subtitle="Answer a few questions about your occupation, where you live and work, and your points. We check them against every state and territory's published subclass 190 and 491 criteria and show you where you fit."
        />
      </div>

      <section className="no-print relative -mt-10 pb-4">
        <Container>
          <ol className="grid gap-3 sm:grid-cols-3">
            {[
              {
                title: "Tell us about you",
                body: "Occupation, location, work, study, experience, points, English and age. About 3 minutes.",
              },
              {
                title: "We check all eight",
                body: "Every 190 and 491 pathway in each state and territory, against its own occupation list and rules.",
              },
              {
                title: "See where you fit",
                body: "Your map, the pathways you meet, what's missing, and which programs are open right now.",
              },
            ].map((item, index) => (
              <li
                key={item.title}
                className="flex gap-3 rounded-2xl border border-gray-100 bg-white p-5 shadow-card"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-green text-sm font-extrabold text-white">
                  {index + 1}
                </span>
                <span>
                  <span className="font-heading block text-base font-bold text-brand-navy">
                    {item.title}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-gray-600">
                    {item.body}
                  </span>
                </span>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-brand-surface py-14 sm:py-20">
        <Container>
          <StateAssessment />
          <p className="no-print mx-auto mt-6 max-w-3xl text-center text-xs leading-relaxed text-gray-500">
            Program status checked {stateProgramsCheckedOn}. Compare the states
            side by side on the{" "}
            <Link
              href="/state-nomination"
              className="font-semibold text-brand-primary hover:underline"
            >
              state nomination map
            </Link>
            , or estimate your score with the{" "}
            <Link
              href="/tools/points-calculator"
              className="font-semibold text-brand-primary hover:underline"
            >
              points calculator
            </Link>
            .
          </p>
        </Container>
      </section>

      <section className="no-print py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="About the assessment"
            title="Good to know"
            highlight="know"
            align="center"
          />
          <div className="mx-auto mt-10 max-w-3xl space-y-3">
            {faqs.map((item) => (
              <FaqItem
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </Container>
      </section>

      <div className="no-print">
        <ConsultationCTA
          title="Want us to check your state options properly?"
          subtitle="We go through your occupation, evidence and each state's current settings with you, and plan your EOI or ROI around the programs most likely to fit."
        />
      </div>
    </>
  );
}
