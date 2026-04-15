import dynamic from "next/dynamic";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { AboutSection } from "@/components/sections/AboutSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionFallback } from "@/components/shared/SectionFallback";

const TechStackSection = dynamic(() => import("@/components/sections/TechStackSection").then((module) => module.TechStackSection), {
  loading: () => <SectionFallback />,
});

const ProjectsSection = dynamic(() => import("@/components/sections/ProjectsSection").then((module) => module.ProjectsSection), {
  loading: () => <SectionFallback />,
});

const JourneySection = dynamic(() => import("@/components/sections/JourneySection").then((module) => module.JourneySection), {
  loading: () => <SectionFallback />,
});

const ContactSection = dynamic(() => import("@/components/sections/ContactSection").then((module) => module.ContactSection), {
  loading: () => <SectionFallback />,
});

const SiteFooter = dynamic(() => import("@/components/layout/SiteFooter").then((module) => module.SiteFooter));

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <TechStackSection />
        <ProjectsSection />
        <JourneySection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
