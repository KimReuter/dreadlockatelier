"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import { siteConfig } from "@/lib/siteConfig";

export default function Kontakt() {
  return (
    <>
      <PageHero label="Schreib mir" title="Kontakt" />

      <section className="grid md:grid-cols-2 min-h-screen">

        {/* Links — Kontaktinfos */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="px-8 md:px-20 py-24 flex flex-col justify-between"
        >
          <div>
            <p className="font-serif text-2xl md:text-3xl text-text leading-relaxed mb-16 max-w-sm">
              Jede Reise beginnt mit einem ersten Schritt.
              <br />
              <span className="italic text-sage">Meld dich einfach.</span>
            </p>

            <div className="flex flex-col gap-12">
              <div>
                <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-4">
                  Direkt erreichen
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="font-serif text-xl text-text hover:text-sage transition-colors duration-300"
                  >
                    {siteConfig.contact.phone}
                  </a>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="font-serif text-xl text-text hover:text-sage transition-colors duration-300"
                  >
                    {siteConfig.contact.email}
                  </a>
                  <a
                    href={siteConfig.contact.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-xl text-text hover:text-sage transition-colors duration-300"
                  >
                    {siteConfig.contact.instagram}
                  </a>
                </div>
              </div>

              <div>
                <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-4">
                  Öffnungszeiten
                </p>
                <div className="flex flex-col gap-3">
                  {siteConfig.hours.map((h) => (
                    <div key={h.day} className="flex justify-between gap-8 max-w-xs">
                      <span className="font-sans text-sm text-text/50">{h.day}</span>
                      <span className="font-sans text-sm text-text">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Rechts — Formular */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="bg-dark px-8 md:px-20 py-24 flex flex-col justify-center"
        >
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-12">
            Nachricht schreiben
          </p>

          <form className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <label className="font-sans text-xs tracking-widest uppercase text-background/30">
                Name
              </label>
              <input
                type="text"
                placeholder="Dein Name"
                className="bg-transparent border-b border-background/10 text-background font-sans text-base py-3 focus:outline-none focus:border-sage transition-colors duration-300 placeholder:text-background/20"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-sans text-xs tracking-widest uppercase text-background/30">
                E-Mail
              </label>
              <input
                type="email"
                placeholder="deine@email.de"
                className="bg-transparent border-b border-background/10 text-background font-sans text-base py-3 focus:outline-none focus:border-sage transition-colors duration-300 placeholder:text-background/20"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-sans text-xs tracking-widest uppercase text-background/30">
                Nachricht
              </label>
              <textarea
                rows={5}
                placeholder="Was beschäftigt dich gerade?"
                className="bg-transparent border-b border-background/10 text-background font-sans text-base py-3 focus:outline-none focus:border-sage transition-colors duration-300 placeholder:text-background/20 resize-none"
              />
            </div>

            <button
              type="submit"
              className="font-sans text-xs tracking-[0.3em] uppercase text-background border border-background/20 px-12 py-5 hover:bg-background hover:text-dark transition-all duration-500 self-start mt-4"
            >
              Absenden
            </button>
          </form>
        </motion.div>

      </section>
    </>
  );
}
