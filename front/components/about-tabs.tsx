"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const tabs = {
  History:
    "Known as the Smiling Coast of Africa, The Gambia is shaped by the river that carries its name, a rich cultural inheritance and a proud tradition of hospitality.",
  Geography:
    "The country follows the River Gambia inland from the Atlantic, a narrow territory surrounded by Senegal except at the coast.",
  Government:
    "The Republic of The Gambia is a constitutional republic. This Embassy represents the state in Qatar.",
} as const;

type TabName = keyof typeof tabs;

const slides: Record<TabName, { src: string; alt: string }[]> = {
  History: [
    { src: "/history/history-arch.png", alt: "Arch 22 in Banjul" },
    { src: "/history/history-4.jpg", alt: "Wassu stone circles in The Gambia" },
    { src: "/history/history-2.jpg", alt: "Fort on Kunta Kinteh Island" },
    { src: "/history/history-3.jpg", alt: "Sunrise on the River Gambia at Banjul" },
    { src: "/history/history-1.jpg", alt: "Arch 22 monument in Banjul" },
  ],
  Geography: [
    { src: "/geography/geography-river.png", alt: "Aerial view of the River Gambia winding through mangroves" },
    { src: "/geography/geography-1.jpg", alt: "Atlantic beach in The Gambia" },
    { src: "/geography/geography-2.jpg", alt: "Fishing boats on the shore at Bakau" },
    { src: "/geography/geography-3.jpg", alt: "Mangroves along a river in southern Gambia" },
    { src: "/geography/geography-4.jpg", alt: "Aerial view of the landscape near Banjul" },
  ],
  Government: [
    { src: "/government/government-president.png", alt: "President of The Gambia speaking at the United Nations" },
    { src: "/government/government-1.jpg", alt: "National Assembly and Marina Parade in Banjul" },
    { src: "/government/government-2.jpg", alt: "Presidential inauguration procession in Banjul" },
    { src: "/government/government-3.jpg", alt: "Meeting at State House in Banjul" },
    { src: "/government/government-4.jpg", alt: "Inauguration crowd greeting the president in Banjul" },
  ],
};

export function AboutTabs() {
  const [tab, setTab] = useState<TabName>("History");
  const [frame, setFrame] = useState(0);
  const images = slides[tab];

  useEffect(() => {
    setFrame(0);
    const timer = window.setInterval(() => {
      setFrame((current) => (current + 1) % images.length);
    }, 3000);
    return () => window.clearInterval(timer);
  }, [tab, images]);

  return (
    <article className="relative overflow-hidden rounded-3xl p-8 text-white">
      {images.map((image, index) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 640px"
          className={`object-cover transition-opacity duration-700 ${
            index === frame ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/50 to-black/30" />
      <div className="relative">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-semibold">About The Gambia</h3>
          <span className="text-white" aria-hidden>
            ↗
          </span>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {(Object.keys(tabs) as TabName[]).map((name) => (
            <button
              key={name}
              type="button"
              onClick={() => setTab(name)}
              className={`rounded-full px-3 py-1 text-sm ${
                tab === name ? "bg-embassy text-white" : "bg-white/20 text-white"
              }`}
            >
              {name}
            </button>
          ))}
        </div>
        <p className="mt-4 text-sm leading-7 text-white/85">{tabs[tab]}</p>
        <div className="mt-6 grid grid-cols-3 gap-3">
          {[
            ["1965", "Independence"],
            ["Banjul", "Capital"],
            ["2.7m", "Population"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-2xl bg-white/15 px-3 py-4">
              <p className="text-lg font-semibold">{value}</p>
              <p className="text-xs text-white/75">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
