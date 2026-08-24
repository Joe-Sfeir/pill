import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
export const metadata: Metadata = {
  title: "Method",
  description:
    "How FORME approaches controlled resistance and Pilates-inspired movement.",
};
export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="The method"
        title="Control is the intensity."
        intro="A clear, low-impact approach built around alignment, tempo, resistance, and intentional transitions."
      />
      <section className="section container split">
        <div>
          <h2 className="section-title">Not rushed. Not passive.</h2>
        </div>
        <div>
          <p className="statement">
            Slow movement creates time to notice form—and makes every count
            matter.
          </p>
          <p>
            The method currently uses safe, generic terminology. It does not
            imply a licensed affiliation, medical outcome, or official equipment
            brand.
          </p>
          <h3>Five ideas</h3>
          <ol>
            <li>Align before loading.</li>
            <li>Engage with intent.</li>
            <li>Resist through a controlled range.</li>
            <li>Hold without losing form.</li>
            <li>Release with precision.</li>
          </ol>
          <Link className="btn" href="/first-session">
            Start with Foundation
          </Link>
        </div>
      </section>
    </>
  );
}
