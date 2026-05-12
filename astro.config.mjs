import {defineConfig} from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://itsbek.me",
  devToolbar: {enabled: false},
  integrations: [tailwind({})],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ru", "ko"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
