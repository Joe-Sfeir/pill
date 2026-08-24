"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookingSchema, type BookingInput } from "@/lib/validation/forms";
import { classes, instructors } from "@/content/data";
export function BookingForm({
  firstSession = false,
}: {
  firstSession?: boolean;
}) {
  const [state, setState] = useState<"idle" | "success" | "failure">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<BookingInput>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      clientType: firstSession ? "New" : "New",
      contactMethod: "WhatsApp",
      experience: firstSession ? "First time" : "First time",
      consent: false,
      policy: false,
      marketing: false,
      whatsappOptIn: false,
      website: "",
    },
  });
  const onSubmit = async (data: BookingInput) => {
    setState("idle");
    try {
      const r = await fetch("/api/bookings", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!r.ok) throw new Error();
      setState("success");
      reset();
    } catch {
      setState("failure");
    }
  };
  if (state === "success")
    return (
      <div className="placeholder" role="status">
        <h2>Demo receipt issued.</h2>
        <p>
          Your request was validated, no personal data was retained, and no
          booking was created.
        </p>
        <button className="btn outline" onClick={() => setState("idle")}>
          Try another request
        </button>
      </div>
    );
  const f = (name: keyof BookingInput) => (
    <span className="error">{errors[name]?.message as string}</span>
  );
  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      aria-describedby="form-note"
    >
      <p id="form-note" className="placeholder">
        This safe demonstration validates the journey and discards submitted
        details. Health-related notes are never placed in URLs, analytics, or
        WhatsApp messages.
      </p>
      {Object.keys(errors).length > 0 && (
        <div className="error-summary" role="alert">
          <strong>Please correct the highlighted fields.</strong>
        </div>
      )}
      <div className="form-grid">
        <div className="field">
          <label htmlFor="fullName">Full name</label>
          <input id="fullName" autoComplete="name" {...register("fullName")} />
          {f("fullName")}
        </div>
        <div className="field">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            {...register("phone")}
          />
          {f("phone")}
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            {...register("email")}
          />
          {f("email")}
        </div>
        <div className="field">
          <label htmlFor="contactMethod">Preferred contact</label>
          <select id="contactMethod" {...register("contactMethod")}>
            <option>WhatsApp</option>
            <option>Phone</option>
            <option>Email</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="clientType">Client</label>
          <select id="clientType" {...register("clientType")}>
            <option>New</option>
            <option>Returning</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="preferredClass">Preferred class</label>
          <select id="preferredClass" {...register("preferredClass")}>
            <option value="">Choose</option>
            {classes.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
          {f("preferredClass")}
        </div>
        <div className="field">
          <label htmlFor="preferredDate">Preferred date</label>
          <input
            id="preferredDate"
            type="date"
            {...register("preferredDate")}
          />
          {f("preferredDate")}
        </div>
        <div className="field">
          <label htmlFor="preferredTime">Preferred time</label>
          <input
            id="preferredTime"
            type="time"
            {...register("preferredTime")}
          />
          {f("preferredTime")}
        </div>
        <div className="field">
          <label htmlFor="experience">Experience level</label>
          <select id="experience" {...register("experience")}>
            <option>First time</option>
            <option>Some experience</option>
            <option>Experienced</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="preferredInstructor">
            Preferred instructor (optional)
          </label>
          <select id="preferredInstructor" {...register("preferredInstructor")}>
            <option value="">No preference</option>
            {instructors.map((i) => (
              <option value={i.id} key={i.id}>
                {i.name}
              </option>
            ))}
          </select>
        </div>
        <div className="field full">
          <label htmlFor="limitationNote">
            Injury or limitation note (optional, sensitive)
          </label>
          <textarea id="limitationNote" {...register("limitationNote")} />
          <small>
            Share only what the instructor needs to prepare safely. This is not
            medical advice.
          </small>
          {f("limitationNote")}
        </div>
        <div className="sr-only">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            tabIndex={-1}
            autoComplete="off"
            {...register("website")}
          />
        </div>
        <label className="full">
          <input type="checkbox" {...register("consent")} /> I understand this
          is a non-retaining demonstration and no booking will be created. {f("consent")}
        </label>
        <label className="full">
          <input type="checkbox" {...register("policy")} /> I have read the
          booking policy. {f("policy")}
        </label>
        <label>
          <input type="checkbox" {...register("marketing")} /> Optional
          marketing opt-in
        </label>
        <label>
          <input type="checkbox" {...register("whatsappOptIn")} /> Optional
          WhatsApp opt-in
        </label>
      </div>
      <button className="btn" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending…" : "Send booking request"}
      </button>
      {state === "failure" && (
        <p role="alert" className="error">
          The request failed. Please retry or contact the studio directly.
        </p>
      )}
      <div className="status" aria-live="polite">
        {isSubmitting && "Submitting securely."}
      </div>
    </form>
  );
}
