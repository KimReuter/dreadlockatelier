import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galerie",
  description: "Echte Dreads, echte Arbeit — alle Bilder zeigen handgemachte Dreadlocks aus dem Dreadlock Atelier von Kim Reuter im Vogtland.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
