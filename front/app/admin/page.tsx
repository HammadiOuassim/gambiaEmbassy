"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Crest } from "@/components/crest";
import { citizens, type Citizen, type CitizenStatus } from "@/lib/citizens";

const menu = [
  "Dashboard Overview",
  "Citizen Database",
  "Civil Registrations",
  "Consular Requests",
  "Reports & Statistics",
  "System Audit Logs",
  "Admin Settings",
];

export default function AdminPage() {
  const [section, setSection] = useState("Citizen Database");
  const [selectedId, setSelectedId] = useState("jallow");
  const [query, setQuery] = useState("");
  const [civil, setCivil] = useState("All");
  const [notice, setNotice] = useState("");
  const selected = citizens.find((citizen) => citizen.id === selectedId) ?? citizens[3];

  const rows = useMemo(
    () =>
      citizens.filter((citizen) => {
        const haystack = `${citizen.name} ${citizen.qid} ${citizen.passport}`.toLowerCase();
        const matchesQuery = haystack.includes(query.toLowerCase());
        const matchesCivil = civil === "All" || citizen.civil === civil;
        return matchesQuery && matchesCivil;
      }),
    [query, civil],
  );

  return (
    <div className="min-h-screen bg-[#eef2f0] text-ink">
      <div className="grid min-h-screen lg:grid-cols-[240px_1fr]">
        <aside className="bg-embassy-deep px-4 py-5 text-white">
          <Link href="/" className="flex items-center gap-2">
            <Crest className="h-9 w-9" />
            <span>
              <span className="block text-xs font-semibold">EMBASSY OF THE GAMBIA</span>
              <span className="block text-[10px] text-white/60">DOHA · STATE OF QATAR</span>
            </span>
          </Link>
          <p className="mt-8 text-[11px] tracking-[0.16em] text-white/50">CONSULAR ADMINISTRATION</p>
          <nav className="mt-3 flex gap-2 overflow-x-auto lg:block lg:space-y-1">
            {menu.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setSection(item)}
                className={`flex w-auto shrink-0 items-center justify-between gap-2 rounded-xl px-3 py-2 text-left text-sm whitespace-nowrap lg:w-full ${
                  section === item ? "bg-white/10" : "text-white/75"
                }`}
              >
                {item}
                {item === "Consular Requests" && (
                  <span className="rounded-full bg-amber-400 px-1.5 text-[10px] text-embassy">38</span>
                )}
              </button>
            ))}
          </nav>
          <p className="mt-10 text-xs text-emerald-200">All systems operational</p>
          <p className="text-[11px] text-white/45">Database sync completed 2 minutes ago</p>
        </aside>

        <div className="flex min-w-0 flex-col">
          <header className="flex flex-wrap items-center gap-3 border-b border-black/5 bg-white px-4 py-3">
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Quick search citizens, QID, requests..."
              className="w-full min-w-0 flex-1 rounded-full border border-black/10 px-4 py-2 text-sm outline-none sm:min-w-64"
            />
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs text-emerald-800">
              Encrypted Session
            </span>
            <span className="text-sm">
              <span className="font-medium">K. Ahmed</span>
              <span className="block text-[11px] text-muted">Consular Admin</span>
            </span>
          </header>

          {section === "Citizen Database" ? (
            <div className="grid min-h-0 flex-1 xl:grid-cols-[1fr_360px]">
              <section className="p-4 sm:p-6">
                <p className="text-xs tracking-[0.14em] text-muted">CITIZEN REGISTRY</p>
                <h1 className="text-2xl font-semibold">Citizen Database</h1>
                <p className="text-sm text-muted">Search and manage synthetic citizen registration records.</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-4">
                  <Metric value="2,845" label="Total Registered Citizens" note="+4.8% from last month" />
                  <Metric value="+142" label="New Registrations This Month" note="28 added this week" />
                  <Metric value="38" label="Pending Approval Applications" note="9 require priority review" />
                  <Metric value="19" label="Expiring Passports / QIDs" note="Within the next 30 days" />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search by full name, QID, or passport"
                    className="min-w-56 flex-1 rounded-xl border border-black/10 bg-white px-3 py-2 text-sm outline-none"
                  />
                  <select
                    value={civil}
                    onChange={(event) => setCivil(event.target.value)}
                    className="rounded-xl border border-black/10 bg-white px-3 py-2 text-sm"
                  >
                    {["All", "Married", "Single", "Divorced"].map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <p className="mt-3 text-xs text-muted">
                  Showing 1–{rows.length} of 2,845 citizen records
                </p>
                <div className="mt-2 overflow-x-auto rounded-2xl bg-white">
                  <table className="w-full min-w-[760px] text-left text-sm">
                    <thead className="text-xs text-muted">
                      <tr>
                        {["Citizen name", "QID no.", "Passport no.", "Address in Qatar", "Civil status", "Registration date", "Status"].map(
                          (heading) => (
                            <th key={heading} className="px-3 py-3 font-medium">
                              {heading}
                            </th>
                          ),
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map((citizen) => (
                        <tr
                          key={citizen.id}
                          onClick={() => setSelectedId(citizen.id)}
                          className={`cursor-pointer border-t border-black/5 ${
                            citizen.id === selected.id ? "bg-emerald-50" : ""
                          }`}
                        >
                          <td className="px-3 py-3">
                            <span className="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-stone-100 text-[10px]">
                              {citizen.initials}
                            </span>
                            {citizen.name}
                          </td>
                          <td className="px-3 py-3">{citizen.qid}</td>
                          <td className="px-3 py-3">{citizen.passport}</td>
                          <td className="px-3 py-3">
                            {citizen.address}, {citizen.zone}
                          </td>
                          <td className="px-3 py-3">{citizen.civil}</td>
                          <td className="px-3 py-3">{citizen.registered}</td>
                          <td className="px-3 py-3">
                            <StatusPill status={citizen.status} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
              <Inspection
                citizen={selected}
                notice={notice}
                onAction={(message) => setNotice(message)}
              />
            </div>
          ) : (
            <section className="p-6">
              <h1 className="text-2xl font-semibold">{section}</h1>
              <p className="mt-2 max-w-xl text-sm text-muted">
                This administration area is part of the phase-one preview. Citizen records are
                available in the Citizen Database.
              </p>
              <button
                type="button"
                onClick={() => setSection("Citizen Database")}
                className="mt-4 rounded-full bg-embassy px-4 py-2 text-sm text-white"
              >
                Open citizen database
              </button>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

function Metric({ value, label, note }: { value: string; label: string; note: string }) {
  return (
    <article className="rounded-2xl bg-white p-4">
      <p className="text-2xl font-semibold">{value}</p>
      <p className="text-xs font-medium">{label}</p>
      <p className="text-[11px] text-muted">{note}</p>
    </article>
  );
}

function StatusPill({ status }: { status: CitizenStatus }) {
  const tone =
    status === "Verified"
      ? "bg-emerald-50 text-emerald-800"
      : status === "Pending"
        ? "bg-amber-50 text-amber-800"
        : "bg-red-50 text-red-700";
  return <span className={`rounded-full px-2 py-1 text-xs ${tone}`}>{status}</span>;
}

function Inspection({
  citizen,
  notice,
  onAction,
}: {
  citizen: Citizen;
  notice: string;
  onAction: (message: string) => void;
}) {
  return (
    <aside className="border-l border-black/5 bg-white p-5">
      <p className="text-xs text-muted">Citizen Record Inspection</p>
      <p className="text-[11px] text-muted">Record {citizen.qid} · Read-only audit opened</p>
      <div className="mt-4 flex items-center gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-800 text-sm text-white">
          {citizen.initials}
        </span>
        <span>
          <span className="block font-semibold">{citizen.name}</span>
          <span className="block text-xs text-muted">QID {citizen.qid}</span>
        </span>
      </div>
      <div className="mt-3 flex gap-2 text-xs">
        <StatusPill status={citizen.status} />
        <span className="rounded-full bg-stone-100 px-2 py-1">Active citizen</span>
      </div>
      {citizen.id === "jallow" && (
        <p className="mt-4 rounded-xl bg-amber-50 px-3 py-2 text-xs text-amber-900">
          QID expires in 140 days. Expiry: {citizen.qidExpiry}. Confirm updated document at next
          citizen contact.
        </p>
      )}
      <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
        <Item label="Date & place of birth" value={`${citizen.dob} · ${citizen.birthPlace}`} />
        <Item label="Gender / nationality" value={`${citizen.gender} · ${citizen.nationality}`} />
        <Item label="Phone" value={citizen.phone} />
        <Item label="Email" value={citizen.email} />
        <Item label="Residential address" value={`${citizen.address}, ${citizen.zone}, Doha`} />
        <Item label="Civil status" value={citizen.civil} />
      </dl>
      <div className="mt-4 rounded-2xl border border-black/5 p-3">
        <p className="text-xs text-muted">Document preview · 2 verified documents</p>
        <div className="mt-3 flex gap-3">
          <div className="h-16 w-24 rounded-lg bg-gradient-to-br from-emerald-800 to-emerald-500" />
          <div className="text-xs">
            <p className="font-medium">Gambian passport</p>
            <p>Passport number {citizen.passport}</p>
            <p>Expiry date {citizen.passportExpiry}</p>
          </div>
        </div>
      </div>
      <p className="mt-3 text-xs text-muted">
        Last audit activity · Record verified by Consular Admin · 18 Sep 2026, 14:22
      </p>
      {notice && <p className="mt-3 rounded-xl bg-emerald-50 px-3 py-2 text-sm text-emerald-900">{notice}</p>}
      <div className="mt-4 grid gap-2">
        <button
          type="button"
          onClick={() => onAction(`${citizen.name} marked approved in this preview.`)}
          className="rounded-full bg-embassy py-2 text-sm text-white"
        >
          Approve Registration
        </button>
        <button
          type="button"
          onClick={() => onAction(`Correction requested for ${citizen.name}.`)}
          className="rounded-full border border-black/10 py-2 text-sm"
        >
          Request Info Correction
        </button>
        <button
          type="button"
          onClick={() => onAction("Official record PDF would be generated by the API in a later phase.")}
          className="rounded-full border border-black/10 py-2 text-sm"
        >
          Generate Official Record PDF
        </button>
      </div>
    </aside>
  );
}

function Item({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[11px] uppercase tracking-wide text-muted">{label}</dt>
      <dd className="mt-1">{value}</dd>
    </div>
  );
}
