import type { Metadata } from "next";
import { LegalTemplate } from "@/components/legal/LegalTemplate";
export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Template cookie policy.",
};
export default function Page() {
  return (
    <LegalTemplate
      title="Cookie Policy"
      intro="A transparent outline of browser storage and optional tracking."
      sections={[
        {
          heading: "Essential",
          body: "Stores cookie preferences and security-related state. Essential storage cannot be disabled through the preference panel.",
        },
        {
          heading: "Analytics",
          body: "Disabled by default and currently unconfigured. If enabled after consent, list provider, identifiers, purpose, duration, and transfer details.",
        },
        {
          heading: "Marketing",
          body: "Disabled by default and currently unconfigured. No marketing tags may run before affirmative consent.",
        },
        {
          heading: "Your choices",
          body: "Accept all, reject non-essential, customize, or reopen preferences from the footer. Browser controls may also clear stored preferences.",
        },
      ]}
    />
  );
}
