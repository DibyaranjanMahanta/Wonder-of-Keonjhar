import ExplorePaths from "@/components/home/ExplorePaths";
import FinalCTA from "@/components/home/FinalCTA";
import Hero from "@/components/home/Hero";
import IntroSection from "@/components/home/IntroSection";
import StorySection from "@/components/home/StorySection";

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