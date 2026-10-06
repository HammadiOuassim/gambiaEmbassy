"use client";

import { useState } from "react";
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
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white">
      <div className="flex h-24 flex-col">
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
          <div className="mx-auto flex h-full max-w-7xl items-center gap-3 px-4 sm:px-6">
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
                className="hidden rounded-full border border-embassy/20 px-4 py-2 text-sm font-medium text-embassy hover:bg-embassy-soft sm:inline-flex"
              >
                Citizen Login
              </Link>
              <Link
                href="/register"
                className="rounded-full bg-embassy px-3 py-2 text-sm font-medium text-white hover:bg-embassy-mid sm:px-4"
              >
                Register
              </Link>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-embassy xl:hidden"
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
        <nav className="border-b border-black/5 bg-white px-4 py-3 xl:hidden">
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
