"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1, delay, ease: "easeOut" as const },
  viewport: { once: true },
});

const hairTypes: { type: string; text: ReactNode }[] = [
  {
    type: "Dünne Haare",
    text: "Ja, das geht. Du solltest nur wissen, dass die Dreads tendenziell feiner werden und es wahrscheinlich weniger von ihnen geben wird als bei dickerem Haar.",
  },
  {
    type: "Dicke Haare",
    text: <>Kein Problem — aber mehr Masse bedeutet mehr Zeit.<br />Hier empfehle ich, die Dreads nicht zu dünn zu gestalten.<br />Ein Durchmesser von 6–8 mm ist ein guter Ausgangspunkt.</>,
  },
  {
    type: "Kurze Haare",
    text: <>Die Mindestlänge sind 10 cm. Für ein schönes Ergebnis lohnt es sich,<br />mit Extensions zu arbeiten — sonst stehen die kurzen Dreads eine Weile ab.</>,
  },
  {
    type: "Lange Haare",
    text: <>Lange Haare brauchen etwas mehr Zeit pro Dread.<br />Der große Vorteil: du brauchst wahrscheinlich keine Extensions.</>,
  },
  {
    type: "Lockige Haare",
    text: "Gehen meistens wunderbar. Besonders schön: wenn man die lockigen Spitzen offen lässt, entsteht ein wirklich eigenwilliger Look.",
  },
  {
    type: "Glatte Haare",
    text: <>Geht gut — erfordert aber etwas mehr Häkelarbeit,<br />damit die Dreads wirklich schön filzen und ihre Form halten.</>,
  },
  {
    type: "Gefärbte Haare",
    text: <>Meist kein Problem. Wenn du danach weiterfärben möchtest,<br />empfehle ich, noch kurz vor der Session zu färben.</>,
  },
  {
    type: "Blondierte Haare",
    text: <>Grundsätzlich möglich — aber Vorsicht: blondiertes Haar neigt zum Austrocknen. Die Dreads dürfen nicht zu eng gehäkelt werden,<br />damit das Haar nicht brüchig wird.</>,
  },
  {
    type: "Strapazierte Haare",
    text: <>In den meisten Fällen ist trotzdem etwas möglich.<br />Wirklich brüchiges Haar ist die Ausnahme —<br />im Zweifel klären wir das gemeinsam in der Beratung.</>,
  },
];

