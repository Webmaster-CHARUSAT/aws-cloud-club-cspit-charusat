import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Engineering Resources | Knowledge Center | AWS Cloud Club Charusat",
  description: "Core Computer Science engineering resources including DSA, DBMS, Operating Systems, and more technical subjects for academic excellence.",
};

const engineeringSubjects = [
  {
    name: "DSA (Data Structures & Algorithms)",
    description: "Master the fundamentals of computer science with comprehensive DSA resources",
    topics: [
      "Arrays, Linked Lists & Stacks",
      "Trees & Graph Algorithms", 
      "Dynamic Programming",
      "Sorting & Searching",
      "Competitive Programming"
    ],
    resources: [
      { name: "Data Structures & Algorithms Roadmap", url: "https://roadmap.sh/computer-science" },
      { name: "GeeksForGeeks Documentation", url: "https://www.geeksforgeeks.org/data-structures/" },
      { name: "Strivers A2Z-DSA Course | DSA Playlist", url: "https://www.youtube.com/playlist?list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz" },
      { name: "Strivers Sheet Practice / Take you Forward", url: "https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/" },
      { name: "Github Best DSA Resources Placements", url: "https://github.com/avinash201199/Awesome-DSA-Resource" }
    ]
  },
  {
    name: "DAA (Design & Analysis of Algorithms)",
    description: "Deep dive into algorithm design patterns and complexity analysis",
    topics: [
      "Asymptotic Analysis",
      "Divide and Conquer", 
      "Greedy Algorithms",
      "Graph Algorithms",
      "NP-Completeness"
    ],
    resources: [
      { name: "Gate Smashers / Concept Clearing Playlist", url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiHcmS4i14bI0VrMbZTUvlTa" },
      { name: "GeeksForGeeks Documentations and Codes", url: "https://www.geeksforgeeks.org/dsa/design-and-analysis-of-algorithm-tutorial/" },
      { name: "Tutorial Point Documentations and Codes", url: "https://www.tutorialspoint.com/design_and_analysis_of_algorithms/index.htm" },
      { name: "The Gatehub Youtube playlist", url: "https://www.youtube.com/playlist?list=PL1QH9gyQXfgs7foRxIbIH8wmJyDh5QzAm" }
    ]
  },
  {
    name: "Operating Systems",
    description: "Understanding OS concepts, processes, memory management and more",
    topics: [
      "Process Management",
      "Memory Management",
      "File Systems", 
      "CPU Scheduling",
      "Deadlock Prevention"
    ],
    resources: [
      { name: "GateSmashers Playlist", url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p" },
      { name: "GeeksforGeeks – OS Tutorials", url: "https://www.geeksforgeeks.org/operating-systems/" },
      { name: "Operating System Neso Academy Playlist", url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O" },
      { name: "Guru99 All OS with Good Examples", url: "https://www.guru99.com/operating-system-tutorial.html" }
    ]
  },
  {
    name: "DBMS (Database Management Systems)",
    description: "Learn database design, SQL, normalization and transaction management",
    topics: [
      "Relational Database Design",
      "SQL Queries & Optimization",
      "Normalization Techniques",
      "Transaction Management", 
      "Indexing & B-Trees"
    ],
    resources: [
      { name: "GfG DBMS Tutorial", url: "https://www.geeksforgeeks.org/dbms/" },
      { name: "Gate Smashers Playlist", url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y" },
      { name: "DBMS Placements Series Babbar", url: "https://www.youtube.com/playlist?list=PLDzeHZWIZsTpukecmA2p5rhHM14bl2dHU" },
      { name: "Guru99 All DBMS with Good Examples", url: "https://www.guru99.com/dbms-tutorial.html" }
    ]
  },
  {
    name: "Computer Networks",
    description: "Network protocols, OSI model, TCP/IP and network security fundamentals",
    topics: [
      "OSI & TCP/IP Model",
      "Routing & Switching",
      "Network Security",
      "HTTP/HTTPS Protocols",
      "Network Troubleshooting"
    ],
    resources: [
      { name: "Gate Smashers Playlist", url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_" },
      { name: "Computer Networks Neso Academy", url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx" },
      { name: "GfG CN Tutorials", url: "https://www.geeksforgeeks.org/computer-network-tutorials/" }
    ]
  },
  {
    name: "MCO (Microprocessor & Computer Organization)",
    description: "Computer architecture, assembly language and microprocessor fundamentals",
    topics: [
      "Computer Architecture",
      "Assembly Language Programming",
      "Instruction Set Architecture",
      "Memory Hierarchy",
      "I/O Organization"
    ],
    resources: [
      { name: "Gate Smashers Playlist", url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiHMonh3G6QNKq53C6oNXGrX" },
      { name: "Gfg Documentation", url: "https://www.geeksforgeeks.org/computer-organization-and-architecture-tutorials/" }
    ]
  }
];

export default function EngineeringResources() {
  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Header Section */}
      <div className="relative bg-black overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/resources/engg-sub-resources.jpg"
            alt="Engineering Resources background"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark overlay with blur for better text readability */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        </div>
        
        {/* Content */}
        <div className="relative mx-auto max-w-7xl py-24 px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-purple-600/20 backdrop-blur-sm rounded-full p-4 border border-purple-400/30">
                <svg className="w-12 h-12 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27C12.59 16.41 11.11 17 9.5 17A6.5 6.5 0 0 1 3 10.5A6.5 6.5 0 0 1 9.5 3m0 2C7.01 5 5 7.01 5 9.5S7.01 14 9.5 14 14 11.99 14 9.5 11.99 5 9.5 5Z"/>
                </svg>
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-400 via-white to-purple-300 bg-clip-text text-transparent md:text-5xl drop-shadow-lg">
              Engineering Resources
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-xl text-purple-200 drop-shadow-md">
              Core Computer Science engineering subjects for academic excellence and technical interview preparation
            </p>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="bg-black border-t border-purple-600/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="text-center">
            <h2 className="text-lg font-semibold text-purple-200">Core CS Subjects</h2>
            <p className="text-sm text-purple-300">Comprehensive study materials for all engineering subjects</p>
          </div>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="bg-black relative border-t border-purple-600/30">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {engineeringSubjects.map((subject, index) => (
              <div
                key={index}
                className="bg-black border border-purple-600/30 rounded-lg shadow-lg hover:shadow-purple-500/10 transition-all duration-300 p-6 hover:border-purple-400/50"
              >
                {/* Subject Header */}
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    <h3 className="text-xl font-bold text-purple-200">{subject.name}</h3>
                  </div>
                  <p className="text-purple-300">{subject.description}</p>
                </div>

                {/* Topics */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Study Materials</h4>
                  <div className="space-y-2">
                    {subject.resources.map((resource, resourceIndex) => (
                      <a
                        key={resourceIndex}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-3 bg-purple-900/20 hover:bg-purple-800/30 rounded-md transition-colors duration-200 group border border-purple-600/40 hover:border-purple-400"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-purple-200 group-hover:text-white font-medium text-sm">
                            {resource.name}
                          </span>
                          <svg
                            className="w-4 h-4 text-purple-400 group-hover:text-purple-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Study Tips Section */}
          <div className="mt-16 bg-gradient-to-r from-purple-600/20 to-purple-700/20 border border-purple-600/40 rounded-lg shadow-lg p-8 text-white backdrop-blur-sm">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">Master These Subjects with Us!</h2>
              <p className="mb-8 max-w-2xl mx-auto text-purple-200">
                Join our study groups, competitive programming sessions, and technical workshops. 
                Get peer support and mentorship to excel in your engineering subjects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/events"
                  className="inline-flex items-center px-6 py-3 bg-purple-600 text-white hover:bg-purple-500 rounded-md font-medium transition-colors duration-200 shadow-md"
                >
                  Join Study Groups
                </a>
                <a
                  href="/contact-us"
                  className="inline-flex items-center px-6 py-3 bg-purple-600/20 border border-purple-400/50 hover:bg-purple-600/30 text-purple-200 hover:text-white rounded-md font-medium transition-colors duration-200"
                >
                  Get Academic Help
                </a>
              </div>
            </div>
          </div>

          {/* Additional Academic Resources */}
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="bg-black border border-purple-600/30 rounded-lg shadow-lg p-6 hover:border-purple-400/50 transition-all duration-300">
              <h3 className="text-xl font-bold text-purple-200 mb-3">TatkalGyan Materials</h3>
              <p className="text-purple-300 mb-4">
                SEM 1-4 comprehensive study materials and previous year papers
              </p>
              <a
                href="https://sites.google.com/view/tatkalgyan/home"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-md font-medium transition-colors duration-200"
              >
                Access Materials
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="bg-black border border-purple-600/30 rounded-lg shadow-lg p-6 hover:border-purple-400/50 transition-all duration-300">
              <h3 className="text-xl font-bold text-purple-200 mb-3">CS Roadmap</h3>
              <p className="text-purple-300 mb-4">
                Complete computer science learning path with structured curriculum
              </p>
              <a
                href="https://roadmap.sh/computer-science"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-md font-medium transition-colors duration-200"
              >
                View Roadmap
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
