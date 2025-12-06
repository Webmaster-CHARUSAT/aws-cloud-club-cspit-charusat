import Link from "next/link";
import TiltedCard from "./animations-ui/TiltedCard";
import Magnet from "./animations-ui/Magnet";

const people = [
  {
    name: "Vasu Bhimani",
    role: "Cloud Team",
    imageUrl: "/images/team/members/vasu.png",
    github: "#",
    linkedinUrl: "#",
  },
  {
    name: "Harsh Dhandha",
    role: "Cloud Team",
    imageUrl: "/images/team/members/harsh.jpg",
    github: "#",
    linkedinUrl: "#",
  },
  {
    name: "Brinda Vaghasiya",
    role: "Cloud Team",
    imageUrl: "/images/team/members/brinda.jpg",
    github: "#",
    linkedinUrl: "#",
  },
  {
    name: "Dhairya Shah",
    role: "Cloud Team",
    imageUrl: "/images/team/members/dhairyaS.jpg",
    github: "#",
    linkedinUrl: "#",
  },
  {
    name: "Aum Tamboli",
    role: "Cloud Team",
    imageUrl: "/images/team/members/aum.png",
    github: "#",
    linkedinUrl: "#",
  },
  {
    name: "Priyanshu Chaniyara",
    role: "Developer",
    imageUrl: "/images/team/members/priyanshu-dev.jpg",
    github: "https://github.com/Priyanshu-2109",
    linkedinUrl: "https://www.linkedin.com/in/priyanshu-chaniyara",
  },
  {
    name: "Samarth Chauhan",
    role: "Developer",
    imageUrl: "/images/team/members/samarth.jpg",
    github: "#",
    linkedinUrl: "#",
  },
  {
    name: "Neel Shah",
    role: "Graphic Designer",
    imageUrl: "/images/team/members/neelN.jpg",
    github: "#",
    linkedinUrl: "#",
  },
  {
    name: "Mirali Vaghasiya",
    role: "Graphic Designer",
    imageUrl: "/images/team/members/mirali.jpg",
    github: "#",
    linkedinUrl: "#",
  },
  {
    name: "Vansh Malani",
    role: "Content Writer",
    imageUrl: "/images/team/members/vansh-malani.jpg",
    github: "#",
    linkedinUrl: "#",
  },
  {
    name: "Nitya Vaidya",
    role: "Content Writer",
    imageUrl: "/images/team/members/nitya.jpg",
    github: "#",
    linkedinUrl: "#",
  },
  {
    name: "Dhairya Kanabar",
    role: "Community Engagement",
    imageUrl: "/images/team/members/dhairyaK.jpg",
    github: "#",
    linkedinUrl: "#",
  },
  {
    name: "Kathan Modh",
    role: "Community Engagement",
    imageUrl: "/images/team/members/kathan.jpg",
    github: "#",
    linkedinUrl: "#",
  },
  {
    name: "Diya Prajapati",
    role: "Community Engagement",
    imageUrl: "/images/team/members/diya.jpg",
    github: "#",
    linkedinUrl: "#",
  },
  {
    name: "Shrey Lakhtaria",
    role: "Media Team",
    imageUrl: "/images/team/members/shrey.jpg",
    github: "#",
    linkedinUrl: "#",
  },
  {
    name: "Krish Kamani",
    role: "Media Team",
    imageUrl: "/images/team/members/krish.jpg",
    github: "#",
    linkedinUrl: "#",
  },
  {
    name: "Govind Suthar",
    role: "Media Team",
    imageUrl: "/images/team/members/govind.jpg",
    github: "#",
    linkedinUrl: "#",
  },
  {
    name: "Priyanshi Dalwadi",
    role: "Media Team",
    imageUrl: "/images/team/members/priyanshi.png",
    github: "#",
    linkedinUrl: "#",
  },
  {
    name: "Parshva Parmar",
    role: "Media Team",
    imageUrl: "/images/team/members/parshva.jpg",
    github: "#",
    linkedinUrl: "#",
  },
];

export default function Team() {
  return (
    <div className="bg-black overflow-x-hidden">
      <div className="mx-auto max-w-6xl py-12 px-6 text-center lg:px-8 lg:py-20">
        <div className="space-y-12">
          <div className="space-y-5 sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-left bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
              Our Team
            </h2>
          </div>
          <ul
            role="list"
            className="mx-auto gap-8 grid grid-cols-1 sm:grid-cols-2 sm:gap-12 lg:gap-16 lg:max-w-5xl lg:grid-cols-3"
          >
            {people.map((person) => (
              <li key={person.name} className="group cursor-pointer">
                <div className="space-y-4 sm:space-y-6">
                  <div className="h-48 w-48 sm:h-60 sm:w-60 mx-auto">
                    <TiltedCard
                      imageSrc={person.imageUrl}
                      altText={`${person.name} - ${person.role}`}
                      captionText={`${person.name} - ${person.role}`}
                      containerHeight="240px"
                      containerWidth="240px"
                      imageHeight="240px"
                      imageWidth="240px"
                      rotateAmplitude={12}
                      scaleOnHover={1.1}
                      showMobileWarning={false}
                      showTooltip={true}
                      displayOverlayContent={true}
                      overlayContent={
                        <div className="w-full h-full flex flex-col justify-end p-3 sm:p-4">
                          <div className="inline-flex self-start">
                            <span className="bg-purple-900/80 backdrop-blur-sm text-purple-100 text-xs sm:text-sm font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-lg border border-purple-500/30">
                              {person.name}
                            </span>
                          </div>
                        </div>
                      }
                    />
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="space-y-1 text-center">
                      <Magnet padding={5} disabled={false} magnetStrength={8}>
                        <p className="text-purple-300 font-semibold mt-10 lg:mt-0 md:mt-0 text-sm sm:text-base lg:text-lg">{person.role}</p>
                      </Magnet>
                    </div>
                    <ul role="list" className="flex justify-center space-x-3 sm:space-x-4 lg:space-x-6">
                      <li>
                        <Magnet padding={10} disabled={false} magnetStrength={6}>
                          <Link
                            href={person.github}
                            target="_blank"
                            className="text-purple-400 hover:text-purple-200 transition-colors duration-200"
                          >
                            <span className="sr-only">Github</span>
                            <svg
                              className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6"
                              fill="currentColor"
                              viewBox="0 0 97 97"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                              />
                            </svg>
                          </Link>
                        </Magnet>
                      </li>
                      <li>
                        <Magnet padding={10} disabled={false} magnetStrength={6}>
                          <Link
                            href={person.linkedinUrl}
                            target="_blank"
                            className="text-purple-400 hover:text-purple-200 transition-colors duration-200"
                          >
                            <span className="sr-only">LinkedIn</span>
                            <svg
                              className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.332V2.298C19 1.581 18.402 1 17.668 1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </Link>
                        </Magnet>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