export default function DreadsPage() {
  return (
    <main>

        {/* Hero */}
        <section className="bg-dark px-8 md:px-24 pt-48 pb-32">
          <motion.p
            {...fade(0)}
            className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-8"
          >
            Dreads
          </motion.p>
          <motion.h1
            {...fade(0.1)}
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-background leading-tight mb-10"
          >
            Du möchtest Dreads –<br />aber hast noch 100 Fragen?
          </motion.h1>
          <motion.p
            {...fade(0.2)}
            className="font-sans text-sm text-background/50 leading-loose max-w-xl"
          >
            Gut so. Hier bekommst du sie beantwortet. Ehrlich, ohne Schönrederei
            — und so, dass du danach weißt, ob Dreads wirklich zu dir passen.
          </motion.p>
        </section>

        {/* Eignen sich meine Haare? */}
        <section className="px-8 md:px-24 py-32">
          <motion.div {...fade(0)} className="mb-16">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-6">
              Deine Haare
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-text leading-tight mb-6">
              Eignen sich meine Haare?
            </h2>
            <p className="font-sans text-sm text-text/55 leading-loose max-w-xl">
              Die kurze Antwort: Wahrscheinlich ja. Die ehrliche Antwort: Es kommt
              darauf an. Hier findest du, was du wissen musst.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-px bg-text/8">
            {hairTypes.map((h, i) => (
              <motion.div
                key={h.type}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: (i % 3) * 0.08, ease: "easeOut" as const }}
                viewport={{ once: true }}
                className="bg-background p-8 flex flex-col gap-3"
              >
                <p className="font-sans text-xs tracking-[0.25em] uppercase text-sage">
                  {h.type}
                </p>
                <p className="font-sans text-sm text-text/60 leading-loose">
                  {h.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Closing */}
          <motion.div
            {...fade(0.3)}
            className="mt-16 border-l-2 border-sage pl-8 max-w-2xl"
          >
            <p className="font-serif text-xl md:text-2xl text-text leading-snug">
              Du musst deine Haare nicht selbst beurteilen können.
            </p>
            <p className="font-serif text-xl md:text-2xl text-text/40 leading-snug mt-2">
              Genau dafür gibt es die Beratung.
            </p>
            <Link
              href="/kontakt"
              className="font-sans text-xs tracking-[0.3em] uppercase text-text border border-text/20 px-10 py-4 hover:bg-text hover:text-background transition-all duration-500 inline-block mt-8"
            >
              Beratung anfragen →
            </Link>
          </motion.div>
        </section>

        {/* Wie entstehen Dreads? */}
        <section className="bg-dark px-8 md:px-24 py-32">

          <motion.div {...fade(0)} className="mb-20">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-6">
              Der Prozess
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-background leading-tight mb-6">
              Wie entstehen Dreads?
            </h2>
            <p className="font-sans text-sm text-background/50 leading-loose max-w-xl">
              Keine Maschine. Keine Abkürzung. Jede einzelne Dread entsteht von Hand —
              Strähne für Strähne, mit viel Geduld und einem klaren System.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">

            {([
              {
                number: "01",
                title: "Aufteilung",
                text: "Ich teile deine Haare nach einem Bienenwaben-Muster auf — gleichmäßig, damit die Dreads später schön sitzen. Ich fange im Nacken an und arbeite mich nach oben vor. Der Vorteil: Falls wir an einem Tag nicht fertig werden, hast du ganz natürlich schöne Partial Dreads im Unterhaar.",
              },
              {
                number: "02",
                title: "Vorbereitung",
                text: <>Jede einzelne Strähne wird mit einem engen Metallkamm aufgetoupiert.<br />Das ist die Basis — das Haar muss sich verfilzen können, und dieser Schritt legt den Grundstein dafür.</>,
              },
              {
                number: "03",
                title: "Dread-Erstellung",
                text: <>Jetzt kommt die Häkelnadel. Ich ziehe die losen Haare ins Innere der Dread und verfestige sie damit —<br />so bekommt die Dread ihre Form und ihre Festigkeit. Für mehr Tempo nutze ich eine dreinadlige Häkelnadel. Jede Dread entsteht komplett, bevor ich zur nächsten übergehe.</>,
              },
              {
                number: "04",
                title: "Finishing",
                text: <>Extensions kommen direkt nach jeder Dread dran — ebenso das Schließen der Enden, wenn gewünscht. Zum Abschluss ein leichtes Finishing-Spray für den Halt. Und dann? Schmuck aus meiner Schatzkiste, wenn du magst — Perlen, Bänder, was zu dir passt. Und eine Frisur, wenn du sie möchtest:<br />ein französischer Zopf, zwei Buns, oder einfach offen. Und dann nimmst du dir in aller Ruhe Zeit für diesen Moment.</>,
              },
            ] as { number: string; title: string; text: ReactNode }[]).map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: (i % 2) * 0.1, ease: "easeOut" as const }}
                viewport={{ once: true }}
                className="border border-background/10 rounded-xl p-10 md:p-14 flex flex-col gap-5"
              >
                <p className="font-serif text-4xl text-background/10 text-center w-full">{step.number}</p>
                <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage text-center w-full">{step.title}</p>
                <p className="font-sans text-sm text-background/55 leading-loose text-justify">{step.text}</p>
              </motion.div>
            ))}

          </div>

        </section>

        {/* Tut Dreaden weh? */}
        <section className="px-8 md:px-24 py-32">

          <motion.div {...fade(0)} className="mb-16">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-6">
              Ehrliche Antwort
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-text leading-tight">
              Tut Dreaden weh?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">

            {/* Links: Statement */}
            <motion.div {...fade(0.1)} className="flex flex-col gap-8">
              <p className="font-serif text-2xl md:text-3xl text-text leading-snug">
                Dreads entstehen nicht dadurch, dass man dir stundenlang Schmerzen zufügt.
              </p>
              <p className="font-serif text-2xl md:text-3xl text-text/35 leading-snug">
                Aber ehrlich gesagt: Es ist individuell.
              </p>
              <p className="font-sans text-sm text-text/55 leading-loose">
                Manche Kund:innen fühlen gar keinen Schmerz. Andere wiederum merken an manchen Stellen schon, dass da etwas passiert. Das hängt von deiner Kopfhautempfindlichkeit ab, von deinem Haartyp — und davon, wie du drauf bist an diesem Tag.
              </p>
            </motion.div>

            {/* Rechts: Was hilft */}
            <motion.div {...fade(0.2)} className="flex flex-col gap-6">

              <div className="border-l-2 border-sage pl-8 flex flex-col gap-3">
                <p className="font-sans text-xs tracking-[0.25em] uppercase text-sage">Was du wissen solltest</p>
                <p className="font-sans text-sm text-text/60 leading-loose">
                  Du kannst jederzeit sagen, wenn es zu viel wird. Wir machen eine Pause — so lange du brauchst. Kein Stress, kein Zeitdruck.
                </p>
              </div>

              <div className="border-l-2 border-text/10 pl-8 flex flex-col gap-3">
                <p className="font-sans text-xs tracking-[0.25em] uppercase text-text/30">Was wirklich hilft</p>
                <p className="font-sans text-sm text-text/60 leading-loose">
                  Gut schlafen vorher. Genug trinken. Und etwas zum Ablenken mitbringen — ein Buch, eine Serie, deine Lieblingsmusik. Solange deine Grundbedürfnisse erfüllt sind, geht es den meisten Menschen deutlich besser als erwartet.
                </p>
              </div>

              <div className="border-l-2 border-text/10 pl-8 flex flex-col gap-3">
                <p className="font-sans text-xs tracking-[0.25em] uppercase text-text/30">Was ich tue</p>
                <p className="font-sans text-sm text-text/60 leading-loose">
                  Ich sorge dafür, dass du dich rundherum wohlfühlst — nicht nur deine Haare, sondern du als Mensch. Die Session soll sich gut anfühlen, nicht wie etwas, das man einfach durchhalten muss.
                </p>
              </div>

            </motion.div>

          </div>

        </section>

        {/* Machen Dreads meine Haare kaputt? */}
        <section className="bg-dark px-8 md:px-24 py-32">

          <motion.div {...fade(0)} className="mb-16">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-6">
              Haargesundheit
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-background leading-tight">
              Machen Dreads meine Haare kaputt?
            </h2>
          </motion.div>

          {/* Ehrliches Statement */}
          <motion.div {...fade(0.1)} className="grid md:grid-cols-2 gap-16 md:gap-24 mb-20 items-start">
            <div className="flex flex-col gap-6">
              <p className="font-serif text-2xl md:text-3xl text-background leading-snug">
                Das lässt sich nicht verheimlichen: Dreads greifen das Haar an.
              </p>
              <p className="font-sans text-sm text-background/55 leading-loose">
                Solltest du sie irgendwann wieder auskämmen, kann es gut sein, dass du die Spitzen ein gutes Stück abschneiden musst.
              </p>
              <p className="font-serif text-xl md:text-2xl italic text-background/50 leading-snug">
                Aber ehrlich?
              </p>
              <p className="font-sans text-sm text-background/55 leading-loose">
                Haare wachsen nach. Bei einem durchschnittlichen Haarwachstum von einem Zentimeter pro Monat hast du die verlorene Länge in spätestens einem Jahr wieder drin. Für die meisten Menschen ist das ein fairer Preis für etwas, das ihnen wirklich etwas bedeutet.
              </p>
            </div>

            <div className="flex flex-col gap-8">

              {/* Pflege-Tipp */}
              <div className="border border-background/10 rounded-xl p-8 flex flex-col gap-4">
                <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage">Was du tun kannst</p>
                <p className="font-sans text-sm text-background/55 leading-loose">
                  Offene Spitzen — wenn du welche hast — dürfen gepflegt werden. Eine Spülung an den Enden schadet nicht, sondern tut gut. Das Innere der Dread bleibt davon unberührt.
                </p>
              </div>

              {/* Warnung Filznadel */}
              <div className="border border-sage/30 rounded-xl p-8 flex flex-col gap-4 bg-sage/5">
                <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage">Was du unbedingt vermeiden solltest</p>
                <p className="font-sans text-sm text-background/55 leading-loose">
                  Keine Filznadel. Eine Filznadel hat kleine Klingen — wie winzige Messerchen — die das Haar nicht verfestigen, sondern durchschneiden. Das schwächt die Dread von innen, macht das Haar brüchig und kann dazu führen, dass Dreads abbrechen.
                </p>
                <p className="font-serif text-base italic text-background/60">
                  Eine Häkelnadel formt. Eine Filznadel zerstört.
                </p>
              </div>

            </div>
          </motion.div>

        </section>

        {/* Wie lebt es sich mit Dreads? */}
        <section className="px-8 md:px-24 py-32">

          <motion.div {...fade(0)} className="mb-20">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-6">
              Dreadlock-Alltag
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-text leading-tight mb-6">
              Wie lebt es sich mit Dreads?
            </h2>
            <p className="font-sans text-sm text-text/55 leading-loose max-w-xl">
              Dreads verändern nicht nur dein Aussehen — sie verändern auch ein paar Kleinigkeiten im Alltag.
              Nichts davon ist ein Problem. Aber du solltest es wissen.
            </p>
          </motion.div>

          {/* PDF Download */}
          <motion.div {...fade(0.15)} className="mb-16 flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <p className="font-serif text-xl md:text-2xl text-text leading-snug">
                Damit du bestens vorbereitet in deine Session gehst.
              </p>
              <p className="font-sans text-sm text-text/50 leading-loose max-w-lg">
                Von Waschen über Schlafen bis Sport — alles, was du in den ersten Wochen mit Dreads wissen musst. Kompakt. Zum Abhaken.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-4 border border-text/20 px-8 py-5 hover:bg-text hover:text-background transition-all duration-500 group self-start"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-sage group-hover:text-background transition-colors duration-500">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              <span className="font-sans text-xs tracking-[0.3em] uppercase">Vorbereitung auf deine Dreads — als PDF herunterladen</span>
            </a>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {([
              {
                label: "Waschen & Trocknen",
                title: "Einmal pro Woche reicht.",
                text: "Dreads müssen nicht täglich gewaschen werden — einmal pro Woche ist für die meisten das Richtige. Danach vollständig trocknen lassen. Das dauert ein paar Stunden, lohnt sich aber.",
              },
              {
                label: "Schlafen & Reisen",
                title: "Du hast immer ein Kissen dabei.",
                text: "Wirklich. Dreads haben so viel Volumen, dass du im Zug, im Auto oder im Flieger einfach den Kopf anlehnen kannst — und schon liegst du weich. Kein aufblasbares Nackenkissen mehr nötig. Das ist einer der kleinen, unterschätzten Vorteile.",
              },
              {
                label: "Hüte & Mützen",
                title: "Dein Kopf wird optisch größer.",
                text: "Mützen, Hüte, Helme — vieles passt nicht mehr so einfach wie früher. Du wirst Alternativen finden. Für den Winter empfehle ich große gestrickte Mützen oder Loop-Schals. Manche kommen auch gut ohne aus.",
              },
              {
                label: "Sport",
                title: "Kein Grund, nicht zu trainieren.",
                text: "Sport geht problemlos — auch mit langen Dreads. Es gibt ein paar kleine Tricks, die den Alltag deutlich einfacher machen.",
              },
              {
                label: "Haargummis",
                title: "Die normalen sind einfach zu klein.",
                text: "Mit dem Volumen von Dreads passt ein normaler Haargummi schlicht nicht mehr drum. Du brauchst große Scrunchies, breite Stoffbänder — etwas mit genug Umfang. Einmal umgestellt — nie mehr zurück.",
              },
              {
                label: "Gemeinschaft",
                title: "Du findest deine Leute schneller.",
                text: "Das klingt klein, ist es aber nicht: Mit Dreads wirst du schneller auf andere Dreadträger:innen aufmerksam — und andersrum auch. Es ist eine stille, herzliche Gemeinschaft. Etwas, das man nicht erklärt, aber spürt.",
              },
            ] as { label: string; title: string; text: ReactNode }[]).map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: (i % 3) * 0.1, ease: "easeOut" as const }}
                viewport={{ once: true }}
                className="border border-text/8 rounded-xl p-8 flex flex-col gap-3"
              >
                <p className="font-sans text-xs tracking-[0.25em] uppercase text-sage">{card.label}</p>
                <p className="font-serif text-lg text-text leading-snug">{card.title}</p>
                <p className="font-sans text-sm text-text/55 leading-loose">{card.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Closing */}
          <motion.div
            {...fade(0.4)}
            className="border-l-2 border-sage pl-8"
          >
            <p className="font-serif text-xl md:text-2xl text-text leading-snug">
              Du willst wissen, wie es sich bei deinen Haaren anfühlen würde?
            </p>
            <p className="font-serif text-xl md:text-2xl text-text/40 leading-snug mt-2">
              Genau das klären wir in der Beratung.
            </p>
            <Link
              href="/kontakt"
              className="font-sans text-xs tracking-[0.3em] uppercase text-text border border-text/20 px-10 py-4 hover:bg-text hover:text-background transition-all duration-500 inline-block mt-8"
            >
              Beratung anfragen →
            </Link>
          </motion.div>

        </section>

    </main>
  );
}
