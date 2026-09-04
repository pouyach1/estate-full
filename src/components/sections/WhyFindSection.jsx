"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import ImageReveal from "@/components/ui/ImageReveal";
import { siteConfig } from "@/config/siteConfig";

export default function WhyFindSection() {
  const { why } = siteConfig;

  return (
    <section id={why.id} className="section-pad-sm bg-white">
      <div className="site-container">
        <div className="grid gap-[4rem] md:grid-cols-[auto_97.6rem]">
          <Reveal>
            <h2 className="display-lg">{why.heading}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lead-md max-w-[81rem]">
              {why.body} <span className="em">{why.bodyEmphasis}</span>
            </p>
          </Reveal>
        </div>
        <div className="mt-[4rem] overflow-hidden md:mt-[8rem]">
          <ImageReveal>
            <div className="relative aspect-[16/9] overflow-hidden bg-mist">
              {why.videoSrc ? (
                <video
                  src={why.videoSrc}
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={why.image}
                  className="absolute inset-0 h-full w-full max-w-none object-cover"
                />
              ) : (
                <Image
                  src={why.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              )}
            </div>
          </ImageReveal>
        </div>
      </div>
    </section>
  );
}
