"use client";

import { motion } from "framer-motion";

export default function Manifesto() {
  return (
    <section className="bg-dark min-h-[70vh] flex flex-col items-center justify-center px-8 md:px-24 py-24 text-center">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-12"
      >
        Manifesto
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        viewport={{ once: true }}
        className="font-serif text-4xl md:text-5xl text-background leading-tight max-w-2xl mb-10"
      >
        Dreads sind kein Trend. Sie sind ein Akt der Selbstermächtigung.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="font-sans text-sm text-background/40 leading-loose max-w-md"
      >
        Irgendwann erkennt man sich selbst nicht mehr. Und dann ist da dieses Lächeln — das einfach nicht mehr verschwindet.
      </motion.p>
    </section>
  );
}
