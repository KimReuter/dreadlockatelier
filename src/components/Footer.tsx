"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export default function Footer() {
  return (
    <footer className="bg-dark text-background/40 px-8 md:px-24 py-20 border-t border-background/5">
      <div className="grid md:grid-cols-4 gap-12 mb-20">

        {/* Brand */}
        <div className="md:col-span-1">
          <p className="font-serif text-2xl text-background mb-4">
            {siteConfig.name}
          </p>
          <p className="font-sans text-xs leading-relaxed">
            {siteConfig.tagline}
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-6">
            Navigation
          </p>
          <ul className="flex flex-col gap-3">
            {["Atelier", "Leistungen", "Stories", "Journal", "Kontakt"].map((item) => (
              <li key={item}>
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="font-sans text-sm hover:text-background transition-colors duration-300"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Kontakt */}
        <div>
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-6">
            Kontakt
          </p>
          <ul className="flex flex-col gap-3 font-sans text-sm">
            <li>{siteConfig.address.street}</li>
            <li>{siteConfig.address.city}</li>
            <li className="pt-2">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="hover:text-background transition-colors duration-300"
              >
                {siteConfig.contact.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="hover:text-background transition-colors duration-300"
              >
                {siteConfig.contact.phone}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-background transition-colors duration-300"
              >
                {siteConfig.contact.instagram}
              </a>
            </li>
          </ul>
        </div>

        {/* Öffnungszeiten */}
        <div>
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-sage mb-6">
            Öffnungszeiten
          </p>
          <ul className="flex flex-col gap-3">
            {siteConfig.hours.map((h) => (
              <li key={h.day} className="font-sans text-sm">
                <span className="block text-background/25 text-xs mb-0.5">{h.day}</span>
                {h.time}
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-sans text-xs">
          © {new Date().getFullYear()} {siteConfig.name}. Alle Rechte vorbehalten.
        </p>
        <div className="flex gap-8">
          <Link
            href={siteConfig.legal.impressumUrl}
            className="font-sans text-xs hover:text-background transition-colors duration-300"
          >
            Impressum
          </Link>
          <Link
            href={siteConfig.legal.datenschutzUrl}
            className="font-sans text-xs hover:text-background transition-colors duration-300"
          >
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
}
