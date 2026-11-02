/**
 * Centrálna konfigurácia firmy.
 * Všetky kontaktné údaje čerpajte odtiaľto — neopakujte ich v komponentoch.
 */
export const siteConfig = {
  /** Zobrazovaný názov / značka */
  name: "HAUSER BUILD",
  /** Obchodný názov */
  legalName: "HAUSER BUILD s.r.o.",
  /**
   * Doména bez trailing slash (vrátane basePath pri GitHub Pages).
   * Pri deployi nastavte NEXT_PUBLIC_SITE_URL, napr.
   * https://username.github.io/Tonhauser
   */
  url: (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://www.hauserbuild.sk"
  ),
  /** Lokalita z adresy (Badín) — používa sa v SEO textoch */
  locality: "Badín",
  description:
    "Remeselná firma špecializovaná na interiérové, exteriérové a dekoratívne omietky. Precízne prevedenie a čistý výsledok.",
  /** Telefón (zobrazovaný formát) */
  phone: "0948 899 330",
  /** Telefón pre tel: odkazy */
  phoneHref: "+421948899330",
  email: "ivan.tonhauser@gmail.com",
  address: {
    streetAddress: "L. Svobodu 429/1",
    addressLocality: "Badín",
    postalCode: "976 32",
    addressCountry: "SK",
  },
  /** Formátovaná adresa na jeden riadok / viac riadkov */
  addressLines: [
    "L. Svobodu 429/1",
    "976 32 Badín",
    "Slovensko",
  ] as readonly string[],
  /** IČO — zatiaľ nedodané */
  ico: null as string | null,
  /** Otváracie hodiny — zatiaľ nedodané */
  openingHours: null as string[] | null,
  /** Sociálne siete — zatiaľ nedodané */
  social: {
    facebook: null as string | null,
    instagram: null as string | null,
  },
  nav: [
    { label: "Služby", href: "/#sluzby" },
    { label: "Realizácie", href: "/realizacie/" },
    { label: "O nás", href: "/o-nas/" },
    { label: "Kontakt", href: "/kontakt/" },
  ],
  footerNav: [
    { label: "Domov", href: "/" },
    { label: "Služby", href: "/#sluzby" },
    { label: "Realizácie", href: "/realizacie/" },
    { label: "O nás", href: "/o-nas/" },
    { label: "Kontakt", href: "/kontakt/" },
  ],
  cta: {
    label: "Zavolať nám",
    href: "tel:+421948899330",
  },
  form: {
    subject: "Nový dopyt z webu – HAUSER BUILD",
    serviceOptions: [
      "Interiérové omietky",
      "Exteriérové omietky",
      "Dekoratívne omietky",
      "Iné",
    ] as readonly string[],
  },
} as const;

export type SiteConfig = typeof siteConfig;
