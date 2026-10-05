"use client";

import { useState } from "react";
import Link from "next/link";
import { Crest } from "@/components/crest";

const steps = ["Personal Details", "Passport & QID", "Address & Emergency", "Family Information"];

export default function RegisterPage() {
  const [step, setStep] = useState(2);
  const [saved, setSaved] = useState("Last saved 10:42 AM");
  const [done, setDone] = useState(false);

  return (
    <div className="min-h-screen bg-[#f7f6f2]">
      <header className="border-b border-black/5 bg-[#f7f6f2]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Crest className="h-9 w-9" />
            <span>
              <span className="block text-xs font-semibold tracking-wide text-embassy">
                EMBASSY OF THE GAMBIA
              </span>
              <span className="block text-[10px] text-muted">DOHA · STATE OF QATAR</span>
            </span>
          </Link>
          <div className="flex items-center gap-4 text-sm">
            <Link href="/portal" className="hidden text-emerald-800 sm:inline">
              Secure embassy portal
            </Link>
            <span className="text-muted" title="Arabic will be added after the English release">
              العربية
            </span>
            <Link href="/login" className="rounded-full border border-black/10 bg-white px-4 py-2">
              Citizen Login
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <p className="text-xs font-semibold tracking-[0.16em] text-embassy-mid">CITIZEN SERVICES</p>
        <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">
              Register as a Gambian citizen in Qatar
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-muted">
              Keep your details current so the Embassy can provide faster consular assistance and
              contact you safely when needed.
            </p>
          </div>
          <p className="text-xs text-emerald-800">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-500" />
            Draft saved <span className="text-muted">{saved}</span>
          </p>
        </div>

        {done ? (
          <section className="mt-8 rounded-3xl bg-white p-8">
            <p className="text-xs font-semibold tracking-[0.14em] text-emerald-800">SUBMITTED</p>
            <h2 className="mt-2 text-3xl font-semibold">Registration received</h2>
            <p className="mt-3 max-w-xl text-sm text-muted">
              Mariama Fatou Jallow is recorded as a draft citizen registration. Embassy staff can
              review it from the administration dashboard. This preview does not store the form on a
              server.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/portal" className="rounded-full bg-embassy px-5 py-3 text-sm text-white">
                Open citizen portal
              </Link>
              <Link href="/admin" className="rounded-full border border-black/10 px-5 py-3 text-sm">
                Open staff view
              </Link>
            </div>
          </section>
        ) : (
          <div className="mt-8 grid gap-5 lg:grid-cols-[240px_1fr_280px]">
            <aside className="rounded-3xl bg-white p-5">
              <p className="text-sm font-semibold">Your registration</p>
              <ol className="mt-4 space-y-3">
                {steps.map((label, index) => (
                  <li key={label}>
                    <button
                      type="button"
                      onClick={() => setStep(index)}
                      className="flex w-full items-center gap-3 text-left text-sm"
                    >
                      <span
                        className={`flex h-7 w-7 items-center justify-center rounded-full text-xs ${
                          index < step
                            ? "bg-emerald-700 text-white"
                            : index === step
                              ? "bg-embassy text-white"
                              : "bg-stone-100 text-muted"
                        }`}
                      >
                        {index < step ? "✓" : index + 1}
                      </span>
                      <span>
                        <span className="block text-[10px] tracking-wide text-muted">
                          STEP {index + 1}
                        </span>
                        {label}
                      </span>
                    </button>
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-xs text-muted">COMPLETION</p>
              <div className="mt-2 h-1.5 rounded-full bg-stone-100">
                <div className="h-full rounded-full bg-emerald-700" style={{ width: `${(step + 1) * 25}%` }} />
              </div>
              <p className="mt-1 text-right text-xs">{(step + 1) * 25}%</p>
              <div className="mt-4 rounded-2xl bg-emerald-50 p-3 text-xs text-emerald-950">
                Protected information. Your data is encrypted and used only for official consular
                purposes.
              </div>
            </aside>

            <section className="rounded-3xl bg-white p-6 sm:p-8">
              <p className="text-xs font-semibold tracking-[0.14em] text-emerald-800">
                STEP {step + 1} OF 4
              </p>
              {step === 0 && <PersonalStep />}
              {step === 1 && <PassportStep />}
              {step === 2 && <AddressStep />}
              {step === 3 && <FamilyStep />}
              <div className="mt-8 flex items-center justify-between">
                <button
                  type="button"
                  disabled={step === 0}
                  onClick={() => setStep((value) => Math.max(0, value - 1))}
                  className="rounded-full border border-black/10 px-4 py-2 text-sm disabled:opacity-40"
                >
                  ← Back
                </button>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setSaved("Last saved just now")}
                    className="rounded-full border border-black/10 px-4 py-2 text-sm"
                  >
                    Save Progress
                  </button>
                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={() => setStep((value) => value + 1)}
                      className="rounded-full bg-embassy px-4 py-2 text-sm text-white"
                    >
                      Next Step →
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setDone(true)}
                      className="rounded-full bg-embassy px-4 py-2 text-sm text-white"
                    >
                      Submit Registration
                    </button>
                  )}
                </div>
              </div>
            </section>

            <aside className="space-y-4">
              <Summary title="Personal Details" done={step > 0} lines={["Mariama Fatou Jallow", "14 May 1992 · Banjul", "Female", "Gambian"]} />
              <Summary title="Passport & QID" done={step > 1} lines={["PC081924 · 08 Nov 2028", "QID 29245001783", "17 Feb 2027"]} />
              <div className="rounded-3xl bg-[#f3f1ea] p-5 text-sm">
                <p className="text-xs text-muted">Next: {steps[Math.min(step + 1, 3)]}</p>
                <p className="mt-2 font-medium">STEP {Math.min(step + 2, 4)}</p>
                <p className="mt-3 text-muted">
                  You will review all information and use Submit Registration after completing the
                  last step.
                </p>
                {step === 3 && (
                  <button
                    type="button"
                    onClick={() => setDone(true)}
                    className="mt-4 w-full rounded-full bg-embassy py-3 text-sm font-semibold text-white"
                  >
                    Submit Registration
                  </button>
                )}
              </div>
            </aside>
          </div>
        )}
      </main>
      <footer className="mx-auto flex max-w-6xl justify-between px-4 py-6 text-xs text-muted sm:px-6">
        <p>Privacy notice · Data protection · Need help? +974 4486 7117</p>
        <p>Official Embassy of The Gambia service</p>
      </footer>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <label className="block text-sm">
      <span className="font-medium">{label}</span>
      <input defaultValue={value} className="mt-2 w-full rounded-xl border border-black/10 px-3 py-3 outline-none" />
    </label>
  );
}

