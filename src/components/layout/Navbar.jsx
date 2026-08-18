"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ChevronDown,
  Menu,
  X,
  Leaf,
  Mountain,
  Landmark,
} from "lucide-react";

export default function Navbar() {
  const [exploreOpen, setExploreOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  /* ==========================================================
     CLOSE ALL MENUS
  ========================================================== */

  const handleNavigation = () => {
    setExploreOpen(false);
    setMobileOpen(false);
  };

  /* ==========================================================
     EXPLORE DROPDOWN
  ========================================================== */

  const toggleExplore = () => {
    setExploreOpen((prev) => !prev);
  };

  /* ==========================================================
     MOBILE MENU
  ========================================================== */

  const toggleMobile = () => {
    setMobileOpen((prev) => {
      if (prev) {
        setExploreOpen(false);
      }

      return !prev;
    });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-sand-deep bg-sand/95 text-ink backdrop-blur-sm">

      <nav className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-6 lg:px-10">

        {/* ====================================================
            LOGO
        ===================================================== */}

        <Link
          href="/"
          onClick={handleNavigation}
          className="group flex items-center gap-3.5"
        >
          {/* Logo Mark */}
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest transition-all duration-300 group-hover:scale-105 group-hover:shadow-md">
            <span className="font-display text-xl font-medium text-sand transition-transform duration-300 group-hover:scale-110">
              K
            </span>
          </div>

          {/* Logo Text */}
          <div>
            <span className="block font-display text-[21px] font-semibold leading-none text-forest-dark transition-colors duration-300 group-hover:text-forest">
              Wonders of
            </span>

            <span className="mt-1.5 block text-[9px] font-medium uppercase tracking-[3px] text-gold transition-colors duration-300 group-hover:text-gold-soft">
              KEONJHAR&nbsp;&nbsp;·&nbsp;&nbsp;ODISHA
            </span>
          </div>
        </Link>

        {/* ====================================================
            DESKTOP NAVIGATION
        ===================================================== */}

        <div className="hidden items-center gap-7 md:flex lg:gap-8">

          <NavLink href="/" onClick={handleNavigation}>
            Home
          </NavLink>

          <NavLink href="/about" onClick={handleNavigation}>
            About
          </NavLink>

          {/* ==================================================
              EXPLORE
          =================================================== */}

          <div className="relative">
            <button
              type="button"
              onClick={toggleExplore}
              aria-expanded={exploreOpen}
              aria-haspopup="true"
              className={`group relative flex items-center gap-1.5 text-[15px] font-medium transition-colors duration-300 ${
                exploreOpen
                  ? "text-forest"
                  : "text-ink-soft hover:text-forest"
              }`}
            >
              <span>Explore</span>

              <ChevronDown
                size={15}
                strokeWidth={1.7}
                className={`transition-transform duration-300 ${
                  exploreOpen ? "rotate-180" : ""
                }`}
              />

              {/* Underline */}
              <span
                className={`absolute -bottom-2 left-0 h-[1.5px] bg-gold transition-all duration-300 ${
                  exploreOpen
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </button>

            {/* Dropdown */}
            {exploreOpen && (
              <div
                role="menu"
                className="absolute left-1/2 top-full mt-3 w-56 -translate-x-1/2 animate-[dropdown_180ms_ease-out] rounded-xl border border-sand-deep bg-sand p-2 shadow-[0_12px_30px_rgba(26,54,40,0.12)]"
              >
                <DropdownLink
                  href="/explore/nature"
                  onClick={handleNavigation}
                  icon={Leaf}
                >
                  Natural Wonders
                </DropdownLink>

                <DropdownLink
                  href="/explore/heritage"
                  onClick={handleNavigation}
                  icon={Mountain}
                >
                  Heritage
                </DropdownLink>

                <DropdownLink
                  href="/explore/temples"
                  onClick={handleNavigation}
                  icon={Landmark}
                >
                  Temples
                </DropdownLink>
              </div>
            )}
          </div>

          <NavLink href="/culture" onClick={handleNavigation}>
            Culture
          </NavLink>

          <NavLink href="/festivals" onClick={handleNavigation}>
            Festivals
          </NavLink>

          <NavLink href="/history" onClick={handleNavigation}>
            History
          </NavLink>

          <NavLink href="/contact" onClick={handleNavigation}>
            Contact
          </NavLink>
        </div>

        {/* ====================================================
            MOBILE MENU BUTTON
        ===================================================== */}

        <button
          type="button"
          onClick={toggleMobile}
          aria-label={
            mobileOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={mobileOpen}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-sand-deep text-forest transition-all duration-200 hover:border-forest hover:bg-sand-deep active:scale-95 md:hidden"
        >
          {mobileOpen ? (
            <X
              size={21}
              strokeWidth={1.8}
            />
          ) : (
            <Menu
              size={21}
              strokeWidth={1.8}
            />
          )}
        </button>
      </nav>

      {/* ======================================================
          MOBILE NAVIGATION
      ======================================================= */}

      {mobileOpen && (
        <div className="animate-[mobileMenu_220ms_ease-out] border-t border-sand-deep bg-sand px-6 pb-6 md:hidden">
          <div className="flex flex-col pt-1">

            <MobileNavLink
              href="/"
              onClick={handleNavigation}
            >
              Home
            </MobileNavLink>

            <MobileNavLink
              href="/about"
              onClick={handleNavigation}
            >
              About
            </MobileNavLink>

            {/* Mobile Explore */}
            <button
              type="button"
              onClick={toggleExplore}
              aria-expanded={exploreOpen}
              className="flex w-full items-center justify-between border-b border-sand-deep py-4 text-left text-[15px] font-medium text-ink-soft transition-colors duration-200 hover:text-forest"
            >
              <span>Explore</span>

              <ChevronDown
                size={15}
                strokeWidth={1.7}
                className={`transition-transform duration-300 ${
                  exploreOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Mobile Explore Items */}
            {exploreOpen && (
              <div className="ml-4 animate-[mobileSubmenu_180ms_ease-out] border-l border-gold pl-3">

                <MobileDropdownLink
                  href="/explore/nature"
                  onClick={handleNavigation}
                  icon={Leaf}
                >
                  Natural Wonders
                </MobileDropdownLink>

                <MobileDropdownLink
                  href="/explore/heritage"
                  onClick={handleNavigation}
                  icon={Mountain}
                >
                  Heritage
                </MobileDropdownLink>

                <MobileDropdownLink
                  href="/explore/temples"
                  onClick={handleNavigation}
                  icon={Landmark}
                >
                  Temples
                </MobileDropdownLink>

              </div>
            )}

            <MobileNavLink
              href="/culture"
              onClick={handleNavigation}
            >
              Culture
            </MobileNavLink>

            <MobileNavLink
              href="/festivals"
              onClick={handleNavigation}
            >
              Festivals
            </MobileNavLink>

            <MobileNavLink
              href="/history"
              onClick={handleNavigation}
            >
              History
            </MobileNavLink>

            <MobileNavLink
              href="/contact"
              onClick={handleNavigation}
              last
            >
              Contact
            </MobileNavLink>

          </div>
        </div>
      )}
    </header>
  );
}


