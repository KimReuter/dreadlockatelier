import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Häufige Fragen rund um Dreadlocks — alles was du vor deinem ersten Termin wissen solltest.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
