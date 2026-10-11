import { NextResponse } from "next/server";
import { SITE_URL } from "@/lib/content";

export async function readFormBody(request: Request): Promise<unknown> {
  const type = request.headers.get("content-type") ?? "";
  if (type.includes("application/json")) {
    return request.json().catch(() => null);
  }
  const text = await request.text();
  const params = new URLSearchParams(text);
  const data: Record<string, string> = {};
  params.forEach((value, key) => {
    data[key] = value;
  });
  return data;
}

function allowedOrigin(origin: string) {
  if (origin === SITE_URL) return true;
  try {
    const url = new URL(origin);
    if (url.protocol !== "https:" && url.hostname !== "localhost") return false;
    return (
      url.hostname === "localhost" ||
      url.hostname.endsWith(".cdn.ampproject.org") ||
      url.hostname.endsWith(".ampproject.org")
    );
  } catch {
    return false;
  }
}

export function withAmpCors(request: Request, response: NextResponse, redirectTo?: string) {
  const origin = request.headers.get("origin");
  const source = new URL(request.url).searchParams.get("__amp_source_origin");
  if (origin && allowedOrigin(origin)) {
    response.headers.set("Access-Control-Allow-Origin", origin);
    response.headers.set("Access-Control-Allow-Credentials", "true");
    response.headers.set("Vary", "Origin");
  }
  if (source === SITE_URL || source?.startsWith("http://localhost")) {
    response.headers.set("AMP-Access-Control-Allow-Source-Origin", source);
    response.headers.set(
      "Access-Control-Expose-Headers",
      "AMP-Access-Control-Allow-Source-Origin, AMP-Redirect-To",
    );
    if (redirectTo) response.headers.set("AMP-Redirect-To", redirectTo);
  }
  response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return response;
}
