import dayjs from "dayjs";

// When pre-orders for a pickup day close: at 6 p.m., three days before it. `pickupDay` is
// "YYYY-MM-DD", and the result is a Date.
export function preorderCutoff(pickupDay) {
  return dayjs(pickupDay).subtract(3, "day").hour(18).toDate();
}

// The price of a turkey of `pounds` at `pricePerPound` cents a pound, in whole cents.
export function turkeyPrice(pounds, pricePerPound) {
  return Math.round(pounds * pricePerPound);
}
