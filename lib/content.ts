/**
 * Project facts for Derry Lane Towns.
 * Bump LAST_UPDATED whenever any project fact in this file changes.
 * The footer date, sitemap lastmod, JSON-LD dateModified, and llms.txt all read this constant.
 */

export const LAST_UPDATED = "2026-10-10";
export const LAST_UPDATED_DISPLAY = "October 10, 2026";

export const SITE_URL = "https://derrylanehomes.com";
export const SITE_NAME = "Derry Lane Homes";
export const PROJECT_NAME = "Derry Lane Towns";
export const BUILDER_NAME = "Ballymore Homes";

/** Google Maps place coordinates for 376 Derry Rd W, Mississauga, ON L5W 1N6. */
export const GEO = {
  latitude: 43.6379601,
  longitude: -79.7147946,
} as const;

export const HERO_IMAGE = "/images/derry-lane-towns-streetscape.jpg";
export const HERO_ALT =
  "Illustrative streetscape of Derry Lane Towns townhomes along a tree-lined road at Derry Road West in Mississauga's Meadowvale Village";

export const INDEPENDENCE_DISCLAIMER =
  "This is an independent information and registration website for Derry Lane Towns. It is not the official website of Ballymore Homes and is not affiliated with or endorsed by the builder. All renderings, pricing, sizes, and specifications are for illustration only and are subject to change without notice. E.&O.E.";

export const SPEC_DISCLAIMER =
  "Prices, sizes, specifications, and availability are subject to change without notice. E.&O.E. Information current as of October 2026.";

export const CASL_CONSENT =
  "I consent to receive electronic communications about Derry Lane Towns and similar pre-construction opportunities. I understand I can withdraw consent at any time using the unsubscribe link in any message.";

export const PROJECT = {
  name: "Derry Lane Towns",
  builderShortName: "Derry Lane",
  builder: "Ballymore Homes",
  registrant: "Ballymore (Uptown Meadowvale) Corp.",
  founded: "1995",
  builderBase: "Richmond Hill, Ontario",
  address: "376 & 390 Derry Road West, Mississauga, ON L5W 1N6",
  streetAddress: "376 & 390 Derry Road West",
  locality: "Mississauga",
  region: "ON",
  postalCode: "L5W 1N6",
  country: "CA",
  intersection: "Derry Road West & Hurontario Street",
  intersectionDetail: "south side of Derry Road West, west of Hurontario Street",
  municipality: "City of Mississauga, Regional Municipality of Peel, Ontario",
  neighbourhood: "Meadowvale Village",
  status: "Coming Soon — Registration Open",
  townhomes: 120,
  semis: 2,
  detached: 2,
  residentialUnits: 124,
  bedrooms: "2 to 4 bedrooms",
  bathrooms: "up to 3 bathrooms",
  size: "up to approximately 2,000+ sq. ft.",
  startingPrice: "High $700,000s CAD",
  application: "OZ/OPA 24-2 W11 & 21T-M 24-1 W11",
  applicationStatus: "Under review",
  planner: "Emma Bunting, City of Mississauga",
  plannerEmail: "emma.bunting@mississauga.ca",
  ward: "Ward 11 — Councillor Brad Butt",
} as const;

export const QUICK_FACTS: { field: string; detail: string }[] = [
  { field: "Builder", detail: "Ballymore Homes (Ballymore (Uptown Meadowvale) Corp.)" },
  {
    field: "Type",
    detail: "Townhomes — back-to-back, street, rear-lane — plus 2 semi-detached and 2 detached homes",
  },
  { field: "Address", detail: "376 & 390 Derry Road West, Mississauga, ON L5W 1N6" },
  { field: "City", detail: "Mississauga, Peel Region, Ontario" },
  { field: "Total Homes", detail: "120 townhomes + 4 single-family homes" },
  { field: "Sizes", detail: "2-4 bedrooms, up to 3 bathrooms, up to ~2,000+ sq. ft." },
  { field: "Starting Price", detail: "High $700,000s CAD (unofficial — not yet published by the builder)" },
  { field: "Deposit", detail: "To be announced" },
  { field: "Estimated Occupancy", detail: "To be announced" },
  { field: "Status", detail: "Coming Soon — Registration Open" },
];

