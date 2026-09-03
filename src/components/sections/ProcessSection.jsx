"use client";

import { siteConfig } from "@/config/siteConfig";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function ProcessSection() {
  const { process } = siteConfig;

  return (
    <section className="section-pad bg-white">
      <div className="site-container">
        <div className="grid gap-[6rem] md:grid-cols-[1fr_97.6rem] md:gap-[6rem]">
          <Reveal>
            <h2 className="display-lg">
              <span className="block">{process.heading}</span>
              <span className="em block">{process.headingEmphasis}</span>
            </h2>
            <div className="mt-[4rem]">
              <Button text={process.ctaLabel} href={process.ctaHref} />
            </div>
          </Reveal>
          <div>
            <p className="caption mb-[3rem]">{process.stepsLabel}</p>
            <ol className="border-t border-ink/10">
              {process.steps.map((step, index) => (
                <Reveal key={step.title} delay={index * 0.08}>
                  <li className="border-b border-ink/10 py-[3rem] md:py-[5rem]">
                    <p className="mb-[1.5rem] text-[1.4rem] font-medium leading-[1.5] text-ink-muted md:text-[2rem]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="display-md">
                      {step.title} <span className="em">{step.text}</span>
                    </p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
