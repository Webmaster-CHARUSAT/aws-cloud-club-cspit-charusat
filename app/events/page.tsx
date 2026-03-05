import EventCard from "@/components/EventCard";
import events from "@/static/events.json";

export default function EventsPage() {
  // New events to be displayed at the top
  const newEvents = [
    {
      title: "AWS Roots",
      description: "Join us for AWS Roots, an exciting new event focused on cloud fundamentals and community building. More details coming soon!",
      date: "2025-07-21",
      imageUrl: "/images/events/final event root-1.jpg",
      DisplayDate: "15 JAN 2025"
    },
    {
      title: "The Golden Stack: Skills, Certs & Cloud Leadership",
      description: "The AWS Club organized an event titled \"The Golden Stack: Skills, Certs & Cloud Leadership\" to guide students through the AWS Certification Journey and career opportunities in cloud computing. The event began with a technical session on \"Emerging Trends in Cloud Computing – AI Integration with Cloud Platforms\", followed by a Career Guidance Session focusing on building careers in Cloud and DevOps and pathways to global tech companies. A dedicated session highlighted the AWS certification journey from beginner to Golden Jacket achiever, including hands-on workshops on SageMaker, Serverless, and Security. The event concluded with an interactive Q&A and a valedictory session.",
      date: "2024-11-15",
      imageUrl: "/images/events/golden-jacket-event.png",
      DisplayDate: "15 NOV 2024"
    },
    {
      title: "Infrastructure as Code on AWS: A Hands-on Journey with Terraform",
      description: "The AWS Club organized an online session on \"Infrastructure as Code on AWS: A Hands-on Journey with Terraform.\" The session was delivered by AWS Community Builder Mr. SandipKumar Patel, who introduced participants to the fundamentals of Infrastructure as Code (IaC) and demonstrated how Terraform can be used to efficiently provision and manage cloud infrastructure on AWS. Participants gained insights into core IaC concepts, practical Terraform usage, and best practices for managing cloud resources. The interactive session also included a live Q&A.",
      date: "2024-10-04",
      imageUrl: "/images/events/sandeep-event.jpeg",
      DisplayDate: "04 OCT 2024"
    }
  ];

  // All past events sorted by date
  const pastEvents = events
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <main className="bg-black min-h-screen">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="relative z-10 px-6 py-28">
        <div className="relative mx-auto max-w-lg divide-y-2 divide-purple-600/30 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent sm:text-4xl">
              Events
            </h2>
            <p className="mt-3 text-xl text-purple-200 sm:mt-4">
              Read about the latest events and news from the community.
            </p>
          </div>
          
          {/* Latest Events Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-purple-300 mb-6">
              Latest Events
            </h3>
            <div className="grid gap-16 pt-6 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
              {newEvents.map((event) => (
                <EventCard
                  key={event.title}
                  date={event.date}
                  description={event.description}
                  image={event.imageUrl}
                  title={event.title}
                  DisplayDate={event.DisplayDate}
                />
              ))}
            </div>
          </div>

          {/* Past Events Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-purple-300 mb-6">
              Past Events
            </h3>
            <div className="grid gap-16 pt-6 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
              {pastEvents.map((post) => (
                <EventCard
                  key={post.title + post.date}
                  date={post.date}
                  description={post.description}
                  image={post.imageUrl}
                  title={post.title}
                  DisplayDate={post.DisplayDate}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
