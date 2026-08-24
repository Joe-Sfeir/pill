import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { studio } from "@/config/studio";
import { whatsappUrl } from "@/lib/whatsapp";
import { WaitlistForm } from "@/components/forms/WaitlistForm";
export const metadata: Metadata = {
  title: "Contact",
  description: "Contact FORME Studio Beirut by WhatsApp, phone, email, or map.",
};
export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Ask us directly."
        intro="Explore the safe demonstration, then contact Spline about building a similar studio system."
      />
      <section className="section container split">
        <div>
          <h2>Studio</h2>
          <p>{studio.address}</p>
          <p>{studio.openingHours.join(" · ")}</p>
          <a
            className="btn"
            href={whatsappUrl("general")}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp inquiry
          </a>
        </div>
        <div>
          <p>
            <a href={`tel:${studio.phone}`}>{studio.phone}</a>
          </p>
          <p>
            <a href={`mailto:${studio.email}`}>{studio.email}</a>
          </p>
          <p>{studio.parking}</p>
          <a
            className="btn outline"
            href={studio.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open map
          </a>
        </div>
      </section>
      <section className="section narrow">
        <h2>Waitlist inquiry</h2>
        <p className="placeholder">
          This safe demonstration validates and discards the request. It creates
          no waitlist place and sends no notification.
        </p>
        <WaitlistForm />
        <div className="actions">
          <a
            className="btn outline"
            href={whatsappUrl("schedule")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ask on WhatsApp instead
          </a>
        </div>
      </section>
    </>
  );
}
