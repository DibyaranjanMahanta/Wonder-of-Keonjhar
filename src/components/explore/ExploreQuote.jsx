import { Quote } from "lucide-react";

export default function ExploreQuote() {
  return (
    <section className="bg-sand py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-[2rem] bg-forest-dark px-6 py-20 text-center sm:px-12 sm:py-24 lg:px-20 lg:py-28">
          
          {/* Decorative circle — top left */}
          <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full border border-sand/10" />

          {/* Decorative circle — bottom right */}
          <div className="absolute -bottom-40 -right-24 h-80 w-80 rounded-full border border-gold/10" />

          {/* Small gold dot */}
          <div className="absolute right-10 top-16 h-3 w-3 rounded-full bg-gold/70" />

          <div className="relative z-10 mx-auto max-w-5xl">
            
            {/* Top label */}
            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-gold/70" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-gold-soft sm:text-xs">
                The River Begins Here
              </span>

              <span className="h-px w-12 bg-gold/70" />
            </div>

            {/* Quote icon */}
            <Quote
              size={34}
              strokeWidth={1.5}
              className="mx-auto mt-10 text-gold/70"
            />

            {/* Quote */}
            <blockquote className="mx-auto mt-10 max-w-4xl font-display text-4xl font-medium leading-[1.15] text-white sm:text-5xl lg:text-6xl">
              Keonjhar is not just a destination—
              <span className="block">
                it is a journey through waterfalls,
              </span>
              <span className="block">
                forests, history, and living traditions.
              </span>
            </blockquote>

            {/* Bottom location */}
            <div className="mt-12 flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-sand/20" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-sand/60 sm:text-xs">
                Keonjhar · Odisha · India
              </span>

              <span className="h-px w-10 bg-sand/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}