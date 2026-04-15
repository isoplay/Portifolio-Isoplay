import type { Language } from "@/content/portfolio-content";

const languageOptions: Language[] = ["pt", "en"];

interface LanguageToggleProps {
  language: Language;
  onChange: (language: Language) => void;
  compact?: boolean;
}

export function LanguageToggle({ language, onChange, compact = false }: LanguageToggleProps) {
  const buttonClassName = compact ? "px-2 py-1" : "px-2.5 py-1.5";

  return (
    <div className="flex items-center overflow-hidden rounded-md border border-border text-xs font-medium">
      {languageOptions.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          className={`${buttonClassName} transition-colors ${
            language === option ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
