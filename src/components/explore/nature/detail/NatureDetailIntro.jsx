export default function NatureDetailIntro({ place }) {
  return (
    <section className="bg-sand py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:gap-20">
          {/* About */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold">
              About the Place
            </p>

            <h2 className="mt-4 font-serif text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
              A closer look at{" "}
              <span className="italic text-forest">{place.name}.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-ink-soft sm:text-lg sm:leading-9">
              {place.description}
            </p>
          </div>

          {/* Quick Facts */}
          <div className="lg:border-l lg:border-sand-deep lg:pl-10">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold">
              Quick Facts
            </p>

            <div className="mt-6 divide-y divide-sand-deep border-y border-sand-deep">
              <div className="py-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-soft">
                  Category
                </p>

                <p className="mt-1 font-serif text-xl text-ink">
                  {place.category}
                </p>
              </div>

              <div className="py-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-soft">
                  Location
                </p>

                <p className="mt-1 font-serif text-xl text-ink">
                  {place.location}
                </p>
              </div>

              {place.bestTime && (
                <div className="py-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-soft">
                    Best Time
                  </p>

                  <p className="mt-1 font-serif text-xl text-ink">
                    {place.bestTime}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}