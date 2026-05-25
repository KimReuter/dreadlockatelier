"use client";

import { motion } from "framer-motion";

export default function Manifesto() {
  return (
    <section className="bg-dark min-h-screen flex flex-col justify-center px-8 md:px-24 py-32">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-16"
      >
        Manifesto
      </motion.p>

      <div className="max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-background leading-tight mb-16"
        >
          Zu geschniegelt.
          <br />
          Zu angepasst.
          <br />
          Zu perfekt.
          <br />
          <span className="italic text-sage">Zu laut.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="w-24 h-px bg-sage/40 mb-12 origin-left"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          viewport={{ once: true }}
          className="font-serif text-2xl md:text-3xl text-background/40 leading-relaxed max-w-2xl"
        >
          Und irgendwann erkennt man sich selbst nicht mehr.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.1 }}
          viewport={{ once: true }}
          className="font-serif text-lg text-background/20 mt-8 italic"
        >
          Und dann ist da dieses Lächeln. Das einfach nicht mehr verschwindet.
        </motion.p>
      </div>
    </section>
  );
}
