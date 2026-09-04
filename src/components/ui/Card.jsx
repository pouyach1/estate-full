"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";
import { MOTION } from "@/lib/motion";

function fa(value) {
  return Number(value).toLocaleString(siteConfig.locale.lang);
}

export default function Card({ property }) {
  const { bedsLabel, bathsLabel, areaLabel } = siteConfig.properties;
  const reduce = useReducedMotion();

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={MOTION.card}
      className="group flex flex-col"
    >
      <Link href={property.href} className="block">
        <div className="relative aspect-[442/260] overflow-hidden bg-mist">
          <Image
            src={property.image}
            alt={property.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-safe:group-hover:scale-[1.04]"
          />
          <span className="absolute top-[1.6rem] start-[1.6rem] rounded-full bg-white/90 px-[1.2rem] py-[0.6rem] text-[1.2rem] md:text-[1.4rem] font-medium text-ink">
            {property.status}
          </span>
        </div>
        <div className="flex flex-col pt-[1.5rem] md:pt-[2rem]">
          <p className="text-[2.2rem] font-semibold leading-[1.35] tracking-[-0.01em] md:text-[2.4rem]">
            {property.price}
          </p>
          <h3 className="mt-[0.8rem] text-[1.8rem] md:text-[2rem] font-medium leading-[1.3]">
            {property.title}
          </h3>
          <p className="mt-[0.5rem] text-[1.2rem] md:text-[1.6rem] font-medium leading-[1.3] text-ink/70">
            {property.address}
          </p>
          <div className="mt-[1.5rem]">
            <div className="inline-flex flex-wrap text-[1.2rem] md:text-[1.6rem] font-medium leading-[1.3] text-ink">
              <span>
                {fa(property.beds)} {bedsLabel}
              </span>
              <span className="relative ms-[2.4rem] before:absolute before:top-1/2 before:end-full before:me-[1rem] before:h-[0.4rem] before:w-[0.4rem] before:-translate-y-1/2 before:rounded-full before:bg-ink-muted">
                {fa(property.baths)} {bathsLabel}
              </span>
              <span className="relative ms-[2.4rem] before:absolute before:top-1/2 before:end-full before:me-[1rem] before:h-[0.4rem] before:w-[0.4rem] before:-translate-y-1/2 before:rounded-full before:bg-ink-muted">
                {fa(property.area)} {areaLabel}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
