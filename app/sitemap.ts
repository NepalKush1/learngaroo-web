import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/data/services";
import { publishedVideos } from "@/data/videos";
import { occupations } from "@/data/occupations";
import { statePrograms } from "@/data/state-nomination";
import { toIsoDate, visaCategories, visaHref, visaPages } from "@/data/visas";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/services",
    "/about",
    "/contact",
    "/bookings",
    "/tools",
    "/faq",
    "/tools/points",
    "/tools/points-calculator",
    "/tools/visa-finder",
    "/tools/fee-calculator",
    "/tools/tasmania-points-calculator",
    "/tools/canberra-matrix-calculator",
    "/tools/victoria-points-calculator",
    "/tools/regional-postcode-checker",
    "/occupations",
    "/state-nomination",
    "/state-nomination/assessment",
    "/updates",
    "/terms",
    "/privacy",
    ...(publishedVideos.length > 0 ? ["/videos"] : []),
    ...services.map((service) => `/services/${service.slug}`),
    ...occupations.map((occupation) => `/occupations/${occupation.slug}`),
    ...statePrograms.map((program) => `/state-nomination/${program.slug}`),
  ];

  const visaEntries: MetadataRoute.Sitemap = [
    { url: `${siteConfig.url}/visas`, changeFrequency: "weekly", priority: 0.9 },
    ...visaCategories.map((category) => ({ url: `${siteConfig.url}/visas/${category.slug}`, changeFrequency: "weekly" as const, priority: 0.85 })),
    ...visaPages.map((page) => ({
      url: `${siteConfig.url}${visaHref(page)}`,
      lastModified: toIsoDate(page.factsAsAt),
      changeFrequency: "monthly" as const,
      priority: page.kind === "visa" ? 0.85 : 0.7,
    })),
  ];

  return [
    ...pages.map((path) => ({
      url: `${siteConfig.url}${path}`,
      changeFrequency: (path === "" || path === "/updates" || path.startsWith("/state-nomination") ? "weekly" : "monthly") as "weekly" | "monthly",
      priority:
        path === "" ? 1 : path.startsWith("/services") || path.startsWith("/occupations") || path.startsWith("/state-nomination") ? 0.8 : 0.6,
    })),
    ...visaEntries,
  ];
}
