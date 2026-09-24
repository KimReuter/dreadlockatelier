"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1, delay, ease: "easeOut" as const },
  viewport: { once: true },
});

export default function DreadVision() {
  return (
    <section className="bg-background px-8 md:px-24 py-32 flex flex-col items-center text-center">
      <motion.p {...fade()} className="font-sans text-sm text-text/40 leading-loose mb-20">
        Du weißt noch nicht, was zu dir passt?
      </motion.p>

      <motion.div {...fade(0.25)} className="flex flex-col items-center gap-6 mb-16">
        <p className="font-sans text-xs tracking-[0.5em] uppercase text-sage">
          Das Quiz
        </p>
        <h2 className="font-serif text-5xl md:text-7xl text-text leading-tight">
          Finde deinen Stil.
        </h2>
        <p className="font-serif text-3xl md:text-4xl text-text/30 italic leading-tight">
          In fünf Minuten.
        </p>
      </motion.div>

      <motion.p {...fade(0.4)} className="font-sans text-xs text-text/40 leading-loose max-w-sm mb-12">
        Ein paar Fragen zu deinen Haaren, deinem Alltag und deinem Geschmack — und du weißt, welcher Dread-Stil wirklich zu dir passt.
      </motion.p>

      <motion.div {...fade(0.5)}>
        <Link
          href="/quiz"
          className="font-sans text-xs tracking-[0.3em] uppercase text-text border border-text/20 px-10 py-4 hover:bg-text hover:text-background transition-all duration-500 inline-block"
        >
          Quiz starten →
        </Link>
      </motion.div>
    </section>
  );
}
