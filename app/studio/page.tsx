import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/ui/PageHeader";
import { studio } from "@/config/studio";
export const metadata: Metadata = {
  title: "Studio",
  description:
    "Studio environment, arrival, access, etiquette, and safety information.",
};
export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="The space"
        title="A room built for attention."
        intro="A complete fictional studio environment demonstrating how access, arrival, facilities, and etiquette can be presented."
      />
      <section className="section container">
        <div className="gallery">
          <div className="gallery-image studio-panorama">
            <Image
              src="/images/studio-room.webp"
              alt="Sculptural studio room with generic resistance equipment"
              fill
              sizes="(max-width: 900px) 100vw, 65vw"
              priority
            />
            <span className="media-caption technical">
              Main training room · campaign visualization
            </span>
          </div>
          <div className="gallery-image">
            <Image
              src="/images/tension-detail.webp"
              alt="Close detail of resistance straps held under tension"
              fill
              sizes="(max-width: 900px) 100vw, 35vw"
            />
            <span className="media-caption technical">
              Material + resistance study
            </span>
          </div>
          <div className="gallery-image group-crop">
            <Image
              src="/images/class-group.webp"
              alt="Inclusive controlled group movement in the studio"
              fill
              sizes="(max-width: 900px) 100vw, 35vw"
            />
            <span className="media-caption technical">
              Group practice · campaign visualization
            </span>
          </div>
        </div>
      </section>
      <section className="section container split">
        <div>
          <h2>Equipment</h2>
          <p>
            Classes use generic specialized resistance equipment. Brand names
            and affiliations are intentionally omitted until verified.
          </p>
          <h2>Facilities</h2>
          <p>Concept amenities include two private changing rooms, lockers, a washroom, filtered water, and a seated waiting niche.</p>
          <h2>Access</h2>
          <p>
            The concept layout includes a step-free route, 90 cm clear doorway,
            accessible washroom, seated waiting area, and adjustable lighting.
            These are illustrative specifications, not claims about a real site.
          </p>
        </div>
        <div>
          <h2>Arrival + parking</h2>
          <p>{studio.address}</p>
          <p>{studio.parking}</p>
          <h2>Etiquette</h2>
          <p>
            Arrive on time, follow equipment instructions, respect personal
            space, and keep phones silent.
          </p>
          <h2>Health + safety</h2>
          <p>
            Disclose relevant concerns privately. Instructors may modify or
            decline participation for safety.
          </p>
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
    </>
  );
}
