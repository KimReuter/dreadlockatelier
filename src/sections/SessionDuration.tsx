"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1, delay, ease: "easeOut" as const },
  viewport: { once: true },
});

export default function SessionDuration() {
  return (
    <section className="bg-dark py-32">
      <div className="md:grid md:grid-cols-2 md:items-stretch">

        {/* Text links – mit eigenem Padding */}
        <div className="px-8 md:pl-24 md:pr-16">

          {/* Label */}
          <motion.p {...fade()} className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-10">
            Zeitplanung
          </motion.p>

          {/* Headline */}
          <motion.h2 {...fade(0.1)} className="font-serif text-4xl md:text-5xl text-background leading-tight mb-10">
            {`„Wie lange dauert das?“`}
          </motion.h2>

          {/* Ehrliche Antwort */}
          <motion.div {...fade(0.2)} className="flex flex-col gap-4 mb-10">
            <p className="font-sans text-sm text-background/60 leading-loose">
              Die ehrliche Antwort: Es kommt darauf an.
            </p>
            <p className="font-sans text-sm text-background/60 leading-loose">
              Dreadlocks sind Handarbeit. Und Haare halten sich leider nicht immer an unsere Zeitplanung. ;)
            </p>
            <p className="font-sans text-sm text-background/60 leading-loose">
              {`Deshalb bekommst du von mir vorab eine realistische Zeiteinschätzung – aber keine künstlich genaue Versprechung.`}
            </p>
          </motion.div>

          {/* Empfehlung */}
          <motion.div {...fade(0.3)} className="flex flex-col gap-4 mb-10">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-background/40">
              Bei längeren Sessions empfehle ich dir:
            </p>
            <p className="font-sans text-sm text-background/60 leading-loose">
              Plane an diesem Tag möglichst nichts Großes mehr danach.
            </p>
            <p className="font-sans text-sm text-background/60 leading-loose">
              Du sollst nicht während der letzten Dreads auf die Uhr schauen und denken:
            </p>
          </motion.div>

          {/* Zitat-Highlight */}
          <motion.p
            {...fade(0.4)}
            className="font-serif text-2xl md:text-3xl italic text-background leading-snug pl-6 border-l-2 border-sage mb-12"
          >
            {`„Scheiße, ich muss in 20 Minuten noch irgendwo sein."`}
          </motion.p>

          {/* Closing */}
          <motion.div {...fade(0.5)} className="flex flex-col gap-2">
            <p className="font-serif text-3xl md:text-4xl text-background leading-tight">
              Du bist hier.
            </p>
            <p className="font-serif text-3xl md:text-4xl text-background leading-tight">
              Wir haben Zeit.
            </p>
            <p className="font-serif text-xl md:text-2xl italic text-background/45 leading-snug mt-2">
              Und genau das macht einen Teil des Erlebnisses aus.
            </p>
          </motion.div>

        </div>

        {/* Bild rechts – so hoch wie der Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" as const }}
          viewport={{ once: true }}
          className="hidden md:block md:self-stretch relative overflow-hidden min-h-[500px]"
        >
          <Image
            src="/kim-zeitplanung.jpg"
            alt="Zeitplanung — Session im Dreadlock Atelier"
            fill
            className="object-cover object-top"
            sizes="50vw"
          />
        </motion.div>

      </div>
    </section>
  );
}
