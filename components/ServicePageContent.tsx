import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/services";
import Hero from "./Hero";
import SectionHeading from "./SectionHeading";
import ProjectGallery from "./ProjectGallery";
import CTASection from "./CTASection";

type ServicePageContentProps = {
  service: Service;
};

export default function ServicePageContent({ service }: ServicePageContentProps) {
  return (
    <>
      <Hero
        eyebrow={service.number}
        title={service.title}
        description={service.summary}
        image={service.image}
        compact
        primaryCta={{ label: "Nezáväzný dopyt", href: "/kontakt/" }}
        secondaryCta={{ label: "Realizácie", href: "/realizacie/" }}
      />

      <section className="py-section">
        <div className="container-site">
          <div className="grid gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-7">
              <SectionHeading title="O službe" />
              <p className="mt-6 text-base leading-relaxed text-ink-muted md:text-lg">
                {service.description}
              </p>
            </div>
            <aside className="border border-ink/10 p-6 md:col-span-5 md:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">
                Pre koho je vhodná
              </p>
              <ul className="mt-5 space-y-3">
                {service.suitableFor.map((item) => (
                  <li
                    key={item}
                    className="border-t border-ink/10 pt-3 text-sm leading-relaxed text-ink first:border-t-0 first:pt-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-cream-dark/40 py-section">
        <div className="container-site">
          <SectionHeading
            eyebrow="Priebeh"
            title="Typický priebeh realizácie"
          />
          <ol className="mt-12 grid gap-0 border-t border-ink/10 md:grid-cols-2">
            {service.process.map((step, index) => (
              <li
                key={step.title}
                className="border-b border-ink/10 py-8 md:px-6 md:py-10 md:odd:border-r md:odd:pl-0 md:even:pr-0"
              >
                <span className="font-display text-sm tracking-[0.2em] text-clay">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted md:text-base">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-section">
        <div className="container-site">
          <div className="grid items-center gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <SectionHeading eyebrow="Výhody" title="Čo získate" />
              <ul className="mt-8 space-y-4">
                {service.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex gap-3 border-b border-ink/10 pb-4 text-sm leading-relaxed text-ink-muted last:border-b-0 md:text-base"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" aria-hidden />
                    {benefit}
                  </li>
                ))}
              </ul>
              <Link
                href="/kontakt/"
                className="btn-touch mt-8 bg-ink text-cream transition-colors hover:bg-clay"
              >
                Nezáväzný dopyt
              </Link>
            </div>
            <div className="relative aspect-[4/5] md:col-span-7">
              <div className="img-zoom absolute inset-0">
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 58vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 py-section">
        <div className="container-site">
          <SectionHeading
            eyebrow="Galéria"
            title="Súvisiace realizácie"
            description="Ukázky z danej kategórie. Po doplnení fotografií tu budú konkrétne projekty."
          />
          <div className="mt-12">
            <ProjectGallery category={service.galleryCategory} />
          </div>
        </div>
      </section>

      <CTASection
        title={`Máte záujem o ${service.title.toLowerCase()}?`}
        description="Ozvite sa — prejdeme podklad, rozsah a vhodný postup pre váš priestor."
      />
    </>
  );
}
