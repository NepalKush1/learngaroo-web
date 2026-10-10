import "server-only";
import { siteConfig } from "@/lib/site-config";

// Everything secret comes from environment variables (see .env.example).
// Each integration switches itself on once its keys are present.
export const serverConfig = {
  siteUrl: siteConfig.url,

  stripe: {
    secretKey: process.env.STRIPE_SECRET_KEY ?? "",
    webhookSecret: process.env.STRIPE_WEBHOOK_SECRET ?? "",
  },

  email: {
    resendApiKey: process.env.RESEND_API_KEY ?? "",
    // e.g. "Learniiz Migration <bookings@yourdomain.com.au>" — the domain must
    // be verified in Resend.
    from: process.env.EMAIL_FROM ?? "",
    // Where new-booking and enquiry notifications are sent.
    notifyTo: process.env.NOTIFY_EMAIL ?? siteConfig.contact.email,
  },

  admin: {
    password: process.env.ADMIN_PASSWORD ?? "",
    sessionSecret: process.env.SESSION_SECRET ?? "",
  },
};

export const paymentsEnabled = () => Boolean(serverConfig.stripe.secretKey);
export const emailEnabled = () =>
  Boolean(serverConfig.email.resendApiKey && serverConfig.email.from);
export const adminEnabled = () =>
  Boolean(serverConfig.admin.password && serverConfig.admin.sessionSecret.length >= 32);
