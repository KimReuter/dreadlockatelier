"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useRef } from "react";

const fade = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

// --- Types ---
type Answers = {
  motivation: string[];
  length: string;
  texture: string;
  chemical: string;
  style: string;
  concerns: string[];
};

const emptyAnswers: Answers = {
  motivation: [],
  length: "",
  texture: "",
  chemical: "",
  style: "",
  concerns: [],
};

// --- Step data ---
const motivationOptions = [
  { id: "me", label: "Ich möchte Haare, die endlich wirklich nach mir aussehen." },
  { id: "look", label: "Ich liebe einfach den Look." },
  { id: "time", label: "Ich möchte weniger Zeit mit meinen Haaren verbringen." },
  { id: "change", label: "Ich möchte etwas verändern — ich weiß nur noch nicht was." },
  { id: "existing", label: "Ich trage bereits Dreads und möchte sie verändern oder ergänzen." },
  { id: "unsure", label: "Ehrlich gesagt weiß ich es noch nicht genau. 😄" },
];

const lengthOptions = [
  { id: "under10", label: "Unter 10 cm", note: "sehr kurz" },
  { id: "10to20", label: "10–20 cm", note: "kurz" },
  { id: "20to40", label: "20–40 cm", note: "schulterlang" },
  { id: "40to60", label: "40–60 cm", note: "lang" },
  { id: "over60", label: "Länger als 60 cm", note: "" },
  { id: "noIdea", label: "Keine Ahnung — deshalb bin ich hier. 😄", note: "" },
];

const textureOptions = [
  { id: "fine", label: "Sehr fein und glatt" },
  { id: "normal", label: "Normal — weder zu fein noch zu dick" },
  { id: "thick", label: "Dick oder voluminös" },
  { id: "curly", label: "Lockig oder kraus" },
];

const chemicalOptions = [
  { id: "natural", label: "Nein, komplett naturbelassen" },
  { id: "colored", label: "Leicht gefärbt" },
  { id: "bleached", label: "Stark gebleicht oder aufgehellt" },
];

const styleOptions = [
  { id: "elegant", label: "Fein & Elegant", img: "/quiz/elegant.jpg" },
  { id: "organic", label: "Natürlich & Organisch", img: "/quiz/organisch.jpg" },
  { id: "bold", label: "Statement & Kräftig", img: "/quiz/kraeftig.jpg" },
  { id: "wild", label: "Wild & Individuell", img: "/quiz/wild.jpg" },
  { id: "unknown", label: "Ich weiß es noch nicht", img: null },
];

const concernOptions = [
  { id: "looks", label: "Ich habe Angst, dass es mir nicht steht." },
  { id: "hair", label: "Ich mache mir Sorgen um meine Haare." },
  { id: "everyday", label: "Ich weiß nicht, ob ich sie im Alltag tragen kann." },
  { id: "regret", label: "Ich habe Angst, es irgendwann zu bereuen." },
  { id: "suitable", label: "Ich weiß nicht, ob meine Haare überhaupt geeignet sind." },
  { id: "care", label: "Ich habe Bedenken wegen der Pflege." },
  { id: "none", label: "Eigentlich hält mich nichts zurück — ich will einfach. 🔥" },
];

