import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { aboutContent } from "@/lib/about";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: aboutContent.seo.title,
  description: aboutContent.seo.description,
  path: "/o-nas/",
});

export default function AboutPage() {
  return (
    <>
      <section className="pt-24 sm:pt-28 md:pt-36">
        <div className="container-site pb-section">
          <SectionHeading
            eyebrow={aboutContent.hero.eyebrow}
            title={aboutContent.hero.title}
            description={aboutContent.hero.intro}
          />
        </div>
      </section>

      <section className="border-t border-ink/10 py-section">
        <div className="container-site grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
              {aboutContent.whoWeAre.title}
            </h2>
          </div>
          <div className="space-y-5 md:col-span-7 md:col-start-6">
            {aboutContent.whoWeAre.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="text-base leading-relaxed text-ink-muted md:text-lg">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-cream-dark/40 py-section">
        <div className="container-site grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
              {aboutContent.howWeWork.title}
            </h2>
          </div>
          <div className="space-y-5 md:col-span-7 md:col-start-6">
            {aboutContent.howWeWork.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="text-base leading-relaxed text-ink-muted md:text-lg">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 py-section">
        <div className="container-site">
          <SectionHeading title={aboutContent.values.title} />
          <div className="mt-12 grid gap-px bg-ink/10 sm:grid-cols-2">
            {aboutContent.values.items.map((item, index) => (
              <article key={item.title} className="bg-cream p-6 sm:p-8 md:p-10">
                <span className="font-display text-sm tracking-[0.2em] text-clay">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted md:text-base">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 py-section">
        <div className="container-site">
          <SectionHeading
            eyebrow="Detaily"
            title="Práca zblízka"
            description="Miesto na fotografie detailov, materiálu a priebehu prác."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3 md:gap-5">
            {aboutContent.gallery.map((image, index) => (
              <div
                key={image.src}
                className={`relative overflow-hidden ${
                  index === 0 ? "aspect-[3/4] md:aspect-[4/5]" : "aspect-[4/3] md:aspect-[3/4]"
                }`}
              >
                <div className="img-zoom absolute inset-0">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
