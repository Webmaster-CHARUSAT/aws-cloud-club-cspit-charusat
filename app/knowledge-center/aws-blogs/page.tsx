import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "AWS Blogs | Knowledge Center | AWS Cloud Club Charusat",
  description: "Latest AWS technical blogs, industry insights, case studies, and community content from AWS Cloud Club Charusat.",
};

const blogCategories = [
  {
    name: "Technical Insights",
    description: "Deep technical articles about AWS services, best practices, and implementation guides",
    posts: [
      {
        title: "Building Serverless Applications with AWS Lambda",
        excerpt: "Learn how to create scalable serverless applications using AWS Lambda, API Gateway, and DynamoDB",
        tags: ["Serverless", "Lambda", "API Gateway"],
        featured: true
      },
      {
        title: "AWS Well-Architected Framework: Security Pillar",
        excerpt: "Understanding security best practices and implementing robust security measures in AWS",
        tags: ["Security", "Best Practices", "Architecture"]
      },
      {
        title: "Container Orchestration with Amazon EKS",
        excerpt: "Complete guide to deploying and managing Kubernetes clusters on AWS EKS",
        tags: ["Kubernetes", "EKS", "Containers"]
      }
    ]
  },
  {
    name: "Cloud Career & Learning",
    description: "Career guidance, certification tips, and learning resources for cloud professionals",
    posts: [
      {
        title: "AWS Certification Roadmap 2024",
        excerpt: "Complete guide to AWS certifications and career progression in cloud computing",
        tags: ["Certification", "Career", "Learning Path"],
        featured: true
      },
      {
        title: "From Student to Cloud Architect: A Journey",
        excerpt: "Real experiences and tips from students who successfully transitioned to cloud roles",
        tags: ["Career", "Student Stories", "Cloud Architect"]
      },
      {
        title: "Building Your First AWS Portfolio Project",
        excerpt: "Step-by-step guide to creating impressive cloud projects for your resume",
        tags: ["Portfolio", "Projects", "Resume"]
      }
    ]
  },
  {
    name: "Industry Case Studies",
    description: "Real-world implementations, success stories, and lessons learned from industry",
    posts: [
      {
        title: "How Netflix Scales with AWS",
        excerpt: "Deep dive into Netflix's cloud architecture and how they handle millions of users",
        tags: ["Case Study", "Scaling", "Architecture"],
        featured: true
      },
      {
        title: "Startup to Unicorn: Scaling on AWS",
        excerpt: "How startups leverage AWS to scale from zero to millions of users",
        tags: ["Startup", "Scaling", "Growth"]
      },
      {
        title: "Cost Optimization: Real Company Examples",
        excerpt: "Learn how companies reduced their AWS costs by 40-60% with smart strategies",
        tags: ["Cost Optimization", "Case Study", "FinOps"]
      }
    ]
  },
  {
    name: "Community & Events",
    description: "Updates from our club activities, event summaries, and member contributions",
    posts: [
      {
        title: "AWS Community Day 2024 Highlights",
        excerpt: "Key takeaways and insights from our recent AWS Community Day event",
        tags: ["Community", "Events", "Highlights"],
        featured: true
      },
      {
        title: "Student Success Stories: AWS Internships",
        excerpt: "How our club members landed internships at top tech companies",
        tags: ["Success Stories", "Internships", "Students"]
      },
      {
        title: "Monthly Tech Talk Series Recap",
        excerpt: "Summary of our monthly technical presentations and guest speaker sessions",
        tags: ["Tech Talks", "Events", "Learning"]
      }
    ]
  }
];

const featuredPosts = blogCategories.flatMap(category => 
  category.posts.filter(post => post.featured)
);

export default function AWSBlogs() {
  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Header Section */}
      <div className="relative bg-black overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/resources/aws-blogs.jpg"
            alt="AWS Blogs background"
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
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-400 via-white to-purple-300 bg-clip-text text-transparent md:text-5xl drop-shadow-lg">
              AWS Blogs
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-xl text-purple-200 drop-shadow-md">
              Latest insights, tutorials, and industry perspectives from our AWS Cloud Club community
            </p>
          </div>
        </div>
      </div>

      {/* Featured Posts Section */}
      <div className="bg-black border-b border-purple-600/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-purple-200">Featured Posts</h2>
            <p className="text-purple-300 mt-2">Must-read articles from our community</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featuredPosts.map((post, index) => (
              <div
                key={index}
                className="bg-black border border-purple-600/30 rounded-lg shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 p-6 hover:border-purple-400"
              >
                <div className="flex items-center justify-start mb-3">
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded">
                    Featured
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-purple-200 mb-2 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-purple-300 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {post.tags.slice(0, 2).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-purple-900/50 text-purple-200 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="text-center">
                  <button className="text-purple-600 hover:text-purple-700 font-medium">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Categories */}
      <div className="bg-black relative">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-200">Blog Categories</h2>
            <p className="text-purple-300 mt-4 max-w-2xl mx-auto">
              Explore our content organized by topics that matter to cloud professionals and students
            </p>
          </div>

          <div className="space-y-12">
            {blogCategories.map((category, index) => (
              <div key={index} className="bg-black border border-purple-600/30 rounded-lg shadow-lg p-8">
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-purple-200">{category.name}</h3>
                    <p className="text-purple-300">{category.description}</p>
                  </div>
                </div>

                {/* Posts Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {category.posts.map((post, postIndex) => (
                    <div
                      key={postIndex}
                      className="border border-purple-600/30 rounded-lg p-4 hover:border-purple-400 hover:shadow-md hover:shadow-purple-500/25 transition-all duration-200"
                    >
                      <h4 className="text-lg font-semibold text-purple-200 mb-2 line-clamp-2">
                        {post.title}
                      </h4>
                      
                      <p className="text-purple-300 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-1 mb-3">
                        {post.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-purple-900/50 text-purple-200 text-xs rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <button className="text-purple-600 hover:text-purple-700 font-medium text-sm">
                        Read Full Article →
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter Subscription */}
          <div className="mt-16 bg-gradient-to-r from-purple-600/20 to-purple-700/20 border border-purple-600/40 rounded-lg shadow-lg p-8 text-white backdrop-blur-sm">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">Stay Updated with Our Blog</h2>
              <p className="mb-8 max-w-2xl mx-auto text-purple-200">
                Subscribe to get the latest AWS insights, tutorials, and industry news delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-md bg-black border border-purple-600/40 text-purple-200 placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400"
                />
                <button className="px-6 py-3 bg-purple-600 text-white hover:bg-purple-500 rounded-md font-medium transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Community Call to Action */}
          <div className="mt-8 bg-black border border-purple-600/30 rounded-lg shadow-lg p-8 hover:border-purple-400/50 transition-all duration-300">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-purple-200 mb-4">Contribute to Our Blog</h2>
              <p className="text-purple-300 mb-8 max-w-2xl mx-auto">
                Share your AWS knowledge and experiences with our community. We welcome technical articles, 
                case studies, and learning resources from our members.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact-us"
                  className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-md font-medium transition-colors duration-200 shadow-md"
                >
                  Submit Article
                </a>
                <a
                  href="/team"
                  className="inline-flex items-center px-6 py-3 bg-purple-600/20 border border-purple-400/50 hover:bg-purple-600/30 text-purple-200 hover:text-white rounded-md font-medium transition-colors duration-200"
                >
                  Meet Our Writers
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
