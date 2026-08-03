import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/ui/PageHeader";
import { BookingForm } from "@/components/forms/BookingForm";
import { studio } from "@/config/studio";
export const metadata: Metadata = {
  title: "First Session",
  description: "What to expect and how to request your first FORME session.",
};
const steps = [
  ["Arrive", "Arrive [X] minutes early. Final arrival guidance is pending."],
  [
    "Check in",
    "Meet the front desk and confirm the information needed for class.",
  ],
  [
    "Meet your instructor",
    "Share relevant injuries, limitations, or pregnancy information privately.",
  ],
  [
    "Learn the equipment",
    "Your instructor will explain setup, resistance, and transitions.",
  ],
  [
    "Complete the session",
    "Begin with a first-timer-suitable class and work at an appropriate pace.",
  ],
  [
    "Recover + rebook",
    "Hydrate, ask questions, and discuss your next suitable class.",
  ],
];
export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="New to FORME"
        title="Your first session, clearly mapped."
        intro={studio.firstSessionOffer}
      />
      <section className="section container split">
        <div className="first-session-sticky">
          <div className="journey-image">
            <Image src="/images/studio-room.png" alt="Quiet studio prepared before a first session" fill sizes="(max-width: 900px) 100vw, 50vw" priority />
          </div>
          <h2 className="section-title">Before you move.</h2>
          <p>
            Bring water and comfortable clothing. Grip socks may be required;
            the studio must confirm this policy. Late entry may not be
            permitted.
          </p>
          <p className="placeholder">
            This guidance is practical information, not medical advice. Seek
            professional guidance when appropriate.
          </p>
        </div>
        <ol>
          {steps.map(([n, c], i) => (
            <li className="stage rule" style={{ minHeight: "auto" }} key={n}>
              <span className="technical">0{i + 1}</span>
              <h3>{n}</h3>
              <p>{c}</p>
            </li>
          ))}
        </ol>
      </section>
      <section className="section narrow rule">
        <h2 className="section-title">Request your start.</h2>
        <BookingForm firstSession />
      </section>
    </>
  );
}
