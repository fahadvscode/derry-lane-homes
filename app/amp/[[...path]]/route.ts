import { NextResponse } from "next/server";
import { renderAmpDocument } from "@/lib/amp-document";

export async function GET(_request: Request, context: { params: Promise<{ path?: string[] }> }) {
  const { path } = await context.params;
  const pathname = path?.length ? `/${path.join("/")}` : "/";
  const html = renderAmpDocument(pathname);
  if (!html) return new NextResponse("Not found", { status: 404, headers: { "Content-Type": "text/plain" } });
  return new NextResponse(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=300",
    },
  });
}
