import Image from "next/image";
import Reveal from "./Reveal";

const CLIENTS = [
  { name: "Haven Customs", logo: "/logos/haven-customs.webp", w: 305 },
  { name: "M2M Pro Cleaners", logo: "/logos/m2m-pro-cleaners.webp", w: 267 },
  { name: "Bariis & Pizza House", logo: "/logos/bariis-pizza-house.webp", w: 336 },
  { name: "A1 Furnished Homes Canada", logo: "/logos/a1-furnished-homes.webp", w: 414 },
  { name: "Global Pardon and Waivers", logo: "/logos/global-pardon-waivers.webp", w: 517 },
  { name: "FairSafe First Aid and Safety Solutions", logo: "/logos/fairsafe.webp", w: 713 },
];

function Logo({ name, logo, w }: { name: string; logo: string; w: number }) {
  return (
    <div className="flex h-[76px] flex-none items-center justify-center rounded-xl border border-simple-border bg-white px-6">
      <Image src={logo} alt={`${name} logo`} width={w} height={160} className="h-11 w-auto max-w-[170px] object-contain" />
    </div>
  );
}

export default function TrustedLogos() {
  // four copies: the marquee scrolls -50%, so each half must be wider than the viewport
  const track = [...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS];

  return (
    <div className="bg-white border-b border-simple-border">
      <Reveal from="left" className="max-w-[1240px] mx-auto py-10 flex flex-col gap-5 items-center">
        <div className="text-[13px] font-bold tracking-[0.14em] uppercase text-[#6B6580] px-6 text-center">
          Trusted by 500+ businesses across Canada &amp; the US
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="logo-track flex items-center gap-4 w-max animate-marquee">
            {track.map((c, i) => (
              <Logo key={`${c.logo}-${i}`} {...c} />
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent" />
        </div>
      </Reveal>
    </div>
  );
}
