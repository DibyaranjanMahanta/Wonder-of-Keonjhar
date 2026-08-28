import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

const featuredPlaces = [
  {
    name: "Ghagra Waterfall",
    category: "Waterfall",
    location: "Keonjhar, Odisha",
    description:
      "A scenic cascade surrounded by rocky terrain and the natural landscapes of Keonjhar.",
    image: "/images/nature/ghagra-waterfall.jpg",
    href: "/explore/nature/ghagra-waterfall",
    featured: true,
  },
  {
    name: "Badaghagara Waterfall",
    category: "Waterfall",
    location: "Keonjhar, Odisha",
    description:
      "A dramatic natural attraction where cascading water meets the rugged landscape.",
    image: "/images/nature/badaghagara-waterfall.jpg",
    href: "/explore/nature/badaghagara-waterfall",
  },
  {
    name: "Gonasika",
    category: "Nature & Landscape",
    location: "Keonjhar, Odisha",
    description:
      "A distinctive natural landscape known for its hills, forests, and scenic surroundings.",
    image: "/images/nature/gonasika.jpg",
    href: "/explore/nature/gonasika",
  },
];

export default function FeaturedNature() {
  const mainPlace = featuredPlaces.find((place) => place.featured);
  const otherPlaces = featuredPlaces.filter((place) => !place.featured);

  return (
    <section className="bg-sand-deep py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Heading */}
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold">
            Featured Destinations
          </p>

          <h2 className="mt-5 font-serif text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">
            Nature at its most{" "}
            <span className="italic text-forest">breathtaking.</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-ink-soft sm:text-lg">
            Discover some of the landscapes that define Keonjhar — from
            powerful waterfalls to hills, forests, and places shaped by nature.
          </p>
        </div>

        {/* Featured Layout */}
        <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-2">
          {/* Main Featured Card */}
          <Link
            href={mainPlace.href}
            className="group relative min-h-[520px] overflow-hidden bg-forest-dark sm:min-h-[620px]"
          >
            <Image
              src={mainPlace.image}
              alt={mainPlace.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/30 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-gold-soft sm:text-xs">
                {mainPlace.category}
              </p>

              <h3 className="mt-3 font-serif text-4xl text-sand sm:text-5xl">
                {mainPlace.name}
              </h3>

              <div className="mt-4 flex items-center gap-2 text-sm text-sand/70">
                <MapPin size={15} strokeWidth={1.6} />
                <span>{mainPlace.location}</span>
              </div>

              <div className="mt-6 flex items-center gap-2 text-sm text-gold-soft">
                <span>Explore destination</span>

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>
            </div>
          </Link>

          {/* Secondary Featured Cards */}
          <div className="grid gap-6">
            {otherPlaces.map((place) => (
              <Link
                key={place.name}
                href={place.href}
                className="group grid min-h-[300px] overflow-hidden bg-sand sm:grid-cols-[1fr_1fr]"
              >
                {/* Image */}
                <div className="relative min-h-[220px] overflow-hidden sm:min-h-full">
                  <Image
                    src={place.image}
                    alt={place.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between p-6 sm:p-7">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold">
                      {place.category}
                    </p>

                    <h3 className="mt-3 font-serif text-3xl leading-tight text-ink">
                      {place.name}
                    </h3>

                    <div className="mt-4 flex items-center gap-2 text-sm text-ink-soft">
                      <MapPin size={15} strokeWidth={1.6} />
                      <span>{place.location}</span>
                    </div>

                    <p className="mt-4 text-sm leading-6 text-ink-soft">
                      {place.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-2 text-sm text-forest">
                    <span>Explore</span>

                    <ArrowUpRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}