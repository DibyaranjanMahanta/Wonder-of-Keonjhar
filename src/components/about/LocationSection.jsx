import { MapPin, Plane, Train, Route } from "lucide-react";

const locationDetails = [
  {
    icon: MapPin,
    label: "Headquarters",
    value: "Keonjhargarh (Keonjhar town)",
  },
  {
    icon: Plane,
    label: "Nearest airport",
    value: "Bhubaneswar (BBI) — ~225 km",
  },
  {
    icon: Train,
    label: "Rail head",
    value: "Keonjhar Road · Barbil · Joda",
  },
  {
    icon: Route,
    label: "State highway",
    value: "NH-20 · NH-220 · SH-10",
  },
];

export default function LocationSection() {
  return (
    <section className="py-10 sm:py-12 lg:py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-2 lg:items-end lg:gap-20 lg:px-12">
        {/* Left */}
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-12 bg-gold" />

            <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-gold">
              Location
            </p>
          </div>

          <h2 className="font-serif text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">
            Where on the map?
          </h2>

          <p className="mt-5 max-w-xl font-sans text-base leading-7 text-ink-soft sm:text-lg sm:leading-8">
            Keonjhar district lies in north Odisha, bordered by Jharkhand to the
            north, Mayurbhanj to the east, Jajpur and Bhadrak to the south, and
            Sundargarh to the west.
          </p>

          <div className="mt-7 divide-y divide-sand-deep border-y border-sand-deep">
            {locationDetails.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex gap-4 py-4 sm:gap-5">
                <Icon
                  size={19}
                  strokeWidth={1.5}
                  className="mt-1 shrink-0 text-forest"
                />

                <div>
                  <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-gold">
                    {label}
                  </p>

                  <p className="mt-1.5 font-sans text-sm leading-6 text-ink sm:text-base">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Google Map */}
        <div className="h-[350px] overflow-hidden rounded-2xl border border-sand-deep sm:h-[420px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d524302.1367438782!2d85.46153555715475!3d21.598538315045694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1f02b22c7dcee3%3A0x7d725acc5a052ebb!2sKendujhar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1787139980127!5m2!1sen!2sin"
            className="h-full w-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Map of Keonjhar, Odisha"
          />
        </div>
      </div>
    </section>
  );
}
