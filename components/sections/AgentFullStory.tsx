import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MarnBadge } from "@/components/ui/MarnBadge";
import { Reveal } from "@/components/ui/Reveal";
import { agent } from "@/data/agent";

const ICONS: Record<string, string> = {
  education:
    "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z",
  experience:
    "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.99m7.5 0a48.667 48.667 0 00-7.5 0",
  hobbies:
    "M9 19V6l12-2v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-2c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z",
  motivation:
    "M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18",
};

function SectionIcon({ name }: { name: keyof typeof ICONS }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d={ICONS[name]} />
    </svg>
  );
}

function ProfileSection({
  icon,
  title,
  paragraphs,
}: {
  icon?: keyof typeof ICONS;
  title: string;
  paragraphs: string[];
}) {
  return (
    <Reveal>
      <div className="flex gap-4">
        {icon && (
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-green/15 to-brand-blue/15 text-brand-primary">
            <SectionIcon name={icon} />
          </div>
        )}
        <div className={icon ? "" : "pl-0"}>
          <h3 className="font-heading text-lg font-semibold text-brand-navy">
            {title}
          </h3>
          <div className="mt-2 space-y-3 text-gray-600">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function AgentFullStory() {
  const { fullProfile } = agent;

  return (
    <section id="kush-kumar-nepal" className="py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <Reveal>
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl lg:max-w-none">
              {agent.photoSrc && (
                <Image
                  src={agent.photoSrc}
                  alt={agent.name}
                  fill
                  className="object-cover object-top"
                />
              )}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-brand-green" aria-hidden="true" />
              <p className="text-base font-semibold uppercase tracking-[0.2em] text-brand-primary sm:text-lg">
                Meet Your Migration Agent
              </p>
            </div>
            <p className="font-heading mt-2 text-2xl font-semibold text-brand-navy sm:text-3xl">
              {agent.name}
            </p>
            <p className="mt-1 text-base font-medium text-brand-primary">
              Registered Migration Agent since 2024 — MARN {agent.marn}
            </p>

            <div className="mt-6">
              <MarnBadge marn={agent.marn} />
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Migration advice on this site is provided under this
              registration, recognised by the Office of the Migration
              Agents Registration Authority (OMARA).
            </p>

            <div className="mt-8">
              <Button href="/bookings" className="group text-xl">
                <span className="relative inline-block">
                  Book a Consultation
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100" />
                </span>
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="mx-auto mt-20 max-w-3xl space-y-14">
          <ProfileSection title="Introduction" paragraphs={fullProfile.introduction} />
          <ProfileSection
            icon="education"
            title="Educational Background"
            paragraphs={fullProfile.education}
          />
          <ProfileSection
            icon="experience"
            title="Professional Experience"
            paragraphs={fullProfile.experience}
          />
          <ProfileSection title="Personal Approach" paragraphs={fullProfile.personalApproach} />
          <ProfileSection
            icon="hobbies"
            title="Hobbies"
            paragraphs={fullProfile.hobbies}
          />
          <ProfileSection
            icon="motivation"
            title="Motivation"
            paragraphs={fullProfile.motivation}
          />

          <Reveal>
            <blockquote className="rounded-2xl border-l-4 border-brand-green bg-brand-surface p-6">
              <p className="font-heading text-lg font-medium italic text-brand-navy">
                &ldquo;{fullProfile.closingStatement}&rdquo;
              </p>
            </blockquote>
          </Reveal>

          <Reveal>
            <div className="text-center">
              <Button href="/bookings" className="group text-xl">
                <span className="relative inline-block">
                  Book a Consultation
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100" />
                </span>
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
