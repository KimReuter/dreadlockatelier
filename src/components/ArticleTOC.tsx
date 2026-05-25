"use client";

import { useEffect, useState } from "react";

interface Heading {
  number: string;
  text: string;
  id: string;
}

interface ArticleTOCProps {
  headings: Heading[];
  readingTime: number;
  category: string;
  date: string;
}

export default function ArticleTOC({
  headings,
  readingTime,
  category,
  date,
}: ArticleTOCProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Navbar ist ca. 80px hoch — rootMargin schließt diesen Bereich oben aus
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-96px 0px -80% 0px",
        threshold: 0,
      }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  return (
    <div className="sticky top-32 flex flex-col gap-10">

      {/* Meta */}
      <div className="flex flex-col gap-2">
        <span className="font-sans text-xs tracking-widest uppercase text-sage">
          {category}
        </span>
        <span className="font-sans text-xs text-text/20">{date}</span>
      </div>

      {/* TOC */}
      <div>
        <p className="font-sans text-xs tracking-widest uppercase text-text/20 mb-5">
          Inhalt
        </p>
        <ul className="flex flex-col gap-4">
          {headings.map((h) => (
            <li key={h.id}>
              <a href={`#${h.id}`} className="flex gap-3 items-start group">
                <span
                  className={`font-sans text-xs shrink-0 mt-0.5 transition-colors duration-300 ${
                    activeId === h.id ? "text-sage" : "text-sage/30"
                  }`}
                >
                  {h.number}
                </span>
                <span
                  className={`font-sans text-xs leading-snug transition-colors duration-300 ${
                    activeId === h.id
                      ? "text-text"
                      : "text-text/25 group-hover:text-text/50"
                  }`}
                >
                  {h.text}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Lesezeit */}
      <div className="pt-6 border-t border-text/10">
        <span className="font-sans text-xs text-text/20">
          {readingTime} Min. Lesezeit
        </span>
      </div>

    </div>
  );
}
