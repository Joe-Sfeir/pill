# FORME Studio Beirut

Production-oriented website foundation for a premium boutique Pilates-inspired and high-intensity, low-impact resistance-training studio in Lebanon. The current business name, people, timetable, pricing, policies, and operational details are explicitly temporary.

## Stack

Next.js 16 App Router, React 19, strict TypeScript, Tailwind CSS 4, React Hook Form, Zod, Lucide icons, Vitest, Testing Library, and mock route handlers. Server Components are the default; client boundaries are limited to navigation, filters, forms, membership currency selection, and consent.

## Run locally

```bash
npm install
copy .env.example .env
npm run dev
```

Open `http://localhost:3000`. Do not create `.env.local` for this project. Production verification is `npm run lint`, `npm run test`, then `npm run build`; serve the result with `npm start`.

## Editing content

- Business identity, contacts, locale, timezone, policies, terminology flags, brand, cookies, and analytics: `config/studio.ts`.
- Classes, instructors, demonstration schedule, packages, and FAQ: `content/data.ts`.
- Types: `types/index.ts`.
- Replace `public/images/hero-forme.png` and add approved local responsive imagery. Never hotlink production media.
- WhatsApp templates: `lib/whatsapp/index.ts`; configure `NEXT_PUBLIC_WHATSAPP_NUMBER` without punctuation.
- Schedule dates are generated mock data and not live availability. Replace the repository selected by the future server-only composition root.
- Package prices are `null` by design. Enter approved USD/LBP values only; configure an explicit mock exchange rate instead of assuming a live one.

To add a class or instructor, add a complete typed record, keep IDs and referenced IDs aligned, add the local media asset, and verify generated static detail routes. To connect a booking platform, set its safe URL and replace the mock repository/service; sensitive notes must never enter URLs, analytics, WhatsApp, logs, or public confirmations.

## Internationalization

English placeholder content is implemented. Configuration declares English, Arabic, and French. Add explicit locale route groups or middleware only after translation strategy is approved; keep routes explicit. Set `dir="rtl"` for Arabic, use logical CSS properties, choose an Arabic-capable font, and pass the locale to `Intl` formatters.

## Analytics and privacy

Analytics is disabled in configuration and must remain inactive before consent. Add a provider only after updating the privacy/cookie templates, consent adapter, retention details, and `.env.example`.

## Backend and deployment

Mock mode requires no credentials or database. Repository interfaces separate the UI from Supabase, PostgreSQL, Firebase, REST, GraphQL, scheduling, Calendar, email, SMS, and Mindbody-like providers. See `docs/BACKEND-INTEGRATION.md` and `docs/BOOKING-INTEGRATION.md`.

For Vercel: import the repository, set safe production environment variables, configure the canonical site URL, deploy, then test consent, forms, metadata, and every policy page. Elsewhere: use Node.js 20+, run `npm ci && npm run build`, then `npm start` behind HTTPS. The app can also be deployed to any Next.js-compatible platform.

## Folder map

`app/` explicit routes and APIs; `components/` UI grouped by responsibility; `config/` centralized business settings; `content/` mock content; `lib/` validation, repositories, services, adapters and utilities; `types/` domain models; `tests/` automated tests; `docs/` operating guides; `prisma/` isolated optional example.

## Route policy

Main pages are explicit App Router routes. Dynamic routes exist only at `/classes/[slug]` and `/instructors/[slug]`, both with `notFound()` handling. A root `app/[...slug]` or `app/[[...slug]]` is prohibited because it hides routing errors, weakens static guarantees and metadata ownership, and creates conflicts with explicit product routes. There is no Pages Router.

## Testing

`npm run test` covers class/schedule filtering, instructor lookup, pricing/currency helpers, booking/waitlist validation, WhatsApp encoding, calendar export, consent storage, mobile navigation, filters, and cookie preferences. The manual end-to-end acceptance path is documented in `docs/TESTING.md`.

## Environment variables

Copy `.env.example` to `.env` and fill only the integrations in use. Secrets never use `NEXT_PUBLIC_`; only the site URL and public WhatsApp number are public. `MOCK_DATA_MODE=true` is the credential-free default.
