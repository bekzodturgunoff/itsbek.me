import en from "./en";
import ko from "./ko";
import ru from "./ru";
import uz from "./uz";
import type {I18n} from "./types";
import {LANGUAGES, DEFAULT_LANG} from "@/lib/constants";

const dictionaries: Record<string, I18n> = {
  en,
  ko,
  ru,
  uz,
};

export function getDictionary(lang: string): I18n {
  return dictionaries[lang] ?? dictionaries[DEFAULT_LANG];
}

export {LANGUAGES, DEFAULT_LANG};
export type {I18n};
