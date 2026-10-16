import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { visaNavigation } from "@/data/visas";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { Analytics } from "@/components/analytics/Analytics";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.fullName,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.fullName,
    description: siteConfig.description,
    locale: "en_AU",
    type: "website",
  },
};

// Structured business details so search engines can show the practice
// (name, MARN, phone, area served) in rich results.
const organisationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.fullName,
  url: siteConfig.url,
  logo: `${siteConfig.url}/brand/learniiz-logo.png`,
  image: `${siteConfig.url}/opengraph-image`,
  description: siteConfig.description,
  telephone: siteConfig.contact.phone,
  ...(siteConfig.contact.email && { email: siteConfig.contact.email }),
  ...(siteConfig.contact.address && { address: siteConfig.contact.address }),
  areaServed: "Worldwide",
  identifier: [
    { "@type": "PropertyValue", name: "ABN", value: siteConfig.abn },
    { "@type": "PropertyValue", name: "MARN", value: siteConfig.marn },
  ],
  sameAs: siteConfig.social.map((item) => item.href).filter(Boolean),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organisationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-brand-navy focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <Header visaNav={visaNavigation()} />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
        <MobileActionBar />
        <Analytics />
      </body>
    </html>
  );
}
