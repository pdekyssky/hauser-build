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

        <ol className="mt-14 grid gap-0 border-t border-ink/10 md:grid-cols-4">
          {processSteps.map((step) => (
            <li
              key={step.number}
              className="border-b border-ink/10 py-8 md:border-b-0 md:border-r md:px-6 md:py-10 md:first:pl-0 md:last:border-r-0 md:last:pr-0 lg:px-8"
            >
              <span className="font-display text-4xl font-semibold tracking-tight text-clay/80 md:text-5xl">
                {step.number}
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-ink">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
