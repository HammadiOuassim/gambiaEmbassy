"use client";

import { useState } from "react";
import Link from "next/link";
import { Crest } from "@/components/crest";

const nav = [
  "Overview",
  "My Applications",
  "Documents & Certificates",
  "Personal Details",
  "Embassy Notifications",
  "Help & Support",
  "Account Settings",
];

const applications = [
  {
    title: "Passport Renewal",
    ref: "PR-2026-0148 · Submitted 21 Sep 2026",
    progress: 65,
    status: "Under Review",
  },
  {
    title: "Birth Registration",
    ref: "BR-2026-0091 · Submitted 02 Aug 2026",
    progress: 100,
    status: "Completed",
  },
];

export default function PortalPage() {
  const [section, setSection] = useState("Overview");

  return (
    <div className="min-h-screen bg-[#f4f6f4]">
      <header className="border-b border-black/5 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Crest className="h-9 w-9" />
            <span className="hidden sm:block">
              <span className="block text-xs font-semibold tracking-wide text-embassy">
                EMBASSY OF THE GAMBIA
              </span>
              <span className="block text-[10px] text-muted">DOHA · STATE OF QATAR</span>
            </span>
          </Link>
          <div className="flex items-center gap-4 text-sm">
            <span className="hidden text-emerald-800 sm:inline">Secure session</span>
            <span className="relative">
              🔔<span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-red-500" />
            </span>
            <span className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-800 text-xs text-white">
                MJ
              </span>
              <span className="hidden text-left sm:block">
                <span className="block text-sm font-medium">Mariama F. Jallow</span>
                <span className="block text-[11px] text-muted">Citizen ID GM-QA-20481</span>
              </span>
            </span>
          </div>
        </div>
      </header>
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-6 lg:grid-cols-[220px_1fr] sm:px-6">
        <aside>
          <div className="flex gap-2 overflow-x-auto pb-1 lg:block lg:space-y-1 lg:overflow-visible lg:pb-0">
          {nav.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setSection(item)}
              className={`flex w-auto shrink-0 items-center justify-between gap-3 rounded-xl px-3 py-2 text-left text-sm whitespace-nowrap lg:w-full ${
                section === item ? "bg-emerald-50 font-medium text-embassy" : "text-ink/80"
              }`}
            >
              {item}
              {item === "Embassy Notifications" && (
                <span className="rounded-full bg-red-500 px-1.5 text-[10px] text-white">3</span>
              )}
            </button>
          ))}
          </div>
          <div className="mt-4 rounded-2xl bg-embassy p-4 text-sm text-white lg:mt-8">
            <p className="font-semibold">Emergency support</p>
            <p className="mt-1 text-xs text-white/75">For urgent citizen welfare support in Qatar.</p>
            <p className="mt-3 font-medium">+974 4486 7117</p>
          </div>
        </aside>
        <section>
          {section === "Overview" && <Overview onOpen={setSection} />}
          {section === "My Applications" && <Applications />}
          {section === "Documents & Certificates" && <Documents />}
          {section === "Personal Details" && <Details />}
          {section === "Embassy Notifications" && <Notifications />}
          {section === "Help & Support" && <Help />}
          {section === "Account Settings" && <Settings />}
        </section>
      </div>
    </div>
  );
}

