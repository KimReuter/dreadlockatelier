"use client";

import { motion } from "framer-motion";

export default function Transformation() {
  return (
    <section className="px-8 md:px-24 py-32 flex flex-col items-center text-center">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-12"
      >
        Transformation
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        viewport={{ once: true }}
        className="font-serif text-4xl md:text-5xl text-text leading-tight max-w-2xl mb-8"
      >
        „Ich will endlich wieder ich sein."
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="font-sans text-sm text-text/40 leading-loose max-w-sm"
      >
        Dieses Gefühl kenne ich. Und genau dort fange ich an.
      </motion.p>
    </section>
  );
}
