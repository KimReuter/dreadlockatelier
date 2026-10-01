import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Häufig gestellte Fragen rund um Dreadlocks — Kosten, Dauer, Pflege, Extensions und alles was du vor deinem Termin wissen möchtest.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
