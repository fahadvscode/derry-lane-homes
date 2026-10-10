import { FAQ_ITEMS } from "@/lib/faq";
import {
  GEO,
  HERO_ALT,
  HERO_IMAGE,
  LAST_UPDATED,
  PROJECT,
  SITE_NAME,
  SITE_URL,
} from "@/lib/content";

export const IMAGE_LICENSE =
  "Original illustrative site-context image created for derrylanehomes.com. Not an official Ballymore Homes rendering. Builder renderings are not published here because independent usage rights were not confirmed.";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "An independent information and registration resource for Derry Lane Towns, a pre-construction townhome community by Ballymore Homes in Mississauga, Ontario. Not affiliated with or endorsed by the builder.",
    dateModified: LAST_UPDATED,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Derry Lane Towns — Derry Lane Homes",
    url: SITE_URL,
    dateModified: LAST_UPDATED,
  };
}

export function breadcrumbSchema(name: string, path: string) {
  const items = [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
  ];
  if (path !== "/") {
    items.push({
      "@type": "ListItem",
      position: 2,
      name,
      item: `${SITE_URL}${path}`,
    });
  }
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}

export function residenceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Residence",
    name: PROJECT.name,
    description:
      "A pre-construction townhome community by Ballymore Homes at 376 & 390 Derry Road West, Mississauga, Ontario, in the Meadowvale Village neighbourhood. Status: Coming Soon.",
    address: {
      "@type": "PostalAddress",
      streetAddress: PROJECT.streetAddress,
      addressLocality: PROJECT.locality,
      addressRegion: PROJECT.region,
      postalCode: PROJECT.postalCode,
      addressCountry: PROJECT.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: GEO.latitude,
      longitude: GEO.longitude,
    },
    numberOfRooms: "2-4 bedrooms",
    floorSize: {
      "@type": "QuantitativeValue",
      maxValue: "2000",
      unitCode: "FTK",
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Rear-lane townhome design" },
      { "@type": "LocationFeatureSpecification", name: "Near Meadowvale Conservation Area" },
      { "@type": "LocationFeatureSpecification", name: "Near Derrydale Golf Course" },
      { "@type": "LocationFeatureSpecification", name: "Near Meadowvale GO Station" },
    ],
    image: `${SITE_URL}${HERO_IMAGE}`,
    url: `${SITE_URL}/`,
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function imageSchema(path: string = HERO_IMAGE, description: string = HERO_ALT) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: `${SITE_URL}${path}`,
    description,
    license: IMAGE_LICENSE,
  };
}

// TODO: Add AggregateOffer schema once Ballymore Homes publishes official pricing.
// Do not fabricate lowPrice/highPrice from the unverified agent-listing figure in the meantime.
