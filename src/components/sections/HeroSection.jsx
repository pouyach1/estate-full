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
 * FIND hero motion (Framer Motion + Lenis)
 *
 * Desktop + mobile share the same scrub timeline; composition differs by breakpoint
 * (measured from findrealestate.com CSS modules):
 *
 * Mobile (≤767):
 * - stage 350vh, house h 33.4rem @ top 60vh
 * - clouds: first top 33.7rem / left -57.2rem / 70.2×29.8rem
 *           last  top 37.12rem / right -41.2rem / 55.7×23.6rem
 * - smoke h 45rem from translateY(70%)
 * - content: centered grid, padding-bottom 15rem
 * - bottom wash 10rem
 *
 * Desktop (≥768): stage 500vh, taller house/clouds/smoke, pb 22.8rem
 * Phase 16: no English FIND lockup / letter mask
 */

const CLOUDS = [
  {
    id: 1,
    /* first-child — drifts left on scroll */
    className:
      "top-[33.7rem] left-[-57.2rem] h-[29.8rem] w-[70.2rem] md:top-[25%] md:left-[-33.72rem] md:h-[47.7rem] md:w-[112.4rem]",
    flipped: false,
    xTo: "-15%",
  },
  {
    id: 2,
    /* last-child — drifts right on scroll */
    className:
      "top-[37.12rem] right-[-41.2rem] h-[23.6rem] w-[55.7rem] md:top-[20%] md:right-[-33.72rem] md:h-[39.7rem] md:w-[93.6rem]",
    flipped: true,
    xTo: "15%",
  },
];

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

  /* Layer timing maps — FIND ScrollTrigger scrub (shared mobile/desktop) */
  const houseY = useTransform(progress, [0, 1], ["0%", "-40%"]);
  const houseScale = useTransform(progress, [0, 1], [1, 1.3]);
  const cloud1X = useTransform(progress, [0, 1], ["0%", CLOUDS[0].xTo]);
  const cloud2X = useTransform(progress, [0, 1], ["0%", CLOUDS[1].xTo]);
  const smokeY = useTransform(progress, [0, 1], ["70%", "0%"]);
  const contentY = useTransform(progress, [0, 1], ["0%", "20%"]);
  const contentScale = useTransform(progress, [0, 1], [1, 0.9]);
  const veilY = useTransform(progress, [0.1, 0.8], ["18%", "0%"]);

  const contentFadeRef = useRef(null);
  const veilFadeRef = useRef(null);

  useMotionValueEvent(progress, "change", (v) => {
    if (reduce) return;
    if (contentFadeRef.current) {
      const o = v <= 0 ? 1 : v >= 0.28 ? 0 : 1 - v / 0.28;
      contentFadeRef.current.style.opacity = String(o);
    }
    if (veilFadeRef.current) {
      const o = v <= 0.1 ? 0 : v >= 0.55 ? 1 : (v - 0.1) / 0.45;
      veilFadeRef.current.style.opacity = String(o);
    }
  });

  useEffect(() => {
    if (reduce) return undefined;
    const v = progress.get();
    if (contentFadeRef.current) {
      const o = v <= 0 ? 1 : v >= 0.28 ? 0 : 1 - v / 0.28;
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

  const cloudX = [cloud1X, cloud2X];

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

            {/* 2 — House (mobile: 33.4rem band; desktop: tall band) */}
            <motion.div
              className="absolute inset-x-0 top-[60vh] z-[1] h-[33.4rem] origin-bottom md:h-[170.8rem]"
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

            {/* 3–4 — Cloud layers (independent X parallax, reference rem geometry) */}
            <div className="pointer-events-none absolute inset-0 z-[2]">
              {CLOUDS.map((cfg, index) => (
                <motion.div
                  key={cfg.id}
                  className={`absolute ${cfg.className}`}
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
                          delay: 0.25 + cfg.id * 0.12,
                          ease: EASE_LUXURY,
                        }
                  }
                >
                  <motion.div
                    className={`relative h-full w-full will-change-transform ${
                      cfg.flipped ? "scale-x-[-1]" : ""
                    }`}
                    style={reduce ? undefined : { x: cloudX[index] }}
                  >
                    <Image
                      src={hero.images.cloud}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 180vw, 120vw"
                      className="object-cover object-bottom"
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* 5 — Smoke / mist */}
            <motion.div
              className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-[45rem] will-change-transform md:h-[62rem]"
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

            {/* Static bottom wash (FIND hero_overlay) */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-[10rem] bg-gradient-to-b from-transparent to-white md:h-[30.9rem]"
            />

            {/* Soft white veil — scroll handoff without English lockup */}
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

            {/* 6 — Typography / CTA — mobile: centered stage like FIND */}
            <motion.div
              className="absolute inset-0 z-[5] grid h-full items-center pb-[15rem] pt-[8.4rem] will-change-transform md:pb-[22.8rem] md:pt-[7.8rem]"
              style={reduce ? undefined : { y: contentY, scale: contentScale }}
            >
              <div
                ref={contentFadeRef}
                className="site-container w-full text-center"
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
                  className="lead-lg mx-auto mt-[1.5rem] max-w-[90rem] text-balance text-white md:mt-[2rem] [text-shadow:0_1px_2px_rgba(21,23,23,0.35),0_6px_24px_rgba(21,23,23,0.22)]"
                  initial={reduce ? false : { opacity: 0, y: 18 }}
                  animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                  transition={MOTION.heroLead}
                >
                  {hero.lead}{" "}
                  <span className="text-white/85">{hero.leadEmphasis}</span>
                </motion.p>

                <motion.div
                  className="mt-[3rem] flex justify-center md:mt-[4rem]"
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

      {/* Overlap mist into white section */}
      <section
        ref={overlapRef}
        aria-hidden
        className="pointer-events-none relative z-[6] -mt-[100vh] mb-[-40vh] h-[140vh]"
      >
        <div className="sticky top-0 h-svh overflow-hidden">
          <motion.div
            ref={overlapFadeRef}
            className="absolute inset-x-0 bottom-0 h-[45rem] will-change-transform md:h-[min(85vh,90rem)]"
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
