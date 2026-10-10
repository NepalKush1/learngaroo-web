import "server-only";
import { siteConfig } from "@/lib/site-config";
import type { Booking } from "./bookings";

// Calendar invite (.ics) attached to confirmation emails, so the client
// can add the appointment to Google, Outlook or Apple Calendar in one tap.

function icsDate(iso: string): string {
  return iso.replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

function escapeText(value: string): string {
  return value.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");
}

export function bookingInvite(booking: Booking, method: "REQUEST" | "CANCEL" = "REQUEST"): string {
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Learniiz Migration & Visa Services//Bookings//EN",
    "CALSCALE:GREGORIAN",
    `METHOD:${method === "CANCEL" ? "CANCEL" : "PUBLISH"}`,
    "BEGIN:VEVENT",
    `UID:${booking.id}@learniiz-migration`,
    `DTSTAMP:${icsDate(new Date().toISOString())}`,
    `DTSTART:${icsDate(booking.starts_at)}`,
    `DTEND:${icsDate(booking.ends_at)}`,
    `SUMMARY:${escapeText(`${booking.service_title} — ${siteConfig.fullName}`)}`,
    `DESCRIPTION:${escapeText(
      `Booking reference ${booking.reference}. We'll contact you with meeting details before your appointment. Questions? Call ${siteConfig.contact.phone}.`,
    )}`,
    `STATUS:${method === "CANCEL" ? "CANCELLED" : "CONFIRMED"}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ];
  return lines.join("\r\n");
}
