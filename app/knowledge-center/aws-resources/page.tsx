import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "AWS Resources | Knowledge Center | AWS Cloud Club Charusat",
  description: "Comprehensive AWS learning resources, cloud computing fundamentals, and development roadmaps curated by AWS Cloud Club Charusat.",
};

const awsResources = [
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
    name: "Development Roadmaps",
    description: "Complete roadmaps for cloud development and programming paths",
    topics: [
      "Cloud Developer Path",
      "DevOps Engineering",
      "Full-Stack Development",
      "Backend with AWS",
      "Frontend Deployment"
    ],
    resources: [
      { name: "ALL DOMAIN ROADMAPS", url: "https://roadmap.sh/" },
      { name: "AWS Solutions Architect Path", url: "https://roadmap.sh/aws" },
      { name: "DevOps Roadmap", url: "https://roadmap.sh/devops" },
      { name: "Backend Developer Roadmap", url: "https://roadmap.sh/backend" }
    ]
  },
  {
    name: "AWS Certification Resources",
    description: "Preparation materials for AWS certification exams and professional development",
    topics: [
      "AWS Cloud Practitioner",
      "Solutions Architect Associate",
      "Developer Associate", 
      "SysOps Administrator",
      "Professional Certifications"
    ],
    resources: [
      { name: "AWS Certification Official", url: "https://aws.amazon.com/certification/" },
      { name: "AWS Free Tier Resources", url: "https://aws.amazon.com/free/" },
      { name: "AWS Well-Architected Framework", url: "https://aws.amazon.com/architecture/well-architected/" },
      { name: "AWS Whitepapers", url: "https://aws.amazon.com/whitepapers/" }
    ]
  },
  {
    name: "Programming & Development Tools",
    description: "Essential programming resources and development tools for cloud applications",
    topics: [
      "Programming Languages",
      "Development Environment",
      "Code Documentation",
      "Best Practices",
      "Open Source Tools"
    ],
    resources: [
      { name: "CWH Programming Notes-Handbook", url: "https://www.codewithharry.com/notes" },
      { name: "AWS CLI Documentation", url: "https://docs.aws.amazon.com/cli/" },
      { name: "AWS SDK Documentation", url: "https://aws.amazon.com/developer/tools/" },
      { name: "Serverless Framework", url: "https://www.serverless.com/" }
    ]
  }
];

export default function AWSResources() {
  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Header Section */}
      <div className="relative bg-black overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/resources/aws-resources.jpg"
            alt="AWS Resources background"
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
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-400 via-white to-purple-300 bg-clip-text text-transparent md:text-5xl drop-shadow-lg">
              AWS Resources
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-xl text-purple-200 drop-shadow-md">
              Comprehensive AWS learning resources, cloud computing fundamentals, and development roadmaps curated by our experts
            </p>
          </div>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="bg-black relative border-t border-purple-600/30">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid gap-8 md:grid-cols-2">
            {awsResources.map((subject, index) => (
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
                  <h4 className="text-sm font-semibold text-white mb-2 uppercase tracking-wide">Key Topics</h4>
                  <div className="flex flex-wrap gap-2">
                    {subject.topics.slice(0, 3).map((topic, topicIndex) => (
                      <span
                        key={topicIndex}
                        className="px-3 py-1 bg-purple-600/30 text-purple-200 text-xs font-medium rounded-full border border-purple-500/50"
                      >
                        {topic}
                      </span>
                    ))}
                    {subject.topics.length > 3 && (
                      <span className="px-3 py-1 bg-purple-800/30 text-purple-300 text-xs font-medium rounded-full border border-purple-600/50">
                        +{subject.topics.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Resources Links */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Resources</h4>
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

          {/* Call to Action Section */}
          <div className="mt-16 bg-gradient-to-r from-purple-600/20 to-purple-700/20 border border-purple-600/40 rounded-lg shadow-lg p-8 text-white backdrop-blur-sm">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">Ready to Start Your AWS Journey?</h2>
              <p className="mb-8 max-w-2xl mx-auto text-purple-200">
                Join our AWS Cloud Club community! Participate in hands-on workshops, cloud deployment sessions, 
                and AWS certification preparation programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/events"
                  className="inline-flex items-center px-6 py-3 bg-purple-600 text-white hover:bg-purple-500 rounded-md font-medium transition-colors duration-200 shadow-md"
                >
                  Join AWS Workshops
                </a>
                <a
                  href="/contact-us"
                  className="inline-flex items-center px-6 py-3 bg-purple-600/20 border border-purple-400/50 hover:bg-purple-600/30 text-purple-200 hover:text-white rounded-md font-medium transition-colors duration-200"
                >
                  Get AWS Mentorship
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
