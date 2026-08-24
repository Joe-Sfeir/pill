import Link from "next/link";
import Image from "next/image";
import { classes, faqs, instructors, packages } from "@/content/data";
import { ScheduleList } from "@/components/schedule/ScheduleList";
import { studio } from "@/config/studio";
import { TensionExperience } from "@/components/homepage/TensionExperience";
import { whatsappUrl } from "@/lib/whatsapp";
export default function Home() {
  return (
    <>
      <section className="hero">
        <div
          className="hero-media"
          role="img"
          aria-label="Athlete performing controlled resistance work in a warm sculptural studio"
        />
        <div className="container hero-content">
          <p className="eyebrow">Beirut · Pilates-inspired · Resistance</p>
          <h1>Strength, held under tension.</h1>
          <p className="hero-copy">
            Slow, controlled resistance training designed to challenge strength,
            stability, and endurance.
          </p>
          <div className="actions">
            <Link className="btn" href="/first-session">
              Book your first session
            </Link>
            <Link className="btn outline" href="/schedule">
              View schedule
            </Link>
          </div>
          <p className="technical" style={{ marginTop: "2rem" }}>
            {studio.address} · Fictional campaign visualization
          </p>
        </div>
      </section>
      <section className="utility" aria-label="Quick actions">
        <Link href="/schedule">
          <span className="technical">01</span>
          <br />
          This week’s schedule
        </Link>
        <Link href="/first-session">
          <span className="technical">02</span>
          <br />
          New here?
        </Link>
        <Link href="/memberships">
          <span className="technical">03</span>
          <br />
          Packages
        </Link>
        <a
          href={whatsappUrl("general")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="technical">04</span>
          <br />
          WhatsApp
        </a>
      </section>
      <section className="section container split">
        <div>
          <p className="eyebrow">The method</p>
          <h2 className="section-title">Precision before pace.</h2>
        </div>
        <div>
          <p className="statement">
            Movement is slowed down so alignment, resistance, and control become
            impossible to ignore.
          </p>
          <p>
            This fictional method combines Pilates-inspired principles with
            resistance-based group training to demonstrate how a complete studio
            experience can be presented clearly.
          </p>
          <Link className="btn outline" href="/method">
            Explore the method
          </Link>
        </div>
      </section>
      <TensionExperience />
      <section className="section container">
        <p className="eyebrow">Class index</p>
        <h2 className="section-title">Choose the work.</h2>
        <div className="index-grid">
          {classes.slice(0, 5).map((c) => (
            <article className="class-card" key={c.id}>
              <div className="card-media">
                <Image
                  src="/images/class-group.webp"
                  alt="Two clients practicing controlled resistance movement"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
              </div>
              <div>
                <span className="tag">{c.intensity}</span>
                <h3>{c.name}</h3>
                <p>{c.shortDescription}</p>
              </div>
              <Link href={`/classes/${c.slug}`}>Explore →</Link>
            </article>
          ))}
        </div>
      </section>
      <section className="section container">
        <div className="split">
          <div>
            <p className="eyebrow">This week</p>
            <h2 className="section-title">Find your time.</h2>
          </div>
          <Link className="btn outline" href="/schedule">
            Full schedule
          </Link>
        </div>
        <ScheduleList limit={3} />
      </section>
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container split">
          <div>
            <p className="eyebrow">Instructors</p>
            <h2 className="section-title">Guidance with presence.</h2>
          </div>
          <div>
            {instructors.map((i) => (
              <article
                className="rule"
                style={{ padding: "2rem 0" }}
                key={i.id}
              >
                <h3>{i.name}</h3>
                <p>{i.shortBio}</p>
                <Link href={`/instructors/${i.slug}`}>
                  Meet {i.name.split(" ")[0]} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section container">
        <p className="eyebrow">Your first session</p>
        <h2 className="section-title">Know the room before the work.</h2>
        <div className="utility">
          {[
            "Arrive",
            "Check in",
            "Meet your instructor",
            "Learn the equipment",
            "Complete the session",
            "Recover + rebook",
          ].map((x, i) => (
            <div key={x}>
              <span className="technical">0{i + 1}</span>
              <br />
              {x}
            </div>
          ))}
        </div>
        <div className="actions">
          <Link className="btn" href="/first-session">
            Plan your first session
          </Link>
        </div>
      </section>
      <section className="section container split">
        <div className="gallery">
          <div className="gallery-image">
            <Image
              src="/images/studio-room.webp"
              alt="Warm sculptural resistance-training studio with limestone and linen"
              fill
              sizes="(max-width: 900px) 100vw, 60vw"
            />
            <span className="media-caption technical">
              Studio campaign study
            </span>
          </div>
          <div className="gallery-image portrait-crop">
            <Image
              src="/images/instructor-editorial.webp"
              alt="Fictional FORME instructor portrait in warm natural light"
              fill
              sizes="(max-width: 900px) 100vw, 30vw"
            />
            <span className="media-caption technical">
              Fictional instructor study
            </span>
          </div>
        </div>
        <div>
          <p className="eyebrow">The studio</p>
          <h2 className="section-title">
            An intimate space for exacting work.
          </h2>
          <p>
            A complete fictional studio environment demonstrates arrival,
            access, equipment, and booking information without representing an
            operating venue.
          </p>
          <Link className="btn outline" href="/studio">
            Visit the studio
          </Link>
        </div>
      </section>
      <section className="section container">
        <p className="eyebrow">Ways to practice</p>
        <h2 className="section-title">Packages without pressure.</h2>
        <p className="placeholder">
          Illustrative prices for this fictional concept. No payment is
          collected.
        </p>
        <div className="index-grid">
          {packages.slice(0, 3).map((p) => (
            <article className="class-card" key={p.id}>
              <div>
                <span className="tag">{p.type}</span>
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <strong>USD {p.price.USD} · demo price</strong>
              </div>
              <Link href="/memberships">Compare →</Link>
            </article>
          ))}
        </div>
      </section>
      <section className="section container split">
        <div>
          <p className="eyebrow">Concept proof</p>
          <h2 className="section-title">A complete client journey.</h2>
        </div>
        <div className="placeholder">
          <strong>Explore before you enquire.</strong>
          <p>
            Browse classes, filter the timetable, compare packages, download a
            calendar file, and complete a non-retaining booking demonstration.
          </p>
        </div>
      </section>
      <section className="section narrow faq">
        <p className="eyebrow">Questions</p>
        <h2 className="section-title">Before you arrive.</h2>
        {faqs.slice(0, 3).map((f) => (
          <details key={f.q}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
        <Link className="btn outline" href="/faq">
          All questions
        </Link>
      </section>
      <section className="section container split">
        <div>
          <p className="eyebrow">Beirut</p>
          <h2 className="section-title">Find your way to FORME.</h2>
          <p>{studio.address}</p>
          <p>{studio.parking}</p>
        </div>
        <div>
          <a
            className="btn outline"
            href={studio.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open map
          </a>
          <a
            className="btn"
            href={whatsappUrl("general")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ask on WhatsApp
          </a>
        </div>
      </section>
      <section
        className="section"
        style={{ background: "var(--accent)", color: "white" }}
      >
        <div className="container split">
          <h2 className="section-title">Move slowly. Work deeply.</h2>
          <div>
            <p>
              Start with a beginner-appropriate session and learn the equipment
              with care.
            </p>
            <Link className="btn" href="/book">
              Request a session
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
