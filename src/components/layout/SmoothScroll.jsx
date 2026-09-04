"use client";

import { useLayoutEffect } from "react";
import Lenis from "lenis";
import { useReducedMotion } from "framer-motion";

/**
 * Root cause of refresh landing mid-Hero: browser history.scrollRestoration
 * restores the previous scrollY before/while React mounts. Lenis then syncs
 * to that offset. Disable automatic restoration and pin scroll to 0 on boot.
 */
export default function SmoothScroll() {
  const reduce = useReducedMotion();

  useLayoutEffect(() => {
    const previousRestoration = history.scrollRestoration;
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);

    if (reduce) {
      return () => {
        if ("scrollRestoration" in history) {
          history.scrollRestoration = previousRestoration;
        }
      };
    }

    const lenis = new Lenis({
      // FIND uses a calm, cinematic wheel / touch feel
      duration: 1.2,
      smoothWheel: true,
      touchMultiplier: 1.35,
      syncTouch: false,
    });

    // Keep Lenis in sync with the forced top-of-page start (no lerp on boot)
    lenis.scrollTo(0, { immediate: true });

    let frame = 0;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      if ("scrollRestoration" in history) {
        history.scrollRestoration = previousRestoration;
      }
    };
  }, [reduce]);

  return null;
}
