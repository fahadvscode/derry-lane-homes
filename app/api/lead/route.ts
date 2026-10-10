import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/lead-schema";
import { createAnonClient } from "@/lib/supabase";

export async function POST(req: Request) {
  const parsed = leadSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ ok: false }, { status: 400 });
  const { website, elapsed_ms, ...lead } = parsed.data;
  if (website) return NextResponse.json({ ok: false }, { status: 400 });
  if (elapsed_ms < 3000) return NextResponse.json({ ok: false }, { status: 400 });

  const supabase = createAnonClient();
  if (!supabase) return NextResponse.json({ ok: false }, { status: 500 });

  const { error } = await supabase.from("derry_lane_homes_leads").insert({
    first_name: lead.first_name,
    last_name: lead.last_name,
    email: lead.email,
    phone: lead.phone,
    home_type_interest: lead.home_type_interest,
    budget_range: lead.budget_range,
    buyer_type: lead.buyer_type,
    timeline: lead.timeline,
    is_broker: lead.is_broker,
    consent_given: true,
    consent_at: new Date().toISOString(),
    page_path: lead.page_path,
    utm_source: lead.utm_source ?? null,
    utm_medium: lead.utm_medium ?? null,
    utm_campaign: lead.utm_campaign ?? null,
    utm_term: lead.utm_term ?? null,
    utm_content: lead.utm_content ?? null,
  });

  if (error) return NextResponse.json({ ok: false }, { status: 500 });
  return NextResponse.json({ ok: true });
}
