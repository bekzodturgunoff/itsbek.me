import {getDictionary} from "@/i18n";
import MainContent from "./MainContent";

type Props = {
  params: Promise<{lang: string}>;
};

export default async function LangPage({params}: Props) {
  const {lang} = await params;
  const t = getDictionary(lang);

  return <MainContent t={t} />;
}
