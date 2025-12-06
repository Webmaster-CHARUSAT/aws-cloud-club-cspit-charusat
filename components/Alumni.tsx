import Image from "next/image";

const people = [
  {
    name: "Whitney Francis",
    role: "Copywriter",
    imageUrl:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "John Smith",
    role: "Software Engineer",
    imageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Emma Johnson",
    role: "Graphic Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
];

export default function Alumni() {
  return (
    <div className="bg-black">
      <div className="mx-auto max-w-6xl py-12 px-6 text-center lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-left">
              Our Alumni
            </h2>
          </div>
          <ul
            role="list"
            className="mx-auto gap-16 grid grid-cols-2 sm:gap-16 sm:space-y-0 lg:max-w-5xl lg:grid-cols-3"
          >
            {people.map((person) => (
              <li key={person.name} className="group cursor-pointer">
                <div className="space-y-6">
                  <div className="h-40 w-40 rounded-lg xl:h-56 xl:w-56 overflow-hidden mx-auto">
                    <Image
                      className="h-full w-full object-cover scale-110 group-hover:scale-100 transition-all duration-300"
                      width={200}
                      height={200}
                      src={person.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="space-y-1 text-lg font-medium leading-6">
                      <h3>{person.name}</h3>
                      <p className="text-primary">{person.role}</p>
                    </div>
                    <ul role="list" className="flex justify-center space-x-5">
                      <li>
                        <a
                          href={person.twitterUrl}
                          className="text-purple-400 hover:text-purple-300"
                        >
                          <span className="sr-only">Github</span>
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
                        </a>
                      </li>
                      <li>
                        <a
                          href={person.linkedinUrl}
                          className="text-purple-400 hover:text-purple-300"
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
                        </a>
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
