import Link from "next/link";
import { siteConfig } from "@/lib/site";

type CTASectionProps = {
  title?: string;
  description?: string;
};

export default function CTASection({
  title = "Pripravujeme ďalšiu realizáciu.",
  description = "Ak plánujete interiérové, exteriérové alebo dekoratívne omietky, ozvite sa. Prejdeme podklad, rozsah a možný postup.",
}: CTASectionProps) {
  return (
    <section className="bg-ink">
      <div className="container-site py-section">
        <div className="grid items-end gap-8 border-t border-cream/10 pt-section sm:gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cream/45">
              Kontakt
            </p>
            <h2 className="mt-3 font-display text-display-md font-semibold text-cream text-balance">
              {title}
            </h2>
            <p className="mt-4 max-w-xl text-[0.9375rem] leading-relaxed text-cream/65 sm:text-base">
              {description}
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap md:col-span-5 md:justify-end">
            <a
              href={`tel:${siteConfig.phoneHref}`}
              className="btn-touch bg-cream text-center text-ink transition-colors hover:bg-clay-light"
            >
              Zavolať
            </a>
            <Link
              href="/kontakt/"
              className="btn-touch border border-cream/35 text-center text-cream transition-colors hover:border-cream hover:bg-cream/10"
            >
              Nezáväzný dopyt
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
