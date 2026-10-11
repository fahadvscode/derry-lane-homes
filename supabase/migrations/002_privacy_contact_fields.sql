alter table derry_lane_homes_privacy_requests add column if not exists first_name text;
alter table derry_lane_homes_privacy_requests add column if not exists last_name text;
alter table derry_lane_homes_privacy_requests add column if not exists phone text;
alter table derry_lane_homes_privacy_requests add column if not exists is_broker boolean;
