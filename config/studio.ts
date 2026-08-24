export const studio = {
  name: "FORME Studio Beirut",
  shortName: "FORME",
  description:
    "A fictional boutique movement studio concept for slow, controlled resistance training and Pilates-inspired practice.",
  logo: "/samples/pilates/forme-mark.svg",
  phone: "+961 76 300 011",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "96176300011",
  email: process.env.STUDIO_CONTACT_EMAIL || "spline@e19company.com",
  address: "Mar Mikhael, Beirut · fictional concept location",
  mapUrl: "https://maps.google.com/?q=Mar%20Mikhael%20Beirut%20Lebanon",
  parking:
    "Concept arrival plan: nearby paid parking and a two-minute walk to the studio.",
  openingHours: [
    "Monday–Friday: 07:00–20:30 · demonstration timetable",
    "Saturday: 08:00–14:00 · demonstration timetable",
    "Sunday: closed",
  ],
  timeZone: "Asia/Beirut",
  social: { instagram: "https://instagram.com/" },
  bookingPlatformUrl: process.env.BOOKING_PLATFORM_URL || "",
  defaultLocale: "en",
  locales: ["en", "ar", "fr"],
  defaultCurrency: "USD",
  currencies: ["USD", "LBP"],
  announcement:
    "Spline concept demonstration · FORME is a fictional movement studio.",
  firstSessionOffer:
    "Illustrative first session: 50 minutes, equipment orientation included, USD 28.",
  cancellationWindow: "12 hours before the requested session",
  lateArrivalPolicy:
    "The demonstration policy allows entry up to five minutes after the listed start time when it is safe to do so.",
  waitlistPolicy:
    "Joining the demonstration waitlist returns a receipt only; it does not reserve a place or trigger a notification.",
  pregnancyPolicy:
    "This concept provides no medical advice. A real studio would require clients to seek appropriate professional guidance and contact the instructor privately before participation.",
  minimumAge: "18 for the demonstration policy",
  verifiedTerminology: { enabled: false, terms: [] as string[] },
  brand: {
    ivory: "#f3efe6",
    limestone: "#d6cdbf",
    espresso: "#30251f",
    charcoal: "#252525",
    clay: "#a85f48",
    rosewood: "#734b47",
    sage: "#a9ad9f",
    accent: "#d65332",
  },
  cookie: { version: "1", storageKey: "forme-cookie-preferences" },
  analytics: { enabled: false, id: process.env.ANALYTICS_ID || "" },
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://spline.e19company.com/samples/pilates",
} as const;

export type StudioConfig = typeof studio;
