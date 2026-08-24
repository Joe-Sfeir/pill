"use client";
export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="section narrow">
      <h1 className="title">Something slipped.</h1>
      <p>
        We couldn’t load this page. Your information has not been submitted.
      </p>
      <button className="btn" onClick={reset}>
        Try again
      </button>
    </section>
  );
}
