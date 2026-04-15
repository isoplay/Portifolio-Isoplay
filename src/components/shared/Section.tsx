"use client";

import { useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface SectionProps {
  id: string;
  children: (isInView: boolean) => ReactNode;
  className?: string;
  containerClassName?: string;
}

export function Section({
  id,
  children,
  className = "px-6 py-36",
  containerClassName = "mx-auto max-w-6xl",
}: SectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px 0px",
  });

  return (
    <section id={id} ref={sectionRef} className={className}>
      <div className={containerClassName}>
        {children(isInView)}
      </div>
    </section>
  );
}