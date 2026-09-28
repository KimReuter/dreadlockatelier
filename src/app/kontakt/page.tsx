"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { siteConfig } from "@/lib/siteConfig";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1, delay, ease: "easeOut" as const },
  viewport: { once: true },
});

const inputClass =
  "w-full bg-transparent border-b border-text/20 py-4 font-sans text-sm text-text placeholder:text-text/30 focus:outline-none focus:border-sage transition-colors duration-300";

const labelClass = "font-sans text-xs tracking-[0.25em] uppercase text-sage mb-2 block";

export default function KontaktPage() {
  const searchParams = useSearchParams();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: searchParams.get("message") || "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  useEffect(() => {
    const msg = searchParams.get("message");
    if (msg) setForm((f) => ({ ...f, message: msg }));
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main>

      {/* Hero */}
      <section className="bg-dark px-8 md:px-24 pt-48 pb-32">
        <motion.p {...fade(0)} className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-8">
          Kontakt
        </motion.p>
        <motion.h1
          {...fade(0.1)}
          className="font-serif text-5xl md:text-6xl lg:text-7xl text-background leading-tight mb-10"
        >
          Schreib mir.
        </motion.h1>
        <motion.p {...fade(0.2)} className="font-sans text-sm text-background/45 leading-loose max-w-xl">
          Erzähl mir von deinen Haaren, deinen Wünschen — und wir schauen gemeinsam, was möglich ist.
        </motion.p>
      </section>

      {/* Formular + Kontakt */}
      <section className="bg-background px-8 md:px-24 py-32">
        <div className="grid md:grid-cols-[2fr_1fr] gap-16 md:gap-24 items-start">

          {/* Formular */}
          <motion.div {...fade(0)}>
            {status === "success" ? (
              <div className="flex flex-col gap-6 py-16">
                <p className="font-serif text-3xl md:text-4xl text-text leading-snug">
                  Danke — ich melde mich bald.
                </p>
                <p className="font-sans text-sm text-text/50 leading-loose">
                  Deine Nachricht ist angekommen. Ich schaue mir alles in Ruhe an und melde mich so schnell wie möglich bei dir.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="font-sans text-xs tracking-[0.3em] uppercase text-text border border-text/20 px-8 py-4 hover:bg-text hover:text-background transition-all duration-500 self-start"
                >
                  Neue Nachricht schreiben
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-10">

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className={labelClass}>Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Dein Name"
                      required
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>E-Mail *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="deine@email.de"
                      required
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className={labelClass}>Telefon</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Optional"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Worum geht es?</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={`${inputClass} cursor-pointer`}
                    >
                      <option value="" disabled>Bitte wählen</option>
                      <option value="Neue Dreads">Neue Dreads</option>
                      <option value="Nachhäkeln">Nachhäkeln</option>
                      <option value="Extensions">Extensions</option>
                      <option value="Beratung">Erstmal nur Beratung</option>
                      <option value="Sonstiges">Sonstiges</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Deine Nachricht *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Erzähl mir von deinen Haaren, was du dir vorstellst, und ob du schon Referenzfotos hast..."
                    required
                    rows={6}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {status === "error" && (
                  <p className="font-sans text-xs text-red-400">
                    Etwas ist schiefgelaufen. Versuch es nochmal oder schreib mir direkt per E-Mail.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="font-sans text-xs tracking-[0.3em] uppercase text-text border border-text/20 px-10 py-5 hover:bg-text hover:text-background transition-all duration-500 self-start disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Wird gesendet..." : "Nachricht senden →"}
                </button>

              </form>
            )}
          </motion.div>

          {/* Kontaktinfos */}
          <motion.div {...fade(0.15)} className="flex flex-col gap-10 md:pt-8">

            <div className="flex flex-col gap-3">
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage">Direkt erreichbar</p>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="font-sans text-sm text-text/60 hover:text-text transition-colors duration-300"
              >
                {siteConfig.contact.email}
              </a>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="font-sans text-sm text-text/60 hover:text-text transition-colors duration-300"
              >
                {siteConfig.contact.phone}
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage">Instagram</p>
              <a
                href={siteConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-text/60 hover:text-text transition-colors duration-300"
              >
                {siteConfig.contact.instagram}
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage">Standort</p>
              <p className="font-sans text-sm text-text/60 leading-loose">
                {siteConfig.address.street}<br />
                {siteConfig.address.city}<br />
                {siteConfig.address.region}
              </p>
              <p className="font-sans text-xs text-text/30 leading-loose mt-1">
                Termine nur nach Vereinbarung.
              </p>
            </div>

          </motion.div>

        </div>
      </section>

    </main>
  );
}
