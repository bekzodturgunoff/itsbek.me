export const SITE_URL = "https://itsbek.me";

export const LANGUAGES = {
  en: "English",
  ko: "한국어",
  ru: "Русский",
  uz: "O'zbek",
} as const;

export const DEFAULT_LANG = "en" as const;

export const OG_LOCALE_MAP: Record<string, string> = {
  en: "en_US",
  ko: "ko_KR",
  ru: "ru_RU",
  uz: "uz_UZ",
};

export interface ChapterScene {
  id: string;
  label: string;
  index: number;
}

export const CHAPTER_SCENES: ChapterScene[] = [
  { id: "origin", label: "ORIGIN", index: 1 },
  { id: "craft", label: "THE CRAFT", index: 2 },
  { id: "work", label: "THE WORK", index: 3 },
  { id: "proof", label: "PROOF", index: 4 },
  { id: "vision", label: "VISION", index: 5 },
  { id: "contact", label: "CONTACT", index: 6 },
];
