import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Resources | AWS Cloud Club Charusat",
  description: "Access comprehensive learning resources for computer science subjects, DSA, DBMS, OS, and more technical topics.",
};

const subjects = [
  {
    name: "Cloud Computing & AWS",
    description: "Master cloud computing fundamentals and AWS services for modern application development",
    topics: [
      "AWS Core Services",
      "Cloud Architecture",
      "DevOps & Deployment",
      "Serverless Computing",
      "Cloud Security & Best Practices"
    ],
    resources: [
      { name: "AWS Official Documentation", url: "https://docs.aws.amazon.com/" },
      { name: "AWS Training and Certification", url: "https://aws.amazon.com/training/" },
      { name: "AWS Tutorials For Beginners Playlist", url: "https://youtube.com/playlist?list=PL6XT0grm_TfgtwtwUit305qS-HhDvb4du&si=J3p436yRP4ADiDG9" },
      { name: "AWS Zero to Hero Playlist", url: "https://youtube.com/playlist?list=PLdpzxOOAlwvLNOxX0RfndiYSt1Le9azze&si=Ak-G-QhB-6Yb24Vr" }
    ]
  },
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
  },
  {
    name: "General Resources",
    description: "Comprehensive study materials and roadmaps for computer science",
    topics: [
      "Complete CS Roadmaps",
      "Semester-wise Materials",
      "Programming Handbooks",
      "Interview Preparation",
      "Academic Resources"
    ],
    resources: [
      { name: "ALL DOMAIN ROADMAPS", url: "https://roadmap.sh/" },
      { name: "TatkalGyan SEM 1-4 Materials", url: "https://sites.google.com/view/tatkalgyan/home" },
      { name: "CWH Programming Notes-Handbook", url: "https://www.codewithharry.com/notes" }
    ]
  }
];

export default function Resources() {
  return (
    <div className="bg-white pt-20">
      {/* Header Section with Library Background */}
      <div className="relative bg-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/resources/education-bg.jpg"
            alt="Library background"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        </div>
        
        {/* Content */}
        <div className="relative mx-auto max-w-7xl py-24 px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl drop-shadow-lg">
              Study Resources
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-xl text-gray-100 drop-shadow-md">
              Complete collection of resources for Computer Science subjects, competitive programming, and technical interview preparation
            </p>
          </div>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="bg-gray-50 relative">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {subjects.map((subject, index) => (
              <div
                key={index}
                className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-white/20"
              >
                {/* Subject Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{subject.name}</h3>
                  <p className="text-gray-600">{subject.description}</p>
                </div>

                {/* Resources Links */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Resources</h4>
                  <div className="space-y-2">
                    {subject.resources.map((resource, resourceIndex) => (
                      <a
                        key={resourceIndex}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-3 bg-gray-50 hover:bg-gray-100 rounded-md transition-colors duration-200 group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-gray-900 group-hover:text-gray-700 font-medium text-sm">
                            {resource.name}
                          </span>
                          <svg
                            className="w-4 h-4 text-gray-400 group-hover:text-gray-600"
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

          {/* Additional Resources Section */}
          <div className="mt-16 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-8 border border-white/20">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Study Partners?</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Join our AWS Cloud Club community! Participate in coding sessions, study groups, technical workshops, 
                and collaborative learning sessions to master these subjects together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/events"
                  className="inline-flex items-center px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-md font-medium transition-colors duration-200 shadow-md"
                >
                  Join Study Sessions
                </a>
                <a
                  href="/contact-us"
                  className="inline-flex items-center px-6 py-3 bg-white/90 border border-gray-300 hover:bg-white text-gray-900 rounded-md font-medium transition-colors duration-200 shadow-md"
                >
                  Get Help
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
