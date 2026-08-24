import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { BookingForm } from "@/components/forms/BookingForm";
export const metadata: Metadata = {
  title: "Book",
  description: "Send a secure booking request to FORME Studio Beirut.",
};
export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Booking request"
        title="Choose your session."
        intro="Try a validated, non-retaining request flow. No live reservation or payment is created."
      />
      <section className="section narrow">
        <BookingForm />
      </section>
    </>
  );
}
