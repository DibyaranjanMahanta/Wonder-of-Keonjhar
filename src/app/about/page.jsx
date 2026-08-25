import AboutHero from "@/components/about/AboutHero";
import LocationSection from "@/components/about/LocationSection";
import HistorySection from "@/components/about/HistorySection";
import CloserLookSection from "@/components/about/CloserLookSection";
import AboutQuote from "@/components/about/AboutQuote";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <LocationSection />
      <HistorySection />
      <AboutQuote/>
      <CloserLookSection />
    </main>
  );
}