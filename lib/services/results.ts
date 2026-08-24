export type ServiceResult<T> =
  | { ok: true; data: T }
  | { ok: false; error: { code: string; message: string } };
export function fail(
  message = "We couldn’t complete that request. Please try again.",
): ServiceResult<never> {
  return { ok: false, error: { code: "REQUEST_FAILED", message } };
}
