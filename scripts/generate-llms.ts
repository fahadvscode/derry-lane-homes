import { writeFileSync } from "node:fs";
import { FAQ_ITEMS } from "../lib/faq";
import {
  BLOG,
  CONFIRMED,
  DEPOSIT_NOTE,
  DEPOSIT_ROWS,
  FLOOR_PLAN_NOTE,
  HOME_TYPES,
  INDEPENDENCE_DISCLAIMER,
  LAST_UPDATED,
  LOCATION_LEAD,
  OVERVIEW,
  PASSAGES,
  PLANNING,
  PRICE_ROWS,
  PROJECT,
  QUICK_FACTS,
  RETAIL_NOTE,
  SCHOOLS_NOTE,
  SITE_URL,
  SPEC_DISCLAIMER,
  TBA,
  TRANSIT,
  WHY_REGISTER,
} from "../lib/content";

const llms = `# Derry Lane Towns
> Derry Lane Towns is a pre-construction townhome community by Ballymore Homes at 376 & 390 Derry
> Road West, Mississauga, Ontario. Status: Coming Soon / Registration Open.

## Key Facts
- Builder: Ballymore Homes (Ballymore (Uptown Meadowvale) Corp.)
- Location: 376 & 390 Derry Road West, Mississauga, ON L5W 1N6 — Meadowvale Village
- Home types: Back-to-back, street, and rear-lane townhomes; 2 semi-detached; 2 detached
- Total homes: 120 townhomes + 4 single-family homes
- Sizes: 2-4 bedrooms, up to 3 bathrooms, up to ~2,000+ sq ft
- Starting price: High $700,000s CAD (unofficial, as of October 2026)
- Deposit: To be announced
- Occupancy: To be announced
- Status: Coming Soon — Registration Open; City of Mississauga rezoning application OZ/OPA 24-2 W11 under review
- Last updated: ${LAST_UPDATED}

## Pages
- [Overview](${SITE_URL}/): Project summary, quick facts, overview
- [Floor Plans](${SITE_URL}/floor-plans): Home-type collection cards
- [Pricing](${SITE_URL}/pricing): Price range and deposit structure
- [Location](${SITE_URL}/location): Transit, schools, retail, comparison
- [FAQ](${SITE_URL}/faq): 17 buyer questions answered

## Common Questions
Q: What is Derry Lane Towns?
A: ${PASSAGES.what}
Q: How much do homes at Derry Lane Towns cost?
A: ${PASSAGES.price}
Q: Where is Derry Lane Towns located?
A: ${PASSAGES.where}
Q: What home types are available at Derry Lane Towns?
A: ${PASSAGES.types}
Q: When is Derry Lane Towns launching?
A: ${PASSAGES.launch}
Q: What is the deposit structure for Derry Lane Towns?
A: ${PASSAGES.deposit}
Q: What schools serve Derry Lane Towns?
A: ${PASSAGES.schools}
Q: How do I get VIP access to Derry Lane Towns?
A: ${PASSAGES.vip}
Q: Is Derry Lane Towns a good investment?
A: ${PASSAGES.investment}
Q: How does Derry Lane Towns compare to Applewood Towns?
A: ${PASSAGES.compare}

## Source
This is an independent information resource for Derry Lane Towns. It is not affiliated with
Ballymore Homes. Details are subject to change — see derrylanehomes.com for the current version.
`;

const blocks = [
  `# Derry Lane Towns — full site text`,
  `Last updated: ${LAST_UPDATED}`,
  INDEPENDENCE_DISCLAIMER,
  SPEC_DISCLAIMER,
  `## Overview`,
  PASSAGES.what,
  ...OVERVIEW,
  ...PLANNING,
  `Confirmed:`,
  ...CONFIRMED,
  `To be announced:`,
  ...TBA,
  WHY_REGISTER,
  `## Quick facts`,
  ...QUICK_FACTS.map((row) => `${row.field}: ${row.detail}`),
  `## Floor plans`,
  PASSAGES.types,
  ...HOME_TYPES.map((plan) => `${plan.name}. Beds ${plan.beds}. Baths ${plan.baths}. Size ${plan.size}. ${plan.body}`),
  FLOOR_PLAN_NOTE,
  `## Pricing`,
  PASSAGES.price,
  ...PRICE_ROWS.map((row) => `${row.field}: ${row.detail}`),
  PASSAGES.deposit,
  DEPOSIT_NOTE,
  ...DEPOSIT_ROWS.map((row) => `${row.milestone}: ${row.amount}, due ${row.due}`),
  PASSAGES.occupancy,
  `## Location`,
  LOCATION_LEAD,
  PASSAGES.where,
  PASSAGES.transit,
  ...TRANSIT.map((row) => `${row.route}: ${row.time}`),
  SCHOOLS_NOTE,
  RETAIL_NOTE,
  PASSAGES.meadowvale,
  PASSAGES.compare,
  `## FAQ`,
  ...FAQ_ITEMS.flatMap((item) => [`### ${item.question}`, item.answer]),
  `## Mississauga pre-construction guide`,
  ...BLOG.intro,
  ...BLOG.meadowvale,
  ...BLOG.styles,
  ...BLOG.deposits,
  PASSAGES.best,
  ...BLOG.comparable,
  ...BLOG.steps,
  `Project: ${PROJECT.name}. Builder: ${PROJECT.builder}. Address: ${PROJECT.address}.`,
];

writeFileSync("public/llms.txt", llms);
writeFileSync("public/llms-full.txt", `${blocks.join("\n\n")}\n`);
console.log("Wrote public/llms.txt and public/llms-full.txt");
