import { siteConfig } from "@/config/siteConfig";
import JournalSection from "@/components/sections/JournalSection";

export const metadata = {
  title: `${siteConfig.pageTitles.blog} | ${siteConfig.brand.legalName}`,
  description: siteConfig.journal.body,
};

export default function BlogPage() {
  return <JournalSection />;
}
