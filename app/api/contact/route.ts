import { z } from "zod";
import { saveEnquiry } from "@/lib/server/enquiries";
import { notifyEnquiry } from "@/lib/server/notifications";
import { clientIp, rateLimit } from "@/lib/server/rate-limit";

const enquirySchema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().max(40).optional(),
  service: z.string().trim().max(200).optional(),
  message: z.string().trim().min(5).max(5000),
  consent: z.literal(true),
  website: z.string().max(0).optional(), // honeypot
});

// POST /api/contact — stores the enquiry (so nothing is ever lost) and
// emails the practice plus an acknowledgement to the sender.
export async function POST(request: Request) {
  if (!rateLimit(`contact:${clientIp(request)}`, 5, 10 * 60_000)) {
    return Response.json(
      { error: "Too many messages. Please wait a few minutes and try again." },
      { status: 429 },
    );
  }

  const parsed = enquirySchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return Response.json({ error: "Please check the form and try again." }, { status: 400 });
  }

  const { website, name, email, phone, service, message } = parsed.data;
  if (website) return Response.json({ ok: true }); // quietly drop bots

  const enquiry = { name, email, phone, service, message };
  saveEnquiry(enquiry);
  await notifyEnquiry(enquiry);
  return Response.json({ ok: true });
}
