"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CountUp from "@/components/CountUp";

function SectionNumber({ number }: { number: string }) {
  return (
    <span className="font-sans text-xs text-sage/50 mr-4">
      {number}
    </span>
  );
}

export default function Atelier() {
  return (
    <>
      <PageHero label="Das Atelier" title="Kim Reuter" />

      {/* 01 Die Geschichte */}
      <section className="w-full md:w-1/2 mx-auto py-32 flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-16 flex items-center"
        >
          <SectionNumber number="01" />
          Die Geschichte
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-5xl text-text leading-tight mb-14"
        >
          Mit 14 hat meine Mama mir verboten Dreads zu haben.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="font-serif text-xl text-text/40 italic leading-relaxed mb-14"
        >
          Also haben meine beste Freundin und ich uns einfach im Zimmer
          eingeschlossen und es trotzdem getan.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="font-sans text-xs tracking-widest uppercase text-sage mb-14"
        >
          Es gab damals ja zum Glück schon Youtube.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-4xl text-text/30 leading-tight"
        >
          Seither habe ich einiges dazugelernt.
        </motion.p>
      </section>

      {/* Bild — asymmetrisch, nicht volle Breite */}
      <div className="flex justify-end">
        <div className="w-full md:w-3/4 h-[70vh] bg-sage/15" />
      </div>

      {/* 02 Wer ich bin */}
      <section className="bg-dark pl-[25%] pr-8 md:pr-24 py-32">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-20 flex items-center"
        >
          <SectionNumber number="02" />
          Wer ich bin
        </motion.p>
        <div className="max-w-3xl flex flex-col gap-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="font-serif text-lg text-background/30 leading-relaxed italic"
          >
            Manchmal weiß ich es selbst nicht so genau.
            <br />
            Zu viele Gegensätze, die sich irgendwie alle vereinen.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            viewport={{ once: true }}
            className="font-serif text-5xl md:text-6xl text-background leading-tight"
          >
            Kim.
            <br /><span className="italic text-sage">Abenteurerin.</span>
            <br />Weltenbummlerin.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3 pl-1 border-l border-sage/30"
          >
            <p className="font-sans text-sm text-background/50 leading-relaxed pl-6">
              Mama von zwei — beide kamen bei Alleingeburten auf die Welt.
            </p>
            <p className="font-sans text-sm text-background/50 leading-relaxed pl-6">
              Akkus laden beim Klettern, Snowboarden, Gleitschirmfliegen.
            </p>
            <p className="font-sans text-sm text-background/50 leading-relaxed pl-6">
              Sinn finden beim Häkeln von Dreads und Schreiben von Code.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45 }}
            viewport={{ once: true }}
            className="flex flex-col gap-2"
          >
            <p className="font-serif text-3xl text-background leading-snug">
              Ich bin eine Macherin.
            </p>
            <p className="font-serif text-3xl text-background/40 leading-snug">
              Ich warte nicht.
            </p>
            <p className="font-serif text-3xl text-background leading-snug">
              Ich mach mir die Welt wie sie mir gefällt.
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            viewport={{ once: true }}
            className="font-sans text-xs tracking-widest uppercase text-sage"
          >
            Und ich liebe Tiefgründigkeit genauso gern wie Schokolade.
          </motion.p>
        </div>
      </section>

      {/* 03 Meine Mission */}
      <section className="pl-8 md:pl-24 pr-[33%] py-40 flex flex-col text-right">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-12 flex items-center justify-end"
        >
          <SectionNumber number="03" />
          Meine Mission
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-serif text-5xl md:text-7xl text-text leading-tight mb-12"
        >
          Ich will Menschen
          <br />größer machen als
          <br />sie denken dass
          <br />sie es sind.
        </motion.p>
      </section>

      <div className="pl-8 md:pl-24 pr-[33%] pb-24 -mt-20 text-right">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="font-sans text-sm text-text/40 leading-loose"
        >
          Dreads sind für mich kein Trend.<br />
          Sie sind ein Statement.<br />
          Ein Akt der Selbstermächtigung.<br />
          Was ich bei jedem Termin weitergebe,<br />
          ist mehr als Handwerk — es ist Energie.<br />
          Die Energie aufzubrechen,<br />
          den eigenen Weg zu gehen<br />
          und sich zu trauen,<br />
          die eigenen Träume zu leben.
        </motion.p>
      </div>

      {/* Zweites Bild — diesmal links */}
      <div className="flex justify-start">
        <div className="w-full md:w-2/3 h-[55vh] bg-brown/15" />
      </div>

      {/* 04 Fakten */}
      <section className="bg-dark px-8 md:px-24 py-32">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-16 flex items-center">
          <SectionNumber number="04" />
          Zahlen
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="font-serif text-6xl text-background mb-2">
              <CountUp target={2024} duration={1500} />
            </p>
            <p className="font-sans text-xs tracking-widest uppercase text-sage">Gegründet</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <p className="font-serif text-6xl text-background mb-2">
              <CountUp target={120} suffix="+" />
            </p>
            <p className="font-sans text-xs tracking-widest uppercase text-sage">Kund:innen</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="font-serif text-6xl text-background mb-2">
              <CountUp target={100} suffix="%" />
            </p>
            <p className="font-sans text-xs tracking-widest uppercase text-sage">Handarbeit</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            viewport={{ once: true }}
          >
            <p className="font-serif text-6xl text-background mb-2">Plauen</p>
            <p className="font-sans text-xs tracking-widest uppercase text-sage">Sachsen</p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 md:px-24 py-40 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <p className="font-serif text-5xl md:text-7xl text-text leading-tight mb-8">
            Bereit für deine
            <br />
            <span className="italic text-sage">Transformation?</span>
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="font-sans text-sm text-text/30 leading-relaxed mb-12"
          >
            Jeder Termin ist einzigartig. Ich freue mich darauf, dich kennenzulernen.
          </motion.p>
          <Link
            href="/buchen"
            className="font-sans text-xs tracking-[0.3em] uppercase text-text border border-text/20 px-12 py-5 hover:bg-text hover:text-background transition-all duration-500"
          >
            Termin anfragen
          </Link>
        </motion.div>
      </section>
    </>
  );
}
