import Advisor from "@/components/Advisor";
import Alumni from "@/components/Alumni";
import Captains from "@/components/Captains";
import Mentors from "@/components/Mentors";
import Team from "@/components/Team";

export default function TeamPage() {
  return (
    <main className="pt-12">
      <Mentors />
      <Captains />
      {/* <Advisor /> */}
      <Team />
      {/* <Alumni /> */}
    </main>
  );
}
