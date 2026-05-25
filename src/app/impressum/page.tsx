import { siteConfig } from "@/lib/siteConfig";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Impressum – Dreadlock Atelier",
};

export default function Impressum() {
  return (
    <>
      <PageHero label="Rechtliches" title="Impressum" />
      <main className="min-h-screen px-8 md:px-24 py-24">

      <div className="max-w-2xl flex flex-col gap-12 font-sans text-sm text-text/70 leading-relaxed">

        <div>
          <p className="font-sans text-xs tracking-widest uppercase text-text/30 mb-3">
            Angaben gemäß § 5 TMG
          </p>
          <p>{siteConfig.owner}</p>
          <p>{siteConfig.name}</p>
          <p>{siteConfig.address.street}</p>
          <p>{siteConfig.address.city}</p>
        </div>

        <div>
          <p className="font-sans text-xs tracking-widest uppercase text-text/30 mb-3">
            Kontakt
          </p>
          <p>Telefon: {siteConfig.contact.phone}</p>
          <p>E-Mail: {siteConfig.contact.email}</p>
        </div>

        <div>
          <p className="font-sans text-xs tracking-widest uppercase text-text/30 mb-3">
            Verantwortlich für den Inhalt
          </p>
          <p>{siteConfig.owner}</p>
          <p>{siteConfig.address.street}</p>
          <p>{siteConfig.address.city}</p>
        </div>

        <div>
          <p className="font-sans text-xs tracking-widest uppercase text-text/30 mb-3">
            Haftungsausschluss
          </p>
          <p>
            Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt.
            Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
            kann jedoch keine Gewähr übernommen werden.
          </p>
        </div>

        <div>
          <p className="font-sans text-xs tracking-widest uppercase text-text/30 mb-3">
            Urheberrecht
          </p>
          <p>
            Die durch die Seitenbetreiberin erstellten Inhalte und Werke auf
            dieser Website unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung der jeweiligen Autorin.
          </p>
        </div>

      </div>
    </main>
    </>
  );
}
