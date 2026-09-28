"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1, delay, ease: "easeOut" as const },
  viewport: { once: true },
});

export default function KimPage() {
  return (
    <main>

      {/* Hero */}
      <section className="bg-dark px-8 md:px-24 pt-48 pb-32">
        <motion.p {...fade(0)} className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-8">
          Kim Reuter
        </motion.p>
        <motion.h1
          {...fade(0.1)}
          className="font-serif text-5xl md:text-6xl lg:text-7xl text-background leading-tight mb-10"
        >
          Ich könnte dir jetzt erzählen,<br />wie professionell ich bin.
        </motion.h1>
        <motion.p {...fade(0.2)} className="font-serif text-2xl md:text-3xl text-background/40 leading-snug">
          Aber eigentlich möchte ich dir lieber erzählen,<br />warum ich diese Arbeit liebe.
        </motion.p>
      </section>

      {/* Die Geschichte */}
      <section className="bg-background px-8 md:px-24 py-32">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">

          <motion.div {...fade(0)} className="flex flex-col gap-6">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage">Wie es begann</p>
            <h2 className="font-serif text-4xl md:text-5xl text-text leading-tight">
              Mit 14. Und ohne Erlaubnis.
            </h2>
          </motion.div>

          <motion.div {...fade(0.1)} className="flex flex-col gap-6 md:mt-16">
            <p className="font-sans text-sm text-text/55 leading-loose">
              Ich war ein rebellischer Teenager. Meine Mum hat es nicht erlaubt — also habe ich es trotzdem gemacht. Mit meiner besten Freundin, zu Hause, einfach so. Meine ersten Dreads.
            </p>
            <p className="font-sans text-sm text-text/55 leading-loose">
              Danach war ich im Bekanntenkreis einfach diejenige, die weiß wie das geht. Und über die Jahre kamen immer wieder Menschen zu mir — durch Empfehlungen, durch Zufall, durch Verzweiflung. Und fast alle sagten dasselbe:
            </p>
            <p className="font-serif text-xl md:text-2xl text-text leading-snug border-l-2 border-sage pl-8">
              „Endlich habe ich jemanden gefunden, der Dreads macht. Ich habe so lange gesucht."
            </p>
            <p className="font-sans text-sm text-text/55 leading-loose">
              Irgendwann war mir klar: Wenn ich damit wirklich rausgehe — professionell, mit vollem Einsatz — dann kann ich so vielen Menschen dabei helfen, ihren Traum zu verwirklichen. Das war der Moment, in dem ich mich in die Selbstständigkeit getraut habe.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Was mich antreibt */}
      <section className="bg-dark px-8 md:px-24 py-32">

        <motion.div {...fade(0)} className="mb-16">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-6">Die ehrliche Version</p>
          <h2 className="font-serif text-4xl md:text-5xl text-background leading-tight">
            Was mich antreibt.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">

          <motion.div {...fade(0.1)} className="flex flex-col gap-6">
            <p className="font-sans text-sm text-background/55 leading-loose">
              Ich will ehrlich mit dir sein: Die Arbeit ist anstrengend. Stundenlang stehen. Man piekst sich ständig in die Finger. Der Körper merkt es am Abend.
            </p>
            <p className="font-serif text-2xl md:text-3xl text-background leading-snug">
              Und trotzdem — oder genau deshalb — bedeutet mir diese Arbeit wirklich viel.
            </p>
            <p className="font-sans text-sm text-background/55 leading-loose">
              Ich liebe die Gespräche, die dabei entstehen. Ich liebe es, mit meinen Händen etwas zu schaffen, das jemanden zum Lächeln bringt. Und ich liebe dieses Vertrauen — dass jemand zu mir kommt und sagt: Ich glaube, du kannst das für mich machen.
            </p>
            <p className="font-sans text-sm text-background/55 leading-loose">
              Das berührt mich. Jedes Mal wieder.
            </p>
          </motion.div>

          <motion.div {...fade(0.15)} className="flex flex-col gap-5 md:mt-8">
            <p className="font-serif text-xl italic text-background/35 leading-snug">
              Mir ist extrem wichtig, dass du wirklich das bekommst, was du dir vorstellst. Nicht meine Interpretation. Deine Vision.
            </p>
            <p className="font-sans text-sm text-background/55 leading-loose">
              Deshalb nehme ich mir vor jedem Termin Zeit für das Gespräch. Deshalb frage ich nach. Deshalb höre ich zu. Nicht weil ich muss — sondern weil ich genau weiß, dass der Unterschied zwischen „gut" und „wow" meistens in den Details liegt, die man am Anfang klärt.
            </p>
            <p className="font-sans text-sm text-background/55 leading-loose">
              Viele sagen mir hinterher, dass sie sich bei mir gut aufgehoben gefühlt haben. Das ist das schönste Kompliment, das ich mir vorstellen kann.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Was ich dir mitgeben möchte */}
      <section className="bg-background px-8 md:px-24 py-32">

        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">

          <motion.div {...fade(0)} className="flex flex-col gap-6">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage">Was mir wichtig ist</p>
            <h2 className="font-serif text-4xl md:text-5xl text-text leading-tight">
              Mehr als nur Dreads.
            </h2>
            <p className="font-sans text-sm text-text/55 leading-loose">
              Ich möchte dir mehr mitgeben als ein neues Aussehen. Es ist ein Lebensgefühl. Selbstwirksamkeit. Die Erfahrung, etwas zu wagen und zu merken: Das bin ich. Das passt.
            </p>
            <p className="font-sans text-sm text-text/55 leading-loose">
              Du bist gut so, wie du bist. Und manchmal braucht es einfach einen kleinen Schubs — ein bisschen Mut, eine Entscheidung, einen Anfang.
            </p>
            <p className="font-serif text-lg italic text-text/40 leading-snug">
              Wenn du meinen Stuhl verlässt und ein bisschen mehr du selbst bist als vorher — dann habe ich meinen Job gemacht.
            </p>
          </motion.div>

          <motion.div {...fade(0.15)} className="flex flex-col gap-4">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage/60 mb-2">Wenn ich nicht im Atelier bin</p>
            {[
              { label: "Bikepacking", text: "Tagelang mit dem Rad unterwegs — so weit wie möglich weg." },
              { label: "Gleitschirmfliegen", text: "Der Moment, wenn man abhebt, ist jedes Mal neu." },
              { label: "Klettern", text: "Mit den Händen nach oben. Irgendwie passend." },
              { label: "Snowboarden", text: "Sobald Schnee liegt, bin ich auf dem Berg." },
            ].map((item) => (
              <div key={item.label} className="border-b border-text/6 pb-4 flex flex-col gap-1">
                <p className="font-sans text-xs tracking-[0.2em] uppercase text-sage">{item.label}</p>
                <p className="font-sans text-sm text-text/45 leading-loose">{item.text}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* Erfahrung */}
      <section className="bg-dark px-8 md:px-24 py-32">

        <motion.div {...fade(0)} className="mb-20">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-6">Erfahrung</p>
          <h2 className="font-serif text-4xl md:text-5xl text-background leading-tight">
            In Zahlen, weil die für sich sprechen.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-background/5 mb-20">
          {[
            { number: "14", unit: "Jahre", text: "Seit ich das erste Mal Dreads gemacht habe — damals noch für mich selbst." },
            { number: "300+", unit: "Köpfe", text: "Menschen, denen ich geholfen habe, ihren Traum zu verwirklichen." },
            { number: "Alle", unit: "Haartypen", text: "Dünn, dick, lockig, glatt, gefärbt, kurz, lang — ich kenne die Herausforderungen." },
          ].map((stat) => (
            <motion.div
              key={stat.unit}
              {...fade(0.1)}
              className="bg-dark p-10 md:p-14 flex flex-col gap-4"
            >
              <div>
                <span className="font-serif text-5xl md:text-6xl text-background">{stat.number}</span>
                <span className="font-sans text-xs tracking-[0.3em] uppercase text-sage ml-3">{stat.unit}</span>
              </div>
              <p className="font-sans text-sm text-background/45 leading-loose">{stat.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div {...fade(0.2)} className="border-l-2 border-sage pl-8 max-w-2xl">
          <p className="font-sans text-sm text-background/45 leading-loose">
            Dicke und dünne Haare, volles Haar und wenig Haare, glatt und lockig, lang und sehr kurz, gefärbt, mit Dauerwelle — ich habe so gut wie alles gesehen. Und ich habe auch schon Kindern Dreads gemacht.
          </p>
          <p className="font-serif text-lg italic text-background/35 leading-snug mt-4">
            Keine zwei Köpfe sind gleich. Das ist das Schönste daran.
          </p>
        </motion.div>

      </section>

      {/* CTA */}
      <section className="bg-background px-8 md:px-24 py-24 border-t border-text/5">
        <motion.div {...fade(0)} className="flex flex-col items-center text-center gap-8">
          <p className="font-serif text-2xl md:text-3xl text-text/50 leading-snug">
            Jetzt weißt du ein bisschen mehr über mich.
          </p>
          <p className="font-serif text-4xl md:text-5xl text-text leading-tight">
            Darf ich dich ein bisschen kennenlernen?
          </p>
          <Link
            href="/kontakt"
            className="font-sans text-xs tracking-[0.3em] uppercase text-text border border-text/20 px-12 py-5 hover:bg-text hover:text-background transition-all duration-500 inline-block"
          >
            Termin anfragen →
          </Link>
        </motion.div>
      </section>

    </main>
  );
}
