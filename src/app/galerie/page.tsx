"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1, delay, ease: "easeOut" as const },
  viewport: { once: true },
});

const images = [
  { src: "/galerie-1.jpg", alt: "Dreads — Kupferrot, halb hochgesteckt" },
  { src: "/galerie-2.jpg", alt: "Dreads — Goldbraun, hochgesteckter Dutt" },
  { src: "/galerie-4.jpg", alt: "Dreads — Blond, hochgesteckt" },
  { src: "/galerie-5.jpg", alt: "Dreads — Nachtblau, Updo" },
  { src: "/galerie-6.jpg", alt: "Dreads — Detailaufnahme" },
  { src: "/galerie-7.jpg", alt: "Braids — Kundin im Atelier" },
  { src: "/galerie-3.jpg", alt: "Dreads — Goldbraun, offen von hinten" },
  { src: "/galerie-8.jpg", alt: "Dreads — Grau/Silber, Fischgrätenzopf" },
  { src: "/galerie-9.jpg", alt: "Dreads — Braun, Detail mit Schmuck" },
  { src: "/galerie-10.jpg", alt: "Dreads — Partial, Mann von hinten" },
  { src: "/galerie-11.jpg", alt: "Braids — Dunkel, von der Seite" },
  { src: "/galerie-12.jpg", alt: "Dreads — Kupferrot, Pferdeschwanz" },
  { src: "/galerie-13.jpg", alt: "Braids — Cornrows, von hinten" },
  { src: "/galerie-14.jpg", alt: "Dreads — Dunkel, Atelier" },
  { src: "/galerie-15.jpg", alt: "Dreads — Blond, zwei Zöpfe" },
];

export default function GaleriePage() {
  return (
    <main>

      {/* Hero */}
      <section className="bg-dark px-8 md:px-24 pt-48 pb-32">
        <motion.p {...fade(0)} className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-8">
          Galerie
        </motion.p>
        <motion.h1
          {...fade(0.1)}
          className="font-serif text-5xl md:text-6xl lg:text-7xl text-background leading-tight mb-10"
        >
          Jede Mähne<br />erzählt etwas anders.
        </motion.h1>
        <motion.p {...fade(0.2)} className="font-sans text-sm text-background/45 leading-loose max-w-lg">
          Alle Dreads sind von mir — keine Referenzbilder, keine Werbefotos. Das hier ist echte Arbeit.
        </motion.p>
      </section>

      {/* Gallery Grid */}
      <section className="bg-background px-8 md:px-16 py-24">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: i * 0.06, ease: "easeOut" as const }}
              viewport={{ once: true }}
              className="relative w-full aspect-[3/4] overflow-hidden"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover object-top hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pull Quote */}
      <section className="bg-dark px-8 md:px-24 py-32">
        <div className="max-w-2xl">
          <motion.p
            {...fade(0)}
            className="font-serif text-3xl md:text-4xl text-background leading-snug mb-10"
          >
            „Ich mache keine Dreads nach Schema F.
            Ich mache deine Dreads."
          </motion.p>
          <motion.p {...fade(0.1)} className="font-sans text-sm text-background/40 mb-12">
            — Kim, Dreadlock Atelier
          </motion.p>
          <motion.div {...fade(0.2)}>
            <Link
              href="/kontakt"
              className="font-sans text-xs tracking-[0.3em] uppercase text-background border border-background/20 px-10 py-5 hover:bg-background hover:text-dark transition-all duration-500 inline-block"
            >
              Beratung anfragen →
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
