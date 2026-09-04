import { siteConfig } from "@/config/siteConfig";
import PageIntro from "@/components/sections/PageIntro";
import ContactForm from "@/components/forms/ContactForm";
import ForAgentsSection from "@/components/sections/ForAgentsSection";

export const metadata = {
  title: `${siteConfig.pageTitles.join} | ${siteConfig.brand.legalName}`,
  description: siteConfig.joinPage.body,
};

export default function JoinPage() {
  const { joinPage } = siteConfig;

  return (
    <>
      <PageIntro
        heading={joinPage.heading}
        headingEmphasis={joinPage.headingEmphasis}
        body={joinPage.body}
      />
      <section className="pb-[8rem] md:pb-[12rem]">
        <div className="site-container grid gap-[6rem] md:grid-cols-[1fr_64rem] md:gap-[10rem]">
          <p className="lead-md max-w-[54rem]">
            {siteConfig.agents.body}{" "}
            <span className="em">{siteConfig.agents.bodyEmphasis}</span>
          </p>
          <div className="bg-mist p-[3rem] md:p-[5rem]">
            <h2 className="display-md mb-[3rem]">{joinPage.ctaLabel}</h2>
            <ContactForm source="join" />
          </div>
        </div>
      </section>
      <ForAgentsSection />
    </>
  );
}
