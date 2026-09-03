"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1, delay, ease: "easeOut" as const },
  viewport: { once: true },
});

const fears = [
  "Dass deine Haare danach ungepflegt aussehen.",
  "Dass die Dreads zu dick oder zu dünn werden.",
  "Dass sie nicht zu deinem Gesicht passen.",
  "Dass deine Haare kaputtgehen.",
  "Dass die Erstellung höllisch weh tut.",
];

export default function Doubts() {
  return (
    <>
      {/* A — Dunkel: Eröffnung */}
      <section className="bg-dark px-8 md:px-24 py-32 flex flex-col items-center text-center">
        <motion.p {...fade()} className="font-serif text-4xl md:text-5xl lg:text-6xl italic text-background leading-tight whitespace-nowrap mb-8">
          „Aber passen Dreads überhaupt zu mir?"
        </motion.p>
        <motion.p {...fade(0.15)} className="font-sans text-sm text-background/50 leading-loose">
          Vielleicht ist genau das gerade deine größte Frage.
        </motion.p>
        <motion.p {...fade(0.25)} className="font-serif text-xl md:text-2xl text-background/40 italic mt-6">
          Und ganz ehrlich? Das musst du vorher noch gar nicht wissen.
        </motion.p>
      </section>

      {/* B — Hell: zwei Spalten */}
      <section className="px-8 md:px-24 py-24">
      <div className="border border-text/10 grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-text/10">

        {/* Links: Angst-Liste */}
        <motion.div {...fade()} className="flex flex-col gap-6 p-10 md:p-14">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage">Vielleicht hast du Angst</p>
          <div className="flex flex-col gap-3 pl-5 border-l border-text/15 text-left">
            {fears.map((fear) => (
              <p key={fear} className="font-sans text-sm text-text/55 leading-relaxed">
                {fear}
              </p>
            ))}
            <p className="font-sans text-sm text-text/55 leading-relaxed">
              Oder dass du nach drei Monaten vor dem Spiegel stehst und denkst:<br />
              <span className="font-serif italic text-text/70">„Was zur Hölle habe ich getan?"</span>
            </p>
          </div>
          <p className="font-sans text-sm text-text font-medium mt-2">Alles berechtigte Fragen.</p>
        </motion.div>

        {/* Rechts: Auflösung */}
        <motion.div {...fade(0.15)} className="flex flex-col gap-8 p-10 md:p-14">
          <p className="font-sans text-sm text-text/60 leading-loose">
            Deshalb bekommst du bei mir keine Dreads von der Stange.
          </p>
          <div className="flex flex-col gap-4">
            {[
              "Wir schauen uns deine Haare an.",
              "Wir sprechen über deine Vorstellungen.",
              "Und wir planen deine Dreads so, dass sie zu dir, deinen Haaren und deinem Alltag passen.",
            ].map((line) => (
              <p key={line} className="font-serif text-lg md:text-xl text-text leading-snug">
                {line}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-1 pt-2">
            <p className="font-sans text-sm text-text/60 leading-loose">Du musst nicht schon alles wissen.</p>
            <p className="font-sans text-sm text-sage leading-loose">Du musst nur Lust haben, es herauszufinden.</p>
          </div>
        </motion.div>

      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex justify-center mt-12"
      >
        <Link
          href="/faq"
          className="font-sans text-xs tracking-[0.3em] uppercase text-text border border-text/20 px-10 py-4 hover:bg-text hover:text-background transition-all duration-500 inline-block"
        >
          Meine Fragen zu Dreads →
        </Link>
      </motion.div>

      </section>
    </>
  );
}
