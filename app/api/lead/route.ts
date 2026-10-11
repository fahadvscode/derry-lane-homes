import { NextResponse } from "next/server";
import { readFormBody, withAmpCors } from "@/lib/form-request";
import { leadSchema } from "@/lib/lead-schema";
import { SITE_URL } from "@/lib/content";
import { createAnonClient } from "@/lib/supabase";

export async function OPTIONS(request: Request) {
  return withAmpCors(request, new NextResponse(null, { status: 204 }));
}

export async function POST(request: Request) {
  const parsed = leadSchema.safeParse(await readFormBody(request));
  if (!parsed.success) {
    return withAmpCors(request, NextResponse.json({ ok: false }, { status: 400 }));
  }
  const { website, elapsed_ms, ...lead } = parsed.data;
  if (website) return withAmpCors(request, NextResponse.json({ ok: false }, { status: 400 }));
  if (elapsed_ms != null && elapsed_ms < 3000) {
    return withAmpCors(request, NextResponse.json({ ok: false }, { status: 400 }));
  }

  const supabase = createAnonClient();
  if (!supabase) return withAmpCors(request, NextResponse.json({ ok: false }, { status: 500 }));

  const path = lead.page_path.startsWith("/") ? lead.page_path : `/${lead.page_path}`;
  const source = `${SITE_URL}${path === "/" ? "/" : path}`;

  const { error } = await supabase.from("derry_lane_homes_leads").insert({
    first_name: lead.first_name,
    last_name: lead.last_name,
    email: lead.email,
    phone: lead.phone,
    home_type_interest: lead.home_type_interest ?? null,
    budget_range: lead.budget_range ?? null,
    buyer_type: lead.buyer_type ?? null,
    timeline: lead.timeline ?? null,
    is_broker: lead.is_broker,
    consent_given: true,
    consent_at: new Date().toISOString(),
    page_path: path,
    source,
    utm_source: lead.utm_source ?? null,
    utm_medium: lead.utm_medium ?? null,
    utm_campaign: lead.utm_campaign ?? null,
    utm_term: lead.utm_term ?? null,
    utm_content: lead.utm_content ?? null,
  });

  if (error) return withAmpCors(request, NextResponse.json({ ok: false }, { status: 500 }));
  return withAmpCors(
    request,
    NextResponse.json({ ok: true }),
    `${SITE_URL}/thank-you`,
  );
}
