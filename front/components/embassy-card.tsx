"use client";

import { useState } from "react";

const items = [
  { title: "Our Vision" },
  { title: "Our Values" },
  { title: "Embassy Mission" },
] as const;

const missionPoints = [
  ["Diplomatic Excellence", "Strengthening the excellent political and diplomatic ties between The Gambia and the State of Qatar."],
  ["Consular Service", "Providing efficient, transparent, and dignified consular service and protection to all Gambian nationals in Qatar."],
  ["Economic Diplomacy", "Promoting The Gambia as a peaceful, stable, and attractive destination for trade, investment and tourism — The Smiling Coast of Africa."],
  ["Community & Culture", "Uniting and empowering the Gambian diaspora in Qatar and promoting Gambian culture and values."],
  ["Cooperation", "Facilitating cooperation in education, labour, health, aviation, and Islamic affairs for the mutual benefit of our two peoples."],
] as const;

const values = [
  "Patriotism",
  "Professionalism & Integrity",
  "Service to Citizens",
  "Mutual Respect and Friendship",
  "Transparency",
] as const;

export function EmbassyCard() {
  const [open, setOpen] = useState<(typeof items)[number]["title"] | null>(null);

  return (
    <article
      id="embassy"
      className="relative h-full min-h-0 overflow-y-auto rounded-3xl bg-[#cccccc] p-5 text-ink [scrollbar-width:none] sm:p-8 [&::-webkit-scrollbar]:hidden"
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
        <span className="text-embassy">
          <BuildingIcon />
        </span>
      </div>
      <p className="mt-4 rounded-2xl border-l-4 border-embassy bg-white px-4 py-3 text-sm leading-7 text-muted">
        “Our Embassy is a home away from home for Gambians and a bridge for enduring cooperation
        with the State of Qatar.”
      </p>
      <ul className="mt-6 divide-y divide-black/10 text-sm">
        {items.map((item) => {
          const isOpen = open === item.title;
          return (
            <li key={item.title}>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : item.title)}
                className="flex w-full items-center justify-between py-3 text-left text-ink transition-colors duration-300 hover:text-embassy"
              >
                <span>{item.title}</span>
                <span
                  aria-hidden
                  className={`inline-block text-embassy transition-transform duration-300 ${
                    isOpen ? "rotate-90" : ""
                  }`}
                >
                  ↗
                </span>
              </button>
              <div
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="pb-3 text-sm leading-7 text-ink/80">{itemBody(item.title)}</div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </article>
  );
}

function itemBody(title: (typeof items)[number]["title"]) {
  if (title === "Our Vision") {
    return (
      <p>
        To be a dynamic and effective Mission that promotes and protects the interests of the
        Republic of The Gambia and its citizens, and advances a strong, strategic and enduring
        partnership between The Gambia and the State of Qatar.
      </p>
    );
  }
  if (title === "Our Values") {
    return (
      <ul className="list-disc space-y-1 pl-5">
        {values.map((value) => (
          <li key={value}>{value}</li>
        ))}
      </ul>
    );
  }
  return (
    <>
      <p>To implement the foreign policy of the Government of The Gambia in the State of Qatar by:</p>
      <ol className="mt-2 list-decimal space-y-2 pl-5">
        {missionPoints.map(([name, text]) => (
          <li key={name}>
            <span className="font-semibold text-ink">{name}:</span> {text}
          </li>
        ))}
      </ol>
    </>
  );
}

function BuildingIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 20h16M6 20V8l6-4 6 4v12M10 20v-5h4v5" />
    </svg>
  );
}
