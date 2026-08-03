import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { instructors } from "@/content/data";
import { PageHeader } from "@/components/ui/PageHeader";
export const metadata: Metadata = {
  title: "Instructors",
  description:
    "Meet the FORME instructor team; all current biographies are placeholders.",
};
export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="The team"
        title="Cueing with clarity."
        intro="Instructor names, biographies, specialties, and credentials are clearly marked placeholders pending verification."
      />
      <section className="section container index-grid">
        {instructors.map((i, n) => (
          <article className="class-card instructor-card" key={i.id}>
            <div className="card-media instructor-media">
              <Image src="/images/instructor-editorial.png" alt="Editorial placeholder portrait; final instructor photography pending" fill sizes="(max-width: 900px) 100vw, 50vw" />
              <span className="media-caption technical">Portrait placeholder</span>
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
