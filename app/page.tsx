import About from "@/components/About";
import EventAnnouncementPopup from "@/components/EventAnnouncementPopup";
import Events from "@/components/Events";
import HeroCarousel from "@/components/HeroCarousel";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <EventAnnouncementPopup />
      <Hero />
      <HeroCarousel />
      <About />
      <Events />
    </main>
  );
}
