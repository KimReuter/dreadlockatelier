"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ComingSoonPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const seen = sessionStorage.getItem("popup-seen");
      if (!seen) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function close() {
    try {
      sessionStorage.setItem("popup-seen", "1");
    } catch {}
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-6 md:p-10"
      style={{ backgroundColor: "rgba(74, 80, 64, 0.75)", backdropFilter: "blur(4px)" }}
    >
      <div className="bg-background relative w-full max-w-5xl" style={{ maxHeight: "90vh" }}>

        {/* Schließen-X */}
        <button
          onClick={close}
          aria-label="Schließen"
          className="absolute top-5 right-6 z-10 font-sans text-xs tracking-[0.3em] uppercase text-text/30 hover:text-text transition-colors"
        >
          ✕
        </button>

        <div className="grid md:grid-cols-[2fr_3fr]" style={{ height: "680px" }}>

          {/* Bild links */}
          <div className="hidden md:block relative overflow-hidden">
            <Image
              src="/popup-kim.jpg"
              alt="Kim beim Aufbau des neuen Ateliers"
              fill
              className="object-cover object-center"
              sizes="40vw"
            />
          </div>

          {/* Text rechts */}
          <div className="p-6 md:p-8 flex flex-col gap-3 overflow-y-auto">

            <p className="font-sans text-base tracking-[0.15em]">PSSST. 🤫</p>

            <p className="font-serif text-2xl md:text-3xl text-text leading-snug">
              Du bist gerade ein kleines bisschen zu früh hier.
            </p>

            <p className="font-serif text-lg italic text-text/50 leading-snug">
              Aber eigentlich auch genau richtig.
            </p>

            <div className="border-t border-text/8" />

            <p className="font-sans text-sm text-text/55 leading-relaxed">
              Denn während du gerade diese Website entdeckst, entsteht hinter den Kulissen etwas Neues:
            </p>

            <p className="font-serif text-lg text-text leading-snug">
              Mein neues Dreadlock Atelier. ✨
            </p>

            <p className="font-sans text-sm text-text/55 leading-relaxed">
              Dreads gibt es bei mir natürlich schon jetzt – nur noch nicht in diesem neuen Raum.
              Während ich meine Kund:innen aktuell noch an meinem bisherigen Arbeitsplatz empfange,
              wird nebenbei fleißig gebaut, geschraubt, gestrichen und vermutlich auch das eine oder
              andere Mal geflucht. 😄
            </p>

            <p className="font-sans text-sm text-text/55 leading-relaxed">
              Die Website ist deshalb ebenfalls noch nicht ganz fertig. Ein paar Bilder fehlen noch,
              manche Details bekommen gerade ihren letzten Schliff. Aber ich wollte dich nicht länger warten lassen.
            </p>

            <p className="font-sans text-sm text-text/55 leading-relaxed">
              Also zeige ich dir schon jetzt, was hier gerade entsteht — ein kleiner Blick hinter
              die Kulissen, ein bisschen Baustellen-Chaos und ganz viel Vorfreude auf den Ort,
              an dem deine nächsten Dreads entstehen könnten.
            </p>

            <p className="font-serif text-base italic text-text/70">
              Schön, dass du gerade jetzt hier bist. 🤍
            </p>

            <button
              onClick={close}
              className="mt-4 font-sans text-xs tracking-[0.3em] uppercase text-text border border-text/20 px-8 py-3 hover:bg-text hover:text-background transition-all duration-500 self-center"
            >
              → Reinspazieren
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}
