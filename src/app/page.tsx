import PromoBar from "@/components/simple/PromoBar";
import NavBar from "@/components/simple/NavBar";
import Hero from "@/components/simple/Hero";
import TrustedLogos from "@/components/simple/TrustedLogos";
import MetaGooglePartners from "@/components/simple/MetaGooglePartners";
import PromiseStrip from "@/components/simple/PromiseStrip";
import Services from "@/components/simple/Services";
import GrowthSystem from "@/components/simple/GrowthSystem";
import Results from "@/components/simple/Results";
import WebsiteShowcase from "@/components/simple/WebsiteShowcase";
import WhyUs from "@/components/simple/WhyUs";
import ReelsShowcase from "@/components/simple/ReelsShowcase";
import Pricing from "@/components/simple/Pricing";
import FAQ from "@/components/simple/FAQ";
import FinalCTA from "@/components/simple/FinalCTA";
import Footer from "@/components/simple/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Digital Marketing & AI Automation Agency | BizzOne Digital",
  description:
    "Mississauga digital marketing agency. Meta & Google Ads, SEO, content, websites and AI automation & CRM — managed by one team. Book a free growth audit.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <PromoBar />
      <NavBar active="Home" />
      <main className="bg-white text-simple-ink">
        <Hero />
        <TrustedLogos />
        <MetaGooglePartners />
        <PromiseStrip />
        <Services />
        <GrowthSystem />
        <Results />
        <WebsiteShowcase />
        <WhyUs />
        <ReelsShowcase />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
