import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";

export default {
  site: "https://itsbek.me",
  adapter: vercel(),
  devToolbar: {enabled: false},
  integrations: [tailwind({})],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ru", "ko"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
};
