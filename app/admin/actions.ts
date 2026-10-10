"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { availability } from "@/data/availability";
import { zonedTimeToUtc } from "@/lib/timezone";
import {
  endAdminSession,
  isAdmin,
  passwordMatches,
  startAdminSession,
} from "@/lib/server/admin-auth";
import { cancelBooking, createBlock } from "@/lib/server/bookings";
import { markEnquiryHandled } from "@/lib/server/enquiries";
import { notifyBookingCancelled } from "@/lib/server/notifications";
import { rateLimit } from "@/lib/server/rate-limit";

async function requireAdmin() {
  if (!(await isAdmin())) redirect("/admin");
}

export async function login(formData: FormData) {
  const ip = (await headers()).get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local";
  if (!rateLimit(`admin-login:${ip}`, 8, 15 * 60_000)) redirect("/admin?error=locked");

  if (!passwordMatches(String(formData.get("password") ?? ""))) {
    redirect("/admin?error=invalid");
  }
  await startAdminSession();
  redirect("/admin");
}

export async function logout() {
  await endAdminSession();
  redirect("/admin");
}

export async function cancelBookingAction(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("id") ?? "");
  const notify = formData.get("notify") === "on";
  const booking = cancelBooking(id);
  if (booking && notify) await notifyBookingCancelled(booking);
  revalidatePath("/admin");
}

export async function blockTimeAction(formData: FormData) {
  await requireAdmin();
  const date = String(formData.get("date") ?? "");
  const from = String(formData.get("from") ?? "");
  const to = String(formData.get("to") ?? "");
  const note = String(formData.get("note") ?? "").slice(0, 200);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !/^\d{2}:\d{2}$/.test(from) || !/^\d{2}:\d{2}$/.test(to)) {
    redirect("/admin?error=block");
  }

  const startsAt = zonedTimeToUtc(date, from, availability.timeZone);
  const endsAt = zonedTimeToUtc(date, to, availability.timeZone);
  if (endsAt <= startsAt) redirect("/admin?error=block");

  createBlock({ startsAt: startsAt.toISOString(), endsAt: endsAt.toISOString(), note: note || undefined });
  revalidatePath("/admin");
}

export async function markEnquiryHandledAction(formData: FormData) {
  await requireAdmin();
  markEnquiryHandled(String(formData.get("id") ?? ""));
  revalidatePath("/admin");
}
