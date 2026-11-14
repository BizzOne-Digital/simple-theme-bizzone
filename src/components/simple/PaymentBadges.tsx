import Image from "next/image";

/**
 * Stripe + PayPal trust row (hero and pricing areas only, per owner).
 * `center` centres the row under a pricing block; `text` lets each spot use its own wording.
 */
export default function PaymentBadges({
  center = false,
  text = "Trusted payment gateways to keep your payments 100% secure.",
}: {
  center?: boolean;
  text?: string;
}) {
  return (
    <div className={`flex flex-col gap-3 ${center ? "items-center text-center" : ""}`}>
      <div className="text-[15px] font-bold text-simple-ink">{text}</div>
      <div className={`flex flex-wrap items-center gap-3 ${center ? "justify-center" : ""}`}>
        <span className="inline-flex h-11 items-center rounded-lg border border-simple-border bg-white px-4">
          <Image src="/logos/stripe.webp" alt="Stripe" width={230} height={96} className="h-6 w-auto" />
        </span>
        <span className="inline-flex h-11 items-center rounded-lg border border-simple-border bg-white px-4">
          <Image src="/logos/paypal.webp" alt="PayPal" width={386} height={96} className="h-6 w-auto" />
        </span>
      </div>
    </div>
  );
}