/* ============================================================
   DESKTOP NAV LINK
============================================================ */

function NavLink({ href, onClick, children }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="group relative text-[15px] font-medium text-ink-soft transition-colors duration-300 hover:text-forest"
    >
      {children}

      <span className="absolute -bottom-2 left-0 h-[1.5px] w-0 bg-gold transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}


/* ============================================================
   DROPDOWN LINK
============================================================ */

function DropdownLink({
  href,
  onClick,
  children,
  icon: Icon,
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      role="menuitem"
      className="group flex items-center gap-3 rounded-lg px-4 py-3 text-[14px] text-ink-soft transition-all duration-200 hover:translate-x-1 hover:bg-sand-deep hover:text-forest"
    >
      <Icon
        size={16}
        strokeWidth={1.6}
        className="shrink-0 text-gold transition-transform duration-200 group-hover:scale-110"
      />

      <span>{children}</span>
    </Link>
  );
}


/* ============================================================
   MOBILE NAV LINK
============================================================ */

function MobileNavLink({
  href,
  onClick,
  children,
  last = false,
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`py-4 text-[15px] font-medium text-ink-soft transition-all duration-200 hover:pl-2 hover:text-forest ${
        !last ? "border-b border-sand-deep" : ""
      }`}
    >
      {children}
    </Link>
  );
}


/* ============================================================
   MOBILE DROPDOWN LINK
============================================================ */

function MobileDropdownLink({
  href,
  onClick,
  children,
  icon: Icon,
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="group flex items-center gap-3 py-3 text-[14px] text-ink-soft transition-all duration-200 hover:translate-x-1 hover:text-forest"
    >
      <Icon
        size={15}
        strokeWidth={1.6}
        className="shrink-0 text-gold transition-transform duration-200 group-hover:scale-110"
      />

      <span>{children}</span>
    </Link>
  );
}