import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button, ArrowIcon } from "@/components/ui/Button";

// An honest side-by-side: applying on your own versus with a registered
// agent. No approval-rate claims; the difference is what you know at each
// step and who is accountable.

const columns = [
  {
    title: "Applying on your own",
    tag: "Possible, and free of professional fees",
    highlighted: false,
    rows: [
      { title: "Which visa", text: "You compare subclasses from the Home Affairs site and forums." },
      { title: "Documents", text: "A generic checklist tells you what to upload, not what each item needs to prove." },
      { title: "Risk", text: "A refusal can affect future applications, and the government fee is not refunded." },
      { title: "Changes", text: "Rules change through the year, often with little notice." },
      { title: "Accountability", text: "You carry the application and any mistakes in it." },
    ],
  },
  {
    title: "With Learniiz",
    tag: "A Registered Migration Agent on your case",
    highlighted: true,
    rows: [
      { title: "Which visa", text: "A written assessment of the pathways open to you, with costs, timing and risks." },
      { title: "Documents", text: "A checklist built for your passport country, history and family, with the reason behind each item." },
      { title: "Risk", text: "Weak points are found and addressed before lodgement, and we tell you honestly if the case is not ready." },
      { title: "Changes", text: "We track Home Affairs changes and tell you when they affect your plan." },
      { title: "Accountability", text: "Your agent is bound by the OMARA Code of Conduct and answers to you." },
    ],
  },
];

export function ComparisonSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="An honest comparison"
            title="You can apply yourself. Here is what changes with an agent."
            highlight="what changes"
            subtitle="We do not sell approval rates. The difference is knowing what is missing, why it matters and what to do next."
            align="center"
          />
        </Reveal>
        <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-2">
          {columns.map((column, index) => (
            <Reveal key={column.title} delay={index * 120}>
              <div
                className={`flex h-full flex-col rounded-3xl p-7 ${
                  column.highlighted
                    ? "border-2 border-brand-primary/30 bg-white shadow-float"
                    : "border border-gray-100 bg-brand-surface"
                }`}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-heading text-xl font-bold text-brand-navy">{column.title}</h3>
                  <span className={`text-xs font-semibold ${column.highlighted ? "text-brand-primary" : "text-gray-500"}`}>{column.tag}</span>
                </div>
                <ol className="mt-6 space-y-4">
                  {column.rows.map((row, rowIndex) => (
                    <li key={row.title} className="flex gap-3">
                      <span className={`text-xs font-extrabold tabular-nums ${column.highlighted ? "text-brand-primary" : "text-gray-400"}`}>
                        {String(rowIndex + 1).padStart(2, "0")}
                      </span>
                      <span>
                        <span className="block text-sm font-bold text-brand-navy">{row.title}</span>
                        <span className="block text-sm leading-relaxed text-gray-600">{row.text}</span>
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <div className="mt-10 text-center">
            <Button href="/bookings">
              Start with a consultation
              <ArrowIcon />
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
