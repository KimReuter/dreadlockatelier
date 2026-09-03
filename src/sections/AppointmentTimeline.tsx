"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Vorbereitung",
    paragraphs: [
      "Bevor du überhaupt ins Studio kommst, klären wir deine wichtigsten Fragen.",
      "Du schickst mir Bilder deiner Haare und erzählst mir, was du dir vorstellst.",
      "Gemeinsam schauen wir, was machbar ist und was zu deinen Haaren passt.",
    ],
  },
  {
    number: "02",
    title: "Ankommen",
    paragraphs: [
      "Deine Haare sind frisch gewaschen und vollständig trocken.",
      "Du kommst an, machst es dir gemütlich und wir nehmen uns erstmal Zeit.",
      `Kein hektisches „So, dann setzen Sie sich mal“.`,
      "Wir sprechen.",
    ],
  },
  {
    number: "03",
    title: "Planen",
    paragraphs: ["Wir besprechen deine Wünsche noch einmal direkt vor Ort."],
    punchlines: ["Aufteilung.", "Dicke.", "Anzahl.", "Styling.", "Besonderheiten deiner Haare."],
    closing: "Erst wenn alles klar ist, legen wir los.",
  },
  {
    number: "04",
    title: "Dreaden",
    paragraphs: ["Und dann wird aus einzelnen Haarsträhnen langsam dein neues Gesamtbild."],
    punchlines: ["Du kannst quatschen.", "Musik hören.", "Lesen.", "Arbeiten.", "Einen Film schauen.", "Oder einfach entspannen."],
    closing: "Und wenn du zwischendurch eine Pause brauchst? Sag es.",
  },
  {
    number: "05",
    title: "Der Spiegelmoment",
    paragraphs: [
      "Irgendwann ist es geschafft.",
      "Du stehst auf.",
      "Drehst dich zum Spiegel.",
      "Fasst durch deine neuen Dreads.",
      "Und dann kommt hoffentlich genau dieser Moment:",
    ],
    quote: `„Fuck. Warum habe ich das nicht schon früher gemacht?"`,
  },
];

export default function AppointmentTimeline() {
  return (
    <section className="px-8 md:px-24 py-32">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex flex-col items-center text-center mb-24"
      >
        <h2 className="font-serif text-4xl md:text-5xl text-text leading-tight mb-4">
          Was passiert eigentlich bei deinem Termin?
        </h2>
        <p className="font-serif text-xl md:text-2xl italic text-text/40 leading-tight">
          Von „Ich will Dreads" bis „Oh mein Gott, ich liebe sie."
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-[70px_1fr] md:grid-cols-[100px_1fr]"
          >
            {/* Nummer links */}
            <div className="text-right pr-5">
              <p className="font-serif text-2xl md:text-3xl text-text/10 leading-none">{step.number}</p>
            </div>

            {/* Content rechts mit border-l Linie */}
            <div className={`relative border-l border-text/15 pl-8 ${i < steps.length - 1 ? "pb-16" : "pb-0"}`}>
              {/* Dot – sitzt genau am Anfang der Linie */}
              <div className="absolute -left-[7px] top-0 w-3.5 h-3.5 rounded-full bg-sage" />

              <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-5">
                {step.title}
              </p>

              <div className="flex flex-col gap-3">
                {step.paragraphs.map((p) => (
                  <p key={p} className="font-sans text-sm text-text/60 leading-loose">{p}</p>
                ))}

                {"punchlines" in step && step.punchlines && (
                  <div className="flex flex-col gap-1 pl-4 border-l border-text/10 my-1">
                    {step.punchlines.map((line) => (
                      <p key={line} className="font-sans text-sm text-text/40 leading-relaxed">{line}</p>
                    ))}
                  </div>
                )}

                {"closing" in step && step.closing && (
                  <p className="font-sans text-sm text-text/60 leading-loose">{step.closing}</p>
                )}

                {"quote" in step && step.quote && (
                  <p className="font-serif text-lg italic text-text/80 leading-snug mt-2">{step.quote}</p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex justify-center mt-20"
      >
        <Link
          href="/termin"
          className="font-sans text-xs tracking-[0.3em] uppercase text-text border border-text/20 px-10 py-4 hover:bg-text hover:text-background transition-all duration-500 inline-block"
        >
          Ich will meinen Termin planen →
        </Link>
      </motion.div>

    </section>
  );
}
