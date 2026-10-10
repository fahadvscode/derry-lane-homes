# Derry Lane Towns

Independent information and VIP-registration site for Derry Lane Towns by Ballymore Homes, at [derrylanehomes.com](https://derrylanehomes.com). This site is not the builder’s website and it carries no agent or brokerage identity.

## Facts

All public facts live in `lib/content.ts`. Bump `LAST_UPDATED` whenever a fact changes so the footer, sitemap `lastmod`, and JSON-LD `dateModified` stay in sync.

Official pricing is not published yet. Do not add `AggregateOffer` schema until Ballymore Homes releases a price list. The placeholder is marked in `lib/schema.ts`.

## Leads

Registrations insert into `derry_lane_homes_leads` on Supabase project `cfzuypbljirmibmxpabi`. The migration is `supabase/migrations/001_create_leads.sql`. Only the anon key is used, and only for inserts.

Apply that file in the SQL editor at `https://supabase.com/dashboard/project/cfzuypbljirmibmxpabi/sql/new` if the tables are not already there. The anon key cannot create tables.

## Off-site citations

Once the site is live, keep the project name, address, and reported starting price identical anywhere else they are listed. Consistency across sources is what gives answer engines a reason to cite this site. The starting price stays labelled unofficial until the builder publishes it.

## DNS

Root domain: A record `@` → `76.76.21.21`.  
`www`: CNAME → `cname.vercel-dns.com`.

Analytics IDs (`NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_GTM_ID`, `NEXT_PUBLIC_META_PIXEL_ID`) and the search-console verification tokens in `app/layout.tsx` are placeholders until real values are added.
