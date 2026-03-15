"use client";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import DotGrid from "./animations-ui/DotGrid";

// Custom BlurText component
const BlurText = ({ text, className, delay = 0 }: { text: string; className: string; delay?: number }) => {
  return (
    <motion.div
      initial={{ filter: "blur(10px)", opacity: 0 }}
      animate={{ filter: "blur(0px)", opacity: 1 }}
      transition={{ duration: 1, delay: delay / 1000 }}
      className={className}
    >
      {text}
    </motion.div>
  );
};

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* DotGrid Background with Theme Colors */}
      <div className="absolute inset-0 w-full h-full">
        <DotGrid
          dotSize={6}
          gap={20}
          baseColor="#291E37"
          activeColor="#8B5CF6"
          proximity={150}
          speedTrigger={80}
          shockRadius={250}
          shockStrength={5}
          maxSpeed={4000}
          resistance={750}
          returnDuration={1.5}
          className="w-full h-full"
          style={{ background: 'transparent' }}
        />
      </div>
      
      {/* Gradient fade overlay for smooth transition and better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black z-10"></div>
      
      {/* Strong bottom fade out effect - much more visible */}
      <div className="absolute bottom-0 left-0 right-0 h-30 bg-gradient-to-t from-black via-black/60 to-transparent z-15"></div>
      
      {/* Additional subtle fade from sides */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 z-12"></div>

      {/* Main content */}
      <div className="relative z-20 text-center px-6 max-w-6xl mx-auto pt-16">
        <div className="space-y-8">
          {/* Main title with blur text effect */}
          <div className="space-y-4">
            <BlurText
              text="AWS Cloud Club"
              className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-purple-400 via-white to-purple-300 bg-clip-text text-transparent drop-shadow-2xl"
              delay={100}
            />
            <BlurText
              text="CHARUSAT"
              className="text-3xl md:text-5xl lg:text-6xl font-light bg-gradient-to-r from-purple-300 via-white to-purple-400 bg-clip-text text-transparent drop-shadow-xl"
              delay={200}
            />
          </div>

          {/* Subtitle */}
          <BlurText
            text="Empowering the next generation of cloud developers"
            className="text-lg md:text-xl text-white max-w-2xl mx-auto leading-relaxed drop-shadow-lg"
            delay={300}
          />

          {/* Description */}
          <BlurText
            text="Join our community of passionate developers and cloud enthusiasts. Learn, grow, and build amazing things together."
            className="text-base md:text-lg text-purple-100 max-w-3xl mx-auto leading-relaxed drop-shadow-md"
            delay={400}
          />

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <Button
              asChild
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-300 border border-purple-500"
            >
                <Link href="/contact-us">Join Our Club</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 bg-transparent backdrop-blur-sm"
            >
              <Link href="/about-us">Learn More</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
