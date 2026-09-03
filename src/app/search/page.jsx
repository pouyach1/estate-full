import PropertyGrid from "@/components/sections/PropertyGrid";
import { siteConfig } from "@/config/siteConfig";

export const metadata = {
  title: `${siteConfig.searchPage.heading} | ${siteConfig.brand.legalName}`,
  description: siteConfig.searchPage.subheading,
};

export default function SearchPage() {
  return (
    <PropertyGrid
      heading={siteConfig.searchPage.heading}
      headingEmphasis={siteConfig.brand.name}
      body={siteConfig.searchPage.subheading}
      items={siteConfig.properties.items}
      showCta={false}
    />
  );
}
