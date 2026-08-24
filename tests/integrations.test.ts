import { describe, expect, it } from "vitest";
import { whatsappUrl } from "@/lib/whatsapp";
import { sessionToIcs } from "@/lib/dates/ics";
import { sessions } from "@/content/data";
import { parseConsent } from "@/lib/storage/consent";
describe("exports and consent", () => {
  it("encodes WhatsApp text", () => {
    const u = whatsappUrl("first-session", "+961 70 123 456");
    expect(u).toMatch(/^https:\/\/wa.me\/96170123456\?text=/);
    expect(u).not.toContain("health");
  });
  it("exports an individual session calendar", () => {
    const text = sessionToIcs(sessions[0]);
    expect(text).toContain("BEGIN:VEVENT");
    expect(text).toContain("TZID=Asia/Beirut");
  });
  it("parses valid consent", () =>
    expect(
      parseConsent(
        '{"essential":true,"analytics":false,"marketing":false,"version":"1"}',
      )?.analytics,
    ).toBe(false));
  it("rejects malformed consent", () => expect(parseConsent("bad")).toBeNull());
});
