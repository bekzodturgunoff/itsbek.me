import { languages, defaultLang } from '@/i18n';

export function getStaticPaths() {
  return Object.keys(languages)
    .filter((lang) => lang !== defaultLang)
    .map((lang) => ({ params: { lang } }));
}
