"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE_LUXURY, MOTION } from "@/lib/motion";

export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 28,
  once = true,
  amount = 0.35,
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ ...MOTION.reveal, delay, ease: EASE_LUXURY }}
    >
      {children}
    </motion.div>
  );
}
