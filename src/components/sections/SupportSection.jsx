"use client";

import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function SupportSection() {
  const { support } = siteConfig;

  return (
    <section id={support.id} className="section-pad bg-white">
      <div className="site-container">
        <div className="grid gap-[4rem] md:grid-cols-[auto_97.6rem]">
          <Reveal>
            <h2 className="display-lg">
              {support.heading}
              <br />
              {support.headingMiddle}{" "}
              <span className="em">{support.headingBuy}</span>
              <br />
              <span className="em">{support.headingAnd}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="body-md max-w-[61rem]">
              {support.body} <span className="em">{support.bodyEmphasis}</span>
            </p>
            <div className="mt-[3rem] md:mt-[4rem]">
              <Button
                text={support.ctaLabel}
                href={support.ctaHref}
                color="secondary"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-[6rem] grid gap-[3rem] md:mt-[10rem] md:grid-cols-3 md:gap-[3rem]">
          {support.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08} className="flex flex-col">
              <div className="relative mb-[3rem] aspect-[1107/940] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="display-md">{item.title}</h3>
              <p className="body-md mt-[1.5rem] flex-1">{item.text}</p>
              <div className="mt-[3rem]">
                <Button text={item.ctaLabel} href={item.href} color="secondary" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
