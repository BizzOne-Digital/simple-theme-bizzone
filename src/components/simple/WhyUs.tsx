import Reveal from "./Reveal";

const STEPS = [
  { n: 1, title: "Book your free call", desc: "Tell us about your business and your goals. Takes 15 minutes." },
  { n: 2, title: "Get your growth plan", desc: "We audit what you have now and show you a clear plan and price." },
  { n: 3, title: "We launch and optimize", desc: "Your team goes live, and we improve results every month." },
];

export default function WhyUs() {
  return (
    <Reveal from="right" className="max-w-[1240px] mx-auto px-6 py-[88px] flex flex-wrap gap-16">
      <div className="flex-[1_1_460px] min-w-0 flex flex-col gap-[18px]">
        <div className="text-sm font-bold tracking-[0.12em] uppercase text-simple-purple-deep">
          Why BizzOne Digital
        </div>
        <h2 className="m-0 font-display font-extrabold leading-[1.1] tracking-tight text-[clamp(2rem,3.6vw,3rem)]">
          Built for small and mid-sized businesses
        </h2>
        <p className="m-0 text-lg text-simple-ink-soft">
          We know you don&apos;t have time to manage marketing. Our 35-person team of ad specialists,
          designers, editors, developers and automation experts does the work — and keeps you
          updated without the jargon.
        </p>
        <p className="m-0 text-lg text-simple-ink-soft">
          Our mission is simple: turn your digital presence into real revenue. Based in
          Mississauga, working with automotive, home service, retail, restaurant and wellness
          businesses across Canada and the US.
        </p>
        <a href="#book" className="self-start font-bold no-underline py-2 text-[17px]">
          Talk to Our Team →
        </a>
      </div>

      <div className="flex-[1_1_460px] min-w-0 bg-simple-surface-alt border border-simple-border rounded-[18px] p-9 flex flex-col gap-6 transition-all duration-300 hover:-translate-y-1">
        <div className="font-display font-extrabold text-[28px]">Getting started is easy</div>
        {STEPS.map((s) => (
          <div key={s.n} className="flex gap-[18px] items-start">
            <div className="flex-none w-11 h-11 rounded-full bg-simple-purple text-white flex items-center justify-center font-extrabold">
              {s.n}
            </div>
            <div>
              <div className="font-bold text-lg">{s.title}</div>
              <div className="text-simple-ink-soft text-base">{s.desc}</div>
            </div>
          </div>
        ))}
        <a
          href="#book"
          className="bg-simple-purple text-white no-underline font-bold text-[17px] px-7 py-[17px] rounded-xl text-center transition-all duration-200 hover:-translate-y-0.5 hover:brightness-105 hover:text-white"
        >
          Get Started Today
        </a>
      </div>
    </Reveal>
  );
}
