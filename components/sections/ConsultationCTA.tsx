import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function ConsultationCTA({
  title = "Ready to start your migration or study journey?",
  subtitle = "Book a consultation and we'll help you understand the pathway that fits your situation.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-gradient-to-r from-brand-teal to-brand-blue py-16 text-white">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="font-heading max-w-2xl text-3xl font-semibold">{title}</h2>
        <p className="max-w-xl text-lg text-blue-50">{subtitle}</p>
        <Link
          href="/bookings"
          className="group inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-lg font-semibold text-brand-navy transition-colors hover:bg-gray-100"
        >
          <span className="relative inline-block">
            Book a Consultation
            <span className="absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 bg-brand-navy transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100" />
          </span>
        </Link>
      </Container>
    </section>
  );
}
