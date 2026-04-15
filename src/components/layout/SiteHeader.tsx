"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

import { portfolioLinks, sectionOrder } from "@/content/portfolio-content";
import { LanguageToggle } from "@/components/shared/LanguageToggle";
import { useLanguage } from "@/context/language-context";

function getBrandParts(label: string) {
  const [name, domain] = label.split(".");
  return { name, domain };
}

function getActiveSection(sectionIds: string[]) {
  const visibleSections = sectionIds
    .map((sectionId) => {
      const element = document.getElementById(sectionId);
      return {
        id: sectionId,
        top: element ? element.offsetTop - 120 : Number.POSITIVE_INFINITY,
      };
    })
    .filter((section) => Number.isFinite(section.top) && window.scrollY >= section.top);

  return visibleSections.at(-1)?.id ?? "";
}

export function SiteHeader() {
  const { language, setLanguage, content } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const brand = getBrandParts(portfolioLinks.brandLabel);

  const updateNavigationState = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
    setActiveSection(getActiveSection(sectionOrder));
  }, []);

  useEffect(() => {
    const handleScroll = () => updateNavigationState();

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [updateNavigationState]);

  const navigationItems = sectionOrder.map((sectionId) => ({
    id: sectionId,
    label: content.nav[sectionId],
    href: `#${sectionId}`,
  }));

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "border-b border-border bg-background/75 shadow-[0_1px_20px_hsl(0_0%_0%/0.3)] backdrop-blur-xl" : ""
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="font-display text-lg font-bold text-foreground">
          {brand.name}
          <span className="text-primary">.</span>
          {brand.domain}
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navigationItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={item.href}
                className={`relative text-sm transition-colors duration-200 ${
                  isActive ? "font-medium text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                {isActive ? (
                  <motion.span
                    layoutId="active-navigation"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                ) : null}
              </a>
            );
          })}

          <LanguageToggle language={language} onChange={setLanguage} />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageToggle language={language} onChange={setLanguage} compact />
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((current) => !current)}
            className="p-2 text-foreground"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen ? (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-b border-border bg-background/95 px-6 pb-6 backdrop-blur-xl md:hidden"
        >
          {navigationItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-3 transition-colors ${
                  isActive ? "font-medium text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </motion.div>
      ) : null}
    </motion.header>
  );
}
