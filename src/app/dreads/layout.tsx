import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Was sind Dreads?",
  description: "Alles über Dreadlocks — wie sie entstehen, was sie bedeuten, wie lange sie halten und was du vor deinem ersten Termin wissen solltest.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
