"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const links = [
  { label: "Start", href: "/" },
  { label: "Atelier", href: "/atelier" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Stories", href: "/stories" },
  { label: "Journal", href: "/journal" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 flex items-center justify-center px-8 py-6 transition-all duration-500 ${
      scrolled ? "bg-background backdrop-blur-md" : ""
    }`}>
      <ul className="flex items-center gap-8">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`font-sans text-sm tracking-widest uppercase transition-colors duration-300 ${
                scrolled ? "text-text hover:text-sage" : "text-background hover:text-sage"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/buchen"
            className={`font-sans text-sm tracking-widest uppercase rounded-full px-5 py-2 backdrop-blur-md border transition-all duration-300 ${
              scrolled
                ? "text-text border-text/20 bg-text/10 hover:bg-text/20"
                : "text-background border-background/20 bg-white/10 hover:bg-white/20"
            }`}
          >
            Buchen
          </Link>
        </li>
      </ul>
    </nav>
  );
}