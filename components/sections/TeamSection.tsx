import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const roles = [
  "Migration Case Manager",
  "Education & Enrolment Advisor",
  "Client Services Lead",
];

function PersonIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className="h-8 w-8"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0"
      />
    </svg>
  );
}

export function TeamSection() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Our Team"
          title="The rest of the Learngaroo team"
          subtitle="Team profiles are being finalised — check back soon, or ask us directly when you book a consultation."
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {roles.map((role, index) => (
            <Reveal key={role} delay={index * 80}>
              <div className="flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-surface text-brand-navy/40">
                  <PersonIcon />
                </div>
                <p className="mt-4 text-sm italic text-gray-400">
                  [Name to be added]
                </p>
                <p className="font-heading mt-1 font-semibold text-brand-navy">
                  {role}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
