export default function StorySection() {
  return (
    <section className="bg-sand">
      <div className="mx-auto flex max-w-6xl items-center justify-center px-6 py-20 sm:px-8 lg:py-24">
        <div className="max-w-4xl text-center">
          {/* Eyebrow */}
          <p className="mb-8 text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            The River Begins Here
          </p>

          {/* Main Statement */}
          <h2 className="font-serif text-[1.65rem] font-normal leading-[1.25] tracking-[-0.01em] text-ink sm:text-4xl lg:text-5xl">
            " The Baitarani rises in the hills of Keonjhar — a river that has
            shaped the land, its forests, and the lives around it. "
          </h2>

          {/* Location */}
          <div className="mt-9 flex items-center justify-center gap-3">
            <span className="h-px w-6 bg-gold" />

            <p className="text-xs font-medium uppercase tracking-[0.25em] text-water">
              Gonasika · Keonjhar
            </p>

            <span className="h-px w-6 bg-gold" />
          </div>
        </div>
      </div>
    </section>
  );
}
