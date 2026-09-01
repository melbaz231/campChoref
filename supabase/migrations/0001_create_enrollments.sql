-- Camp Choref enrollments
-- Run in the Supabase SQL editor, or via `supabase db push` with the CLI.

create table if not exists public.enrollments (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  season integer not null,

  camper_first_name text not null check (length(trim(camper_first_name)) > 0),
  camper_last_name  text not null check (length(trim(camper_last_name)) > 0),
  entering_grade    text not null check (entering_grade in ('2nd','3rd','4th','5th','6th','7th')),

  parent_name  text not null check (length(trim(parent_name)) > 0),
  parent_email text not null check (parent_email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  parent_phone text not null check (length(trim(parent_phone)) >= 7),

  weeks text[] not null check (array_length(weeks, 1) >= 1),

  emergency_contact_name  text not null check (length(trim(emergency_contact_name)) > 0),
  emergency_contact_phone text not null check (length(trim(emergency_contact_phone)) >= 7),

  medical_notes text,
  payment_method text not null check (payment_method in ('cash','check','quickpay','zelle')),
  notes text,

  status text not null default 'pending'
    check (status in ('pending','confirmed','waitlist','cancelled'))
);

create index if not exists enrollments_season_created_at_idx
  on public.enrollments (season, created_at desc);

-- Prevent the same camper being registered twice for a season.
create unique index if not exists enrollments_unique_camper_per_season_idx
  on public.enrollments (
    season,
    lower(trim(camper_first_name)),
    lower(trim(camper_last_name)),
    lower(trim(parent_email))
  );

alter table public.enrollments enable row level security;

-- Parents submit from the public site with the anon key: insert only.
drop policy if exists "public can submit an enrollment" on public.enrollments;
create policy "public can submit an enrollment"
  on public.enrollments
  for insert
  to anon
  with check (true);

-- Only signed-in staff can read or manage enrollments. The anon key cannot
-- read this table, so camper and parent details are never exposed publicly.
drop policy if exists "staff can read enrollments" on public.enrollments;
create policy "staff can read enrollments"
  on public.enrollments
  for select
  to authenticated
  using (true);

drop policy if exists "staff can update enrollments" on public.enrollments;
create policy "staff can update enrollments"
  on public.enrollments
  for update
  to authenticated
  using (true)
  with check (true);
