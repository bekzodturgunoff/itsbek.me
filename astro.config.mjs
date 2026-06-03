import {defineConfig} from "astro/config";
import tailwind from "@astrojs/tailwind";
import {fileURLToPath} from 'url';

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
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  },
});
