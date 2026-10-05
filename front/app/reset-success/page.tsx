import Link from "next/link";
import { AuthShell } from "@/components/auth-shell";

export default function ResetSuccessPage() {
  return (
    <AuthShell>
      <div className="space-y-5 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-3xl text-emerald-700">
          ✓
        </div>
        <p className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold tracking-wide text-emerald-800">
          PASSWORD UPDATED
        </p>
        <div>
          <h1 className="text-4xl font-semibold tracking-tight">Your password has been reset</h1>
          <p className="mt-2 text-sm text-muted">
            Your new password is ready. Sign in again to continue securely to your citizen account.
          </p>
        </div>
        <dl className="rounded-2xl bg-sand px-4 py-3 text-left text-sm">
          <div className="flex justify-between py-1">
            <dt className="text-muted">Account</dt>
            <dd>ma••••@example.com</dd>
          </div>
          <div className="flex justify-between py-1">
            <dt className="text-muted">Updated</dt>
            <dd>30 Sep 2026, 19:06 GMT</dd>
          </div>
          <div className="flex justify-between py-1">
            <dt className="text-muted">Other sessions</dt>
            <dd className="text-emerald-800">Signed out</dd>
          </div>
        </dl>
        <Link
          href="/login"
          className="block rounded-full bg-embassy py-3 text-sm font-semibold text-white"
        >
          Continue to citizen login →
        </Link>
        <Link href="/" className="block text-sm text-emerald-800">
          Go to embassy website
        </Link>
        <div className="rounded-2xl bg-emerald-50 px-4 py-3 text-left text-sm text-emerald-950">
          <p className="font-medium">Account security restored</p>
          <p className="mt-1 text-emerald-900/80">
            Any other active sessions were ended. Use your new password the next time you sign in.
          </p>
        </div>
      </div>
    </AuthShell>
  );
}
