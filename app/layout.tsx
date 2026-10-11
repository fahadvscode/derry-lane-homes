import type { Metadata } from "next";
import type { ReactNode } from "react";
import { headers } from "next/headers";
import { Karla, Libre_Baskerville } from "next/font/google";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Nav } from "@/components/Nav";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { Tracking } from "@/components/Tracking";
import { ampUrlFor } from "@/lib/amp-document";
import { SITE_URL } from "@/lib/content";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import "./globals.css";

const display = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre",
  display: "swap",
});

const sans = Karla({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-karla",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Derry Lane Towns | Mississauga Pre-Construction Townhomes",
    template: "%s",
  },
  description:
    "Derry Lane Towns is a 120-home pre-construction townhome community by Ballymore Homes in Mississauga. Register for VIP pricing and floor plans.",
  applicationName: "Derry Lane Homes",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Derry Lane Towns",
    locale: "en_CA",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  verification: {
    google: "REPLACE_WITH_GSC_VERIFICATION",
    other: { "msvalidate.01": "REPLACE_WITH_BING_VERIFICATION" },
  },
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const headerList = await headers();
  const ampHref = ampUrlFor(headerList.get("x-pathname") ?? "/");
  return (
    <html lang="en-CA" className={`${display.variable} ${sans.variable}`}>
      <body className="bg-surface font-sans text-text-primary antialiased">
        {ampHref ? <link rel="amphtml" href={ampHref} /> : null}
        <JsonLd data={websiteSchema()} />
        <JsonLd data={organizationSchema()} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-surface focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <Tracking />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <StickyMobileCta />
      </body>
    </html>
  );
}
