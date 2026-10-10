import "server-only";
import { availability } from "@/data/availability";
import { formatPrice } from "@/data/consultations";
import { siteConfig } from "@/lib/site-config";
import { formatAppointment } from "@/lib/timezone";
import { parseDetails, type Booking } from "./bookings";
import { serverConfig } from "./config";
import { sendEmail } from "./email";
import { bookingInvite } from "./ics";

// Every email the site sends. All user-supplied values are HTML-escaped.

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function layout(heading: string, body: string): string {
  return `<!doctype html><html><body style="margin:0;background:#f3f8f5;font-family:Manrope,Segoe UI,Arial,sans-serif;color:#0b1a2e">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:32px 12px">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden">
        <tr><td style="height:6px;background:linear-gradient(90deg,#1f7f53,#3c9f6c,#398fe8)"></td></tr>
        <tr><td style="padding:28px 32px 8px">
          <p style="margin:0;font-size:20px;font-weight:800">Learn<span style="color:#3c9f6c">iiz</span></p>
          <p style="margin:2px 0 0;font-size:12px;color:#5b6b7f">Migration &amp; Visa Services</p>
        </td></tr>
        <tr><td style="padding:16px 32px 28px;font-size:15px;line-height:1.6">
          <h1 style="margin:0 0 16px;font-size:22px">${heading}</h1>
          ${body}
        </td></tr>
        <tr><td style="padding:18px 32px;background:#0b1a2e;color:#b7c2cf;font-size:12px;line-height:1.6">
          ${escapeHtml(siteConfig.fullName)} · ${escapeHtml(siteConfig.contact.phone)}<br>
          Registered Migration Agent — MARN ${siteConfig.marn} · ABN ${siteConfig.abn}
        </td></tr>
      </table>
    </td></tr>
  </table></body></html>`;
}

function rows(items: [string, string | undefined | null][]): string {
  return `<table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;margin:12px 0;border-collapse:collapse">${items
    .filter(([, value]) => value)
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 0;border-bottom:1px solid #eef2f0;color:#5b6b7f;width:38%;vertical-align:top">${escapeHtml(label)}</td><td style="padding:8px 0;border-bottom:1px solid #eef2f0;font-weight:600">${escapeHtml(value!).replace(/\n/g, "<br>")}</td></tr>`,
    )
    .join("")}</table>`;
}

function textRows(items: [string, string | undefined | null][]): string {
  return items
    .filter(([, value]) => value)
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");
}

function appointmentLines(booking: Booking): [string, string][] {
  const practice = formatAppointment(booking.starts_at, availability.timeZone);
  const local =
    booking.client_time_zone && booking.client_time_zone !== availability.timeZone
      ? formatAppointment(booking.starts_at, booking.client_time_zone)
      : null;
  return [
    ["Consultation", booking.service_title ?? ""],
    ["Date & time (Melbourne)", practice],
    ...(local ? [["Your local time", local] as [string, string]] : []),
    ["Reference", booking.reference],
  ];
}

function clientRecipients(booking: Booking): string[] {
  return parseDetails(booking)?.emails ?? (booking.email ? [booking.email] : []);
}

function adminSummary(booking: Booking, headline: string) {
  const details = parseDetails(booking);
  const items: [string, string | undefined | null][] = [
    ...appointmentLines(booking),
    ["Status", headline],
    [
      "Fee",
      booking.price_cents != null ? formatPrice(booking.price_cents, booking.currency ?? "AUD") : null,
    ],
    ["Client", details ? `${details.firstName} ${details.lastName}` : null],
    ["Email", details?.emails.join(", ")],
    ["Phone", details ? `${details.phoneCountryCode} ${details.phone}` : null],
    [
      "Address",
      details
        ? [details.addressLine1, details.addressLine2, details.city, details.state, details.postcode, details.country]
            .filter(Boolean)
            .join(", ")
        : null,
    ],
    ["Heard about us", details?.hearAboutUs],
    ["Date of decision", details?.decisionDate],
    ["Review deadline", details?.reviewDeadline],
    ["Enquiry", details?.enquiryDescription],
  ];
  return { items, replyTo: details?.emails[0] };
}

const adminLink = () => `${serverConfig.siteUrl}/admin`;

export async function notifyBookingConfirmed(booking: Booking) {
  const invite = { filename: "consultation.ics", content: bookingInvite(booking), contentType: "text/calendar" };
  const lines = appointmentLines(booking);

  await sendEmail({
    to: clientRecipients(booking),
    subject: `Your consultation is confirmed — ${booking.reference}`,
    html: layout(
      "Your consultation is confirmed",
      `<p>Hi ${escapeHtml(booking.first_name ?? "there")},</p>
       <p>Thank you — your payment has been received and your consultation is booked.</p>
       ${rows(lines)}
       <p>We'll contact you before your appointment with the meeting details. A calendar invite is attached.</p>
       <p>If you need to reschedule, please reply to this email or call ${escapeHtml(siteConfig.contact.phone)} as early as possible.</p>`,
    ),
    text: `Hi ${booking.first_name ?? "there"},\n\nThank you — your payment has been received and your consultation is booked.\n\n${textRows(lines)}\n\nWe'll contact you before your appointment with the meeting details.\nTo reschedule, reply to this email or call ${siteConfig.contact.phone}.`,
    replyTo: serverConfig.email.notifyTo || undefined,
    attachments: [invite],
  });

  const summary = adminSummary(booking, "Paid and confirmed");
  await sendEmail({
    to: serverConfig.email.notifyTo,
    subject: `New paid booking: ${booking.service_title} — ${formatAppointment(booking.starts_at, availability.timeZone)}`,
    html: layout("New paid booking", `${rows(summary.items)}<p><a href="${adminLink()}">Open the bookings dashboard</a></p>`),
    text: `${textRows(summary.items)}\n\nDashboard: ${adminLink()}`,
    replyTo: summary.replyTo,
    attachments: [invite],
  });
}

