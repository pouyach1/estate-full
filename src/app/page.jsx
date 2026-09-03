import HeroSection from "@/components/sections/HeroSection";
import WhyFindSection from "@/components/sections/WhyFindSection";
import IdentitySection from "@/components/sections/IdentitySection";
import ProcessSection from "@/components/sections/ProcessSection";
import ForAgentsSection from "@/components/sections/ForAgentsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import Features from "@/components/sections/Features";
import SupportSection from "@/components/sections/SupportSection";
import PropertyGrid from "@/components/sections/PropertyGrid";
import JournalSection from "@/components/sections/JournalSection";
import CtaSection from "@/components/sections/CtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyFindSection />
      <IdentitySection />
      <ProcessSection />
      <ForAgentsSection />
      <TestimonialsSection />
      <PropertyGrid />
      <Features />
      <SupportSection />
      <JournalSection />
      <CtaSection />
    </>
  );
}
