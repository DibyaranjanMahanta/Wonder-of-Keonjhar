import Image from "next/image";
import { MapPin } from "lucide-react";

export default function NatureDetailHero({ place }) {
  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-forest-dark">
      {/* Background Image */}
      <Image
        src={place.image}
        alt={place.name}
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/45 to-black/10" />

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-7xl px-5 pb-12 sm:px-8 sm:pb-16 lg:px-10 lg:pb-20">
          <div className="max-w-4xl">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold-soft sm:text-sm">
              Natural Wonders
            </p>

            <h1 className="mt-5 font-serif text-5xl leading-[0.95] text-sand sm:text-6xl md:text-7xl lg:text-8xl">
              {place.name}
            </h1>

            <div className="mt-6 flex items-center gap-2 text-sm text-sand/75 sm:text-base">
              <MapPin size={17} strokeWidth={1.5} />
              <span>{place.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}