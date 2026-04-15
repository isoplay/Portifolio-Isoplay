"use client";

import Link from "next/link";
import type { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
  variant?: "text" | "button";
  target?: "_blank" | "_self";
  rel?: string;
  className?: string;
}

export function ActionLink({
  href,
  children,
  variant = "text",
  target,
  rel,
  className = "",
}: Props) {
  const baseStyle = "inline-flex items-center gap-2 transition-all duration-200";

  const variants = {
    text: "text-purple-400 hover:underline",
    button:
      "px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white",
  };

  // 🔥 segurança automática pra links externos
  const isExternal = href.startsWith("http");

  return (
    <Link
      href={href}
      target={target || (isExternal ? "_blank" : "_self")}
      rel={rel || (isExternal ? "noopener noreferrer" : undefined)}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}