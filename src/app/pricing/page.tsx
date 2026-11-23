import PromoBar from "@/components/simple/PromoBar";
import NavBar from "@/components/simple/NavBar";
import Footer from "@/components/simple/Footer";
import PricingContent from "@/components/simple/PricingContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Digital Marketing & Website Plans | BizzOne Digital",
  description:
    "See BizzOne Digital plans for websites, Meta and Google ads, SEO, video, social media and AI automation. One-time website packages. Contact sales for a quote.",
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
