import { z } from "zod";

// Shared by the booking form (client-side validation) and the bookings API
// (server-side validation) so both always agree on what's required.
export const clientDetailsSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(200),
  lastName: z.string().min(1, "Last name is required").max(200),
  phoneCountryCode: z.string().min(1).max(8),
  phone: z
    .string()
    .min(6, "Enter a valid phone number")
    .max(20, "Enter a valid phone number")
    .regex(/^[\d\s()+-]+$/, "Enter a valid phone number"),
  emails: z
    .array(z.string().email("Enter a valid email address"))
    .min(1, "At least one email address is required")
    .max(5, "Please add no more than 5 email addresses"),
  addressLine1: z.string().min(1, "Address is required").max(200),
  addressLine2: z.string().max(200).optional(),
  city: z.string().min(1, "City is required").max(200),
  state: z.string().min(1, "State is required").max(200),
  postcode: z.string().min(1, "Postcode is required").max(200),
  country: z.string().min(1, "Country is required").max(200),
  hearAboutUs: z.string().max(200).optional(),
  enquiryDescription: z
    .string()
    .min(10, "Please provide a few details about your situation")
    .max(4000, "Please keep this under 4,000 characters"),
  decisionDate: z.string().max(20).optional(),
  reviewDeadline: z.string().max(20).optional(),
  agreeTerms: z.literal(true, {
    error: "You must agree to the Consultation Terms and Conditions",
  }),
});

export type ClientDetails = z.infer<typeof clientDetailsSchema>;

export const bookingRequestSchema = z.object({
  serviceId: z.string().min(1),
  startsAt: z.iso.datetime(),
  clientTimeZone: z.string().max(64).optional(),
  details: clientDetailsSchema,
  // Honeypot — real visitors never fill this hidden field in.
  website: z.string().max(0).optional(),
});

export type BookingRequest = z.infer<typeof bookingRequestSchema>;
