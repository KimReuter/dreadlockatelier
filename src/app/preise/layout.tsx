import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preise",
  description: "Faire, transparente Preise für Dreadlocks im Vogtland. Du zahlst genau die Zeit, die wir brauchen — keine Pakete, keine versteckten Kosten.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
