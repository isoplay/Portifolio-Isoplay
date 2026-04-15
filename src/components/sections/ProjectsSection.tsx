"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

import { ActionLink } from "@/components/shared/ActionLink";
import { SectionCard } from "@/components/shared/SectionCard";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { useLanguage } from "@/context/language-context";

export function ProjectsSection() {
  const { content } = useLanguage();

  return (
    <Section id="projects">
      {(isInView) => (
        <>
          <SectionHeading eyebrow={content.projects.eyebrow} title={content.projects.heading} isInView={isInView} />

          <div className="grid gap-6 md:grid-cols-2">
            {content.projects.items.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : undefined}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
              >
                <SectionCard className="group relative overflow-hidden p-8">
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative z-10">
                    <h3 className="mb-3 font-display text-xl font-semibold transition-colors group-hover:text-primary">
                      {project.title}
                    </h3>
                    <p className="mb-5 leading-relaxed text-muted-foreground">{project.description}</p>

                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-semibold tracking-wide text-primary"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4">
                      <ActionLink href={project.repositoryUrl} variant="text" target="_blank" rel="noreferrer">
                        <Github className="h-4 w-4" />
                        GitHub
                      </ActionLink>

                      {project.liveUrl ? (
                        <ActionLink href={project.liveUrl} variant="text" target="_blank" rel="noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          {content.projects.viewProject}
                        </ActionLink>
                      ) : null}
                    </div>
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
