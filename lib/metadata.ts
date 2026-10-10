import type { Metadata } from "next";
import { HERO_ALT, HERO_IMAGE } from "@/lib/content";

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type: "website",
      images: [{ url: HERO_IMAGE, width: 1600, height: 900, alt: HERO_ALT }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [HERO_IMAGE],
    },
  };
}
