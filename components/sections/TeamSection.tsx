import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

// Add a name to show a team member on the About page. The section stays
// hidden until at least one member has a name.
const team: { name: string; role: string }[] = [
  { name: "", role: "Migration Case Manager" },
  { name: "", role: "Education & Enrolment Advisor" },
  { name: "", role: "Client Services Lead" },
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
  const members = team.filter((member) => member.name);
  if (members.length === 0) return null;

  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Our Team"
          title="The rest of the Learniiz team"
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {members.map((member, index) => (
            <Reveal key={member.name} delay={index * 80}>
              <div className="flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-surface text-brand-navy/40">
                  <PersonIcon />
                </div>
                <p className="font-heading mt-4 font-bold text-brand-navy">
                  {member.name}
                </p>
                <p className="mt-1 text-sm text-gray-500">{member.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
