import type { Metadata } from "next";
import { LegalTemplate } from "@/components/legal/LegalTemplate";
import { studio } from "@/config/studio";
export const metadata: Metadata = {
  title: "Cancellation Policy",
  description: "Illustrative cancellation policy for the fictional FORME concept.",
};
export default function Page() {
  return (
    <LegalTemplate
      title="Cancellation Policy"
      intro="Illustrative cancellation terms for a fictional studio; no credits, charges, or refunds are processed."
      sections={[
        {
          heading: "Cancellation window",
          body: `The concept uses a cancellation window of ${studio.cancellationWindow}.`,
        },
        {
          heading: "Late cancellation and no-show",
          body: "No credits or charges exist in the demonstration. A production system could return the session credit when cancelled before the configured window.",
        },
        {
          heading: "Waitlist promotion",
          body: "The demonstration waitlist never promotes a visitor automatically and sends no notification.",
        },
        {
          heading: "Refunds and exceptions",
          body: "No payment is collected, so no refund is available. Real commercial terms require client and legal approval before publication.",
        },
        {
          heading: "Studio cancellations",
          body: "A production implementation would notify confirmed clients directly and restore affected session credits.",
        },
      ]}
    />
  );
}
