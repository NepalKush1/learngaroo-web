import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/sections/LegalPage";
import { legal } from "@/data/legal";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Learniiz Migration & Visa Services collects, uses, stores and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      subtitle="How we collect, use and protect your personal information."
    >
      <section>
        <h2>1. Who we are</h2>
        <p>
          {siteConfig.fullName} (ABN {siteConfig.abn}) provides Australian migration advice
          through a Registered Migration Agent (MARN {siteConfig.marn}). We are committed to
          handling your personal information in line with the Australian Privacy Principles in
          the <em>Privacy Act 1988</em> (Cth) and the confidentiality obligations of the Code of
          Conduct for registered migration agents.
        </p>
      </section>

      <section>
        <h2>2. What we collect</h2>
        <ul>
          <li>Contact details — your name, email addresses, phone number and postal address.</li>
          <li>
            Information about your situation that you choose to share — for example your visa
            history, decision dates and review deadlines.
          </li>
          <li>Booking details — the consultation you booked, its time and your time zone.</li>
          <li>
            Payment confirmation from our payment provider. We do not receive or store your card
            details.
          </li>
          <li>Basic technical information your browser sends when you use this website.</li>
        </ul>
        <p>
          Some information about your immigration circumstances may be sensitive. We only collect
          it with your consent and when it&apos;s needed to advise you.
        </p>
      </section>

      <section>
        <h2>3. How we use it</h2>
        <ul>
          <li>To arrange, confirm and provide your consultation, and to contact you about it.</li>
          <li>To answer enquiries you send us.</li>
          <li>To take payment and issue invoices and receipts.</li>
          <li>To meet our legal and professional obligations, including record keeping.</li>
        </ul>
        <p>We do not sell your information or use it for unrelated marketing.</p>
      </section>

      <section>
        <h2>4. Who we share it with</h2>
        <p>We share your information only where needed to provide our services:</p>
        <ul>
          <li>Stripe, to process consultation payments.</li>
          <li>Our email provider, to send booking confirmations and replies.</li>
          <li>Our website hosting provider, which stores booking and enquiry records.</li>
          <li>
            Government bodies such as the Department of Home Affairs or the Administrative Review
            Tribunal — only when you have engaged us to act for you, or where the law requires it.
          </li>
        </ul>
        <p>
          Some of these providers may store data outside Australia (for example in the United
          States). We choose providers that protect personal information to a standard
          comparable to the Australian Privacy Principles.
        </p>
      </section>

      <section>
        <h2>5. Storage and security</h2>
        <p>
          We take reasonable steps to protect your information from misuse, loss and
          unauthorised access, including encrypted connections and password-protected systems.
          We keep client records for at least {legal.recordRetentionYears} years, as required of
          registered migration agents, and then securely destroy them.
        </p>
      </section>

      <section>
        <h2>6. Accessing and correcting your information</h2>
        <p>
          You can ask to see the personal information we hold about you, or ask us to correct it,
          at any time. We&apos;ll respond within 30 days.
        </p>
      </section>

      <section>
        <h2>7. Complaints</h2>
        <p>
          If you have a concern about how we&apos;ve handled your information, please contact us
          first. If you&apos;re not satisfied with our response, you can contact the Office of
          the Australian Information Commissioner (OAIC) at{" "}
          <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer">
            oaic.gov.au
          </a>
          .
        </p>
      </section>

      <section>
        <h2>8. Contact us</h2>
        <p>
          Call {siteConfig.contact.phone}
          {siteConfig.contact.email && <> or email {siteConfig.contact.email}</>}, or use our{" "}
          <Link href="/contact">contact form</Link>.
        </p>
      </section>
    </LegalPage>
  );
}
