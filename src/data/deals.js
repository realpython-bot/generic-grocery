// This week's deals. Prices are in cents, and `unit` is "each", "lb" or "dozen".
// A deal week runs from Wednesday to Tuesday, like the printed weekly ad.
export const dealWeek = { start: "2026-12-02", end: "2026-12-08" };

export const deals = [
  { item: "Large brown eggs", unit: "dozen", regular: 549, sale: 499 },
  { item: "Bananas", unit: "lb", regular: 69, sale: 59 },
  { item: "Honeycrisp apples", unit: "lb", regular: 249, sale: 199 },
  { item: "Whole milk, 1 gallon", unit: "each", regular: 469, sale: 399 },
  { item: "Sourdough loaf", unit: "each", regular: 599, sale: 449 },
  { item: "Russet potatoes, 5 lb bag", unit: "each", regular: 499, sale: 349 },
  { item: "Butternut squash", unit: "lb", regular: 149, sale: 99 },
  { item: "Fresh cranberries, 12 oz bag", unit: "each", regular: 349, sale: 249 },
];
