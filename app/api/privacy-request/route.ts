import { NextResponse } from "next/server";
import { privacyRequestSchema } from "@/lib/lead-schema";
import { createAnonClient } from "@/lib/supabase";

export async function POST(req: Request) {
  const parsed = privacyRequestSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ ok: false }, { status: 400 });
  const { website, elapsed_ms, email, message, page_path } = parsed.data;
  if (website) return NextResponse.json({ ok: false }, { status: 400 });
  if (elapsed_ms < 3000) return NextResponse.json({ ok: false }, { status: 400 });

  const supabase = createAnonClient();
  if (!supabase) return NextResponse.json({ ok: false }, { status: 500 });

  const { error } = await supabase.from("derry_lane_homes_privacy_requests").insert({
    email,
    message,
    page_path,
  });

  if (error) return NextResponse.json({ ok: false }, { status: 500 });
  return NextResponse.json({ ok: true });
}
