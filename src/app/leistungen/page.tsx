"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageHero from "@/components/PageHero";

const services = [
  {
    number: "01",
    title: "Neuerstellung",
    price: "45 € / Stunde",
    duration: "Partial ca. 5h · Komplett ca. 10–12h",
    description:
      "Am Anfang steht ein gutes Gespräch. Je nachdem wie dick, dünn, lang oder kurz deine Haare sind, planen wir gemeinsam wie wir die Dreads anlegen, damit am Ende genau das Ergebnis entsteht, das du dir vorstellst.",
    imageRight: true,
  },
  {
    number: "02",
    title: "Pflege & Nachhäkeln",
    price: "40 € / Stunde",
    duration: "Ansätze komplett ca. 6h · Partial ca. 3–4h",
    description:
      "Dreads wollen gepflegt werden. Beim Nachhäkeln werden die Fusselhaare am Ansatz wieder eingehäkelt, bei Bedarf auch die Längen. Empfohlen 2–3x im Jahr — damit deine Dreads immer so aussehen wie du es liebst.",
    imageRight: false,
  },
  {
    number: "03",
    title: "Verlängerungen",
    price: "45 € / Stunde",
    duration: "Ca. 5–10 Minuten pro Dread",
    description:
      "Du träumst von langen Dreads? Mit Extensions machen wir das möglich. Die Extensions bestellst du selbst — ich helfe dir gerne bei der Auswahl, meld dich einfach. Pro Dread rechne ich ca. 5–10 Minuten ein.",
    imageRight: true,
  },
  {
    number: "04",
    title: "Entfernung",
    price: "40 € / Stunde",
    duration: "Ca. 10 Minuten pro Dread",
    description:
      "Wenn du dir wieder andere Haare wünschst, begleite ich dich auch dabei. Am sinnvollsten ist es, einen Teil der Dread abzuschneiden — bei Bedarf kann aber auch die volle Länge ausgekämmt werden.",
    imageRight: false,
  },
];

export default function Leistungen() {
  return (
    <>
      <PageHero label="Was ich anbiete" title="Leistungen" />

      {/* Intro */}
      <section className="px-8 md:px-24 py-24 flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="font-serif text-2xl md:text-3xl text-text/50 max-w-3xl leading-relaxed"
        >
          Jede Leistung beginnt mit einem Gespräch.
          <br />
          Denn gute Dreads entstehen nicht einfach —
          <br />
          sie werden gemeinsam gedacht.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="w-16 h-px bg-sage/40 mt-10 origin-center"
        />
      </section>

      {/* Services */}
      {services.map((service, i) => (
        <section
          key={service.number}
          className={`grid md:grid-cols-2 min-h-[80vh] ${i % 2 !== 0 ? "bg-dark" : ""}`}
        >
          {/* Bild */}
          {service.imageRight ? (
            <>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className="flex flex-col justify-center px-8 md:px-20 py-24"
              >
                <div className="flex items-center gap-4 mb-10">
                  <span className={`font-sans text-xs ${i % 2 !== 0 ? "text-sage/50" : "text-sage/50"}`}>
                    {service.number}
                  </span>
                  <p className={`font-sans text-xs tracking-[0.3em] uppercase ${i % 2 !== 0 ? "text-sage" : "text-sage"}`}>
                    {service.title}
                  </p>
                </div>
                <h2 className={`font-serif text-5xl md:text-6xl leading-tight mb-8 ${i % 2 !== 0 ? "text-background" : "text-text"}`}>
                  {service.title}
                </h2>
                <p className={`font-sans text-base leading-relaxed mb-10 max-w-md ${i % 2 !== 0 ? "text-background/50" : "text-text/50"}`}>
                  {service.description}
                </p>
                <div className="flex flex-col gap-2">
                  <p className={`font-serif text-2xl ${i % 2 !== 0 ? "text-background" : "text-text"}`}>
                    {service.price}
                  </p>
                  <p className={`font-sans text-xs tracking-widest uppercase ${i % 2 !== 0 ? "text-sage/50" : "text-sage"}`}>
                    {service.duration}
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className={`min-h-64 md:min-h-full ${i % 2 !== 0 ? "bg-sage/10" : "bg-sage/15"}`}
              />
            </>
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className={`min-h-64 md:min-h-full ${i % 2 !== 0 ? "bg-brown/10" : "bg-brown/15"}`}
              />
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className="flex flex-col justify-center px-8 md:px-20 py-24"
              >
                <div className="flex items-center gap-4 mb-10">
                  <span className="font-sans text-xs text-sage/50">{service.number}</span>
                  <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage">
                    {service.title}
                  </p>
                </div>
                <h2 className={`font-serif text-5xl md:text-6xl leading-tight mb-8 ${i % 2 !== 0 ? "text-background" : "text-text"}`}>
                  {service.title}
                </h2>
                <p className={`font-sans text-base leading-relaxed mb-10 max-w-md ${i % 2 !== 0 ? "text-background/50" : "text-text/50"}`}>
                  {service.description}
                </p>
                <div className="flex flex-col gap-2">
                  <p className={`font-serif text-2xl ${i % 2 !== 0 ? "text-background" : "text-text"}`}>
                    {service.price}
                  </p>
                  <p className={`font-sans text-xs tracking-widest uppercase ${i % 2 !== 0 ? "text-sage/50" : "text-sage"}`}>
                    {service.duration}
                  </p>
                </div>
              </motion.div>
            </>
          )}
        </section>
      ))}

      {/* Hinweis */}
      <section className="bg-dark px-8 md:px-24 py-20">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="font-sans text-sm text-background/30 leading-relaxed max-w-xl"
        >
          Alle Preise sind Stundenpreise. Die Gesamtdauer hängt von deinen Haaren,
          dem gewünschten Ergebnis und der Anzahl der Dreads ab. Eine genaue
          Einschätzung bekommst du beim Erstgespräch.
        </motion.p>
      </section>

      {/* CTA */}
      <section className="px-8 md:px-24 py-40 flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="font-serif text-5xl md:text-7xl text-text leading-tight mb-8"
        >
          Bereit für den
          <br />
          <span className="italic text-sage">ersten Schritt?</span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="font-sans text-sm text-text/30 mb-12"
        >
          Meld dich einfach — ich freue mich auf dich.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Link
            href="/kontakt"
            className="font-sans text-xs tracking-[0.3em] uppercase text-text border border-text/20 px-12 py-5 hover:bg-text hover:text-background transition-all duration-500"
          >
            Termin anfragen
          </Link>
        </motion.div>
      </section>
    </>
  );
}
