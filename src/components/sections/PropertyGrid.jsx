"use client";

import { siteConfig } from "@/config/siteConfig";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";

export default function PropertyGrid({
  heading,
  headingEmphasis,
  body,
  items,
  showCta = true,
}) {
  const { properties } = siteConfig;
  const list = items ?? properties.items.filter((item) => item.featured !== false);

  return (
    <section id={properties.id} className="section-pad bg-white">
      <div className="site-container">
        <div className="grid gap-[4rem] md:grid-cols-[auto_97.6rem] md:items-end">
          <Reveal>
            <p className="caption mb-[2rem]">{properties.caption}</p>
            <h2 className="display-lg">
              {heading ?? properties.heading}
              <br />
              <span className="em">{headingEmphasis ?? properties.headingEmphasis}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lead-md max-w-[70rem]">{body ?? properties.body}</p>
            {showCta ? (
              <div className="mt-[3rem] md:mt-[4rem]">
                <Button
                  text={properties.viewAllLabel}
                  href={properties.viewAllHref}
                  color="secondary"
                />
              </div>
            ) : null}
          </Reveal>
        </div>
        <div className="mt-[6rem] grid gap-[4rem] md:mt-[10rem] md:grid-cols-3 md:gap-x-[3rem] md:gap-y-[8rem]">
          {list.map((property) => (
            <Card key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
