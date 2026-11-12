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
import { CLIENT_REELS, OFFER_REELS } from "@/data/reels";
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
        <ReelsShowcase
          id="video-work"
          alt
          eyebrow="Video Production"
          heading={
            <>
              Scroll-stopping videos <span className="text-simple-purple">we create for clients</span>
            </>
          }
          sub="Short-form reels for Instagram, TikTok and ads, from shoot to edit, built to stop the scroll and bring in leads."
          cta={{ href: "/#book", label: "Get Videos Like These →" }}
          reels={CLIENT_REELS}
          gridClass="lg:grid-cols-4"
        />
        <WhyUs />
        <ReelsShowcase
          id="reels"
          eyebrow="Watch & See"
          heading={
            <>
              A 5-page website for <span className="text-simple-purple">$79, one-time</span>
            </>
          }
          sub="No subscriptions, no hidden fees, no tech skills needed. We handle the full setup for you."
          cta={{ href: "/#book", label: "Book Free Consultation →" }}
          reels={OFFER_REELS}
        />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
