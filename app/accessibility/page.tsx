import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/sections/LegalPage";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Our commitment to making the Learniiz website usable by everyone, what we've done so far, and how to tell us if something isn't working for you.",
};

export default function AccessibilityPage() {
  return (
    <LegalPage
      title="Accessibility statement"
      subtitle="We want everyone to be able to use this website, whatever device or assistive technology they use."
    >
      <section>
        <h2>Our commitment</h2>
        <p>
          {siteConfig.fullName} aims to meet the Web Content Accessibility Guidelines (WCAG) 2.2
          at level AA. Accessibility is part of how we design and build every page.
        </p>
      </section>
      <section>
        <h2>What we&apos;ve done</h2>
        <ul>
          <li>All text and icons meet AA colour-contrast requirements, checked on every page.</li>
          <li>Every page can be used with a keyboard alone, with visible focus indicators and a skip-to-content link.</li>
          <li>Forms have clear labels, error messages and instructions.</li>
          <li>Animations are turned off for visitors who have &ldquo;reduce motion&rdquo; enabled on their device.</li>
          <li>Images have descriptive alternative text, and decorative images are hidden from screen readers.</li>
          <li>Pages use a logical heading structure and semantic HTML.</li>
          <li>The site works on phones, tablets and desktops, and when zoomed to 200%.</li>
        </ul>
      </section>
      <section>
        <h2>Known limitations</h2>
        <ul>
          <li>Videos we publish may not yet have captions. We&apos;re adding them as content is produced.</li>
          <li>Documents we link to on government websites are outside our control.</li>
        </ul>
      </section>
      <section>
        <h2>Tell us if something isn&apos;t working</h2>
        <p>
          If you have difficulty using any part of this site, or would like information in
          another format, please <Link href="/contact">contact us</Link> or call{" "}
          <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}>{siteConfig.contact.phone}</a>.
          We&apos;ll respond within 5 business days and do our best to help.
        </p>
      </section>
    </LegalPage>
  );
}
