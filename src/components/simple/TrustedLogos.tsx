import Reveal from "./Reveal";

const CLIENTS = [
  { mono: "M2", name: "M2M Pro Cleaners" },
  { mono: "TN", name: "Toronto Notary" },
  { mono: "HT", name: "Haven Tint & Tire" },
  { mono: "JM", name: "JMG Auto" },
  { mono: "BP", name: "Bariis Pizza" },
  { mono: "A1", name: "A1 Furnished" },
  { mono: "GP", name: "Global Pardon" },
  { mono: "HD", name: "Horizon Driving" },
  { mono: "FS", name: "FairSafe" },
  { mono: "3R", name: "3Ray Mobiles" },
];

function Chip({ mono, name }: { mono: string; name: string }) {
  return (
    <div className="inline-flex items-center gap-2.5 bg-white border border-simple-border rounded-xl px-[18px] py-2.5 whitespace-nowrap flex-none">
      <div className="w-[30px] h-[30px] rounded-lg bg-simple-chip-bg text-simple-purple flex items-center justify-center font-display font-extrabold text-xs">
        {mono}
      </div>
      <span className="font-display font-semibold text-[15px] text-simple-ink-faint">{name}</span>
    </div>
  );
}

export default function TrustedLogos() {
  // duplicated once for a seamless marquee loop
  const track = [...CLIENTS, ...CLIENTS];

  return (
    <div className="bg-white border-b border-simple-border">
      <Reveal from="left" className="max-w-[1240px] mx-auto py-10 flex flex-col gap-5 items-center">
        <div className="text-[13px] font-bold tracking-[0.14em] uppercase text-[#6B6580] px-6 text-center">
          Trusted by 500+ businesses across Canada &amp; the US
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="logo-track flex items-center gap-4 w-max animate-marquee">
            {track.map((c, i) => (
              <Chip key={`${c.mono}-${i}`} mono={c.mono} name={c.name} />
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent" />
        </div>
      </Reveal>
    </div>
  );
}
