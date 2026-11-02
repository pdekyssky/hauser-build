import SectionHeading from "@/components/SectionHeading";
import ProjectGallery from "@/components/ProjectGallery";
import CTASection from "@/components/CTASection";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: `Realizácie | ${siteConfig.name} — omietky a povrchové úpravy`,
  description: `Galéria realizácií interiérových, exteriérových a dekoratívnych omietok. ${siteConfig.name}, ${siteConfig.locality}.`,
  path: "/realizacie/",
});

export default function ProjectsPage() {
  return (
    <>
      <section className="pt-24 sm:pt-28 md:pt-36">
        <div className="container-site pb-8 sm:pb-10 md:pb-14">
          <SectionHeading
            eyebrow="Portfólio"
            title="Realizácie"
            description="Vybrané povrchy a detaily. Fotografie sú zatiaľ placeholdery — vymeňte ich v lib/projects.ts a v /public/images/ za reálne snímky z realizácií."
          />
        </div>
      </section>

      <section className="pb-section">
        <div className="container-site">
          <ProjectGallery showFilters />
        </div>
      </section>

      <CTASection
        title="Chcete podobný výsledok?"
        description="Napíšte alebo zavolajte. Prejdeme typ priestoru, materiál a možný postup."
      />
    </>
  );
}
