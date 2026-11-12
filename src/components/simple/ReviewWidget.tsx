import Script from "next/script";

/** Live Google reviews widget (ReputationHub embed supplied by the owner). */
export default function ReviewWidget() {
  return (
    <div className="border-b border-simple-border bg-white">
      <div className="mx-auto max-w-[1240px] px-6 py-10">
        <iframe
          className="lc_reviews_widget"
          src="https://reputationhub.site/reputation/widgets/review_widget/gSKYbmYEz3uDdVAuThaS"
          title="BizzOne Digital customer reviews"
          scrolling="no"
          style={{ minWidth: "100%", width: "100%", border: 0 }}
        />
        <Script src="https://reputationhub.site/reputation/assets/review-widget.js" strategy="afterInteractive" />
      </div>
    </div>
  );
}
