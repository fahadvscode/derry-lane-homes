"use client";

import { useEffect } from "react";
import { trackEvent } from "@/components/track";

export function FloorPlanTracker() {
  useEffect(() => {
    trackEvent("floor_plan_view", { page: "/floor-plans" });
  }, []);
  return null;
}
