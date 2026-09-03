"use client";

import type { ReactNode, JSX } from "react";
import { motion } from "framer-motion";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1, delay, ease: "easeOut" as const },
  viewport: { once: true },
});

const IconCoffee = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M17 8h1a4 4 0 0 1 0 8h-1" />
    <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
    <line x1="6" y1="2" x2="6" y2="5" />
    <line x1="10" y1="2" x2="10" y2="5" />
    <line x1="14" y1="2" x2="14" y2="5" />
  </svg>
);

const IconLeaf = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </svg>
);

const IconHeadphones = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
  </svg>
);

const IconSparkle = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
  </svg>
);

const IconPlant = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.23a2.2 2.2 0 0 0-2.4.23 2.2 2.2 0 0 0-.923 2.1A3.5 3.5 0 0 0 10 9.5a3.5 3.5 0 0 0-4.5 3.5 3.5 3.5 0 0 0-3.5 3.5" />
    <path d="M2 22 17 7" />
  </svg>
);

const IconBook = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const IconUsers = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const IconPause = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <circle cx="12" cy="12" r="10" />
    <line x1="10" y1="15" x2="10" y2="9" />
    <line x1="14" y1="15" x2="14" y2="9" />
  </svg>
);

const perks: { Icon: () => JSX.Element; label: string; text: ReactNode }[] = [
  {
    Icon: IconCoffee,
    label: "Getränke",
    text: "Kaffee, Tee, Wasser und was gerade dazugehört.",
  },
  {
    Icon: IconLeaf,
    label: "Etwas zu essen",
    text: <>Bei längeren Sessions gibt es etwas Vegetarisches.<br />Bei Unverträglichkeiten darfst du natürlich gerne selbst etwas mitbringen.</>,
  },
  {
    Icon: IconHeadphones,
    label: "Deine Musik",
    text: <>Du möchtest deine eigene Playlist hören?<br />Schick mir den Link. Oder du lässt dich von meiner Spotify-Playlist berieseln.</>,
  },
  {
    Icon: IconSparkle,
    label: "Entspannung",
    text: "Eine bequeme Massageauflage sorgt dafür, dass du es dir während der langen Session möglichst gemütlich machen kannst.",
  },
  {
    Icon: IconPlant,
    label: "Atmosphäre",
    text: <>Pflanzen, Naturmaterialien, Kamin, Duft<br />und der Blick ins Grüne.</>,
  },
  {
    Icon: IconBook,
    label: "Deine Zeit",
    text: <>Bring gerne ein gutes Buch, deinen Laptop<br />oder deine Arbeit mit.</>,
  },
  {
    Icon: IconUsers,
    label: "Begleitung",
    text: <>Du möchtest jemanden mitbringen?<br />Sprich mich vorher einfach darauf an.</>,
  },
  {
    Icon: IconPause,
    label: "Pause",
    text: "Brauchst du kurz Luft? Sag es einfach. Wir machen eine Pause, wann immer du sie brauchst.",
  },
];

export default function MeTime() {
  return (
    <section className="bg-dark px-8 md:px-24 py-32">

      {/* Header */}
      <motion.div
        {...fade()}
        className="mb-20 flex flex-col items-center text-center"
      >
        <h2 className="font-serif text-4xl md:text-5xl text-background leading-tight mb-6">
          Deine Session darf sich wie Me-Time anfühlen.
        </h2>
        <p className="font-sans text-sm text-background/40 leading-loose">
          Deshalb gibt&apos;s bei mir ein bisschen mehr als nur Haare.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-14">
        {perks.map((perk, i) => (
          <motion.div
            key={perk.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: (i % 4) * 0.08, ease: "easeOut" as const }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center gap-4"
          >
            <div className="text-sage">
              <perk.Icon />
            </div>
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage">
              {perk.label}
            </p>
            <p className="font-sans text-sm text-background/45 leading-loose">
              {perk.text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Closing */}
      <motion.div
        {...fade(0.3)}
        className="mt-24 pt-16 border-t border-background/10 flex flex-col items-center text-center gap-4"
      >
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage">
          Und das Wichtigste
        </p>
        <p className="font-serif text-3xl md:text-4xl italic text-background leading-tight">
          Du darfst hier einfach du sein.
        </p>
      </motion.div>

    </section>
  );
}
