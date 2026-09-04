"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";
import Button from "@/components/ui/Button";
import { FindHeroLockup } from "@/components/ui/Icons";
import { MOTION } from "@/lib/motion";

export default function HeroSection() {
  const { hero } = siteConfig;
  const rootRef = useRef(null);
  const reduce = useReducedMotion();
  const [ready, setReady] = useState(false);

  // FIND delays play ~200ms after mount for a calmer entrance
  useEffect(() => {
    if (reduce) {
      setReady(true);
      return undefined;
    }
    const id = window.setTimeout(() => setReady(true), 200);
    return () => window.clearTimeout(id);
  }, [reduce]);

  const { scrollYProgress } = useScroll({
    target: rootRef,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.18]);
  const contentY = useTransform(scrollYProgress, [0, 0.4], ["0%", reduce ? "0%" : "22%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.28], [1, reduce ? 1 : 0]);
  const logoOpacity = useTransform(
    scrollYProgress,
    [0.14, 0.26, 0.42],
    reduce ? [0, 0, 0] : [0, 1, 0],
  );
  const veilOpacity = useTransform(
    scrollYProgress,
    [0.22, 0.55],
    reduce ? [0.15, 0.15] : [0.15, 1],
  );

  return (
    <section
      ref={rootRef}
      className="relative mb-[-12vh] h-[240vh] -mt-[8.4rem] md:-mt-[7.8rem]"
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-ink">
        <motion.div
          style={{ scale: imageScale }}
          className="absolute inset-0 will-change-transform"
        >
          <motion.div
            className="absolute inset-0"
            initial={reduce ? false : { scale: 1.1 }}
            animate={ready || reduce ? { scale: 1 } : { scale: 1.1 }}
            transition={MOTION.heroImage}
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
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={MOTION.heroTitle}
            >
              {hero.heading}
            </motion.h1>
            <motion.p
              className="lead-lg mx-auto mt-[1.5rem] max-w-[90rem] text-balance text-white/90 md:mt-[2rem]"
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              transition={MOTION.heroLead}
            >
              {hero.lead} <span className="text-white/65">{hero.leadEmphasis}</span>
            </motion.p>
            <motion.div
              className="mt-[3rem] flex justify-center md:mt-[4rem]"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={MOTION.heroCta}
            >
              <Button text={hero.ctaLabel} href={hero.ctaHref} color="primary-inverse" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
