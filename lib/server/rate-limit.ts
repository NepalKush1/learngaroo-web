import "server-only";

// Simple in-memory, per-IP rate limiter to slow down spam and abuse of the
// public form endpoints. Resets when the server restarts, which is fine for
// a single-server deployment.

const hits = new Map<string, number[]>();

export function rateLimit(key: string, limit: number, windowMs: number): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((time) => now - time < windowMs);
  if (recent.length >= limit) {
    hits.set(key, recent);
    return false;
  }
  recent.push(now);
  hits.set(key, recent);

  if (hits.size > 5000) {
    for (const [entryKey, times] of hits) {
      if (times.every((time) => now - time >= windowMs)) hits.delete(entryKey);
    }
  }
  return true;
}

export function clientIp(request: Request): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}
