import Link from "next/link";
import SectionHeading from "./SectionHeading";
import ProjectGallery from "./ProjectGallery";

export default function ProjectsPreview() {
  return (
    <section id="realizacie" className="scroll-mt-24 py-section">
      <div className="container-site">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Realizácie"
            title="Vybrané povrchy"
            description="Galéria prác — fotografie neskôr nahradíme reálnymi realizáciami. Zatiaľ sú pripravené jasné placeholdery."
          />
          <Link
            href="/realizacie/"
            className="link-underline shrink-0 text-sm font-medium text-ink"
          >
            Všetky realizácie
          </Link>
        </div>

        <div className="mt-12">
          <ProjectGallery limit={6} />
        </div>
      </div>
    </section>
  );
}
