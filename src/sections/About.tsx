"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="grid md:grid-cols-2 min-h-screen">
      <div className="relative bg-sage/15 min-h-80 md:min-h-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
      </div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="flex flex-col justify-center px-12 md:px-20 py-24"
      >
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-12">
          Über mich
        </p>
        <p className="font-serif text-xl md:text-2xl text-text leading-relaxed mb-6">
          Mit 14 hat meine Mama mir verboten Dreads zu haben. Also haben meine
          beste Freundin und ich uns einfach im Zimmer eingeschlossen und es
          trotzdem getan. Es gab damals ja zum Glück schon Youtube.
        </p>
        <p className="font-serif text-xl md:text-2xl text-text/40 leading-relaxed mb-6 italic">
          Seither habe ich einiges dazugelernt.
        </p>
        <p className="font-serif text-xl md:text-2xl text-text leading-relaxed">
          Ich bin Kim — Mama, Entwicklerin, Abenteurerin. Und seit 2024
          offiziell das, was ich im Freundeskreis schon immer war: die die
          Dreads macht.
        </p>
        <div className="w-12 h-px bg-sage mt-14" />
      </motion.div>
    </section>
  );
}
