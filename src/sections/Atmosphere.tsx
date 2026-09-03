"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Atmosphere() {
  return (
    <section className="bg-dark py-24">
      <div className="grid md:grid-cols-2 items-start">
      <div className="flex flex-col px-8 md:pl-24 md:pr-16">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-12"
        >
          Atmosphäre
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.1 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-5xl text-background leading-tight mb-6"
        >
          Mehr als Dreads.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-serif text-xl text-background/50 leading-relaxed mb-12"
        >
          Eine Zeit, in der du einfach mal nichts musst.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6 font-sans text-sm text-background/50 leading-loose"
        >
          <p>
            Du sitzt hier nicht auf einem Stuhl und wartest darauf, dass jemand deine Haare abarbeitet.
          </p>
          <p>
            Du kommst an.<br />
            Atmest einmal durch.<br />
            Und dann schauen wir erstmal, was du brauchst.
          </p>
          <p>
            Lust auf gute Gespräche? Sehr gerne.<br />
            Du möchtest deine Lieblingsmusik hören und einfach vor dich hin entspannen? Auch gut.<br />
            Du hast ein Buch, deinen Laptop oder noch ein bisschen Arbeit dabei?<br />Kein Problem.
          </p>
          <p>
            Und wenn du nach drei Stunden feststellst, dass du eigentlich gerade einfach nur dasitzt und dem Kamin beim Knacken zuhörst – perfekt.<br />Genau dafür ist auch Platz.
          </p>
          <p>
            Während deine Dreads entstehen, läuft Musik, der Kamin knistert und irgendwo steht wahrscheinlich gerade eine Tasse Kaffee herum. Du bekommst etwas zu trinken und bei längeren Sessions gibt es auch etwas Vegetarisches zu essen.
          </p>
          <p>
            Du darfst dich zurücklehnen.<br />
            Du darfst quatschen.<br />
            Du darfst lachen.<br />
            Du darfst arbeiten.<br />
            Du darfst schweigen.
          </p>
          <p>
            Du musst hier eigentlich nur eines: nichts müssen.
          </p>
          <p>
            Denn für mich ist eine gute Dreadlock-Session nicht einfach die, bei der du am Ende mit schönen Dreads nach Hause gehst.
          </p>
          <p>
            Ich möchte, dass du zwischendurch irgendwann auf die Uhr schaust und denkst:
          </p>
          <p className="font-serif text-base text-background/70 italic">
            „Krass. Ich bin schon seit Stunden hier?"
          </p>
          <p>
            Und am Ende in den Spiegel schaust und denkst:
          </p>
          <p className="font-serif text-base text-background/70 italic">
            „Fuck. Ich liebe meine Haare."
          </p>
          <p className="text-background/70">
            Das ist für mich eine richtig gute Session.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <Link
            href="/termin"
            className="font-sans text-xs tracking-[0.3em] uppercase text-background border border-background/20 px-10 py-4 hover:bg-background hover:text-dark transition-all duration-500"
          >
            Ich möchte die Atmosphäre erleben →
          </Link>
        </motion.div>

      </div>

      {/* Bild rechts — sticky, bis zum Rand */}
      <div className="sticky top-0 h-screen bg-sage/10 overflow-hidden flex items-center justify-center">
        <p className="font-sans text-xs tracking-widest uppercase text-sage/30">Bild folgt</p>
      </div>


      </div>
    </section>
  );
}
