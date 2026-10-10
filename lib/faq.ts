import { PASSAGES } from "@/lib/content";

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
  href?: string;
  anchor?: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "what-is-derry-lane-towns",
    question: "What is Derry Lane Towns?",
    answer: PASSAGES.what,
    href: "/",
    anchor: "project overview",
  },
  {
    id: "who-is-building-derry-lane-towns",
    question: "Who is building Derry Lane Towns?",
    answer:
      "Derry Lane Towns is being built by Ballymore Homes, an Ontario home builder founded in 1995 and based in Richmond Hill. The project is registered with the City of Mississauga under the name Ballymore (Uptown Meadowvale) Corp. Ballymore has built single-family homes, townhouses, and commercial properties across the GTA, including Richmond Hill, Brampton, and Innisfil.",
  },
  {
    id: "where-is-derry-lane-towns",
    question: "Where exactly is Derry Lane Towns located?",
    answer: PASSAGES.where,
    href: "/location",
    anchor: "Meadowvale Village location",
  },
  {
    id: "home-types",
    question: "What home types and sizes are available at Derry Lane Towns?",
    answer: PASSAGES.types,
    href: "/floor-plans",
    anchor: "Derry Lane Towns floor plans",
  },
  {
    id: "prices",
    question: "How much do homes at Derry Lane Towns cost?",
    answer: PASSAGES.price,
    href: "/pricing",
    anchor: "pricing and deposit structure",
  },
  {
    id: "deposit",
    question: "What is the deposit structure for Derry Lane Towns?",
    answer: PASSAGES.deposit,
    href: "/pricing",
    anchor: "pricing and deposit structure",
  },
  {
    id: "launch",
    question: "When is Derry Lane Towns launching, and what is the occupancy date?",
    answer:
      "Derry Lane Towns is currently in pre-launch, listed as \"Coming Soon\" on the builder's own site as of October 2026. A City of Mississauga rezoning application for the site (OZ/OPA 24-2 W11) remains under review. One unofficial listing estimates occupancy around 2028, though that date has not been confirmed by Ballymore Homes — this page uses the builder's own \"Coming Soon\" status as the source of truth.",
  },
  {
    id: "incentives",
    question: "Are there incentives for registering early at Derry Lane Towns?",
    answer:
      "Specific incentive details for Derry Lane Towns have not been published by Ballymore Homes. Pre-construction builders commonly offer early-registrant perks such as preferred unit selection, extended deposit structures, or décor credits at VIP launch; any stated incentive should be confirmed directly against the builder's official release before being relied upon.",
  },
  {
    id: "schools",
    question: "What schools serve the Derry Lane Towns area?",
    answer: PASSAGES.schools,
    href: "/location",
    anchor: "Meadowvale Village location",
  },
  {
    id: "vip",
    question: "How do I get VIP access to Derry Lane Towns?",
    answer: PASSAGES.vip,
    href: "/register",
    anchor: "Register for VIP Access",
  },
  {
    id: "register-cost",
    question: "Is there a cost to register for Derry Lane Towns?",
    answer: PASSAGES.registerCost,
    href: "/register",
    anchor: "Register for VIP Access",
  },
  {
    id: "assignment",
    question: "What is the assignment and rental policy for Derry Lane Towns?",
    answer:
      "Ballymore Homes has not published an assignment or rental policy for Derry Lane Towns. Pre-construction freehold and condo townhome agreements in Ontario typically set builder-specific rules and fees for assigning a contract before closing; buyers should request and review this clause directly in the Agreement of Purchase and Sale.",
  },
  {
    id: "compare",
    question: "How does Derry Lane Towns compare to other Mississauga pre-construction communities?",
    answer: PASSAGES.compare,
    href: "/location",
    anchor: "Meadowvale Village location",
  },
  {
    id: "transit",
    question: "What transit and highway access does Derry Lane Towns have?",
    answer: PASSAGES.transit,
    href: "/location",
    anchor: "Meadowvale Village location",
  },
  {
    id: "meadowvale",
    question: "What is Meadowvale Village, and what is it like to live there?",
    answer: PASSAGES.meadowvale,
    href: "/location",
    anchor: "Meadowvale Village location",
  },
  {
    id: "investment",
    question: "Is Derry Lane Towns a good investment?",
    answer: PASSAGES.investment,
  },
  {
    id: "reviews",
    question: "Are there reviews of Derry Lane Towns?",
    answer:
      "Derry Lane Towns has not launched for sale yet, so there are no owner or resident reviews available as of October 2026. Buyer feedback typically appears after a project reaches occupancy; in the meantime, this page tracks verified details on pricing, floor plans, and location as the builder releases them.",
  },
];
