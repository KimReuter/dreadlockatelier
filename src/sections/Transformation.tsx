"use client";

import { motion } from "framer-motion";

export default function Transformation() {
  return (
    <section className="grid md:grid-cols-2 min-h-screen">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="flex flex-col justify-center px-12 md:px-20 py-24"
      >
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-12">
          Transformation
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-text leading-snug mb-6">
          <span className="text-xl md:text-2xl text-text/40 block mb-2">
            Sie sitzt vor dem Spiegel.
          </span>
          <span className="text-xl md:text-2xl text-text/40 block mb-8">
            Streicht sich durchs Haar.
          </span>
          Und sagt:
        </h2>
        <p className="font-serif text-3xl md:text-4xl italic text-brown leading-relaxed">
          „Ich will endlich
          <br />
          wieder ich sein."
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="relative min-h-[60vh] md:min-h-full"
      >
        <div
          className="absolute inset-0 bg-sage/25"
          style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
        />
        <div
          className="absolute inset-0 bg-brown/25"
          style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
        />
        <p className="absolute top-6 left-6 font-sans text-xs tracking-widest uppercase text-text/25">
          Vorher
        </p>
        <p className="absolute bottom-6 right-6 font-sans text-xs tracking-widest uppercase text-text/25">
          Nachher
        </p>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-px h-3/4 bg-background/40 rotate-[35deg]" />
        </div>
      </motion.div>
    </section>
  );
}
