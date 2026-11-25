import dayjs from "dayjs";
import { turkey } from "./data/turkey.js";

// The pickup days, like "Tuesday, December 22".
const days = document.querySelector("#pickup-days");
for (const day of turkey.pickupDays) {
  const item = document.createElement("li");
  item.textContent = dayjs(day).format("dddd, MMMM D");
  days.append(item);
}

// The sizes to choose from.
const sizes = document.querySelector("#turkey-sizes");
for (const pounds of turkey.sizes) {
  const item = document.createElement("li");
  item.textContent = `${pounds} lb`;
  sizes.append(item);
}
