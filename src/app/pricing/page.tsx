import PromoBar from "@/components/simple/PromoBar";
import NavBar from "@/components/simple/NavBar";
import Footer from "@/components/simple/Footer";
import PricingContent from "@/components/simple/PricingContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Our Plans | BizzOne Digital",
  description:
    "Our plans for websites, Meta Ads, Google Ads, SEO, video, social media, AI automation & CRM, and premium bundles. Contact sales for a quote.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <PromoBar />
      <NavBar active="Our Plans" />
      <PricingContent />
      <Footer />
    </>
  );
}
