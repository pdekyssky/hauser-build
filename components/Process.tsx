import { processSteps } from "@/lib/process";
import SectionHeading from "./SectionHeading";

export default function Process() {
  return (
    <section className="py-section">
      <div className="container-site">
        <SectionHeading
          eyebrow="Spolupráca"
          title="Ako prebieha spolupráca"
          description="Jednoduchý postup od prvej konzultácie po odovzdanie hotovej práce."
        />

        <ol className="mt-10 grid gap-0 border-t border-ink/10 sm:mt-14 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <li
              key={step.number}
              className="border-b border-ink/10 py-7 sm:py-8 md:border-b md:px-5 md:py-10 lg:border-b-0 lg:border-r lg:px-6 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0 xl:px-8"
            >
              <span className="font-display text-[clamp(2rem,1.5rem+2vw,3rem)] font-semibold tracking-tight text-clay/80">
                {step.number}
              </span>
              <h3 className="mt-4 font-display text-base font-semibold tracking-tight text-ink sm:mt-5 sm:text-lg">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted sm:mt-3">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
