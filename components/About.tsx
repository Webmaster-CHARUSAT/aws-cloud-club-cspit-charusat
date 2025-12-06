import { GoogleGeminiEffectDemo } from "./animations-ui/google-gemini-effect-demo";

export default function About() {
  return (
    <div className="relative bg-black">
      <div className="mx-auto max-w-7xl py-16 px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mt-1 text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-500 to-purple-200 bg-clip-text text-transparent">
            What is AWS Cloud Club CHARUSAT ?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-xl text-purple-100">
            Together as a team AWS Cloud Club CHARUSAT aims to provide a
            platform for the intellectuals to learn and explore the cloud
            fundamentals of AWS. AS part of the club we assure that every
            individual gets something productive out of this cub. AWS Cloud Club
            CHARUSAT intends to bring developers under one roof to create a
            community to inspire many. The club will be channeled into
            propagating learning and teaching symbiotically.
          </p>
        </div>
      </div>
      {/* Google Gemini Effect Section */}
      <div className="relative">
        <GoogleGeminiEffectDemo />
      </div>
    </div>
  );
}
