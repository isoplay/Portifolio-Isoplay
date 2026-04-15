import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

import { portfolioContent, type Language } from "@/content/portfolio-content";
import { DEFAULT_LANGUAGE, getInitialLanguage, LANGUAGE_STORAGE_KEY } from "@/utils/language";

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  content: (typeof portfolioContent)[Language];
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getBrowserLanguage(): Language {
  if (typeof window === "undefined") {
    return DEFAULT_LANGUAGE;
  }

  return getInitialLanguage(window.localStorage.getItem(LANGUAGE_STORAGE_KEY));
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => getBrowserLanguage());

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      content: portfolioContent[language],
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
