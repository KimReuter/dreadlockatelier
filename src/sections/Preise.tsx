"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1, delay, ease: "easeOut" as const },
  viewport: { once: true },
});

export default function Preise() {
  return (
    <section className="bg-dark py-32">

      {/* Oberer Teil: Label + Headline + Statement — full width mit Padding */}
      <div className="px-8 md:px-24 mb-20">
        <motion.p {...fade()} className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-6">
          Preise
        </motion.p>
        <motion.h2
          {...fade(0.1)}
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-background leading-tight mb-6 max-w-3xl"
        >
          Und was kostet das Ganze?
        </motion.h2>
        <motion.p {...fade(0.2)} className="font-serif text-xl md:text-2xl text-background/55 leading-snug max-w-2xl">
          Du bezahlst genau die Zeit, die wir brauchen.
        </motion.p>
      </div>

      {/* Trennlinie */}
      <motion.div {...fade(0.25)} className="border-t border-background/8 mb-20" />

      {/* Unterer Teil: 2-Spalten */}
      <div className="px-8 md:px-24 grid md:grid-cols-2 gap-16 md:gap-24 items-start">

        {/* Links: Konkret-Box + Nots */}
        <div className="flex flex-col gap-10">

          {/* Konkret-Box */}
          <motion.div {...fade(0.3)} className="flex flex-col gap-4">
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-sage/60">Das bedeutet konkret</p>
            <p className="font-serif text-lg md:text-xl text-background/45 leading-snug">
              Wenn du 5 Stunden und 43 Minuten bei mir bist,
            </p>
            <p className="font-serif text-3xl md:text-4xl text-background leading-tight">
              bezahlst du 5 Stunden und 43 Minuten.
            </p>
          </motion.div>

          {/* Triple No */}
          <motion.div {...fade(0.4)} className="flex flex-col gap-3 pl-6 border-l border-sage/30">
            {["Keine starren Zeitblöcke.", "Keine aufgerundeten Stunden.", "Keine Überraschung am Ende."].map((line) => (
              <p key={line} className="font-serif text-lg md:text-xl italic text-background/50 leading-snug">{line}</p>
            ))}
          </motion.div>

          {/* Nicht mehr. Nicht weniger. */}
          <motion.div {...fade(0.45)} className="flex gap-6">
            <p className="font-sans text-sm text-sage">Nicht mehr.</p>
            <p className="font-sans text-sm text-sage">Nicht weniger.</p>
          </motion.div>

        </div>

        {/* Rechts: Details + Anzahlung + CTA */}
        <div className="flex flex-col gap-8">

          {/* Erklärung */}
          <motion.div {...fade(0.35)} className="flex flex-col gap-4">
            <p className="font-sans text-sm text-background/45 leading-loose">
              Der Preis richtet sich nach dem tatsächlichen Zeitaufwand. Keine Pauschalen, kein Standardpaket.
            </p>
            <p className="font-sans text-sm text-background/45 leading-loose">
              Vor deinem Termin bekommst du von mir eine realistische Einschätzung, damit du nicht ins Blaue planst.
            </p>
          </motion.div>

          {/* Divider */}
          <motion.div {...fade(0.4)} className="border-t border-background/10" />

          {/* Anzahlung */}
          <motion.div {...fade(0.45)} className="flex flex-col gap-4">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage">Anzahlung</p>
            <p className="font-sans text-sm text-background/45 leading-loose">
              Damit dein Termin verbindlich reserviert ist, zahlst du eine Anzahlung von 20 % des geschätzten Preises.
            </p>
            <p className="font-serif text-base italic text-background/55">Und falls du krank wirst?</p>
            <p className="font-sans text-sm text-background/45 leading-loose">
              Dann zahlst du natürlich nicht für eine Session, die nicht stattfindet. Wir finden einen neuen Termin.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div {...fade(0.55)} className="pt-2">
            <Link
              href="/preise"
              className="font-sans text-xs tracking-[0.3em] uppercase text-background border border-background/20 px-10 py-4 hover:bg-background hover:text-dark transition-all duration-500 inline-block"
            >
              Preise & Details anschauen →
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
