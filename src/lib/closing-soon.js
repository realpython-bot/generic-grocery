import { hoursFor, formatTime } from "./hours.js";

// The home page's "Closing soon" notice, from `leadMinutes` before closing time until the
// store closes. Any other time, and on a closed day, it's an empty string.
export function closingSoonNotice(date, leadMinutes) {
  const today = hoursFor(date);
  if (today.closed) {
    return "";
  }
  const [hour, minute] = today.close.split(":").map(Number);
  const closesAt = hour * 60 + minute;
  const now = date.getHours() * 60 + date.getMinutes();
  if (closesAt > now && closesAt - now <= leadMinutes) {
    return "Closing soon: we close at " + formatTime(today.close);
  }
  return "";
}
