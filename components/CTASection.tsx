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
        <div className="grid items-end gap-10 border-t border-cream/10 pt-section md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cream/45">
              Kontakt
            </p>
            <h2 className="mt-3 font-display text-display-md font-semibold text-cream">
              {title}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-cream/65">
              {description}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:col-span-5 md:justify-end">
            <a
              href={`tel:${siteConfig.phoneHref}`}
              className="bg-cream px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-clay-light"
            >
              Zavolať
            </a>
            <Link
              href="/kontakt/"
              className="border border-cream/35 px-6 py-3.5 text-sm font-medium text-cream transition-colors hover:border-cream hover:bg-cream/10"
            >
              Nezáväzný dopyt
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
