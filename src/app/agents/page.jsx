import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";
import PageIntro from "@/components/sections/PageIntro";
import Button from "@/components/ui/Button";

export const metadata = {
  title: `Agents | ${siteConfig.brand.legalName}`,
  description: siteConfig.agents.directoryBody,
};

export default function AgentsPage() {
  const { agents } = siteConfig;

  return (
    <>
      <PageIntro
        caption={agents.label}
        heading={agents.directoryHeading}
        headingEmphasis={agents.directoryEmphasis}
        body={agents.directoryBody}
      >
        <div className="mt-[3rem]">
          <Button text={agents.ctaLabel} href={agents.ctaHref} />
        </div>
      </PageIntro>
      <section className="pb-[8rem] md:pb-[15rem]">
        <div className="site-container grid gap-[6rem] md:grid-cols-2 md:gap-x-[6rem] md:gap-y-[10rem]">
          {agents.people.map((person) => (
            <article key={person.id} className="flex flex-col">
              <div className="relative aspect-[4/5] overflow-hidden bg-mist">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h2 className="mt-[2.4rem] text-[3rem] font-medium tracking-[-0.02em] md:text-[4.4rem]">
                {person.name}
              </h2>
              <p className="mt-[0.8rem] text-[1.6rem] font-medium text-ink/55 md:text-[2rem]">
                {person.title} · {person.neighborhood}
              </p>
              <p className="body-md mt-[2rem] max-w-[54rem]">{person.bio}</p>
              <a
                href={`mailto:${person.email}`}
                className="mt-[2rem] text-[1.6rem] font-medium underline md:text-[1.8rem]"
              >
                {person.email}
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
