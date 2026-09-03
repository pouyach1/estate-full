import { siteConfig } from "@/config/siteConfig";
import Features from "@/components/sections/Features";
import SupportSection from "@/components/sections/SupportSection";

export const metadata = {
  title: `Services | ${siteConfig.brand.legalName}`,
  description: siteConfig.features.brief,
};

export default function ServicesPage() {
  return (
    <>
      <Features />
      <SupportSection />
    </>
  );
}
