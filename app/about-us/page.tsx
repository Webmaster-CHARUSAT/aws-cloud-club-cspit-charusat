"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const data = [
  "/images/about/image2.jpg",
  "/images/about/image4.jpeg",
  "/images/about/image9.jpeg",
  "/images/about/image10.jpg",
  "/images/about/image11.jpg",
  "/images/about/image12.jpg",
];

const domains = [
  {
    title: "Machine Learning",
    description:
      "Machine learning is a subset of artificial intelligence (AI) that enables systems to learn and improve from experience without being explicitly programmed. AWS provides a suite of machine learning services for building, training, and deploying ML models at scale.",
  },
  {
    title: "Cloud computing",
    description:
      'Cloud computing involves the delivery of computing services—including servers, storage, databases, networking, software, and analytics—over the internet ("the cloud") to offer faster innovation, flexible resources, and economies of scale.',
  },
  {
    title: "IoT",
    description:
      "IoT refers to the network of physical devices, vehicles, home appliances, and other items embedded with electronics, software, sensors, actuators, and connectivity, enabling them to connect and exchange data. It's revolutionizing industries by enabling data-driven decision-making and automation.",
  },
  {
    title: "Networking",
    description:
      "Networking encompasses the systems and processes used to connect computers and devices together to share resources and communicate. In the context of AWS, it involves services for building and managing scalable, reliable, and secure networks in the cloud.",
  },
  {
    title: "Devops",
    description:
      "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops) to shorten the systems development life cycle and provide continuous delivery of high-quality software. AWS offers tools and services to support DevOps practices, such as version control, continuous integration, and deployment automation.",
  },
  {
    title: "Security",
    description:
      "Security in the AWS context involves protecting data, systems, and infrastructure from unauthorized access, misuse, and other threats. AWS provides a comprehensive set of security services and features, including identity and access management, encryption, monitoring, and compliance tools, to help customers build secure and compliant solutions in the cloud.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Carousel
        opts={{ align: "start" }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        className="max-w-screen overflow-hidden col-span-full mt-20"
      >
        <CarouselContent>
          {data.map((d, index) => (
            <CarouselItem key={index}>
              <div className="relative isolate overflow-hidden bg-gray-900">
                <Image
                  src={d}
                  alt={d}
                  width={1920}
                  height={1080}
                  className="h-screen w-full object-cover object-top"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute z-10 bg-purple-600/20 border-purple-400 hover:bg-purple-600/40 text-purple-200 hover:text-white h-1/3 w-14 top-[50%] left-0 backdrop-blur-sm" />
        <CarouselNext className="absolute z-10 bg-purple-600/20 border-purple-400 hover:bg-purple-600/40 text-purple-200 hover:text-white h-1/3 w-14 top-[50%] right-0 backdrop-blur-sm" />
      </Carousel>
      <div className="relative bg-black mt-5 xl:mt-16">
        <div className="mx-auto max-w-7xl py-16 px-6 lg:px-8">
          <div className="text-center">
            <h2 className="mt-1 text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent md:text-5xl">
              Who we are?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-xl text-purple-200">
              Together AWS Cloud Club CHARUSAT aims to provide a platform for
              the intellectuals to learn and explore the Cloud fundamentals of
              AWS. As a part of the club we assure that every individual gets
              something productive out of this club. AWS Cloud Club CHARUSAT
              intends to bring developers under one roof to create a community
              to inspire many. The club will be channeled into propagating
              learning and teaching symbiotically.
            </p>
          </div>
        </div>
      </div>
      <div className="relative bg-gray-900 mt-28 lg:mt-48 xl:mt-64">
        <div className="h-48 absolute w-full -mt-44">
          <svg
            className="text-gray-900 absolute bottom-0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="currentColor"
              fillOpacity="1"
              d="M0,128L40,133.3C80,139,160,149,240,176C320,203,400,245,480,234.7C560,224,640,160,720,144C800,128,880,160,960,176C1040,192,1120,192,1200,181.3C1280,171,1360,149,1400,138.7L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
          </svg>
        </div>

        <div className="mx-auto max-w-7xl py-16 px-6 lg:px-8">
          <div className="text-center">
            <h2 className="mt-1 text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent md:text-5xl">
              What We Do?
            </h2>
            <h3 className="mt-5 text-2xl font-bold tracking-tight text-purple-300 md:text-3xl">
              Meetups,Expert Talks,Workshops
            </h3>
            <p className="mx-auto mt-5 max-w-xl text-xl text-purple-200">
              AWS Cloud Club CHARUSAT interacts with various forms, from doing
              meetups to expert talk sessions, from seminars to workshop and
              hands on sessions, from AWS to Alexa, additional to this live
              projections and demonstration will be featured to empower the
              community built around us.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-gray-900 via-black to-black pt-16">
        <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent md:text-5xl text-center">
          Domains
        </h2>
        <div className="max-w-7xl mx-auto py-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {domains.map((d, index) => (
            <div
              key={index}
              className={`flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 p-16 border border-purple-600/20 rounded-lg m-2 bg-gray-900/50 hover:bg-gray-800/50 transition-colors duration-300`}
            >
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-purple-300">{d.title}</h3>
                <p className="text-purple-200">{d.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
