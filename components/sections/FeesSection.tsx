import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceIcon } from "@/components/icons/ServiceIcon";
import { formatPrice, getActiveConsultations } from "@/data/consultations";
import { serviceAccent } from "@/lib/accents";

// Published consultation fees, straight from data/consultations.ts.
export function FeesSection() {
  const consultations = getActiveConsultations();

  return (
    <section id="fees" className="scroll-mt-24 py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Transparent pricing"
            title="Clear consultation fees, paid securely online"
            highlight="Clear consultation fees"
            subtitle="Every consultation is with a Registered Migration Agent and includes GST. Home Affairs visa application charges are separate."
            align="center"
          />
        </Reveal>
        <Reveal delay={100}>
          <ul className="mx-auto mt-14 grid max-w-5xl gap-3 sm:grid-cols-2">
            {consultations.map((consultation) => (
              <li key={consultation.id}>
                <Link
                  href="/bookings"
                  className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-primary/30 hover:shadow-md"
                >
                  <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white shadow-md ${serviceAccent(consultation.slug).tile}`}>
                    <ServiceIcon slug={consultation.slug} className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-bold text-brand-navy">{consultation.title}</span>
                    <span className="block text-xs text-gray-500">{consultation.durationMinutes}-minute consultation</span>
                  </span>
                  <span className="text-right">
                    <span className="font-heading block text-lg font-extrabold text-brand-navy">
                      {formatPrice(consultation.priceInCents, consultation.currency)}
                    </span>
                    <span className="block text-xs font-semibold text-brand-primary group-hover:underline">Book →</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
