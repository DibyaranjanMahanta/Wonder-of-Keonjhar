import Link from "next/link";
import {
  Leaf,
  Mountain,
  UsersRound,
  ArrowUpRight,
  Landmark,
} from "lucide-react";

export default function ExplorePaths() {
  return (
    <section className="bg-sand">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 md:py-24 lg:px-12 lg:py-24">
        {/* Section Header */}
        <div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            {/* Eyebrow */}
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-gold" />

              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
                Four Ways to Explore
              </p>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-4xl font-normal leading-[1.08] tracking-[-0.025em] text-ink sm:text-5xl lg:text-6xl">
              Pick a path. The district reveals itself.
            </h2>
          </div>

          {/* Tourism Hub Link */}
          <Link
            href="/explore"
            className="group flex w-fit flex-col text-sm font-medium text-forest"
          >
            <span>View all in Tourism Hub</span>

            <span className="mt-1 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <ExploreCard
            number="01"
            title="Nature"
            description="Badaghagara, Khandadhar, Gonasika — plus the Thakuranihill range and the mighty Baitarani river."
            href="/explore/nature"
            icon={Leaf}
          />

          <ExploreCard
            number="02"
            title="Heritage"
            description="Sitabinji's 6th-century murals, Ravanachhaya shelters and the legacy of the Bhauma-Kara age."
            href="/explore/heritage"
            icon={Mountain}
          />

          <ExploreCard
            number="03"
            title="Temples"
            description="Kushaleswar, Murga Mahadev and Baladevjeew — living centres of faith and Kalinga architecture."
            href="/explore/temples"
            icon={Landmark}
          />

          <ExploreCard
            number="04"
            title="Culture"
            description="Tribal lifeways, Changu dances, sabai grass crafts and festivals rooted in forest and field."
            href="/culture"
            icon={UsersRound}
          />
        </div>
      </div>
    </section>
  );
}

function ExploreCard({
  number,
  title,
  description,
  href,
  icon: Icon,
}) {
  return (
    <Link
      href={href}
      className="group relative flex min-h-[345px] flex-col rounded-2xl border border-sand-deep bg-sand-deep/20 p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-sand-deep sm:p-9"
    >
      {/* Top Row */}
      <div className="flex items-start justify-between">
        {/* Icon */}
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-forest">
          <Icon
            size={24}
            strokeWidth={1.6}
            className="text-sand"
            aria-hidden="true"
          />
        </div>

        {/* Arrow */}
        <ArrowUpRight
          size={21}
          strokeWidth={1.5}
          className="text-ink-soft transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="mt-9">
        {/* Category */}
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
          {title}
        </p>

        {/* Title */}
        <h3 className="font-serif text-2xl font-normal leading-tight tracking-[-0.015em] text-ink sm:text-[1.7rem]">
          {getCardHeading(title)}
        </h3>

        {/* Description */}
        <p className="mt-5 text-sm leading-7 text-ink-soft">
          {description}
        </p>
      </div>
    </Link>
  );
}

function getCardHeading(title) {
  const headings = {
    Nature: "Waterfalls, hills & forests",
    Heritage: "Rock art & ancient sites",
    Temples: "Shrines of the Baitarani",
    Culture: "Juang, Bhuyan, Santhal",
  };

  return headings[title];
}