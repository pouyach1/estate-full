"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";
import Reveal from "@/components/ui/Reveal";

export default function IdentitySection() {
  const { identity } = siteConfig;

  return (
    <section className="section-pad-sm md:py-[15rem]">
      <div className="site-container">
        <Reveal>
          <h2 className="display-lg mx-auto mb-[4rem] flex justify-center text-center md:mb-[8rem]">
            {identity.heading} <span className="em">&nbsp;{identity.headingEmphasis}</span>
          </h2>
        </Reveal>
        <div className="relative ms-[1.8rem] flex justify-center md:ms-[6.7rem]">
          {identity.chevrons.map((src, index) => (
            <motion.div
              key={src}
              initial={{ x: "-10%", scale: 0.8, opacity: 0.1 }}
              whileInView={{ x: "0%", scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="-ms-[1.8rem] h-[11.8rem] w-[9.3rem] shrink-0 md:-ms-[6.7rem] md:h-[44rem] md:w-[34.6rem]"
              style={{
                WebkitMask:
                  'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 346 440"><path fill="%23000" d="M183.98 440 346 220 183.98 0H0l162.02 220L0 440h183.98Z"/></svg>\') center / contain no-repeat',
                mask: 'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 346 440"><path fill="%23000" d="M183.98 440 346 220 183.98 0H0l162.02 220L0 440h183.98Z"/></svg>\') center / contain no-repeat',
              }}
            >
              <Image
                src={src}
                alt=""
                width={346}
                height={440}
                className="h-full w-full object-cover"
              />
            </motion.div>
          ))}
        </div>
        <Reveal>
          <p className="lead-md mx-auto mt-[4rem] max-w-[81.2rem] text-balance md:mt-[8rem] md:text-center">
            {identity.body} <span className="em">{identity.bodyEmphasis}</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
