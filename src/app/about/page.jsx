import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";
import PageIntro from "@/components/sections/PageIntro";
import ForAgentsSection from "@/components/sections/ForAgentsSection";
import { photos } from "@/config/photos";

export const metadata = {
  title: `About | ${siteConfig.brand.legalName}`,
  description: siteConfig.aboutPage.body,
};

export default function AboutPage() {
  const { aboutPage, why } = siteConfig;

  return (
    <>
      <PageIntro
        heading={aboutPage.heading}
        headingEmphasis={aboutPage.headingEmphasis}
        body={aboutPage.body}
      />
      <section className="pb-[8rem] md:pb-[12rem]">
        <div className="site-container">
          <div className="relative aspect-[16/8] overflow-hidden bg-mist">
            <Image
              src={photos.about}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className="mt-[6rem] grid gap-[4rem] border-y border-ink/10 py-[4rem] md:mt-[10rem] md:grid-cols-3 md:py-[8rem]">
            {aboutPage.stats.map((stat) => (
              <div key={stat.label}>
                <p className="display-lg">{stat.value}</p>
                <p className="body-md mt-[1rem] text-ink/55">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="lead-md mx-auto mt-[6rem] max-w-[80rem] md:mt-[10rem]">
            {why.body} <span className="em">{why.bodyEmphasis}</span>
          </p>
        </div>
      </section>
      <ForAgentsSection />
    </>
  );
}
