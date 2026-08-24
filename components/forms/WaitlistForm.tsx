"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { waitlistSchema, type WaitlistInput } from "@/lib/validation/forms";
import { sessions, classes } from "@/content/data";
export function WaitlistForm() {
  const [status, setStatus] = useState<"idle" | "success" | "failure">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<WaitlistInput>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: { contactMethod: "WhatsApp", consent: false, website: "" },
  });
  const submit = async (data: WaitlistInput) => {
    setStatus("idle");
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error();
      setStatus("success");
      reset();
    } catch {
      setStatus("failure");
    }
  };
  if (status === "success")
    return (
      <div className="placeholder" role="status">
        <strong>Demo receipt issued.</strong>
        <p>
          Your request was validated, no personal data was retained, and no
          waitlist place was created.
        </p>
        <button className="btn outline" onClick={() => setStatus("idle")}>
          Try another
        </button>
      </div>
    );
  return (
    <form noValidate onSubmit={handleSubmit(submit)}>
      <div className="form-grid">
        <div className="field full">
          <label htmlFor="sessionId">Demonstration session</label>
          <select id="sessionId" {...register("sessionId")}>
            <option value="">Choose a session</option>
            {sessions
              .filter((s) => s.status === "Waitlist")
              .map((s) => (
                <option key={s.id} value={s.id}>
                  {classes.find((c) => c.id === s.classId)?.name} · {s.date}{" "}
                  {s.startTime}
                </option>
              ))}
          </select>
          <span className="error">{errors.sessionId?.message}</span>
        </div>
        <div className="field">
          <label htmlFor="wait-name">Full name</label>
          <input id="wait-name" {...register("fullName")} />
          <span className="error">{errors.fullName?.message}</span>
        </div>
        <div className="field">
          <label htmlFor="wait-phone">Phone</label>
          <input id="wait-phone" type="tel" {...register("phone")} />
          <span className="error">{errors.phone?.message}</span>
        </div>
        <div className="field">
          <label htmlFor="wait-email">Email</label>
          <input id="wait-email" type="email" {...register("email")} />
          <span className="error">{errors.email?.message}</span>
        </div>
        <div className="field">
          <label htmlFor="wait-contact">Preferred contact</label>
          <select id="wait-contact" {...register("contactMethod")}>
            <option>WhatsApp</option>
            <option>Phone</option>
            <option>Email</option>
          </select>
        </div>
        <div className="sr-only">
          <label htmlFor="wait-website">Website</label>
          <input id="wait-website" tabIndex={-1} {...register("website")} />
        </div>
        <label className="full">
          <input type="checkbox" {...register("consent")} /> I understand this
          is a non-retaining demonstration and no waitlist place will be created.{" "}
          <span className="error">{errors.consent?.message}</span>
        </label>
      </div>
      <button className="btn" disabled={isSubmitting}>
        {isSubmitting ? "Sending…" : "Join demonstration waitlist"}
      </button>
      {status === "failure" && (
        <p className="error" role="alert">
          The inquiry failed. Please retry or contact the studio.
        </p>
      )}
    </form>
  );
}
