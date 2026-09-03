"use client";

import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { ArrowIcon, FindLockup } from "@/components/ui/Icons";
import Input from "@/components/ui/Input";

export default function Footer() {
  const { footer, contact, brand } = siteConfig;

  return (
    <footer className="z-0 bg-ink text-white">
      <div className="site-container">
        <div className="grid grid-cols-1 grid-areas-footer gap-0 py-[6rem] md:grid-cols-[78.1rem_48.3rem] md:justify-between md:py-[15rem] md:pb-[5rem]">
          <div className="flex flex-col gap-[8rem] md:mt-0 md:w-[86.2rem] md:gap-0">
            <form
              className="order-1 md:order-0"
              onSubmit={(event) => event.preventDefault()}
            >
              <p className="text-[1.6rem] font-medium leading-[1.5] md:text-[3.2rem] md:leading-[1.1] md:tracking-[-0.01em]">
                {footer.newsletterTitle}
              </p>
              <div className="relative mt-[2.5rem] md:mt-[4rem]">
                <Input
                  dark
                  type="email"
                  name="email"
                  required
                  placeholder={footer.newsletterPlaceholder}
                />
                <button
                  type="submit"
                  className="absolute end-0 top-0 text-white"
                  aria-label={footer.newsletterSubmit}
                >
                  <ArrowIcon className="h-[3.2rem] w-[3.2rem] rtl:rotate-180" />
                </button>
              </div>
            </form>

            <div className="flex flex-col gap-[4rem] md:mt-[10rem] md:flex-row md:gap-[10rem]">
              <div data-contact="address">
                <p className="mb-[2.5rem] hidden text-[1.6rem] font-medium leading-[1.5] text-white/40 md:block">
                  {contact.officeLabel}
                </p>
                <p className="text-[1.6rem] font-medium leading-[1.5] md:text-[2rem]">
                  {contact.addressLine1}
                  <br />
                  {contact.addressLine2}
                </p>
              </div>
              <div data-contact="email" className="max-md:order-1">
                <p className="mb-[2.5rem] hidden text-[1.6rem] font-medium leading-[1.5] text-white/40 md:block">
                  {contact.emailLabel}
                </p>
                <a
                  href={contact.emailHref}
                  className="text-[1.6rem] font-medium leading-[1.5] underline md:text-[2rem] md:no-underline max-md:text-[2.2rem] max-md:leading-none"
                >
                  {contact.email}
                </a>
              </div>
              <div data-contact="phone">
                <p className="mb-[2.5rem] hidden text-[1.6rem] font-medium leading-[1.5] text-white/40 md:block">
                  {contact.phoneLabel}
                </p>
                <a
                  href={contact.phoneHref}
                  className="text-[1.6rem] font-medium leading-[1.5] md:text-[2rem]"
                >
                  {contact.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-[8rem] flex justify-between md:mt-0">
            <nav className="flex max-w-max flex-col gap-[2rem]">
              {footer.nav.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="hover-shift text-[3rem] font-medium leading-[1.1] tracking-[-0.01em] md:text-[3.2rem]"
                >
                  <span data-text={item.label}>{item.label}</span>
                </Link>
              ))}
            </nav>
            <nav className="flex max-w-max flex-col gap-[2rem] text-start">
              {footer.social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="pe-[3.5rem] text-[1.6rem] font-medium leading-[1.5] md:pe-0 md:text-[2rem]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="col-span-full mt-[8rem] md:mt-[12.5rem]">
            <FindLockup className="h-auto w-full max-w-full overflow-visible text-white md:h-[28rem] md:w-[97.5rem]" />
          </div>

          <div className="col-span-full mt-[3rem] flex flex-col justify-between gap-[3rem] text-[1.4rem] font-medium leading-[1.5] text-white/40 md:flex-row md:text-[1.6rem]">
            <div className="flex flex-col gap-[3rem] md:flex-row">
              {footer.legal.map((item) => (
                <Link key={item.label} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-[1rem] md:items-end">
              {footer.vouchers.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p>
                {brand.legalName} {footer.copyrightPrefix} {footer.copyrightYear}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
