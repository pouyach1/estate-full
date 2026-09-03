"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";
import Reveal from "@/components/ui/Reveal";

export default function TestimonialsSection() {
  const { testimonials } = siteConfig;
  const [index, setIndex] = useState(0);
  const active = testimonials.items[index];

  return (
    <section className="section-pad bg-mist">
      <div className="site-container">
        <Reveal>
          <h2 className="display-lg mb-[4rem] md:mb-[10rem]">
            {testimonials.heading}{" "}
            <span className="em">{testimonials.headingEmphasis}</span>
          </h2>
        </Reveal>
        <div className="md:grid md:grid-cols-[auto_65.2rem] md:gap-[9.2rem]">
          <div className="order-2 md:order-1">
            <div className="relative aspect-[400/365] overflow-hidden md:aspect-[976/688]">
              <Image
                src={testimonials.previewImage}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 65vw"
              />
            </div>
          </div>
          <div className="order-1 mt-[4rem] border-t border-ink md:order-2 md:mt-0">
            <div className="relative pt-[5rem] md:pt-[5rem]">
              <div className="absolute start-0 top-0 z-4 flex gap-[1.3rem]">
                {testimonials.items.map((item, itemIndex) => (
                  <button
                    key={item.author}
                    type="button"
                    onClick={() => setIndex(itemIndex)}
                    className={`inline-flex h-[3.6rem] min-w-[3.6rem] items-center justify-center rounded-full border text-[1.4rem] font-medium leading-[1.4] transition md:h-[4.6rem] md:w-[4.6rem] md:text-[1.6rem] ${
                      itemIndex === index
                        ? "border-ink text-ink"
                        : "border-ink-muted text-ink-muted hover:scale-95"
                    }`}
                    aria-label={item.author}
                  >
                    {itemIndex + 1}
                  </button>
                ))}
              </div>
              <div className="pt-[10rem]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.author}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <p className="text-[2.2rem] leading-[1.15] tracking-[-0.01em] md:text-[3.2rem] md:tracking-[-0.02em]">
                      “{active.quote}”
                    </p>
                    <div className="mt-[3rem] md:mt-[5rem]">
                      <span className="inline-block align-middle text-[1.2rem] font-medium uppercase leading-[1.1] md:text-[1.8rem]">
                        {active.author}
                      </span>
                      <span className="mx-[2rem] inline-block align-middle text-[1.2rem] font-medium uppercase md:mx-[3rem] md:text-[1.8rem]">
                        /
                      </span>
                      <span
                        className="inline-block h-[1.6rem] w-[8rem] align-middle md:h-[2rem] md:w-[10rem]"
                        style={{
                          backgroundImage:
                            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='%23151717' d='M7.52 1.46a.5.5 0 0 1 .96 0l1.2 3.72c.07.2.26.35.48.35h3.91a.5.5 0 0 1 .3.9l-3.17 2.3a.5.5 0 0 0-.18.56l1.2 3.72a.5.5 0 0 1-.76.56l-3.17-2.3a.5.5 0 0 0-.58 0l-3.17 2.3a.5.5 0 0 1-.77-.56l1.21-3.72a.5.5 0 0 0-.18-.56l-3.16-2.3a.5.5 0 0 1 .29-.9h3.91a.5.5 0 0 0 .48-.35l1.2-3.72Z'/%3E%3C/svg%3E\")",
                          backgroundSize: "1.6rem 1.6rem",
                        }}
                        aria-hidden="true"
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
