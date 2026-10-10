import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/data/services";
import { publishedVideos } from "@/data/videos";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/services",
    "/about",
    "/contact",
    "/bookings",
    "/terms",
    "/privacy",
    ...(publishedVideos.length > 0 ? ["/videos"] : []),
    ...services.map((service) => `/services/${service.slug}`),
  ];

  return pages.map((path) => ({
    url: `${siteConfig.url}${path}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/services") ? 0.8 : 0.6,
  }));
}
