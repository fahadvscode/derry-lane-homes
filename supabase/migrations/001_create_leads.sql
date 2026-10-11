create table if not exists derry_lane_homes_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text not null,
  home_type_interest text,
  budget_range text,
  buyer_type text,
  timeline text,
  is_broker boolean not null default false,
  consent_given boolean not null default false,
  consent_at timestamptz,
  page_path text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_term text,
  utm_content text
);

alter table derry_lane_homes_leads enable row level security;

drop policy if exists "anon can insert derry_lane_homes_leads" on derry_lane_homes_leads;

create policy "anon can insert derry_lane_homes_leads"
  on derry_lane_homes_leads for insert
  to anon
  with check (true);

create table if not exists derry_lane_homes_privacy_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  first_name text,
  last_name text,
  email text not null,
  phone text,
  is_broker boolean,
  message text not null,
  page_path text
);

alter table derry_lane_homes_privacy_requests enable row level security;

drop policy if exists "anon can insert derry_lane_homes_privacy_requests" on derry_lane_homes_privacy_requests;

create policy "anon can insert derry_lane_homes_privacy_requests"
  on derry_lane_homes_privacy_requests for insert
  to anon
  with check (true);
