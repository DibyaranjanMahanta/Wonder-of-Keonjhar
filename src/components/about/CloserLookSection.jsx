import {
  Sun,
  Waves,
  Trees,
  Mountain,
  UsersRound,
  Pickaxe,
} from "lucide-react";

const details = [
  {
    icon: Sun,
    title: "Climate",
    text: "Subtropical. Summers touch 42 °C; winters are mild (8–22 °C). Monsoon (Jun–Sep) brings 1400+ mm of rain.",
  },
  {
    icon: Waves,
    title: "Rivers",
    text: "Baitarani (originates at Gonasika), Koira, Sankh and Salandi — the district's lifelines for farming, forests and faith.",
  },
  {
    icon: Trees,
    title: "Forests",
    text: "Over 40% forest cover — dominated by sal, teak, mahua and bamboo. Home to elephants, sloth bears, leopards and Indian bison.",
  },
  {
    icon: Mountain,
    title: "Geography",
    text: "Part of the Chota Nagpur plateau — rolling iron-rich hills and ranges cut by deep river valleys.",
  },
  {
    icon: UsersRound,
    title: "Demographics",
    text: "A strong tribal population (~45%) including Juang, Bhuyan, Santhal, Ho, Munda and Gond.",
  },
  {
    icon: Pickaxe,
    title: "Economy",
    text: "Iron and manganese mining, agriculture, sabai grass handicrafts and growing eco-tourism.",
  },
];

export default function CloserLookSection() {
  return (
    <section className="py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Heading */}
        <div className="max-w-2xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-12 bg-gold" />

            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
              A closer look
            </p>
          </div>

          <h2 className="font-serif text-3xl leading-[1.1] text-ink sm:text-4xl lg:text-5xl">
            Climate, forests, economy.
          </h2>

          <p className="mt-4 font-sans text-sm leading-6 text-ink-soft sm:text-base sm:leading-7">
            Six facets that together define everyday life in Keonjhar.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {details.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="group rounded-2xl border border-sand-deep bg-sand-deep/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-forest/30 hover:bg-sand hover:shadow-lg sm:p-7"
            >
              {/* Icon */}
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-forest text-sand transition-transform duration-300 group-hover:scale-105">
                <Icon size={21} strokeWidth={1.5} />
              </div>

              <h3 className="mt-5 font-serif text-2xl text-ink">
                {title}
              </h3>

              <p className="mt-3 font-sans text-sm leading-6 text-ink-soft">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}