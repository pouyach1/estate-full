"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { siteConfig } from "@/config/siteConfig";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { EASE_LUXURY } from "@/lib/motion";

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
    top: "auto",
    bottom: "20%",
    width: "70%",
    height: "55%",
    flipped: false,
  },
  2: {
    left: "auto",
    right: "0%",
    top: "auto",
    bottom: "12%",
    width: "80%",
    height: "60%",
    flipped: true,
  },
};

function useHeroProgress(targetRef) {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });
  return scrollYProgress;
}

export default function HeroSection() {
  const { hero, brand } = siteConfig;
  const reduce = useReducedMotion();
  const stageRef = useRef(null);
  const [ready, setReady] = useState(false);

  const progress = useHeroProgress(stageRef);

  /* Layer timing maps (normalized 0→1 across stage) — from FIND ScrollTrigger scrub */
  const houseY = useTransform(progress, [0, 1], ["0%", "-40%"]);
  const houseScale = useTransform(progress, [0, 1], [1, 1.3]);
  const cloud1X = useTransform(progress, [0, 1], ["0%", "15%"]);
  const cloud2X = useTransform(progress, [0, 1], ["0%", "-15%"]);
  const smokeY = useTransform(progress, [0, 1], ["70%", "0%"]);
  const contentY = useTransform(progress, [0, 1], ["0%", "20%"]);
  const contentScale = useTransform(progress, [0, 1], [1, 0.9]);
  const contentOpacity = useTransform(progress, [0, 0.22, 0.42], [1, 1, 0]);
  /* Soft white veil replaces English FIND mid-scroll beat */
  const veilOpacity = useTransform(progress, [0.18, 0.42, 0.72], [0, 0.55, 0.92]);
  const veilY = useTransform(progress, [0.18, 0.85], ["18%", "0%"]);

  const overlapRef = useRef(null);
  const { scrollYProgress: overlapProgress } = useScroll({
    target: overlapRef,
    offset: ["start end", "end start"],
  });
  const overlapSmokeY = useTransform(overlapProgress, [0, 1], ["0%", "-18%"]);
  const overlapFade = useTransform(overlapProgress, [0.15, 0.85], [1, 0.15]);

  useEffect(() => {
    const id = window.setTimeout(() => setReady(true), reduce ? 0 : 200);
    return () => window.clearTimeout(id);
  }, [reduce]);

  const copyDelay = reduce ? 0 : 0.55;

  return (
    <>
      <section
        ref={stageRef}
        id="hero"
        aria-label={hero.ariaLabel}
        className="relative mb-[-100vh] h-[350vh] w-full md:h-[500vh]"
      >
        <div className="sticky top-0 h-svh w-full overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            {/* 1 — Sky / back */}
            <motion.div
              className="absolute inset-0 z-0 will-change-transform"
              initial={
                reduce
                  ? false
                  : { scale: 1.1, transformOrigin: "50% 100%" }
              }
              animate={
                ready
                  ? { scale: 1, transition: { duration: reduce ? 0 : 5, ease: easeOutExpo } }
                  : { scale: 1.1 }
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

            {/* 2 — House (enters from below fold, grows on scroll) */}
            <motion.div
              className="absolute inset-x-0 bottom-0 top-[60vh] z-[1] origin-bottom"
              initial={reduce ? false : { opacity: 0, y: 48 }}
              animate={
                ready
                  ? {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: reduce ? 0 : 1.35,
                        delay: reduce ? 0 : 0.35,
                        ease: easeOutExpo,
                      },
                    }
                  : { opacity: 0, y: 48 }
              }
            >
              <motion.div
                className="relative h-full w-full origin-bottom will-change-transform"
                style={reduce ? undefined : { y: houseY, scale: houseScale }}
              >
                <Image
                  src={hero.images.house}
                  alt={`${brand.name} — ویلا`}
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
                  className="pointer-events-none absolute z-[2] will-change-transform"
                  style={{
                    left: cfg.left,
                    right: cfg.right,
                    top: cfg.top,
                    bottom: cfg.bottom,
                    width: cfg.width,
                    height: cfg.height,
                    ...(reduce ? {} : { x: xMotion }),
                  }}
                  initial={reduce ? false : { y: "28%", opacity: 0.85 }}
                  animate={
                    ready
                      ? {
                          y: "0%",
                          opacity: 1,
                          transition: {
                            duration: reduce ? 0 : 1.6,
                            delay: reduce ? 0 : 0.25 + id * 0.12,
                            ease: easeOutExpo,
                          },
                        }
                      : { y: "28%", opacity: 0.85 }
                  }
                >
                  <div
                    className={`relative h-full w-full ${cfg.flipped ? "scale-x-[-1]" : ""}`}
                  >
                    <Image
                      src={hero.images.cloud}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 90vw, 70vw"
                      className="object-contain object-bottom"
                    />
                  </div>
                </motion.div>
              );
            })}

            {/* 5 — Smoke / mist (starts below, rises into frame) */}
            <motion.div
              className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-[min(70vh,720px)] will-change-transform"
              style={reduce ? undefined : { y: smokeY }}
              initial={reduce ? false : { opacity: 0 }}
              animate={
                ready
                  ? {
                      opacity: 1,
                      transition: {
                        duration: reduce ? 0 : 1.2,
                        delay: reduce ? 0 : 0.5,
                        ease: easeOutExpo,
                      },
                    }
                  : { opacity: 0 }
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
                className="pointer-events-none absolute inset-x-0 bottom-0 z-[4] h-[55%] bg-gradient-to-t from-white via-white/80 to-transparent"
                style={{ opacity: veilOpacity, y: veilY }}
              />
            )}

            {/* 6 — Typography / CTAs (fade + settle as house/clouds take over) */}
            <motion.div
              className="absolute inset-0 z-[5] flex items-end pb-[min(18vh,9rem)] pt-[5.5rem] will-change-transform md:items-center md:pb-0 md:pt-24"
              style={
                reduce
                  ? undefined
                  : {
                      y: contentY,
                      scale: contentScale,
                      opacity: contentOpacity,
                    }
              }
            >
              <Container className="w-full">
                <div className="mx-auto max-w-3xl text-center md:mx-0 md:max-w-xl md:text-start">
                  <motion.p
                    className="font-mono text-[0.68rem] font-medium uppercase tracking-[0.22em] text-ink-700 md:text-[0.72rem]"
                    initial={reduce ? false : { opacity: 0, y: 18 }}
                    animate={
                      ready
                        ? {
                            opacity: 1,
                            y: 0,
                            transition: {
                              duration: reduce ? 0 : 0.85,
                              delay: copyDelay,
                              ease: easeOutExpo,
                            },
                          }
                        : { opacity: 0, y: 18 }
                    }
                  >
                    {hero.eyebrow}
                  </motion.p>

                  <motion.h1
                    className="mt-4 font-display text-[clamp(2.35rem,7.2vw,4.75rem)] font-medium leading-[1.05] tracking-[-0.035em] text-ink-950"
                    initial={reduce ? false : { opacity: 0, y: 28 }}
                    animate={
                      ready
                        ? {
                            opacity: 1,
                            y: 0,
                            transition: {
                              duration: reduce ? 0 : 1.05,
                              delay: copyDelay + 0.08,
                              ease: easeOutExpo,
                            },
                          }
                        : { opacity: 0, y: 28 }
                    }
                  >
                    {hero.title}
                  </motion.h1>

                  <motion.p
                    className="mx-auto mt-5 max-w-md text-[0.98rem] leading-relaxed text-ink-800 md:mx-0 md:text-[1.05rem]"
                    initial={reduce ? false : { opacity: 0, y: 22 }}
                    animate={
                      ready
                        ? {
                            opacity: 1,
                            y: 0,
                            transition: {
                              duration: reduce ? 0 : 0.95,
                              delay: copyDelay + 0.16,
                              ease: easeOutExpo,
                            },
                          }
                        : { opacity: 0, y: 22 }
                    }
                  >
                    {hero.subtitle}
                  </motion.p>

                  <motion.div
                    className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:justify-start"
                    initial={reduce ? false : { opacity: 0, y: 18 }}
                    animate={
                      ready
                        ? {
                            opacity: 1,
                            y: 0,
                            transition: {
                              duration: reduce ? 0 : 0.85,
                              delay: copyDelay + 0.26,
                              ease: easeOutExpo,
                            },
                          }
                        : { opacity: 0, y: 18 }
                    }
                  >
                    <Button href={hero.primaryCta.href} variant="primary">
                      {hero.primaryCta.label}
                    </Button>
                    <Button href={hero.secondaryCta.href} variant="ghost">
                      {hero.secondaryCta.label}
                    </Button>
                  </motion.div>
                </div>
              </Container>
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
            className="absolute inset-x-0 bottom-0 h-[min(85vh,900px)] will-change-transform"
            style={
              reduce
                ? { opacity: 0.35 }
                : { y: overlapSmokeY, opacity: overlapFade }
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
