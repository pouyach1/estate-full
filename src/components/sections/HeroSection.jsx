"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";
import Button from "@/components/ui/Button";
import { FindHeroLockup } from "@/components/ui/Icons";

export default function HeroSection() {
  const { hero } = siteConfig;
  const rootRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: rootRef,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const contentY = useTransform(scrollYProgress, [0, 0.4], ["0%", "22%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.28], [1, 0]);
  const logoOpacity = useTransform(scrollYProgress, [0.14, 0.26, 0.42], [0, 1, 0]);
  const veilOpacity = useTransform(scrollYProgress, [0.22, 0.55], [0.15, 1]);

  return (
    <section
      ref={rootRef}
      className="relative mb-[-12vh] h-[240vh] -mt-[8.4rem] md:-mt-[7.8rem]"
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-ink">
        <motion.div
          style={{ scale: imageScale }}
          className="absolute inset-0"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 5, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src={hero.images.house}
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/35 via-ink/20 to-white/0" />
        <div className="absolute inset-x-0 bottom-0 h-[28%] bg-gradient-to-b from-transparent to-white" />

        <motion.div
          style={{ opacity: logoOpacity }}
          className="pointer-events-none absolute left-1/2 top-1/2 z-[3] h-[10.2rem] w-[23.5rem] -translate-x-1/2 -translate-y-1/2 text-white md:h-[28rem] md:w-[72rem]"
          dir="ltr"
        >
          <FindHeroLockup className="h-full w-full drop-shadow-[0_12px_40px_rgba(21,23,23,0.35)]" />
        </motion.div>

        <motion.div
          style={{ opacity: veilOpacity }}
          className="absolute inset-0 z-[3] bg-white"
        />

        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="relative z-[4] grid h-full items-center pb-[8rem]"
        >
          <div className="site-container text-center">
            <motion.h1
              className="display-xl text-white"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {hero.heading}
            </motion.h1>
            <motion.p
              className="lead-lg mx-auto mt-[1.5rem] max-w-[90rem] text-balance text-white/90 md:mt-[2rem]"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              {hero.lead} <span className="text-white/65">{hero.leadEmphasis}</span>
            </motion.p>
            <motion.div
              className="mt-[3rem] flex justify-center md:mt-[4rem]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <Button text={hero.ctaLabel} href={hero.ctaHref} color="primary-inverse" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
