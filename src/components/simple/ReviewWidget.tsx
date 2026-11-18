import Script from "next/script";
import { BUSINESS } from "@/data/site";

/** Live Google reviews widget (ReputationHub embed supplied by the owner), with the Google reviews button under it. */
export default function ReviewWidget() {
  return (
    <div className="border-b border-simple-border bg-white">
      <div className="mx-auto flex max-w-[1240px] flex-col items-center gap-6 px-6 py-10">
        <iframe
          className="lc_reviews_widget"
          src="https://reputationhub.site/reputation/widgets/review_widget/gSKYbmYEz3uDdVAuThaS"
          title="BizzOne Digital customer reviews"
          scrolling="no"
          style={{ minWidth: "100%", width: "100%", border: 0 }}
        />
        <Script src="https://reputationhub.site/reputation/assets/review-widget.js" strategy="afterInteractive" />
        <a
          href={BUSINESS.googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-[10px] border-[1.5px] border-simple-ink px-[22px] py-[13px] font-bold text-simple-ink no-underline transition-all duration-200 hover:-translate-y-0.5"
        >
          Read Our Google Reviews ↗
        </a>
      </div>
    </div>
  );
}
