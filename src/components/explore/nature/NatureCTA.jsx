import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NatureCTA() {
  return (
    <section className="bg-water-dark py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          {/* Text */}
          <div className="max-w-2xl">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold-soft sm:text-xs">
              A Journey Into Nature
            </p>

            <h2 className="mt-3 font-serif text-3xl leading-tight text-sand sm:text-4xl lg:text-5xl">
              Continue discovering{" "}
              <span className="italic text-gold-soft">Keonjhar.</span>
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-sand/65 sm:text-base">
              From natural landscapes to places shaped by generations,
              there is more to explore.
            </p>
          </div>

          {/* CTA */}
          <Link
            href="/explore/heritage"
            className="group inline-flex w-fit shrink-0 items-center gap-3 border border-gold-soft/50 px-5 py-3 text-xs uppercase tracking-[0.14em] text-gold-soft transition-all duration-300 hover:border-gold-soft hover:bg-gold-soft hover:text-water-dark"
          >
            <span>Explore Heritage</span>

            <ArrowRight
              size={15}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}