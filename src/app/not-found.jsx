import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";

export default function NotFound() {
  const copy = siteConfig.notFound;

  return (
    <section className="section-pad">
      <div className="site-container">
        <p className="caption mb-[2rem]">۴۰۴</p>
        <h1 className="display-lg">{copy.heading}</h1>
        <p className="lead-md mt-[2rem] max-w-[54rem]">{copy.body}</p>
        <Link
          href="/"
          className="mt-[4rem] inline-flex text-[2rem] font-medium underline"
        >
          {copy.backLabel} {siteConfig.brand.name}
        </Link>
      </div>
    </section>
  );
}
