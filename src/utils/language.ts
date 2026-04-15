export type Language = "pt" | "en";

export const DEFAULT_LANGUAGE: Language = "pt";

export const LANGUAGE_STORAGE_KEY = "language";

export function getInitialLanguage(value?: string | null): Language {
  if (value === "pt" || value === "en") {
    return value;
  }

  // fallback seguro
  if (typeof window !== "undefined") {
    const browserLang = navigator.language.toLowerCase();

    if (browserLang.startsWith("pt")) return "pt";
    if (browserLang.startsWith("en")) return "en";
  }

  return DEFAULT_LANGUAGE;
}