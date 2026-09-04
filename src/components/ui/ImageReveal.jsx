"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE_LUXURY } from "@/lib/motion";

/**
 * FIND-style media reveal: clip upward + gentle scale settle.
 * Wrap around an existing relative/overflow media frame — does not change layout.
 */
export default function ImageReveal({
  children,
  className = "",
  delay = 0,
  once = true,
  amount = 0.35,
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={`overflow-hidden ${className}`.trim()}
      initial={{ clipPath: "inset(14% 0 0 0)", opacity: 0.9 }}
      whileInView={{ clipPath: "inset(0% 0 0 0)", opacity: 1 }}
      viewport={{ once, amount }}
      transition={{ duration: 1.15, delay, ease: EASE_LUXURY }}
    >
      <motion.div
        className="relative h-full w-full will-change-transform"
        initial={{ scale: 1.08 }}
        whileInView={{ scale: 1 }}
        viewport={{ once, amount }}
        transition={{ duration: 1.65, delay, ease: EASE_LUXURY }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
