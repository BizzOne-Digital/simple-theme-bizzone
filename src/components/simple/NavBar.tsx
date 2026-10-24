import Image from "next/image";
import Link from "next/link";
import { BUSINESS } from "@/data/site";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/our-work", label: "Our Work" },
  { href: "/contact", label: "Contact" },
];

/** Home page links jump to sections on the same page. */
const HOME_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#system", label: "How It Works" },
  { href: "#results", label: "Results" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

/**
 * Shared nav for the "simple" design. With no `active` prop (home page) it shows
 * section anchors; inner pages pass `active` ("" for legal pages) to get page links.
 */
export default function NavBar({ active }: { active?: string }) {
  const isHome = active === undefined;
  const links = isHome ? HOME_LINKS : NAV_LINKS;
  return (
    <div className="border-b border-simple-border bg-white">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-5 px-6 py-4">
        <Link href={isHome ? "#top" : "/"} className="flex items-center gap-2.5 text-simple-ink no-underline">
          <Image src="/fav.png" alt="BizzOne Digital logo" width={40} height={40} />
          <span className="font-display text-[22px] font-bold tracking-tight">
            BizzOne <span className="text-simple-purple">Digital</span>
          </span>
        </Link>

        <div className="flex flex-wrap gap-7 text-[15px] font-medium">
          {links.map((link) => (
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

        <div className="flex flex-wrap items-center gap-3">
          <Link href={BUSINESS.phoneHref} className="px-1 py-3 text-[15px] font-bold text-simple-ink no-underline hover:text-simple-purple">
            {BUSINESS.phoneDisplay}
          </Link>
          <Link
            href={isHome ? "#book" : "/#book"}
            className="rounded-[10px] bg-simple-purple px-[22px] py-[13px] text-[15px] font-bold text-white no-underline transition-all duration-200 hover:-translate-y-0.5 hover:text-white hover:brightness-105"
          >
            Book a Free Call
          </Link>
        </div>
      </div>
    </div>
  );
}
