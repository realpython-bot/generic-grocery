import js from "@eslint/js";
import globals from "globals";

export default [
  // Vite's build output, and Generic Curbside's widget, which is their code.
  { ignores: ["dist/", "src/vendor/"] },
  // The site's code runs in the browser.
  { ...js.configs.recommended, languageOptions: { globals: globals.browser } },
  // The check script and Vite's config run in Node.
  { files: ["scripts/**", "vite.config.js"], languageOptions: { globals: globals.node } },
];
