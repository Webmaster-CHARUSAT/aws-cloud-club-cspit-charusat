import Image from "next/image";
import Link from "next/link";
import BlurText from "./animations-ui/BlurText";

const people = [
  {
    name: "Jiya Thakkar - Captain",
    role: "Club Captain",
    imageUrl: "/images/team/members/jiyaT.jpg",
    gitHub: "https://github.com",
    linkedinUrl: "https://www.linkedin.com",
  },
];

export default function Captains() {
  return (
    <div className="bg-black">
      <div className="mx-auto max-w-7xl py-12 px-6 lg:px-8 lg:py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-3 lg:text-4xl bg-gradient-to-r from-purple-400 via-white to-purple-300 bg-clip-text text-transparent">
            Club Captain
          </h2>
        </div>
        
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12 xl:gap-16">
          {/* BlurText on the left side of the image */}
          <div className="flex-shrink-0 w-full max-w-sm sm:max-w-md lg:w-96 lg:max-w-[28rem] xl:w-[32rem] xl:max-w-none flex items-center justify-center order-2 lg:order-1">
            <BlurText
              text="AWS Cloud Club Charusat"
              delay={100}
              animateBy="letters"
              direction="top"
              className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight text-center whitespace-nowrap sm:whitespace-normal break-keep text-white"
            />
          </div>
          
          {people.map((person) => (
            <div
              key={person.name}
              className="group relative max-w-xs sm:max-w-sm w-full order-1 lg:order-2"
            >
              {/* Background decorative elements */}
              <div className="absolute -inset-1 bg-[#ae17ff9c] rounded-2xl blur opacity-50 group-hover:opacity-70 transition duration-700"></div>
              
              {/* Main card with overall purple shadow */}
              <div className="relative bg-black border border-purple-600/30 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 group-hover:scale-102 group-hover:shadow-2xl group-hover:shadow-purple-500/50">
                {/* Full image section with overlays */}
                <div className="relative h-80 sm:h-96 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent z-10"></div>
                  
                  <Image
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    width={500}
                    height={500}
                    src={person.imageUrl}
                    alt={person.name}
                  />
                  
                  {/* Content overlaid on image - single wider capsule at bottom */}
                  <div className="absolute bottom-2 left-0 right-0 px-4 sm:px-6 text-center z-20">
                    {/* Single wider capsule with name and social links */}
                    <div className="inline-block">
                      <div className="bg-white/15 backdrop-blur border border-white/25 rounded-full px-6 sm:px-10 py-2 sm:py-3 flex items-center justify-center space-x-4 sm:space-x-6">
                        {/* Name */}
                        <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">
                          {person.name}
                        </h3>
                        
                        {/* Social links */}
                        <div className="flex space-x-2 sm:space-x-3">
                          <Link
                            href={person.gitHub}
                            target="_blank"
                            className="group/link relative p-1.5 sm:p-2 bg-white/20 backdrop-blur rounded-full hover:bg-gray-800/80 transition-all duration-300 transform hover:scale-110"
                          >
                            <svg
                              className="h-4 w-4 sm:h-5 sm:w-5 text-white transition-colors duration-300"
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
                            <span className="sr-only">GitHub</span>
                          </Link>
                          
                          <Link
                            href={person.linkedinUrl}
                            target="_blank"
                            className="group/link relative p-1.5 sm:p-2 bg-white/20 backdrop-blur rounded-full hover:bg-blue-600/80 transition-all duration-300 transform hover:scale-110"
                          >
                            <svg
                              className="h-4 w-4 sm:h-5 sm:w-5 text-white transition-colors duration-300"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="sr-only">LinkedIn</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}