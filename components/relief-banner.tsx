const ReliefBanner = () => (
  <a
    href="https://pmdrf.nchl.com.np/"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex h-10 w-full items-center justify-center gap-x-2 overflow-hidden whitespace-nowrap bg-primary px-4 text-[#0a0a0a]"
  >
    {/* the site font is wide, so the full line only shows where it comfortably fits */}
    <span className="hidden text-[10px] uppercase leading-none tracking-wide xl:inline">
      {`Nepal is recovering from severe floods. Donate to the Government of Nepal Prime Minister's Disaster Relief Fund`}
    </span>
    <span className="text-[10px] uppercase leading-none tracking-wide xl:hidden">
      Donate to Nepal flood relief
    </span>
    <svg
      className="h-3 w-3 shrink-0 transition-transform group-hover:translate-x-0.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  </a>
);

export default ReliefBanner;
