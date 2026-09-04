import { siteConfig } from "@/config/siteConfig";
import PageIntro from "@/components/sections/PageIntro";
import ContactForm from "@/components/forms/ContactForm";

export const metadata = {
  title: `Contact | ${siteConfig.brand.legalName}`,
  description: siteConfig.contactPage.body,
};

export default function ContactPage() {
  const { contactPage, contact } = siteConfig;

  return (
    <>
      <PageIntro
        heading={contactPage.heading}
        headingEmphasis={contactPage.headingEmphasis}
        body={contactPage.body}
      />
      <section className="pb-[8rem] md:pb-[15rem]">
        <div className="site-container grid gap-[6rem] md:grid-cols-[1fr_64rem] md:gap-[10rem]">
          <div className="flex flex-col gap-[3rem] text-[1.8rem] font-medium md:text-[2rem]">
            <div>
              <p className="mb-[1rem] text-ink/40">{contact.officeLabel}</p>
              <p dir="ltr">
                {contact.addressLine1}
                <br />
                {contact.addressLine2}
              </p>
            </div>
            <div>
              <p className="mb-[1rem] text-ink/40">{contact.emailLabel}</p>
              <a href={contact.emailHref} className="underline" dir="ltr">
                {contact.email}
              </a>
            </div>
            <div>
              <p className="mb-[1rem] text-ink/40">{contact.phoneLabel}</p>
              <a href={contact.phoneHref} dir="ltr">
                {contact.phone}
              </a>
            </div>
          </div>
          <ContactForm source="contact" />
        </div>
      </section>
    </>
  );
}
