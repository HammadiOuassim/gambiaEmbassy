"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthShell } from "@/components/auth-shell";

export default function LoginPage() {
  const router = useRouter();
  const [show, setShow] = useState(false);

  return (
    <AuthShell>
      <form
        className="space-y-5"
        onSubmit={(event) => {
          event.preventDefault();
          router.push("/verify");
        }}
      >
        <p className="text-xs font-semibold tracking-[0.14em] text-emerald-800">STEP 1 OF 2</p>
        <div>
          <h1 className="text-4xl font-semibold tracking-tight">Welcome back</h1>
          <p className="mt-2 text-sm text-muted">
            Sign in to continue to your Embassy of The Gambia citizen account.
          </p>
        </div>
        <label className="block text-sm font-medium">
          Email address or Citizen ID
          <span className="mt-2 flex items-center gap-2 rounded-xl border border-amber-700/40 px-3 py-3">
            <span aria-hidden>⌕</span>
            <input
              name="identity"
              defaultValue="mariam.jallow@example.com"
              className="w-full bg-transparent outline-none"
              autoComplete="username"
            />
          </span>
          <span className="mt-1 block text-xs font-normal text-muted">
            Use the email address or Citizen ID linked to your account.
          </span>
        </label>
        <label className="block text-sm font-medium">
          Password
          <span className="mt-2 flex items-center gap-2 rounded-xl border border-black/10 px-3 py-3">
            <span aria-hidden>🔒</span>
            <input
              name="password"
              type={show ? "text" : "password"}
              defaultValue="embassy-demo"
              className="w-full bg-transparent outline-none"
              autoComplete="current-password"
            />
            <button type="button" className="text-xs text-emerald-800" onClick={() => setShow((value) => !value)}>
              {show ? "Hide" : "Show"}
            </button>
          </span>
        </label>
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" defaultChecked className="accent-embassy" />
            Remember me on this device
          </label>
          <Link href="/forgot-password" className="text-emerald-800">
            Forgot password?
          </Link>
        </div>
        <button
          type="submit"
          className="w-full rounded-full bg-embassy py-3 text-sm font-semibold text-white"
        >
          Sign in securely →
        </button>
        <p className="rounded-2xl bg-sand py-3 text-center text-sm">
          New to citizen services?{" "}
          <Link href="/register" className="font-semibold text-emerald-800">
            Create a citizen account
          </Link>
        </p>
        <div className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-950">
          <p className="font-medium">Your privacy is protected</p>
          <p className="mt-1 text-emerald-900/80">
            We use encrypted connections and never ask for your password by phone, email or
            WhatsApp.
          </p>
        </div>
        <div className="flex items-end justify-between border-t border-black/5 pt-4 text-sm">
          <span>
            <span className="block font-medium">Need urgent consular help?</span>
            <span className="text-xs text-muted">Emergency support is available 24 hours.</span>
          </span>
          <a href="tel:+2204228222" className="font-semibold text-embassy">
            +220 422 8222
          </a>
        </div>
      </form>
    </AuthShell>
  );
}
