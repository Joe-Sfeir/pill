import { PageHeader } from "@/components/ui/PageHeader";
import { studio } from "@/config/studio";
export function LegalTemplate({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: string;
  sections: { heading: string; body: string }[];
}) {
  return (
    <>
      <PageHeader eyebrow="Legal template" title={title} intro={intro} />
      <article className="section narrow legal">
        <div className="legal-note">
          <strong>Template notice:</strong> This document requires review by a
          qualified Lebanese lawyer and must be adapted to the studio’s actual
          practices before publication.
        </div>
        {sections.map((s) => (
          <section key={s.heading}>
            <h2>{s.heading}</h2>
            <p>{s.body}</p>
          </section>
        ))}
        <h2>Contact</h2>
        <p>
          {studio.name} · {studio.address} · {studio.email}
        </p>
      </article>
    </>
  );
}
