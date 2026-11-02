"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-ink/10 bg-cream/95 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-site flex h-16 items-center justify-between gap-3 md:h-20">
        <Link
          href="/"
          className="min-w-0 font-display text-base font-semibold tracking-tight text-ink sm:text-lg md:text-xl"
          onClick={() => setOpen(false)}
        >
          {siteConfig.name}
        </Link>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Hlavná navigácia"
        >
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="link-underline text-sm text-ink-muted transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${siteConfig.phoneHref}`}
            className="bg-ink px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-clay"
          >
            {siteConfig.cta.label}
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`tel:${siteConfig.phoneHref}`}
            className="bg-ink px-3 py-2 text-xs font-medium text-cream transition-colors hover:bg-clay sm:px-4 sm:text-sm"
          >
            {siteConfig.cta.label}
          </a>
          <button
            type="button"
            className="relative z-50 flex h-10 w-10 items-center justify-center"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Zavrieť menu" : "Otvoriť menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex w-5 flex-col gap-1.5">
              <span
                className={`block h-px w-full bg-ink transition-transform duration-300 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-px w-full bg-ink transition-opacity duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-px w-full bg-ink transition-transform duration-300 ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`fixed inset-0 top-16 bg-cream transition-all duration-300 lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <nav
          className="container-site flex flex-col gap-1 py-8"
          aria-label="Mobilná navigácia"
        >
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-b border-ink/10 py-4 font-display text-2xl text-ink"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`tel:${siteConfig.phoneHref}`}
            className="mt-8 bg-ink px-5 py-3.5 text-center text-sm font-medium text-cream"
            onClick={() => setOpen(false)}
          >
            {siteConfig.cta.label} — {siteConfig.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
