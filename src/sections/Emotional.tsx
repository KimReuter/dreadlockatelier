"use client";

import { motion } from "framer-motion";

export default function Emotional() {
  return (
    <section className="flex flex-col items-center py-40 gap-24">
      <div className="max-w-4xl text-center px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="font-sans text-sm tracking-widest uppercase text-sage mb-12"
        >
          Warum sich so viele Frauen fremd fühlen
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-serif text-5xl md:text-7xl text-text leading-tight"
        >
          Zu geschniegelt.
          <br />
          Zu angepasst.
          <br />
          Zu perfekt.
          <br />
          Zu laut.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          viewport={{ once: true }}
          className="font-serif text-2xl md:text-3xl text-brown mt-16 leading-relaxed"
        >
          Und irgendwann erkennt man sich selbst nicht mehr.
        </motion.p>
      </div>
      <div className="grid grid-cols-5 w-full h-[70vh]">
        <div className="col-span-3 bg-sage/20" />
        <div className="col-span-2 grid grid-rows-2">
          <div className="bg-brown/20" />
          <div className="bg-sage/30" />
        </div>
      </div>
    </section>
  );
}