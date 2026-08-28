import Link from "next/link";
import { ArrowDown, Compass } from "lucide-react";

export default function ExploreHero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-forest-dark">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero/explore-keonjhar.png')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/95 via-forest-dark/75 to-forest-dark/40" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-gold" />

            <div className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-gold-soft">
              <Compass size={16} strokeWidth={1.8} />
              Discover Keonjhar
            </div>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-5xl leading-[0.95] text-sand sm:text-6xl lg:text-7xl">
            Explore the
            <span className="block text-gold-soft">Wonders of Keonjhar</span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-2xl text-base leading-8 text-sand/75 sm:text-lg">
            Journey through cascading waterfalls, ancient heritage, sacred
            temples, and landscapes shaped by nature, history, and tradition.
          </p>

          {/* CTA */}
          <Link
            href="#categories"
            className="mt-10 inline-flex items-center gap-3 rounded-sm bg-gold px-7 py-4 text-sm font-semibold text-forest-dark shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-gold-soft hover:shadow-xl"
          >
            Begin Exploring
            <ArrowDown
              size={17}
              strokeWidth={2}
              className="transition-transform duration-300 group-hover:translate-y-1"
            />
          </Link>
        </div>
      </div>

      {/* Bottom detail */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-sand/15" />

      <div className="absolute bottom-8 right-6 hidden items-center gap-3 text-xs uppercase tracking-[0.2em] text-sand/50 sm:flex lg:right-12">
        <span>Nature</span>
        <span className="h-1 w-1 rounded-full bg-gold" />
        <span>Heritage</span>
        <span className="h-1 w-1 rounded-full bg-gold" />
        <span>Temples</span>
      </div>
    </section>
  );
}
