import type {Metadata} from "next";
import {SITE_URL, LANGUAGES, OG_LOCALE_MAP, DEFAULT_LANG} from "@/lib/constants";
import LangProvider from "./LangProvider";

type Props = {
  children: React.ReactNode;
  params: Promise<{lang: string}>;
};

export async function generateStaticParams() {
  return Object.keys(LANGUAGES).map((lang) => ({lang}));
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {lang} = await params;
  const locale = lang in OG_LOCALE_MAP ? OG_LOCALE_MAP[lang] : OG_LOCALE_MAP[DEFAULT_LANG];
  const baseUrl = SITE_URL;
  const path = `/${lang}`;

  const alternates: Record<string, string> = {};
  for (const l of Object.keys(LANGUAGES)) {
    alternates[l] = `${baseUrl}/${l}`;
  }
  alternates["x-default"] = `${baseUrl}/${DEFAULT_LANG}`;

  return {
    alternates: {
      languages: alternates,
      canonical: `${baseUrl}/${lang}`,
    },
    openGraph: {
      locale,
      siteName: "itsbek.me",
      url: `${baseUrl}${path}`,
      images: [
        {
          url: "/screen.png",
          width: 1200,
          height: 630,
          alt: "itsbek.me",
        },
      ],
    },
    other: {},
  };
}

export default async function LangLayout({children, params}: Props) {
  const {lang} = await params;

  return (
    <LangProvider lang={lang}>
      {children}
    </LangProvider>
  );
}
