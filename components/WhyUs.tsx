import { whyUsItems } from "@/lib/process";
import SectionHeading from "./SectionHeading";

export default function WhyUs() {
  return (
    <section className="border-y border-ink/10 bg-cream-dark/40 py-section">
      <div className="container-site">
        <SectionHeading
          eyebrow="Prístup"
          title="Prečo práve my"
          description="Nie heslá, ale konkrétne veci, na ktoré dávame pozor pri každej zákazke."
        />

        <div className="mt-10 grid gap-px bg-ink/10 sm:mt-14 sm:grid-cols-2">
          {whyUsItems.map((item) => (
            <article key={item.number} className="bg-cream p-6 sm:p-8 md:p-10">
              <span className="font-display text-sm tracking-[0.2em] text-clay">
                {item.number}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-ink sm:mt-4 sm:text-xl md:text-2xl">
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
  );
}
