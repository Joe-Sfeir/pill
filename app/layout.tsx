import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/consent/CookieConsent";
import { studio } from "@/config/studio";

export const metadata: Metadata = {
  metadataBase: new URL(studio.siteUrl),
  title: { default: studio.name, template: `%s | ${studio.shortName}` },
  description: studio.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: studio.name,
    description: studio.description,
    type: "website",
    locale: "en_LB",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: studio.name,
    description: studio.description,
    url: studio.siteUrl,
    creator: { "@type": "Organization", name: "Spline" },
    isBasedOn: "Fictional movement-studio concept demonstration",
  };
  return (
    <html lang="en" dir="ltr">
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <CookieConsent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
