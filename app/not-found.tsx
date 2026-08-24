import Link from "next/link";
export default function NotFound() {
  return (
    <section className="section narrow">
      <p className="eyebrow">404</p>
      <h1 className="title">That page has moved out of frame.</h1>
      <p>Return to the studio or browse the class schedule.</p>
      <div className="actions">
        <Link className="btn" href="/">
          Home
        </Link>
        <Link className="btn outline" href="/schedule">
          Schedule
        </Link>
      </div>
    </section>
  );
}
