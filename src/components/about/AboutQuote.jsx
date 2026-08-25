export default function AboutQuote() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-3xl bg-forest px-6 py-16 text-center sm:px-12 sm:py-20 lg:px-20 lg:py-24">
          
          {/* Decorative lines */}
          <div className="absolute left-0 top-0 h-px w-full bg-gold/30" />
          <div className="absolute bottom-0 left-0 h-px w-full bg-gold/30" />

          {/* Decorative circle */}
          <div className="absolute -left-24 -top-24 h-56 w-56 rounded-full border border-sand/10" />
          <div className="absolute -bottom-32 -right-20 h-72 w-72 rounded-full border border-gold/10" />

          <div className="relative z-10">
            {/* Eyebrow */}
            <div className="mb-8 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-gold" />

              <p className="font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-gold">
                The land and its story
              </p>

              <span className="h-px w-10 bg-gold" />
            </div>

            {/* Decorative quote mark */}
            <div className="mb-4 font-serif text-6xl leading-none text-gold/70 sm:text-7xl">
              “
            </div>

            {/* Quote */}
            <blockquote className="mx-auto max-w-4xl font-serif text-3xl leading-[1.2] text-sand sm:text-4xl lg:text-5xl">
              Keonjhar is a land shaped by ancient rivers, forested hills and
              generations of people who have called this plateau home.
            </blockquote>

            {/* Bottom location */}
            <div className="mt-10 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-sand/30" />

              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-sand/60">
                Kendujhar · Odisha
              </p>

              <span className="h-px w-8 bg-sand/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}