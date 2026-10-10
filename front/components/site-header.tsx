"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Crest, GambiaFlag, QatarFlag } from "@/components/crest";

const primaryLinks = [
  ["Home", "/"],
  ["About The Gambia", "/#about"],
  ["Consular Services", "/#services"],
] as const;

const moreLinks = [
  ["Trade & Investment", "/#discover"],
  ["News & Events", "/#news"],
] as const;

const links = [...primaryLinks, ...moreLinks] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function closeMoreMenu(event: MouseEvent) {
      if (!moreMenuRef.current?.contains(event.target as Node)) {
        setMoreOpen(false);
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMoreOpen(false);
      }
    }

    document.addEventListener("mousedown", closeMoreMenu);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("mousedown", closeMoreMenu);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white">
      <div
        className="h-1.5 w-full"
        style={{
          background:
            "linear-gradient(90deg, #CE1126 0 30%, #ffffff 30% 34%, #0C1C8C 34% 66%, #ffffff 66% 70%, #3A7728 70% 100%)",
        }}
        aria-hidden
      />
      <div className="flex h-[calc(6rem-0.375rem)] flex-col">
        <div className="bg-embassy text-white">
          <div className="mx-auto flex h-8 max-w-7xl items-center justify-between gap-3 px-4 text-xs sm:px-6">
            <p className="flex min-w-0 items-center gap-2">
              <PhoneIcon />
              <span className="truncate sm:hidden">Emergency · +974 4486 7117</span>
              <span className="hidden truncate sm:inline">
                Citizen emergency line · +974 4486 7117 · Available 24/7
              </span>
              <span className="ml-1 hidden overflow-hidden rounded-full ring-1 ring-white/40 sm:inline-flex">
                <GambiaFlag className="h-4 w-6" />
              </span>
              <span className="hidden overflow-hidden rounded-full ring-1 ring-white/40 sm:inline-flex">
                <QatarFlag className="h-4 w-6" />
              </span>
            </p>
            <div className="hidden shrink-0 items-center gap-3 md:flex">
              <span className="text-white/80">Accessibility</span>
              <span className="font-semibold">EN</span>
              <span className="text-white/55" title="Arabic will be added after the English release">
                العربية
              </span>
            </div>
          </div>
        </div>
        <div className="min-h-0 flex-1 border-b border-black/5">
          <div className="relative mx-auto flex h-full max-w-7xl flex-nowrap items-center gap-3 px-4 pr-16 sm:px-6 sm:pr-20">
            <span
              aria-hidden
              className="pointer-events-none absolute top-0 right-0 h-8 w-12"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%)",
                background:
                  "linear-gradient(180deg, #CE1126 0 30%, #ffffff 30% 34%, #0C1C8C 34% 66%, #ffffff 66% 70%, #3A7728 70% 100%)",
              }}
            />
            <Link href="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
              <Crest className="h-9 w-9 shrink-0 sm:h-10 sm:w-10" />
              <span className="hidden leading-tight sm:block">
                <span className="block text-sm font-semibold tracking-wide text-embassy">
                  EMBASSY OF THE GAMBIA
                </span>
                <span className="hidden text-[11px] tracking-wide text-muted sm:block">
                  DOHA · STATE OF QATAR
                </span>
              </span>
            </Link>
            <nav className="ml-5 hidden min-w-0 flex-1 items-center justify-end gap-3 whitespace-nowrap text-[13px] text-ink/80 lg:flex xl:gap-4 xl:text-sm">
              {primaryLinks.map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className="group relative mx-0.5 shrink-0 rounded-md px-2 py-1.5 text-ink/80 transition-[transform,box-shadow,filter] duration-300 ease-out after:absolute after:-bottom-1 after:right-0 after:left-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-[linear-gradient(90deg,#CE1126,#0C1C8C)] after:transition-transform after:duration-[400ms] after:ease-out hover:brightness-125 hover:shadow-[0_0px_30px_rgba(0,0,0,0.3)] hover:after:scale-x-100 focus-visible:brightness-125 focus-visible:shadow-[0_0px_30px_rgba(0,0,0,0.3)] focus-visible:after:scale-x-100 motion-safe:hover:scale-[1.02] motion-safe:focus-visible:scale-[1.02]"
                >
                  <span className="group-hover:bg-[linear-gradient(90deg,#CE1126,#0C1C8C)] group-hover:bg-clip-text group-hover:text-transparent group-focus-visible:bg-[linear-gradient(90deg,#CE1126,#0C1C8C)] group-focus-visible:bg-clip-text group-focus-visible:text-transparent">
                    {label}
                  </span>
                </Link>
              ))}
              <div ref={moreMenuRef} className="relative shrink-0">
                <button
                  type="button"
                  className="group relative mx-0.5 inline-flex items-center gap-1 rounded-md px-2 py-1.5 text-ink/80 transition-[transform,box-shadow,filter] duration-300 ease-out after:absolute after:-bottom-1 after:right-0 after:left-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-[linear-gradient(90deg,#CE1126,#0C1C8C)] after:transition-transform after:duration-[400ms] after:ease-out hover:brightness-125 hover:shadow-[0_0px_30px_rgba(0,0,0,0.3)] hover:after:scale-x-100 focus-visible:brightness-125 focus-visible:shadow-[0_0px_30px_rgba(0,0,0,0.3)] focus-visible:after:scale-x-100 motion-safe:hover:scale-[1.02] motion-safe:focus-visible:scale-[1.02]"
                  aria-expanded={moreOpen}
                  aria-haspopup="menu"
                  onClick={() => setMoreOpen((value) => !value)}
                >
                  <span className="transition-all duration-300 group-hover:bg-[linear-gradient(90deg,#CE1126,#0C1C8C)] group-hover:bg-clip-text group-hover:text-transparent group-focus-visible:bg-[linear-gradient(90deg,#CE1126,#0C1C8C)] group-focus-visible:bg-clip-text group-focus-visible:text-transparent">
                    More
                  </span>
                  <ChevronIcon open={moreOpen} />
                </button>
                {moreOpen ? (
                  <div
                    role="menu"
                    className="absolute top-full right-0 z-50 mt-3 w-52 rounded-xl border border-black/10 bg-white p-1.5 shadow-lg"
                  >
                    {moreLinks.map(([label, href]) => (
                      <Link
                        key={label}
                        href={href}
                        role="menuitem"
                        onClick={() => setMoreOpen(false)}
                        className="block rounded-lg px-3 py-2.5 text-sm text-ink transition-colors hover:bg-sand hover:text-embassy"
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            </nav>
            <div className="ml-auto flex shrink-0 items-center gap-2 lg:ml-3">
              <Link
                href="/login"
                className="hidden rounded-full border border-embassy/20 px-4 py-2 text-sm font-medium whitespace-nowrap text-embassy transition-shadow duration-300 hover:bg-embassy-soft hover:shadow-[0_12px_30px_rgba(12,28,140,0.3)] lg:inline-flex"
              >
                Citizen Login
              </Link>
              <Link
                href="/register"
                className="rounded-full bg-[#CE1126] px-3 py-2 text-sm font-medium whitespace-nowrap text-white transition-shadow duration-300 hover:bg-[#b10e20] hover:shadow-[0_12px_30px_rgba(206,17,38,0.32)] sm:px-4"
              >
                Register
              </Link>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-embassy lg:hidden"
                aria-expanded={open}
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((value) => !value)}
              >
                <MenuIcon open={open} />
              </button>
            </div>
          </div>
        </div>
      </div>
      {open ? (
        <nav className="border-b border-black/5 bg-white px-4 py-3 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {links.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm text-ink hover:bg-sand"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full border border-embassy/20 px-4 py-3 text-center text-sm font-medium text-embassy sm:hidden"
            >
              Citizen Login
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      {open ? (
        <path d="M6 6l12 12M18 6L6 18" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" />
      )}
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 4h4l2 5-3 2a12 12 0 006 6l2-3 5 2v4a2 2 0 01-2 2A16 16 0 014 6a2 2 0 012-2z" />
    </svg>
  );
}