// --- Result generation ---
function buildProfile(a: Answers) {
  const lines: string[] = [];

  // Length
  const lengthMap: Record<string, string> = {
    under10: "sehr kurze Haare (unter 10 cm)",
    "10to20": "kurze Haare (10–20 cm)",
    "20to40": "schulterlange Haare (20–40 cm)",
    "40to60": "lange Haare (40–60 cm)",
    over60: "sehr lange Haare (über 60 cm)",
    noIdea: "Haarlänge noch unklar",
  };
  if (a.length) lines.push(lengthMap[a.length] || "");

  // Texture
  const textureMap: Record<string, string> = {
    fine: "sehr feines, glattes Haar",
    normal: "normale Haarstruktur",
    thick: "dickes, voluminöses Haar",
    curly: "lockiges oder krauses Haar",
  };
  if (a.texture) lines.push(textureMap[a.texture] || "");

  // Chemical
  const chemMap: Record<string, string> = {
    natural: "naturbelassen",
    colored: "leicht gefärbt",
    bleached: "stark gebleicht oder aufgehellt",
  };
  if (a.chemical) lines.push(chemMap[a.chemical] || "");

  // Style
  const styleMap: Record<string, string> = {
    elegant: "Wunschrichtung: Fein & Elegant",
    organic: "Wunschrichtung: Natürlich & Organisch",
    bold: "Wunschrichtung: Statement & Kräftig",
    wild: "Wunschrichtung: Wild & Individuell",
    unknown: "Stil noch offen",
  };
  if (a.style) lines.push(styleMap[a.style] || "");

  // Concerns
  if (a.concerns.length > 0 && !a.concerns.includes("none")) {
    const concernMap: Record<string, string> = {
      looks: "Sorge: Steht es mir?",
      hair: "Sorge: Haargesundheit",
      everyday: "Sorge: Alltagstauglichkeit",
      regret: "Sorge: Langfristige Entscheidung",
      suitable: "Sorge: Eignung der Haare",
      care: "Sorge: Pflegeaufwand",
    };
    a.concerns.forEach((c) => {
      if (concernMap[c]) lines.push(concernMap[c]);
    });
  }

  return lines.filter(Boolean);
}

function buildFocus(a: Answers): string {
  const parts: string[] = [];

  if (a.texture === "fine") parts.push("feines Haar braucht die richtige Einteilung — sonst wirken Dreads schnell zu dünn oder zu wenige");
  if (a.texture === "thick") parts.push("bei dickem Haar entscheiden wir gemeinsam, wie viel Volumen du am Ende möchtest");
  if (a.texture === "curly") parts.push("lockiges Haar filzt wunderbar — das gibt uns viel Spielraum bei der Methode");
  if (a.chemical === "bleached") parts.push("da deine Haare aufgehellt sind, schaue ich besonders auf die Belastbarkeit der einzelnen Strähnen");
  if (a.length === "under10") parts.push("bei sehr kurzen Haaren besprechen wir zuerst, ob Extensions eine Option wären");
  if (a.concerns.includes("everyday")) parts.push("da Alltagstauglichkeit wichtig für dich ist, schauen wir auf Styling-Möglichkeiten und Tragekomfort");
  if (a.concerns.includes("hair")) parts.push("Haargesundheit hat bei mir immer Priorität — das klären wir als erstes");
  if (a.style === "elegant") parts.push("für einen eleganten Look arbeiten wir mit feinerer Einteilung und sauberen Ansätzen");
  if (a.style === "wild") parts.push("für einen individuellen Look lassen wir bewusst Spielraum — jede Dread darf Charakter haben");

  if (parts.length === 0) return "Einteilung, Dicke und die Frage, was deine Haare wirklich hergeben — das klären wir gemeinsam.";
  return parts.join(". ") + ".";
}

function isEdgeCase(a: Answers): boolean {
  return a.length === "under10" || a.chemical === "bleached";
}

