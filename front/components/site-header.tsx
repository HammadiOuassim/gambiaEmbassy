import Link from "next/link";
import { Crest, GambiaFlag, QatarFlag } from "@/components/crest";

const links = [
  ["Home", "/"],
  ["About The Gambia", "/#about"],
  ["About Embassy", "/#embassy"],
  ["Consular Services", "/#services"],
  ["Trade & Investment", "/#discover"],
  ["Tourism", "/#discover"],
  ["News & Events", "/#news"],
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-white">
      <div className="bg-embassy text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-xs sm:px-6">
          <p className="flex items-center gap-2">
            <PhoneIcon />
            <span>Citizen emergency line · +974 4486 7117 · Available 24/7</span>
          </p>
          <div className="hidden items-center gap-3 md:flex">
            <span className="inline-flex overflow-hidden rounded-full ring-1 ring-white/30">
              <GambiaFlag className="h-4 w-6" />
            </span>
            <span className="inline-flex overflow-hidden rounded-full ring-1 ring-white/30">
              <QatarFlag className="h-4 w-6" />
            </span>
            <span className="text-white/80">Accessibility</span>
            <span className="font-semibold">EN</span>
            <span className="text-white/55" title="Arabic will be added after the English release">
              العربية
            </span>
          </div>
        </div>
      </div>
      <div className="border-b border-black/5">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6">
          <Link href="/" className="flex items-center gap-3">
            <Crest />
            <span className="leading-tight">
              <span className="block text-sm font-semibold tracking-wide text-embassy">
                EMBASSY OF THE GAMBIA
              </span>
              <span className="block text-[11px] tracking-wide text-muted">
                DOHA · STATE OF QATAR
              </span>
            </span>
          </Link>
          <nav className="ml-auto hidden items-center gap-4 text-sm text-ink/80 xl:flex">
            {links.map(([label, href]) => (
              <Link key={label} href={href} className="hover:text-embassy">
                {label}
              </Link>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-2 xl:ml-4">
            <Link
              href="/login"
              className="rounded-full border border-embassy/20 px-4 py-2 text-sm font-medium text-embassy hover:bg-embassy-soft"
            >
              Citizen Login
            </Link>
            <Link
              href="/register"
              className="rounded-full bg-embassy px-4 py-2 text-sm font-medium text-white hover:bg-embassy-mid"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 4h4l2 5-3 2a12 12 0 006 6l2-3 5 2v4a2 2 0 01-2 2A16 16 0 014 6a2 2 0 012-2z" />
    </svg>
  );
}
