import FeaturedNature from "@/components/explore/nature/FeaturedNature";
import NatureCTA from "@/components/explore/nature/NatureCTA";
import NatureDestinations from "@/components/explore/nature/NatureDestinations";
import NatureHero from "@/components/explore/nature/NatureHero";
import NatureIntro from "@/components/explore/nature/NatureIntro";

export const metadata = {
  title: "Natural Wonders | Wonders of Keonjhar",
  description:
    "Explore the waterfalls, forests, hills, rivers, and breathtaking natural landscapes of Keonjhar, Odisha.",
};

export default function NaturePage() {
  return (
    <>
      <NatureHero />
      <NatureIntro/>
      <FeaturedNature/>
      <NatureDestinations/>
      <NatureCTA/>
    </>
  );
}