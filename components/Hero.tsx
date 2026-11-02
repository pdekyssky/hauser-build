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
        compact
          ? "min-h-[min(58vh,36rem)]"
          : "min-h-[min(88dvh,100vh)] md:min-h-screen"
      }`}
    >
      <div className="absolute inset-0">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />
        <div className="absolute inset-0 bg-ink/20" />
      </div>

      <div
        className={`container-site relative flex w-full ${
          compact
            ? "min-h-[min(58vh,36rem)] items-end pb-12 pt-24 sm:pb-16 sm:pt-28"
            : "min-h-[min(88dvh,100vh)] items-end pb-14 pt-28 sm:pb-20 sm:pt-32 md:min-h-screen md:pb-28"
        }`}
      >
        <div className="w-full max-w-3xl reveal">
          {eyebrow ? (
            <p className="max-w-full text-[0.65rem] font-medium uppercase leading-relaxed tracking-[0.12em] text-cream/70 sm:text-xs sm:tracking-[0.22em]">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="mt-3 font-display text-display-xl font-semibold text-cream sm:mt-4 text-balance">
            {title}
          </h1>
          {description ? (
            <p className="mt-4 max-w-xl text-[0.9375rem] leading-relaxed text-cream/75 sm:mt-6 sm:text-base md:text-lg">
              {description}
            </p>
          ) : null}
          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
              {primaryCta ? (
                <Link
                  href={primaryCta.href}
                  className="btn-touch bg-cream text-center text-ink transition-colors hover:bg-clay-light sm:min-w-[10rem]"
                >
                  {primaryCta.label}
                </Link>
              ) : null}
              {secondaryCta ? (
                <Link
                  href={secondaryCta.href}
                  className="btn-touch border border-cream/35 text-center text-cream transition-colors hover:border-cream hover:bg-cream/10 sm:min-w-[10rem]"
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
