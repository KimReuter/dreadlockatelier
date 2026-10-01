import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/lib/lenis";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollThread from "@/components/ScrollThread";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dreadlock Atelier – Handgemachte Dreadlocks im Vogtland",
    template: "%s | Dreadlock Atelier",
  },
  description: "Handgemachte Dreadlocks von Kim Reuter im Vogtland. Individuelle Beratung, persönliche Atmosphäre, echte Handarbeit. Jetzt Termin anfragen.",
  keywords: ["Dreadlocks", "Dreads", "Dreadlock Atelier", "Vogtland", "handgemacht", "Kim Reuter", "Dreadlocks machen lassen"],
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Dreadlock Atelier",
    title: "Dreadlock Atelier – Handgemachte Dreadlocks im Vogtland",
    description: "Handgemachte Dreadlocks von Kim Reuter im Vogtland. Individuelle Beratung, persönliche Atmosphäre, echte Handarbeit.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${playfair.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <SmoothScroll />
        {children}
        <Footer />
      </body>
    </html>
  );
}