import { weeklyHours } from "./data/hours.js";
import { holidays } from "./data/holidays.js";
import { formatHours, hoursFor, isOpen } from "./lib/hours.js";
import { badgeText } from "./lib/badge.js";
import { closingSoonNotice } from "./lib/closing-soon.js";

const today = new Date();

// The "Open now" badge, holiday hours included.
const badge = document.querySelector("#open-badge");
badge.textContent = badgeText(today);
badge.classList.toggle("closed", !isOpen(today));

// "Closing soon" in the store's last hour.
document.querySelector("#closing-soon").textContent = closingSoonNotice(today, 60);

// Today's hours, at the top of the page.
const todayHours = hoursFor(today);
const todayText = document.querySelector("#today-hours");
todayText.textContent = todayHours.holiday
  ? `Today (${todayHours.holiday}): ${formatHours(todayHours)}`
  : `Today: ${formatHours(todayHours)}`;

// The regular hours, one row per day.
const hoursTable = document.querySelector("#weekly-hours");
for (const { day, open, close } of weeklyHours) {
  const row = document.createElement("tr");
  const dayCell = document.createElement("th");
  dayCell.scope = "row";
  dayCell.textContent = day;
  const timeCell = document.createElement("td");
  timeCell.textContent = formatHours({ open, close });
  row.append(dayCell, timeCell);
  hoursTable.append(row);
}

// Every holiday's hours, in date order.
const holidayList = document.querySelector("#holiday-hours");
const byDate = Object.entries(holidays).sort(([a], [b]) => a.localeCompare(b));

for (const [date, holiday] of byDate) {
  const item = document.createElement("li");
  const day = new Date(`${date}T12:00:00`).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  item.textContent = `${holiday.name}, ${day}: ${formatHours(holiday)}`;
  holidayList.append(item);
}
