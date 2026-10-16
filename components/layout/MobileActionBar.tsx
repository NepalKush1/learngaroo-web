import Link from "next/link";
import { siteConfig, whatsappLink } from "@/lib/site-config";
import { SocialIcon } from "@/components/icons/SocialIcon";

// Always-visible contact bar on phones (Call / WhatsApp / Book) plus a
// floating WhatsApp button on larger screens once a number is configured.

export function MobileActionBar() {
  const { phone } = siteConfig.contact;
  const whatsappHref = whatsappLink();

  return (
    <>
      {/* Spacer so the fixed bar never covers the footer on phones. */}
      <div className="h-16 bg-brand-navy lg:hidden" aria-hidden="true" />
      <nav
        aria-label="Quick contact"
        className="no-print fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white/95 px-3 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 shadow-raised backdrop-blur lg:hidden"
      >
        <div className="mx-auto flex max-w-md gap-2">
          <a
            href={`tel:${phone.replace(/\s+/g, "")}`}
            className="flex flex-1 items-center justify-center gap-2 rounded-full border border-gray-200 py-2.5 text-sm font-semibold text-brand-navy"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            Call
          </a>
          {whatsappHref && (
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener"
              data-track="whatsapp_click"
              data-track-label="mobile-bar"
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25d366] py-2.5 text-sm font-bold text-brand-navy"
            >
              <SocialIcon platform="whatsapp" className="h-4 w-4" />
              WhatsApp
            </a>
          )}
          <Link
            href="/bookings"
            data-track="book_cta"
            className="flex flex-[1.3] items-center justify-center rounded-full bg-brand-primary py-2.5 text-sm font-semibold text-white"
          >
            Book consultation
          </Link>
        </div>
      </nav>

      {whatsappHref && (
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener"
          aria-label="Chat with us on WhatsApp"
          data-track="whatsapp_click"
          data-track-label="floating"
          className="no-print fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-xl transition-transform hover:scale-110 lg:flex"
        >
          <SocialIcon platform="whatsapp" className="h-7 w-7" />
        </a>
      )}
    </>
  );
}
