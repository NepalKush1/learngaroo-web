import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { agent } from "@/data/agent";
import { siteConfig } from "@/lib/site-config";

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    </svg>
  );
}

export function PersonaliseJourneyCTA() {
  const telHref = `tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`;

  return (
    <section className="bg-brand-surface py-20">
      <Container>
        <div className="grid overflow-hidden rounded-[2rem] bg-white shadow-2xl ring-1 ring-black/5 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col justify-center p-10 sm:p-14">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-primary">
                Personalised Support
              </p>
              <h2 className="font-heading mt-4 text-3xl font-semibold tracking-tight text-brand-navy sm:text-4xl">
                Personalise your migration journey
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-gray-600">
                Experience the peace of mind with migration personalised for
                you.
              </p>

              <div className="mt-10 border-t border-gray-100 pt-8">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-primary">
                  Get in Touch
                </p>
                <a
                  href={telHref}
                  className="mt-4 inline-flex items-center gap-4 rounded-2xl bg-brand-surface px-5 py-4 transition-colors hover:bg-brand-primary/10"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-primary text-white shadow-md shadow-brand-primary/30">
                    <PhoneIcon />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wide text-gray-500">
                      Call us
                    </span>
                    <span className="block text-lg font-bold text-brand-navy">
                      {siteConfig.contact.phone}
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="relative min-h-[420px] w-full lg:min-h-[560px]">
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
        </div>
      </Container>
    </section>
  );
}
