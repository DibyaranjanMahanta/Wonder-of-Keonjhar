import { notFound } from "next/navigation";
import NatureDetailHero from "@/components/explore/nature/detail/NatureDetailHero";
import { natureDestinations } from "@/data/nature";
import NatureDetailIntro from "@/components/explore/nature/detail/NatureDetailIntro";

export function generateStaticParams() {
  return natureDestinations.map((place) => ({
    slug: place.slug,
  }));
}

export default async function NatureDetailPage({ params }) {
  const { slug } = await params;

  const place = natureDestinations.find(
    (item) => item.slug === slug
  );

  if (!place) {
    notFound();
  }

  return (
    <>
      <NatureDetailHero place={place} />
      <NatureDetailIntro place={place} />
    </>
  );
}