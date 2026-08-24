import type { Metadata } from "next";
import { LegalTemplate } from "@/components/legal/LegalTemplate";
export const metadata: Metadata = {
  title: "Booking Policy",
  description: "Illustrative booking policy for the fictional FORME concept.",
};
export default function Page() {
  return (
    <LegalTemplate
      title="Booking Policy"
      intro="Illustrative rules for this fictional concept; no booking or payment is available."
      sections={[
        {
          heading: "Booking window and capacity",
          body: "Demonstration requests may be submitted up to 30 days ahead. Listed capacities and statuses are illustrative rather than live.",
        },
        {
          heading: "Confirmation",
          body: "The demonstration endpoint returns a receipt, discards submitted details, and never creates a reservation.",
        },
        {
          heading: "First sessions",
          body: "Foundation and selected Core + Stability sessions are marked first-timer suitable in the illustrative timetable.",
        },
        {
          heading: "Arrival and grip socks",
          body: "The concept asks first-time visitors to arrive ten minutes early and wear grip socks for equipment sessions.",
        },
        {
          heading: "Late entry",
          body: "The illustrative policy allows entry up to five minutes after start only when the instructor can accommodate it safely.",
        },
        {
          heading: "Changes and closures",
          body: "In a real implementation, confirmed clients would receive direct notice of substitutions, timetable changes, or closures.",
        },
      ]}
    />
  );
}
