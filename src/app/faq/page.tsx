"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1, delay, ease: "easeOut" as const },
  viewport: { once: true },
});

const categories = [
  {
    label: "Pflege & Alltag",
    questions: [
      {
        q: "Wie oft soll ich meine Dreads waschen?",
        a: "Einmal pro Woche ist für die meisten das Richtige. Dreads müssen nicht täglich gewaschen werden — das ist sogar besser so. Am besten ein silikonfreies Shampoo oder eine hochwertige Seife in einem Schwamm aufschäumen und sanft auftupfen. Reiben erzeugt Fusselhaare. Und danach: vollständig trocknen lassen.",
      },
      {
        q: "Wie pflege ich meine Dreads richtig?",
        a: "Silikonfreies Shampoo, ein weiches Mikrofaserhandtuch und vollständiges Trocknen — das ist der größte Teil der Pflege. Offene Spitzen dürfen mit einer Spülung gepflegt werden, das Innere der Dread bleibt davon unberührt. Wachs, Öle und andere Produkte solltest du weglassen — sie hinterlassen Rückstände und erschweren das Filzen.",
      },
      {
        q: "Kann man mit Dreads schwimmen gehen?",
        a: "Ja — mit einem Hinweis: Frische Dreads (erste 4–6 Wochen) sollten möglichst nicht nass werden, da sie noch nicht vollständig gefestigt sind und Wasser sie lockern kann. Danach ist Schwimmen kein Problem. Wichtig: Danach immer vollständig trocknen lassen.",
      },
      {
        q: "Kann man mit Dreads Sport machen?",
        a: "Absolut. Durch das Schwitzen entsteht manchmal das Gefühl, die Dreads waschen zu müssen — dabei ist meist nur der Ansatz verschwitzt. Tipp: Die Längen der Dreads in einen Gefrierbeutel stecken und mit einem Haargummi sichern, dann nur die Ansätze waschen. Klingt komisch, funktioniert wirklich.",
      },
      {
        q: "Kann man Dreads färben?",
        a: "Ja. Am besten kurz vor deiner Session, wenn du danach weiterfärben möchtest. Blondiertes Haar ist empfindlicher — es sollte nicht zu eng gehäkelt werden, damit es nicht brüchig wird.",
      },
      {
        q: "Wie schläft man am besten mit Dreads?",
        a: "Am besten so, dass du nicht auf den nassen Dreads schläfst. Wenn sie abends noch feucht sind: Handtuch übers Kissen, Dreads nach oben binden. Ansonsten: Dreads haben so viel Volumen, dass du im Zug, im Auto oder auf Reisen quasi immer ein eigenes Kissen dabei hast.",
      },
    ],
  },
  {
    label: "Entwicklung & Haltbarkeit",
    questions: [
      {
        q: "Was ist normal in den ersten Monaten?",
        a: "Fusselhaare — und zwar viele. Das ist völlig normal und kein Zeichen, dass etwas schiefgelaufen ist. Dreads filzen mit der Zeit von selbst fester. Dafür brauchen sie Geduld und eine gute erste Maintenance. Nach etwa 3 Monaten solltest du zum Nachhäkeln kommen.",
      },
      {
        q: "Wie oft muss ich nachhäkeln lassen?",
        a: "Spätestens alle 3 Monate, besonders im ersten Jahr. Neue Haare wachsen nach und die Ansätze müssen nachgearbeitet werden. Knoten und Verfilzungen, die sich in dieser Zeit bilden und nicht behoben werden, lassen sich später nicht mehr lösen. Das erste Jahr ist entscheidend dafür, wie deine Dreads langfristig aussehen.",
      },
      {
        q: "Werden Dreads mit der Zeit dünner oder dicker?",
        a: "Beides ist möglich — abhängig davon, wie viele Haare nachwachsen und wie die Pflege aussieht. In der Regel werden sie mit der Zeit fester und kompakter. Sehr dünne Dreads können über Jahre etwas feiner werden.",
      },
      {
        q: "Wie lange kann man Dreads tragen?",
        a: "So lange du möchtest. Manche tragen sie ein Leben lang. Dreads entwickeln sich über die Jahre weiter und werden mit der Zeit charaktervoller und fester. Es gibt keine Grenze nach oben.",
      },
      {
        q: "Können Dreads wieder ausgekämmt werden?",
        a: "Grundsätzlich ja — aber du wirst wahrscheinlich die Spitzen abschneiden müssen. Je länger die Dreads getragen wurden, desto aufwändiger ist das Auskämmen. Haare wachsen nach — bei durchschnittlich einem Zentimeter pro Monat hast du die verlorene Länge in spätestens einem Jahr wieder. Für die meisten ist das ein fairer Preis.",
      },
    ],
  },
  {
    label: "Mythen & Fragen",
    questions: [
      {
        q: "Sind Dreads unhygienisch?",
        a: "Nein. Dreads die regelmäßig gewaschen und vollständig getrocknet werden, sind genauso hygienisch wie jedes andere Haar. Das Klischee hält sich hartnäckig — stimmt aber nicht.",
      },
      {
        q: "Können Dreads schimmeln?",
        a: "Nur wenn sie regelmäßig nass werden und nicht vollständig trocknen. Deshalb ist das vollständige Trocknen so wichtig. Wer abends mit feuchten Dreads schläft und das regelmäßig tut, riskiert tatsächlich Schimmelbildung. Die Lösung ist simpel: immer vollständig trocknen lassen.",
      },
      {
        q: "Stinken Dreads?",
        a: "Nein — wenn sie sauber und trocken sind. Ein Dread, der nie richtig trocknet oder selten gewaschen wird, kann unangenehm riechen. Aber das gilt für jedes Haar. Sauber gepflegte Dreads riechen nach nichts.",
      },
      {
        q: "Kann ich mir Dreads selbst machen?",
        a: "Technisch ja — aber das Ergebnis hängt stark von Technik und Erfahrung ab. Was in einer professionellen Session passiert, geht weit über das hinaus, was man sich selbst bieten kann: die richtige Einteilung, die richtige Methode, das Ergebnis, das zu deinen Haaren passt. Nach über 300 gemachten Köpfen weiß ich, dass jeder Kopf anders ist.",
      },
    ],
  },
  {
    label: "Über den Termin",
    questions: [
      {
        q: "Was sind Partial Dreads?",
        a: "Partial Dreads sind einzelne Dreads, die nur an bestimmten Stellen im Haar gesetzt werden — zum Beispiel als Akzente im Unterhaar oder an einzelnen Strähnen. Eine schöne Möglichkeit, um erst mal zu schauen wie es sich anfühlt, ohne alles auf einmal zu verändern.",
      },
      {
        q: "Wie lange dauert eine Session?",
        a: "Im Schnitt 4 bis 8 Stunden — je nachdem was gemacht wird. Wenige Partial Dreads können in 2 Stunden fertig sein. Ein kompletter Kopf mit Extensions kann auf 2 Tage verteilt werden. Den genauen Rahmen besprechen wir immer vorher.",
      },
      {
        q: "Was muss ich vor dem Termin vorbereiten?",
        a: "Haare waschen und vollständig trocknen lassen — am Tag vorher oder am Morgen. Keine Produkte ins Haar geben. Referenzfotos mitbringen, wenn du welche hast. Und alles andere klären wir im Beratungsgespräch vorher.",
      },
      {
        q: "Was kostet eine Session?",
        a: "Die Erstellung kostet 45 € pro Stunde, das Nachhäkeln 40 € pro Stunde. Du bezahlst minutengenau — keine Pakete, keine aufgerundeten Stunden. Vor deinem Termin bekommst du immer eine realistische Einschätzung.",
      },
    ],
  },
];

function AccordionItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-text/8">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-8 py-6 text-left group"
      >
        <p className="font-serif text-lg md:text-xl text-text group-hover:text-sage transition-colors duration-300 leading-snug">
          {q}
        </p>
        <span className={`flex-shrink-0 w-5 h-5 relative transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
          <span className="absolute top-1/2 left-0 w-full h-px bg-text/40 group-hover:bg-sage transition-colors duration-300" />
          <span className="absolute left-1/2 top-0 h-full w-px bg-text/40 group-hover:bg-sage transition-colors duration-300" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="font-sans text-sm text-text/55 leading-loose pb-8 max-w-2xl">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggle = (key: string) => setOpenItem((prev) => (prev === key ? null : key));

  return (
    <main>

      {/* Hero */}
      <section className="bg-dark px-8 md:px-24 pt-48 pb-32">
        <motion.p {...fade(0)} className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-8">
          FAQ
        </motion.p>
        <motion.h1
          {...fade(0.1)}
          className="font-serif text-5xl md:text-6xl lg:text-7xl text-background leading-tight mb-10"
        >
          Fragen, die sich<br />viele stellen.
        </motion.h1>
        <motion.p {...fade(0.2)} className="font-sans text-sm text-background/45 leading-loose max-w-xl">
          Hier findest du Antworten auf die häufigsten Fragen rund um Dreads — ehrlich, klar und ohne Fachchinesisch.
        </motion.p>
      </section>

      {/* FAQ */}
      <section className="bg-background px-8 md:px-24 py-32">
        <div className="flex flex-col gap-20">
          {categories.map((cat, ci) => (
            <motion.div key={cat.label} {...fade(ci * 0.05)}>
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-8">{cat.label}</p>
              <div>
                {cat.questions.map((item, qi) => {
                  const key = `${ci}-${qi}`;
                  return (
                    <AccordionItem
                      key={key}
                      q={item.q}
                      a={item.a}
                      isOpen={openItem === key}
                      onToggle={() => toggle(key)}
                    />
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark px-8 md:px-24 py-24 border-t border-background/5">
        <motion.div {...fade(0)} className="flex flex-col items-center text-center gap-8">
          <p className="font-serif text-2xl md:text-3xl text-background/50 leading-snug">
            Noch eine Frage?
          </p>
          <p className="font-serif text-4xl md:text-5xl text-background leading-tight">
            Schreib mir einfach.
          </p>
          <Link
            href="/kontakt"
            className="font-sans text-xs tracking-[0.3em] uppercase text-background border border-background/20 px-12 py-5 hover:bg-background hover:text-dark transition-all duration-500 inline-block"
          >
            Kontakt aufnehmen →
          </Link>
        </motion.div>
      </section>

    </main>
  );
}
