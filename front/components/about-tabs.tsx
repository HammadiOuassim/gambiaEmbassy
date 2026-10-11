"use client";

import { useState } from "react";

const tabs = {
  History: {
    body: "Known as the Smiling Coast of Africa, The Gambia is shaped by the river that carries its name, a rich cultural inheritance and a proud tradition of hospitality.",
    facts: [
      ["1965", "Independence"],
      ["Banjul", "Capital"],
      ["2.7m", "Population"],
    ],
  },
  Geography: {
    body: "The country follows the River Gambia inland from the Atlantic, a narrow territory surrounded by Senegal except at the coast.",
    facts: [
      ["11,300 km²", "Surface area"],
      ["River Gambia", "Defining river"],
      ["Abuko", "Nature reserve"],
    ],
  },
  Government: {
    body: "The Republic of The Gambia is a constitutional republic. This Embassy represents the state in Qatar.",
    facts: [
      ["Adama Barrow", "President"],
      ["Republic", "Form of state"],
      ["National Assembly", "Legislature"],
    ],
  },
} as const;

type TabName = keyof typeof tabs;

export function AboutTabs() {
  const [tab, setTab] = useState<TabName>("History");

  return (
    <article className="relative flex h-[19rem] flex-col overflow-hidden rounded-3xl border border-black/10 bg-white p-4 text-ink shadow-[0_6px_14px_rgba(15,23,42,0.13)] transition-transform duration-300 group-hover:-translate-y-0.5">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-lg font-semibold tracking-tight">About The Gambia</h3>
        <span className="text-embassy" aria-hidden>
          ↗
        </span>
      </div>
      <div className="mt-2.5 flex flex-wrap gap-2">
        {(Object.keys(tabs) as TabName[]).map((name) => (
          <button
            key={name}
            type="button"
            onClick={() => setTab(name)}
            className={`cursor-pointer rounded-full px-3 py-1 text-sm shadow-[0_2px_5px_rgba(15,23,42,0.12)] transition-shadow duration-200 hover:shadow-[0_3px_7px_rgba(15,23,42,0.16)] ${
              tab === name ? "bg-[#cccccc] text-ink" : "bg-white text-ink"
            }`}
          >
            {name}
          </button>
        ))}
      </div>
      <div key={tab} className="about-tab-content mt-3 flex min-h-0 flex-1 flex-col">
        <p className="line-clamp-2 text-sm leading-6 text-muted">{tabs[tab].body}</p>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {tabs[tab].facts.map(([value, label]) => (
            <div key={label} className="rounded-2xl bg-sand/80 px-2.5 py-2.5">
              <p className="text-sm font-semibold">{value}</p>
              <p className="mt-0.5 text-xs text-muted">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
