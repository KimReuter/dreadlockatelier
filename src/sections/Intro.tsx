"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Intro() {
  return (
    <section className="px-8 md:px-24 py-24 flex flex-col items-center text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="font-serif text-3xl md:text-5xl lg:text-6xl text-text leading-tight whitespace-nowrap mb-8"
      >
        Deine Dreads. Dein Stil. Deine Auszeit.
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-col gap-4 font-sans text-sm text-text/50 leading-loose mb-12"
      >
        <p className="whitespace-nowrap">
          Handgemachte Dreadlocks mit Liebe zum Detail – in entspannter, persönlicher Atmosphäre mitten im Grünen.
        </p>
        <p className="whitespace-nowrap">
          Du möchtest Dreads, die nicht nur gut aussehen, sondern sich wirklich nach dir anfühlen?<br />
          Dann lass uns gemeinsam herausfinden, was zu deinen Haaren, deinem Stil und deinem Leben passt.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Link
          href="/termin"
          className="font-sans text-xs tracking-[0.3em] uppercase text-text border border-text/20 px-10 py-4 hover:bg-text hover:text-background transition-all duration-500"
        >
          Deine Dreads beginnen hier →
        </Link>
      </motion.div>
    </section>
  );
}
