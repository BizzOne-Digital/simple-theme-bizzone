import Image from "next/image";

/**
 * Stripe + PayPal trust row. Shown wherever prices appear (owner request).
 * `dark` is for the footer; `center` centres the row under a pricing block.
 */
export default function PaymentBadges({ dark = false, center = false }: { dark?: boolean; center?: boolean }) {
  return (
    <div className={`flex flex-col gap-3 ${center ? "items-center text-center" : ""}`}>
      <div className={`text-[15px] font-bold ${dark ? "text-white" : "text-simple-ink"}`}>
        Trusted payment gateways to keep your payments 100% secure.
      </div>
      <div className={`flex flex-wrap items-center gap-3 ${center ? "justify-center" : ""}`}>
        <span className="inline-flex h-14 items-center rounded-xl border border-simple-border bg-white px-5">
          <Image src="/logos/stripe.webp" alt="Stripe" width={230} height={96} className="h-8 w-auto" />
        </span>
        <span className="inline-flex h-14 items-center rounded-xl border border-simple-border bg-white px-5">
          <Image src="/logos/paypal.webp" alt="PayPal" width={386} height={96} className="h-8 w-auto" />
        </span>
      </div>
    </div>
  );
}
