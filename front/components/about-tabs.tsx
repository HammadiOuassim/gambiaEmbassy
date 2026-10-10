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
    <article className="relative min-h-80 overflow-hidden rounded-3xl border border-black/10 bg-[#ffffff] p-5 text-ink shadow-[0_6px_14px_rgba(15,23,42,0.13)] sm:p-8">
      <div className="relative">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-semibold">About The Gambia</h3>
          <span className="text-embassy" aria-hidden>
            ↗
          </span>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
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
        <div key={tab} className="about-tab-content">
          <p className="mt-4 text-sm leading-7 text-muted">{tabs[tab].body}</p>
          <div className="mt-6 grid grid-cols-3 gap-3">
            {tabs[tab].facts.map(([value, label]) => (
              <div key={label} className="rounded-2xl bg-white px-3 py-4 shadow-[0_4px_10px_rgba(15,23,42,0.14)]">
                <p className="text-lg font-semibold">{value}</p>
                <p className="text-xs text-muted">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
