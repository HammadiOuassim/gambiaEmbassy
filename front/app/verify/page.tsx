"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthShell } from "@/components/auth-shell";

const initial = ["3", "7", "1", "8", "4", "2"];

export default function VerifyPage() {
  const router = useRouter();
  const [digits, setDigits] = useState(initial);
  const inputs = useRef<Array<HTMLInputElement | null>>([]);

  function setDigit(index: number, value: string) {
    const next = value.replace(/\D/g, "").slice(-1);
    const copy = [...digits];
    copy[index] = next;
    setDigits(copy);
    if (next && inputs.current[index + 1]) inputs.current[index + 1]?.focus();
  }

  return (
    <AuthShell>
      <form
        className="space-y-5"
        onSubmit={(event) => {
          event.preventDefault();
          router.push("/portal");
        }}
      >
        <p className="text-xs font-semibold tracking-[0.14em] text-emerald-800">STEP 2 OF 2</p>
        <div>
          <h1 className="text-4xl font-semibold tracking-tight">Check your messages</h1>
          <p className="mt-2 text-sm text-muted">
            Enter the 6-digit code sent to the mobile number ending in •• 47.
          </p>
        </div>
        <div>
          <p className="text-sm font-medium">Verification code</p>
          <div className="mt-3 grid grid-cols-6 gap-2">
            {digits.map((digit, index) => (
              <input
                key={index}
                ref={(node) => {
                  inputs.current[index] = node;
                }}
                inputMode="numeric"
                value={digit}
                aria-label={`Digit ${index + 1}`}
                onChange={(event) => setDigit(index, event.target.value)}
                className={`h-14 rounded-xl border text-center text-xl outline-none ${
                  index === 5 ? "border-amber-700/50" : "border-black/10"
                }`}
              />
            ))}
          </div>
          <div className="mt-2 flex justify-between text-xs text-muted">
            <span>You can request a new code in 00:38</span>
            <button type="button" className="text-emerald-800">
              Resend code
            </button>
          </div>
        </div>
        <label className="flex items-start gap-2 text-sm">
          <input type="checkbox" className="mt-1 accent-embassy" />
          <span>
            Trust this device for 30 days
            <span className="mt-1 block text-xs text-muted">
              Only choose this on a private device. You may still be asked to verify sensitive
              changes.
            </span>
          </span>
        </label>
        <button type="submit" className="w-full rounded-full bg-embassy py-3 text-sm font-semibold text-white">
          Verify and continue
        </button>
        <div className="flex items-center justify-between text-sm">
          <Link href="/login" className="text-emerald-800">
            ← Back to sign in
          </Link>
          <span className="text-muted">Change contact method</span>
        </div>
        <div className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-950">
          <p className="font-medium">Didn&apos;t request this code?</p>
          <p className="mt-1 text-emerald-900/80">
            Return to sign in and change your password. Embassy staff will never ask you to share a
            verification code.
          </p>
        </div>
      </form>
    </AuthShell>
  );
}
