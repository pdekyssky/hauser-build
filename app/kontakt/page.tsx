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
      <section className="border-b border-ink/10 bg-ink pt-24 sm:pt-28 md:pt-36">
        <div className="container-site pb-12 sm:pb-16 md:pb-20">
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
          <div className="grid gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-16">
            <aside className="lg:col-span-5">
              <p className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                {siteConfig.legalName}
              </p>

              <dl className="mt-8 space-y-7 sm:mt-10 sm:space-y-8">
                <div>
                  <dt className="text-xs font-medium uppercase tracking-[0.18em] text-ink-muted">
                    Telefón
                  </dt>
                  <dd className="mt-2">
                    <a
                      href={`tel:${siteConfig.phoneHref}`}
                      className="inline-block font-display text-[clamp(1.5rem,1.1rem+2vw,1.875rem)] font-semibold tracking-tight text-ink transition-colors hover:text-clay"
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
                      className="break-all text-base text-ink transition-colors hover:text-clay sm:text-lg"
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

              <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">
                <a
                  href={`tel:${siteConfig.phoneHref}`}
                  className="btn-touch bg-ink text-center text-cream transition-colors hover:bg-clay"
                >
                  Zavolať
                </a>
                <a
                  href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("Dopyt — HAUSER BUILD")}`}
                  className="btn-touch border border-ink/20 text-center text-ink transition-colors hover:border-ink hover:bg-ink hover:text-cream"
                >
                  Napísať email
                </a>
              </div>
            </aside>

            <div className="min-w-0 border border-ink/10 bg-cream-dark/20 p-5 sm:p-6 md:p-8 lg:col-span-7 lg:p-10">
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
