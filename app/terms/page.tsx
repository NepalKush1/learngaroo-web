import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/sections/LegalPage";
import { agent } from "@/data/agent";
import { legal } from "@/data/legal";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Consultation Terms and Conditions",
  description:
    "The terms that apply when you book a paid consultation with Learniiz Migration & Visa Services.",
};

export default function TermsPage() {
  const hours = legal.cancellationNoticeHours;

  return (
    <LegalPage
      title="Consultation Terms and Conditions"
      subtitle="The terms that apply when you book and pay for a consultation with us."
    >
      <section>
        <h2>1. About us</h2>
        <p>
          Consultations are provided by {agent.name}, a Registered Migration Agent (MARN{" "}
          {siteConfig.marn}), trading as {siteConfig.fullName} (ABN {siteConfig.abn}). Registered
          migration agents are bound by the Code of Conduct for registered migration agents,
          administered by the Office of the Migration Agents Registration Authority (OMARA).
        </p>
      </section>

      <section>
        <h2>2. What a consultation includes</h2>
        <p>
          A consultation is an initial assessment of your circumstances, your possible visa
          options and recommended next steps. It does not include preparing or lodging any
          application, reviewing documents in detail, or ongoing representation, unless we agree
          to that separately in writing. If you decide to go ahead with further services, we will
          give you a written Service Agreement, an estimate of fees and charges, and the
          Consumer Guide published by OMARA before any work begins.
        </p>
        <p>
          Advice is based on the information you give us and the law and policy in force at the
          time. We can&apos;t guarantee the outcome of any visa application or review — decisions
          are made by the Department of Home Affairs or the Administrative Review Tribunal.
        </p>
      </section>

      <section>
        <h2>3. Fees and payment</h2>
        <ul>
          <li>The consultation fee shown when you book is payable in full at the time of booking.</li>
          <li>Fees are in Australian dollars and include GST where shown.</li>
          <li>
            Payments are processed by our payment provider, Stripe. Your card details are entered
            directly with Stripe and are never seen or stored by us.
          </li>
          <li>
            Our payment provider deducts a processing fee, and the balance is held in our client
            account until the consultation has taken place. We then issue a tax invoice and apply
            the funds to it — no further action is needed from you.
          </li>
          <li>Please do not make any other payment unless we have specifically asked you to.</li>
        </ul>
      </section>

      <section>
        <h2>4. Rescheduling and cancellations</h2>
        <ul>
          <li>
            You can reschedule or cancel free of charge by giving us at least {hours} hours&apos;
            notice before your appointment.
          </li>
          {legal.refundWithNotice && (
            <li>
              If you cancel with at least {hours} hours&apos; notice, we will refund your
              consultation fee less the payment provider&apos;s processing fee, which is
              non-refundable.
            </li>
          )}
          <li>
            If you cancel with less than {hours} hours&apos; notice, or don&apos;t attend, the
            consultation fee is not refundable, except where required by law.
          </li>
          <li>
            If we need to cancel or reschedule, we will offer you a new time or a full refund.
          </li>
          <li>
            Nothing in these terms excludes your rights under the Australian Consumer Law.
          </li>
        </ul>
      </section>

      <section>
        <h2>5. Your responsibilities</h2>
        <p>
          Please give us complete and accurate information, and tell us about any important
          dates — such as a visa expiry, a refusal or a review deadline — when you book. Time
          limits for reviews are strict and we can&apos;t extend them.
        </p>
      </section>

      <section>
        <h2>6. Privacy and complaints</h2>
        <p>
          We handle your personal information as described in our{" "}
          <Link href="/privacy">Privacy Policy</Link>. If you&apos;re unhappy with our service,
          please contact us first so we can try to resolve it. You can also make a complaint to
          OMARA about a registered migration agent.
        </p>
      </section>

      <section>
        <h2>7. Contact</h2>
        <p>
          Questions about these terms? Call {siteConfig.contact.phone}
          {siteConfig.contact.email && <> or email {siteConfig.contact.email}</>}, or use our{" "}
          <Link href="/contact">contact form</Link>.
        </p>
      </section>
    </LegalPage>
  );
}
