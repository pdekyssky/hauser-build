import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/services";
import SectionHeading from "./SectionHeading";

export default function Services() {
  return (
    <section id="sluzby" className="scroll-mt-24 py-section">
      <div className="container-site">
        <SectionHeading
          eyebrow="Služby"
          title="Naše služby"
          description="Tri oblasti, na ktoré sa sústredíme — od hladkých interiérových povrchov cez fasády až po dekoratívne štruktúry."
        />

        <div className="mt-14 space-y-0 border-t border-ink/10">
          {services.map((service, index) => {
            const reverse = index % 2 === 1;
            return (
              <article
                key={service.id}
                className="grid items-stretch border-b border-ink/10 md:grid-cols-12"
              >
                <div
                  className={`flex flex-col justify-center py-10 md:col-span-5 md:py-16 ${
                    reverse ? "md:order-2 md:pl-10 lg:pl-16" : "md:pr-10 lg:pr-16"
                  }`}
                >
                  <span className="font-display text-sm tracking-[0.2em] text-clay">
                    {service.number}
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-muted md:text-base">
                    {service.summary}
                  </p>
                  <Link
                    href={`/${service.slug}/`}
                    className="link-underline mt-8 w-fit text-sm font-medium text-ink"
                  >
                    Zistiť viac
                  </Link>
                </div>

                <div
                  className={`relative aspect-[4/3] md:col-span-7 md:aspect-auto md:min-h-[340px] lg:min-h-[420px] ${
                    reverse ? "md:order-1" : ""
                  }`}
                >
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
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
