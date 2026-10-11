import { NextResponse } from "next/server";
import { readFormBody, withAmpCors } from "@/lib/form-request";
import { privacyRequestSchema } from "@/lib/lead-schema";
import { SITE_URL } from "@/lib/content";
import { createAnonClient } from "@/lib/supabase";

export async function OPTIONS(request: Request) {
  return withAmpCors(request, new NextResponse(null, { status: 204 }));
}

export async function POST(request: Request) {
  const parsed = privacyRequestSchema.safeParse(await readFormBody(request));
  if (!parsed.success) {
    return withAmpCors(request, NextResponse.json({ ok: false }, { status: 400 }));
  }
  const { website, elapsed_ms, ...requestFields } = parsed.data;
  if (website) return withAmpCors(request, NextResponse.json({ ok: false }, { status: 400 }));
  if (elapsed_ms != null && elapsed_ms < 3000) {
    return withAmpCors(request, NextResponse.json({ ok: false }, { status: 400 }));
  }

  const supabase = createAnonClient();
  if (!supabase) return withAmpCors(request, NextResponse.json({ ok: false }, { status: 500 }));

  const { error } = await supabase.from("derry_lane_homes_privacy_requests").insert({
    first_name: requestFields.first_name,
    last_name: requestFields.last_name,
    email: requestFields.email,
    phone: requestFields.phone,
    is_broker: requestFields.is_broker,
    message: requestFields.message,
    page_path: requestFields.page_path,
  });

  if (error) return withAmpCors(request, NextResponse.json({ ok: false }, { status: 500 }));
  return withAmpCors(request, NextResponse.json({ ok: true }), `${SITE_URL}/thank-you`);
}
