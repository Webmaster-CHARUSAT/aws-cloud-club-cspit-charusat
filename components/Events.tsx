import Link from "next/link";
import EventCard from "./EventCard";
import events from "@/static/events.json";

export default function Events() {
  // Add new Events section
  const newEvents = [
    {
      title: "AWS Roots",
      description: "AWS Roots is our introductory event packed with cloud fundamentals, exciting activities, and a chance to connect with the AWS community.",
      date: "2025-01-15",
      imageUrl: "/images/events/final event root-1.jpg",
      DisplayDate: "15 JAN 2025"
    }
  ];

  // Get the 3 most recent past events
  const pastEvents = events
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <div className="w-full py-8 bg-purple-900/20 px-7">
      <h2 className="mt-1 text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent sm:text-5xl lg:text-6xl text-center">
        Events
      </h2>
      
      {/* Latest Events Section */}
      <div className="mt-12">
        <div className="mx-auto grid max-w-lg gap-5 md: lg:max-w-6xl lg:grid-cols-3">
          {newEvents.map((event) => (
            <EventCard
              key={event.title}
              date={event.DisplayDate}
              DisplayDate={event.DisplayDate}
              description={event.description}
              image={event.imageUrl}
              title={event.title}
            />
          ))}
        </div>
      </div>

      {/* Past Events Section */}
      <div className="mt-16">
        <h3 className="text-3xl font-bold text-purple-300 mb-6 text-center">
          Past Events
        </h3>
        <div className="mx-auto grid max-w-lg gap-5 md: lg:max-w-6xl lg:grid-cols-3">
          {pastEvents.map((post) => (
            <EventCard
              key={post.title + post.date}
              date={post.DisplayDate}
              DisplayDate={post.DisplayDate}
              description={post.description}
              image={post.imageUrl}
              title={post.title}
            />
          ))}
        </div>
      </div>

      <div className="mt-7 px-5 text-right max-w-6xl mx-auto">
        <Link
          href="/events"
          className="text-base font-bold text-primary hover:text-primary/80 hover:underline"
        >
          View all events &rarr;
        </Link>
      </div>
    </div>
  );
}
