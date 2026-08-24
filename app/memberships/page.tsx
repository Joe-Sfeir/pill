"use client";
import { useState } from "react";
import Link from "next/link";
import { packages } from "@/content/data";
import { PageHeader } from "@/components/ui/PageHeader";
import { whatsappUrl } from "@/lib/whatsapp";
export default function Page() {
  const [currency, setCurrency] = useState<"USD" | "LBP">("USD");
  return (
    <>
      <PageHeader
        eyebrow="Packages + memberships"
        title="Choose your cadence."
        intro="Illustrative pricing for a fictional studio concept—not an offer for sale."
      />
      <section className="section container">
        <div className="filters" role="group" aria-label="Currency">
          <button
            className={`btn ${currency === "USD" ? "" : "outline"}`}
            onClick={() => setCurrency("USD")}
          >
            USD
          </button>
          <button
            className={`btn ${currency === "LBP" ? "" : "outline"}`}
            onClick={() => setCurrency("LBP")}
          >
            LBP
          </button>
        </div>
        <p className="placeholder">
          Currency values use a fixed illustrative rate for comparison. No
          payment or purchase is available.
        </p>
        <div className="index-grid">
          {packages.map((p) => (
            <article className="class-card" key={p.id}>
              <div>
                <span className="tag">{p.type}</span>
                <h2>{p.name}</h2>
                <p>{p.description}</p>
                <strong>
                  {currency === "USD"
                    ? `USD ${p.price.USD}`
                    : `LBP ${p.price.LBP?.toLocaleString("en-US")}`}
                </strong>
                <p>{p.validity}</p>
                <p>{p.cancellationSummary}</p>
              </div>
              <a
                href={whatsappUrl("membership")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ask on WhatsApp →
              </a>
            </article>
          ))}
        </div>
        <div className="actions">
          <Link className="btn" href="/first-session">
            Book first session
          </Link>
          <Link className="btn outline" href="/booking-policy">
            Booking policy
          </Link>
          <Link className="btn outline" href="/cancellation-policy">
            Cancellation policy
          </Link>
        </div>
      </section>
    </>
  );
}
