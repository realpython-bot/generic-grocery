import { defineConfig } from "vite";

// The site has five pages. Vite builds only index.html unless it's told about the others.
export default defineConfig({
  build: {
    rolldownOptions: {
      input: ["index.html", "deals.html", "departments.html", "pickup.html", "turkey.html"],
    },
  },
});
