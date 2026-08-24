import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ClassFilters } from "@/components/classes/ClassFilters";
import { ScheduleList } from "@/components/schedule/ScheduleList";
import { MobileNav } from "@/components/navigation/MobileNav";
import { CookieConsent } from "@/components/consent/CookieConsent";
describe("interactive components", () => {
  it("filters class selection", async () => {
    render(<ClassFilters />);
    await userEvent.selectOptions(
      screen.getByLabelText("Intensity"),
      "Challenging",
    );
    expect(screen.queryByText("Foundation")).not.toBeInTheDocument();
    expect(screen.getByText("Full Body")).toBeInTheDocument();
  });
  it("filters schedule for first timers", async () => {
    render(<ScheduleList />);
    await userEvent.click(screen.getByLabelText("First-timer suitable"));
    expect(
      screen.queryByRole("link", { name: "Full Body" }),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Foundation" }),
    ).toBeInTheDocument();
  });
  it("opens and closes mobile navigation", async () => {
    render(<MobileNav />);
    await userEvent.click(screen.getByRole("button", { name: "Open menu" }));
    expect(
      screen.getByRole("navigation", { name: "Mobile navigation" }),
    ).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    expect(
      screen.queryByRole("navigation", { name: "Mobile navigation" }),
    ).not.toBeInTheDocument();
  });
  it("stores rejected cookie preferences", async () => {
    localStorage.clear();
    render(<CookieConsent />);
    expect(
      await screen.findByText("Your privacy, in your control."),
    ).toBeInTheDocument();
    await userEvent.click(
      screen.getByRole("button", { name: "Reject non-essential" }),
    );
    expect(localStorage.length).toBe(1);
  });
});