function PersonalStep() {
  return (
    <>
      <h2 className="mt-2 text-2xl font-semibold">Personal details</h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <Field label="Full name" value="Mariama Fatou Jallow" />
        <Field label="Gender" value="Female" />
        <Field label="Date of birth" value="14 May 1992" />
        <Field label="Place of birth" value="Banjul" />
        <Field label="Nationality" value="Gambian" />
      </div>
    </>
  );
}

function PassportStep() {
  return (
    <>
      <h2 className="mt-2 text-2xl font-semibold">Passport & Qatar ID</h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <Field label="Passport number" value="PC081924" />
        <Field label="Passport expiry" value="08 Nov 2028" />
        <Field label="Qatar ID (QID)" value="29245001783" />
        <Field label="QID expiry" value="17 Feb 2027" />
      </div>
    </>
  );
}

function AddressStep() {
  return (
    <>
      <div className="flex items-start justify-between gap-3">
        <h2 className="mt-2 text-2xl font-semibold">Address & emergency contacts</h2>
        <span className="text-xs text-muted">* Required field</span>
      </div>
      <p className="mt-2 text-sm text-muted">
        Tell us where you currently live in Qatar and who we should contact in an emergency.
      </p>
      <h3 className="mt-6 text-sm font-semibold">Contact & residential address</h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <Field label="Phone number *" value="+974 5562 1840" />
        <Field label="Email address *" value="mariama.jallow@example.com" />
      </div>
      <div className="mt-4">
        <Field label="Qatar residential address *" value="Building 18, Al Sadd Residence, Doha" />
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <Field label="Zone *" value="Zone 38" />
        <Field label="Street *" value="Al Mirqab Al Jadeed Street" />
      </div>
      <h3 className="mt-8 text-sm font-semibold">Emergency contact in Qatar</h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <Field label="Full name *" value="Lamin S. Bah" />
        <Field label="Relationship *" value="Select relationship" />
        <Field label="Phone number *" value="+974 5077 2319" />
        <Field label="Email address" value="lamin.bah@example.com" />
      </div>
      <h3 className="mt-8 text-sm font-semibold">Emergency contact in The Gambia</h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <Field label="Full name *" value="Awa Jallow" />
        <Field label="Relationship *" value="Mother" />
        <Field label="Phone number *" value="+220 397 0284" />
        <Field label="City / region *" value="Serrekunda, Kanifing" />
      </div>
    </>
  );
}

function FamilyStep() {
  return (
    <>
      <h2 className="mt-2 text-2xl font-semibold">Family information</h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <Field label="Civil status" value="Married" />
        <Field label="Spouse name" value="" />
        <Field label="Spouse nationality" value="" />
        <Field label="Children / dependants" value="" />
      </div>
    </>
  );
}

function Summary({ title, lines, done }: { title: string; lines: string[]; done: boolean }) {
  return (
    <article className="rounded-3xl bg-white p-5 text-sm">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold">
          {done ? "✓ " : ""}
          {title}
        </h2>
        <span className="text-xs text-emerald-800">Edit</span>
      </div>
      <ul className="mt-3 space-y-1 text-muted">
        {lines.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    </article>
  );
}
