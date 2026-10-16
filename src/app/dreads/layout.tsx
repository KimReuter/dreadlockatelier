import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dreads machen lassen",
  description: "Alles über Dreadlocks — wie sie entstehen, welche Typen es gibt und was du wissen musst. Professionelle Dreads im Vogtland.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
