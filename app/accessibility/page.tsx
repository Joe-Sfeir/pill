import type { Metadata } from "next";
import { LegalTemplate } from "@/components/legal/LegalTemplate";
export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: "Accessibility statement and contact route.",
};
export default function Page() {
  return (
    <LegalTemplate
      title="Accessibility Statement"
      intro="Digital accessibility commitments and clearly identified concept-level physical access information."
      sections={[
        {
          heading: "Digital commitment",
          body: "The website targets WCAG 2.2 Level AA with keyboard navigation, focus visibility, reduced motion, semantic landmarks, labelled forms, and non-color status cues.",
        },
        {
          heading: "Known limitations",
          body: "A future production client would require a fresh audit after adding third-party booking embeds, analytics, maps, translations, or replacement media.",
        },
        {
          heading: "Physical studio access",
          body: "The fictional layout includes a step-free route, 90 cm clear doorway, accessible washroom, seated waiting area, and adjustable lighting. These are not claims about a real venue.",
        },
        {
          heading: "Feedback",
          body: "Send feedback to spline@e19company.com or call +961 76 300 011 with the page, barrier, assistive technology, and preferred response method.",
        },
      ]}
    />
  );
}
