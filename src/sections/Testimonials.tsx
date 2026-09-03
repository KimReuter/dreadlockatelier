"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1, delay, ease: "easeOut" as const },
  viewport: { once: true },
});

type Testimonial = {
  id: number;
  quote: string;
  name: string;
  age?: number;
  dreadDuration: string;
  image?: string;
  beforeNote?: string;
  featured: boolean;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Echtes Zitat der Kundin folgt hier – ein ehrlicher Satz darüber, wie sie sich nach ihrem Termin gefühlt hat.",
    name: "Name",
    age: 28,
    dreadDuration: "8 Monaten",
    beforeNote: "Vorher: schulterlanges, glattes Haar",
    featured: true,
  },
  {
    id: 2,
    quote: "Kurzes, starkes Zitat der zweiten Kundin. Authentisch und persönlich.",
    name: "Name",
    age: 34,
    dreadDuration: "1 Jahr",
    featured: false,
  },
  {
    id: 3,
    quote: "Kurzes, starkes Zitat der dritten Kundin. Authentisch und persönlich.",
    name: "Name",
    age: 22,
    dreadDuration: "3 Monaten",
    featured: false,
  },
];

const featured = testimonials.find((t) => t.featured)!;
const secondary = testimonials.filter((t) => !t.featured);

export default function Testimonials() {
  return (
    <>
      {/* ① Kim leitet über */}
      <section className="px-8 md:px-24 pt-32 pb-20 flex flex-col items-center text-center">
        <motion.p {...fade()} className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-10">
          Kundenstimmen
        </motion.p>
        <motion.p {...fade(0.1)} className="font-sans text-sm text-text/50 leading-loose mb-2">
          Du willst wissen, wie gut ich wirklich bin?
        </motion.p>
        <motion.p {...fade(0.2)} className="font-serif text-2xl md:text-3xl italic text-text/70 leading-tight">
          Dann lass lieber meine Kund:innen sprechen.
        </motion.p>
      </section>

      {/* ② Hauptstimme */}
      <section className="px-8 md:px-24 pb-24">
        <div className="grid md:grid-cols-5 gap-0 items-center">

          {/* Foto: 3/5 Breite */}
          <motion.div
            initial={{ opacity: 0, scale: 1 }}
            whileInView={{ opacity: 1, scale: 1.02 }}
            transition={{ duration: 1.4, ease: "easeOut" as const }}
            viewport={{ once: true }}
            className="md:col-span-3 aspect-[3/4] bg-sage/10 overflow-hidden flex items-center justify-center"
          >
            <p className="font-sans text-xs tracking-widest uppercase text-sage/30">Portrait · Bild folgt</p>
          </motion.div>

          {/* Zitat: 2/5 Breite, direkt anliegend */}
          <motion.div {...fade(0.2)} className="md:col-span-2 flex flex-col gap-6 pt-8 md:pt-0 md:pl-14 md:pr-4">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage">Kundenstimme 01</p>
            <p className="font-serif text-2xl md:text-3xl text-text leading-snug">
              „{featured.quote}"
            </p>
            <div className="flex flex-col gap-1">
              <p className="font-sans text-sm text-text/70">{featured.name}{featured.age ? `, ${featured.age}` : ""}</p>
              <p className="font-sans text-xs text-text/40">Dreads seit {featured.dreadDuration}</p>
              {featured.beforeNote && (
                <p className="font-sans text-xs text-text/25 mt-2">{featured.beforeNote}</p>
              )}
            </div>
          </motion.div>

        </div>
      </section>

      {/* ③ Sekundäre Stimmen */}
      <section className="px-8 md:px-24 pb-32">
        <div className="grid md:grid-cols-2 divide-y divide-text/10 md:divide-y-0 md:divide-x">
          {secondary.map((t, i) => (
            <motion.div
              key={t.id}
              {...fade(i * 0.15)}
              className={`flex flex-col items-center text-center gap-5 py-12 md:py-0 ${i === 0 ? "md:pr-16" : "md:pl-16"}`}
            >
              {/* Avatar */}
              <div className="w-40 h-40 rounded-full bg-sage/15 overflow-hidden flex items-center justify-center">
                <p className="font-sans text-xs text-sage/30 tracking-widest">Bild</p>
              </div>
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage">
                Kundenstimme 0{i + 2}
              </p>
              <p className="font-serif text-lg md:text-xl text-text leading-snug">
                „{t.quote}"
              </p>
              <div className="flex flex-col gap-0.5 text-center">
                <p className="font-sans text-sm text-text/70">{t.name}{t.age ? `, ${t.age}` : ""}</p>
                <p className="font-sans text-xs text-text/40">Dreads seit {t.dreadDuration}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ④⑤ Transformation + CTA */}
      <section className="bg-dark px-8 md:px-24 py-32">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Links: Text */}
          <motion.div {...fade()} className="flex flex-col items-center text-center gap-8">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage">Vorher → Nachher</p>
            <p className="font-serif text-2xl md:text-3xl italic text-background leading-tight">
              „Das war die beste Entscheidung<br />für meine Haare."
            </p>
            <p className="font-sans text-sm text-background/40 leading-loose">
              Vielleicht möchtest du bald selbst erzählen, wie es sich anfühlt.
            </p>
            <Link
              href="/termin"
              className="font-sans text-xs tracking-[0.3em] uppercase text-background border border-background/20 px-10 py-4 hover:bg-background hover:text-dark transition-all duration-500 inline-block"
            >
              Deinen Termin anfragen →
            </Link>
          </motion.div>

          {/* Rechts: Video */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="aspect-video bg-sage/10 flex items-center justify-center overflow-hidden"
          >
            <p className="font-sans text-xs tracking-widest uppercase text-sage/30">Video folgt</p>
          </motion.div>

        </div>
      </section>
    </>
  );
}
