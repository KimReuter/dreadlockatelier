import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: "Impressum – Dreadlock Atelier",
};

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage">{label}</p>
      <div className="font-sans text-sm text-text/60 leading-relaxed flex flex-col gap-1">
        {children}
      </div>
    </div>
  );
}

export default function Impressum() {
  return (
    <main>
      <section className="bg-dark px-8 md:px-24 pt-48 pb-20">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-8">Rechtliches</p>
        <h1 className="font-serif text-5xl md:text-6xl text-background leading-tight">Impressum</h1>
      </section>

      <section className="bg-background px-8 md:px-24 py-24">
        <div className="max-w-2xl flex flex-col gap-12">

          <Section label="Angaben gemäß § 5 TMG">
            <p>{siteConfig.owner}</p>
            <p>{siteConfig.name}</p>
            <p>{siteConfig.address.street}</p>
            <p>{siteConfig.address.city}</p>
            <p>{siteConfig.address.region}</p>
          </Section>

          <Section label="Kontakt">
            <p>Telefon: {siteConfig.contact.phone}</p>
            <p>E-Mail: {siteConfig.contact.email}</p>
          </Section>

          <Section label="Steuernummer">
            <p>Steuernummer: [STEUERNUMMER EINTRAGEN]</p>
            <p className="text-text/35 text-xs mt-1">
              Kleingewerbetreibende gemäß § 19 UStG — keine Umsatzsteuer-ID vorhanden.
            </p>
          </Section>

          <Section label="Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV">
            <p>{siteConfig.owner}</p>
            <p>{siteConfig.address.street}</p>
            <p>{siteConfig.address.city}</p>
          </Section>

          <Section label="Haftungsausschluss">
            <p>
              Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt.
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
              kann jedoch keine Gewähr übernommen werden. Als Dienstanbieterin
              bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich.
            </p>
          </Section>

          <Section label="Urheberrecht">
            <p>
              Die durch die Seitenbetreiberin erstellten Inhalte und Werke auf
              dieser Website unterliegen dem deutschen Urheberrecht.
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der
              schriftlichen Zustimmung der jeweiligen Autorin.
            </p>
          </Section>

        </div>
      </section>
    </main>
  );
}
