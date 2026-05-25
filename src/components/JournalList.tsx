"use client";

import { useState } from "react";
import Link from "next/link";
import { Article } from "@/lib/journal";

const CATEGORIES = ["Alle", "Pflege", "FAQ", "Einblicke"];

export default function JournalList({ articles }: { articles: Article[] }) {
  const [active, setActive] = useState("Alle");

  const filtered =
    active === "Alle" ? articles : articles.filter((a) => a.category === active);

  return (
    <>
      {/* Kategorien */}
      <div className="flex gap-6 mb-20">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`font-sans text-xs tracking-widest uppercase transition-colors duration-300 ${
              active === cat
                ? "text-text"
                : "text-text/30 hover:text-sage"
            }`}
          >
            {cat}
            {active === cat && (
              <span className="block h-px bg-text mt-0.5" />
            )}
          </button>
        ))}
      </div>

      {/* Artikel */}
      <div className="flex flex-col divide-y divide-text/10">
        {filtered.map((article, i) => (
          <Link
            key={article.slug}
            href={`/journal/${article.slug}`}
            className="group grid md:grid-cols-12 gap-8 py-12 hover:opacity-70 transition-opacity duration-300"
          >
            <div className="md:col-span-1">
              <span className="font-sans text-xs text-sage/40">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="md:col-span-2">
              <span className="font-sans text-xs tracking-widest uppercase text-sage">
                {article.category}
              </span>
            </div>
            <div className="md:col-span-6">
              <h2 className="font-serif text-2xl text-text leading-snug mb-3 group-hover:text-sage transition-colors duration-300">
                {article.title}
              </h2>
              <p className="font-sans text-sm text-text/40 leading-relaxed">
                {article.excerpt}
              </p>
            </div>
            <div className="md:col-span-3 flex flex-col items-end gap-2">
              <span className="font-sans text-xs text-text/20">
                {new Date(article.date).toLocaleDateString("de-DE", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="font-sans text-xs tracking-widest uppercase text-sage/50">
                {article.readingTime} Min. Lesezeit
              </span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
