"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1, delay, ease: "easeOut" as const },
  viewport: { once: true },
});

export default function GaleriePage() {
  return (
    <main>

      {/* Hero */}
      <section className="bg-dark px-8 md:px-24 pt-48 pb-32">
        <motion.p {...fade(0)} className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-8">
          Galerie
        </motion.p>
        <motion.h1
          {...fade(0.1)}
          className="font-serif text-5xl md:text-6xl lg:text-7xl text-background leading-tight mb-10"
        >
          Jede Mähne<br />erzählt etwas anders.
        </motion.h1>
        <motion.p {...fade(0.2)} className="font-sans text-sm text-background/45 leading-loose max-w-lg">
          Alle Dreads sind von mir — keine Referenzbilder, keine Werbefotos. Das hier ist echte Arbeit.
        </motion.p>
      </section>

      {/* Pull Quote */}
      <section className="bg-dark px-8 md:px-24 py-32 border-t border-background/5">
        <div className="max-w-2xl">
          <motion.p
            {...fade(0)}
            className="font-serif text-3xl md:text-4xl text-background leading-snug mb-10"
          >
            „Ich mache keine Dreads nach Schema F.
            Ich mache deine Dreads."
          </motion.p>
          <motion.p {...fade(0.1)} className="font-sans text-sm text-background/40 mb-12">
            — Kim, Dreadlock Atelier
          </motion.p>
          <motion.div {...fade(0.2)}>
            <Link
              href="/kontakt"
              className="font-sans text-xs tracking-[0.3em] uppercase text-background border border-background/20 px-10 py-5 hover:bg-background hover:text-dark transition-all duration-500 inline-block"
            >
              Beratung anfragen →
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
