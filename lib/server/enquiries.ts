import "server-only";
import { randomUUID } from "node:crypto";
import { db } from "./db";

export interface Enquiry {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  service: string | null;
  message: string;
  status: "new" | "handled";
  created_at: string;
}

export function saveEnquiry(input: {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}): Enquiry {
  const enquiry: Enquiry = {
    id: randomUUID(),
    name: input.name,
    email: input.email,
    phone: input.phone || null,
    service: input.service || null,
    message: input.message,
    status: "new",
    created_at: new Date().toISOString(),
  };
  db()
    .prepare(
      `INSERT INTO enquiries (id, name, email, phone, service, message, status, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    )
    .run(
      enquiry.id, enquiry.name, enquiry.email, enquiry.phone, enquiry.service,
      enquiry.message, enquiry.status, enquiry.created_at,
    );
  return enquiry;
}

export function listEnquiries(limit = 50): Enquiry[] {
  return db()
    .prepare("SELECT * FROM enquiries ORDER BY created_at DESC LIMIT ?")
    .all(limit) as unknown as Enquiry[];
}

export function markEnquiryHandled(id: string): void {
  db().prepare("UPDATE enquiries SET status = 'handled' WHERE id = ?").run(id);
}
