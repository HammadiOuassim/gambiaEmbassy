"use client";

import { useState } from "react";

const items = [
  {
    title: "Our Vision",
    body: "A trusted Embassy where every Gambian in Qatar is protected, heard and connected to home, and where cooperation with the State of Qatar grows stronger each year.",
  },
  {
    title: "Our Values",
    body: "Service, integrity and hospitality. We treat every citizen with respect, keep official work transparent and honour the dignity of The Gambia in every engagement.",
  },
  {
    title: "Embassy Mission",
    body: "To represent the Republic of The Gambia in Qatar, deliver consular services to citizens, and strengthen diplomatic, economic and cultural ties with the State of Qatar.",
  },
] as const;

export function EmbassyCard() {
  const [open, setOpen] = useState<(typeof items)[number]["title"] | null>(null);

  return (
    <article
      id="embassy"
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#146b4e] via-[#0a3a2c] to-[#04261d] p-8 text-white"
    >
      <div
        className="absolute inset-x-0 top-0 h-1.5"
        style={{
          background:
            "linear-gradient(90deg, #CE1126 0 30%, #ffffff 30% 34%, #0C1C8C 34% 66%, #ffffff 66% 70%, #3A7728 70% 100%)",
        }}
        aria-hidden
      />
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold">About The Embassy</h3>
        <span className="text-[#f3e2a4]">
          <BuildingIcon />
        </span>
      </div>
      <p className="mt-4 rounded-2xl border-l-4 border-[#f3e2a4] bg-white/10 px-4 py-3 text-sm leading-7 text-emerald-50">
        “Our Embassy is a home away from home for Gambians and a bridge for enduring cooperation
        with the State of Qatar.”
      </p>
      <ul className="mt-6 divide-y divide-white/15 text-sm">
        {items.map((item) => {
          const isOpen = open === item.title;
          return (
            <li key={item.title}>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : item.title)}
                className={`flex w-full items-center justify-between py-3 text-left transition-colors duration-500 ${
                  isOpen ? "font-semibold text-[#f3e2a4]" : "text-white"
                }`}
              >
                {item.title}
                <span
                  aria-hidden
                  className={`inline-block transition-transform duration-500 ${
                    isOpen ? "rotate-90 text-[#f3e2a4]" : "text-white/80"
                  }`}
                >
                  ↗
                </span>
              </button>
              <div
                className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out motion-reduce:transition-none ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="pb-3 text-sm leading-7 text-emerald-50">{item.body}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </article>
  );
}

function BuildingIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 20h16M6 20V8l6-4 6 4v12M10 20v-5h4v5" />
    </svg>
  );
}
