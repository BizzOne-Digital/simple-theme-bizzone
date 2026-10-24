import PromoBar from "@/components/simple/PromoBar";
import NavBar from "@/components/simple/NavBar";
import Footer from "@/components/simple/Footer";
import PricingContent from "@/components/simple/PricingContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Pricing | BizzOne Digital",
  description:
    "Agency results without agency prices. Websites from $79, Meta Ads, Google Ads, SEO, video and social media from $99/mo, AI automation & CRM, and premium bundles.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <PromoBar />
      <NavBar active="Pricing" />
      <PricingContent />
      <Footer />
    </>
  );
}
