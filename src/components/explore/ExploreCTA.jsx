import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";

export default function ExploreCTA() {
  return (
    <section className="relative overflow-hidden bg-water-dark py-20 sm:py-24 lg:py-28">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full border border-gold/40" />
        <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full border border-gold/30" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center sm:px-8 lg:px-12">
        {/* Icon */}
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/50 bg-gold/10 text-gold-soft">
          <Compass size={24} strokeWidth={1.6} />
        </div>

        {/* Label */}
        <span className="mt-7 block text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
          Your Journey Begins Here
        </span>

        {/* Heading */}
        <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
          There is always more of Keonjhar to discover.
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-sand/75 sm:text-lg">
          Follow the waterfalls, uncover stories from the past, and step into
          places where nature, history, and tradition come together.
        </p>

        {/* CTA */}
        <Link
          href="/explore/nature"
          className="group mt-10 inline-flex items-center gap-3 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-gold-soft hover:shadow-xl"
        >
          Begin Your Journey
          <ArrowRight
            size={17}
            strokeWidth={1.8}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </section>
  );
}
