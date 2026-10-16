import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/sections/LegalPage";
import { siteConfig } from "@/lib/site-config";
import { agent } from "@/data/agent";

export const metadata: Metadata = {
  title: "Complaints and Feedback",
  description:
    "How to raise a concern about our service, how we respond, and how to contact the Office of the Migration Agents Registration Authority (OMARA).",
};

// DRAFT: review against the current OMARA Code of Conduct before publishing.
export default function ComplaintsPage() {
  return (
    <LegalPage
      title="Complaints and feedback"
      subtitle="If something hasn't gone right, we want to know. Here's how to raise it, and what happens next."
    >
      <section>
        <h2>1. Talk to us first</h2>
        <p>
          Most concerns can be sorted out quickly. Contact {agent.name.split(" ")[0]} directly by
          phone on <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}>{siteConfig.contact.phone}</a>
          {siteConfig.contact.email && (
            <>
              {" "}or email <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
            </>
          )}
          , or use the <Link href="/contact">contact form</Link>. Please include your booking
          reference if you have one.
        </p>
      </section>
      <section>
        <h2>2. What we&apos;ll do</h2>
        <ul>
          <li>Acknowledge your complaint in writing within 2 business days.</li>
          <li>Look into it fairly and, where needed, ask you for more detail.</li>
          <li>Give you a written response within 10 business days, or tell you if we need longer and why.</li>
          <li>Tell you what we&apos;ll do to put things right if we got something wrong.</li>
        </ul>
        <p>Making a complaint will never affect the service you receive from us.</p>
      </section>
      <section>
        <h2>3. If you&apos;re not satisfied</h2>
        <p>
          Registered Migration Agents are regulated by the Office of the Migration Agents
          Registration Authority (OMARA). If you&apos;re not satisfied with our response, you
          can complain to OMARA at{" "}
          <a href="https://www.mara.gov.au" target="_blank" rel="noopener noreferrer">
            www.mara.gov.au
          </a>
          . Our registration number is MARN {siteConfig.marn}.
        </p>
        <p>
          For concerns about fees or consumer rights, you can also contact Consumer Affairs
          Victoria or the Australian Competition and Consumer Commission.
        </p>
      </section>
      <section>
        <h2>4. Feedback</h2>
        <p>
          Compliments and suggestions are welcome too. They help us improve, and we may ask
          your permission to share positive feedback on our website.
        </p>
      </section>
    </LegalPage>
  );
}
