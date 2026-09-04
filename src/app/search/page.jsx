import { siteConfig } from "@/config/siteConfig";
import PageIntro from "@/components/sections/PageIntro";
import SearchExperience from "@/components/sections/SearchExperience";

export const metadata = {
  title: `${siteConfig.searchPage.heading} | ${siteConfig.brand.legalName}`,
  description: siteConfig.searchPage.subheading,
};

export default function SearchPage() {
  const { searchPage } = siteConfig;

  return (
    <>
      <PageIntro
        heading={searchPage.heading}
        headingEmphasis={searchPage.headingEmphasis}
        body={searchPage.subheading}
      />
      <SearchExperience />
    </>
  );
}
