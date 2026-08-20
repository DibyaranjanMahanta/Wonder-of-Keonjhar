export default function IntroSection() {
  return (
    <section className="bg-sand">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 md:py-20 lg:px-12 lg:py-20">
        {/* Main Introduction */}
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Left Column */}
          <div className="flex flex-col">
            {/* Section Label */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-gold" />

              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
                An Introduction
              </p>
            </div>

            {/* Heading */}
            <h2 className="max-w-lg font-serif text-4xl font-normal leading-[1.08] tracking-[-0.025em] text-ink sm:text-6xl lg:text-[4.25rem]">
              Half forest, half legend —
              <span className="block">all Odisha.</span>
            </h2>

            {/* Quick Facts */}
            <div className="mt-10 flex items-center gap-4 sm:mt-12 lg:mt-16">
              <span className="text-xl leading-none text-gold">✦</span>

              <p className="text-sm font-medium tracking-wide text-ink-soft">
                8,303 km² · 6 sub-divisions · 1.8M+ people
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-end">
            {/* Description */}
            <div className="max-w-2xl">
              <p className="text-base leading-8 text-ink-soft sm:text-[17px] sm:leading-9">
                Tucked into the northern plateau of Odisha, Keonjhar is where
                the sacred Baitarani river is born, where waterfalls like
                Khandadhar and Badaghagara tumble from forested ridges, and
                where communities continue traditions rooted deeply in the
                landscape.
              </p>

              <p className="mt-6 text-base leading-8 text-ink-soft sm:text-[17px] sm:leading-9">
                This is a district shaped by three forces —{" "}
                <strong className="font-medium text-forest">nature</strong>,{" "}
                <strong className="font-medium text-forest">heritage</strong>{" "}
                &{" "}
                <strong className="font-medium text-terracotta">
                  culture
                </strong>
                . Together they make Keonjhar one of Odisha's most rewarding
                destinations.
              </p>
            </div>

            {/* Exploration Labels */}
            <div className="mt-8 grid grid-cols-2 border-t border-sand-deep sm:mt-10 sm:grid-cols-4">
              {["Nature", "Heritage", "Temples", "Culture"].map((label) => (
                <div
                  key={label}
                  className="group border-b border-r border-sand-deep px-3 py-4 text-center transition-all duration-300 hover:rounded-md hover:bg-sand-deep/30"
                >
                  <span className="inline-block text-[10px] uppercase tracking-[0.16em] text-forest transition-colors duration-300 group-hover:text-gold">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}