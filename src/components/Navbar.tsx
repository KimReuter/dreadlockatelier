"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { siteConfig } from "@/lib/siteConfig";

const links = [
  { label: "Atelier", href: "/atelier" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Stories", href: "/stories" },
  { label: "Journal", href: "/journal" },
  { label: "Kontakt", href: "/kontakt" },
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
  const hoverColor = scrolled ? "hover:text-sage" : "hover:text-sage";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 md:px-24 py-6 transition-all duration-500 ${
        scrolled ? "bg-background backdrop-blur-md py-4 border-b border-text/5" : ""
      }`}
    >
      {/* Logo links */}
      <Link
        href="/"
        className={`font-serif text-lg tracking-wide transition-colors duration-300 ${textColor}`}
      >
        {siteConfig.name}
      </Link>

      {/* Links rechts */}
      <ul className="flex items-center gap-8">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`group relative font-sans text-xs tracking-widest uppercase transition-colors duration-300 ${textColor} ${hoverColor}`}
            >
              {link.label}
              {/* Animierter Underline */}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-sage transition-all duration-300 group-hover:w-full" />
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/buchen"
            className={`font-sans text-xs tracking-widest uppercase rounded-full px-5 py-2 backdrop-blur-md border transition-all duration-300 ${
              scrolled
                ? "text-text border-text/20 bg-text/5 hover:bg-text/10"
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
