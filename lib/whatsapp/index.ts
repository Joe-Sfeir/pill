import { studio } from "@/config/studio";
export type InquiryType =
  "general" | "first-session" | "membership" | "schedule";
const messages: Record<InquiryType, string> = {
  general:
    "Hello Spline, I viewed the FORME studio concept and would like to discuss a similar website and booking system.",
  "first-session":
    "Hello Spline, I tried the FORME first-session demonstration and would like to discuss a similar booking flow.",
  membership:
    "Hello Spline, I viewed the FORME package demonstration and would like to discuss a similar system.",
  schedule:
    "Hello Spline, I tried the FORME schedule demonstration and would like to discuss a similar system.",
};
export function whatsappUrl(type: InquiryType, number = studio.whatsapp) {
  const clean = number.replace(/\D/g, "");
  if (!clean) return "#";
  return `https://wa.me/${clean}?text=${encodeURIComponent(messages[type])}`;
}
