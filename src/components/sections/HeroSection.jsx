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

  const houseY = useTransform(scrollYProgress, [0, 1], ["8%", "-18%"]);
  const houseScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const cloudLeftX = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const cloudRightX = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const contentY = useTransform(scrollYProgress, [0, 0.45], ["0%", "18%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.28], [1, 0]);
  const logoOpacity = useTransform(scrollYProgress, [0.12, 0.22, 0.4], [0, 1, 0]);
  const veilOpacity = useTransform(scrollYProgress, [0.2, 0.55], [0, 1]);

  return (
    <section
      ref={rootRef}
      className="relative mb-[-20vh] h-[280vh] -mt-[8.4rem] md:-mt-[7.8rem]"
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-[#d7e4f2]">
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 5, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src={hero.images.sky}
              alt=""
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          </motion.div>

          <motion.div
            style={{ y: houseY, scale: houseScale }}
            className="absolute inset-x-0 bottom-[-8%] z-[1] h-[72%] origin-bottom md:h-[80%]"
          >
            <Image
              src={hero.images.house}
              alt=""
              fill
              priority
              className="object-contain object-bottom"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </motion.div>

          <div className="absolute inset-0 z-[2] mix-blend-screen opacity-70">
            <motion.div
              style={{ x: cloudLeftX }}
              className="absolute top-[8%] -start-[12%] h-[38%] w-[55%]"
            >
              <Image
                src={hero.images.cloud}
                alt=""
                fill
                className="object-cover"
                sizes="50vw"
              />
            </motion.div>
            <motion.div
              style={{ x: cloudRightX }}
              className="absolute top-[4%] -end-[14%] h-[34%] w-[50%]"
            >
              <Image
                src={hero.images.cloud}
                alt=""
                fill
                className="object-cover"
                sizes="50vw"
              />
            </motion.div>
          </div>

          <motion.div
            style={{ opacity: logoOpacity }}
            className="absolute left-1/2 top-1/2 z-[3] h-[10.2rem] w-[23.5rem] -translate-x-1/2 -translate-y-1/2 text-white drop-shadow-sm md:h-[42.3rem] md:w-[97.7rem]"
            dir="ltr"
          >
            <FindHeroLockup className="h-full w-full" />
          </motion.div>

          <motion.div
            style={{ opacity: veilOpacity }}
            className="absolute inset-0 z-[3] bg-gradient-to-t from-white via-white/80 to-transparent"
          />
        </div>

        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="relative z-[4] grid h-full items-center pb-[12rem] md:pb-[16rem]"
        >
          <div className="site-container text-center">
            <motion.h1
              className="display-xl text-white drop-shadow-[0_8px_24px_rgba(21,23,23,0.25)]"
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
              {hero.lead} <span className="text-white/60">{hero.leadEmphasis}</span>
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

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[4] h-[10rem] bg-gradient-to-b from-transparent to-white md:h-[22rem]" />
      </div>
    </section>
  );
}
