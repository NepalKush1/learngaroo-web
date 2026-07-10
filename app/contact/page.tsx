import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Learngaroo to book a consultation about your visa, migration or study pathway.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Book a consultation"
        subtitle="Tell us a little about your situation and we'll get back to you with the right next steps."
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
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>{siteConfig.contact.phone}</li>
                <li>{siteConfig.contact.email}</li>
                <li>{siteConfig.contact.address}</li>
                <li>{siteConfig.contact.hours}</li>
              </ul>
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
