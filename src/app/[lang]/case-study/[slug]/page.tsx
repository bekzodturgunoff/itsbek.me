import {notFound} from "next/navigation";
import {getDictionary} from "@/i18n";
import {CASE_STUDY_SLUGS, getCaseStudyDataKey} from "@/lib/caseStudies";
import CaseStudyClient from "@/components/CaseStudyClient";

type Props = {
  params: Promise<{lang: string; slug: string}>;
};

export function generateStaticParams() {
  const langs = ["en", "ko", "ru", "uz"];
  const params: {lang: string; slug: string}[] = [];
  for (const lang of langs) {
    for (const slug of CASE_STUDY_SLUGS) {
      params.push({lang, slug});
    }
  }
  return params;
}

export default async function CaseStudyPage({params}: Props) {
  const {lang, slug} = await params;
  const dataKey = getCaseStudyDataKey(slug);

  if (!dataKey) {
    notFound();
  }

  const t = await getDictionary(lang);
  const caseStudyData = (t as unknown as Record<string, unknown>)[dataKey] as Record<string, unknown>;

  if (!caseStudyData) {
    notFound();
  }

  return (
    <CaseStudyClient
      t={t}
      lang={lang}
      slug={slug}
      data={caseStudyData as never}
    />
  );
}
