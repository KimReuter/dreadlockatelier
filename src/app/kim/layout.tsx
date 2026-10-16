import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kim Reuter",
  description: "Kim Reuter ist Dreadlock Stylistin im Vogtland. Hier erfährst du mehr über sie, ihre Arbeit und ihre Art zu arbeiten.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
