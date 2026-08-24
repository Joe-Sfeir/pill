export function formatCurrency(
  value: number | null,
  currency: "USD" | "LBP",
  locale = "en-LB",
) {
  return value === null
    ? `${currency} unavailable`
    : new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
        currencyDisplay: "symbol",
      }).format(value);
}
export function convertUsdToLbp(usd: number, rate: number | null) {
  return rate === null ? null : Math.round(usd * rate);
}
