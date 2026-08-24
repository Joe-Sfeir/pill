import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { classes, instructors, sessions } from "@/content/data";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
export function generateStaticParams() {
  return classes.map((c) => ({ slug: c.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = classes.find((x) => x.slug === slug);
  return c
    ? { title: c.name, description: c.shortDescription }
    : { title: "Class not found" };
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = classes.find((x) => x.slug === slug);
  if (!c) notFound();
  const teachers = instructors.filter((i) => c.instructorIds.includes(i.id));
  const upcoming = sessions.filter((s) => s.classId === c.id);
  return (
    <>
      <header className="page-head">
        <div className="container">
          <Breadcrumbs
            items={[{ label: "Classes", href: "/classes" }, { label: c.name }]}
          />
          <p className="eyebrow">
            {c.level} · {c.duration} minutes
          </p>
          <h1 className="title">{c.name}</h1>
          <p>{c.fullDescription}</p>
          <div className="actions">
            <Link className="btn" href="/book">
              Request this class
            </Link>
            <Link className="btn outline" href="/schedule">
              View schedule
            </Link>
          </div>
        </div>
      </header>
      <section className="section container split">
        <div>
          <h2 className="section-title">What to expect</h2>
          <ul>
            {c.expect.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="technical">Intensity</p>
          <p>{c.intensity}</p>
          <p className="technical">Equipment</p>
          <p>{c.equipment.join(", ")}</p>
          <p className="technical">Preparation</p>
          <ul>
            {c.preparation.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
          {!c.firstTimerSuitable && (
            <p className="placeholder">
              This demonstration class is not marked first-timer suitable. Begin
              with Foundation or contact the studio.
            </p>
          )}
        </div>
      </section>
      <section className="section container rule">
        <h2>Instructors</h2>
        {teachers.map((i) => (
          <p key={i.id}>
            <Link href={`/instructors/${i.slug}`}>{i.name}</Link> — {i.role}
          </p>
        ))}
        <h2>Upcoming demonstration sessions</h2>
        {upcoming.length ? (
          upcoming.map((s) => (
            <p key={s.id}>
              {s.date} at {s.startTime} · {s.status}
            </p>
          ))
        ) : (
          <p>No sessions listed.</p>
        )}
      </section>
    </>
  );
}
