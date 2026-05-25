"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-dark min-h-screen flex flex-col items-center justify-center text-center px-8 py-32">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-12"
      >
        Dein Moment
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 0.2 }}
        viewport={{ once: true }}
        className="font-serif text-5xl md:text-7xl text-background leading-tight max-w-3xl mb-8"
      >
        Vielleicht wartest
        <br />
        du noch.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
        className="font-serif text-xl text-background/30 italic mb-16"
      >
        Vielleicht ist genau jetzt dein Moment.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
        viewport={{ once: true }}
      >
        <Link
          href="/buchen"
          className="font-sans text-xs tracking-[0.3em] uppercase text-background border border-background/20 px-12 py-5 hover:bg-background hover:text-dark transition-all duration-500"
        >
          Termin anfragen
        </Link>
      </motion.div>
    </section>
  );
}
