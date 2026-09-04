"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";
import { ChevronIcon, FindWordmark } from "@/components/ui/Icons";
import { EASE_LUXURY, MOTION } from "@/lib/motion";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const isHome = pathname === "/";
  const solid = scrolled || open || !isHome;
  const reduce = useReducedMotion();

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > last && y > 120 && !open);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,transform,color,box-shadow] duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${solid ? "bg-white text-ink shadow-[0_1px_0_rgba(21,23,23,0.06)]" : "bg-transparent text-white"}`}
    >
      <div className="site-container">
        <div className="relative z-50 grid min-h-[8.4rem] items-center grid-cols-[1fr_auto] md:min-h-[7.8rem] md:grid-cols-[25rem_1fr_25rem]">
          <Link href="/" className="flex items-center" aria-label={siteConfig.brand.name}>
            <FindWordmark className="h-[2.6rem] w-[9.1rem]" />
          </Link>

          <nav
            className="mx-auto hidden items-center gap-[4rem] md:flex"
            aria-label={siteConfig.header.navAriaLabel ?? "Primary"}
          >
            {siteConfig.navigation.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link
                  href={item.href}
                  className="hover-shift flex cursor-pointer items-center gap-[1rem] text-[2rem] font-medium leading-[1.25]"
                >
                  <span data-text={item.label}>{item.label}</span>
                  {item.children ? (
                    <ChevronIcon
                      className={`h-[1em] w-[1em] transition-transform duration-300 ${
                        openMenu === item.label ? "rotate-180" : ""
                      }`}
                    />
                  ) : null}
                </Link>
                <AnimatePresence>
                  {item.children && openMenu === item.label ? (
                    <motion.div
                      initial={reduce ? false : { opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reduce ? undefined : { opacity: 0, y: 6 }}
                      transition={MOTION.menu}
                      className="absolute start-0 top-full z-100 mt-[1rem] w-[34rem] border border-[#e0e0e0] bg-white py-[2rem] text-ink shadow-[0_20px_40px_rgba(21,23,23,0.06)]"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-[3.2rem] py-[2rem] text-[2rem] font-medium leading-none transition-colors duration-300 hover:bg-[#f0f0f0]"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          <div className="hidden items-center justify-end md:flex">
            <Link
              href={siteConfig.header.signInHref}
              className="inline-flex items-center rounded-full bg-ink px-[2.4rem] py-[1.2rem] text-[1.6rem] font-medium text-white transition hover:bg-black"
            >
              <span className="hover-shift inline-flex overflow-hidden leading-none">
                <span data-text={siteConfig.header.signInLabel}>
                  {siteConfig.header.signInLabel}
                </span>
              </span>
            </Link>
          </div>

          <button
            type="button"
            className="ms-auto flex h-[3rem] w-[3rem] items-center justify-center md:hidden"
            aria-expanded={open}
            aria-label={siteConfig.header.menuAriaLabel ?? "Menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-[1.8rem] w-full">
              <span
                className={`absolute inset-x-0 top-0 h-[2px] rounded-full bg-current transition duration-300 ${
                  open ? "top-[0.8rem] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute inset-x-0 bottom-0 h-[2px] rounded-full bg-current transition duration-300 ${
                  open ? "bottom-[0.8rem] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobile-menu"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE_LUXURY }}
            className="fixed inset-0 z-[60] flex flex-col bg-white text-ink md:hidden"
          >
            <div className="flex flex-1 flex-col gap-[2.5rem] overflow-auto px-[4rem] pt-[10rem] pb-[3rem]">
              {siteConfig.navigation.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={reduce ? false : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.55,
                    delay: 0.05 + index * 0.05,
                    ease: EASE_LUXURY,
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex justify-between text-[2.6rem] font-medium leading-none"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: 0.05 + siteConfig.navigation.length * 0.05,
                  ease: EASE_LUXURY,
                }}
                className="mt-auto"
              >
                <Link
                  href={siteConfig.header.signInHref}
                  onClick={() => setOpen(false)}
                  className="text-[2.6rem] font-medium leading-none"
                >
                  {siteConfig.header.signInLabel}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
