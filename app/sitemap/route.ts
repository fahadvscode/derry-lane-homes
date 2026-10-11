import { NextResponse } from "next/server";
import { LAST_UPDATED, SITE_URL } from "@/lib/content";

export const dynamic = "force-static";

const routes: { path: string; priority: string }[] = [
  { path: "/", priority: "1.0" },
  { path: "/floor-plans", priority: "0.9" },
  { path: "/pricing", priority: "0.9" },
  { path: "/location", priority: "0.8" },
  { path: "/gallery", priority: "0.6" },
  { path: "/faq", priority: "0.9" },
  { path: "/register", priority: "0.9" },
  { path: "/blog/mississauga-pre-construction-guide", priority: "0.7" },
  { path: "/privacy", priority: "0.2" },
  { path: "/terms", priority: "0.2" },
];

function sitemapXml() {
  const urls = routes
    .map((route) => {
      const loc = route.path === "/" ? `${SITE_URL}/` : `${SITE_URL}${route.path}`;
      return `<url><loc>${loc}</loc><lastmod>${LAST_UPDATED}</lastmod><priority>${route.priority}</priority></url>`;
    })
    .join("");
  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
}

export function GET() {
  return new NextResponse(sitemapXml(), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
