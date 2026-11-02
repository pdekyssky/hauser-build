import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: `Kontakt | ${siteConfig.legalName}`,
  description: `Kontaktujte ${siteConfig.legalName}. Telefón, e-mail, adresa a formulár na nezáväzný dopyt — Badín.`,
  path: "/kontakt/",
});

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-ink/10 bg-ink pt-28 md:pt-36">
        <div className="container-site pb-16 md:pb-20">
          <SectionHeading
            eyebrow="Kontakt"
            title="Máte projekt? Poďme ho zrealizovať."
            description="Kontaktujte nás a spoločne nájdeme vhodné riešenie pre váš interiér alebo exteriér."
            dark
          />
        </div>
      </section>

      <section className="py-section">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <aside className="lg:col-span-5">
              <p className="font-display text-2xl font-semibold tracking-tight text-ink">
                {siteConfig.legalName}
              </p>

              <dl className="mt-10 space-y-8">
                <div>
                  <dt className="text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">
                    Telefón
                  </dt>
                  <dd className="mt-2">
                    <a
                      href={`tel:${siteConfig.phoneHref}`}
                      className="font-display text-2xl font-semibold tracking-tight text-ink transition-colors hover:text-clay md:text-3xl"
                    >
                      {siteConfig.phone}
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">
                    Email
                  </dt>
                  <dd className="mt-2">
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="break-all text-lg text-ink transition-colors hover:text-clay"
                    >
                      {siteConfig.email}
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">
                    Adresa
                  </dt>
                  <dd className="mt-2">
                    <address className="not-italic text-base leading-relaxed text-ink">
                      {siteConfig.addressLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </address>
                  </dd>
                </div>
              </dl>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={`tel:${siteConfig.phoneHref}`}
                  className="bg-ink px-6 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-clay"
                >
                  Zavolať
                </a>
                <a
                  href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("Dopyt — HAUSER BUILD")}`}
                  className="border border-ink/20 px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink hover:bg-ink hover:text-cream"
                >
                  Napísať email
                </a>
              </div>
            </aside>

            <div className="border border-ink/10 bg-cream-dark/20 p-6 md:p-8 lg:col-span-7 lg:p-10">
              <h2 className="font-display text-xl font-semibold tracking-tight text-ink md:text-2xl">
                Nezáväzný dopyt
              </h2>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
