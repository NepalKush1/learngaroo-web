import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Consultation Terms and Conditions",
  description:
    "Consultation Terms and Conditions for Learngaroo migration and education consultations.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Consultation Terms and Conditions"
        subtitle="This page is a placeholder — the real terms and conditions text needs to be drafted and reviewed before this site goes live."
      />

      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-xl rounded-2xl border border-dashed border-gray-300 bg-brand-surface p-10 text-center">
            <p className="font-heading text-xl font-semibold text-brand-navy">
              Terms and conditions to be added
            </p>
            <p className="mt-3 text-gray-600">
              This should cover consultation fees, cancellation and
              rescheduling policy, refunds, and other booking terms. This
              wording should be reviewed by a qualified legal adviser before
              publishing, since it will govern real client bookings and
              payments.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
