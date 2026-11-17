"use client";

import Link from "next/link";
import { useState } from "react";

type NavLink = { href: string; label: string };

/** Hamburger menu shown below the md breakpoint. */
export default function MobileMenu({
  links,
  active,
  phoneHref,
  phoneDisplay,
}: {
  links: NavLink[];
  active?: string;
  phoneHref: string;
  phoneDisplay: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-simple-border bg-white text-simple-ink"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
          {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full z-50 border-b border-simple-border bg-white px-6 pb-6 pt-2 shadow-[0_16px_30px_rgba(15,10,26,0.10)]">
          <nav className="flex flex-col">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`border-b border-simple-border py-3.5 text-base no-underline ${
                  link.label === active ? "font-bold text-simple-purple" : "font-medium text-simple-ink"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-5 flex flex-col gap-3">
            <Link
              href={phoneHref}
              className="rounded-[10px] border-[1.5px] border-simple-ink py-3 text-center text-[15px] font-bold text-simple-ink no-underline"
            >
              Call {phoneDisplay}
            </Link>
            <Link
              href="/#book"
              onClick={() => setOpen(false)}
              className="rounded-[10px] bg-simple-purple py-3 text-center text-[15px] font-bold text-white no-underline hover:text-white"
            >
              Book a Free Call
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
