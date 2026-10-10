import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
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
    images: ["/facebook-cover-page.png"],
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
  logo: `${siteConfig.url}/brand/learniiz-lockup.png`,
  image: `${siteConfig.url}/facebook-cover-page.png`,
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