// --- Sub-components ---
function ProgressBar({ step, total }: { step: number; total: number }) {
  return (
    <div className="w-full h-px bg-background/10 mb-16">
      <motion.div
        className="h-px bg-sage"
        initial={{ width: 0 }}
        animate={{ width: `${((step + 1) / total) * 100}%` }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
    </div>
  );
}

function MultiSelect({
  options,
  selected,
  onChange,
}: {
  options: { id: string; label: string }[];
  selected: string[];
  onChange: (val: string[]) => void;
}) {
  const toggle = (id: string) => {
    if (id === "none" || id === "unsure") {
      onChange(selected.includes(id) ? [] : [id]);
      return;
    }
    if (selected.includes(id)) {
      onChange(selected.filter((s) => s !== id));
    } else {
      onChange([...selected.filter((s) => s !== "none" && s !== "unsure"), id]);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      {options.map((opt) => (
        <button
          key={opt.id}
          onClick={() => toggle(opt.id)}
          className={`text-left px-6 py-4 border transition-all duration-300 font-sans text-sm leading-snug ${
            selected.includes(opt.id)
              ? "border-background/60 text-background"
              : "border-background/15 text-background/50 hover:border-background/30 hover:text-background/80"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

function SingleSelect({
  options,
  selected,
  onChange,
}: {
  options: { id: string; label: string; note?: string }[];
  selected: string;
  onChange: (val: string) => void;
}) {
  return (
    <div className="flex flex-col gap-3">
      {options.map((opt) => (
        <button
          key={opt.id}
          onClick={() => onChange(opt.id)}
          className={`text-left px-6 py-4 border transition-all duration-300 font-sans text-sm leading-snug flex items-center justify-between ${
            selected === opt.id
              ? "border-background/60 text-background"
              : "border-background/15 text-background/50 hover:border-background/30 hover:text-background/80"
          }`}
        >
          <span>{opt.label}</span>
          {opt.note && (
            <span className="text-xs text-background/30 ml-4 flex-shrink-0">{opt.note}</span>
          )}
        </button>
      ))}
    </div>
  );
}

function StyleSelect({
  options,
  selected,
  onChange,
}: {
  options: { id: string; label: string; img: string | null }[];
  selected: string;
  onChange: (val: string) => void;
}) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {options.map((opt) => (
        <button
          key={opt.id}
          onClick={() => onChange(opt.id)}
          className={`relative text-left border transition-all duration-300 overflow-hidden ${
            selected === opt.id ? "border-background/70" : "border-background/10 hover:border-background/30"
          } ${!opt.img ? "flex items-center justify-center py-10 col-span-2" : ""}`}
        >
          {opt.img ? (
            <>
              <div className="relative aspect-[3/4] w-full">
                <Image src={opt.img} alt={opt.label} fill className="object-cover object-top" sizes="(max-width: 768px) 50vw, 300px" />
                <div className={`absolute inset-0 transition-all duration-300 ${selected === opt.id ? "bg-dark/20" : "bg-dark/50"}`} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className={`font-sans text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${selected === opt.id ? "text-background" : "text-background/60"}`}>
                  {opt.label}
                </p>
              </div>
            </>
          ) : (
            <p className={`font-sans text-xs tracking-[0.2em] uppercase px-6 transition-colors duration-300 ${selected === opt.id ? "text-background" : "text-background/50"}`}>
              {opt.label}
            </p>
          )}
        </button>
      ))}
    </div>
  );
}

// --- Main component ---
export default function QuizPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>(emptyAnswers);
  const [done, setDone] = useState(false);
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [photos, setPhotos] = useState<File[]>([]);
  const [sendStatus, setSendStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const fileRef = useRef<HTMLInputElement>(null);

  const totalSteps = 4;

  const canProceed = () => {
    if (step === 0) return answers.motivation.length > 0;
    if (step === 1) return !!answers.length && !!answers.texture && !!answers.chemical;
    if (step === 2) return !!answers.style;
    if (step === 3) return answers.concerns.length > 0;
    return false;
  };

  const profile = buildProfile(answers);
  const focus = buildFocus(answers);
  const edgeCase = isEdgeCase(answers);

  const profileText = `Dread-Profil:\n${profile.join("\n")}\n\nBedenken: ${
    answers.concerns.includes("none")
      ? "Keine — ich will einfach loslegen!"
      : answers.concerns.map((c) => concernOptions.find((o) => o.id === c)?.label).filter(Boolean).join(", ")
  }`;

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    setSendStatus("sending");
    const fd = new FormData();
    fd.append("name", contactName);
    fd.append("email", contactEmail);
    fd.append("profile", profileText);
    photos.forEach((f) => fd.append("photos", f));
    try {
      const res = await fetch("/api/quiz", { method: "POST", body: fd });
      if (res.ok) {
        setSendStatus("success");
      } else {
        setSendStatus("error");
      }
    } catch {
      setSendStatus("error");
    }
  };

  return (
    <main>
      {!done ? (
        <section className="bg-dark min-h-screen px-8 md:px-24 pt-40 pb-24">
          <div className="max-w-xl mx-auto">
            <ProgressBar step={step} total={totalSteps} />

            <AnimatePresence mode="wait">
              {step === 0 && (
                <motion.div key="step0" {...fade}>
                  <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-8">
                    01 — Was möchtest du?
                  </p>
                  <h2 className="font-serif text-3xl md:text-4xl text-background leading-snug mb-4">
                    Was zieht dich gerade zu Dreads?
                  </h2>
                  <p className="font-sans text-sm text-background/40 leading-loose mb-10">
                    Du kannst mehreres auswählen.
                  </p>
                  <MultiSelect
                    options={motivationOptions}
                    selected={answers.motivation}
                    onChange={(val) => setAnswers((a) => ({ ...a, motivation: val }))}
                  />
                </motion.div>
              )}

              {step === 1 && (
                <motion.div key="step1" {...fade} className="flex flex-col gap-12">
                  <div>
                    <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-8">
                      02 — Deine Haare
                    </p>
                    <h2 className="font-serif text-3xl md:text-4xl text-background leading-snug mb-10">
                      Wie lang sind deine Haare ungefähr?
                    </h2>
                    <SingleSelect
                      options={lengthOptions}
                      selected={answers.length}
                      onChange={(val) => setAnswers((a) => ({ ...a, length: val }))}
                    />
                  </div>

                  <div>
                    <h2 className="font-serif text-2xl md:text-3xl text-background leading-snug mb-8">
                      Wie würdest du deine Haarstruktur beschreiben?
                    </h2>
                    <SingleSelect
                      options={textureOptions}
                      selected={answers.texture}
                      onChange={(val) => setAnswers((a) => ({ ...a, texture: val }))}
                    />
                  </div>

                  <div>
                    <h2 className="font-serif text-2xl md:text-3xl text-background leading-snug mb-8">
                      Sind deine Haare chemisch behandelt?
                    </h2>
                    <SingleSelect
                      options={chemicalOptions}
                      selected={answers.chemical}
                      onChange={(val) => setAnswers((a) => ({ ...a, chemical: val }))}
                    />
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="step2" {...fade}>
                  <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-8">
                    03 — Dein Look
                  </p>
                  <h2 className="font-serif text-3xl md:text-4xl text-background leading-snug mb-4">
                    Welche Richtung fühlt sich nach dir an?
                  </h2>
                  <p className="font-sans text-sm text-background/40 leading-loose mb-10">
                    Kein Fachbegriff, kein Druck — einfach das, was dich anzieht.
                  </p>
                  <StyleSelect
                    options={styleOptions}
                    selected={answers.style}
                    onChange={(val) => setAnswers((a) => ({ ...a, style: val }))}
                  />
                </motion.div>
              )}

              {step === 3 && (
                <motion.div key="step3" {...fade}>
                  <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-8">
                    04 — Deine Bedenken
                  </p>
                  <h2 className="font-serif text-3xl md:text-4xl text-background leading-snug mb-4">
                    Was hält dich noch zurück?
                  </h2>
                  <p className="font-sans text-sm text-background/40 leading-loose mb-10">
                    Ehrliche Antwort bitte — das hilft mir mehr als eine höfliche.
                  </p>
                  <MultiSelect
                    options={concernOptions}
                    selected={answers.concerns}
                    onChange={(val) => setAnswers((a) => ({ ...a, concerns: val }))}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex items-center justify-between mt-12">
              {step > 0 ? (
                <button
                  onClick={() => setStep((s) => s - 1)}
                  className="font-sans text-xs tracking-[0.3em] uppercase text-background/30 hover:text-background/60 transition-colors duration-300"
                >
                  ← Zurück
                </button>
              ) : <div />}

              <button
                onClick={() => {
                  if (step < totalSteps - 1) {
                    setStep((s) => s + 1);
                  } else {
                    setDone(true);
                  }
                }}
                disabled={!canProceed()}
                className="font-sans text-xs tracking-[0.3em] uppercase text-background border border-background/20 px-10 py-5 hover:bg-background hover:text-dark transition-all duration-500 disabled:opacity-20 disabled:cursor-not-allowed"
              >
                {step < totalSteps - 1 ? "Weiter →" : "Mein Ergebnis →"}
              </button>
            </div>
          </div>
        </section>
      ) : (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Result Hero */}
            <section className="bg-dark px-8 md:px-24 pt-48 pb-24">
              <div className="max-w-2xl">
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-8"
                >
                  Dein Dread-Profil
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="font-serif text-5xl md:text-6xl text-background leading-tight mb-8"
                >
                  {edgeCase
                    ? "Lass uns erst reden."
                    : answers.concerns.includes("none")
                    ? "Du bist bereit."
                    : "Ich hab ein Bild von dir."}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="font-sans text-sm text-background/50 leading-loose max-w-lg"
                >
                  {edgeCase
                    ? "Deine Ausgangssituation hat ein paar Punkte, über die ich gerne mit dir sprechen möchte — bevor wir irgendetwas planen. Das ist keine schlechte Nachricht. Ich möchte einfach sichergehen, dass wir das Richtige für dich finden."
                    : answers.concerns.includes("none")
                    ? "Deine Antworten klingen gut. Auf Basis von dem, was du mir hier erzählt hast, haben wir eine solide Grundlage für eine echte Beratung."
                    : "Auf Basis von dem, was du mir hier erzählt hast, habe ich schon ein ziemlich gutes Bild — bevor wir überhaupt gesprochen haben."}
                </motion.p>
              </div>
            </section>

            {/* Profile Details */}
            <section className="bg-background px-8 md:px-24 py-24">
              <div className="max-w-2xl flex flex-col gap-16">

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="flex flex-col gap-6"
                >
                  <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage">Was wir bisher wissen</p>
                  <ul className="flex flex-col gap-3">
                    {profile.map((line, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="w-1 h-1 rounded-full bg-sage mt-2 flex-shrink-0" />
                        <p className="font-sans text-sm text-text/70 leading-relaxed">{line}</p>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex flex-col gap-4 pl-6 border-l-2 border-sage/30"
                >
                  <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage">Was ich bei deiner Beratung besonders im Blick hätte</p>
                  <p className="font-sans text-sm text-text/70 leading-loose">{focus}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="flex flex-col gap-4"
                >
                  <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage">Was ich dir per Quiz nicht sagen kann</p>
                  <p className="font-serif text-xl md:text-2xl text-text leading-snug">
                    Was deine Haare wirklich hergeben. Dafür brauche ich ein Foto von dir.
                  </p>
                </motion.div>

              </div>
            </section>

            {/* CTA */}
            <section className="bg-dark px-8 md:px-24 py-24">
              <div className="max-w-2xl flex flex-col gap-10">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="flex flex-col gap-4"
                >
                  <p className="font-serif text-3xl md:text-4xl text-background leading-snug">
                    Schick mir drei Fotos von deinen Haaren —
                  </p>
                  <p className="font-serif text-3xl md:text-4xl text-background/40 leading-snug">
                    und ich sage dir, was wirklich möglich ist.
                  </p>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="font-sans text-sm text-background/40 leading-loose"
                >
                  Front, Seite, Hinterkopf — das reicht. Dein Dread-Profil schicke ich direkt mit.
                </motion.p>

                {sendStatus === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col gap-4 py-8 border-l-2 border-sage/40 pl-6"
                  >
                    <p className="font-serif text-2xl text-background">Danke — ich melde mich bald.</p>
                    <p className="font-sans text-sm text-background/40 leading-loose">
                      Deine Fotos und dein Dread-Profil sind angekommen. Ich schaue mir alles in Ruhe an.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    onSubmit={handleSend}
                    className="flex flex-col gap-8"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="font-sans text-xs tracking-[0.25em] uppercase text-sage mb-2 block">Name *</label>
                        <input
                          type="text"
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          placeholder="Dein Name"
                          required
                          className="w-full bg-transparent border-b border-background/20 py-4 font-sans text-sm text-background placeholder:text-background/25 focus:outline-none focus:border-background/60 transition-colors duration-300"
                        />
                      </div>
                      <div>
                        <label className="font-sans text-xs tracking-[0.25em] uppercase text-sage mb-2 block">E-Mail *</label>
                        <input
                          type="email"
                          value={contactEmail}
                          onChange={(e) => setContactEmail(e.target.value)}
                          placeholder="deine@email.de"
                          required
                          className="w-full bg-transparent border-b border-background/20 py-4 font-sans text-sm text-background placeholder:text-background/25 focus:outline-none focus:border-background/60 transition-colors duration-300"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="font-sans text-xs tracking-[0.25em] uppercase text-sage mb-2 block">
                        Deine Fotos <span className="text-background/30 normal-case tracking-normal">— bis zu 5, Front / Seite / Hinterkopf</span>
                      </label>
                      <input
                        ref={fileRef}
                        type="file"
                        accept="image/*"
                        multiple
                        hidden
                        onChange={(e) => {
                          const newFiles = Array.from(e.target.files || []);
                          setPhotos((prev) => {
                            const combined = [...prev, ...newFiles];
                            const unique = Array.from(new Map(combined.map((f) => [f.name + f.size, f])).values());
                            return unique.slice(0, 5);
                          });
                          if (fileRef.current) fileRef.current.value = "";
                        }}
                      />
                      {photos.length < 5 && (
                        <button
                          type="button"
                          onClick={() => fileRef.current?.click()}
                          className="w-full border border-dashed border-background/20 py-8 text-background/40 hover:border-background/40 hover:text-background/60 transition-all duration-300 font-sans text-xs tracking-[0.2em] uppercase"
                        >
                          {photos.length > 0 ? "Weitere Fotos hinzufügen →" : "Fotos auswählen →"}
                        </button>
                      )}
                      {photos.length > 0 && (
                        <div className="flex flex-col gap-2 mt-3">
                          {photos.map((f, i) => (
                            <div key={i} className="flex items-center justify-between gap-4">
                              <span className="font-sans text-xs text-background/40 truncate">{f.name}</span>
                              <button
                                type="button"
                                onClick={() => setPhotos((prev) => prev.filter((_, idx) => idx !== i))}
                                className="font-sans text-xs text-background/25 hover:text-background/60 transition-colors flex-shrink-0"
                              >
                                entfernen
                              </button>
                            </div>
                          ))}
                          <p className="font-sans text-xs text-background/25 mt-1">
                            {photos.length}/5 Fotos
                          </p>
                        </div>
                      )}
                    </div>

                    {sendStatus === "error" && (
                      <p className="font-sans text-xs text-red-400">
                        Etwas ist schiefgelaufen. Versuch es nochmal oder schreib mir direkt per E-Mail.
                      </p>
                    )}

                    <div className="flex flex-col sm:flex-row gap-4 items-start">
                      <button
                        type="submit"
                        disabled={sendStatus === "sending"}
                        className="font-sans text-xs tracking-[0.3em] uppercase text-background border border-background/20 px-10 py-5 hover:bg-background hover:text-dark transition-all duration-500 disabled:opacity-30 disabled:cursor-not-allowed"
                      >
                        {sendStatus === "sending" ? "Wird gesendet..." : "Beratung anfragen →"}
                      </button>
                      <button
                        type="button"
                        onClick={() => { setDone(false); setStep(0); setAnswers(emptyAnswers); setSendStatus("idle"); }}
                        className="font-sans text-xs tracking-[0.3em] uppercase text-background/25 hover:text-background/50 transition-colors duration-300 py-5"
                      >
                        Quiz wiederholen
                      </button>
                    </div>
                  </motion.form>
                )}
              </div>
            </section>
          </motion.div>
        </AnimatePresence>
      )}
    </main>
  );
}
