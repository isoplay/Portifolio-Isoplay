"use client";

import { motion } from "framer-motion";

import { SectionCard } from "@/components/shared/SectionCard";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { useLanguage } from "@/context/language-context";

export function TechStackSection() {
  const { content } = useLanguage();

  return (
    <Section id="stack">
      {(isInView) => (
        <>
          <SectionHeading eyebrow={content.stack.eyebrow} title={content.stack.heading} isInView={isInView} />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {content.stack.categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : undefined}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
              >
                <SectionCard>
                  <h3 className="mb-5 font-display text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                    {category.label}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground transition-colors hover:bg-primary/15 hover:text-primary"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </SectionCard>
              </motion.div>
            ))}
          </div>
        </>
      )}
    </Section>
  );
}