export async function notifyBookingRequested(booking: Booking) {
  const lines = appointmentLines(booking);

  await sendEmail({
    to: clientRecipients(booking),
    subject: `We've received your booking request — ${booking.reference}`,
    html: layout(
      "Booking request received",
      `<p>Hi ${escapeHtml(booking.first_name ?? "there")},</p>
       <p>Thanks for your booking request. We've reserved this time for you and will be in touch shortly to confirm and arrange payment of the consultation fee.</p>
       ${rows(lines)}`,
    ),
    text: `Hi ${booking.first_name ?? "there"},\n\nThanks for your booking request. We've reserved this time and will be in touch shortly to confirm and arrange payment.\n\n${textRows(lines)}`,
    replyTo: serverConfig.email.notifyTo || undefined,
  });

  const summary = adminSummary(booking, "Requested — payment to be arranged");
  await sendEmail({
    to: serverConfig.email.notifyTo,
    subject: `New booking request: ${booking.service_title} — ${formatAppointment(booking.starts_at, availability.timeZone)}`,
    html: layout(
      "New booking request (unpaid)",
      `<p>Online payment isn't switched on, so please contact the client to arrange payment.</p>${rows(summary.items)}<p><a href="${adminLink()}">Open the bookings dashboard</a></p>`,
    ),
    text: `Online payment isn't switched on — contact the client to arrange payment.\n\n${textRows(summary.items)}\n\nDashboard: ${adminLink()}`,
    replyTo: summary.replyTo,
    attachments: [{ filename: "consultation.ics", content: bookingInvite(booking), contentType: "text/calendar" }],
  });
}

export async function notifyBookingCancelled(booking: Booking) {
  if (booking.kind !== "booking") return;
  const lines = appointmentLines(booking);
  await sendEmail({
    to: clientRecipients(booking),
    subject: `Your consultation has been cancelled — ${booking.reference}`,
    html: layout(
      "Your consultation has been cancelled",
      `<p>Hi ${escapeHtml(booking.first_name ?? "there")},</p>
       <p>Your consultation below has been cancelled. If a refund applies, it will be processed in line with our Consultation Terms and Conditions.</p>
       ${rows(lines)}
       <p>You're welcome to <a href="${serverConfig.siteUrl}/bookings">book a new time</a> whenever suits you.</p>`,
    ),
    text: `Hi ${booking.first_name ?? "there"},\n\nYour consultation has been cancelled. If a refund applies, it will be processed in line with our Consultation Terms and Conditions.\n\n${textRows(lines)}\n\nBook a new time: ${serverConfig.siteUrl}/bookings`,
    replyTo: serverConfig.email.notifyTo || undefined,
    attachments: [{ filename: "consultation.ics", content: bookingInvite(booking, "CANCEL"), contentType: "text/calendar" }],
  });
}

export async function notifyEnquiry(enquiry: {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}) {
  const items: [string, string | undefined][] = [
    ["Name", enquiry.name],
    ["Email", enquiry.email],
    ["Phone", enquiry.phone],
    ["Service of interest", enquiry.service],
    ["Message", enquiry.message],
  ];

  const delivered = await sendEmail({
    to: serverConfig.email.notifyTo,
    subject: `New website enquiry from ${enquiry.name}`,
    html: layout("New website enquiry", `${rows(items)}<p><a href="${adminLink()}">Open the dashboard</a></p>`),
    text: `${textRows(items)}\n\nDashboard: ${adminLink()}`,
    replyTo: enquiry.email,
  });

  await sendEmail({
    to: enquiry.email,
    subject: `Thanks for contacting ${siteConfig.fullName}`,
    html: layout(
      "Thanks — we've received your message",
      `<p>Hi ${escapeHtml(enquiry.name)},</p>
       <p>Thanks for getting in touch. We'll reply within one business day. If your matter is urgent — for example a visa expiring soon or a review deadline — please call ${escapeHtml(siteConfig.contact.phone)}.</p>`,
    ),
    text: `Hi ${enquiry.name},\n\nThanks for getting in touch. We'll reply within one business day. If your matter is urgent, please call ${siteConfig.contact.phone}.`,
    replyTo: serverConfig.email.notifyTo || undefined,
  });

  return delivered;
}
