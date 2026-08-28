import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

const destinations = [
  {
    name: "Sanaghagara Waterfall",
    category: "Natural Wonder",
    location: "Keonjhar",
    image: "/images/destinations/sanaghagara.jpg",
    href: "/explore/nature/sanaghagara-waterfall",
  },
  {
    name: "Gonasika",
    category: "Natural Wonder",
    location: "Keonjhar",
    image: "/images/destinations/gonasika.jpg",
    href: "/explore/nature/gonasika",
  },
  {
    name: "Sitabinj",
    category: "Heritage",
    location: "Keonjhar",
    image: "/images/destinations/sitabinj.jpg",
    href: "/explore/heritage/sitabinj",
  },
  {
    name: "Siddha Jagannath Temple",
    category: "Temple",
    location: "Keonjhar",
    image: "/images/destinations/siddha-jagannath.jpg",
    href: "/explore/temples/siddha-jagannath-temple",
  },
];

export default function FeaturedDestinations() {
  return (
    <section className="bg-sand py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Heading */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="section-label">Featured Destinations</span>

            <h2 className="section-title mt-2">Places worth discovering.</h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-ink-soft md:text-right">
            Begin with some of Keonjhar&apos;s most remarkable places and
            discover the stories, landscapes, and traditions that make each one
            unique.
          </p>
        </div>

        {/* Destination Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {destinations.map(({ name, category, location, image, href }) => (
            <Link
              key={name}
              href={href}
              className="group overflow-hidden border border-sand-deep bg-sand transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden bg-forest-dark">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                  style={{
                    backgroundImage: `url('${image}')`,
                  }}
                />

                {/* Category */}
                <span className="absolute left-4 top-4 bg-sand/95 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-forest-dark">
                  {category}
                </span>

                {/* Arrow */}
                <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-forest-dark/80 text-sand opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                  <ArrowUpRight size={17} strokeWidth={1.8} />
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-display text-2xl font-semibold text-forest-dark">
                  {name}
                </h3>

                <div className="mt-3 flex items-center gap-2 text-xs text-ink-soft">
                  <MapPin size={14} strokeWidth={1.7} className="text-gold" />

                  <span>{location}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
