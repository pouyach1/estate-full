import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";

export default function NotFound() {
  return (
    <section className="section-pad">
      <div className="site-container">
        <p className="caption mb-[2rem]">404</p>
        <h1 className="display-lg">This page isn’t listed.</h1>
        <p className="lead-md mt-[2rem] max-w-[54rem]">
          The home you were looking for may have closed — or the link is off.
        </p>
        <Link
          href="/"
          className="mt-[4rem] inline-flex text-[2rem] font-medium underline"
        >
          Back to {siteConfig.brand.name}
        </Link>
      </div>
    </section>
  );
}
