import {getDictionary} from "@/i18n";
import MainContent from "./[lang]/MainContent";
import LangProvider from "./[lang]/LangProvider";

export default function RootPage() {
  const t = getDictionary("en");

  return (
    <LangProvider lang="en">
      <MainContent t={t} />
    </LangProvider>
  );
}
