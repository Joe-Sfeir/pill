import type { MetadataRoute } from "next";
import { studio } from "@/config/studio";
import { classes, instructors } from "@/content/data";
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/method",
    "/classes",
    "/schedule",
    "/instructors",
    "/memberships",
    "/first-session",
    "/book",
    "/studio",
    "/faq",
    "/contact",
    "/privacy-policy",
    "/terms-of-service",
    "/cookie-policy",
    "/booking-policy",
    "/cancellation-policy",
    "/health-and-safety",
    "/accessibility",
    ...classes.map((c) => `/classes/${c.slug}`),
    ...instructors.map((i) => `/instructors/${i.slug}`),
  ];
  return routes.map((route) => ({
    url: `${studio.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/schedule" ? "weekly" : "monthly",
  }));
}
