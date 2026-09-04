"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { siteConfig } from "@/config/siteConfig";
import Button from "@/components/ui/Button";
import { EASE_LUXURY, MOTION } from "@/lib/motion";

/**
 * FIND hero motion reconstruction (Framer Motion + Lenis):
 * - Tall scroll stage (350vh mobile / 500vh desktop), sticky 100vh viewport
 * - Layers: sky → house → clouds → smoke → content → white veil
 * - Load: sky 1.1→1 (5s expo), clouds rise, house fade/rise, copy stagger
 * - Scroll scrub: house up+scale, clouds ±X, smoke reveal, copy fade/scale
 * - Phase 16: NO English FIND lockup / letter mask during transition
 */

const CLOUD_BASE = {
  1: {
    left: "0%",
    right: undefined,
    bottom: "20%",
    width: "70%",
    height: "55%",
    flipped: false,
  },
  2: {
    left: "auto",
    right: "0%",
    bottom: "12%",
    width: "80%",
    height: "60%",
    flipped: true,
  },
};

export default function HeroSection() {
  const { hero, brand } = siteConfig;
  const reduce = useReducedMotion();
  const stageRef = useRef(null);
  const overlapRef = useRef(null);
  const [ready, setReady] = useState(false);

  const { scrollYProgress: progress } = useScroll({
    target: stageRef,
    offset: ["start start", "end start"],
  });

  /* Layer timing maps (normalized 0→1) — from FIND ScrollTrigger scrub */
  const houseY = useTransform(progress, [0, 1], ["0%", "-40%"]);
  const houseScale = useTransform(progress, [0, 1], [1, 1.3]);
  const cloud1X = useTransform(progress, [0, 1], ["0%", "15%"]);
  const cloud2X = useTransform(progress, [0, 1], ["0%", "-15%"]);
  const smokeY = useTransform(progress, [0, 1], ["70%", "0%"]);
  const contentY = useTransform(progress, [0, 1], ["0%", "20%"]);
  const contentScale = useTransform(progress, [0, 1], [1, 0.9]);
  const veilY = useTransform(progress, [0.1, 0.8], ["18%", "0%"]);

  const contentFadeRef = useRef(null);
  const veilFadeRef = useRef(null);

  /* Opacity MotionValues do not paint reliably here; drive fades from progress. */
  useMotionValueEvent(progress, "change", (v) => {
    if (reduce) return;
    if (contentFadeRef.current) {
      const o = v <= 0 ? 1 : v >= 0.3 ? 0 : 1 - v / 0.3;
      contentFadeRef.current.style.opacity = String(o);
    }
    if (veilFadeRef.current) {
      const o = v <= 0.1 ? 0 : v >= 0.55 ? 1 : (v - 0.1) / 0.45;
      veilFadeRef.current.style.opacity = String(o);
    }
  });

  /* Seed fades once refs exist (refresh / first paint may skip a "change" at 0). */
  useEffect(() => {
    if (reduce) return undefined;
    const v = progress.get();
    if (contentFadeRef.current) {
      const o = v <= 0 ? 1 : v >= 0.3 ? 0 : 1 - v / 0.3;
      contentFadeRef.current.style.opacity = String(o);
    }
    if (veilFadeRef.current) {
      const o = v <= 0.1 ? 0 : v >= 0.55 ? 1 : (v - 0.1) / 0.45;
      veilFadeRef.current.style.opacity = String(o);
    }
    return undefined;
  }, [progress, reduce]);

  const { scrollYProgress: overlapProgress } = useScroll({
    target: overlapRef,
    offset: ["start end", "end start"],
  });
  const overlapSmokeY = useTransform(overlapProgress, [0, 1], ["0%", "-18%"]);
  const overlapFadeRef = useRef(null);
  useMotionValueEvent(overlapProgress, "change", (v) => {
    if (reduce || !overlapFadeRef.current) return;
    const o =
      v <= 0.15 ? 1 : v >= 0.85 ? 0.15 : 1 - ((v - 0.15) / 0.7) * 0.85;
    overlapFadeRef.current.style.opacity = String(o);
  });
  useEffect(() => {
    if (reduce || !overlapFadeRef.current) return undefined;
    const v = overlapProgress.get();
    const o =
      v <= 0.15 ? 1 : v >= 0.85 ? 0.15 : 1 - ((v - 0.15) / 0.7) * 0.85;
    overlapFadeRef.current.style.opacity = String(o);
    return undefined;
  }, [overlapProgress, reduce]);

  useEffect(() => {
    const id = window.setTimeout(() => setReady(true), reduce ? 0 : 200);
    return () => window.clearTimeout(id);
  }, [reduce]);

  return (
    <>
      <section
        ref={stageRef}
        id="hero"
        className="relative -mt-[8.4rem] mb-[-100vh] h-[350vh] w-full md:-mt-[7.8rem] md:h-[500vh]"
      >
        <div className="sticky top-0 h-svh w-full overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            {/* 1 — Sky / back */}
            <motion.div
              className="absolute inset-0 z-0 origin-bottom will-change-transform"
              initial={reduce ? false : { scale: 1.1 }}
              animate={ready || reduce ? { scale: 1 } : { scale: 1.1 }}
              transition={
                reduce ? { duration: 0 } : { duration: 5, ease: EASE_LUXURY }
              }
            >
              <Image
                src={hero.images.sky}
                alt=""
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
              />
            </motion.div>

            {/* 2 — House (from below fold; scroll raises + scales) */}
            <motion.div
              className="absolute inset-x-0 bottom-0 top-[60vh] z-[1] origin-bottom"
              initial={reduce ? false : { opacity: 0, y: 48 }}
              animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 48 }}
              transition={
                reduce
                  ? { duration: 0 }
                  : { duration: 1.35, delay: 0.35, ease: EASE_LUXURY }
              }
            >
              <motion.div
                className="relative h-full w-full origin-bottom will-change-transform"
                style={reduce ? undefined : { y: houseY, scale: houseScale }}
              >
                <Image
                  src={hero.images.house}
                  alt={brand.name}
                  fill
                  priority
                  sizes="100vw"
                  className="object-contain object-bottom"
                />
              </motion.div>
            </motion.div>

            {/* 3–4 — Cloud layers (independent X parallax) */}
            {[1, 2].map((id) => {
              const cfg = CLOUD_BASE[id];
              const xMotion = id === 1 ? cloud1X : cloud2X;
              return (
                <motion.div
                  key={id}
                  className="pointer-events-none absolute z-[2]"
                  style={{
                    left: cfg.left,
                    right: cfg.right,
                    bottom: cfg.bottom,
                    width: cfg.width,
                    height: cfg.height,
                  }}
                  initial={reduce ? false : { y: "28%", opacity: 0.85 }}
                  animate={
                    ready
                      ? { y: "0%", opacity: 1 }
                      : { y: "28%", opacity: 0.85 }
                  }
                  transition={
                    reduce
                      ? { duration: 0 }
                      : {
                          duration: 1.6,
                          delay: 0.25 + id * 0.12,
                          ease: EASE_LUXURY,
                        }
                  }
                >
                  <motion.div
                    className={`relative h-full w-full will-change-transform ${
                      cfg.flipped ? "scale-x-[-1]" : ""
                    }`}
                    style={reduce ? undefined : { x: xMotion }}
                  >
                    <Image
                      src={hero.images.cloud}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 90vw, 70vw"
                      className="object-contain object-bottom"
                    />
                  </motion.div>
                </motion.div>
              );
            })}

            {/* 5 — Smoke / mist (starts below, rises into frame) */}
            <motion.div
              className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-[min(70vh,72rem)] will-change-transform"
              style={reduce ? undefined : { y: smokeY }}
              initial={reduce ? false : { opacity: 0 }}
              animate={ready ? { opacity: 1 } : { opacity: 0 }}
              transition={
                reduce
                  ? { duration: 0 }
                  : { duration: 1.2, delay: 0.5, ease: EASE_LUXURY }
              }
            >
              <div className="relative h-full w-full">
                <Image
                  src={hero.images.smoke}
                  alt=""
                  fill
                  sizes="100vw"
                  className="object-cover object-bottom"
                />
              </div>
            </motion.div>

            {/* Soft white veil — transition beat without English lockup */}
            {!reduce && (
              <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 z-[4] h-[55%] will-change-transform"
                style={{ y: veilY }}
              >
                <div
                  ref={veilFadeRef}
                  className="h-full w-full bg-gradient-to-t from-white via-white/85 to-transparent"
                  style={{ opacity: 0 }}
                />
              </motion.div>
            )}

            {/* 6 — Typography / CTA (fades as house/clouds take over) */}
            <motion.div
              className="absolute inset-0 z-[5] flex items-end pb-[min(18vh,12rem)] pt-[8.4rem] will-change-transform md:items-center md:pb-0 md:pt-[7.8rem]"
              style={reduce ? undefined : { y: contentY, scale: contentScale }}
            >
              <div
                ref={contentFadeRef}
                className="site-container w-full text-center md:text-start"
                style={{ opacity: 1 }}
              >
                <motion.h1
                  className="display-xl text-white [text-shadow:0_1px_2px_rgba(21,23,23,0.4),0_8px_32px_rgba(21,23,23,0.28)]"
                  initial={reduce ? false : { opacity: 0, y: 24 }}
                  animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                  transition={MOTION.heroTitle}
                >
                  {hero.heading}
                </motion.h1>

                <motion.p
                  className="lead-lg mx-auto mt-[1.5rem] max-w-[90rem] text-balance text-white md:mx-0 md:mt-[2rem] [text-shadow:0_1px_2px_rgba(21,23,23,0.35),0_6px_24px_rgba(21,23,23,0.22)]"
                  initial={reduce ? false : { opacity: 0, y: 18 }}
                  animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                  transition={MOTION.heroLead}
                >
                  {hero.lead}{" "}
                  <span className="text-white/85">{hero.leadEmphasis}</span>
                </motion.p>

                <motion.div
                  className="mt-[3rem] flex justify-center md:mt-[4rem] md:justify-start"
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                  transition={MOTION.heroCta}
                >
                  <Button
                    text={hero.ctaLabel}
                    href={hero.ctaHref}
                    color="primary-inverse"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overlap mist into white section (FIND #overlap pattern) */}
      <section
        ref={overlapRef}
        aria-hidden
        className="pointer-events-none relative z-[6] -mt-[100vh] mb-[-40vh] h-[140vh]"
      >
        <div className="sticky top-0 h-svh overflow-hidden">
          <motion.div
            ref={overlapFadeRef}
            className="absolute inset-x-0 bottom-0 h-[min(85vh,90rem)] will-change-transform"
            style={
              reduce
                ? { opacity: 0.35 }
                : { y: overlapSmokeY, opacity: 1 }
            }
          >
            <div className="relative h-full w-full">
              <Image
                src={hero.images.smoke}
                alt=""
                fill
                sizes="100vw"
                className="object-cover object-bottom opacity-90"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
