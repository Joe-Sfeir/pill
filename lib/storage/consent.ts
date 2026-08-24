export type ConsentPreferences = {
  essential: true;
  analytics: boolean;
  marketing: boolean;
  version: string;
};
export function parseConsent(value: string | null): ConsentPreferences | null {
  if (!value) return null;
  try {
    const x = JSON.parse(value) as ConsentPreferences;
    return x.essential === true &&
      typeof x.analytics === "boolean" &&
      typeof x.marketing === "boolean"
      ? x
      : null;
  } catch {
    return null;
  }
}
