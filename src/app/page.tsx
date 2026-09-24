import ComingSoonPopup from "@/components/ComingSoonPopup";
import Hero from "@/sections/Hero";
import Intro from "@/sections/Intro";
import Atmosphere from "@/sections/Atmosphere";
import KimSection from "@/sections/KimSection";
import Doubts from "@/sections/Doubts";
import DreadsForYou from "@/sections/DreadsForYou";
import DreadVision from "@/sections/DreadVision";
import Testimonials from "@/sections/Testimonials";
import AppointmentTimeline from "@/sections/AppointmentTimeline";
import MeTime from "@/sections/MeTime";
import SessionDuration from "@/sections/SessionDuration";
import Preise from "@/sections/Preise";
import Beratung from "@/sections/Beratung";
import Closing from "@/sections/Closing";

export default function Home() {
  return (
    <main>
      <ComingSoonPopup />
      <Hero />
      <Intro />
      <Atmosphere />
      <KimSection />
      <Doubts />
      <DreadsForYou />
      <DreadVision />
      <Testimonials />
      <AppointmentTimeline />
      <MeTime />
      <SessionDuration />
      <Preise />
      <Beratung />
      <Closing />
    </main>
  );
}
