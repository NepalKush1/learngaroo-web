import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { availability } from "@/data/availability";
import { formatPrice } from "@/data/consultations";
import { formatAppointment, formatInZone } from "@/lib/timezone";
import { isAdmin } from "@/lib/server/admin-auth";
import {
  listRecent,
  listUpcoming,
  parseDetails,
  type Booking,
  type BookingStatus,
} from "@/lib/server/bookings";
import { adminEnabled, emailEnabled, paymentsEnabled, serverConfig } from "@/lib/server/config";
import { listEnquiries } from "@/lib/server/enquiries";
import {
  blockTimeAction,
  cancelBookingAction,
  login,
  logout,
  markEnquiryHandledAction,
} from "./actions";

export const metadata: Metadata = {
  title: "Bookings dashboard",
  robots: { index: false, follow: false },
};

const STATUS_STYLES: Record<BookingStatus, string> = {
  confirmed: "bg-brand-mint text-brand-primary",
  requested: "bg-blue-50 text-blue-700",
  pending_payment: "bg-amber-50 text-amber-700",
  blocked: "bg-gray-100 text-gray-600",
  cancelled: "bg-red-50 text-red-700",
  expired: "bg-gray-100 text-gray-500",
};

const STATUS_LABELS: Record<BookingStatus, string> = {
  confirmed: "Paid",
  requested: "Requested — unpaid",
  pending_payment: "Awaiting payment",
  blocked: "Blocked",
  cancelled: "Cancelled",
  expired: "Payment not completed",
};

const ERRORS: Record<string, string> = {
  invalid: "Incorrect password.",
  locked: "Too many attempts. Please wait 15 minutes and try again.",
  block: "Please enter a valid date with an end time after the start time.",
};

const melbourne = (iso: string) => formatAppointment(iso, availability.timeZone);
const inputClasses =
  "w-full rounded-xl border border-gray-300 px-3 py-2 text-sm text-brand-navy focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20";

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-h-[70vh] bg-brand-surface py-14">
      <Container>{children}</Container>
    </section>
  );
}

