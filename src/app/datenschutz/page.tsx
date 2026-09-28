import { siteConfig } from "@/lib/siteConfig";

export const metadata = {
  title: "Datenschutz – Dreadlock Atelier",
};

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage">{label}</p>
      <div className="font-sans text-sm text-text/60 leading-relaxed flex flex-col gap-2">
        {children}
      </div>
    </div>
  );
}

export default function Datenschutz() {
  return (
    <main>
      <section className="bg-dark px-8 md:px-24 pt-48 pb-20">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-8">Rechtliches</p>
        <h1 className="font-serif text-5xl md:text-6xl text-background leading-tight">Datenschutz</h1>
      </section>

      <section className="bg-background px-8 md:px-24 py-24">
        <div className="max-w-2xl flex flex-col gap-12">

          <Section label="Verantwortliche Stelle">
            <p>{siteConfig.owner}</p>
            <p>{siteConfig.name}</p>
            <p>{siteConfig.address.street}</p>
            <p>{siteConfig.address.city}</p>
            <p className="mt-1">E-Mail: {siteConfig.contact.email}</p>
          </Section>

          <Section label="Allgemeines">
            <p>
              Der Schutz deiner persönlichen Daten ist mir wichtig. Ich verarbeite
              deine Daten ausschließlich auf Grundlage der gesetzlichen Bestimmungen
              (DSGVO). Diese Datenschutzerklärung informiert dich darüber, welche
              Daten auf dieser Website erhoben und wie sie verwendet werden.
            </p>
          </Section>

          <Section label="Hosting">
            <p>
              Diese Website wird gehostet von <strong className="text-text/80">Vercel Inc.</strong>,
              340 Pine Street, Suite 701, San Francisco, CA 94104, USA.
              Vercel verarbeitet beim Aufruf der Website automatisch Server-Logfiles
              (IP-Adresse, Browsertyp, Datum/Uhrzeit). Diese Daten werden technisch
              notwendig erhoben und dienen der Sicherstellung des Betriebs.
              Grundlage ist Art. 6 Abs. 1 lit. f DSGVO. Weitere Informationen findest
              du in der{" "}
              <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 text-text/60 hover:text-text transition-colors">
                Datenschutzerklärung von Vercel
              </a>.
            </p>
          </Section>

          <Section label="Kontaktformular">
            <p>
              Wenn du das Kontaktformular auf dieser Website nutzt, werden die von
              dir eingegebenen Daten (Name, E-Mail-Adresse, Telefonnummer, Anliegen
              und Nachricht) zum Zweck der Bearbeitung deiner Anfrage gespeichert
              und verarbeitet.
            </p>
            <p>
              Der Versand der E-Mails erfolgt über den Dienst{" "}
              <strong className="text-text/80">Resend</strong> (Resend Inc., 2261 Market Street,
              Suite 5676, San Francisco, CA 94114, USA). Deine Daten werden dabei
              ausschließlich zur Übermittlung der Nachricht verwendet und nicht
              für andere Zwecke gespeichert. Weitere Informationen findest du in der{" "}
              <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 text-text/60 hover:text-text transition-colors">
                Datenschutzerklärung von Resend
              </a>.
            </p>
            <p>
              Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. f DSGVO
              (berechtigtes Interesse an der Beantwortung von Anfragen).
            </p>
          </Section>

          <Section label="Cookies & Tracking">
            <p>
              Diese Website verwendet keine Tracking-Tools, keine Analyse-Dienste
              und keine Werbe-Cookies. Es werden ausschließlich technisch notwendige
              Verbindungen zu Google Fonts für die Schriftdarstellung hergestellt.
              Dabei können IP-Adressen an Google-Server in den USA übertragen werden.
            </p>
          </Section>

          <Section label="Deine Rechte">
            <p>
              Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung
              der Verarbeitung, Datenübertragbarkeit und Widerspruch. Wenn du der
              Ansicht bist, dass die Verarbeitung deiner Daten gegen das Datenschutzrecht
              verstößt, kannst du dich bei der zuständigen Aufsichtsbehörde beschweren.
            </p>
            <p>
              Für Anfragen wende dich jederzeit an:{" "}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="underline underline-offset-2 text-text/60 hover:text-text transition-colors"
              >
                {siteConfig.contact.email}
              </a>
            </p>
          </Section>

          <p className="font-sans text-xs text-text/30 mt-4">
            Stand: September 2026
          </p>

        </div>
      </section>
    </main>
  );
}
