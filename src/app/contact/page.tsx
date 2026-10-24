import PromoBar from "@/components/simple/PromoBar";
import NavBar from "@/components/simple/NavBar";
import Footer from "@/components/simple/Footer";
import ContactForm from "@/components/simple/ContactForm";
import Reveal from "@/components/simple/Reveal";
import { BUSINESS } from "@/data/site";
import { buildMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbSchema, contactPageSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Contact BizzOne Digital | Free Strategy Call",
  description:
    "Contact BizzOne Digital, a digital marketing agency in Mississauga. Call, email or send us a message to book your free strategy call.",
  path: "/contact",
});

const MAPS = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS.mapsQuery)}`;
const WHATSAPP = `https://wa.me/${BUSINESS.whatsappNumber}`;

function MethodRow({
  icon,
  label,
  value,
  href,
  fullColor,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  fullColor?: boolean;
}) {
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="flex gap-3.5 items-start no-underline text-inherit">
      <div className="flex-none w-[42px] h-[42px] rounded-[10px] bg-simple-chip-bg flex items-center justify-center overflow-hidden">
        {fullColor ? (
          icon
        ) : (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8C00FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          {icon}
        </svg>
        )}
      </div>
      <div>
        <div className="font-bold text-[15px] text-simple-ink">{label}</div>
        <div className="text-simple-ink-soft text-[15px]">{value}</div>
      </div>
    </a>
  );
}

export default function ContactPage() {
  return (
    <>
      <JsonLd data={[contactPageSchema(), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])]} />
      <PromoBar />
      <NavBar active="Contact" />
      <main className="bg-white text-simple-ink">

      <div className="bg-simple-surface-alt border-b border-simple-border">
        <Reveal className="max-w-[820px] mx-auto px-6 pt-[72px] pb-14 flex flex-col items-center gap-[18px] text-center">
          <div className="text-sm font-bold tracking-[0.12em] uppercase text-simple-purple-deep">Contact Us</div>
          <h1 className="m-0 font-display font-extrabold leading-[1.1] tracking-tight text-[clamp(2.3rem,4.6vw,3.6rem)]">
            Let&rsquo;s talk about growing your business
          </h1>
          <p className="m-0 text-[19px] text-simple-ink-soft max-w-[620px]">
            Book a free strategy call, ask about a project or just say hello. Call, WhatsApp, email
            or use the form below and our team will get back to you within 24–48 hours.
          </p>
        </Reveal>
      </div>

      <Reveal className="max-w-[1120px] mx-auto px-6 py-16 flex flex-wrap gap-8 items-start">
        <div className="flex-[1_1_320px] min-w-0 flex flex-col gap-[22px] bg-white border border-simple-border rounded-[18px] p-8">
          <div className="font-display font-extrabold text-xl">Get in touch</div>
          <MethodRow
            icon={<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />}
            label="Call us"
            value={BUSINESS.phoneDisplay}
            href={BUSINESS.phoneHref}
          />
          <MethodRow
            icon={
              <svg width="42" height="42" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="12" fill="#25D366" />
                <path
                  d="M16.5 13.4c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.3-.1-1.1-.4-2.1-1.3-.8-.7-1.3-1.5-1.4-1.8-.1-.3 0-.4.1-.5l.3-.4c.1-.1.2-.2.2-.4.1-.1 0-.3 0-.4-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.3c.1.2 1.6 2.4 3.8 3.4.5.2.9.4 1.3.5.5.2 1 .1 1.3.1.4-.1 1.2-.5 1.4-1 .2-.5.2-.8.1-1z"
                  fill="#FFFFFF"
                />
              </svg>
            }
            fullColor
            label="WhatsApp"
            value="Chat with us on WhatsApp"
            href={WHATSAPP}
          />
          <MethodRow
            icon={<><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m3 6 9 7 9-7" /></>}
            label="Email"
            value={BUSINESS.email}
            href={`mailto:${BUSINESS.email}`}
          />
          <MethodRow
            icon={<><path d="M12 22s7-7.4 7-12.5A7 7 0 0 0 5 9.5C5 14.6 12 22 12 22z" /><circle cx="12" cy="9.5" r="2.5" /></>}
            label="Office"
            value={BUSINESS.mapsQuery}
            href={MAPS}
          />
          <div className="border-t border-simple-border pt-[18px] flex gap-3.5 items-start">
            <div className="flex-none w-[42px] h-[42px] rounded-[10px] bg-simple-chip-bg flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8C00FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 8v4l3 2" />
              </svg>
            </div>
            <div>
              <div className="font-bold text-[15px]">Business hours</div>
              <div className="text-simple-ink-soft text-[15px]">
                {BUSINESS.hours.display}
                <br />
                {BUSINESS.hours.closed}
              </div>
            </div>
          </div>
        </div>

        <ContactForm />
      </Reveal>
      </main>

      <Footer />
    </>
  );
}
