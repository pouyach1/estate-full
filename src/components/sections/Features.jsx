"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { ArrowIcon } from "@/components/ui/Icons";
import { EASE_LUXURY } from "@/lib/motion";

export default function Features() {
  const { features } = siteConfig;
  const reduce = useReducedMotion();

  return (
    <section id={features.id} className="section-pad bg-ink text-white">
      <div className="site-container">
        <div className="mb-[6rem] grid md:mb-[10rem] md:grid-cols-[auto_97.6rem]">
          <p className="caption hidden md:block">{features.caption}</p>
          <Reveal>
            <h2 className="display-lg">
              {features.heading}
              <br />
              <span className="em-dark">{features.headingEmphasis}</span>
            </h2>
          </Reveal>
        </div>
      </div>

      <div className="border-b border-dark-line">
        {features.items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.85, delay: index * 0.06, ease: EASE_LUXURY }}
          >
            <Link
              href={item.href}
              className="group relative block h-[40rem] w-full overflow-hidden border-t border-dark-line"
            >
              <div className="absolute inset-0 bg-[#1a1c1c] opacity-30 transition duration-700 group-hover:opacity-40">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-cover scale-105 transition duration-[4s] motion-safe:group-hover:scale-100"
                  sizes="100vw"
                />
              </div>
              <div className="site-container relative grid h-full items-end py-[5.2rem] pt-[6rem] md:grid-cols-[4.6rem_auto_1fr] md:items-center md:gap-[6rem]">
                <span className="relative grid h-[3.6rem] w-[3.6rem] place-items-center rounded-full border text-[1.4rem] font-medium md:h-[4.6rem] md:w-[4.6rem] md:text-[1.6rem]">
                  {index + 1}
                </span>
                <p className="relative max-w-[40rem] text-[1.6rem] font-medium leading-[1.5] text-balance md:text-[2.4rem] md:tracking-[-0.01em]">
                  {item.description}
                </p>
                <div className="relative flex items-end justify-between self-end whitespace-nowrap text-[10.45rem] leading-[0.95] tracking-[-0.04em] md:items-start md:self-start md:text-[24rem] md:tracking-[-0.05em]">
                  <span className="relative inline-block after:absolute after:inset-x-[0.085em] after:bottom-0 after:origin-right after:border-t-[0.0333em] after:scale-x-0 after:transition-transform after:duration-1000 after:ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:after:scale-x-100 rtl:after:origin-left">
                    {item.title}
                  </span>
                  <ArrowIcon className="relative top-[0.05em] h-[1em] w-[1em] opacity-0 -translate-x-[10%] transition duration-700 group-hover:translate-x-0 group-hover:opacity-100 rtl:rotate-180 rtl:translate-x-[10%] rtl:group-hover:translate-x-0" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="site-container">
        <Reveal>
          <p className="lead-md mt-[6rem] max-w-[77.6rem] md:text-[4.4rem] md:leading-[1.15] md:tracking-[-0.02em]">
            {features.brief} <span className="em-dark">{features.briefEmphasis}</span>
          </p>
          <div className="mt-[4rem]">
            <Button
              text={features.ctaLabel}
              href={features.ctaHref}
              color="secondary-inverse"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
