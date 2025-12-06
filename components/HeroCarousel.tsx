"use client";
import Image from "next/image";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const data = [
  {
    image: "/images/hero/AWS_team_2025.jpg",
    title: "AWS Cloud Club Charusat",
    description: "Together as a team, AWS Cloud Club CHARUSAT provides a platform for intellectuals to learn AWS cloud fundamentals. We bring developers under one roof to create an inspiring community focused on symbiotic learning and teaching.",
  },
  {
    image: "/images/hero/hero-2.jpeg",
    title: "CloudUP on Her Celebrating Women's Day",
    description:
      "Engaging sessions with leading women in tech sharing insights on cloud innovations, career paths, and overcoming challenges. Workshops designed to equip you with practical skills in AWS technologies.",
  },
  {
    image: "/images/hero/hero-1.jpg",
    title: "Infrastructure Camp Workshop",
    description:
      "Embark on a transformative journey into the cloud with our hands-on AWS Infrastructure workshop! Perfect for both beginners and those with some cloud experience, this workshop is your gateway to mastering AWS services and deploying them with confidence.",
  },
];

export default function HeroCarousel() {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <section className="relative bg-black py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 via-white to-purple-300 bg-clip-text text-transparent mb-4">
            Featured Highlights
          </h2>
          <p className="text-purple-200 text-lg max-w-2xl mx-auto">
            Discover our journey through memorable events and achievements
          </p>
        </div>
        
        <Carousel
          plugins={[plugin.current]}
          opts={{ 
            align: "start",
            loop: true
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {data.map((item, index) => (
              <CarouselItem key={index} className="pl-4 basis-full">
                <div className="relative">
                  <div className="relative h-96 md:h-[28rem] lg:h-[32rem] rounded-xl overflow-hidden border border-purple-600/30 bg-black max-w-5xl mx-auto">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover object-center"
                      />
                      {/* Gradient overlay for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-end p-8">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-white/80 text-lg line-clamp-3 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 bg-purple-600/30 border-purple-400/50 text-white backdrop-blur-sm" />
          <CarouselNext className="right-2 bg-purple-600/30 border-purple-400/50 text-white backdrop-blur-sm" />
        </Carousel>
      </div>
    </section>
  );
}
