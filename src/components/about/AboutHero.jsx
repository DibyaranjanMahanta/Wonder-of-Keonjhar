import Image from "next/image";

const facts = [
  {
    label: "Area",
    value: (
      <>
        8,303 km<sup>2</sup>
      </>
    ),
  },
  { label: "Elevation", value: "595 m avg." },
  { label: "Population", value: "~1.8 million" },
  { label: "Sub-divisions", value: "3 (Keonjhar · Anandapur · Champua)" },
  { label: "Blocks", value: "13" },
  { label: "Languages", value: "Odia · Ho · Juang · Santali" },
];

export default function AboutHero() {
  return (
    <section className="bg-sand">
      {/* Hero — height grows from its own content, no fixed px value */}
      <div className="relative bg-forest-dark">
        <Image
          src="/images/hero/about-keonjhar.png"
          alt="Aerial view of Keonjhar forests"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-forest-dark/75" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-20 pb-24 sm:pt-28 sm:pb-32 md:pb-40 lg:px-12">
          <div className="mb-5 flex items-center gap-3 sm:mb-8">
            <span className="h-px w-12 bg-gold" />
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-gold sm:text-xs">
              About the district
            </p>
          </div>

          <h1 className="max-w-4xl font-serif text-4xl leading-[1.05] tracking-[-0.02em] text-sand sm:text-5xl md:text-6xl lg:text-[4.5rem]">
            A northern plateau shaped by rivers and iron.
          </h1>

          <p className="mt-5 max-w-2xl font-sans text-sm font-medium leading-6 text-sand/85 sm:mt-8 sm:text-lg sm:leading-8">
            Keonjhar sits in the northern reaches of Odisha — a district where
            ancient geology, tribal culture and colonial-era history all meet
            on the banks of the Baitarani.
          </p>
        </div>
      </div>

      {/* Single facts card, one flow for every breakpoint */}
      <div className="relative z-20 mx-auto -mt-16 max-w-6xl px-3 sm:-mt-20 sm:px-6 md:-mt-24 lg:px-0">
        <FactsCard />
      </div>

      <div className="h-10 sm:h-16" />
    </section>
  );
}

function FactsCard() {
  return (
    <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-sand-deep bg-sand shadow-[0_20px_45px_rgba(26,26,26,0.16)] sm:grid-cols-3 lg:grid-cols-6">
      {facts.map((fact, index) => (
        <div
          key={fact.label}
          className={`border-sand-deep px-5 py-5 sm:px-6 sm:py-6 lg:px-7 ${
            index < facts.length - 1 ? "border-r" : ""
          }`}
        >
          <div className="mb-3 h-px w-10 bg-gold/70" />
          <p className="font-mono text-[9px] font-medium uppercase tracking-[0.2em] text-gold sm:text-[10px]">
            {fact.label}
          </p>
          <div className="mt-3 font-serif text-lg leading-snug text-ink sm:text-xl lg:text-[1.4rem]">
            {fact.value}
          </div>
        </div>
      ))}
    </div>
  );
}