import Hero from "@/sections/Hero";
import Manifesto from "@/sections/Manifesto";
import Transformation from "@/sections/Transformation";
import Experience from "@/sections/Experience";
import About from "@/sections/About";
import CTA from "@/sections/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Manifesto />
      <Transformation />
      <Experience />
      <About />
      <CTA />
    </main>
  );
}
