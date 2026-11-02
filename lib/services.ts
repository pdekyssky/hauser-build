export type ServiceSlug =
  | "interierove-omietky"
  | "exterierove-omietky"
  | "dekorativne-omietky";

export type Service = {
  id: string;
  number: string;
  slug: ServiceSlug;
  title: string;
  shortTitle: string;
  summary: string;
  description: string;
  suitableFor: string[];
  process: { title: string; text: string }[];
  benefits: string[];
  image: {
    src: string;
    alt: string;
  };
  galleryCategory: "interier" | "exterier" | "dekorativne";
  seo: {
    title: string;
    description: string;
  };
};

export const services: Service[] = [
  {
    id: "interior",
    number: "01",
    slug: "interierove-omietky",
    title: "Interiérové omietky",
    shortTitle: "Interiérové omietky",
    summary:
      "Hladké a kvalitne spracované povrchy pre moderné interiéry. Dôraz na rovinnosť, detail a čisté prevedenie.",
    description:
      "Interiérové omietky tvoria základný povrch stien a stropov. Pripravíme podklad, zvolíme vhodné materiály a spracujeme povrch tak, aby bol rovný, pevný a pripravený na finálnu úpravu — či už maľbu, alebo ďalší dekoračný systém. Pracujeme v novostavbách aj pri rekonštrukciách, kde je dôležitá starostlivá príprava a čistota okolo realizácie.",
    suitableFor: [
      "Novostavby bytov a rodinných domov",
      "Rekonštrukcie interiérov",
      "Priestory pred maľbou alebo dekoračnou úpravou",
      "Steny a stropy vyžadujúce rovný, čistý povrch",
    ],
    process: [
      {
        title: "Obhliadka podkladu",
        text: "Posúdime stav stien, vlhkosť a vhodnosť podkladu pre zvolený systém omietky.",
      },
      {
        title: "Príprava povrchu",
        text: "Očistíme, opravíme a pripravíme plochy tak, aby omietka držala a výsledok bol rovný.",
      },
      {
        title: "Nanášanie a spracovanie",
        text: "Omietku nanášame a spracujeme s dôrazom na rovinnosť, hrúbku a finálny vzhľad.",
      },
      {
        title: "Kontrola a odovzdanie",
        text: "Skontrolujeme povrchy a odovzdáme priestor pripravený na ďalšie práce.",
      },
    ],
    benefits: [
      "Rovné a čisté povrchy vhodné na finálnu úpravu",
      "Práca s overenými materiálmi podľa typu podkladu",
      "Dôraz na detail pri napojení na ostenia, stropy a detaily",
      "Ochrana priestoru počas realizácie",
    ],
    image: {
      src: "/images/placeholders/interior-plaster.svg",
      alt: "Detail hladkej interiérovej omietky na stene",
    },
    galleryCategory: "interier",
    seo: {
      title: "Interiérové omietky Badín | HAUSER BUILD",
      description:
        "Interiérové omietky s dôrazom na rovinnosť, detail a čisté prevedenie. HAUSER BUILD s.r.o., Badín.",
    },
  },
  {
    id: "exterior",
    number: "02",
    slug: "exterierove-omietky",
    title: "Exteriérové omietky",
    shortTitle: "Exteriérové omietky",
    summary:
      "Funkčné a estetické povrchové úpravy fasád s dôrazom na odolnosť, správne prevedenie a výsledný vzhľad.",
    description:
      "Exteriérové omietky chránia fasádu a zároveň určujú celkový vzhľad domu. Dbáme na správnu prípravu podkladu, voľbu systému podľa konštrukcie a dôkladné spracovanie povrchu. Cieľom je odolný, jednotný a esteticky čistý výsledok, ktorý zvládne vonkajšie podmienky a pôsobí dobre zblízka aj z diaľky.",
    suitableFor: [
      "Fasády rodinných domov a menších objektov",
      "Obnovy a povrchové úpravy existujúcich fasád",
      "Povrchy na zatepľovacích systémoch",
      "Objekty, kde záleží na odolnosti aj vzhľade",
    ],
    process: [
      {
        title: "Posúdenie fasády",
        text: "Skontrolujeme podklad, detaily a navrhneme vhodné riešenie povrchovej úpravy.",
      },
      {
        title: "Príprava a ochrana",
        text: "Pripravíme plochy a zabezpečíme okolie stavby pred začatím prác.",
      },
      {
        title: "Realizácia omietky",
        text: "Nanášame a spracujeme omietku s ohľadom na štruktúru, farebnosť a napojenia.",
      },
      {
        title: "Finálna kontrola",
        text: "Overíme jednotnosť povrchu a odovzdáme hotovú fasádu.",
      },
    ],
    benefits: [
      "Odolný povrch vhodný do vonkajšieho prostredia",
      "Jednotný vzhľad fasády a čisté napojenia",
      "Práca podľa typu podkladu a konštrukcie",
      "Dôraz na výsledný estetický dojem",
    ],
    image: {
      src: "/images/placeholders/exterior-plaster.svg",
      alt: "Detail exteriérovej omietky na fasáde domu",
    },
    galleryCategory: "exterier",
    seo: {
      title: "Exteriérové omietky a fasády | HAUSER BUILD",
      description:
        "Exteriérové omietky a povrchové úpravy fasád. Odolnosť, správne prevedenie a čistý vzhľad. HAUSER BUILD s.r.o.",
    },
  },
  {
    id: "decorative",
    number: "03",
    slug: "dekorativne-omietky",
    title: "Dekoratívne omietky",
    shortTitle: "Dekoratívne omietky",
    summary:
      "Štruktúry a povrchy, ktoré dokážu z obyčajnej steny vytvoriť výrazný prvok interiéru.",
    description:
      "Dekoratívne omietky prinášajú do interiéru textúru, hĺbku a charakter. Od jemne štruktúrovaných povrchov po výraznejšie dekoratívne úpravy — výsledok ladíme podľa priestoru, svetla a požadovaného dojmu. Nejde o efekt za každú cenu, ale o povrch, ktorý sedí k miestnosti a zostáva kvalitne spracovaný aj pri bližšom pohľade.",
    suitableFor: [
      "Obývacie izby, chodby a reprezentatívne priestory",
      "Akcentové steny v interiéri",
      "Projekty, kde má povrch niesť charakter priestoru",
      "Kombináciu s hladkými plochami a moderným zariadením",
    ],
    process: [
      {
        title: "Konzultácia vzhľadu",
        text: "Dohodneme typ povrchu, štruktúru a vhodnosť pre konkrétny priestor.",
      },
      {
        title: "Príprava podkladu",
        text: "Pripravíme stenu tak, aby dekoračný systém držal a pôsobil jednotne.",
      },
      {
        title: "Aplikácia dekoračnej úpravy",
        text: "Nanášame a formujeme povrch podľa zvolenej techniky a požadovaného výrazu.",
      },
      {
        title: "Finálne doladenie",
        text: "Dolaďujeme detaily a odovzdávame hotový povrch.",
      },
    ],
    benefits: [
      "Povrch s charakterom, nie len rovná stena",
      "Možnosť prispôsobiť štruktúru konkrétnemu interiéru",
      "Kvalitné spracovanie aj pri bližšom pohľade",
      "Čistá práca v hotovom alebo rozpracovanom interiéri",
    ],
    image: {
      src: "/images/placeholders/decorative-plaster.svg",
      alt: "Detail dekoratívnej omietky so štruktúrou",
    },
    galleryCategory: "dekorativne",
    seo: {
      title: "Dekoratívne omietky | HAUSER BUILD",
      description:
        "Dekoratívne omietky a štruktúrované povrchy pre interiéry. Remeselné prevedenie — HAUSER BUILD s.r.o.",
    },
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
