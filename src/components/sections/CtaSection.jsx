"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { siteConfig } from "@/config/siteConfig";
import Button from "@/components/ui/Button";

export default function CtaSection() {
  const { cta } = siteConfig;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      id={cta.id}
      ref={ref}
      className="relative overflow-hidden py-[12rem] text-white md:py-[22rem]"
    >
      <motion.div style={{ scale }} className="absolute inset-0">
        <Image
          src={cta.background}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/55" />
      </motion.div>
      <div className="site-container relative z-[1] text-center">
        <h2 className="display-lg">
          {cta.heading} <span className="em-dark">{cta.headingEmphasis}</span>
        </h2>
        <div className="mt-[4rem] flex justify-center">
          <Button text={cta.ctaLabel} href={cta.ctaHref} color="primary-inverse" />
        </div>
      </div>
    </section>
  );
}
