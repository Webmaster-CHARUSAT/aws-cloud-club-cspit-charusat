import { Metadata } from "next";
import Image from "next/image";
import ScrollVelocity from "@/components/animations-ui/ScrollVelocity";

export const metadata: Metadata = {
  title: "AWS Blogs | Knowledge Center | AWS Cloud Club Charusat",
  description: "Latest AWS technical blogs, industry insights, case studies, and community content from AWS Cloud Club Charusat.",
};

const awsFromSpeakers = [
  { name: "Jen Looper", role: "Head of Academic Advocacy, AWS" },
  { name: "Chirag Oswal", role: "Technical Account Manager, AWS" },
  { name: "Ashish Bhatt", role: "Lead Consultant, DevOps, AWS" },
  { name: "Aditi Sawhney", role: "Senior Digital Marketing Manager, AWS" },
  { name: "Dharam Thakkar", role: "Enterprise Solutions Architect, AWS" },
  { name: "Nirmal Chhodavadiya", role: "Cloud Support Engineer (BigData), AWS" },
];

const industrySpeakers = [
  { name: "Bhaumik Merchant", role: "CEO & Co-Founder, Forenzy Networks" },
  { name: "Omshree Buani", role: "Cloud Engineer, Accenture" },
  { name: "Nilesh Vaghela", role: "Founder, ElectroMech" },
  { name: "Dimple Vaghela", role: "Director, Electromech Cloudtech" },
  { name: "Bhushan Gajjar", role: "Project Manager, Volansys Technologies" },
  { name: "Dr. Abhilasha Vyas", role: "Head of Technical Sales, CloudThat" },
  { name: "Pooja Ranjan", role: "Lead Data Scientist, IQM" },
  { name: "Varsha Verma", role: "Cloud Tech Senior Analyst" },
  { name: "Poonam Patel", role: "Director, The Line Tech & AWS Community Builder" },
];

const teamGroups = [
  { dept: "Cloud Team", members: "Vasu Bhimani, Harsh Dhandha, Brinda Vaghasiya, Dhairya Shah, Aum Tamboli" },
  { dept: "Web Developers", members: "Priyanshu Chaniyara, Samarth Chauhan" },
  { dept: "Graphic Designers", members: "Neel Shah, Mirali Vaghasiya" },
  { dept: "Content Writers", members: "Vansh Malani, Nitya Vaidya" },
  { dept: "Community Engagement", members: "Dhairya Kanabar, Kathan Modh, Diya Prajapati" },
  { dept: "Media Team", members: "Shrey Lakhtaria, Krish Kamani, Govind Suthar, Priyanshi Dalwadi, Parshva Parmar" },
];

const events = [
  { name: "AWS Roots", desc: "Our introductory event covering cloud fundamentals, activities, and community connections." },
  { name: "Infrastructure as Code on AWS", desc: "A hands-on session with AWS Community Builder Sandip Patel on Terraform and IaC fundamentals." },
  { name: "CloudUP on Her", desc: "Celebrating and empowering women in cloud computing, with talks, panels, and networking." },
  { name: "The Golden Stack", desc: "A guide to AWS certifications, career paths, and what it takes to go from beginner to Golden Jacket — hosted by Golden Jacket owner Mr. Shashank Chinchli." },
  { name: "AWS Cloud Bootcamp & Internship", desc: "Covering CloudFront, Amazon Bedrock, Lambda, DynamoDB, EC2, and more." },
];

const otherPosts = [
  {
    title: "Getting Started with AWS — Step-by-Step for Students",
    date: "March 14, 2026",
    tags: ["Beginner", "AWS", "Guide"],
    excerpt: "A step-by-step guide to getting started with AWS as a student — from account setup to your first cloud deployment.",
  },
];

