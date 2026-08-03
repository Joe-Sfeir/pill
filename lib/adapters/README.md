# Integration adapters

The repository interfaces in `lib/repositories/interfaces.ts` are the stable boundary for Supabase, PostgreSQL/Prisma, Firebase, REST, GraphQL, scheduling platforms, Google Calendar, email, SMS, and services such as Mindbody. Mock implementations are active. Add a provider-specific module here and select it in a server-only composition root; never import credentials into client components.
