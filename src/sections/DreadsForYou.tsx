"use client";

import { motion } from "framer-motion";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1, delay, ease: "easeOut" as const },
  viewport: { once: true },
});

const factors = [
  { label: "Anzahl", text: "Wie viele Dreads?" },
  { label: "Dicke", text: "Wie fein oder kräftig?" },
  { label: "Aufteilung", text: "Wie sollen sie sitzen?" },
  { label: "Form", text: "Wie sollen sie fallen?" },
  { label: "Haar", text: "Was bringt deine eigene Haarstruktur mit?" },
  { label: "Styling", text: "Was möchtest du später damit machen?" },
];

export default function DreadsForYou() {
  return (
    <>
      {/* A — Philosophie */}
      <section className="bg-dark px-8 md:px-24 py-32 flex flex-col items-center text-center">
        <motion.h2 {...fade()} className="font-serif text-4xl md:text-6xl text-background leading-tight mb-6">
          Dreads, die nach dir aussehen.
        </motion.h2>
        <motion.p {...fade(0.2)} className="font-serif text-2xl md:text-3xl text-background/30 italic leading-tight">
          Nicht nach einer Vorlage.
        </motion.p>
      </section>

      {/* B — Bild mit Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="w-full h-[70vh] bg-dark relative overflow-hidden flex items-end"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
        <p className="relative z-10 font-sans text-xs tracking-[0.3em] uppercase text-background/50 px-8 md:px-24 pb-10">
          Keine zwei Köpfe sind gleich.
        </p>
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-sans text-xs tracking-widest uppercase text-sage/20 z-10">
          Bild folgt
        </p>
      </motion.div>

      {/* C — Schablone + Faktoren */}
      <section className="bg-dark px-8 md:px-24 py-32">
        <motion.h2
          {...fade()}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-background leading-tight mb-6 max-w-4xl"
        >
          Dein Kopf ist keine Schablone.
        </motion.h2>
        <motion.p {...fade(0.15)} className="font-sans text-sm text-background/40 leading-loose max-w-lg mb-20">
          Deshalb beginnt eine gute Dreadlock-Arbeit für mich nicht mit der ersten Strähne, sondern mit der Frage: Was funktioniert für dich?
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 border border-background/10 divide-y divide-background/10 md:[&>*:nth-child(3n+1)]:border-r md:[&>*:nth-child(3n+2)]:border-r"
        >
          {factors.map((f) => (
            <div key={f.label} className="p-8 md:p-10 flex flex-col gap-3">
              <p className="font-sans text-xs tracking-[0.35em] uppercase text-sage">{f.label}</p>
              <p className="font-sans text-sm text-background/50 leading-relaxed">{f.text}</p>
            </div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
