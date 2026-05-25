"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageHero from "@/components/PageHero";

const featured = {
  id: "01",
  name: "Tina",
  age: 34,
  service: "Neuerstellung",
  info: "22 Dreads · 8 Stunden",
  quote: "Ich wollte endlich aufhören, jemand anderes zu sein.",
  description:
    "Tina hat jahrelang gezögert. Nicht weil sie unsicher war — sondern weil sie es richtig machen wollte. Beim ersten Gespräch war sofort klar: Sie weiß genau, was sie will. Unregelmäßig, lebendig, echt. Kein Katalogbild.",
};

const stories = [
  {
    id: "02",
    name: "Lena",
    age: 26,
    service: "Pflege",
    info: "8 Monate nach Neuerstellung",
    description: "Die Dreads hatten ihren eigenen Charakter entwickelt. Wir haben die Ansätze nachgehäkelt — und Lena hat danach zwei Stunden lang in den Spiegel geschaut.",
    bg: "bg-sage/25",
    tall: false,
  },
  {
    id: "03",
    name: "Marie",
    age: 29,
    service: "Verlängerungen",
    info: "Schulter → Hüfte",
    description: "Manchmal reicht einem die Länge einfach nicht. Extensions, 7 Stunden, und auf einmal war Marie eine andere.",
    bg: "bg-brown/20",
    tall: true,
  },
  {
    id: "04",
    name: "Sarah",
    age: 31,
    service: "Neuerstellung",
    info: "18 Dreads · Feines Haar",
    description: "Feines Haar ist seine eigene Wissenschaft. Wir haben uns Zeit gelassen, haben geredet, probiert. Das Ergebnis: softer, zartes — und trotzdem eindeutig.",
    bg: "bg-sage/15",
    tall: false,
  },
  {
    id: "05",
    name: "Jana",
    age: 23,
    service: "Entfernung",
    info: "4 Jahre · 26 Dreads",
    description: "Auch das Loslassen hat seine Schönheit. Jana wollte einen neuen Anfang — und hat trotzdem mit Tränen in den Augen Tschüss gesagt.",
    bg: "bg-brown/30",
    tall: true,
  },
  {
    id: "06",
    name: "Lisa",
    age: 38,
    service: "Pflege",
    info: "Jahrespflege · Komplett",
    description: "Manche kommen einmal im Jahr, und das reicht. Lisa ist eine davon. Ihre Dreads sehen trotzdem jeden Tag aus wie frisch.",
    bg: "bg-sage/30",
    tall: false,
  },
];

export default function Stories() {
  return (
    <>
      <PageHero label="Echte Menschen. Echte Dreads." title="Stories" />

      {/* Intro */}
      <section className="px-8 md:px-24 py-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="font-serif text-2xl md:text-3xl text-text/40 max-w-2xl leading-relaxed"
        >
          Hinter jedem Kopf steckt eine Geschichte.
          <br />
          Hier sind ein paar davon.
        </motion.p>
      </section>

      {/* Featured Story */}
      <section className="grid md:grid-cols-12 min-h-[90vh]">
        {/* Bild */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="md:col-span-7 bg-brown/25 min-h-[60vh] relative"
        >
          <span className="absolute top-8 left-8 font-sans text-xs tracking-widest uppercase text-background/30">
            {featured.id}
          </span>
          {/* Wenn du dein Foto hast: <Image src="/stories/tina.jpg" fill className="object-cover" alt="Tina" /> */}
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          viewport={{ once: true }}
          className="md:col-span-5 flex flex-col justify-end px-8 md:px-16 py-16 bg-dark"
        >
          <p className="font-sans text-xs tracking-widest uppercase text-sage mb-8">
            {featured.service}
          </p>
          <blockquote className="font-serif text-3xl md:text-4xl text-background leading-snug mb-10">
            &ldquo;{featured.quote}&rdquo;
          </blockquote>
          <p className="font-sans text-sm text-background/40 leading-relaxed mb-10 max-w-sm">
            {featured.description}
          </p>
          <div className="flex items-center gap-6 pt-8 border-t border-background/10">
            <div>
              <p className="font-serif text-xl text-background">{featured.name}</p>
              <p className="font-sans text-xs text-background/30">{featured.age} Jahre</p>
            </div>
            <span className="text-background/10">·</span>
            <p className="font-sans text-xs tracking-widest uppercase text-sage/60">
              {featured.info}
            </p>
          </div>
        </motion.div>
      </section>

      {/* Story Grid */}
      <section className="px-8 md:px-24 py-24">
        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((story, i) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col group ${story.tall ? "md:row-span-2" : ""}`}
            >
              {/* Bild-Placeholder */}
              <div
                className={`w-full relative overflow-hidden ${story.tall ? "h-[600px]" : "h-[340px]"} ${story.bg}`}
              >
                <span className="absolute top-5 left-5 font-sans text-xs tracking-widest text-text/20">
                  {story.id}
                </span>
                {/* Wenn du dein Foto hast: <Image src={`/stories/${story.name.toLowerCase()}.jpg`} fill className="object-cover" alt={story.name} /> */}
              </div>

              {/* Info */}
              <div className="pt-6 pb-10">
                <div className="flex items-center justify-between mb-3">
                  <p className="font-sans text-xs tracking-widest uppercase text-sage">
                    {story.service}
                  </p>
                  <p className="font-sans text-xs text-text/20">{story.info}</p>
                </div>
                <h3 className="font-serif text-xl text-text mb-2">{story.name}</h3>
                <p className="font-sans text-sm text-text/40 leading-relaxed">
                  {story.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="bg-dark px-8 md:px-24 py-40 flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="font-serif text-5xl md:text-7xl text-background leading-tight mb-10"
        >
          Deine Geschichte
          <br />
          <span className="italic text-sage">fehlt noch.</span>
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link
            href="/kontakt"
            className="font-sans text-xs tracking-[0.3em] uppercase text-background border border-background/20 px-12 py-5 hover:bg-background hover:text-dark transition-all duration-500"
          >
            Termin anfragen
          </Link>
        </motion.div>
      </section>
    </>
  );
}
