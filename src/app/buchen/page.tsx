"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import PageHero from "@/components/PageHero";
import { siteConfig } from "@/lib/siteConfig";

const steps = [
  {
    number: "01",
    title: "Anfrage",
    description:
      "Du füllst das Formular aus — oder schreibst mir direkt auf Instagram. Kein langer Fragebogen, nur das Wichtigste.",
  },
  {
    number: "02",
    title: "Erstgespräch",
    description:
      "Wir reden kurz. Über deine Haare, deine Vorstellungen, den Ablauf. Das ist kein Sales-Gespräch — ich will einfach verstehen, was du dir wünschst.",
  },
  {
    number: "03",
    title: "Dein Termin",
    description:
      "Du bekommst einen persönlichen Slot, der zu dir passt. Wir nehmen uns Zeit. Kein Fließband.",
  },
];

export default function Buchen() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: Backend mit Resend oder Formspree anschließen
    setSubmitted(true);
  }

  return (
    <>
      <PageHero label="Dein Termin" title="Buchen" />

      {/* Prozess */}
      <section className="px-8 md:px-24 py-24 grid md:grid-cols-3 gap-16 border-b border-text/10">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <span className="font-sans text-xs text-sage/40">{step.number}</span>
            <h3 className="font-serif text-2xl text-text">{step.title}</h3>
            <p className="font-sans text-sm text-text/40 leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </section>

      {/* Hauptbereich */}
      <section className="grid md:grid-cols-2 min-h-[80vh]">

        {/* Links: Info + Direktkontakt */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-dark px-8 md:px-16 py-24 flex flex-col justify-between"
        >
          <div>
            <p className="font-serif text-4xl md:text-5xl text-background leading-snug mb-12">
              Du kannst mich auch
              <br />
              <span className="italic text-sage">direkt erreichen.</span>
            </p>

            <div className="flex flex-col gap-8">
              <div>
                <p className="font-sans text-xs tracking-widest uppercase text-sage mb-2">Instagram</p>
                <a
                  href={siteConfig.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-2xl text-background hover:text-sage transition-colors duration-300"
                >
                  {siteConfig.contact.instagram}
                </a>
              </div>
              <div>
                <p className="font-sans text-xs tracking-widest uppercase text-sage mb-2">E-Mail</p>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="font-serif text-2xl text-background hover:text-sage transition-colors duration-300"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
              <div>
                <p className="font-sans text-xs tracking-widest uppercase text-sage mb-2">Telefon</p>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="font-serif text-2xl text-background hover:text-sage transition-colors duration-300"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
            </div>
          </div>

          <p className="font-sans text-xs text-background/20 leading-relaxed max-w-xs mt-16">
            Ich antworte meistens innerhalb von ein bis zwei Tagen — und wenn es mal etwas länger dauert,
            bin ich wahrscheinlich gerade bis zum Hals in Haaren.
          </p>
        </motion.div>

        {/* Rechts: Formular */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="px-8 md:px-16 py-24 flex flex-col justify-center"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-6"
            >
              <p className="font-sans text-xs tracking-widest uppercase text-sage">Gesendet</p>
              <p className="font-serif text-4xl text-text leading-snug">
                Danke — ich melde mich bald.
              </p>
              <p className="font-sans text-sm text-text/40 leading-relaxed max-w-sm">
                Deine Anfrage ist bei mir angekommen. Ich schaue mir alles durch und melde mich
                in der Regel innerhalb von zwei Tagen.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <p className="font-sans text-xs tracking-widest uppercase text-sage mb-4">Anfrage senden</p>

              {/* Name */}
              <div className="flex flex-col gap-2">
                <label className="font-sans text-xs text-text/30 tracking-wider uppercase">
                  Dein Name
                </label>
                <input
                  type="text"
                  required
                  className="bg-transparent border-b border-text/20 pb-3 pt-1 font-sans text-sm text-text placeholder:text-text/20 outline-none focus:border-sage transition-colors duration-300"
                  placeholder="Kim Reuter"
                />
              </div>

              {/* E-Mail */}
              <div className="flex flex-col gap-2">
                <label className="font-sans text-xs text-text/30 tracking-wider uppercase">
                  E-Mail
                </label>
                <input
                  type="email"
                  required
                  className="bg-transparent border-b border-text/20 pb-3 pt-1 font-sans text-sm text-text placeholder:text-text/20 outline-none focus:border-sage transition-colors duration-300"
                  placeholder="deine@email.de"
                />
              </div>

              {/* Leistung */}
              <div className="flex flex-col gap-2">
                <label className="font-sans text-xs text-text/30 tracking-wider uppercase">
                  Leistung
                </label>
                <select
                  required
                  className="bg-background border-b border-text/20 pb-3 pt-1 font-sans text-sm text-text/70 outline-none focus:border-sage transition-colors duration-300 cursor-pointer appearance-none"
                >
                  <option value="">Bitte auswählen</option>
                  <option>Neuerstellung</option>
                  <option>Pflege & Nachhäkeln</option>
                  <option>Verlängerungen</option>
                  <option>Entfernung</option>
                  <option>Ich bin noch unsicher</option>
                </select>
              </div>

              {/* Haarlänge */}
              <div className="flex flex-col gap-2">
                <label className="font-sans text-xs text-text/30 tracking-wider uppercase">
                  Aktuelle Haarlänge
                </label>
                <select
                  className="bg-background border-b border-text/20 pb-3 pt-1 font-sans text-sm text-text/70 outline-none focus:border-sage transition-colors duration-300 cursor-pointer appearance-none"
                >
                  <option value="">Bitte auswählen</option>
                  <option>Sehr kurz (unter 7 cm)</option>
                  <option>Schulterlang</option>
                  <option>Brustlang</option>
                  <option>Hüftlang oder länger</option>
                </select>
              </div>

              {/* Nachricht */}
              <div className="flex flex-col gap-2">
                <label className="font-sans text-xs text-text/30 tracking-wider uppercase">
                  Nachricht (optional)
                </label>
                <textarea
                  rows={4}
                  className="bg-transparent border-b border-text/20 pb-3 pt-1 font-sans text-sm text-text placeholder:text-text/20 outline-none focus:border-sage transition-colors duration-300 resize-none"
                  placeholder="Erzähl mir kurz, was du dir vorstellst…"
                />
              </div>

              <button
                type="submit"
                className="mt-4 font-sans text-xs tracking-[0.3em] uppercase text-text border border-text/20 px-10 py-4 self-start hover:bg-text hover:text-background transition-all duration-500"
              >
                Anfrage senden
              </button>
            </form>
          )}
        </motion.div>
      </section>
    </>
  );
}
