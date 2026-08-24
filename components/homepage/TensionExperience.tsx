"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const stages = [
  {
    n: "01",
    name: "Align",
    copy: "Set the body and equipment with deliberate precision.",
    data: "Position · breath · range",
    crop: "50% 35%",
  },
  {
    n: "02",
    name: "Engage",
    copy: "Build connection before adding pace or complexity.",
    data: "Control · setup · intent",
    crop: "48% 43%",
  },
  {
    n: "03",
    name: "Resist",
    copy: "Move against measured resistance through a controlled range.",
    data: "Tempo · 4–8 counts",
    crop: "52% 52%",
  },
  {
    n: "04",
    name: "Hold",
    copy: "Stay composed while the work accumulates.",
    data: "Isometric focus · steady breath",
    crop: "46% 62%",
  },
  {
    n: "05",
    name: "Release",
    copy: "Exit with the same control used to begin.",
    data: "Return · reset · recover",
    crop: "50% 72%",
  },
];

export function TensionExperience() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            setActive(Number((entry.target as HTMLElement).dataset.stage));
        }),
      { rootMargin: "-35% 0px -45%", threshold: 0.1 },
    );
    refs.current.forEach((node) => node && observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section tension">
      <div className="container">
        <p className="eyebrow">Signature sequence</p>
        <h2 className="section-title">Under Tension</h2>
        <div className="tension-grid">
          <div className="tension-visual">
            <Image
              src="/samples/pilates/images/tension-detail.webp"
              alt="Hands controlling resistance straps with deliberate tension"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className="tension-image"
              style={{ objectPosition: stages[active].crop }}
            />
            <div className="tension-overlay" aria-hidden="true">
              <span className="technical">FORM / 0{active + 1}</span>
              <span className="tension-line">
                <i
                  style={{ transform: `scaleX(${(active + 1) / stages.length})` }}
                />
              </span>
              <strong>{stages[active].name}</strong>
            </div>
          </div>
          <div>
            {stages.map((stage, index) => (
              <article
                className={`stage ${active === index ? "is-active" : ""}`}
                data-stage={index}
                ref={(node) => {
                  refs.current[index] = node;
                }}
                key={stage.name}
                tabIndex={0}
                onFocus={() => setActive(index)}
                onMouseEnter={() => setActive(index)}
              >
                <span className="stage-num technical">{stage.n} / 05</span>
                <h3>{stage.name}</h3>
                <p>{stage.copy}</p>
                <p className="technical">{stage.data}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
