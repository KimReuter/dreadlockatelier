import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dread-Quiz",
  description: "Beantworte ein paar Fragen und finde heraus ob Dreads zu dir passen. Kim meldet sich mit einer persönlichen Einschätzung.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
