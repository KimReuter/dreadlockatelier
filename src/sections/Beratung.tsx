"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1, delay, ease: "easeOut" as const },
  viewport: { once: true },
});

const questions = [
  "Vielleicht hast du noch 17 Fragen.",
  "Vielleicht weißt du nicht, ob deine Haare geeignet sind.",
  "Vielleicht hast du Angst vor Schmerzen.",
  "Vielleicht bist du dir bei der Größe noch unsicher.",
  "Vielleicht willst du erstmal wissen, ob wir überhaupt miteinander klarkommen.",
];

export default function Beratung() {
  return (
    <section className="py-32">
      <div className="md:grid md:grid-cols-2 md:items-stretch">

        {/* Text links */}
        <div className="px-8 md:pl-24 md:pr-16 flex flex-col gap-8">

          {/* Label + Headline */}
          <motion.div {...fade()} className="flex flex-col gap-4">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage">
              Noch unsicher?
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-text leading-tight">
              Dann lass uns genau darüber sprechen.
            </h2>
          </motion.div>

          {/* Vielleicht-Liste */}
          <motion.div {...fade(0.15)} className="flex flex-col gap-2">
            {questions.map((q, i) => (
              <motion.p
                key={q}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.08, ease: "easeOut" as const }}
                viewport={{ once: true }}
                className="font-sans text-sm text-text/55 leading-loose"
              >
                {q}
              </motion.p>
            ))}
          </motion.div>

          {/* Statement */}
          <motion.p {...fade(0.6)} className="font-serif text-xl md:text-2xl text-text leading-snug">
            Du musst dich nicht blind für Dreads entscheiden.
          </motion.p>

          {/* Aufforderung */}
          <motion.div {...fade(0.7)} className="flex flex-col gap-1">
            {["Schreib mir.", "Erzähl mir von deinen Haaren.", "Schick mir ein paar Fotos."].map((line) => (
              <p key={line} className="font-sans text-sm text-text/60 leading-loose">{line}</p>
            ))}
            <p className="font-sans text-sm text-text/60 leading-loose mt-2">
              Und wir schauen gemeinsam, was möglich ist.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div {...fade(0.8)}>
            <Link
              href="/kontakt"
              className="font-sans text-xs tracking-[0.3em] uppercase text-text border border-text/20 px-10 py-4 hover:bg-text hover:text-background transition-all duration-500 inline-block"
            >
              Beratung anfragen →
            </Link>
          </motion.div>

        </div>

        {/* Bild rechts */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" as const }}
          viewport={{ once: true }}
          className="hidden md:flex md:self-stretch bg-sage/10 items-end justify-start overflow-hidden min-h-[500px]"
        >
          <p className="font-sans text-xs tracking-widest uppercase text-sage/30 p-8">
            Kim im Studio · Bild folgt
          </p>
        </motion.div>

      </div>
    </section>
  );
}
