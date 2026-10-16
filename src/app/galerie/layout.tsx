import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galerie",
  description: "Echte Dreads, echte Menschen — Bilder aus dem Dreadlock Atelier im Vogtland.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
