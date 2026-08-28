import Link from "next/link";
import { ArrowUpRight, Leaf, Mountain, Landmark } from "lucide-react";

const categories = [
  {
    title: "Natural Wonders",
    description:
      "Discover waterfalls, dense forests, hills, rivers, and landscapes shaped by the wild beauty of Keonjhar.",
    href: "/explore/nature",
    image: "/images/hero/about-keonjhar.png",
    icon: Leaf,
    number: "01",
  },
  {
    title: "Heritage",
    description:
      "Step into places where history, architecture, and centuries of stories continue to shape the region.",
    href: "/explore/heritage",
    image: "/images/explore/heritage.jpg",
    icon: Mountain,
    number: "02",
  },
  {
    title: "Temples",
    description:
      "Explore sacred temples and spiritual landmarks rooted in the traditions and faith of Keonjhar.",
    href: "/explore/temples",
    image: "/images/explore/temples.jpg",
    icon: Landmark,
    number: "03",
  },
];

export default function ExploreCategories() {
  return (
    <section
      id="categories"
      className="bg-sand-deep py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Section heading */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="section-label">
              Choose Your Journey
            </span>

            <h2 className="section-title mt-2">
              Find the side of Keonjhar that speaks to you.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-ink-soft md:text-right">
            Follow the path that interests you most, or explore them all and
            experience Keonjhar from different perspectives.
          </p>
        </div>

        {/* Category cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:mt-16">
          {categories.map(
            ({
              title,
              description,
              href,
              image,
              icon: Icon,
              number,
            }) => (
              <Link
                key={title}
                href={href}
                className="group relative min-h-[440px] overflow-hidden bg-forest-dark"
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{
                    backgroundImage: `url('${image}')`,
                  }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/60 to-forest-dark/10 transition-colors duration-300 group-hover:from-forest-dark/95 group-hover:via-forest-dark/50" />

                {/* Number */}
                <span className="absolute right-6 top-6 text-sm font-medium tracking-[0.2em] text-sand/70">
                  {number}
                </span>

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-7 sm:p-8">
                  {/* Icon */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-sand/30 bg-sand/10 text-sand backdrop-blur-sm transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-forest-dark">
                    <Icon size={20} strokeWidth={1.7} />
                  </div>

                  <h3 className="mt-6 font-display text-3xl font-semibold text-sand">
                    {title}
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-7 text-sand/75">
                    {description}
                  </p>

                  {/* Explore link */}
                  <div className="mt-6 flex items-center gap-3 text-sm font-semibold text-gold-soft">
                    <span>Explore</span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/50 transition-all duration-300 group-hover:bg-gold group-hover:text-forest-dark">
                      <ArrowUpRight
                        size={17}
                        strokeWidth={1.8}
                      />
                    </span>
                  </div>
                </div>
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  );
}