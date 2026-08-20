import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="bg-water-dark">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-20 text-center sm:px-8 lg:px-12 lg:py-24">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="mb-7 text-xs font-semibold uppercase tracking-[0.28em] text-gold-soft">
            Discover Keonjhar
          </p>

          {/* Heading */}
          <h2 className="font-serif text-3xl font-normal leading-[1.15] tracking-[-0.015em] text-sand sm:text-4xl lg:text-5xl">
            There is more to discover beyond the familiar.
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-sand/70 sm:text-base">
            Explore the landscapes, heritage and living traditions that make
            Keonjhar a place worth discovering.
          </p>

          {/* CTA */}
          <Link
            href="/explore"
            className="group mt-9 inline-flex items-center gap-3 rounded-full bg-sand px-6 py-3.5 text-sm font-semibold text-forest transition-all duration-300 hover:bg-gold-soft"
          >
            Explore Keonjhar
            <ArrowRight
              size={17}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
