"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1, delay, ease: "easeOut" as const },
  viewport: { once: true },
});

export default function TerminPage() {
  return (
    <main>

      {/* Hero */}
      <section className="bg-dark px-8 md:px-24 pt-48 pb-32 border-b border-background/5">
        <motion.p {...fade(0)} className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-8">
          Dein Termin
        </motion.p>
        <motion.h1
          {...fade(0.1)}
          className="font-serif text-5xl md:text-6xl lg:text-7xl text-background leading-tight mb-10"
        >
          Hier verkaufen wir<br />keine Dreads.
        </motion.h1>
        <motion.p {...fade(0.2)} className="font-serif text-2xl md:text-3xl text-background/40 leading-snug">
          Hier verkaufen wir das Erlebnis.
        </motion.p>
      </section>

      {/* Das Atelier */}
      <section className="bg-background px-8 md:px-24 py-32">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">

          <motion.div {...fade(0)} className="flex flex-col gap-6">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage">Der Ort</p>
            <h2 className="font-serif text-4xl md:text-5xl text-text leading-tight">
              Ein Ort, der sich sofort richtig anfühlt.
            </h2>
            <p className="font-sans text-sm text-text/55 leading-loose">
              Mein Atelier ist ein kleines Tiny House im Garten — 3 × 3 Meter, aber mit einer Großzügigkeit, die man erst versteht wenn man drin ist. Ein breites Fenster mit Blick in den Garten. Besenstrichputz-Wände. Sichtbetonboden. Holzdecke. Ein Kamin.
            </p>
            <p className="font-sans text-sm text-text/55 leading-loose">
              Viele Pflanzen. Warmes Licht. Ein Aromaverdampfer. Und ein Friseurstuhl mit Massageauflage, in dem du es dir für die nächsten Stunden bequem machst.
            </p>
            <p className="font-serif text-lg italic text-text/40 leading-snug mt-2">
              Im Sommer sorgt eine Klimaanlage dafür, dass es angenehm bleibt.<br />Im Winter sorgt der Kamin für wohlige Wärme und Wohlfühlatmosphäre.
            </p>
          </motion.div>

          <motion.div {...fade(0.15)} className="flex flex-col gap-4 mt-4 md:mt-16">
            {[
              "Großes Fenster mit Gartenblick",
              "Kamin",
              "Massagestuhl mit Auflage",
              "Aromaverdampfer",
              "Pflanzen & warmes Licht",
              "Klimaanlage für den Sommer",
              "Tee, Kaffee & Wasser",
              "Vegetarisches Essen",
              "Musik nach deinem Geschmack",
            ].map((item) => (
              <div key={item} className="flex items-center gap-4 border-b border-text/6 pb-4">
                <span className="w-1 h-1 rounded-full bg-sage flex-shrink-0" />
                <p className="font-sans text-sm text-text/60">{item}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* Bevor du kommst */}
      <section className="bg-dark px-8 md:px-24 py-32 border-t border-background/5">

        <motion.div {...fade(0)} className="mb-16">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-6">Vorbereitung</p>
          <h2 className="font-serif text-4xl md:text-5xl text-background leading-tight">
            Bevor du kommst, reden wir.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <motion.div {...fade(0.1)} className="flex flex-col gap-6">
            <p className="font-sans text-sm text-background/55 leading-loose">
              Ich führe vor jedem Termin ein Beratungsgespräch — am liebsten per Video, damit ich deine Haare direkt sehe. Ein Anruf tut es auch.
            </p>
            <p className="font-sans text-sm text-background/55 leading-loose">
              „Ich will Dreads" ist ein Anfang — aber wir müssen viel mehr wissen, damit dein Ergebnis wirklich zu dir passt.
            </p>
          </motion.div>

          <motion.div {...fade(0.15)} className="flex flex-col gap-5">
            {[
              { q: "Echte Dreads oder Extensions?", text: "Sollen deine eigenen Haare gedreaded werden — oder möchtest du Extensions, die wir einarbeiten?" },
              { q: "Wie viele & wo?", text: "Komplett oder partial? Welche Stellen? Wie dicht? Das bestimmt die Dauer — und ob wir einen oder mehrere Termine brauchen." },
              { q: "Wie stellst du dir das Ergebnis vor?", text: "Fotos helfen enorm. Ich sehe dann sofort, ob das mit deinem Haar umsetzbar ist." },
              { q: "Wie ist dein Haar gerade?", text: "Zustand, Länge, Farbe, Behandlungen — all das beeinflusst, wie wir vorgehen." },
            ].map((item, i) => (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: "easeOut" as const }}
                viewport={{ once: true }}
                className="border-l-2 border-background/10 pl-6 flex flex-col gap-2"
              >
                <p className="font-sans text-xs tracking-[0.2em] uppercase text-sage">{item.q}</p>
                <p className="font-sans text-sm text-background/45 leading-loose">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Der Ablauf */}
      <section className="bg-background px-8 md:px-24 py-32">

        <motion.div {...fade(0)} className="mb-16">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-6">Der Tag</p>
          <h2 className="font-serif text-4xl md:text-5xl text-text leading-tight">
            So läuft dein Termin ab.
          </h2>
        </motion.div>

        <div className="flex flex-col">
          {[
            {
              number: "01",
              label: "Vor deinem Termin",
              content: (
                <div className="flex flex-col gap-4">
                  <p className="font-sans text-sm text-text/55 leading-loose">
                    Haare waschen — am Tag vorher oder am Morgen — und vollständig trocknen lassen. Keine Produkte. Bring deine Referenzfotos mit, wenn du welche hast.
                  </p>
                  <p className="font-serif text-base italic text-text/35">
                    Alles andere besprechen wir in unserem Videogespräch davor.
                  </p>
                </div>
              ),
            },
            {
              number: "02",
              label: "Wenn du ankommst",
              content: (
                <div className="flex flex-col gap-4">
                  <p className="font-sans text-sm text-text/55 leading-loose">
                    Erst mal ankommen. Ich kümmere mich um dein Getränk — und setze mich zu dir. Wir gehen nochmal durch, was wir machen, was du dir vorstellst, ob noch Fragen offen sind.
                  </p>
                  <p className="font-sans text-sm text-text/55 leading-loose">
                    Mach es dir bequem. Richte dich ein. Du bist hier nicht auf der Durchreise.
                  </p>
                  <p className="font-serif text-base italic text-text/35">
                    Und bitte: Nimm dir Tee, Kaffee, Essen — wirklich. Du musst nicht 10x gefragt werden.
                  </p>
                </div>
              ),
            },
            {
              number: "03",
              label: "Während deiner Session",
              content: (
                <div className="flex flex-col gap-4">
                  <p className="font-sans text-sm text-text/55 leading-loose">
                    Eine Session dauert im Schnitt 4 bis 8 Stunden — je nachdem was wir machen. Die Zeit gehört dir. Lies, arbeite, rede oder sei einfach still. Alles ist richtig.
                  </p>
                  <div className="flex flex-wrap gap-3 mt-2">
                    {["Massagestuhl mit Auflage", "Musik nach deinem Geschmack", "Essen & Trinken", "Kamin im Winter", "Gartenblick"].map((tag) => (
                      <span key={tag} className="font-sans text-xs text-text/50 border border-text/10 px-4 py-2 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <p className="font-sans text-sm text-text/55 leading-loose mt-2">
                    Bei größeren Projekten — vollständiger Kopf, Extensions, feine Dreads — planen wir von Anfang an zwei oder drei Termine ein. Keine Überraschungen.
                  </p>
                </div>
              ),
            },
            {
              number: "04",
              label: "Wenn du gehst",
              content: (
                <div className="flex flex-col gap-5">
                  <p className="font-serif text-3xl md:text-4xl text-text leading-snug">
                    Neue Dreads.
                  </p>
                  <p className="font-serif text-3xl md:text-4xl text-text/30 leading-snug">
                    Und hoffentlich dieses Grinsen.
                  </p>
                </div>
              ),
            },
          ].map((phase, i) => (
            <motion.div
              key={phase.number}
              {...fade(i * 0.1)}
              className="grid md:grid-cols-[180px_1fr] gap-8 md:gap-16 py-14 border-b border-text/6 last:border-b-0"
            >
              <div className="flex flex-col gap-2">
                <p className="font-serif text-5xl text-text/8 leading-none">{phase.number}</p>
                <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage">{phase.label}</p>
              </div>
              <div className="flex flex-col justify-center">
                {phase.content}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Was du wissen solltest */}
      <section className="bg-dark px-8 md:px-24 py-32 border-t border-background/5">

        <motion.div {...fade(0)} className="mb-16">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-6">Nach deiner Session</p>
          <h2 className="font-serif text-4xl md:text-5xl text-background leading-tight">
            Dreads brauchen Zeit, um zu reifen.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">

          <motion.div {...fade(0.1)} className="flex flex-col gap-6">
            <p className="font-sans text-sm text-background/55 leading-loose">
              In den ersten Wochen können Fusselhaare entstehen — das ist völlig normal und kein Zeichen, dass etwas schiefgelaufen ist. Dreads filzen mit der Zeit von alleine fester. Dafür brauchen sie einfach ein bisschen Geduld.
            </p>
            <p className="font-serif text-xl md:text-2xl text-background leading-snug">
              Was wirklich wichtig ist:
            </p>
            <p className="font-sans text-sm text-background/55 leading-loose">
              Spätestens nach 3 Monaten solltest du zum Nachhäkeln kommen. Nicht weil etwas falsch ist — sondern weil neue Haare nachwachsen und die Dreads an den Ansätzen nachgearbeitet werden müssen.
            </p>
          </motion.div>

          <motion.div {...fade(0.15)} className="flex flex-col gap-6">
            <div className="border border-sage/30 rounded-xl p-8 bg-sage/5 flex flex-col gap-4">
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage">Wichtig im ersten Jahr</p>
              <p className="font-sans text-sm text-background/55 leading-loose">
                Knoten und Verfilzungen, die sich in den ersten Monaten bilden und nicht behoben werden, lassen sich später nicht mehr lösen. Das erste Jahr ist entscheidend dafür, wie deine Dreads langfristig aussehen.
              </p>
              <p className="font-serif text-base italic text-background/60">
                Lass es nicht schleifen — egal ob bei mir oder jemand anderem. Aber meld dich gerne bei mir.
              </p>
            </div>
            <p className="font-sans text-sm text-background/35 leading-loose">
              Wenn du nach deiner Session nicht glücklich bist: Sag es mir. Aber bleib an dran an der Pflege. Das erste Jahr ist zu wichtig, um es zu ignorieren.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Spotify */}
      <section className="bg-background px-8 md:px-24 py-24 border-t border-text/5">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">

          <motion.div {...fade(0)} className="flex flex-col gap-6">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage">Musik</p>
            <p className="font-serif text-3xl md:text-4xl text-text leading-tight">
              Du darfst übrigens bestimmen,<br />was läuft.
            </p>
            <p className="font-sans text-sm text-text/45 leading-loose">
              Ich höre selbst gerne Pomplamoose Radio — aber sag mir einfach welchen Künstler oder welches Genre du magst, und ich stelle es ein. Deine Session, deine Musik.
            </p>
            <a
              href="https://open.spotify.com/playlist/7mPreb0RRRWPxfyoDelVYG"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs tracking-[0.3em] uppercase text-text border border-text/20 px-10 py-4 hover:bg-text hover:text-background transition-all duration-500 inline-block self-start"
            >
              Playlist auf Spotify →
            </a>
          </motion.div>

          <motion.div {...fade(0.15)} className="rounded-2xl overflow-hidden">
            <iframe
              src="https://open.spotify.com/embed/playlist/7mPreb0RRRWPxfyoDelVYG?utm_source=generator&theme=0"
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded-2xl"
            />
          </motion.div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark px-8 md:px-24 py-24 border-t border-background/5">
        <motion.div {...fade(0)} className="flex flex-col items-center text-center gap-8">
          <p className="font-serif text-2xl md:text-3xl text-background/50 leading-snug">
            Bereit?
          </p>
          <p className="font-serif text-4xl md:text-5xl text-background leading-tight">
            Dann schreib mir.
          </p>
          <Link
            href="/kontakt"
            className="font-sans text-xs tracking-[0.3em] uppercase text-background border border-background/20 px-12 py-5 hover:bg-background hover:text-dark transition-all duration-500 inline-block"
          >
            Termin anfragen →
          </Link>
        </motion.div>
      </section>

    </main>
  );
}
