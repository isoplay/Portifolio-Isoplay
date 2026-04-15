"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";

import { useLanguage } from "@/context/language-context";

export function HeroSection() {
  const { content } = useLanguage();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Background effects */}
      <div className="background-grid absolute inset-0 opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(270_60%_55%/0.08)_0%,_transparent_70%)]" />
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px] animate-glow-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-accent/10 blur-[100px] animate-glow-pulse"
        style={{ animationDelay: "1.5s" }}
      />
      <div className="absolute left-1/2 top-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/6 blur-[100px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block rounded-full border border-primary/30 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
            {content.hero.badge}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-6 mt-8 font-display text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {content.hero.nameStart}{" "}
          <span className="text-glow text-primary">
            {content.hero.nameEnd}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-4 font-display text-xl font-light text-secondary-foreground sm:text-2xl"
        >
          {content.hero.role}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground"
        >
          {content.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col justify-center gap-4 sm:flex-row"
        >
          <a
            href="#projects"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 font-medium text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(270_60%_55%/0.4)]"
          >
            {content.hero.primaryCta}
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-8 py-3.5 font-medium text-foreground transition-all duration-300 hover:border-primary/50 hover:bg-primary/5"
          >
            <Mail className="h-4 w-4" />
            {content.hero.secondaryCta}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-muted-foreground/30 pt-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-1 w-1 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}