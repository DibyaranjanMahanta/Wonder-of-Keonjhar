import { Leaf, Waves, Mountain, Trees } from "lucide-react";

const highlights = [
  {
    icon: Waves,
    title: "Waterfalls",
    description: "Discover cascading waterfalls hidden among the hills and forests.",
  },
  {
    icon: Mountain,
    title: "Hills & Landscapes",
    description: "Explore scenic hills, valleys, and wide natural landscapes.",
  },
  {
    icon: Trees,
    title: "Forests",
    description: "Walk through landscapes shaped by dense forests and rich biodiversity.",
  },
  {
    icon: Leaf,
    title: "Rivers & Nature",
    description: "Experience rivers, green surroundings, and peaceful natural spaces.",
  },
];

export default function NatureIntro() {
  return (
    <section className="bg-sand py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          {/* Left */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold">
              The Landscape
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">
              A land shaped
              <br />
              by <span className="italic text-forest">water and wilderness.</span>
            </h2>
          </div>

          {/* Right */}
          <div className="lg:pt-3">
            <p className="max-w-2xl text-base leading-8 text-ink-soft sm:text-lg sm:leading-9">
              Keonjhar is a landscape where rivers cut through ancient hills,
              waterfalls descend through rocky terrain, and forests stretch
              across the horizon. Every journey reveals a different side of
              its natural character.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-ink-soft sm:text-lg sm:leading-9">
              From popular destinations to quieter corners waiting to be
              discovered, these landscapes offer experiences for travellers,
              photographers, and anyone looking to reconnect with nature.
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-16 grid gap-px overflow-hidden border border-sand-deep bg-sand-deep sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
          {highlights.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group bg-sand p-7 transition-colors duration-300 hover:bg-forest"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-forest/10 text-forest transition-colors duration-300 group-hover:bg-gold/15 group-hover:text-gold-soft">
                <Icon size={20} strokeWidth={1.6} />
              </div>

              <h3 className="mt-7 font-serif text-2xl text-ink transition-colors duration-300 group-hover:text-sand">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-ink-soft transition-colors duration-300 group-hover:text-sand/70">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}