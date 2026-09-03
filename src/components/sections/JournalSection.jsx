"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function JournalSection() {
  const { journal } = siteConfig;

  return (
    <section id={journal.id} className="section-pad bg-mist">
      <div className="site-container">
        <div className="grid gap-[4rem] md:grid-cols-[auto_97.6rem]">
          <Reveal>
            <h2 className="display-lg md:text-[8rem]">
              {journal.heading} <span className="em">{journal.headingAmp}</span>
              <br />
              <span className="em">{journal.headingResources}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lead-md">{journal.body}</p>
            <div className="mt-[3rem] md:mt-[4rem]">
              <Button text={journal.ctaLabel} href={journal.ctaHref} />
            </div>
          </Reveal>
        </div>

        <div className="mt-[4rem] grid gap-[6rem] md:mt-[10rem] md:gap-0 md:border-b md:border-ink/10">
          {journal.posts.map((post) => (
            <article
              key={post.title}
              className="md:border-t md:border-ink/10 md:py-[3rem]"
            >
              <div className="grid gap-[3rem] md:grid-cols-[auto_97.6rem]">
                <div className="md:order-2">
                  <Link
                    href={post.href}
                    className="relative mx-[-2rem] block aspect-[365/250] overflow-hidden md:mx-0 md:aspect-[976/450]"
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 976px"
                    />
                  </Link>
                </div>
                <div className="flex flex-col justify-between md:order-1">
                  <div>
                    <p className="mb-[3rem] text-[1.4rem] font-medium leading-[1.5] md:mb-[6.85rem] md:text-[2rem]">
                      {post.date}
                    </p>
                    <Link
                      href={post.href}
                      className="block text-[2.2rem] font-medium leading-[1.15] md:text-[4.4rem] md:tracking-[-0.02em]"
                    >
                      {post.title}
                    </Link>
                    <p className="body-md mt-[1.5rem] md:mt-[2.4rem]">{post.excerpt}</p>
                  </div>
                  <div className="mt-[3rem]">
                    <Button
                      text={journal.readMoreLabel}
                      href={post.href}
                      color="secondary"
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
