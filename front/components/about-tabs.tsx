"use client";

import { useState } from "react";

const tabs = {
  History:
    "Known as the Smiling Coast of Africa, The Gambia is shaped by the river that carries its name, a rich cultural inheritance and a proud tradition of hospitality.",
  Culture:
    "Music, wrestling, and river festivals remain part of daily life, and Gambian communities in Qatar keep those traditions visible.",
  Geography:
    "The country follows the River Gambia inland from the Atlantic, a narrow territory surrounded by Senegal except at the coast.",
  Government:
    "The Republic of The Gambia is a constitutional republic. This Embassy represents the state in Qatar.",
} as const;

export function AboutTabs() {
  const [tab, setTab] = useState<keyof typeof tabs>("History");

  return (
    <article className="rounded-3xl bg-white p-8 text-ink">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold">About The Gambia</h3>
        <span className="text-embassy" aria-hidden>
          ↗
        </span>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {(Object.keys(tabs) as (keyof typeof tabs)[]).map((name) => (
          <button
            key={name}
            type="button"
            onClick={() => setTab(name)}
            className={`rounded-full px-3 py-1 text-sm ${
              tab === name ? "bg-embassy text-white" : "bg-sand text-ink/80"
            }`}
          >
            {name}
          </button>
        ))}
      </div>
      <p className="mt-4 text-sm leading-7 text-muted">{tabs[tab]}</p>
      <div className="mt-6 grid grid-cols-3 gap-3">
        {[
          ["1965", "Independence"],
          ["Banjul", "Capital"],
          ["2.7m", "Population"],
        ].map(([value, label]) => (
          <div key={label} className="rounded-2xl bg-sand px-3 py-4">
            <p className="text-lg font-semibold">{value}</p>
            <p className="text-xs text-muted">{label}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
