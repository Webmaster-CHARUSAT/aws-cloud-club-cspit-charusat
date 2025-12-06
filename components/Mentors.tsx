import Image from "next/image";
import Link from "next/link";
import AnimatedContent from '../components/animations-ui/AnimatedContent'


const people = [
  {
    name: "Dr. Purvi Prajapati",
    role: "Head of Department & Club Lead",
    imageUrl: "/images/team/purvi.jpg",
    gitHub: "https://github.com",
    linkedinUrl: "https://www.linkedin.com",
  },
  {
    name: "Sanket Suthar",
    role: "Club Lead",
    imageUrl: "/images/team/ss.jpeg",
    gitHub: "#",
    linkedinUrl: "https://www.linkedin.com/in/sanket-suthar-544a69210/",
  },
  {
    name: "Sandip Patel",
    role: "AWS Accredited Instructor, AWS Community Builder & ASC Club Lead.",
    imageUrl: "/images/team/spp.jpeg",
    gitHub: "https://github.com/sandip9334",
    linkedinUrl: "https://www.linkedin.com/in/sandip9334/",
  },
];

export default function Mentors() {
  return (
    <div className="bg-black py-16">
      <div className="mx-auto max-w-6xl pt-20 pb-4 sm:pt-4 px-4 lg:px-8 lg:py-10">
        <div className="space-y-6">
          <div className="space-y-2 sm:space-y-1">
            <h2 className="text-3xl font-bold tracking-tight lg:text-4xl bg-gradient-to-r from-purple-400 via-white to-purple-300 bg-clip-text text-transparent text-center">
              Our Mentors
            </h2>
          </div>
          <div className="">
            <ul
              role="list"
              className="space-y-8 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-6 sm:gap-y-8 sm:space-y-0 lg:gap-x-8"
            >
              {people.map((person) => (
                <li
                  key={person.name}
                  className="group cursor-pointer bg-black border border-purple-600/30 shadow-md hover:shadow-lg hover:shadow-purple-500/25 rounded-lg transition-all duration-300"
                >
                  <div className="space-y-3">
                    <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-t-lg h-80">
                      <Image
                        className="rounded-t-lg object-cover scale-110 group-hover:scale-100 transition-all duration-300 object-top"
                        width={500}
                        height={400}
                        src={person.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="px-4 pb-4 space-y-2">
                      <div className="space-y-1 text-center">
                        <h3 className="text-lg font-semibold text-white">{person.name}</h3>
                        <p className="text-sm text-purple-300 font-medium leading-tight">{person.role}</p>
                      </div>
                      <ul role="list" className="flex justify-center space-x-4">
                        <li>
                          <Link
                            href={person.gitHub}
                            target="_blank"
                            className="text-purple-400 hover:text-purple-300 transition-colors duration-200"
                          >
                            <span className="sr-only">GitHub</span>
                            <svg
                              className="h-5 w-5"
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
                        </li>
                        <li>
                          <Link
                            href={person.linkedinUrl}
                            target="_blank"
                            className="text-purple-400 hover:text-blue-400 transition-colors duration-200"
                          >
                            <span className="sr-only">LinkedIn</span>
                            <svg
                              className="h-5 w-5"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </Link>
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
    </div>
  );
}
