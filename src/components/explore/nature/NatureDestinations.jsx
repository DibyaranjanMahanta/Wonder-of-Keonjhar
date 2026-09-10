"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { natureDestinations } from "@/data/nature";

const filters = [
  "All",
  "Waterfalls",
  "Hills",
  "Forests",
  "Scenic Places",
];

export default function NatureDestinations() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredDestinations =
    activeFilter === "All"
      ? natureDestinations
      : natureDestinations.filter(
          (place) => place.category === activeFilter
        );

  return (
    <section className="bg-sand py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold">
              Explore More
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">
              Every path leads
              <br />
              <span className="italic text-forest">
                somewhere remarkable.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-ink-soft sm:text-lg">
              Explore more natural destinations across Keonjhar, from
              cascading waterfalls to peaceful landscapes and forested hills.
            </p>
          </div>

          {/* Destination Count */}
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-ink-soft">
            {filteredDestinations.length}{" "}
            {filteredDestinations.length === 1
              ? "Destination"
              : "Destinations"}
          </div>
        </div>

        {/* Filters */}
        <div className="mt-10 flex gap-2 overflow-x-auto pb-2 scrollbar-hide sm:mt-14">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`shrink-0 border px-5 py-2.5 text-xs uppercase tracking-[0.12em] transition-all duration-300 ${
                  isActive
                    ? "border-forest bg-forest text-sand"
                    : "border-sand-deep bg-transparent text-ink-soft hover:border-forest hover:text-forest"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Destination Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {filteredDestinations.map((place) => (
            <Link
              key={place.slug}
              href={`/explore/nature/${place.slug}`}
              className="group overflow-hidden bg-sand-deep"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-forest-dark">
                <Image
                  src={place.image}
                  alt={place.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Category */}
                <div className="absolute left-4 top-4 bg-sand/90 px-3 py-1.5 backdrop-blur-sm">
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-forest">
                    {place.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-2xl text-ink transition-colors duration-300 group-hover:text-forest">
                      {place.name}
                    </h3>

                    <div className="mt-2 flex items-center gap-1.5 text-sm text-ink-soft">
                      <MapPin size={14} strokeWidth={1.6} />
                      <span>{place.location}</span>
                    </div>
                  </div>

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/10 text-forest transition-all duration-300 group-hover:border-forest group-hover:bg-forest group-hover:text-sand">
                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.6}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </div>

                <p className="mt-4 text-sm leading-6 text-ink-soft">
                  {place.description}
                </p>

                <div className="mt-5 border-t border-ink/10 pt-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-forest">
                    Explore destination
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredDestinations.length === 0 && (
          <div className="mt-12 border border-sand-deep px-6 py-16 text-center">
            <p className="font-serif text-2xl text-ink">
              More destinations coming soon.
            </p>

            <p className="mt-3 text-sm text-ink-soft">
              We&apos;re continuing to discover the natural wonders of
              Keonjhar.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}