# Camp Choref

Marketing and registration site for Camp Choref, a summer day camp for boys entering
2nd–7th grade.

Built with **React 18 + TypeScript + Vite** and styled with **Tailwind CSS v4**.
Enrollments are stored in **Supabase** (hosted Postgres).

## Getting started

```bash
npm install
cp .env.example .env   # then fill in your Supabase values
npm run dev            # http://localhost:5173
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Type-check and build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run typecheck` | Type-check only |

The site runs without Supabase credentials — the registration form simply tells
visitors to call or email instead of silently dropping a signup.

## Supabase setup

1. Create a free project at [supabase.com](https://supabase.com).
2. Open **SQL Editor** and run `supabase/migrations/0001_create_enrollments.sql`.
3. Copy **Project Settings → API → Project URL** and **anon public key** into `.env`:

   ```
   VITE_SUPABASE_URL=https://your-project-ref.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```

4. Add the same two variables to your host's environment (Netlify, Vercel, or
   GitHub Actions) so production builds pick them up.

### Security model

The `anon` key ships in the browser bundle, which is expected — Row Level Security
is what protects the data:

- `anon` can **insert only**. It cannot read, update or delete.
- `authenticated` users (camp staff invited under **Authentication → Users**) can
  read and update.

That means camper and parent details are never readable from the public site.

### Viewing registrations

Sign in to the Supabase dashboard and open **Table Editor → `enrollments`**.
Rows can be filtered by `season` and exported to CSV. Each row has a `status`
column (`pending`, `confirmed`, `waitlist`, `cancelled`) for tracking signups.

A unique index prevents the same camper being registered twice for a season.

## Project structure

```
src/
  components/     Header, Hero, Highlights, Details, EnrollmentForm, Footer
  data/camp.ts    All camp copy — dates, cost, policies, activity list
  lib/            Supabase client and the enrollment insert
  types.ts        Form and database row types
supabase/
  migrations/     SQL schema and RLS policies
public/media/     Logo, favicon, printable flyer
```

Updating camp dates, tuition or policies for a new season means editing
`src/data/camp.ts` and bumping `camp.season` — no component changes needed.

## Deploying

`npm run build` produces a fully static `dist/` folder that can be hosted on
Netlify, Vercel, Cloudflare Pages or GitHub Pages.
