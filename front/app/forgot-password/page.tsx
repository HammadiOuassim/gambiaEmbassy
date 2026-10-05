"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthShell } from "@/components/auth-shell";

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState("mariam.jallow@");
  const [submitted, setSubmitted] = useState(false);
  const invalid = submitted && !isEmail(email);

  return (
    <AuthShell>
      <form
        className="space-y-5"
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
          if (isEmail(email)) router.push("/reset-success");
        }}
      >
        <Link href="/login" className="text-sm text-emerald-800">
          ← Back to sign in
        </Link>
        <p className="inline-flex rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold tracking-wide text-amber-800">
          ACCOUNT RECOVERY
        </p>
        <div>
          <h1 className="text-4xl font-semibold tracking-tight">Reset your password</h1>
          <p className="mt-2 text-sm text-muted">
            Enter the email address or Citizen ID linked to your account. We&apos;ll send recovery
            instructions if we find a match.
          </p>
        </div>
        <label className="block text-sm font-medium">
          Email address or Citizen ID
          <span
            className={`mt-2 flex items-center gap-2 rounded-xl border px-3 py-3 ${
              invalid ? "border-red-300 bg-red-50" : "border-black/10"
            }`}
          >
            <span aria-hidden>✉</span>
            <input
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                setSubmitted(false);
              }}
              className="w-full bg-transparent outline-none"
              autoComplete="email"
            />
          </span>
          {invalid && (
            <span className="mt-2 block text-sm text-red-600">
              Enter a complete email address, for example name@example.com.
            </span>
          )}
        </label>
        <button type="submit" className="w-full rounded-full bg-embassy py-3 text-sm font-semibold text-white">
          Send recovery instructions
        </button>
        <div className="rounded-2xl border border-black/5 px-4 py-4 text-sm">
          <p className="font-medium">What happens next</p>
          <ol className="mt-3 space-y-2 text-muted">
            <li>1. We&apos;ll send a time-limited recovery link to your verified contact.</li>
            <li>2. Follow the link to choose a new, secure password.</li>
          </ol>
        </div>
        <div className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-950">
          <p className="font-medium">Your account remains private</p>
          <p className="mt-1 text-emerald-900/80">
            For your security, we won&apos;t confirm whether an account exists. Recovery links expire
            after 15 minutes.
          </p>
        </div>
        <p className="text-center">
          <Link href="/login" className="text-sm text-emerald-800">
            Return to citizen login
          </Link>
        </p>
      </form>
    </AuthShell>
  );
}
