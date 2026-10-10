import { siteConfig } from "@/lib/site-config";

// Content for the "Important Booking Information" modal shown on the
// booking page. Kept as plain data so it can be edited without touching
// component code.
export const bookingNotice = {
  title: "Important Booking Information",
  paragraphs: [
    "The consultation fee must be paid at the time your appointment is booked.",
    "Payment processing fees may be deducted by our payment provider before funds are received.",
    "You will receive a tax invoice or receipt after your payment is processed.",
    "Please do not make any additional payment unless specifically requested by Learniiz.",
    "Consultation fees, cancellations, refunds and rescheduling are governed by our Consultation Terms and Conditions.",
    "If you have any questions before booking, please contact us — we're happy to help.",
  ],
  termsHref: "/terms",
  termsLabel: "Consultation Terms and Conditions",
  contactEmail: siteConfig.contact.email,
  reopenLabel: "Booking and Payment Information",
};
