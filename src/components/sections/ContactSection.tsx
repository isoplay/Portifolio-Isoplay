"use client";

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
            {/* EMAIL */}
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioLinks.email}&su=Contato pelo portfólio&body=Olá! Vim pelo seu portfólio e gostaria de conversar.`}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 font-medium text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(270_60%_55%/0.4)]"
            >
              <Mail className="h-4 w-4" />
              {content.contact.cta}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            {/* GITHUB */}
            <a
              href={portfolioLinks.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-8 py-3.5 font-medium text-foreground transition-all duration-300 hover:border-primary/50 hover:bg-primary/5"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/5528999216519?text=Olá! Vim pelo seu portfólio e gostaria de conversar."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-8 py-3.5 font-medium text-foreground transition-all duration-300 hover:border-primary/50 hover:bg-primary/5"
            >
              <svg
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
              >
                <g fill="currentColor">
                  <title>whatsapp [#128]</title>
                  <g id="Page-1" stroke="none" strokeWidth="1" fillRule="evenodd">
                    <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -7599.000000)">
                      <g id="icons" transform="translate(56.000000, 160.000000)">
                        <path
                          d="M259.821,7453.12124 C259.58,7453.80344 258.622,7454.36761 257.858,7454.53266 C257.335,7454.64369 256.653,7454.73172 254.355,7453.77943 C251.774,7452.71011 248.19,7448.90097 248.19,7446.36621 C248.19,7445.07582 248.934,7443.57337 250.235,7443.57337 C250.861,7443.57337 250.999,7443.58538 251.205,7444.07952 C251.446,7444.6617 252.034,7446.09613 252.104,7446.24317 C252.393,7446.84635 251.81,7447.19946 251.387,7447.72462 C251.252,7447.88266 251.099,7448.05372 251.27,7448.3478 C251.44,7448.63589 252.028,7449.59418 252.892,7450.36341 C254.008,7451.35771 254.913,7451.6748 255.237,7451.80984 C255.478,7451.90987 255.766,7451.88687 255.942,7451.69881 C256.165,7451.45774 256.442,7451.05762 256.724,7450.6635 C256.923,7450.38141 257.176,7450.3464 257.441,7450.44643 C257.62,7450.50845 259.895,7451.56477 259.991,7451.73382 C260.062,7451.85686 260.062,7452.43903 259.821,7453.12124 M254.002,7439 L253.997,7439 L253.997,7439 C248.484,7439 244,7443.48535 244,7449 C244,7451.18666 244.705,7453.21526 245.904,7454.86076 L244.658,7458.57687 L248.501,7457.3485 C250.082,7458.39482 251.969,7459 254.002,7459 C259.515,7459 264,7454.51465 264,7449 C264,7443.48535 259.515,7439 254.002,7439"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              WhatsApp
            </a>
          </motion.div>
        </>
      )}
    </Section>
  );
}
