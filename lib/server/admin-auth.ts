import "server-only";
import { createHash, createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { adminEnabled, serverConfig } from "./config";

// Password-protected admin area. The session is a signed, expiring cookie
// (HMAC-SHA256 with SESSION_SECRET) — no database table needed.

const COOKIE = "lmv_admin";
const SESSION_HOURS = 12;

function sign(value: string): string {
  return createHmac("sha256", serverConfig.admin.sessionSecret).update(value).digest("hex");
}

function safeEqual(a: string, b: string): boolean {
  const hashA = createHash("sha256").update(a).digest();
  const hashB = createHash("sha256").update(b).digest();
  return timingSafeEqual(hashA, hashB);
}

export function passwordMatches(input: string): boolean {
  return adminEnabled() && safeEqual(input, serverConfig.admin.password);
}

export async function startAdminSession(): Promise<void> {
  const expires = Date.now() + SESSION_HOURS * 3_600_000;
  const value = `${expires}.${sign(String(expires))}`;
  (await cookies()).set(COOKIE, value, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    expires: new Date(expires),
  });
}

export async function endAdminSession(): Promise<void> {
  (await cookies()).delete(COOKIE);
}

export async function isAdmin(): Promise<boolean> {
  if (!adminEnabled()) return false;
  const value = (await cookies()).get(COOKIE)?.value;
  if (!value) return false;
  const [expires, signature] = value.split(".");
  if (!expires || !signature || Number(expires) < Date.now()) return false;
  return safeEqual(signature, sign(expires));
}
