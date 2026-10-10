import { z } from "zod";

const canadianPhone = /^(?:\+?1[\s.-]?)?(?:\(?[2-9]\d{2}\)?[\s.-]?)\d{3}[\s.-]?\d{4}$/;

export const homeTypeValues = [
  "back_to_back",
  "street_town",
  "rear_lane",
  "semi_detached",
  "detached",
  "not_sure",
] as const;

export const budgetValues = ["under_800k", "800k_900k", "900k_1m", "1m_plus", "not_sure"] as const;
export const buyerValues = ["end_user", "investor"] as const;
export const timelineValues = ["0_6_months", "6_12_months", "12_plus_months", "just_researching"] as const;

export const HOME_TYPE_OPTIONS = [
  { value: "back_to_back", label: "Back-to-Back Town" },
  { value: "street_town", label: "Street Town" },
  { value: "rear_lane", label: "Rear-Lane Town" },
  { value: "semi_detached", label: "Semi-Detached" },
  { value: "detached", label: "Detached" },
  { value: "not_sure", label: "Not sure yet" },
] as const;

export const BUDGET_OPTIONS = [
  { value: "under_800k", label: "Under $800,000" },
  { value: "800k_900k", label: "$800,000–$900,000" },
  { value: "900k_1m", label: "$900,000–$1 million" },
  { value: "1m_plus", label: "$1 million or more" },
  { value: "not_sure", label: "Not sure yet" },
] as const;

export const BUYER_OPTIONS = [
  { value: "end_user", label: "End user" },
  { value: "investor", label: "Investor" },
] as const;

export const TIMELINE_OPTIONS = [
  { value: "0_6_months", label: "0–6 months" },
  { value: "6_12_months", label: "6–12 months" },
  { value: "12_plus_months", label: "12+ months" },
  { value: "just_researching", label: "Just researching" },
] as const;

export const leadSchema = z.object({
  first_name: z.string().trim().min(1).max(80),
  last_name: z.string().trim().min(1).max(80),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().regex(canadianPhone),
  home_type_interest: z.enum(homeTypeValues),
  budget_range: z.enum(budgetValues),
  buyer_type: z.enum(buyerValues),
  timeline: z.enum(timelineValues),
  is_broker: z.boolean(),
  consent_given: z.literal(true),
  page_path: z.string().trim().min(1).max(200),
  website: z.string().max(0).optional(),
  elapsed_ms: z.number().min(3000),
  utm_source: z.string().max(200).nullish(),
  utm_medium: z.string().max(200).nullish(),
  utm_campaign: z.string().max(200).nullish(),
  utm_term: z.string().max(200).nullish(),
  utm_content: z.string().max(200).nullish(),
});

export type LeadInput = z.infer<typeof leadSchema>;

export const privacyRequestSchema = z.object({
  email: z.string().trim().email().max(200),
  message: z.string().trim().min(10).max(2000),
  page_path: z.string().trim().min(1).max(200),
  website: z.string().max(0).optional(),
  elapsed_ms: z.number().min(3000),
});
