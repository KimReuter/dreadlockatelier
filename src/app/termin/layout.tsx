import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dein Termin",
  description: "So läuft dein Termin im Dreadlock Atelier ab — vom Beratungsgespräch bis zur fertigen Mähne. Alles was du wissen musst, bevor du kommst.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
