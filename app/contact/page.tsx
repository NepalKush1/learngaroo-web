import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { ContactDetails } from "@/components/ui/ContactDetails";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Learniiz Migration & Visa Services in Melbourne with a question about your visa, migration or study pathway, or to arrange a consultation.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Contact us"
        subtitle="Tell us a little about your situation and we'll get back to you about the next steps. Ready to book? Use the Book a Consultation button to choose a time."
      />

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl bg-brand-surface p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-navy">
                Contact details
              </h3>
              <ContactDetails
                className="mt-4 space-y-2 text-sm text-gray-600"
                linkClassName="hover:text-brand-primary"
              />
            </div>
            <div className="rounded-2xl bg-brand-surface p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-navy">
                Registered Migration Agent
              </h3>
              <p className="mt-4 text-sm text-gray-600">
                MARN {siteConfig.marn}
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
