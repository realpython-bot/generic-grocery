import dayjs from "dayjs";
import { turkey } from "./data/turkey.js";
import { formatTime } from "./lib/hours.js";
import { formatPrice } from "./lib/prices.js";
import { preorderCutoff, turkeyPrice } from "./lib/turkey.js";

// The pickup days, each with the time its pre-orders close, like "Tuesday, December 22
// (order by Saturday, December 19, 6 p.m.)".
const days = document.querySelector("#pickup-days");
for (const day of turkey.pickupDays) {
  const cutoff = dayjs(preorderCutoff(day));
  const item = document.createElement("li");
  item.textContent =
    `${dayjs(day).format("dddd, MMMM D")} ` +
    `(order by ${cutoff.format("dddd, MMMM D")}, ${formatTime(cutoff.format("HH:mm"))})`;
  days.append(item);
}

// The sizes to choose from, with their prices.
const sizes = document.querySelector("#turkey-sizes");
for (const pounds of turkey.sizes) {
  const item = document.createElement("li");
  item.textContent = `${pounds} lb: ${formatPrice(turkeyPrice(pounds, turkey.pricePerPound))}`;
  sizes.append(item);
}
