"use client";

import Link from "next/link";

import { useLanguage } from "@/context/language-context";

export default function NotFoundPage() {
  const { content } = useLanguage();

  return (
    <main className="flex min-h-screen items-center justify-center bg-muted px-6">
      <div className="text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">404</p>
        <h1 className="mb-4 font-display text-4xl font-bold">{content.notFound.title}</h1>
        <p className="mb-6 text-lg text-muted-foreground">{content.notFound.description}</p>
        <Link href="/" className="font-medium text-primary underline underline-offset-4 hover:text-primary/90">
          {content.notFound.cta}
        </Link>
      </div>
    </main>
  );
}
