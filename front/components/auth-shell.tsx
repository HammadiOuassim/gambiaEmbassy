import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Crest } from "@/components/crest";

export function AuthShell({ children }: { children: ReactNode }) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <aside className="auth-stripes relative hidden flex-col justify-between px-10 py-10 text-white lg:flex">
        <Link href="/" className="flex items-center gap-3">
          <Crest />
          <span>
            <span className="block text-sm font-semibold tracking-wide">EMBASSY OF THE GAMBIA</span>
            <span className="block text-[11px] text-white/70">CITIZEN SERVICES</span>
          </span>
        </Link>
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 text-xs tracking-wide text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
            OFFICIAL GOVERNMENT SERVICE
          </p>
          <h1 className="mt-6 max-w-md text-5xl font-semibold leading-tight tracking-tight">
            Citizen services, secured with care.
          </h1>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/75">
            Manage consular requests and verified documents through the Embassy of The Gambia’s
            secure citizen platform.
          </p>
        </div>
        <div>
          <div className="mb-4 flex items-center gap-3 text-sm text-white/80">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
              <LockIcon />
            </span>
            <span>
              <span className="block font-medium text-white">Protected session</span>
              <span className="text-xs text-white/65">Encrypted access · Automatic sign-out</span>
            </span>
          </div>
          <div className="overflow-hidden rounded-2xl">
            {/* The location chip is already part of this photograph. */}
            <Image
              src="/embassy-building.jpg"
              alt="Embassy of The Gambia in Doha"
              width={506}
              height={378}
              className="h-48 w-full object-cover object-left"
            />
          </div>
          <div className="mt-4 flex h-1.5 overflow-hidden rounded-full">
            <span className="w-1/3 bg-[#CE1126]" />
            <span className="w-1/12 bg-white" />
            <span className="w-1/4 bg-[#0C1C8C]" />
            <span className="w-1/12 bg-white" />
            <span className="flex-1 bg-[#3A7728]" />
          </div>
        </div>
      </aside>
      <section className="flex min-h-screen flex-col bg-white">
        <div className="flex items-center justify-between px-6 py-5 sm:px-10">
          <Link href="/" className="flex items-center gap-2">
            <Crest className="h-8 w-8" />
            <span>
              <span className="block text-xs font-semibold tracking-wide text-embassy">
                EMBASSY OF THE GAMBIA
              </span>
              <span className="block text-[10px] text-muted">CITIZEN SERVICES</span>
            </span>
          </Link>
          <div className="flex items-center gap-4 text-sm text-ink/80">
            <span className="hidden sm:inline">English</span>
            <span className="inline-flex items-center gap-1 text-emerald-800">
              <LockIcon />
              Secure session
            </span>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center px-6 py-8 sm:px-10">
          <div className="w-full max-w-md">{children}</div>
        </div>
        <div className="flex items-center justify-between px-6 py-4 text-xs text-muted sm:px-10">
          <p>© 2026 Embassy of The Gambia</p>
          <p className="flex gap-4">
            <span>Privacy</span>
            <span>Accessibility</span>
            <span>Help centre</span>
          </p>
        </div>
      </section>
    </div>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 018 0v3" />
    </svg>
  );
}
