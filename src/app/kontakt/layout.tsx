import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Schreib Kim eine Nachricht — für Terminanfragen, Fragen zu Dreads oder einfach um Hallo zu sagen. Dreadlock Atelier im Vogtland.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
