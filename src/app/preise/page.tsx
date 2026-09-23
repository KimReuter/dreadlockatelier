"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1, delay, ease: "easeOut" as const },
  viewport: { once: true },
});

export default function PreisePage() {
  return (
    <main>

      {/* Hero */}
      <section className="bg-dark px-8 md:px-24 pt-48 pb-32">
        <motion.p {...fade(0)} className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-8">
          Preise
        </motion.p>
        <motion.h1
          {...fade(0.1)}
          className="font-serif text-5xl md:text-6xl lg:text-7xl text-background leading-tight mb-10"
        >
          Was kostet dein<br />neues Lieblingshaar?
        </motion.h1>
        <motion.p {...fade(0.2)} className="font-sans text-sm text-background/45 leading-loose max-w-xl">
          Ich verstecke meine Preise nicht. Hier findest du alles — klar, ehrlich und ohne Überraschungen.
        </motion.p>
      </section>

      {/* Das Prinzip */}
      <section className="bg-background px-8 md:px-24 py-32">

        <motion.div {...fade(0)} className="mb-16">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-6">Das Prinzip</p>
          <h2 className="font-serif text-4xl md:text-5xl text-text leading-tight mb-8">
            Du bezahlst genau die Zeit,<br />die wir brauchen.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-text/8 mb-16">
          {[
            { title: "Keine Pakete", text: "Kein Kombi-Deal, der dir Leistungen aufzwingt, die du nicht brauchst." },
            { title: "Keine Zeitblöcke", text: "Nicht aufgerundete Stunden. Wenn wir 5 Stunden und 43 Minuten brauchen, zahlst du genau das." },
            { title: "Keine versteckten Kosten", text: "Du weißt vorher, was auf dich zukommt. Ich gebe dir eine realistische Einschätzung vor dem Termin." },
          ].map((item) => (
            <motion.div key={item.title} {...fade(0.1)} className="bg-background p-8 md:p-10 flex flex-col gap-3">
              <p className="font-sans text-xs tracking-[0.25em] uppercase text-sage">{item.title}</p>
              <p className="font-sans text-sm text-text/55 leading-loose">{item.text}</p>
            </motion.div>
          ))}
        </div>

      </section>

      {/* Preisübersicht */}
      <section className="bg-dark px-8 md:px-24 py-32">

        <motion.div {...fade(0)} className="mb-16">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-6">Preisübersicht</p>
          <h2 className="font-serif text-4xl md:text-5xl text-background leading-tight">
            Was was kostet.
          </h2>
        </motion.div>

        {/* Hauptleistungen */}
        <div className="flex flex-col mb-6">
          {[
            {
              service: "Dreadlock-Erstellung",
              detail: "Neuerstellung deiner eigenen Haare",
              price: "45 €",
              unit: "pro Stunde",
            },
            {
              service: "Extensions anbringen",
              detail: "Einarbeiten von Extensions in bestehende Dreads",
              price: "45 €",
              unit: "pro Stunde",
            },
            {
              service: "Nachhäkeln",
              detail: "Pflege & Nacharbeit bestehender Dreads",
              price: "40 €",
              unit: "pro Stunde",
            },
          ].map((item, i) => (
            <motion.div
              key={item.service}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: "easeOut" as const }}
              viewport={{ once: true }}
              className="grid md:grid-cols-[1fr_auto] gap-4 items-center py-8 border-b border-background/8"
            >
              <div className="flex flex-col gap-1">
                <p className="font-serif text-xl text-background">{item.service}</p>
                <p className="font-sans text-sm text-background/40">{item.detail}</p>
              </div>
              <div className="text-right">
                <span className="font-serif text-3xl text-background">{item.price}</span>
                <span className="font-sans text-xs text-background/35 ml-2">{item.unit}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Flechten */}
        <motion.div {...fade(0.2)} className="mb-6">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-4 mt-4">Flechten</p>
          <div className="flex flex-col">
            {[
              {
                service: "Cornrows",
                detail: "Klassische anliegende Zopfreihen",
                price: "42 €",
                unit: "pro Stunde",
              },
              {
                service: "Dreadextensions / Braids mit eigenem Haar",
                detail: "Extensions einarbeiten oder Braids mit deinen eigenen Haaren",
                price: "42 €",
                unit: "pro Stunde",
              },
              {
                service: "Braids mit Kanekalon",
                detail: "Braids oder Extensions mit Kanekalon-Kunsthaar",
                price: "42 €",
                unit: "pro Stunde",
              },
            ].map((item, i) => (
              <motion.div
                key={item.service}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.08, ease: "easeOut" as const }}
                viewport={{ once: true }}
                className="grid md:grid-cols-[1fr_auto] gap-4 items-center py-8 border-b border-background/8"
              >
                <div className="flex flex-col gap-1">
                  <p className="font-serif text-xl text-background">{item.service}</p>
                  <p className="font-sans text-sm text-background/40">{item.detail}</p>
                </div>
                <div className="text-right">
                  <span className="font-serif text-3xl text-background">{item.price}</span>
                  <span className="font-sans text-xs text-background/35 ml-2">{item.unit}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Extras */}
        <motion.div {...fade(0.3)} className="border border-background/10 rounded-xl p-8 flex flex-col gap-4">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage">Extras</p>
          <div className="flex items-center justify-between py-3 border-b border-background/8">
            <div className="flex flex-col gap-1">
              <p className="font-serif text-lg text-background">Bänder einflechten</p>
              <p className="font-sans text-sm text-background/40">Pro Band, eingeflochten in deine Dreads</p>
            </div>
            <div className="text-right">
              <span className="font-serif text-2xl text-background">5 €</span>
              <span className="font-sans text-xs text-background/35 ml-2">pro Band</span>
            </div>
          </div>
          <p className="font-sans text-xs text-background/25 leading-loose">
            Schmuck aus meiner Schatzkiste — Perlen, Ringe, Accessoires — ist inklusive und kostet nichts extra.
          </p>
        </motion.div>

      </section>

      {/* Beispiele */}
      <section className="bg-background px-8 md:px-24 py-32">

        <motion.div {...fade(0)} className="mb-16">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-6">Orientierung</p>
          <h2 className="font-serif text-4xl md:text-5xl text-text leading-tight mb-4">
            Was kommt auf dich zu?
          </h2>
          <p className="font-sans text-sm text-text/45 leading-loose max-w-xl">
            Jeder Kopf ist anders — aber hier sind ein paar grobe Richtwerte, damit du nicht ins Blaue planst. Den genauen Preis besprechen wir immer vorher.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              label: "Partial Dreads",
              desc: "Wenige Dreads, z.B. als Akzente oder im Unterhaar",
              duration: "ca. 2–4 Stunden",
              range: "ca. 90–180 €",
            },
            {
              label: "Halber Kopf",
              desc: "Mehr Dreads, deutlich sichtbarer Look",
              duration: "ca. 4–6 Stunden",
              range: "ca. 180–270 €",
            },
            {
              label: "Komplette Neuerstellung",
              desc: "Voller Kopf, evtl. mit Extensions — manchmal über mehrere Termine",
              duration: "ca. 6–16 Stunden",
              range: "ab ca. 270 €",
            },
          ].map((ex, i) => (
            <motion.div
              key={ex.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" as const }}
              viewport={{ once: true }}
              className="border border-text/8 rounded-xl p-8 flex flex-col gap-4"
            >
              <p className="font-sans text-xs tracking-[0.25em] uppercase text-sage">{ex.label}</p>
              <p className="font-sans text-sm text-text/55 leading-loose">{ex.desc}</p>
              <div className="border-t border-text/8 pt-4 flex flex-col gap-2 mt-auto">
                <p className="font-sans text-xs text-text/35">{ex.duration}</p>
                <p className="font-serif text-xl text-text">{ex.range}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p {...fade(0.3)} className="font-sans text-xs text-text/30 leading-loose mt-8 max-w-xl">
          Alle Angaben sind Richtwerte. Der tatsächliche Preis hängt von deinen Haaren, dem gewünschten Ergebnis und der benötigten Zeit ab — das besprechen wir in der Beratung.
        </motion.p>

      </section>

      {/* Anzahlung */}
      <section className="bg-dark px-8 md:px-24 py-32">

        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">

          <motion.div {...fade(0)} className="flex flex-col gap-6">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage">Anzahlung</p>
            <h2 className="font-serif text-4xl md:text-5xl text-background leading-tight">
              Fair für uns beide.
            </h2>
            <p className="font-sans text-sm text-background/55 leading-loose">
              Damit dein Termin verbindlich reserviert ist, bitte ich um eine Anzahlung von 20 % des geschätzten Preises. So ist dein Platz gesichert — und ich kann gezielt planen.
            </p>
          </motion.div>

          <motion.div {...fade(0.15)} className="flex flex-col gap-6 md:mt-8">

            <div className="border-l-2 border-sage pl-8 flex flex-col gap-3">
              <p className="font-sans text-xs tracking-[0.25em] uppercase text-sage">Wenn du verschieben musst</p>
              <p className="font-sans text-sm text-background/55 leading-loose">
                Kein Problem — sag mir so früh wie möglich Bescheid, dann finden wir gemeinsam einen neuen Termin. Die Anzahlung bleibt erhalten und wird angerechnet.
              </p>
            </div>

            <div className="border-l-2 border-background/10 pl-8 flex flex-col gap-3">
              <p className="font-sans text-xs tracking-[0.25em] uppercase text-background/30">Wenn du krank wirst</p>
              <p className="font-sans text-sm text-background/55 leading-loose">
                Du zahlst natürlich nicht für eine Session, die nicht stattfindet. Genau dafür ist die Anzahlung da — nicht als Strafe, sondern als faire Absicherung. Wir finden einen neuen Termin.
              </p>
            </div>

          </motion.div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-background px-8 md:px-24 py-24 border-t border-text/5">
        <motion.div {...fade(0)} className="flex flex-col items-center text-center gap-8">
          <p className="font-serif text-2xl md:text-3xl text-text/50 leading-snug">
            Klingt fair?
          </p>
          <p className="font-serif text-4xl md:text-5xl text-text leading-tight">
            Dann lass uns starten.
          </p>
          <Link
            href="/kontakt"
            className="font-sans text-xs tracking-[0.3em] uppercase text-text border border-text/20 px-12 py-5 hover:bg-text hover:text-background transition-all duration-500 inline-block"
          >
            Termin anfragen →
          </Link>
        </motion.div>
      </section>

    </main>
  );
}
