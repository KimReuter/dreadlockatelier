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
    <section className="bg-dark px-8 md:px-24 py-32 flex flex-col items-center text-center">
      <motion.p {...fade()} className="font-sans text-sm text-background/40 leading-loose whitespace-nowrap mb-20">
        Du weißt trotzdem noch nicht, wie Dreads an dir aussehen?
      </motion.p>

      <motion.div {...fade(0.25)} className="flex flex-col items-center gap-6 mb-16">
        <p className="font-sans text-xs tracking-[0.5em] uppercase text-sage">
          Dread Vision
        </p>
        <h2 className="font-serif text-5xl md:text-7xl text-background leading-tight">
          Sieh dich mit Dreads.
        </h2>
        <p className="font-serif text-3xl md:text-4xl text-background/30 italic leading-tight">
          Bevor du sie machst.
        </p>
      </motion.div>

      <motion.p {...fade(0.4)} className="font-sans text-xs text-background/30 leading-loose max-w-sm mb-12">
        Lade ein Foto hoch und entdecke, wie unterschiedliche Dreadlock-Styles an dir aussehen könnten.
      </motion.p>

      <motion.div {...fade(0.5)}>
        <Link
          href="/dread-vision"
          className="font-sans text-xs tracking-[0.3em] uppercase text-background border border-background/20 px-10 py-4 hover:bg-background hover:text-dark transition-all duration-500 inline-block"
        >
          Dread Vision ausprobieren →
        </Link>
      </motion.div>
    </section>
  );
}
