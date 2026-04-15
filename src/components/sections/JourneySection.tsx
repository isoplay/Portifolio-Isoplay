import { motion } from "framer-motion";

import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { useLanguage } from "@/context/language-context";

export function JourneySection() {
  const { content } = useLanguage();

  return (
    <Section id="journey">
      {(isInView) => (
        <>
          <SectionHeading eyebrow={content.journey.eyebrow} title={content.journey.heading} isInView={isInView} />

          <div className="relative">
            <div className="absolute bottom-0 left-0 top-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

            <div className="space-y-16">
              {content.journey.milestones.map((milestone, index) => (
                <motion.article
                  key={milestone.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : undefined}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                  className={`relative flex flex-col gap-8 md:flex-row ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="shadow-glow absolute left-0 mt-2 h-3 w-3 -translate-x-[5px] rounded-full bg-primary md:left-1/2 md:-translate-x-1.5" />

                  <div className={`pl-8 md:w-1/2 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{milestone.phase}</span>
                    <h3 className="mb-2 mt-1 font-display text-xl font-semibold">{milestone.title}</h3>
                    <p className="leading-relaxed text-muted-foreground">{milestone.description}</p>
                  </div>

                  <div className="hidden md:block md:w-1/2" />
                </motion.article>
              ))}
            </div>
          </div>
        </>
      )}
    </Section>
  );
}
