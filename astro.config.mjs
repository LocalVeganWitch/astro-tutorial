import { defineConfig, fontProviders } from "astro/config";
import preact from "@astrojs/preact";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://example.com",

  integrations: [
    preact(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

});