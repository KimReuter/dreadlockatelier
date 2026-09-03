import Hero from "@/sections/Hero";
import Intro from "@/sections/Intro";
import Atmosphere from "@/sections/Atmosphere";
import KimSection from "@/sections/KimSection";
import Doubts from "@/sections/Doubts";
import DreadsForYou from "@/sections/DreadsForYou";
import DreadGallery from "@/sections/DreadGallery";
import DreadVision from "@/sections/DreadVision";
import Testimonials from "@/sections/Testimonials";
import AppointmentTimeline from "@/sections/AppointmentTimeline";
import MeTime from "@/sections/MeTime";
import SessionDuration from "@/sections/SessionDuration";
import Preise from "@/sections/Preise";
import Beratung from "@/sections/Beratung";

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <Atmosphere />
      <KimSection />
      <Doubts />
      <DreadsForYou />
      <DreadGallery />
      <DreadVision />
      <Testimonials />
      <AppointmentTimeline />
      <MeTime />
      <SessionDuration />
      <Preise />
      <Beratung />
    </main>
  );
}
