import type { Metadata } from "next";
import { LegalTemplate } from "@/components/legal/LegalTemplate";
export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Template terms for FORME Studio Beirut.",
};
export default function Page() {
  return (
    <LegalTemplate
      title="Terms of Service"
      intro="Template terms governing use of the website and studio services."
      sections={[
        {
          heading: "Studio and services",
          body: "Insert verified legal entity, registration details, eligibility and minimum age, offered services, and service limitations.",
        },
        {
          heading: "Pricing and payment",
          body: "Insert approved prices, taxes, currencies, payment methods, refunds, package validity, and promotional terms.",
        },
        {
          heading: "Booking and attendance",
          body: "Define confirmations, late arrivals, no-shows, cancellations, waitlists, instructor substitutions, and studio closures.",
        },
        {
          heading: "Memberships",
          body: "Define renewals, cancellation, freezing, failed payments, expiry, transfers, and membership changes.",
        },
        {
          heading: "Conduct and equipment",
          body: "Clients must follow instructor directions, studio etiquette, and equipment rules. Insert rules for belongings, photography, and property damage.",
        },
        {
          heading: "Liability and health",
          body: "Insert counsel-approved limitations, assumptions of risk, emergency terms, and health disclosures without presenting this template as a waiver.",
        },
        {
          heading: "Intellectual property",
          body: "Website and brand materials remain protected subject to approved ownership details.",
        },
        {
          heading: "Law and disputes",
          body: "Insert counsel-approved governing law, venue, notices, complaint steps, and dispute procedure for Lebanon.",
        },
      ]}
    />
  );
}
