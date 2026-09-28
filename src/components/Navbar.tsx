"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Dreads", href: "/dreads" },
  { label: "Galerie", href: "/galerie" },
  { label: "Dein Termin", href: "/termin" },
  { label: "Kim", href: "/kim" },
  { label: "Preise", href: "/preise" },
  { label: "Quiz", href: "/quiz" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const textColor = scrolled ? "text-text" : "text-background";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 md:px-24 py-6 transition-all duration-500 ${
          scrolled ? "bg-background py-4 border-b border-text/5" : ""
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className={`font-serif text-lg tracking-wide transition-colors duration-300 ${menuOpen ? "text-background" : textColor}`}
        >
          dreadlockatelier
        </Link>

        {/* Desktop Links */}
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
              href="/kontakt"
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

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className={`md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 z-50 transition-colors duration-300 ${menuOpen ? "text-background" : textColor}`}
          aria-label="Menü"
        >
          <span
            className={`block w-6 h-px bg-current transition-all duration-300 origin-center ${
              menuOpen ? "rotate-45 translate-y-[5px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-current transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-current transition-all duration-300 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-[5px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-dark flex flex-col justify-center px-10"
          >
            <ul className="flex flex-col gap-8">
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 + i * 0.07, ease: "easeOut" }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-serif text-4xl text-background/80 hover:text-background transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.05 + links.length * 0.07, ease: "easeOut" }}
              >
                <Link
                  href="/kontakt"
                  onClick={() => setMenuOpen(false)}
                  className="font-sans text-xs tracking-[0.3em] uppercase text-background border border-background/20 px-8 py-4 inline-block hover:bg-background hover:text-dark transition-all duration-500 mt-4"
                >
                  Beratung anfragen →
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
