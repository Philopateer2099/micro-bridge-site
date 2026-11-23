// @ts-check
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";
import { SITE } from "./src/site.ts";

export default defineConfig({
  site: SITE.url,
  trailingSlash: "never",
  output: "static",
  // /install.html is served at /install, which matches trailingSlash "never".
  build: { format: "file" },
  // The pages are hand-written HTML, so keep HTML whitespace rules (Astro 7 defaults to JSX rules).
  compressHTML: true,
  integrations: [sitemap({ filter: (page) => !/\/(404|og)$/.test(new URL(page).pathname) })],
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Instrument Serif",
      cssVariable: "--font-serif",
      weights: ["400"],
      styles: ["normal", "italic"],
      subsets: ["latin"],
      fallbacks: ["Georgia", "serif"],
    },
    {
      provider: fontProviders.google(),
      name: "Space Grotesk",
      cssVariable: "--font-sans",
      weights: ["400 700"],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["system-ui", "sans-serif"],
    },
    {
      provider: fontProviders.google(),
      name: "JetBrains Mono",
      cssVariable: "--font-mono",
      weights: ["400 600"],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["ui-monospace", "Menlo", "monospace"],
    },
  ],
});
