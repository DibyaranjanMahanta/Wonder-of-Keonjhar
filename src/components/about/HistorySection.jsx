import Link from "next/link";

const highlights = [
  {
    number: "01",
    text: "The origin of the sacred Baitarani river at Gonasika.",
  },
  {
    number: "02",
    text: "India's only surviving 6th-century tempera rock paintings at Sitabhinji.",
  },
  {
    number: "03",
    text: "One of Asia's largest iron-ore belts (Joda–Barbil) coexisting with tribal hamlets.",
  },
  {
    number: "04",
    text: "Khandadhar — among the ten tallest uninterrupted waterfalls in India.",
  },
];

export default function HistorySection() {
  return (
    <section className="py-10 sm:py-12 lg:py-14">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">
        
        {/* Brief History */}
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-12 bg-gold" />

            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
              Brief history
            </p>
          </div>

          <h2 className="max-w-xl font-serif text-3xl leading-[1.1] text-ink sm:text-4xl lg:text-5xl">
            A princely state turned people's district.
          </h2>

          <div className="mt-6 max-w-xl space-y-5 font-sans text-sm leading-6 text-ink-soft sm:text-base sm:leading-7">
            <p>
              The Kingdom of Keonjhar was founded in 1480 by Jyoti Bhanja, a
              younger branch of the Mayurbhanj Bhanja dynasty. For more than
              four centuries the Bhanja rulers governed the forested uplands,
              patronising temples, folk arts and a vibrant court culture.
            </p>

            <p>
              The 1891 Bhuyan rebellion led by Dharanidhar Naik remains a
              watershed in India's tribal history — a rare armed resistance
              that forced the princely administration to recognise the rights
              of the Paudi Bhuyans. After independence, the state merged with
              Odisha in 1948 and has since evolved into a district balancing
              mining, agriculture and conservation.
            </p>
          </div>

          <Link
            href="/history"
            className="mt-7 inline-flex items-center gap-2 rounded-full border border-forest px-6 py-3 font-sans text-sm font-medium text-forest transition-colors hover:bg-forest hover:text-sand"
          >
            See full historical timeline
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* What Makes Keonjhar Unique */}
        <div className="rounded-2xl border border-sand-deep p-6 sm:p-8">
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-12 bg-gold" />

            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
              What makes Keonjhar unique
            </p>
          </div>

          <div className="space-y-6">
            {highlights.map((item) => (
              <div key={item.number}>
                <span className="font-mono text-xs text-forest">
                  {item.number}
                </span>

                <p className="mt-1 font-sans text-sm leading-6 text-ink sm:text-base">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}