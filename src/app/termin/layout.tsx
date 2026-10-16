import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dein Termin",
  description: "Wie ein Termin im Dreadlock Atelier abläuft — entspannte Atmosphäre, persönliche Beratung, handgemachte Dreads im Vogtland.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
