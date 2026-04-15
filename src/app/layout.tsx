import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";

import { AppProviders } from "./providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const siteUrl = "https://ims.dev.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Igor de Souza | Engenheiro de Software",
    template: "%s | Igor de Souza",
  },
  description:
    "Portfólio de Igor de Souza, engenheiro de software focado em aplicações modernas, escaláveis e orientadas à performance.",
  applicationName: "Igor Studio",
  authors: [{ name: "Igor de Souza", url: siteUrl }],
  creator: "Igor de Souza",
  publisher: "Igor de Souza",
  keywords: [
    "Igor de Souza",
    "Engenheiro de Software",
    "Desenvolvedor Full Stack",
    "Next.js",
    "React",
    "Portfólio",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Igor Studio",
    title: "Igor de Souza | Engenheiro de Software",
    description:
      "Portfólio profissional com foco em arquitetura, performance e interfaces modernas.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Igor Studio - Portfolio de Engenharia de Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Igor de Souza | Engenheiro de Software",
    description:
      "Portfólio profissional com foco em arquitetura, performance e interfaces modernas.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#0d0d0d",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <body className="bg-background font-sans text-foreground antialiased">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
