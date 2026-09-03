"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const links = [
  { label: "Dreads", href: "/dreads" },
  { label: "Galerie", href: "/galerie" },
  { label: "Dein Termin", href: "/termin" },
  { label: "Kim", href: "/kim" },
  { label: "Preise", href: "/preise" },
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

  const textColor = scrolled ? "text-text" : "text-background";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 md:px-24 py-6 transition-all duration-500 ${
        scrolled ? "bg-background py-4 border-b border-text/5" : ""
      }`}
    >
      {/* Logo */}
      <Link
        href="/"
        className={`font-serif text-lg tracking-wide transition-colors duration-300 ${textColor}`}
      >
        dreadlockatelier
      </Link>

      {/* Links */}
      <ul className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`group relative font-sans text-xs tracking-widest uppercase transition-colors duration-300 ${textColor} hover:text-sage`}
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-sage transition-all duration-300 group-hover:w-full" />
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/termin"
            className={`font-sans text-xs tracking-widest uppercase rounded-full px-5 py-2 border transition-all duration-300 ${
              scrolled
                ? "text-text border-text/20 hover:bg-text/5"
                : "text-background border-background/20 bg-white/10 hover:bg-white/20"
            }`}
          >
            Beratung anfragen
          </Link>
        </li>
      </ul>
    </nav>
  );
}
