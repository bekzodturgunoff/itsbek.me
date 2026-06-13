export const CASE_STUDY_MAP: Record<string, string> = {
  "octopos-apps": "octoposAppsCaseStudy",
  "bronuz": "bronUzCaseStudy",
  "telegram-bot": "telegramBotCaseStudy",
  "octopos-landing": "caseStudy",
} as const;

export const CASE_STUDY_SLUGS = Object.keys(CASE_STUDY_MAP);

export function getCaseStudyDataKey(slug: string): string | null {
  return CASE_STUDY_MAP[slug] ?? null;
}
