const CHANNELS = [
  {
    name: "WhatsApp",
    href: "https://wa.me/12894121562",
    bg: "#25D366",
    icon: (
      <path
        fill="#fff"
        d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3c-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.2-.3-.2-.5-.3Z"
      />
    ),
  },
  {
    name: "Facebook Messenger",
    href: "https://m.me/Bizzonedigital",
    bg: "linear-gradient(135deg,#00B2FF,#006AFF 50%,#A033FF)",
    icon: (
      <path
        fill="#fff"
        d="M12 2C6.4 2 2 6.1 2 11.7c0 2.9 1.2 5.5 3.2 7.2v3.5l3-1.7c1.2.3 2.5.5 3.8.5 5.6 0 10-4.1 10-9.7S17.6 2 12 2Zm1 13-2.5-2.7-5 2.7 5.5-5.8 2.6 2.7 4.9-2.7L13 15Z"
      />
    ),
  },
  {
    name: "Instagram",
    href: "https://ig.me/m/bizzonedigital",
    bg: "linear-gradient(45deg,#FEDA75,#FA7E1E 25%,#D62976 50%,#962FBF 75%,#4F5BD5)",
    icon: (
      <g fill="none" stroke="#fff" strokeWidth="2">
        <rect x="4" y="4" width="16" height="16" rx="4.5" />
        <circle cx="12" cy="12" r="3.6" />
        <circle cx="17" cy="7" r="0.6" fill="#fff" />
      </g>
    ),
  },
];

/** "Or message us on" row with WhatsApp, Messenger and Instagram DM links. */
export default function MessageUs() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-[15px] font-semibold text-simple-ink-soft">Or message us on:</span>
      <div className="flex items-center gap-2.5">
        {CHANNELS.map((c) => (
          <a
            key={c.name}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Message us on ${c.name}`}
            title={c.name}
            className="flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-200 hover:-translate-y-0.5"
            style={{ background: c.bg }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24">
              {c.icon}
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
}