function Overview({ onOpen }: { onOpen: (section: string) => void }) {
  const [adding, setAdding] = useState(false);
  const [complaint, setComplaint] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <div className="space-y-5">
      <div className="rounded-3xl bg-embassy p-6 text-white">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold">Welcome back, Mariama</h1>
            <p className="mt-2 max-w-xl text-sm text-white/75">
              Your citizen profile is verified and your consular services are ready. Review any
              outstanding requests below.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              <span className="rounded-full bg-white/15 px-3 py-1">QID •••• 1783</span>
              <span className="rounded-full bg-emerald-400/20 px-3 py-1">
                Registration Status: Active / Verified
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              setSent(false);
              setAdding((open) => !open);
            }}
            className="rounded-full bg-white px-4 py-2 text-sm font-medium text-embassy"
          >
            Add complaint
          </button>
        </div>
        {adding && (
          <form
            className="mt-4"
            onSubmit={(event) => {
              event.preventDefault();
              if (!complaint.trim()) return;
              setComplaint("");
              setAdding(false);
              setSent(true);
            }}
          >
            <label className="block text-sm text-white/80" htmlFor="complaint">
              Describe your complaint
            </label>
            <textarea
              id="complaint"
              value={complaint}
              onChange={(event) => setComplaint(event.target.value)}
              rows={3}
              className="mt-2 w-full rounded-2xl bg-white px-3 py-2 text-sm text-ink"
              placeholder="What should the Embassy look into?"
            />
            <button
              type="submit"
              className="mt-3 rounded-full bg-white px-4 py-2 text-sm font-medium text-embassy"
            >
              Submit complaint
            </button>
          </form>
        )}
        {sent && (
          <p className="mt-4 text-sm text-emerald-100">Your complaint has been recorded.</p>
        )}
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <Stat title="Valid" label="Active Passport Status" detail="Expires 08 Nov 2028" />
        <Stat title="1" label="Pending Consular Requests" detail="Passport renewal under review" />
        <Stat title="4" label="Issued Documents" detail="2 available to download" />
      </div>
      <div className="grid gap-4 lg:grid-cols-[1fr_280px]">
        <Applications />
        <Notifications />
      </div>
      <div>
        <h2 className="text-lg font-semibold">What would you like to do?</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {[
            ["Update Personal Details", "Keep your contact, address and family information current.", "Personal Details"],
            ["Request Consular Document", "Start a passport, civil registration or attestation request.", "My Applications"],
            ["Download E-Certificates & Attestations", "Access verified digital copies of your issued documents.", "Documents & Certificates"],
            ["View Embassy Notifications & Community Bulletins", "Read official notices and community opportunities.", "Embassy Notifications"],
          ].map(([title, body, target]) => (
            <button
              key={title}
              type="button"
              onClick={() => onOpen(target)}
              className="rounded-2xl bg-white p-4 text-left"
            >
              <span className="block text-sm font-semibold">{title}</span>
              <span className="mt-2 block text-xs text-muted">{body}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function Stat({ title, label, detail }: { title: string; label: string; detail: string }) {
  return (
    <article className="rounded-2xl bg-white p-5">
      <p className="text-2xl font-semibold">{title}</p>
      <p className="mt-1 text-sm font-medium">{label}</p>
      <p className="text-xs text-muted">{detail}</p>
    </article>
  );
}

function Applications() {
  return (
    <article className="rounded-3xl bg-white p-5">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">My Applications</h2>
        <span className="text-sm text-emerald-800">View all applications</span>
      </div>
      <p className="text-xs text-muted">Track current and completed consular requests.</p>
      <ul className="mt-4 space-y-4">
        {applications.map((item) => (
          <li key={item.ref} className="rounded-2xl border border-black/5 p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-xs text-muted">{item.ref}</p>
              </div>
              <span
                className={`rounded-full px-2 py-1 text-xs ${
                  item.status === "Completed" ? "bg-emerald-50 text-emerald-800" : "bg-amber-50 text-amber-800"
                }`}
              >
                {item.status}
              </span>
            </div>
            <div className="mt-3 h-1.5 rounded-full bg-stone-100">
              <div className="h-full rounded-full bg-emerald-700" style={{ width: `${item.progress}%` }} />
            </div>
            <p className="mt-1 text-xs text-muted">{item.progress}%</p>
          </li>
        ))}
      </ul>
    </article>
  );
}

function Documents() {
  return (
    <article className="rounded-3xl bg-white p-5">
      <h2 className="text-lg font-semibold">Documents & certificates</h2>
      <ul className="mt-4 space-y-3 text-sm">
        {["Passport biodata copy", "Qatar ID copy", "Birth registration certificate", "Consular attestation"].map(
          (item, index) => (
            <li key={item} className="flex items-center justify-between rounded-2xl border border-black/5 px-4 py-3">
              <span>{item}</span>
              <span className="text-emerald-800">{index < 2 ? "Download" : "On file"}</span>
            </li>
          ),
        )}
      </ul>
    </article>
  );
}

function Details() {
  const rows = [
    ["Full name", "Mariama Fatou Jallow"],
    ["Date and place of birth", "14 May 1992 · Banjul"],
    ["Passport", "PC081924 · expires 08 Nov 2028"],
    ["Qatar ID", "29245 001 783 · expires 17 Feb 2027"],
    ["Address", "Building 18, Al Sadd Residence, Zone 38, Doha"],
    ["Phone", "+974 5562 1840"],
    ["Email", "mariama.jallow@example.com"],
  ];
  return (
    <article className="rounded-3xl bg-white p-5">
      <h2 className="text-lg font-semibold">Personal details</h2>
      <dl className="mt-4 divide-y divide-black/5 text-sm">
        {rows.map(([label, value]) => (
          <div key={label} className="flex justify-between gap-4 py-3">
            <dt className="text-muted">{label}</dt>
            <dd className="text-right">{value}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

function Notifications() {
  const items = [
    ["28 SEP", "Mobile consular desk in Al Wakrah"],
    ["24 SEP", "Passport checklist updated"],
    ["19 SEP", "Community cultural evening"],
  ];
  return (
    <article className="rounded-3xl bg-white p-5">
      <h2 className="text-lg font-semibold">Latest notifications</h2>
      <ul className="mt-4 space-y-3 text-sm">
        {items.map(([date, text]) => (
          <li key={text} className="flex gap-3">
            <span className="text-xs font-semibold text-muted">{date}</span>
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function Help() {
  return (
    <article className="rounded-3xl bg-white p-5">
      <h2 className="text-lg font-semibold">Help & support</h2>
      <p className="mt-2 text-sm text-muted">
        Consular desk hours are Sunday to Thursday, 08:30–14:00. Emergency welfare support is
        available at +974 4486 7117.
      </p>
    </article>
  );
}

function Settings() {
  return (
    <article className="rounded-3xl bg-white p-5">
      <h2 className="text-lg font-semibold">Account settings</h2>
      <p className="mt-2 text-sm text-muted">
        Sign-in uses mariama.jallow@example.com. Password changes and trusted devices will be
        connected when the NestJS API is added.
      </p>
      <Link href="/login" className="mt-4 inline-block text-sm text-emerald-800">
        Return to sign in
      </Link>
    </article>
  );
}
