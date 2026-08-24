import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { instructors } from "@/content/data";
import { PageHeader } from "@/components/ui/PageHeader";
export const metadata: Metadata = {
  title: "Instructors",
  description: "Meet two explicitly fictional FORME concept instructor profiles.",
};
export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="The team"
        title="Cueing with clarity."
        intro="Two clearly fictional profiles demonstrate teaching approach and class relationships without invented credentials."
      />
      <section className="section container index-grid">
        {instructors.map((i, n) => (
          <article className="class-card instructor-card" key={i.id}>
            <div className="card-media instructor-media">
              <Image
                src={i.portrait}
                alt={`Fictional FORME instructor profile for ${i.name}`}
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
              />
              <span className="media-caption technical">
                Fictional profile · concept visualization
              </span>
            </div>
            <div>
              <span className="technical">
                0{n + 1} · {i.role}
              </span>
              <h2>{i.name}</h2>
              <p>{i.shortBio}</p>
              <p>{i.specialties.join(" · ")}</p>
            </div>
            <Link href={`/instructors/${i.slug}`}>Full profile →</Link>
          </article>
        ))}
      </section>
    </>
  );
}
