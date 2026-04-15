import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  isInView: boolean;
  description?: ReactNode;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  isInView,
  description,
  className = "mb-16",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.6 }}
      className={`flex flex-col items-center text-center ${className}`}
    >
      <span className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
        {eyebrow}
      </span>

      <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}