// Holiday hours, by date ("YYYY-MM-DD"). They replace the regular hours on that day.
// A day with `closed: true` has no hours at all.
export const holidays = {
  "2026-11-26": { name: "Thanksgiving", open: "08:00", close: "13:00" },
  "2026-12-24": { name: "Christmas Eve", open: "07:00", close: "15:00" },
  "2026-12-25": { name: "Christmas Day", closed: true },
  "2026-12-31": { name: "New Year's Eve", open: "07:00", close: "18:00" },
  "2027-01-01": { name: "New Year's Day", open: "10:00", close: "17:00" },
  "2027-07-04": { name: "Independence Day", open: "08:00", close: "15:00" },
};
