"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1, delay, ease: "easeOut" as const },
  viewport: { once: true },
});

const hairTypes = ["Superdünn", "Unglaublich dick", "Kurz", "Lang", "Gefärbt", "Lockig", "Bereits gedreadet", "Noch komplett unsicher"];

const kimFacts = [
  { label: "Dreadstylistin.", text: "Handwerk mit Herzblut — jede Strähne mit Absicht." },
  { label: "Perfektionistin.", text: "Die Aufteilung muss einfach stimmen." },
  { label: "Kaffeetrinkerin.", text: "Sehr wahrscheinlich steht irgendwo eine Tasse." },
  { label: "Mama.", text: "Ich weiß, wie wertvoll ein paar Stunden Me-Time sein können." },
  { label: "Mensch.", text: "Ich möchte, dass du dich hier genauso wohlfühlst wie ich." },
];

const questions = [
  "Was möchtest du?",
  "Was gefällt dir?",
  "Was möchtest du auf keinen Fall?",
  "Wie möchtest du deine Dreads später tragen?",
];

function QuestionCycler() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % questions.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-dark px-8 md:px-24 py-32 flex flex-col items-center text-center">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-20"
      >
        Ich möchte wissen
      </motion.p>
      <div className="h-24 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={current}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="font-serif text-3xl md:text-4xl text-background leading-tight"
          >
            {questions[current]}
          </motion.p>
        </AnimatePresence>
      </div>
      <div className="flex gap-2 mt-12">
        {questions.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-1 h-1 rounded-full transition-all duration-500 ${
              i === current ? "bg-background/60 w-4" : "bg-background/20"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default function KimSection() {
  return (
    <div>

      {/* ① Intro */}
      <section className="px-8 md:px-24 pt-32 pb-16 flex flex-col items-center text-center">
        <motion.p {...fade()} className="font-sans text-xs tracking-[0.4em] uppercase text-sage mb-6">
          Erstmal: Hallo.
        </motion.p>
        <motion.h2 {...fade(0.15)} className="font-serif text-5xl md:text-7xl text-text leading-tight mb-8">
          Ich bin Kim.
        </motion.h2>
        <motion.p {...fade(0.3)} className="font-sans text-sm text-text/50 leading-loose whitespace-nowrap">
          Und ich glaube, gute Dreads beginnen nicht mit der ersten Strähne.
        </motion.p>
      </section>

      {/* ② Großes Portrait — dunkel */}
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        whileInView={{ opacity: 1, scale: 1.03 }}
        transition={{ duration: 1.4, ease: "easeOut" as const }}
        viewport={{ once: true }}
        className="w-full h-[80vh] bg-sage/10 flex items-center justify-center overflow-hidden"
      >
        <p className="font-sans text-xs tracking-widest uppercase text-sage/30">Portrait · Bild folgt</p>
      </motion.div>

      {/* ③ Statement */}
      <section className="px-8 md:px-24 py-24 flex flex-col items-center text-center">
        <motion.p {...fade()} className="font-serif text-3xl md:text-4xl text-text leading-tight mb-4 max-w-2xl">
          Gute Dreads beginnen nicht mit der ersten Strähne.
        </motion.p>
        <motion.p {...fade(0.2)} className="font-serif text-3xl md:text-4xl text-text/30 leading-tight max-w-2xl">
          Sondern mit einem Gespräch.
        </motion.p>
      </section>

      {/* ④ Cycling Fragen */}
      <QuestionCycler />

      {/* ⑤ Kim in 5 Bildern */}
      <section className="px-8 md:px-24 py-24">
        <motion.p {...fade()} className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-16">
          Kim in 5 Bildern
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {kimFacts.map((fact, i) => (
            <motion.div
              key={fact.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              <div className="w-full aspect-square bg-sage/10 flex items-center justify-center overflow-hidden">
                <p className="font-sans text-xs text-sage/20 tracking-widest uppercase">Bild</p>
              </div>
              <p className="font-serif text-sm text-text leading-snug">{fact.label}</p>
              <p className="font-sans text-xs text-text/40 leading-relaxed">{fact.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ⑥ Haar-Typen — dunkel */}
      <section className="bg-dark px-8 md:px-24 py-24 overflow-hidden">
        <motion.p {...fade()} className="font-sans text-xs font-semibold tracking-[0.3em] uppercase text-sage mb-12 text-center">
          Deine Haare. Deine Vorstellung. Deine Dreads.
        </motion.p>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {hairTypes.map((type, i) => (
            <motion.span
              key={type}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="font-sans text-xs tracking-[0.3em] uppercase text-background/40"
            >
              {type}
            </motion.span>
          ))}
        </div>
      </section>

      {/* ⑦ Kleiner Bildstreifen */}
      <div className="grid grid-cols-3 h-64 overflow-hidden">
        {["Hände beim Dreaden", "Kim lacht", "Kundin · Ergebnis"].map((label, i) => (
          <div key={label} className="bg-sage/10 flex items-center justify-center border-r border-dark last:border-0">
            <p className="font-sans text-xs tracking-widest uppercase text-sage/25">{label}</p>
          </div>
        ))}
      </div>

      {/* ⑧ CTA */}
      <section className="px-8 md:px-24 py-24 flex flex-col items-center text-center">
        <motion.p {...fade()} className="font-sans text-sm text-text/40 leading-loose mb-10">
          Du möchtest wissen, was bei deinen Haaren möglich ist?
        </motion.p>
        <motion.div {...fade(0.2)}>
          <Link
            href="/kim"
            className="font-sans text-xs tracking-[0.3em] uppercase text-text border border-text/20 px-10 py-4 hover:bg-text hover:text-background transition-all duration-500"
          >
            Lern mich kennen →
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
