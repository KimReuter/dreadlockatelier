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
      className="fixed inset-0 z-50 flex items-center justify-center p-6 md:p-12"
      style={{ backgroundColor: "rgba(74, 80, 64, 0.75)", backdropFilter: "blur(4px)" }}
    >
      <div className="bg-background w-full relative" style={{ maxWidth: "900px" }}>

        {/* Schließen-X */}
        <button
          onClick={close}
          aria-label="Schließen"
          className="absolute top-5 right-6 font-sans text-xs tracking-[0.3em] uppercase text-text/30 hover:text-text transition-colors"
        >
          ✕
        </button>

        <div className="grid md:grid-cols-[1fr_1.4fr]">

          {/* Bild links */}
          <div className="hidden md:block relative min-h-full">
            <Image
              src="/popup-kim.jpg"
              alt="Kim beim Aufbau des neuen Ateliers"
              fill
              className="object-cover object-center"
              sizes="40vw"
            />
          </div>

          {/* Text rechts */}
          <div className="p-8 md:p-10 flex flex-col gap-4">

            <p className="font-sans text-base tracking-[0.15em]">PSSST. 🤫</p>

            <p className="font-serif text-2xl md:text-3xl text-text leading-snug">
              Du bist gerade ein kleines bisschen zu früh hier.
            </p>

            <p className="font-serif text-lg italic text-text/50 leading-snug">
              Aber eigentlich auch genau richtig.
            </p>

            <div className="border-t border-text/8" />

            <p className="font-sans text-sm text-text/55 leading-loose">
              Denn während du gerade diese Website entdeckst, entsteht hinter den Kulissen etwas Neues:
            </p>

            <p className="font-serif text-lg text-text leading-snug">
              Mein neues Dreadlock Atelier. ✨
            </p>

            <p className="font-sans text-sm text-text/55 leading-loose">
              Dreads gibt es bei mir natürlich schon jetzt – nur noch nicht in diesem neuen Raum.
              Während ich meine Kund:innen aktuell noch an meinem bisherigen Arbeitsplatz empfange,
              wird nebenbei fleißig gebaut, geschraubt, gestrichen und vermutlich auch das eine oder
              andere Mal geflucht. 😄
            </p>

            <p className="font-sans text-sm text-text/55 leading-loose">
              Die Website ist deshalb ebenfalls noch nicht ganz fertig. Ein paar Bilder fehlen noch,
              manche Details bekommen gerade ihren letzten Schliff. Aber ich wollte dich nicht länger warten lassen.
            </p>

            <p className="font-sans text-sm text-text/55 leading-loose">
              Also zeige ich dir schon jetzt, was hier gerade entsteht — ein kleiner Blick hinter
              die Kulissen, ein bisschen Baustellen-Chaos und ganz viel Vorfreude auf den Ort,
              an dem deine nächsten Dreads entstehen könnten.
            </p>

            <p className="font-serif text-base italic text-text/70">
              Schön, dass du gerade jetzt hier bist. 🤍
            </p>

            <button
              onClick={close}
              className="mt-1 font-sans text-xs tracking-[0.3em] uppercase text-text border border-text/20 px-10 py-4 hover:bg-text hover:text-background transition-all duration-500 self-start"
            >
              → Reinspazieren
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}