export default function AWSBlogs() {
  return (
    <div className="min-h-screen bg-black pt-20">
      {/* ── Hero ── */}
      <div className="relative bg-black overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/resources/aws-blog-cl.png"
            alt="AWS Blogs background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/65 backdrop-blur-sm" />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-purple-600/20 backdrop-blur-sm rounded-full p-4 border border-purple-400/30">
              <svg className="w-12 h-12 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
              </svg>
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-400 via-white to-purple-300 bg-clip-text text-transparent md:text-5xl drop-shadow-lg">
            AWS Blogs
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-xl text-purple-200 drop-shadow-md">
            Insights, stories, and updates from the AWS Cloud Club CHARUSAT community
          </p>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">

        {/* ── Featured Article ── */}
        <article className="mb-20">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {["Community", "AWS", "Events", "Education"].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-purple-900/50 text-purple-300 text-xs font-medium rounded-full border border-purple-600/40">
                {tag}
              </span>
            ))}
          </div>

          {/* Title + Meta */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            AWS Cloud Club CHARUSAT: Community, Cloud, and What&apos;s Coming Next
          </h2>
          <div className="flex flex-wrap items-center gap-3 text-purple-400 text-sm mb-8">
            <span>AWS Cloud Club CHARUSAT</span>
            <span className="text-purple-600">·</span>
            <span>March 14, 2026</span>
            <span className="text-purple-600">·</span>
            <span>6 min read</span>
          </div>

          {/* Body */}
          <div className="border-t border-purple-600/30 pt-8 space-y-10 text-purple-100 leading-relaxed text-[15px]">

            {/* Who We Are */}
            <section>
              <h3 className="text-lg font-bold text-purple-300 mb-3">Who We Are</h3>
              <p>
                AWS Cloud Club CHARUSAT is the official AWS-recognised student community at Charotar University of Science and Technology, Changa, Gujarat. We are part of the global AWS Cloud Clubs program — a network of student-led communities built around one shared goal: making cloud technology accessible, practical, and exciting for the next generation of builders.
              </p>
              <p className="mt-3">
                Our mission is simple — bring developers under one roof, and let learning and teaching happen together. Every session, every workshop, every event is built around that idea.
              </p>
              <p className="mt-3 text-purple-400 text-sm">
                🌐{" "}
                <a href="https://asc.charusat.ac.in" target="_blank" rel="noopener noreferrer" className="hover:text-purple-200 underline underline-offset-2">
                  asc.charusat.ac.in
                </a>
              </p>
            </section>

            {/* What We Do */}
            <section>
              <h3 className="text-lg font-bold text-purple-300 mb-3">What We Do</h3>
              <p className="italic text-purple-200 mb-3">We believe the best way to learn cloud is to use it.</p>
              <p>
                The club bridges the gap between classroom theory and real-world cloud practice. From hands-on AWS workshops to expert-led sessions on emerging technologies, everything we do is aimed at giving students experience they can carry forward into internships, careers, and projects of their own.
              </p>
              <p className="mt-4 text-purple-300 font-medium">Some of what we&apos;ve hosted:</p>
              <ul className="mt-3 space-y-3">
                {events.map((e) => (
                  <li key={e.name} className="flex gap-3">
                    <span className="text-purple-500 mt-0.5 shrink-0">▸</span>
                    <span>
                      <span className="font-semibold text-white">{e.name}</span> — {e.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* People Behind It */}
            <section>
              <h3 className="text-lg font-bold text-purple-300 mb-5">The People Behind It</h3>

              {/* Mentors */}
              <div className="mb-6">
                <p className="text-xs font-semibold text-purple-400 uppercase tracking-widest mb-3">Our Mentors</p>
                <p className="text-sm text-purple-300 mb-3">
                  The club is guided by three faculty leads who bring both academic depth and real-world cloud expertise:
                </p>
                <ul className="space-y-2">
                  {[
                    { name: "Dr. Purvi Prajapati", role: "Faculty Conveyor & Club Lead" },
                    { name: "Sanket Suthar", role: "Club Lead" },
                    { name: "Sandip Patel", role: "AWS Accredited Instructor, AWS Community Builder & Club Lead" },
                  ].map((m) => (
                    <li key={m.name} className="flex gap-3">
                      <span className="text-purple-500 shrink-0">▸</span>
                      <span>
                        <span className="font-medium text-white">{m.name}</span>
                        <span className="text-purple-400"> — </span>
                        <span className="text-purple-300">{m.role}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Captain */}
              <div className="mb-6">
                <p className="text-xs font-semibold text-purple-400 uppercase tracking-widest mb-3">Club Captain</p>
                <p>
                  <span className="font-medium text-white">Jiya Thakkar</span> leads the club as Captain — driving the vision, the community, and the culture that makes AWS Cloud Club CHARUSAT what it is.
                </p>
              </div>

              {/* Team */}
              <div>
                <p className="text-xs font-semibold text-purple-400 uppercase tracking-widest mb-3">Our Team</p>
                <p className="text-sm text-purple-300 mb-4">
                  The club runs on the collective effort of a talented, enthusiastic, and multidisciplinary student team:
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {teamGroups.map((t) => (
                    <div key={t.dept} className="bg-purple-950/20 border border-purple-600/20 rounded-lg p-4">
                      <p className="text-purple-400 text-xs font-semibold uppercase tracking-wide mb-1">{t.dept}</p>
                      <p className="text-white text-sm">{t.members}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Why Join */}
            <section>
              <h3 className="text-lg font-bold text-purple-300 mb-3">Why Join?</h3>
              <p>Being part of AWS Cloud Club CHARUSAT means more than attending sessions. It means:</p>
              <ul className="mt-3 space-y-2">
                {[
                  "Hands-on exposure to real AWS services — not just slides and theory",
                  "Access to a wider network of cloud professionals, AWS Community Builders, and industry experts",
                  "Opportunities to contribute — as a speaker, organiser, designer, developer, or community builder",
                  "A head start — cloud skills are among the most in-demand in tech, and you'll be building them while still in university",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-purple-500 mt-0.5 shrink-0">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Whether you&apos;re just getting started or already tinkering with the cloud, there&apos;s a place for you here.
              </p>
              <p className="mt-3 text-sm">
                <a href="/#join" className="text-purple-400 hover:text-purple-200 underline underline-offset-2">
                  🔗 Join the Club
                </a>
              </p>
            </section>

            {/* Track Record */}
            <section>
              <h3 className="text-lg font-bold text-purple-300 mb-3">Our Track Record &amp; What&apos;s Coming Next</h3>
              <p>
                In September 2024, AWS Student Community Day at CHARUSAT brought together over{" "}
                <span className="font-semibold text-white">500 attendees</span> — students and community members from across Gujarat. What made it truly special wasn&apos;t just the scale, but the calibre of people who showed up to speak.
              </p>
              <p className="mt-4 text-purple-300 font-medium">
                The speaker lineup brought together voices from AWS, the industry, and the startup world:
              </p>

              <div className="mt-5 grid md:grid-cols-2 gap-4">
                {/* AWS Speakers */}
                <div className="bg-purple-950/20 border border-purple-600/20 rounded-lg p-4">
                  <p className="text-xs font-semibold text-purple-400 uppercase tracking-widest mb-3">From AWS</p>
                  <ul className="space-y-2">
                    {awsFromSpeakers.map((s) => (
                      <li key={s.name} className="text-sm">
                        <span className="font-medium text-white">{s.name}</span>
                        <span className="text-purple-400 block text-xs mt-0.5">{s.role}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Industry Speakers */}
                <div className="bg-purple-950/20 border border-purple-600/20 rounded-lg p-4">
                  <p className="text-xs font-semibold text-purple-400 uppercase tracking-widest mb-3">From the Industry</p>
                  <ul className="space-y-2">
                    {industrySpeakers.map((s) => (
                      <li key={s.name} className="text-sm">
                        <span className="font-medium text-white">{s.name}</span>
                        <span className="text-purple-400 block text-xs mt-0.5">{s.role}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="mt-5">
                Speakers came from across the country. AWS sent some of its finest. The community showed up in full. It was a milestone that reflected the strength and energy of what this community has become.
              </p>
              <p className="mt-3">That event set a bar. And we intend to raise it.</p>
              <p className="mt-3">
                <span className="font-semibold text-white">Student Community Day 2026</span> will be entirely by the students, for the students, and of the students. No outsourcing the experience — every session, every detail, every moment planned and delivered by the community itself. That&apos;s never been done quite like this before.
              </p>
              <p className="mt-3">
                We&apos;re not ready to say much more just yet. But watch this space — the announcement is coming, and you won&apos;t want to miss it. 👀
              </p>
            </section>

            {/* Article Footer */}
            <div className="border-t border-purple-600/30 pt-6 text-sm text-purple-400">
              <p className="font-medium text-purple-300 mb-2">
                AWS Cloud Club CHARUSAT · Charotar University of Science and Technology, Changa, Gujarat
              </p>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-y-1 sm:gap-x-5">
                <a href="mailto:awscloudclub@charusat.ac.in" className="hover:text-purple-200 break-all">
                  📧 awscloudclub@charusat.ac.in
                </a>
                <a href="https://asc.charusat.ac.in" target="_blank" rel="noopener noreferrer" className="hover:text-purple-200">
                  🌐 asc.charusat.ac.in
                </a>
                <a href="https://instagram.com/awscloudclubs_charusat" target="_blank" rel="noopener noreferrer" className="hover:text-purple-200">
                  📸 @awscloudclubs_charusat
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* ── Divider ── */}
        <div className="border-t border-purple-600/30 mb-14" />

        {/* ── More Posts ── */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-purple-200 mb-6">More Posts</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {otherPosts.map((post) => (
              <div
                key={post.title}
                className="bg-black border border-purple-600/30 rounded-xl p-6 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-200"
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 bg-purple-900/50 text-purple-300 text-xs rounded-full border border-purple-600/30">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-base font-bold text-white mb-2 leading-snug">{post.title}</h3>
                <p className="text-purple-300 text-sm mb-4 leading-relaxed">{post.excerpt}</p>
                <p className="text-purple-500 text-xs">{post.date}</p>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* ── Scroll Velocity Banner ── */}
      <div className="w-full overflow-hidden py-6">
        <ScrollVelocity
          texts={["AWS CLOUD CLUB☁️CHARUSAT☁️", "AWS CLOUD CLUB☁️CHARUSAT☁️"]}
          velocity={80}
          className="text-purple-400/70 font-bold"
        />
      </div>

    </div>
  );
}
