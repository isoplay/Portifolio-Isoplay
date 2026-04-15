import { useLanguage } from "@/context/language-context";

export function SiteFooter() {
  const { content } = useLanguage();

  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <span>&copy; {new Date().getFullYear()} Igor de Souza. {content.footer.rights}</span>
        <span>{content.footer.built}</span>
      </div>
    </footer>
  );
}
