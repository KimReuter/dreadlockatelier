"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["Alle", "Fein", "Dick", "Kurz", "Lang", "Gefärbt", "Lockig", "Styles"];

const items = [
  { id: 1, cat: "fein",    label: "Feine Dreads", sub: "Helles Haar · mittlere Länge" },
  { id: 2, cat: "dick",    label: "Kräftige Dreads", sub: "Dunkelbraunes Haar · lang" },
  { id: 3, cat: "kurz",    label: "Kurze Dreads", sub: "Lockiges Haar · Pixie-Länge" },
  { id: 4, cat: "lang",    label: "Lange Dreads", sub: "Glattes Haar · sehr lang" },
  { id: 5, cat: "gefärbt", label: "Gefärbte Dreads", sub: "Blonde Highlights · fein" },
  { id: 6, cat: "fein",    label: "Sehr feine Dreads", sub: "Feines Haar · hüftlang" },
  { id: 7, cat: "lockig",  label: "Dreads aus Locken", sub: "Natürliches Kräuselhaar" },
  { id: 8, cat: "styles",  label: "Half-Up Style", sub: "Kräftige Dreads · gebunden" },
  { id: 9, cat: "dick",    label: "Natürliche Dreads", sub: "Braunes Haar · schulterlang" },
  { id: 10, cat: "gefärbt", label: "Ombré Dreads", sub: "Dunkel zu Karamell" },
  { id: 11, cat: "lang",   label: "Lange + feine Dreads", sub: "Hellbraunes Haar" },
  { id: 12, cat: "styles", label: "Hochgesteckt", sub: "Lange Dreads · festlich" },
];

export default function DreadGallery() {
  const [active, setActive] = useState("Alle");

  const filtered =
    active === "Alle"
      ? items
      : items.filter((i) => i.cat === active.toLowerCase());

  return (
    <section className="px-8 md:px-24 py-24">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-5xl text-text leading-tight mb-4"
        >
          Ein Kopf. Ein Ergebnis.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.15 }}
          viewport={{ once: true }}
          className="font-sans text-sm text-text/40 leading-loose"
        >
          Unterschiedliche Haare. Unterschiedliche Wünsche. Unterschiedliche Menschen.
        </motion.p>
      </div>

      {/* Filter-Tabs */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-2 mb-12"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`font-sans text-xs tracking-[0.25em] uppercase px-5 py-2 transition-all duration-300 ${
              active === cat
                ? "bg-dark text-background"
                : "text-text/40 border border-text/15 hover:border-text/40 hover:text-text/70"
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Bild-Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3"
        >
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="aspect-[3/4] bg-sage/10 relative overflow-hidden flex items-end p-4"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
              <div className="relative z-10">
                <p className="font-serif text-sm text-background leading-snug">{item.label}</p>
                <p className="font-sans text-xs text-background/50 mt-1">{item.sub}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
