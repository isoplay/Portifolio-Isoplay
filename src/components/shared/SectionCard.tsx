import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SectionCardProps {
  children: ReactNode;
  className?: string;
}

export function SectionCard({ children, className = "" }: SectionCardProps) {
  return (
    <article
      className={cn(
        "panel-surface rounded-xl p-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_hsl(270_60%_55%/0.15)]",
        className
      )}
    >
      {children}
    </article>
  );
}