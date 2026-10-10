import { availability } from "@/data/availability";
import { getActiveConsultations } from "@/data/consultations";
import { getAvailableDays } from "@/lib/server/availability";
import { expireStaleHolds } from "@/lib/server/bookings";

// GET /api/availability?service=<consultation id>
export async function GET(request: Request) {
  const serviceId = new URL(request.url).searchParams.get("service");
  const service = getActiveConsultations().find((item) => item.id === serviceId);
  if (!service) {
    return Response.json({ error: "Unknown service." }, { status: 404 });
  }

  expireStaleHolds();
  return Response.json(
    {
      timeZone: availability.timeZone,
      durationMinutes: service.durationMinutes,
      days: getAvailableDays(service.durationMinutes),
    },
    { headers: { "Cache-Control": "no-store" } },
  );
}
