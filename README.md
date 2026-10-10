# Learniiz Migration & Visa Services — website

Next.js 16 site with a built-in booking system: live availability in
Melbourne time, slot locking, Stripe payments, email confirmations with
calendar invites, a contact form and a password-protected admin dashboard.

## Run locally

```bash
npm install
cp .env.example .env.local   # then fill in at least ADMIN_PASSWORD + SESSION_SECRET
npm run dev
```

Open http://localhost:3000. The admin dashboard is at http://localhost:3000/admin.

Requires **Node.js 22.13 or newer** (uses the built-in `node:sqlite` database).

## Where to edit things

| What | File |
| --- | --- |
| Business name, phone, email, address, ABN, social links | `lib/site-config.ts` |
| Services shown on the site | `data/services.ts` |
| Bookable consultations and prices | `data/consultations.ts` |
| Opening hours, buffers, notice period, closed dates | `data/availability.ts` |
| Videos (YouTube links or files in `public/videos/`) | `data/videos.ts` |
| Cancellation policy values used on the Terms page | `data/legal.ts` |
| Agent profile | `data/agent.ts` |

Empty values (`""`) in `lib/site-config.ts` are hidden on the site until filled in.

## How bookings work

1. The client picks a consultation and a time. Times come from
   `/api/availability`, built in Melbourne time and shown in the client's
   local time too. Booked, held and blocked times are excluded.
2. On submit, `/api/bookings` re-checks the slot inside a database
   transaction (so two people can't take the same time) and saves it.
3. **With Stripe configured:** the slot is held for 30 minutes while the
   client pays on Stripe's hosted page. Payment is confirmed by the Stripe
   webhook and on the `/bookings/success` page; then the client and the
   practice are emailed (with a calendar invite). Abandoned payments release
   the slot.
   **Without Stripe:** the booking is saved as *requested* and both sides are
   emailed so the practice can arrange payment.
4. Everything appears in `/admin`, where bookings can be cancelled (optionally
   emailing the client) and time can be blocked out.

Contact-form enquiries are stored in the database **and** emailed, so none
are lost if email delivery fails.

## Integrations (all optional — each switches on when its keys are set)

- **Stripe** — `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`. Add a webhook to
  `https://<domain>/api/stripe/webhook` for `checkout.session.completed` and
  `checkout.session.expired`. For local testing:
  `stripe listen --forward-to localhost:3000/api/stripe/webhook`.
- **Resend (email)** — `RESEND_API_KEY`, `EMAIL_FROM` (verified domain),
  `NOTIFY_EMAIL`. Without it, emails are printed to the server log.

## Deploying

The database is a single SQLite file, so the site needs a host with a
**persistent disk** and a long-running Node server — e.g. a VPS, Render,
Railway or Fly.io. Set `DATABASE_PATH` to a path on that disk and back it up.
Serverless hosts such as Vercel don't keep files between requests, so they'd
need the storage layer (`lib/server/db.ts`) swapped for a hosted database.

```bash
npm run build && npm start
```
