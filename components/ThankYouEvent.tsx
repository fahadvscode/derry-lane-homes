"use client";

import { useEffect } from "react";
import { trackEvent } from "@/components/track";

export function ThankYouEvent() {
  useEffect(() => {
    trackEvent("form_submit", { form_location: "thank-you" });
    window.fbq?.("track", "Lead");
  }, []);
  return null;
}
