import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10 bg-ink text-cream">
      <div className="container-site py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-2xl font-semibold tracking-tight">
              {siteConfig.legalName}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/65">
              Interiérové, exteriérové a dekoratívne omietky. Remeselná práca
              s dôrazom na detail.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-cream/45">
              Navigácia
            </p>
            <ul className="mt-4 space-y-2.5">
              {siteConfig.footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-cream/75 transition-colors hover:text-cream"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-cream/45">
              Kontakt
            </p>
            <div className="mt-4 space-y-2 text-sm text-cream/75">
              <p>
                <a
                  href={`tel:${siteConfig.phoneHref}`}
                  className="transition-colors hover:text-cream"
                >
                  {siteConfig.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-cream"
                >
                  {siteConfig.email}
                </a>
              </p>
              <address className="not-italic leading-relaxed">
                {siteConfig.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-cream/10 pt-6 text-xs text-cream/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.legalName}. Všetky práva vyhradené.
          </p>
          <Link
            href="/ochrana-osobnych-udajov/"
            className="transition-colors hover:text-cream/70"
          >
            Ochrana osobných údajov
          </Link>
        </div>
      </div>
    </footer>
  );
}
