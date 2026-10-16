import Link from "next/link";
import { bookingNotice } from "@/lib/booking-notice";

// The booking/payment notice as a plain list. Used inline on the review
// step and inside the "Booking and Payment Information" dialog.
export function BookingNoticeList({ compact = false }: { compact?: boolean }) {
  return (
    <>
      <ul className={`space-y-${compact ? "2" : "3"} text-sm text-gray-600`}>
        {bookingNotice.paragraphs.map((paragraph) => (
          <li key={paragraph} className="flex gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" aria-hidden="true" />
            {paragraph}
          </li>
        ))}
      </ul>
      <p className={`${compact ? "mt-3" : "mt-5"} text-sm text-gray-600`}>
        Read our{" "}
        <Link href={bookingNotice.termsHref} className="font-semibold text-brand-primary hover:underline">
          {bookingNotice.termsLabel}
        </Link>
        {bookingNotice.contactEmail ? (
          <>
            , or contact us at{" "}
            <a href={`mailto:${bookingNotice.contactEmail}`} className="font-semibold text-brand-primary hover:underline">
              {bookingNotice.contactEmail}
            </a>
            .
          </>
        ) : (
          <>
            , or{" "}
            <Link href="/contact" className="font-semibold text-brand-primary hover:underline">
              get in touch
            </Link>
            .
          </>
        )}
      </p>
    </>
  );
}
