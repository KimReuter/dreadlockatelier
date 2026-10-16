import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Schreib Kim eine Nachricht — erzähl von deinen Haaren und was du dir vorstellst. Kostenlose Erstberatung.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
