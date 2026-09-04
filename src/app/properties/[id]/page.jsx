import Image from "next/image";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/siteConfig";
import {
  getAgent,
  getProperties,
  getProperty,
  getSimilarProperties,
} from "@/lib/content";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import ContactForm from "@/components/forms/ContactForm";

export function generateStaticParams() {
  return getProperties().map((item) => ({ id: item.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const property = getProperty(id);
  if (!property) return { title: siteConfig.brand.legalName };
  return {
    title: `${property.title} | ${siteConfig.brand.legalName}`,
    description: property.description,
  };
}

export default async function PropertyPage({ params }) {
  const { id } = await params;
  const property = getProperty(id);
  if (!property) notFound();

  const agent = getAgent(property.agentId);
  const similar = getSimilarProperties(property.id);
  const { properties } = siteConfig;
  const gallery = property.gallery?.length ? property.gallery : [property.image];

  return (
    <article className="section-pad-sm">
      <div className="site-container">
        <p className="caption mb-[2rem]">{property.status}</p>
        <div className="grid gap-[2rem] md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <h1 className="display-lg">{property.title}</h1>
            <p className="body-md mt-[1.5rem]">{property.address}</p>
          </div>
          <p className="text-[2.8rem] font-semibold leading-[1.25] tracking-[-0.01em] md:text-[4rem] md:leading-[1.2]">
            {property.price}
          </p>
        </div>

        <div className="mt-[4rem] grid gap-[1.2rem] md:mt-[6rem] md:grid-cols-3">
          {gallery.map((src, index) => (
            <div
              key={`${src}-${index}`}
              className={`relative overflow-hidden bg-mist ${
                index === 0 ? "aspect-[16/10] md:col-span-3" : "aspect-[16/10]"
              }`}
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover"
                sizes={index === 0 ? "100vw" : "33vw"}
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        <div className="mt-[4rem] flex flex-wrap gap-[3rem] text-[1.6rem] font-medium md:mt-[6rem] md:text-[2rem]">
          <span>
            {property.beds.toLocaleString(siteConfig.locale.lang)} {properties.bedsLabel}
          </span>
          <span>
            {property.baths.toLocaleString(siteConfig.locale.lang)} {properties.bathsLabel}
          </span>
          <span>
            {Number(property.area).toLocaleString(siteConfig.locale.lang)} {properties.areaLabel}
          </span>
          <span>{property.type}</span>
          {property.floor ? <span>طبقه {property.floor}</span> : null}
          {property.parking ? (
            <span>
              {Number(property.parking).toLocaleString(siteConfig.locale.lang, {
                useGrouping: false,
              })}{" "}
              پارکینگ
            </span>
          ) : null}
          <span>
            ساخت{" "}
            {Number(property.year).toLocaleString(siteConfig.locale.lang, {
              useGrouping: false,
            })}
          </span>
        </div>

        <div className="mt-[6rem] grid gap-[6rem] md:grid-cols-[1fr_48rem] md:gap-[10rem]">
          <div>
            <p className="lead-md max-w-[72rem]">{property.description}</p>
            {property.amenities?.length ? (
              <ul className="mt-[4rem] grid grid-cols-2 gap-[1.6rem] text-[1.6rem] font-medium md:text-[2rem]">
                {property.amenities.map((item) => (
                  <li key={item} className="border-b border-ink/10 pb-[1.2rem]">
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}

            {agent ? (
              <div className="mt-[6rem] flex items-center gap-[2rem]">
                <div className="relative h-[8rem] w-[8rem] overflow-hidden md:h-[10rem] md:w-[10rem]">
                  <Image
                    src={agent.image}
                    alt={agent.name}
                    fill
                    className="object-cover"
                    sizes="100px"
                  />
                </div>
                <div>
                  <p className="text-[2rem] font-medium">{agent.name}</p>
                  <p className="text-[1.6rem] text-ink/60">{agent.title}</p>
                  <a
                    href={`mailto:${agent.email}`}
                    className="mt-[0.6rem] block text-[1.6rem] underline"
                    dir="ltr"
                  >
                    {agent.email}
                  </a>
                </div>
              </div>
            ) : null}
          </div>

          <div className="bg-mist p-[3rem] md:p-[4rem]">
            <h2 className="display-md mb-[3rem]">{properties.inquireLabel}</h2>
            <ContactForm source={property.title} />
          </div>
        </div>

        <div className="mt-[10rem]">
          <div className="mb-[4rem] flex items-end justify-between gap-[2rem]">
            <h2 className="display-md">{properties.similarLabel}</h2>
            <Button
              text={properties.viewAllLabel}
              href={properties.viewAllHref}
              color="secondary"
            />
          </div>
          <div className="grid gap-[4rem] md:grid-cols-3 md:gap-[3rem]">
            {similar.map((item) => (
              <Card key={item.id} property={item} />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
