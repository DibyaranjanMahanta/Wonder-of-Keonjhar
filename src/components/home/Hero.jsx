import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-forest-dark">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero/keonjhar-hero.png')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-forest-dark/65" />

      {/* Left Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/85 via-forest-dark/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-24">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-gold" />

            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-soft">
              Keonjhar · Odisha · India
            </p>
          </div>

          {/* Heading */}
          <h1 className="max-w-4xl font-serif text-[2rem] font-normal leading-[1.1] tracking-[-0.02em] text-sand sm:text-5xl md:text-6xl lg:text-[4.5rem]">
            Where waterfalls roar,
            <span className="block">and the forest remembers.</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-sm leading-7 text-sand/85 sm:mt-7 sm:text-lg sm:leading-8">
            Welcome to Keonjhar — a district of forested hills, sacred rivers,
            ancient heritage and vibrant communities rooted in the landscape of
            Odisha.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:items-center">
            {/* Explore CTA */}
            <Link
              href="/explore"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-gold-soft"
            >
              Start Exploring
              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <Link
              href="/about"
              className="group inline-flex items-center justify-center gap-3 rounded-full border border-sand/80 bg-forest-dark/40 px-7 py-3.5 text-sm font-semibold text-white shadow-md backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-sand hover:bg-sand hover:text-forest-dark hover:shadow-lg"
            >
              Discover Keonjhar
              <span className="text-lg leading-none transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center sm:flex">
        <span className="mb-3 text-[10px] uppercase tracking-[0.3em] text-sand/60">
          Scroll to explore
        </span>

        <span className="h-10 w-px bg-sand/40" />
      </div>
    </section>
  );
}