export const HOME_TYPES = [
  {
    name: "Rear-Lane Towns",
    beds: "2–4",
    baths: "up to 3",
    size: "up to ~2,000+ sq. ft.",
    image: "/images/derry-lane-rear-lane.jpg",
    alt: "Illustrative rear-lane townhomes at Derry Lane Towns, with garages on a service lane behind the homes",
    body: "Rear-lane townhomes place the garage and driveway on a service lane behind the home, keeping the street-facing frontage clean and pedestrian-friendly. Based on the City of Mississauga's development application for 376 & 390 Derry Road West.",
  },
  {
    name: "Street Towns",
    beds: "2–4",
    baths: "up to 3",
    size: "up to ~2,000+ sq. ft.",
    image: "/images/derry-lane-street-towns.jpg",
    alt: "Illustrative street-facing townhomes at Derry Lane Towns in Meadowvale Village",
    body: "Traditional street-facing townhomes with direct frontage onto the internal community streets, part of the 120-home collection planned for the site.",
  },
  {
    name: "Back-to-Back Towns",
    beds: "2–4",
    baths: "up to 3",
    size: "up to ~2,000+ sq. ft.",
    image: "/images/derry-lane-back-to-back.jpg",
    alt: "Illustrative back-to-back townhomes at Derry Lane Towns, sharing a common rear wall",
    body: "A more compact, efficiently laid-out townhome style sharing a common rear wall with a neighbouring unit — a configuration included in the original concept plan for this site.",
  },
] as const;

export const PRICE_ROWS: { field: string; detail: string }[] = [
  { field: "Starting price", detail: "High $700,000s CAD" },
  {
    field: "Source",
    detail: "Unofficial agent listing, as of October 2026 — not yet confirmed by Ballymore Homes",
  },
  { field: "Price basis", detail: "Townhome collection; detached and semi-detached pricing not yet available" },
];

export const DEPOSIT_ROWS: { milestone: string; amount: string; due: string }[] = [
  { milestone: "On signing", amount: "TBA", due: "TBA" },
  { milestone: "30 days", amount: "TBA", due: "TBA" },
  { milestone: "90 days", amount: "TBA", due: "TBA" },
  { milestone: "180 days", amount: "TBA", due: "TBA" },
  { milestone: "Occupancy", amount: "TBA", due: "TBA" },
];

export const INCENTIVES = [
  "Décor or design credits",
  "Capped development charges",
  "Assignment rights and fees",
  "Extended or structured deposit schedules",
] as const;

export const TRANSIT: { route: string; time: string }[] = [
  { route: "Highway 401", time: "~7 minutes" },
  { route: "Highway 407", time: "~10 minutes" },
  { route: "Highway 410", time: "~10 minutes" },
  { route: "Meadowvale GO Station (Milton line to Union Station)", time: "~10–13 minutes" },
  { route: "Toronto Pearson International Airport", time: "~15–20 minutes" },
  { route: "Local transit", time: "~1 minute (per Ballymore Homes)" },
  { route: "Downtown Toronto", time: "~35 minutes (per Ballymore Homes)" },
];

export const SCHOOLS = [
  "Le Flambeau Elementary School (~4 min)",
  "Meadowvale Village Public School",
  "St. Veronica Elementary School",
  "David Leeder Middle School",
] as const;

