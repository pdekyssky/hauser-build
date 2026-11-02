import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: `Ochrana osobných údajov | ${siteConfig.legalName}`,
  description: `Informácie o spracúvaní osobných údajov z kontaktného formulára — ${siteConfig.legalName}.`,
  path: "/ochrana-osobnych-udajov/",
});

export default function PrivacyPage() {
  return (
    <section className="pt-28 md:pt-36">
      <div className="container-site pb-section">
        <SectionHeading
          eyebrow="Informácie"
          title="Ochrana osobných údajov"
          description="Stručný prehľad o tom, aké údaje zbierame cez kontaktný formulár a na aký účel. Tento text nie je právne overený dokument — ide o základnú informáciu pre návštevníkov webu."
        />

        <div className="mt-14 max-w-3xl space-y-12 border-t border-ink/10 pt-12 text-base leading-relaxed text-ink-muted">
          <section>
            <h2 className="font-display text-xl font-semibold text-ink">
              Prevádzkovateľ
            </h2>
            <p className="mt-4">
              Prevádzkovateľom kontaktného formulára a tohto webu je:
            </p>
            <address className="mt-4 not-italic text-ink">
              <span className="block font-medium">{siteConfig.legalName}</span>
              {siteConfig.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
              <span className="mt-2 block">
                Email:{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-ink underline underline-offset-2 hover:text-clay"
                >
                  {siteConfig.email}
                </a>
              </span>
              <span className="block">
                Telefón:{" "}
                <a
                  href={`tel:${siteConfig.phoneHref}`}
                  className="text-ink underline underline-offset-2 hover:text-clay"
                >
                  {siteConfig.phone}
                </a>
              </span>
            </address>
            <p className="mt-4 text-sm">
              IČO a ďalšie identifikačné údaje spoločnosti —{" "}
              <span className="text-ink">na doplnenie</span>.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink">
              Aké údaje zbierame
            </h2>
            <p className="mt-4">
              Cez formulár na stránke Kontakt môžete odoslať nezáväzný dopyt.
              Zbierame tieto údaje:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>meno a priezvisko</li>
              <li>telefónne číslo</li>
              <li>e-mail (ak ho uvediete)</li>
              <li>typ požadovanej služby</li>
              <li>lokalita realizácie</li>
              <li>správa / popis projektu (ak ju uvediete)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink">
              Účel spracovania
            </h2>
            <p className="mt-4">
              Údaje používame výlučne na vybavenie vášho dopytu — kontaktovanie
              späť, konzultáciu a prípravu cenovej ponuky alebo ďalšieho postupu.
              Údaje nepoužívame na marketingové kampane ani ich nepredávame
              tretím stranám na reklamné účely.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink">
              Ako údaje spracúvame
            </h2>
            <p className="mt-4">
              Formulár je odosielaný cez službu{" "}
              <a
                href="https://web3forms.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink underline underline-offset-2 hover:text-clay"
              >
                Web3Forms
              </a>
              , ktorá zabezpečuje doručenie správy na e-mail prevádzkovateľa (
              {siteConfig.email}). Web samotný nemá vlastný backend ani databázu
              — údaje sa neukladajú na našom serveri.
            </p>
            <p className="mt-4">
              Po doručení e-mailu ich spracúvame v bežnej e-mailovej komunikácii
              v rozsahu potrebnom na vybavenie dopytu.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink">
              Doba uchovávania
            </h2>
            <p className="mt-4">
              Konkrétna doba uchovávania komunikácie a osobných údajov z dopytov
              — <span className="text-ink">na doplnenie</span>. Údaje uchovávame
              len po dobu potrebnú na vybavenie dopytu a prípadnú súvisiacu
              komunikáciu, pokiaľ právne predpisy nevyžadujú inak.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink">
              Cookies a sledovanie
            </h2>
            <p className="mt-4">
              Tento web nepoužíva analytické cookies, reklamné trackery ani
              zbytočné externé skripty na sledovanie návštevníkov.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink">
              Vaše práva
            </h2>
            <p className="mt-4">
              V súvislosti s osobnými údajmi môžete požiadať o prístup, opravu
              alebo výmaz údajov, ktoré o vás spracúvame v súvislosti s dopytom.
              Kontaktujte nás na{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-ink underline underline-offset-2 hover:text-clay"
              >
                {siteConfig.email}
              </a>{" "}
              alebo telefonicky na{" "}
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="text-ink underline underline-offset-2 hover:text-clay"
              >
                {siteConfig.phone}
              </a>
              .
            </p>
          </section>

          <p className="border-t border-ink/10 pt-8 text-sm">
            <Link
              href="/kontakt/"
              className="text-ink underline underline-offset-2 hover:text-clay"
            >
              Späť na kontakt
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