function StatusBadge({ status }: { status: BookingStatus }) {
  return (
    <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-bold ${STATUS_STYLES[status]}`}>
      {STATUS_LABELS[status]}
    </span>
  );
}

function BookingCard({ booking }: { booking: Booking }) {
  const details = parseDetails(booking);
  const isBlock = booking.kind === "block";

  return (
    <li className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="font-heading text-lg font-bold text-brand-navy">
            {isBlock ? booking.note || "Blocked time" : `${booking.first_name} ${booking.last_name}`}
          </p>
          <p className="text-sm text-gray-600">
            {melbourne(booking.starts_at)} –{" "}
            {formatInZone(booking.ends_at, availability.timeZone, { hour: "numeric", minute: "2-digit" })}
          </p>
          {!isBlock && (
            <p className="text-sm text-gray-500">
              {booking.service_title}
              {booking.price_cents != null && ` · ${formatPrice(booking.price_cents, booking.currency ?? "AUD")}`}
              {" · "}
              <span className="font-mono">{booking.reference}</span>
            </p>
          )}
        </div>
        <StatusBadge status={booking.status} />
      </div>

      {booking.note && !isBlock && (
        <p className="mt-3 rounded-xl bg-amber-50 p-3 text-sm text-amber-800">{booking.note}</p>
      )}

      {details && (
        <details className="mt-3 text-sm">
          <summary className="cursor-pointer font-semibold text-brand-primary">Client details</summary>
          <dl className="mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-2">
            <div>
              <dt className="text-gray-500">Email</dt>
              <dd>
                {details.emails.map((email) => (
                  <a key={email} href={`mailto:${email}`} className="block text-brand-navy hover:underline">
                    {email}
                  </a>
                ))}
              </dd>
            </div>
            <div>
              <dt className="text-gray-500">Phone</dt>
              <dd>
                <a href={`tel:${details.phoneCountryCode}${details.phone.replace(/\s+/g, "")}`} className="text-brand-navy hover:underline">
                  {details.phoneCountryCode} {details.phone}
                </a>
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-gray-500">Address</dt>
              <dd className="text-brand-navy">
                {[details.addressLine1, details.addressLine2, details.city, details.state, details.postcode, details.country]
                  .filter(Boolean)
                  .join(", ")}
              </dd>
            </div>
            {booking.client_time_zone && booking.client_time_zone !== availability.timeZone && (
              <div>
                <dt className="text-gray-500">Client&apos;s local time</dt>
                <dd className="text-brand-navy">{formatAppointment(booking.starts_at, booking.client_time_zone)}</dd>
              </div>
            )}
            {details.decisionDate && (
              <div>
                <dt className="text-gray-500">Date of decision</dt>
                <dd className="text-brand-navy">{details.decisionDate}</dd>
              </div>
            )}
            {details.reviewDeadline && (
              <div>
                <dt className="text-gray-500">Review deadline</dt>
                <dd className="font-semibold text-red-700">{details.reviewDeadline}</dd>
              </div>
            )}
            <div className="sm:col-span-2">
              <dt className="text-gray-500">Enquiry</dt>
              <dd className="whitespace-pre-wrap text-brand-navy">{details.enquiryDescription}</dd>
            </div>
          </dl>
        </details>
      )}

      {booking.status !== "cancelled" && booking.status !== "expired" && (
        <details className="group mt-4 border-t border-gray-100 pt-4">
          <summary className="inline-flex cursor-pointer list-none rounded-full border border-red-200 px-4 py-1.5 text-sm font-semibold text-red-700 hover:bg-red-50 [&::-webkit-details-marker]:hidden">
            {isBlock ? "Remove block…" : "Cancel booking…"}
          </summary>
          <form action={cancelBookingAction} className="mt-3 flex flex-wrap items-center gap-3 rounded-xl bg-red-50 p-3">
            <input type="hidden" name="id" value={booking.id} />
            <span className="text-sm font-medium text-red-800">
              {isBlock ? "Remove this block?" : "Cancel this booking and free the time?"}
            </span>
            {!isBlock && (
              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input type="checkbox" name="notify" defaultChecked className="h-4 w-4 rounded border-gray-300" />
                Email the client
              </label>
            )}
            <button type="submit" className="rounded-full bg-red-700 px-4 py-1.5 text-sm font-semibold text-white hover:bg-red-800">
              {isBlock ? "Yes, remove" : "Yes, cancel"}
            </button>
            {booking.status === "confirmed" && (
              <span className="w-full text-xs text-red-800/80">Refunds are issued from your Stripe dashboard.</span>
            )}
          </form>
        </details>
      )}
    </li>
  );
}

function SetupStatus() {
  const items = [
    { label: "Online payments (Stripe)", on: paymentsEnabled(), hint: "Set STRIPE_SECRET_KEY and STRIPE_WEBHOOK_SECRET" },
    { label: "Email (Resend)", on: emailEnabled(), hint: "Set RESEND_API_KEY and EMAIL_FROM" },
    { label: "Notification inbox", on: Boolean(serverConfig.email.notifyTo), hint: "Set NOTIFY_EMAIL" },
  ];
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item.label}
          title={item.on ? "Connected" : item.hint}
          className={`rounded-full px-3 py-1.5 text-xs font-bold ${item.on ? "bg-brand-mint text-brand-primary" : "bg-amber-50 text-amber-700"}`}
        >
          {item.on ? "✓" : "!"} {item.label}
          {!item.on && <span className="font-medium"> — {item.hint}</span>}
        </li>
      ))}
    </ul>
  );
}

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  if (!adminEnabled()) {
    return (
      <Shell>
        <div className="mx-auto max-w-lg rounded-3xl bg-white p-8 shadow-sm">
          <h1 className="font-heading text-2xl font-extrabold text-brand-navy">Admin is not set up yet</h1>
          <p className="mt-3 text-gray-600">
            Set <code className="rounded bg-gray-100 px-1">ADMIN_PASSWORD</code> and a random{" "}
            <code className="rounded bg-gray-100 px-1">SESSION_SECRET</code> (at least 32 characters) in your
            environment, then restart the server. See <code className="rounded bg-gray-100 px-1">.env.example</code>.
          </p>
        </div>
      </Shell>
    );
  }

  if (!(await isAdmin())) {
    return (
      <Shell>
        <form action={login} className="mx-auto max-w-sm rounded-3xl bg-white p-8 shadow-sm">
          <h1 className="font-heading text-2xl font-extrabold text-brand-navy">Admin sign in</h1>
          <p className="mt-1 text-sm text-gray-500">Bookings and enquiries dashboard</p>
          <label htmlFor="password" className="mt-6 block text-sm font-semibold text-brand-navy">
            Password
          </label>
          <input id="password" name="password" type="password" required autoComplete="current-password" className={`mt-1.5 ${inputClasses}`} />
          {error && ERRORS[error] && (
            <p className="mt-3 text-sm font-medium text-red-700" role="alert">
              {ERRORS[error]}
            </p>
          )}
          <button type="submit" className="mt-6 w-full rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-primary-dark">
            Sign in
          </button>
        </form>
      </Shell>
    );
  }

  const upcoming = listUpcoming();
  const recent = listRecent();
  const enquiries = listEnquiries();
  const newEnquiries = enquiries.filter((enquiry) => enquiry.status === "new");

  return (
    <Shell>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-3xl font-extrabold text-brand-navy">Bookings dashboard</h1>
          <p className="mt-1 text-sm text-gray-500">All times are Melbourne time.</p>
        </div>
        <form action={logout}>
          <button type="submit" className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-brand-navy hover:bg-gray-50">
            Sign out
          </button>
        </form>
      </div>

      <div className="mt-5">
        <SetupStatus />
      </div>

      {error && ERRORS[error] && (
        <p className="mt-5 rounded-xl bg-red-50 p-4 text-sm font-medium text-red-700" role="alert">
          {ERRORS[error]}
        </p>
      )}

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <h2 className="font-heading text-xl font-bold text-brand-navy">
            Upcoming <span className="text-gray-400">({upcoming.length})</span>
          </h2>
          {upcoming.length === 0 ? (
            <p className="mt-4 rounded-2xl border border-dashed border-gray-300 bg-white p-6 text-sm text-gray-500">
              No upcoming bookings yet.
            </p>
          ) : (
            <ul className="mt-4 space-y-4">
              {upcoming.map((booking) => (
                <BookingCard key={booking.id} booking={booking} />
              ))}
            </ul>
          )}

          {recent.length > 0 && (
            <>
              <h2 className="font-heading mt-12 text-xl font-bold text-brand-navy">Past &amp; cancelled</h2>
              <ul className="mt-4 divide-y divide-gray-100 rounded-2xl border border-gray-100 bg-white text-sm">
                {recent.map((booking) => (
                  <li key={booking.id} className="flex flex-wrap items-center justify-between gap-3 p-4">
                    <span>
                      <span className="font-semibold text-brand-navy">
                        {booking.first_name} {booking.last_name}
                      </span>{" "}
                      <span className="text-gray-500">· {booking.service_title} · {melbourne(booking.starts_at)}</span>
                    </span>
                    <StatusBadge status={booking.status} />
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        <div className="space-y-10">
          <form action={blockTimeAction} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
            <h2 className="font-heading text-lg font-bold text-brand-navy">Block out time</h2>
            <p className="mt-1 text-sm text-gray-500">Leave, meetings or a public holiday — clients can&apos;t book these times.</p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <label className="col-span-2 text-sm font-semibold text-brand-navy">
                Date
                <input name="date" type="date" required className={`mt-1 ${inputClasses}`} />
              </label>
              <label className="text-sm font-semibold text-brand-navy">
                From
                <input name="from" type="time" required defaultValue="09:00" className={`mt-1 ${inputClasses}`} />
              </label>
              <label className="text-sm font-semibold text-brand-navy">
                To
                <input name="to" type="time" required defaultValue="17:00" className={`mt-1 ${inputClasses}`} />
              </label>
              <label className="col-span-2 text-sm font-semibold text-brand-navy">
                Note (optional)
                <input name="note" type="text" maxLength={200} placeholder="e.g. Annual leave" className={`mt-1 ${inputClasses}`} />
              </label>
            </div>
            <button type="submit" className="mt-4 rounded-full bg-brand-navy px-4 py-2 text-sm font-semibold text-white hover:bg-brand-navy-light">
              Block time
            </button>
          </form>

          <div>
            <h2 className="font-heading text-lg font-bold text-brand-navy">
              Enquiries <span className="text-gray-400">({newEnquiries.length} new)</span>
            </h2>
            {enquiries.length === 0 ? (
              <p className="mt-4 rounded-2xl border border-dashed border-gray-300 bg-white p-6 text-sm text-gray-500">
                No enquiries yet.
              </p>
            ) : (
              <ul className="mt-4 space-y-3">
                {enquiries.map((enquiry) => (
                  <li
                    key={enquiry.id}
                    className={`rounded-2xl border bg-white p-4 text-sm ${enquiry.status === "new" ? "border-brand-primary/30" : "border-gray-100 opacity-70"}`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-bold text-brand-navy">{enquiry.name}</p>
                        <p className="text-xs text-gray-500">
                          {melbourne(enquiry.created_at)}
                          {enquiry.service && ` · ${enquiry.service}`}
                        </p>
                      </div>
                      {enquiry.status === "new" && (
                        <form action={markEnquiryHandledAction}>
                          <input type="hidden" name="id" value={enquiry.id} />
                          <button type="submit" className="rounded-full bg-brand-mint px-3 py-1 text-xs font-bold text-brand-primary hover:bg-brand-primary hover:text-white">
                            Mark handled
                          </button>
                        </form>
                      )}
                    </div>
                    <p className="mt-2 whitespace-pre-wrap text-gray-700">{enquiry.message}</p>
                    <p className="mt-2 text-xs">
                      <a href={`mailto:${enquiry.email}`} className="font-semibold text-brand-primary hover:underline">
                        {enquiry.email}
                      </a>
                      {enquiry.phone && <span className="text-gray-500"> · {enquiry.phone}</span>}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </Shell>
  );
}
