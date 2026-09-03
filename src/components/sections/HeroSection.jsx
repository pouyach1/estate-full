"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";
import Button from "@/components/ui/Button";
import { FindLockup } from "@/components/ui/Icons";

export default function HeroSection() {
  const { hero } = siteConfig;
  const rootRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: rootRef,
    offset: ["start start", "end start"],
  });

  const houseY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const houseScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const cloudLeftX = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const cloudRightX = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const smokeY = useTransform(scrollYProgress, [0, 0.45], ["70%", "0%"]);
  const contentY = useTransform(scrollYProgress, [0, 0.35], ["0%", "20%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.22], [1, 0]);
  const logoOpacity = useTransform(scrollYProgress, [0.08, 0.16, 0.28], [0, 1, 0]);
  const compositeOpacity = useTransform(scrollYProgress, [0.22, 0.32], [0, 1]);

  return (
    <section
      ref={rootRef}
      className="relative mb-[-100vh] h-[350vh] md:h-[500vh] -mt-[8.4rem] md:-mt-[9.8rem]"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.1 }}
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
            className="absolute start-0 end-0 top-[60vh] z-[1] h-[33.4rem] origin-bottom md:h-[170.8rem]"
          >
            <Image
              src={hero.images.house}
              alt=""
              fill
              priority
              className="object-contain"
              sizes="(max-width: 640px) 400px, (max-width: 1640px) 700px, 75vw"
            />
          </motion.div>

          <motion.div
            style={{ opacity: compositeOpacity }}
            className="absolute inset-0 z-[1] flex items-center justify-center"
          >
            <div className="relative h-[10.2rem] w-[23.5rem] overflow-hidden md:h-[42.3rem] md:w-[97.7rem]">
              <Image
                src={hero.images.house}
                alt=""
                fill
                className="object-cover object-center"
                sizes="80vw"
              />
            </div>
          </motion.div>

          <div className="absolute inset-0 z-[2]">
            <motion.div
              style={{ x: cloudLeftX }}
              className="absolute top-[33.7rem] -start-[57.2rem] h-[29.8rem] w-[70.2rem] md:top-[25%] md:-start-[33.72rem] md:h-[47.7rem] md:w-[112.4rem]"
            >
              <Image
                src={hero.images.cloud}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 640px) 75vw, 33vw"
              />
            </motion.div>
            <motion.div
              style={{ x: cloudRightX }}
              className="absolute top-[37.12rem] -end-[41.2rem] h-[23.6rem] w-[55.7rem] md:top-[20%] md:-end-[33.72rem] md:h-[39.7rem] md:w-[93.6rem]"
            >
              <Image
                src={hero.images.cloud}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 640px) 75vw, 33vw"
              />
            </motion.div>
          </div>

          <motion.div
            style={{ opacity: logoOpacity }}
            className="absolute start-1/2 top-1/2 z-[1] h-[10.2rem] w-[23.5rem] -translate-x-1/2 -translate-y-1/2 text-white md:h-[42.3rem] md:w-[97.7rem]"
          >
            <FindLockup className="h-full w-full" />
          </motion.div>

          <motion.div
            style={{ y: smokeY }}
            className="absolute inset-x-0 bottom-0 z-[3] h-[45rem] md:h-[62rem]"
          >
            <Image
              src={hero.images.smoke}
              alt=""
              fill
              priority
              className="object-cover object-top"
              sizes="100vw"
            />
          </motion.div>
        </div>

        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="relative z-[4] grid h-full items-center pb-[15rem] md:pb-[22.8rem]"
        >
          <div className="site-container text-center">
            <motion.h1
              className="display-xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {hero.heading}
            </motion.h1>
            <motion.p
              className="lead-lg mx-auto mt-[1.5rem] max-w-[90rem] text-balance md:mt-[2rem]"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              {hero.lead} <span className="em">{hero.leadEmphasis}</span>
            </motion.p>
            <motion.div
              className="mt-[3rem] flex justify-center md:mt-[4rem]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <Button text={hero.ctaLabel} href={hero.ctaHref} color="primary" />
            </motion.div>
          </div>
        </motion.div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-[10rem] bg-gradient-to-b from-transparent to-white md:h-[30.9rem]" />
      </div>
    </section>
  );
}
