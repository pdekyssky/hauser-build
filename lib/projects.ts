export type ProjectCategory = "interier" | "exterier" | "dekorativne";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
};

/**
 * Galéria realizácií.
 * Zatiaľ placeholder obrázky — vymeňte `src` za reálne fotografie v /public/images/projects/.
 * Nevymýšľame fiktívne recenzie ani neexistujúce zákazky; názvy sú generické popisné.
 */
export const projects: Project[] = [
  {
    id: "p1",
    title: "Hladké steny — interiér",
    category: "interier",
    categoryLabel: "Interiér",
    description: "Interiérová omietka pripravená na finálnu úpravu.",
    image: {
      src: "/images/placeholders/project-01.svg",
      alt: "Hladký interiérový povrch omietky",
    },
  },
  {
    id: "p2",
    title: "Fasáda — povrchová úprava",
    category: "exterier",
    categoryLabel: "Exteriér",
    description: "Exteriérová omietka na fasáde objektu.",
    image: {
      src: "/images/placeholders/project-02.svg",
      alt: "Povrch exteriérovej omietky na fasáde",
    },
  },
  {
    id: "p3",
    title: "Štruktúrovaná stena",
    category: "dekorativne",
    categoryLabel: "Dekoratívne",
    description: "Dekoratívny povrch ako akcent v interiéri.",
    image: {
      src: "/images/placeholders/project-03.svg",
      alt: "Dekoratívna omietka so štruktúrou",
    },
  },
  {
    id: "p4",
    title: "Steny a stropy",
    category: "interier",
    categoryLabel: "Interiér",
    description: "Komplexná príprava interiérových povrchov.",
    image: {
      src: "/images/placeholders/project-04.svg",
      alt: "Interiérové omietky na stenách a strope",
    },
  },
  {
    id: "p5",
    title: "Detail napojenia",
    category: "interier",
    categoryLabel: "Interiér",
    description: "Čisté napojenia a spracovanie detailov.",
    image: {
      src: "/images/placeholders/project-05.svg",
      alt: "Detail napojenia interiérovej omietky",
    },
  },
  {
    id: "p6",
    title: "Fasádny povrch",
    category: "exterier",
    categoryLabel: "Exteriér",
    description: "Jednotná povrchová úprava vonkajšej steny.",
    image: {
      src: "/images/placeholders/project-06.svg",
      alt: "Jednotný povrch exteriérovej omietky",
    },
  },
];

export const projectCategories: {
  id: "all" | ProjectCategory;
  label: string;
}[] = [
  { id: "all", label: "Všetky" },
  { id: "interier", label: "Interiér" },
  { id: "exterier", label: "Exteriér" },
  { id: "dekorativne", label: "Dekoratívne" },
];

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category);
}
