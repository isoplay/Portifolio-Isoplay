"use client";

import { motion } from "framer-motion";
import { Code2, Layers, Zap, type LucideIcon } from "lucide-react";

import { SectionCard } from "@/components/shared/SectionCard";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { useLanguage } from "@/context/language-context";

const highlightIcons: Record<string, LucideIcon> = {
  code: Code2,
  performance: Zap,
  architecture: Layers,
};

export function AboutSection() {
  const { content } = useLanguage();

  return (
    <Section id="about">
      {(isInView) => (
        <>
          <SectionHeading
            eyebrow={content.about.eyebrow}
            title={
              <>
                {content.about.headingStart}
                <br />
                {content.about.headingEnd}
              </>
            }
            description={content.about.description}
            isInView={isInView}
          />

          <div className="grid gap-6 md:grid-cols-3">
            {content.about.highlights.map((highlight, index) => {
              const Icon = highlightIcons[highlight.icon];

              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : undefined}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                >
                  <SectionCard className="p-8">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-3 font-display text-xl font-semibold">{highlight.title}</h3>
                    <p className="leading-relaxed text-muted-foreground">{highlight.description}</p>
                  </SectionCard>
                </motion.div>
              );
            })}
          </div>
        </>
      )}
    </Section>
  );
}
