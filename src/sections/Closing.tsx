"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1.1, delay, ease: "easeOut" as const },
  viewport: { once: true },
});

const IconCamera = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
    <circle cx="12" cy="13" r="4"/>
  </svg>
);

const IconPlay = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
    <circle cx="12" cy="12" r="10"/>
    <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none"/>
  </svg>
);

const IconChat = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

const behaviors = [
  { Icon: IconCamera, text: "Du speicherst Dreadlock-Fotos." },
  { Icon: IconPlay,   text: "Du schaust dir Videos an." },
  { Icon: IconChat,   text: `Du denkst: „Irgendwann mache ich das."` },
];

export default function Closing() {
  return (
    <section className="bg-background px-8 md:px-24 py-32 md:py-40">

      {/* Opening */}
      <motion.h2
        {...fade(0)}
        className="font-serif text-4xl md:text-5xl lg:text-6xl text-text leading-tight mb-20"
      >
        Vielleicht wartest du schon länger darauf.
      </motion.h2>

      {/* Behavior Grid mit Icons */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {behaviors.map((b, i) => (
          <motion.div
            key={b.text}
            {...fade(0.1 + i * 0.1)}
            className="flex flex-col items-center text-center gap-4 border border-text/8 p-6 rounded-lg"
          >
            <div className="text-sage">
              <b.Icon />
            </div>
            <p className="font-sans text-sm text-text/55 leading-loose">{b.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Unterbrechungen + Wende links — Sprechblase rechts */}
      <div className="grid md:grid-cols-2 gap-16 md:gap-24 mb-24 items-start">

        {/* Links: Stapel */}
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" as const }}
            viewport={{ once: true }}
            className="font-sans text-xs tracking-[0.25em] uppercase text-sage/50 mb-8"
          >
            Und dann kommt wieder
          </motion.p>
          <div className="flex flex-col gap-3">
            {["Alltag.", "Arbeit.", "Kinder.", "Termine.", "Wäsche.", "Das Leben."].map((word, i) => (
              <motion.p
                key={word}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.12, ease: "easeOut" as const }}
                viewport={{ once: true }}
                className="font-serif text-3xl md:text-4xl text-text/15"
              >
                {word}
              </motion.p>
            ))}
          </div>
        </div>

        {/* Rechts: Wende + Sprechblase */}
        <motion.div {...fade(0.5)} className="flex flex-col gap-8 justify-center">
          <div className="flex flex-col gap-4">
            <p className="font-serif text-2xl md:text-3xl text-text/40 leading-snug">
              Vielleicht brauchst du gar keinen perfekten Zeitpunkt.
            </p>
            <p className="font-serif text-2xl md:text-3xl text-text leading-snug">
              Vielleicht brauchst du nur eine Entscheidung.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-sage/50">
              Eine kleine Nachricht. Ein:
            </p>
            <div className="relative max-w-sm">
              <div className="border border-text/15 rounded-xl p-6">
                <p className="font-serif text-lg italic text-text leading-snug text-center">
                  {`„Hey Kim. Ich glaube,`}<br />{`ich möchte das wirklich machen."`}
                </p>
              </div>
              <div className="absolute -bottom-[9px] left-8 w-4 h-4 bg-background border-r border-b border-text/15 rotate-45" />
            </div>
            {/* Antwort-Sprechblase — rechts */}
            <div className="relative max-w-sm self-end ml-auto mt-3">
              <div className="border border-sage/30 rounded-xl p-6 bg-sage/5">
                <p className="font-serif text-lg italic text-text leading-snug text-center">
                  {`Okay, lass uns gemeinsam schauen,`}<br />{`wohin die Reise geht.`}
                </p>
              </div>
              <div className="absolute -bottom-[9px] right-8 w-4 h-4 bg-background border-l border-b border-sage/30 -rotate-45" />
            </div>
          </div>
        </motion.div>

      </div>

      {/* Finales Statement + CTA — zentriert */}
      <motion.div {...fade(0.8)} className="border-t border-text/8 pt-16 flex flex-col items-center text-center gap-8">
        <p className="font-serif text-2xl md:text-3xl text-text/65 leading-relaxed">
          Deine Haare.&ensp;Deine Entscheidung.&ensp;Deine Dreads.
        </p>
        <Link
          href="/termin"
          className="font-sans text-xs tracking-[0.3em] uppercase text-text border border-text/20 px-10 py-4 hover:bg-text hover:text-background transition-all duration-500 inline-block"
        >
          Meinen Termin anfragen →
        </Link>
      </motion.div>

    </section>
  );
}
