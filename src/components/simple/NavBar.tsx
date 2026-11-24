import Image from "next/image";
import Link from "next/link";
import { BUSINESS } from "@/data/site";
import MobileMenu from "./MobileMenu";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/websites", label: "Websites" },
  { href: "/pricing", label: "Our Plans" },
  { href: "/our-work", label: "Our Work" },
  { href: "/contact", label: "Contact" },
];

/** Shared nav for the "simple" design. Pass `active` to highlight the current page ("" for legal pages). */
export default function NavBar({ active }: { active?: string }) {
  return (
    <div className="relative z-40 border-b sticky top-0 border-simple-border bg-white">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-5 px-6 py-3 md:flex-wrap md:py-4">
        <Link href="/" className="flex items-center gap-2.5 text-simple-ink no-underline">
          <Image src="/fav.png" alt="BizzOne Digital logo" width={40} height={40} />
          <span className="font-display text-[22px] font-bold tracking-tight">
            BizzOne <span className="text-simple-purple">Digital</span>
          </span>
        </Link>

        <div className="hidden md:flex flex-wrap gap-x-6 gap-y-2 text-[15px] font-medium">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`no-underline ${
                link.label === active ? "font-bold text-simple-purple" : "text-simple-ink hover:text-simple-purple"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex flex-wrap items-center gap-3">
          <Link href={BUSINESS.phoneHref} className="px-1 py-3 text-[15px] font-bold text-simple-ink no-underline hover:text-simple-purple">
            {BUSINESS.phoneDisplay}
          </Link>
          <Link
            href="/#book"
            className="rounded-[10px] bg-simple-purple px-[22px] py-[13px] text-[15px] font-bold text-white no-underline transition-all duration-200 hover:-translate-y-0.5 hover:text-white hover:brightness-105"
          >
            Book a Free Call
          </Link>
        </div>
        <MobileMenu links={NAV_LINKS} active={active} phoneHref={BUSINESS.phoneHref} phoneDisplay={BUSINESS.phoneDisplay} />
      </div>
    </div>
  );
}
