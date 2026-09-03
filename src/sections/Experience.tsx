"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
    <section className="bg-dark grid md:grid-cols-2 min-h-screen">

      {/* Foto links */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="relative min-h-80 md:min-h-full overflow-hidden"
      >
        <Image
          src="/stories/img-1457.jpeg"
          alt="Kim beim Arbeiten — Kundin mit Dreads und Schüssel"
          fill
          quality={90}
            className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-dark/20" />
      </motion.div>

      {/* Text rechts */}
      <div className="flex flex-col justify-center px-12 md:px-16 py-32">
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
          className="font-serif text-4xl md:text-5xl text-background leading-tight mb-16"
        >
          Ein Termin bei mir ist kein Friseurtermin.
          <br />
          <span className="italic text-sage">Er ist ein kleiner Kurzurlaub.</span>
        </motion.h2>

        <div className="flex flex-col gap-10">
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
      </div>

    </section>
  );
}
