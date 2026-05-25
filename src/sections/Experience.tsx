"use client";

import { motion } from "framer-motion";

const moments = [
  { number: "01", text: "Frischer Tee. Entspannte Musik. Natur pur." },
  {
    number: "02",
    text: "Wir reden darüber wie du dich mit deinen Dreads fühlen willst — und dann setze ich das um.",
  },
  { number: "03", text: "Für dein leibliches Wohl ist gesorgt." },
  {
    number: "04",
    text: "Wir gehen danach beide reicher raus als wir gekommen sind.",
  },
];

export default function Experience() {
  return (
    <section className="bg-dark min-h-screen flex flex-col justify-center px-8 md:px-24 py-32">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-10"
      >
        Experience
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        viewport={{ once: true }}
        className="font-serif text-4xl md:text-6xl text-background leading-tight mb-20 max-w-3xl"
      >
        Ein Termin bei mir ist kein Friseurtermin.
        <br />
        <span className="italic text-sage">Er ist ein kleiner Kurzurlaub.</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
        {moments.map((moment, i) => (
          <motion.div
            key={moment.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="flex gap-6 items-start"
          >
            <span className="font-sans text-xs text-sage/40 mt-1 shrink-0">
              {moment.number}
            </span>
            <p className="font-sans text-base text-background/50 leading-relaxed">
              {moment.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
