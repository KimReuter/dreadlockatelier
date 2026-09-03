"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-8">
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.2em" }}
          animate={{ opacity: 1, letterSpacing: "0.4em" }}
          transition={{ duration: 2, ease: "easeOut" as const }}
          className="font-sans text-xs uppercase text-background/50 mb-10"
        >
          Dreadlock Atelier
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 0.5, ease: "easeOut" as const }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-background leading-tight max-w-4xl"
        >
          Luxury Dreadlocks
          <br />
          <span className="italic">for wild souls.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="w-16 h-px bg-background/30 mt-12"
        />
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 font-sans text-xs tracking-widest text-background/25 z-10"
      >
        Dreadlock Atelier · Plauen
      </motion.p>
    </section>
  );
}
