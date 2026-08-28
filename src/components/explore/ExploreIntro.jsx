import { Leaf, Landmark, MapPinned } from "lucide-react";

const paths = [
  {
    icon: Leaf,
    title: "Natural Wonders",
    description:
      "Waterfalls, forests, hills, and landscapes that reveal the wild beauty of Keonjhar.",
  },
  {
    icon: Landmark,
    title: "Heritage",
    description:
      "Ancient places, historic landmarks, and stories shaped across generations.",
  },
  {
    icon: MapPinned,
    title: "Sacred Places",
    description:
      "Temples and spiritual spaces that reflect the region's deep cultural traditions.",
  },
];

export default function ExploreIntro() {
  return (
    <section className="bg-sand py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Intro */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-label">
            Three Ways to Explore
          </span>

          <h2 className="section-title mt-2">
            Every journey begins with a different path.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-ink-soft sm:text-lg">
            From the untamed beauty of nature to stories carved in history
            and places of deep spiritual significance, Keonjhar offers
            experiences waiting to be discovered.
          </p>
        </div>

        {/* Paths */}
        <div className="mt-14 grid gap-6 md:grid-cols-3 lg:mt-16">
          {paths.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group border border-sand-deep bg-sand p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-lg sm:p-8"
            >
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-forest/10 text-forest transition-all duration-300 group-hover:bg-forest group-hover:text-sand">
                <Icon size={21} strokeWidth={1.7} />
              </div>

              {/* Content */}
              <h3 className="mt-6 font-display text-2xl font-semibold text-forest-dark">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-ink-soft">
                {description}
              </p>

              {/* Decorative line */}
              <div className="mt-6 h-px w-10 bg-gold transition-all duration-300 group-hover:w-16" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}