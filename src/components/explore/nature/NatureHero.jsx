import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function NatureHero() {
  return (
    <section className="relative flex min-h-[85vh] items-end overflow-hidden bg-forest-dark">
      {/* Background Image */}
      <Image
        src="/images/nature/nature-hero.jpg"
        alt="Natural landscape of Keonjhar"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/55 to-black/20" />

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-7xl px-5 pb-14 sm:px-8 sm:pb-16 lg:px-10 lg:pb-20">
          <div className="max-w-3xl">
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.28em] text-gold-soft sm:text-sm">
              Natural Wonders
            </p>

            <h1 className="font-serif text-5xl leading-[0.95] text-sand sm:text-6xl md:text-7xl lg:text-8xl">
              Where nature
              <br />
              <span className="italic text-gold-soft">still feels wild.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-sand/75 sm:text-lg sm:leading-8">
              Discover the waterfalls, forests, hills, rivers, and landscapes
              that make Keonjhar one of Odisha&apos;s most naturally beautiful
              regions.
            </p>
          </div>

          {/* Bottom bar */}
          <div className="mt-14 flex items-end justify-between border-t border-sand/20 pt-5 sm:mt-16">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-sand/50 sm:text-xs">
              Explore the landscapes of Keonjhar
            </p>

            <ArrowDown
              size={20}
              strokeWidth={1.5}
              className="animate-bounce text-gold-soft"
            />
          </div>
        </div>
      </div>
    </section>
  );
}