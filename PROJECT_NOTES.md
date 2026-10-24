# Simple Design — Project Notes

This folder is a separate, independent copy of the **3rd homepage design**
("simple design") for BizzOne Digital — kept apart from the main dark-theme
site and the light-theme redesign. Same GitHub repo, same `/api/contact`
backend, but its own folder so it can be worked on and deployed on its own.

## What this design is

A simpler, form-first design based on a reference project the owner
supplied (two zip uploads, a few weeks apart). White background, purple
(`#8C00FF`) and lime (`#C8F31D`) accents, Sora + Hanken Grotesk fonts.
The homepage hero has a real lead-capture form next to the headline
instead of just a headline + button.

## What was built

- **New pages**: Home, About, Services, Pricing, Our Work, Contact,
  Privacy Policy, Terms & Conditions — all under `src/app/*`.
- **New components**: everything lives in `src/components/simple/` so it
  never collides with the dark-theme or light-theme components already in
  the repo (`src/components/sections/*`).
- **Forms are real, not placeholders**: the hero `LeadForm` and the
  `ContactForm` both submit to the site's actual `/api/contact` route —
  the same one the live site's contact form already uses. Submissions get
  saved to the admin panel and emailed to the team.
- **Content is the owner's own copy**: headlines, descriptions, the
  Meta/Google verified-partner wording, pricing figures, and the
  "500+ brands scaled / 3 years in business" line were all taken verbatim
  from the owner's reference project, not invented. Client logos,
  testimonials, services list, portfolio and case studies pull from this
  repo's real data files (`src/data/*`, `src/lib/services.ts`) instead of
  the reference's placeholder content.
- **Animations**: scroll-reveal entrance animation on every section,
  alternating left/right per section (same pattern used on the
  light-theme branch), plus a dropping hero headline.
- **Content audit pass**: after the owner sent an updated reference zip,
  every ported file was re-compared line-by-line against the new
  reference to catch anything that drifted during the first port (a few
  sentences and one stat line had been accidentally shortened/changed —
  these were restored to match the owner's wording exactly).

- **Third reference zip (inner-page rebuild)**: the owner's next zip
  rebuilt About, Services, Contact, Our Work and Pricing. All five were
  ported. Pricing is now a tabbed page (website plans, single services,
  premium bundles, process, compare table) in
  `src/components/simple/PricingContent.tsx`. The home nav now uses
  section anchors (Services / How It Works / Results / Pricing / FAQ),
  colour tokens were updated to the reference's values, and a "locked into
  a contract?" FAQ was added (answer taken from our Terms page). The
  reference's `[X]` stat placeholders on About use `SITE_STATS` instead.
- **Exact-content pass**: the owner asked for content to match the file
  exactly, so the home Services, Pricing, WhyUs, MetaGooglePartners and
  TrustedLogos components and the /services page now use the reference's
  own copy (per-card CTAs and price badges, 10 client chips, "35-person
  team", no extra $99 cards on the home pricing) instead of `src/data/*`.
  Only the "51 Google Reviews" figure is still left out.

## What's still open

- Confirm the legal operating entity name used on the Terms &
  Conditions page (reference text says "Z-JAN INC.", not found anywhere
  else in the site's data — currently using "BizzOne Digital" instead
  until confirmed).
- Decide whether to restore the reference's "★★★★★ 5.0 from 51 Google
  Reviews" badge on the hero — it was left out because the "51" figure is
  stale (the live site now has more reviews and doesn't show a fixed
  count anywhere else).
- Have Privacy Policy / Terms & Conditions reviewed by a lawyer before
  publishing, as usual for legal pages.
- Nothing from this folder has been set live anywhere — it only exists on
  the `simple-theme-preview` branch so far, as a preview.

## Running it locally

```bash
npm install
npm run dev
```

`.env.local` was copied over from the main project folder so the admin
panel / Mongo / email sending work the same way here as there.
