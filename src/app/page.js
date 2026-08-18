import ExplorePaths from "@/components/sections/ExplorePaths";
import FinalCTA from "@/components/sections/FinalCTA";
import Hero from "@/components/sections/Hero";
import IntroSection from "@/components/sections/IntroSection";
import StorySection from "@/components/sections/StorySection";

export default function Home() {
  return (
    <main>
      <Hero />
      <IntroSection/>
      <ExplorePaths/>
      <StorySection/>
      <FinalCTA/>
    </main>
  );
}