export const NAV_LINKS = [
  { href: "/floor-plans", label: "Floor Plans" },
  { href: "/pricing", label: "Pricing" },
  { href: "/location", label: "Location" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog/mississauga-pre-construction-guide", label: "Guide" },
] as const;

export const SOURCES = [
  {
    label: "Ballymore Homes — Derry Lane project page (Coming Soon)",
    href: "https://ballymorehomes.com/upcoming-communities/derry-lane/",
  },
  {
    label: "City of Mississauga application OZ/OPA 24-2 W11",
    href: "https://www.mississauga.ca/?p=112417",
  },
] as const;

export const GALLERY = [
  {
    src: HERO_IMAGE,
    alt: HERO_ALT,
    caption:
      "Illustrative streetscape for Derry Lane Towns at Derry Road West and Hurontario Street. This is not an official Ballymore Homes rendering.",
    width: 1600,
    height: 900,
  },
  {
    src: "/images/derry-lane-rear-lane.jpg",
    alt: "Illustrative rear service lane with garages behind Derry Lane Towns townhomes",
    caption:
      "Rear-lane layout, shown as an illustration: garages and driveways sit on a service lane so the street frontage stays pedestrian-focused.",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/meadowvale-heritage.jpg",
    alt: "Illustrative heritage street in Meadowvale Village, Mississauga, near Derry Lane Towns",
    caption:
      "Site context for Meadowvale Village, Ontario's first Heritage Conservation District, designated in 1980. Not a photograph of a specific builder model.",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/meadowvale-conservation.jpg",
    alt: "Illustrative view of a conservation river landscape near Meadowvale Village and Derry Lane Towns",
    caption:
      "The Meadowvale Conservation Area, about a 10-minute drive, covers roughly 150 acres along the Credit River. Illustration only.",
    width: 1200,
    height: 800,
  },
] as const;

export const ANSWER_FIRST =
  "Derry Lane Towns is a pre-construction townhome community by Ballymore Homes at 376 and 390 Derry Road West in Mississauga's Meadowvale Village. The plan includes 120 three-storey back-to-back, street, and rear-lane townhomes plus four single-family homes, with 2 to 4 bedrooms and pricing reported from the high $700,000s CAD. The project is currently in pre-launch registration.";

export const PASSAGES = {
  what: "Derry Lane Towns is a pre-construction townhome community by Ballymore Homes at 376 and 390 Derry Road West in Mississauga's Meadowvale Village. Ballymore Homes is an Ontario builder founded in 1995 and based in Richmond Hill. The plan includes 120 three-storey townhomes — back-to-back, street, and rear-lane styles — plus two semi-detached and two detached homes.",
  price:
    "As of October 2026, early agent listings price Derry Lane Towns townhomes starting from the high $700,000s CAD. Ballymore Homes has not yet published official pricing on its own project page, which remains marked \"Coming Soon,\" so this figure should be treated as preliminary until VIP pricing is officially released.",
  where:
    "Derry Lane Towns sits at 376 and 390 Derry Road West in Mississauga, on the south side of Derry Road West just west of Hurontario Street. The site is in the historic Meadowvale Village area, Ontario's first Heritage Conservation District, about 7 minutes from Highway 401 and 13 minutes from Meadowvale GO Station.",
  types:
    "Derry Lane Towns will offer 120 three-storey townhomes in back-to-back, street, and rear-lane layouts, plus two semi-detached and two detached homes. Units are planned from 2 to 4 bedrooms, up to 3 bathrooms, and up to roughly 2,000+ square feet, per the City of Mississauga's development application for the site.",
  launch:
    "Derry Lane Towns is currently in pre-launch, listed as \"Coming Soon\" on Ballymore Homes' own site as of October 2026. A City of Mississauga rezoning application for the site (OZ/OPA 24-2 W11) remains under review, and no official VIP launch date has been announced.",
  deposit:
    "Ballymore Homes has not yet published a deposit structure for Derry Lane Towns. Pre-construction townhomes in Mississauga typically use a staged deposit schedule paid over the first 12 to 18 months after signing, but the exact amounts and dates for this community will be confirmed when the builder opens VIP registration.",
  schools:
    "Families near Derry Lane Towns have access to Le Flambeau Elementary School, Meadowvale Village Public School, St. Veronica Elementary School, and David Leeder Middle School, all under a 10-minute drive. Sheridan College's Davis Campus and the University of Toronto Mississauga are also within driving distance for post-secondary education.",
  vip: "VIP access to Derry Lane Towns is granted by registering through the project's official registration form with a name, email, and phone number. Registered buyers are typically notified first when floor plans, pricing, and incentives are released, ahead of the project's general public launch.",
  occupancy:
    "No occupancy date for Derry Lane Towns has been confirmed by Ballymore Homes. One unofficial agent listing estimates occupancy around 2028, but this has not been verified against the builder's own materials and should be treated as a preliminary estimate only.",
  investment:
    "Whether Derry Lane Towns is a good investment depends on an individual buyer's goals, financing, and timeline, and this site does not provide financial advice. Relevant factors include its pre-launch pricing from the high $700,000s, its Meadowvale Village location near Highway 401 and GO transit, and its still-unconfirmed occupancy and deposit terms.",
  transit:
    "Derry Lane Towns is close to Highways 401, 407, and 410, each within about a 10-minute drive, and roughly 10 to 13 minutes from Meadowvale GO Station on the Milton line to Union Station. Toronto Pearson International Airport is about a 15 to 20-minute drive, and the planned Hazel McCallion LRT will run along nearby Hurontario Street.",
  meadowvale:
    "Meadowvale Village is a historic neighbourhood in Mississauga dating to 1819 and designated Ontario's first Heritage Conservation District in 1980. It blends preserved 19th-century buildings along Old Derry Road with modern conveniences nearby, including Derry Village Square Plaza directly across from the Derry Lane Towns site.",
  best:
    "Mississauga's current pre-construction townhome launches include Derry Lane Towns by Ballymore Homes in Meadowvale Village, priced from the reported high $700,000s, and Applewood Towns by Sierra Communities at Dixie Road and Burnhamthorpe Road East, also priced from the $700s. Location, builder track record, and deposit structure are the key factors to compare.",
  compare:
    "Derry Lane Towns' reported high-$700,000s starting price is in line with Applewood Towns, also priced from the $700s at Dixie Road and Burnhamthorpe Road East. Derry Lane Towns sits in the lower-density, heritage-designated Meadowvale Village, while Applewood Towns is closer to Mississauga's denser eastern retail corridor near Dixie Outlet Mall and Sherway Gardens.",
  registerCost:
    "No. Registering for updates on Derry Lane Towns through this site is free and simply adds a buyer's contact information to the project's priority notification list. There is no obligation to purchase, and registering does not reserve a specific unit or lock in a price.",
} as const;

export const OVERVIEW = [
  "Derry Lane Towns is a pre-construction townhome community planned for 376 and 390 Derry Road West in Mississauga, developed by Ballymore Homes. Registered with the City of Mississauga under Ballymore (Uptown Meadowvale) Corp., the proposal calls for 120 three-storey townhomes across three distinct styles — back-to-back, street, and rear-lane — along with two semi-detached and two detached homes and a small commercial building fronting Derry Road West.",
  "The rear-lane design is a defining feature of the plan: garages and driveways sit on a rear service lane rather than the street, keeping the Derry Road West frontage pedestrian-focused. Units are planned from 2 to 4 bedrooms, up to 3 bathrooms, and up to roughly 2,000-plus square feet, giving the collection a range that suits first-time buyers, young professionals, and growing families alike.",
  "The site sits just outside the historic centre of Meadowvale Village, a neighbourhood that traces back to 1819 and became Ontario's first Heritage Conservation District in 1980. Remnants of that history are still visible along Old Derry Road and at the Meadowvale Village Hall, a former one-room schoolhouse now used as a community hub. Derry Lane Towns will sit immediately adjacent to that heritage core while being directly across from the modern Derry Village Square Shopping Plaza.",
  "Ballymore Homes has been building in Ontario since 1995, with a portfolio spanning Richmond Hill, Brampton, Innisfil, Markham, Pickering, Scarborough, Stouffville, and Tottenham, including both residential and select commercial properties. The builder describes its approach as \"more selection, more quality, more value\" across its low-rise and townhome communities.",
  "As of October 2026, Derry Lane Towns remains in the pre-launch stage. Ballymore Homes' own project page lists the community as \"Coming Soon,\" and the City of Mississauga's rezoning application for the site (OZ/OPA 24-2 W11 & 21T-M 24-1 W11) is still listed as under review. Buyers who register now are positioned to be notified first when official pricing, floor plans, and the VIP launch date are released.",
];

export const WHY_REGISTER =
  "Registering for Derry Lane Towns puts a buyer on Ballymore Homes' priority notification list. Based on how pre-construction launches typically work in Ontario, registered buyers are usually the first to receive floor plans, official pricing, and any VIP-stage incentives — ahead of the project's general public release. Registration is free and carries no obligation to purchase.";

export const FLOOR_PLAN_NOTE =
  "Individual floor plans for Derry Lane Towns have not yet been released by Ballymore Homes. This page will be updated with unit-by-unit layouts, square footage, and pricing as soon as they are made available at VIP launch. Registered buyers are typically notified first.";

export const DEPOSIT_NOTE =
  "Ballymore Homes has not yet published a deposit structure for Derry Lane Towns. Pre-construction townhome deposits in Mississauga are typically staged over the first 12 to 18 months after signing an Agreement of Purchase and Sale, commonly split across signing, 30, 90, and 180 days. The exact amounts and dates for Derry Lane Towns will be confirmed when the builder opens VIP registration, and this page will be updated at that time.";

export const INCENTIVES_NOTE =
  "Specific incentives for Derry Lane Towns are to be announced. Ballymore Homes has not published décor dollars, capped development charges, assignment rights, or any other purchaser incentive for this community. Figures of that kind circulating on unofficial listings are generic marketing language, not a builder-confirmed offer, and they are not repeated here as fact.";

export const LOCATION_LEAD =
  "Derry Lane Towns sits at 376 and 390 Derry Road West, on the south side of Derry Road West just west of Hurontario Street, in Mississauga's Meadowvale Village. The neighbourhood traces its roots to 1819 and was designated Ontario's first Heritage Conservation District in 1980 — a history still visible in the historic homes along Old Derry Road and at Meadowvale Village Hall, a former one-room schoolhouse that now serves as a community hub.";

export const LRT_NOTE =
  "The upcoming Hazel McCallion LRT, planned along nearby Hurontario Street, will add a further rapid-transit connection once complete.";

export const SCHOOLS_NOTE =
  "Families near Derry Lane Towns have access to Le Flambeau Elementary School, Meadowvale Village Public School, St. Veronica Elementary School, and David Leeder Middle School, all within a 10-minute drive. Ballymore Homes' own materials note that the broader area is served by both the public and Catholic school boards, spanning pre-school through high school. Sheridan College's Davis Campus and the University of Toronto Mississauga campus are both within driving distance for post-secondary students. Independent Fraser Institute rankings for these schools have not been verified for this page and are not stated.";

export const SHERIDAN_NOTE =
  "Unofficial listings do not agree on a single drive time to Sheridan College's Davis Campus, with figures ranging from under 10 minutes to about 17 minutes. This page therefore describes the campus as within driving distance rather than quoting one number as exact.";

export const RETAIL_NOTE =
  "Derry Village Square Shopping Plaza sits directly across Derry Road West from the site, with everyday coffee shops, restaurants, grocery stores, and services. Heartland Town Centre, one of Mississauga's largest outdoor shopping destinations — home to Adidas, H&M, the GAP, Costco, Walmart, Canadian Tire, and The Keg — is a short drive away, and Square One Shopping Centre is roughly 17 minutes away. For recreation, Derrydale Golf Course, a 12-hole course styled after Scotland's original links, is about a 3-minute drive, and the 150-acre Meadowvale Conservation Area along the Credit River is about 10 minutes away, with trails and picnic areas along the water.";

export const COMPARISON_BODY =
  "Derry Lane Towns' reported high-$700,000s starting price is in line with other current Mississauga townhome launches, such as Applewood Towns by Sierra Communities at Dixie Road and Burnhamthorpe Road East, also priced from the $700s. Where Applewood Towns sits closer to Mississauga's denser eastern retail corridor near Dixie Outlet Mall and Sherway Gardens, Derry Lane Towns sits within the lower-density, heritage-designated Meadowvale Village, closer to Highway 401 and the Milton GO corridor.";

export const COMPARISON_ROWS: { field: string; derry: string; applewood: string }[] = [
  { field: "Builder", derry: "Ballymore Homes", applewood: "Sierra Communities" },
  {
    field: "Location",
    derry: "Derry Road West & Hurontario Street, Meadowvale Village",
    applewood: "Dixie Road & Burnhamthorpe Road East",
  },
  {
    field: "Starting price",
    derry: "High $700,000s CAD (unofficial, October 2026)",
    applewood: "From the $700s (indicative only)",
  },
  { field: "Homes", derry: "120 townhomes + 2 semi-detached + 2 detached", applewood: "70 units" },
  { field: "Form", derry: "3-storey townhomes, plus four single-family homes", applewood: "3 storeys" },
  { field: "Sizes", derry: "Up to ~2,000+ sq. ft.", applewood: "About 798–1,560 sq. ft." },
  {
    field: "Setting",
    derry: "Lower-density, heritage-designated Meadowvale Village",
    applewood: "Denser eastern retail corridor near Dixie Outlet Mall and Sherway Gardens",
  },
  {
    field: "Status",
    derry: "Coming Soon — Registration Open",
    applewood: "Pre-construction as of October 2026",
  },
];

export const PLANNING = [
  "The municipal file is an Official Plan and Zoning By-law Amendment, application OZ/OPA 24-2 W11, together with plan of subdivision 21T-M 24-1 W11. As of October 10, 2026, the City of Mississauga lists that application as under review. The city planner of record is Emma Bunting (emma.bunting@mississauga.ca). The property is in Ward 11, represented by Councillor Brad Butt.",
  "A February 2018 concept plan for 376 and 390 Derry Road West showed approximately 126 lane townhouses on 2.57 hectares across two parcels. The 2024 application restructured that idea to 120 townhomes, two semi-detached homes, two detached homes, and a commercial building fronting Derry Road West. The application materials also reference 0 Oaktree Circle.",
  "Two public status signals do not match. Ballymore Homes' own project page, reviewed on October 10, 2026, says \"Coming Soon.\" An unofficial agent listing describes the community as now selling. This site uses the builder's more conservative status: Coming Soon, with registration open for updates. No sales-centre address or hours have been published here because none were confirmed.",
];

export const CONFIRMED = [
  "Builder: Ballymore Homes, founded in 1995 and based in Richmond Hill, registered for this site as Ballymore (Uptown Meadowvale) Corp.",
  "Address: 376 and 390 Derry Road West, Mississauga, ON L5W 1N6, on the south side of Derry Road West west of Hurontario Street.",
  "Unit mix from the city application: 120 three-storey townhomes, 2 semi-detached homes, and 2 detached homes, plus a commercial building on the Derry Road West frontage.",
  "Bedroom and size range published in listing material: 2 to 4 bedrooms, up to 3 bathrooms, up to about 2,000+ square feet.",
  "Launch status on the builder's own page: Coming Soon.",
];

export const TBA = [
  "Deposit structure, including amounts, schedule, and timing.",
  "Incentives such as décor credits, capped development charges, or assignment terms.",
  "Maintenance or POTL fees.",
  "Exact occupancy date. An unofficial estimate of 2028 is not treated as confirmed.",
  "Official VIP launch date.",
  "Fraser Institute rankings for the named schools.",
  "Exact lot widths for each townhome style.",
  "Sales centre address and hours.",
  "Unit-by-unit floor plans and official builder pricing.",
];

export const STYLE_NOTES = [
  "A back-to-back townhome shares a common rear wall with a neighbouring unit and typically has no rear yard. That layout lets a builder fit more homes on a parcel, which is why it often lands at a lower price point than a traditional town with a backyard. At Derry Lane Towns it is one of three townhome styles in the 120-home plan, not a separate community.",
  "A rear-lane townhome keeps the garage and driveway on a service lane behind the home. The street side can stay a sidewalk, front door, and landscaping, without a cut of driveway at every unit. The city application describes this among the forms planned on the Derry Road West site, and it is the feature that keeps the frontage pedestrian-focused.",
  "A street townhome is the familiar form: the front door and often the driveway face an internal community street. Lot width for each of these styles is to be announced. Until Ballymore Homes releases plans, the only defensible size statement is the published range — 2 to 4 bedrooms, up to 3 bathrooms, and up to roughly 2,000+ square feet.",
];

export const BLOG = {
  intro: [
    "Mississauga remains one of the most active pre-construction markets in the Greater Toronto Area, with townhome launches continuing across established neighbourhoods like Meadowvale Village, Streetsville, Clarkson, and the city's eastern retail corridor near Dixie Road. New releases in 2026 span a wide range, from stacked and back-to-back towns in the $700,000s to detached ravine homes well above $1.5 million.",
    "This guide explains how to read a Mississauga townhome launch without treating marketing copy as a contract. It uses Derry Lane Towns by Ballymore Homes, at Derry Road West and Hurontario Street, as the worked example, and it separates what the builder and the City of Mississauga have put on the record from what is still to be announced.",
  ],
  meadowvale: [
    "Meadowvale Village, in Mississauga's northwest, is one of the city's few neighbourhoods with formal heritage protection — it was designated Ontario's first Heritage Conservation District in 1980, preserving historic buildings dating to the area's founding in 1819 along Old Derry Road. That heritage core sits alongside modern infrastructure: Highway 401 is roughly 7 minutes away, Meadowvale GO Station connects to Union Station via the Milton line, and Heartland Town Centre provides big-box and outdoor retail a short drive from the neighbourhood. Derry Lane Towns, a 120-home pre-construction townhome collection by Ballymore Homes at Derry Road West and Hurontario Street, is one of the first significant new residential releases in this specific pocket of Meadowvale Village in recent years.",
    "The site itself is just outside the historic centre, directly across Derry Road West from Derry Village Square Shopping Plaza. Meadowvale Village Hall, a former one-room schoolhouse, remains a community hub nearby. Derrydale Golf Course is about a 3-minute drive, and the 150-acre Meadowvale Conservation Area along the Credit River is about 10 minutes away. That mix — a protected village street beside an arterial, a plaza, and a highway — is the practical reason townhome development is showing up here.",
  ],
  styles: [
    "Buyers new to pre-construction often see unfamiliar terms in a project's unit mix. A back-to-back townhome shares a common rear wall with a neighbouring unit, with no rear yard, which allows a builder to fit more homes on a given parcel at a lower price point than a traditional townhome. A rear-lane townhome keeps the garage and driveway on a service lane behind the home rather than the street, which keeps the street frontage walkable and uninterrupted by driveways — a layout increasingly common in newer Mississauga and Brampton communities, and one used in Derry Lane Towns' planned collection.",
    "Derry Lane Towns also includes street townhomes, plus two semi-detached and two detached homes, for 124 residential units in total. A small commercial building is planned on the Derry Road West frontage. None of those forms should be read as a finished floor plan. Lot widths, garage counts, and basement finishes are to be announced until the builder publishes drawings.",
  ],
  deposits: [
    "While every builder sets its own schedule, Mississauga townhome and condo-townhome deposits commonly follow a staged structure over the first 12 to 18 months after signing — for example, a portion on signing, additional portions at 30, 90, and 180 days, and sometimes a further portion closer to occupancy. Exact amounts vary by builder and by how close a project is to its construction start. Buyers should always confirm the specific schedule in the Agreement of Purchase and Sale rather than relying on general market norms.",
    "For Derry Lane Towns specifically, every deposit cell is still to be announced. Ballymore Homes had not published signing amounts, later instalments, or an occupancy top-up as of October 10, 2026. A typical market pattern is context, not a quote. The same caution applies to incentives: nothing on this site states a décor credit, a development-charge cap, or an assignment fee as a fact of this project.",
  ],
  comparable: [
    "Derry Lane Towns' reported high-$700,000s starting price sits in a similar range to Applewood Towns by Sierra Communities at Dixie Road and Burnhamthorpe Road East, also priced from the $700s, with sizes from roughly 798 to 1,560 square feet across 70 homes. Buyers comparing the two are generally weighing Meadowvale Village's lower-density, heritage-adjacent setting against Applewood Towns' proximity to Mississauga's denser eastern retail corridor near Dixie Outlet Mall and Sherway Gardens. Both remain pre-construction as of October 2026, and pricing on each is subject to change.",
    "Applewood Towns pricing is indicative only; the source page did not show a clear as-of date. Derry Lane Towns' high-$700,000s figure is likewise unofficial. Neither number is an offer, and neither should be used to calculate a mortgage payment until the builder publishes a price list. Occupancy for Derry Lane Towns is to be announced. An unofficial 2028 estimate exists and is not confirmed.",
  ],
  steps: [
    "Identify the specific project and confirm its builder, intersection, and current status (pre-launch, VIP, or public sale) directly from the builder's own materials where possible.",
    "Register with name, email, and phone to join the priority notification list — this step is free and non-binding.",
    "Review floor plans and pricing once released, and compare against nearby comparable launches.",
    "Confirm the deposit structure, incentives, and occupancy estimate directly in the builder's official release before signing anything.",
    "Have any Agreement of Purchase and Sale reviewed by a real estate lawyer before signing — this is standard practice for any Ontario pre-construction purchase.",
  ],
  unconfirmed: [
    "A useful way to read any 2026 Mississauga launch is to split the page into three piles: what the builder has published, what the municipality has filed, and what an unofficial listing has guessed. For Derry Lane Towns, the builder's own page, reviewed in October 2026, says Coming Soon and does not list prices or floor plans. The City of Mississauga file OZ/OPA 24-2 W11 and plan of subdivision 21T-M 24-1 W11 was still under review on that date. The unit count in that application is 120 townhomes plus two semi-detached and two detached homes. An unofficial listing's high-$700,000s starting price, and a 2028 occupancy guess, sit in the third pile. They are worth knowing. They are not a contract.",
    "The same split applies to schools and drive times. Named schools within a short drive include Le Flambeau Elementary School, Meadowvale Village Public School, St. Veronica Elementary School, and David Leeder Middle School. This guide does not quote Fraser Institute rankings, because those rankings were not verified against a current table. Sheridan College's Davis Campus and the University of Toronto Mississauga campus are within driving distance. Published minute counts for the Sheridan drive do not agree with each other, so this page does not treat one of them as exact.",
    "Before a pre-construction townhome becomes a purchase, four documents matter more than a landing page: the builder's price list, the floor plans with areas, the deposit schedule inside the Agreement of Purchase and Sale, and a lawyer's review of assignment, rental, and occupancy clauses. None of those documents had been published for Derry Lane Towns when this guide was written on October 10, 2026. Registration here is a way to hear when they appear. It does not hold a lot, and it does not lock a price.",
  ],
  history: [
    "The February 2018 concept for 376 and 390 Derry Road West imagined about 126 lane townhouses on 2.57 hectares across two parcels. The 2024 application restructured that idea to 120 townhomes, four single-family homes, and a commercial building on the Derry Road West frontage. Anyone comparing how large the community is should use the 2024 application, not the older concept count. The file also references 0 Oaktree Circle. Ward 11 Councillor Brad Butt and city planner Emma Bunting are the municipal contacts of record. They are city officials. This website is not a sales channel for the City of Mississauga or for Ballymore Homes.",
    "Highway access is part of why the northwest of Mississauga keeps drawing townhome applications. From this intersection, Highway 401 is about 7 minutes, and Highways 407 and 410 are about 10 minutes each. Meadowvale GO on the Milton line is about 10 to 13 minutes, and Toronto Pearson International Airport is about 15 to 20 minutes. The planned Hazel McCallion LRT along Hurontario Street would add a rapid-transit option beside the site once it is built. Those connections sit next to a neighbourhood that has been a heritage conservation district since 1980, which is an unusual pairing in Mississauga and the reason the location page on this site is as long as it is.",
  ],
  follow:
    "This guide is part of derrylanehomes.com, an independent information and registration resource tracking Derry Lane Towns by Ballymore Homes as new details are released. See the project overview, floor plans, pricing, and location pages for the most current verified details, or the full FAQ for answers to common buyer questions.",
};
