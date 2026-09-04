"use client";

import { useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function ContactForm({ source = "" }) {
  const { forms, contactPage } = siteConfig;
  const [status, setStatus] = useState("idle");

  function onSubmit(event) {
    event.preventDefault();
    setStatus("sending");
    window.setTimeout(() => setStatus("sent"), 600);
  }

  if (status === "sent") {
    return (
      <div className="border-t border-ink/10 pt-[3rem]">
        <p className="display-md">{contactPage.successTitle}</p>
        <p className="body-md mt-[1.5rem] max-w-[52rem]">{contactPage.successBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-[3rem] md:gap-[4rem]">
      {source ? <input type="hidden" name="source" value={source} /> : null}
      <Input
        label={forms.nameLabel}
        name="name"
        required
        placeholder={forms.namePlaceholder}
      />
      <Input
        label={forms.emailLabel}
        type="email"
        name="email"
        required
        placeholder={forms.emailPlaceholder}
      />
      <Input
        label={forms.phoneLabel}
        type="tel"
        name="phone"
        placeholder={forms.phonePlaceholder}
      />
      <label className="block w-full">
        <span className="mb-[1.5rem] block text-[1.4rem] font-normal leading-[1.5] text-ink-muted md:mb-[2rem]">
          {forms.messageLabel}
        </span>
        <textarea
          name="message"
          required
          rows={4}
          placeholder={forms.messagePlaceholder}
          className="w-full resize-none border-b border-ink/15 bg-transparent pb-[1.5rem] text-[1.6rem] font-medium leading-[1.5] outline-none placeholder:text-ink/40 focus:border-ink md:text-[1.8rem]"
        />
      </label>
      <div>
        <Button
          type="submit"
          text={status === "sending" ? forms.sendingLabel : forms.sendLabel}
        />
      </div>
    </form>
  );
}
