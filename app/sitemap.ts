import type { MetadataRoute } from "next";
import { LAST_UPDATED, SITE_URL } from "@/lib/content";

const routes: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/floor-plans", priority: 0.9 },
  { path: "/pricing", priority: 0.9 },
  { path: "/location", priority: 0.8 },
  { path: "/gallery", priority: 0.6 },
  { path: "/faq", priority: 0.9 },
  { path: "/register", priority: 0.9 },
  { path: "/blog/mississauga-pre-construction-guide", priority: 0.7 },
  { path: "/privacy", priority: 0.2 },
  { path: "/terms", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: route.path === "/" ? `${SITE_URL}/` : `${SITE_URL}${route.path}`,
    lastModified: LAST_UPDATED,
    priority: route.priority,
  }));
}
