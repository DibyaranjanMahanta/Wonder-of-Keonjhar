import Link from "next/link";
import {
  MapPin,
  Mail,
  Leaf,
  Mountain,
  Landmark,
  ArrowRight,
  PartyPopper,
  UsersRound,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-dark text-sand">
      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10 lg:py-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8 lg:gap-12">
          {/* =================================================
              BRAND
          ================================================== */}
          <div className="md:col-span-6 lg:col-span-5">
            <Link href="/" className="group inline-flex items-center gap-3.5">
              {/* Logo */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold transition-all duration-300 group-hover:scale-105 group-hover:shadow-md">
                <span className="font-serif text-xl text-forest-dark">K</span>
              </div>

              {/* Logo Text */}
              <div>
                <h2 className="font-serif text-[21px] leading-none text-sand transition-colors duration-300 group-hover:text-gold-soft">
                  Wonders of Keonjhar
                </h2>

                <p className="mt-1.5 text-[9px] font-medium uppercase tracking-[3px] text-gold">
                  A DIGITAL ARCHIVE&nbsp;&nbsp;·&nbsp;&nbsp;ODISHA, INDIA
                </p>
              </div>
            </Link>

            {/* Description */}
            <p className="mt-6 max-w-xl text-[15px] leading-7 text-sand-deep">
              A living tribute to the waterfalls, iron hills, ancient temples
              and tribal communities that make Keonjhar one of India's most
              underrated destinations.
            </p>

            {/* Contact */}
            <div className="mt-6 flex flex-col gap-4">
              {/* Location */}
              <div className="group flex items-center gap-3">
                <MapPin
                  size={17}
                  strokeWidth={1.7}
                  className="shrink-0 text-gold transition-transform duration-300 group-hover:-translate-y-0.5"
                />

                <span className="text-[14px] text-sand-deep transition-colors duration-300 group-hover:text-sand">
                  Keonjhar District, Odisha, India
                </span>
              </div>

              {/* Email */}
              <a
                href="mailto:hello@wondersofkeonjhar.in"
                className="group flex items-center gap-3"
              >
                <Mail
                  size={17}
                  strokeWidth={1.7}
                  className="shrink-0 text-gold transition-transform duration-300 group-hover:translate-x-0.5"
                />

                <span className="text-[14px] text-sand-deep transition-colors duration-300 group-hover:text-sand">
                  hello@wondersofkeonjhar.in
                </span>
              </a>
            </div>
          </div>

          {/* =================================================
              EXPLORE
          ================================================== */}
          <div className="md:col-span-3 lg:col-span-3">
            <h3 className="relative inline-block text-[13px] font-semibold uppercase tracking-[2.5px] text-gold">
              Explore
              <span className="absolute -top-1 left-0 h-px w-full bg-gold/60" />
            </h3>

            <nav className="mt-6 flex flex-col gap-4">
              <FooterLink href="/explore/nature" icon={Leaf}>
                Natural Wonders
              </FooterLink>

              <FooterLink href="/explore/heritage" icon={Mountain}>
                Historical Sites
              </FooterLink>

              <FooterLink href="/explore/temples" icon={Landmark}>
                Temples
              </FooterLink>

              <FooterLink href="/culture" icon={UsersRound}>
                Tribes &amp; Culture
              </FooterLink>

              <FooterLink href="/festivals" icon={PartyPopper}>
                Festivals
              </FooterLink>
            </nav>
          </div>

          {/* =================================================
              KNOW KEONJHAR
          ================================================== */}
          <div className="md:col-span-3 lg:col-span-4">
            <h3 className="relative inline-block text-[13px] font-semibold uppercase tracking-[2.5px] text-gold">
              Know Keonjhar
              <span className="absolute -top-1 left-0 h-px w-full bg-gold/60" />
            </h3>

            <nav className="mt-6 flex flex-col gap-4">
              <FooterLink href="/about">About the District</FooterLink>

              <FooterLink href="/history">History &amp; Timeline</FooterLink>

              <FooterLink href="/explore">Tourism Hub</FooterLink>
            </nav>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM BAR
      ====================================================== */}
      <div className="border-t border-ink-soft/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p className="text-[12px] leading-5 text-sand-deep">
            © {currentYear} Wonders of Keonjhar · A cultural documentation
            project.
          </p>

          <p className="text-[11px] font-medium uppercase tracking-[3px] text-gold">
            Made with care for Odisha
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ============================================================
   FOOTER LINK
============================================================ */

function FooterLink({ href, children, icon: Icon }) {
  return (
    <Link
      href={href}
      className="group flex w-fit items-center gap-2.5 text-[14px] text-sand-deep transition-all duration-300 hover:translate-x-1 hover:text-sand"
    >
      {Icon && (
        <Icon
          size={15}
          strokeWidth={1.6}
          className="shrink-0 text-gold transition-transform duration-300 group-hover:scale-110"
        />
      )}

      <span>{children}</span>

      <ArrowRight
        size={13}
        strokeWidth={1.7}
        className="ml-0 max-w-0 overflow-hidden text-gold opacity-0 transition-all duration-300 group-hover:ml-1 group-hover:max-w-3.25 group-hover:opacity-100"
      />
    </Link>
  );
}
