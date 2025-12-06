import About from "@/components/About";
import Events from "@/components/Events";
import HeroCarousel from "@/components/HeroCarousel";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <HeroCarousel />
      <About />
      <Events />
    </main>
  );
}
