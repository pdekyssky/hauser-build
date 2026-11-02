import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import ProjectsPreview from "@/components/ProjectsPreview";
import Process from "@/components/Process";
import CTASection from "@/components/CTASection";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: `${siteConfig.name} | Omietky — interiér, exteriér, dekoratívne`,
  description: `Interiérové, exteriérové a dekoratívne omietky v ${siteConfig.locality}. Remeselná práca s dôrazom na detail a čisté prevedenie.`,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="OMIETKY • REMESELNÁ PRÁCA • DETAIL"
        title="Omietky, ktoré dávajú priestoru charakter."
        description="Interiérové, exteriérové a dekoratívne omietky s dôrazom na detail, kvalitné prevedenie a čistý výsledok."
        primaryCta={{ label: "Pozrieť realizácie", href: "/realizacie/" }}
        secondaryCta={{ label: "Naše služby", href: "/#sluzby" }}
        image={{
          src: "/images/placeholders/hero-home.svg",
          alt: "Detail kvalitne spracovanej omietky v modernom priestore",
        }}
      />
      <Services />
      <WhyUs />
      <ProjectsPreview />
      <Process />
      <CTASection />
    </>
  );
}
