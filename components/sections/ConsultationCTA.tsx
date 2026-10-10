import { Container } from "@/components/ui/Container";
import { Button, ArrowIcon } from "@/components/ui/Button";

export function ConsultationCTA({
  title = "Ready to start your migration journey?",
  subtitle = "Book a consultation and we'll help you understand the pathway that fits your situation.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="py-20">
      <Container>
        <div className="bg-gradient-brand relative overflow-hidden rounded-[2rem] px-8 py-16 text-center text-white shadow-[0_30px_60px_-25px_rgba(31,127,83,0.55)] sm:px-16">
          <div className="bg-dots pointer-events-none absolute inset-0 opacity-40 invert" aria-hidden="true" />
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/15 blur-2xl"
            aria-hidden="true"
          />
          <div className="relative flex flex-col items-center gap-6">
            <h2 className="font-heading max-w-2xl text-3xl font-extrabold sm:text-4xl">{title}</h2>
            <p className="max-w-xl text-lg text-white/85">{subtitle}</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button href="/bookings" variant="outline" className="border-transparent text-base">
                Book a Consultation
                <ArrowIcon />
              </Button>
              <Button href="/contact" variant="ghost-light" className="text-base">
                Contact us
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
