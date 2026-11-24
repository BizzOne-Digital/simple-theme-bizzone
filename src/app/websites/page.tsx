import PromoBar from "@/components/simple/PromoBar";
import NavBar from "@/components/simple/NavBar";
import Footer from "@/components/simple/Footer";
import WebsiteGrid from "@/components/simple/WebsiteGrid";
import ReviewWidget from "@/components/simple/ReviewWidget";
import { WebsitePlansGrid } from "@/components/simple/PricingContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Websites: Packages & Examples | BizzOne Digital",
  description:
    "See live websites built by BizzOne Digital, compare our website packages and read our Google reviews. Web design in Mississauga for businesses across Canada and the US.",
  path: "/websites",
});

const H2 = "m-0 text-center font-display font-extrabold leading-[1.1] tracking-tight text-[clamp(1.8rem,3.2vw,2.6rem)]";

/** Website examples, packages (no prices) and Google reviews only, as requested by the owner. */
export default function WebsitesPage() {
  return (
    <>
      <PromoBar />
      <NavBar active="Websites" />
      <main className="bg-white text-simple-ink">
        <h1 className="m-0 border-b border-simple-border bg-simple-surface-alt px-6 py-14 text-center font-display font-extrabold leading-[1.1] tracking-tight text-[clamp(2.3rem,4.6vw,3.6rem)]">
          Websites
        </h1>
        <section className="mx-auto flex max-w-[1240px] flex-col gap-10 px-6 py-16">
          <h2 className={H2}>Websites we&rsquo;ve built</h2>
          <WebsiteGrid />
        </section>
        <section className="border-y border-simple-border bg-simple-surface-alt">
          <div className="mx-auto flex max-w-[1240px] flex-col gap-10 px-6 py-16">
            <h2 className={H2}>Website packages</h2>
            <WebsitePlansGrid showIncludes={false} />
          </div>
        </section>
        <section className="pt-16">
          <h2 className={`${H2} px-6`}>Google reviews</h2>
          <ReviewWidget />
        </section>
      </main>
      <Footer />
    </>
  );
}
