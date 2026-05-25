import { siteConfig } from "@/lib/siteConfig";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Datenschutz – Dreadlock Atelier",
};

export default function Datenschutz() {
  return (
    <>
      <PageHero label="Rechtliches" title="Datenschutz" />
      <main className="min-h-screen px-8 md:px-24 py-24">

      <div className="max-w-2xl flex flex-col gap-12 font-sans text-sm text-text/70 leading-relaxed">

        <div>
          <p className="font-sans text-xs tracking-widest uppercase text-text/30 mb-3">
            Verantwortliche Stelle
          </p>
          <p>{siteConfig.owner}</p>
          <p>{siteConfig.name}</p>
          <p>{siteConfig.address.street}</p>
          <p>{siteConfig.address.city}</p>
          <p className="mt-2">E-Mail: {siteConfig.contact.email}</p>
        </div>

        <div>
          <p className="font-sans text-xs tracking-widest uppercase text-text/30 mb-3">
            Allgemeines
          </p>
          <p>
            Der Schutz Ihrer persönlichen Daten ist uns ein besonderes
            Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf
            Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003).
          </p>
        </div>

        <div>
          <p className="font-sans text-xs tracking-widest uppercase text-text/30 mb-3">
            Erhebung von Daten
          </p>
          <p>
            Diese Website verwendet keine Tracking-Tools, keine Cookies zu
            Werbezwecken und keine Analyse-Dienste von Drittanbietern. Es
            werden lediglich technisch notwendige Serverlogs gespeichert, die
            automatisch nach 7 Tagen gelöscht werden.
          </p>
        </div>

        <div>
          <p className="font-sans text-xs tracking-widest uppercase text-text/30 mb-3">
            Kontaktaufnahme
          </p>
          <p>
            Wenn Sie uns per E-Mail kontaktieren, werden Ihre übermittelten
            Daten zum Zweck der Bearbeitung der Anfrage gespeichert. Diese
            Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </p>
        </div>

        <div>
          <p className="font-sans text-xs tracking-widest uppercase text-text/30 mb-3">
            Ihre Rechte
          </p>
          <p>
            Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung,
            Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch zu.
            Dazu können Sie uns jederzeit unter{" "}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-text underline underline-offset-2"
            >
              {siteConfig.contact.email}
            </a>{" "}
            kontaktieren.
          </p>
        </div>

      </div>
    </main>
    </>
  );
}
