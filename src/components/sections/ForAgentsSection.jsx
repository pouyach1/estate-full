"use client";

import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import ImageReveal from "@/components/ui/ImageReveal";

export default function ForAgentsSection() {
  const { agents } = siteConfig;

  return (
    <section id="agents" className="section-pad">
      <div id="join" className="site-container">
        <div className="grid items-start gap-[4rem] md:grid-cols-[1fr_97.6rem] md:gap-[8rem]">
          <div className="hidden md:block">
            <p className="caption">{agents.label}</p>
            <ImageReveal className="relative mt-[69%] aspect-[364/431] max-h-[43.1rem] w-[36.4rem] overflow-hidden">
              <Image
                src={agents.portraitSmall}
                alt=""
                fill
                className="object-cover"
                sizes="364px"
              />
            </ImageReveal>
          </div>
          <div className="flex flex-col gap-[4rem] md:gap-[8rem]">
            <Reveal>
              <h2 className="display-lg">
                {agents.heading} <span className="em">{agents.headingEmphasis}</span>
              </h2>
            </Reveal>
            <ImageReveal className="relative aspect-[365/450] overflow-hidden md:aspect-[976/688]">
              <Image
                src={agents.portraitLarge}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 976px"
              />
            </ImageReveal>
            <Reveal>
              <p className="lead-md">
                {agents.body} <span className="em">{agents.bodyEmphasis}</span>
              </p>
              <div className="mt-[3rem] md:mt-[4rem]">
                <Button text={agents.ctaLabel} href={agents.ctaHref} />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
