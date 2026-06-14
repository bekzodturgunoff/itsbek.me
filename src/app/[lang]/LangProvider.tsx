"use client";

import {createContext, useContext, useEffect} from "react";

const LangContext = createContext<string>("en");

export function useLang() {
  return useContext(LangContext);
}

export default function LangProvider({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: string;
}) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LangContext.Provider value={lang}>
      {children}
    </LangContext.Provider>
  );
}
