import PromoBar from "./PromoBar";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Reveal from "./Reveal";

export type LegalSubSection = { heading: string; list: string[] };
export type LegalSection = {
  heading: string;
  body?: string[];
  list?: string[];
  subsections?: LegalSubSection[];
  footer?: string[];
};

// Every text node sets an explicit colour: globals.css paints bare <p> white.
const TEXT = "m-0 text-base leading-[1.7] text-simple-ink-soft";
const LIST = "m-0 flex list-disc flex-col gap-1.5 pl-6 text-base leading-[1.7] text-simple-ink-soft";

/** Shared simple-theme layout for the Privacy Policy and Terms & Conditions pages. */
export default function LegalContent({
  title,
  updated,
  sections,
}: {
  title: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PromoBar />
      <NavBar active="" />
      <main className="bg-white text-simple-ink">
        <div className="border-b border-simple-border bg-simple-surface-alt">
          <Reveal className="mx-auto flex max-w-[760px] flex-col gap-3 px-6 pb-11 pt-14">
            <div className="text-sm font-bold uppercase tracking-[0.12em] text-simple-purple-deep">Legal</div>
            <h1 className="m-0 font-display font-extrabold leading-[1.1] tracking-tight text-[clamp(2rem,3.6vw,2.8rem)] text-simple-ink">
              {title}
            </h1>
            <p className="m-0 text-base text-simple-ink-soft">Last updated: {updated}</p>
          </Reveal>
        </div>

        <div className="mx-auto flex max-w-[760px] flex-col px-6 py-12">
          {sections.map((sec, i) => (
            <section key={sec.heading} className={`flex flex-col gap-3 ${i === 0 ? "" : "mt-8 border-t border-simple-border pt-8"}`}>
              <h2 className="m-0 font-display text-xl font-extrabold text-simple-ink">{sec.heading}</h2>
              {sec.body?.map((p) => (
                <p key={p} className={TEXT}>
                  {p}
                </p>
              ))}
              {sec.list && (
                <ul className={LIST}>
                  {sec.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              {sec.subsections?.map((sub) => (
                <div key={sub.heading} className="flex flex-col gap-2">
                  <h3 className="m-0 text-base font-bold text-simple-ink">{sub.heading}</h3>
                  <ul className={LIST}>
                    {sub.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
              {sec.footer?.map((p) => (
                <p key={p} className={TEXT}>
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
