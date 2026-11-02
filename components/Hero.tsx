import Image from "next/image";
import Link from "next/link";

type HeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  image: { src: string; alt: string };
  compact?: boolean;
};

export default function Hero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  image,
  compact = false,
}: HeroProps) {
  return (
    <section
      className={`relative overflow-hidden bg-ink ${
        compact ? "min-h-[58vh]" : "min-h-[88vh] md:min-h-screen"
      }`}
    >
      <div className="absolute inset-0">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />
        <div className="absolute inset-0 bg-ink/20" />
      </div>

      <div
        className={`container-site relative flex ${
          compact ? "min-h-[58vh] items-end pb-16 pt-28" : "min-h-[88vh] items-end pb-20 pt-32 md:min-h-screen md:pb-28"
        }`}
      >
        <div className="max-w-3xl reveal">
          {eyebrow ? (
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-cream/70">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="mt-4 font-display text-display-xl font-semibold text-cream">
            {title}
          </h1>
          {description ? (
            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/75 md:text-lg">
              {description}
            </p>
          ) : null}
          {(primaryCta || secondaryCta) && (
            <div className="mt-10 flex flex-wrap gap-4">
              {primaryCta ? (
                <Link
                  href={primaryCta.href}
                  className="bg-cream px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-clay-light"
                >
                  {primaryCta.label}
                </Link>
              ) : null}
              {secondaryCta ? (
                <Link
                  href={secondaryCta.href}
                  className="border border-cream/35 px-6 py-3.5 text-sm font-medium text-cream transition-colors hover:border-cream hover:bg-cream/10"
                >
                  {secondaryCta.label}
                </Link>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
