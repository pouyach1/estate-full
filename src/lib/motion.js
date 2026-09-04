"use client";

import { useEffect, useState } from "react";

/** FIND-like luxury ease ≈ GSAP expo.out */
export const EASE_LUXURY = [0.16, 1, 0.3, 1];

export const MOTION = {
  reveal: { duration: 0.9, ease: EASE_LUXURY },
  heroTitle: { duration: 1.1, ease: EASE_LUXURY },
  heroLead: { duration: 1, delay: 0.2, ease: EASE_LUXURY },
  heroCta: { duration: 0.9, delay: 0.35, ease: EASE_LUXURY },
  heroImage: { duration: 5, ease: EASE_LUXURY },
  imageReveal: { duration: 1.2, ease: EASE_LUXURY },
  card: { duration: 0.8, ease: EASE_LUXURY },
  swap: { duration: 0.45, ease: EASE_LUXURY },
  menu: { duration: 0.45, ease: EASE_LUXURY },
};

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return reduced;
}
