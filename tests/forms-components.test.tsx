import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BookingForm } from "@/components/forms/BookingForm";
import { WaitlistForm } from "@/components/forms/WaitlistForm";
describe("request forms", () => {
  it("announces booking validation errors", async () => {
    render(<BookingForm firstSession />);
    await userEvent.click(
      screen.getByRole("button", { name: "Send booking request" }),
    );
    expect(await screen.findByRole("alert")).toHaveTextContent(
      "Please correct",
    );
  });
  it("validates the waitlist selection", async () => {
    render(<WaitlistForm />);
    await userEvent.click(
      screen.getByRole("button", { name: "Join demonstration waitlist" }),
    );
    expect(
      await screen.findByText(
        "Too small: expected string to have >=1 characters",
      ),
    ).toBeInTheDocument();
  });
});
