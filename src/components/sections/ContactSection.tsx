import { motion } from "framer-motion";
import { ArrowUpRight, Github, Mail } from "lucide-react";

import { portfolioLinks } from "@/content/portfolio-content";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { useLanguage } from "@/context/language-context";

export function ContactSection() {
  const { content } = useLanguage();

  return (
    <Section id="contact" containerClassName="mx-auto max-w-4xl text-center">
      {(isInView) => (
        <>
          <SectionHeading
            eyebrow={content.contact.eyebrow}
            title={
              <>
                {content.contact.headingStart}
                <br />
                <span className="text-primary">{content.contact.headingEnd}</span>
              </>
            }
            description={content.contact.description}
            isInView={isInView}
            className="mb-12"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center gap-4 sm:flex-row"
          >
            <a
              href={`mailto:${portfolioLinks.email}`}
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 font-medium text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(270_60%_55%/0.4)]"
            >
              <Mail className="h-4 w-4" />
              {content.contact.cta}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            <a
              href={portfolioLinks.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-8 py-3.5 font-medium text-foreground transition-all duration-300 hover:border-primary/50 hover:bg-primary/5"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </motion.div>
        </>
      )}
    </Section>
  );
}
