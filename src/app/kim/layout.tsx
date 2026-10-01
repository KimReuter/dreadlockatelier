import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über Kim",
  description: "Kim Reuter — Dreadlock-Stylistin aus dem Vogtland. Handwerk, Leidenschaft und der Glaube, dass jede Mähne etwas erzählt.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
