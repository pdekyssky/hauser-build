"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { siteConfig } from "@/lib/site";

const mobileNav = siteConfig.footerNav;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuId = useId();
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const scrollYRef = useRef(0);

  const closeMenu = useCallback(() => {
    setOpen(false);
  }, []);

  const openMenu = useCallback(() => {
    setOpen(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock background scroll while menu is open (incl. iOS)
  useEffect(() => {
    if (!open) return;

    scrollYRef.current = window.scrollY;
    const { style: bodyStyle } = document.body;
    const { style: htmlStyle } = document.documentElement;

    bodyStyle.overflow = "hidden";
    bodyStyle.position = "fixed";
    bodyStyle.top = `-${scrollYRef.current}px`;
    bodyStyle.left = "0";
    bodyStyle.right = "0";
    bodyStyle.width = "100%";
    htmlStyle.overflow = "hidden";

    return () => {
      bodyStyle.overflow = "";
      bodyStyle.position = "";
      bodyStyle.top = "";
      bodyStyle.left = "";
      bodyStyle.right = "";
      bodyStyle.width = "";
      htmlStyle.overflow = "";
      window.scrollTo(0, scrollYRef.current);
    };
  }, [open]);

  // Escape to close + focus management
  useEffect(() => {
    if (!open) return;

    const openButton = openButtonRef.current;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    window.addEventListener("keydown", onKeyDown);
    const frame = window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.cancelAnimationFrame(frame);
      openButton?.focus();
    };
  }, [open, closeMenu]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          open
            ? "pointer-events-none opacity-0 lg:pointer-events-auto lg:opacity-100"
            : ""
        } ${
          scrolled
            ? "border-b border-ink/10 bg-cream/95 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="container-site flex h-16 items-center justify-between gap-3 md:h-20">
          <Link
            href="/"
            className="min-w-0 truncate font-display text-base font-semibold tracking-tight text-ink sm:text-lg md:text-xl"
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
              className="btn-touch bg-ink text-cream transition-colors hover:bg-clay"
            >
              {siteConfig.cta.label}
            </a>
          </div>

          <div className="flex shrink-0 items-center gap-2 lg:hidden">
            <a
              href={`tel:${siteConfig.phoneHref}`}
              className="inline-flex min-h-touch items-center bg-ink px-3 text-xs font-medium text-cream transition-colors hover:bg-clay sm:px-4 sm:text-sm"
            >
              <span className="sm:hidden">Zavolať</span>
              <span className="hidden sm:inline">{siteConfig.cta.label}</span>
            </a>
            <button
              ref={openButtonRef}
              type="button"
              className="flex h-11 w-11 items-center justify-center"
              aria-expanded={open}
              aria-controls={menuId}
              aria-label="Otvoriť menu"
              onClick={openMenu}
            >
              <span className="sr-only">Menu</span>
              <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
                <span className="block h-px w-full bg-ink" />
                <span className="block h-px w-full bg-ink" />
                <span className="block h-px w-full bg-ink" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen mobile menu — sibling of header so it covers hero/content */}
      <div
        id={menuId}
        className={`mobile-menu-overlay fixed inset-0 z-[100] flex flex-col bg-[#F1EEE8] transition-[opacity,visibility] duration-300 lg:hidden ${
          open
            ? "visible pointer-events-auto opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
        role="dialog"
        aria-modal={open}
        aria-label="Mobilná navigácia"
      >
        <div
          className="flex shrink-0 items-center justify-between border-b border-ink/10 px-5 sm:px-8"
          style={{
            paddingTop: "max(0.75rem, env(safe-area-inset-top))",
            paddingBottom: "0.75rem",
            minHeight: "4rem",
          }}
        >
          <Link
            href="/"
            className="font-display text-base font-semibold tracking-tight text-ink sm:text-lg"
            onClick={closeMenu}
          >
            {siteConfig.name}
          </Link>
          <button
            ref={closeButtonRef}
            type="button"
            className="flex h-11 w-11 items-center justify-center text-ink"
            aria-label="Zavrieť menu"
            onClick={closeMenu}
          >
            <span className="sr-only">Zavrieť</span>
            <span className="relative block h-5 w-5" aria-hidden="true">
              <span className="absolute left-0 top-1/2 block h-px w-5 -translate-y-1/2 rotate-45 bg-ink" />
              <span className="absolute left-0 top-1/2 block h-px w-5 -translate-y-1/2 -rotate-45 bg-ink" />
            </span>
          </button>
        </div>

        <nav
          className="mobile-menu-scroll min-h-0 flex-1 overflow-y-auto px-5 sm:px-8"
          aria-label="Mobilná navigácia"
        >
          <ul className="flex flex-col pt-4">
            {mobileNav.map((item, index) => (
              <li key={item.href} className="border-b border-ink/10">
                <Link
                  href={item.href}
                  className="group flex min-h-touch items-baseline gap-3 py-3.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B89A62] sm:gap-4 sm:py-4"
                  onClick={closeMenu}
                  tabIndex={open ? 0 : -1}
                >
                  <span className="font-display text-xs tracking-[0.2em] text-[#B89A62]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-[clamp(1.5rem,1.15rem+2vw,2rem)] font-semibold leading-none tracking-tight text-ink transition-colors group-hover:text-[#B89A62]">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Flows after nav — no mt-auto / justify-between that pushes past the fold */}
          <div
            className="mt-8 border-t border-ink/10 pt-6"
            style={{
              paddingBottom:
                "max(1.5rem, calc(1rem + env(safe-area-inset-bottom)))",
            }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">
              Máte projekt?
            </p>
            <a
              href={`tel:${siteConfig.phoneHref}`}
              className="mt-3 inline-block font-display text-2xl font-semibold tracking-tight text-ink transition-colors hover:text-[#B89A62] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B89A62]"
              onClick={closeMenu}
              tabIndex={open ? 0 : -1}
            >
              {siteConfig.phone}
            </a>
            <p className="mt-2 text-sm text-ink-muted">Zavolajte nám</p>
          </div>
        </nav>
      </div>
    </>
  );
}
