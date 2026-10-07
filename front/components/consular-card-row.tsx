"use client";

import { useRef } from "react";

export type ConsularCard = {
  title: string;
  body: string;
  note?: string;
  items?: readonly string[];
  contacts?: readonly { label: string; value: string; href?: string }[];
};

export function ConsularCardRow({ cards }: { cards: readonly ConsularCard[] }) {
  const scroller = useRef<HTMLDivElement>(null);

  function scroll(direction: -1 | 1) {
    const node = scroller.current;
    if (!node) return;
    const card = node.querySelector("article");
    const distance = card ? card.getBoundingClientRect().width + 12 : 320;
    node.scrollBy({ left: direction * distance, behavior: "smooth" });
  }

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs font-medium text-ink">Scroll sideways to read every service</p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            aria-label="Previous services"
            onClick={() => scroll(-1)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white text-ink"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Next services"
            onClick={() => scroll(1)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white text-ink"
          >
            →
          </button>
        </div>
      </div>
      <div
        ref={scroller}
        className="mt-3 flex w-full items-stretch gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {cards.map((card) => (
          <article
            key={card.title}
            className="flex w-72 shrink-0 flex-col rounded-2xl border border-black/5 bg-white p-4 text-ink"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-embassy-soft text-embassy">
              <BuildingIcon />
            </span>
            <h3 className="mt-3 text-sm font-semibold leading-5">{card.title}</h3>
            <p className="mt-2 text-xs leading-5 text-muted">{card.body}</p>
            {card.note ? (
              <p className="mt-2 border-l-2 border-embassy pl-3 text-xs leading-5 text-ink">{card.note}</p>
            ) : null}
            {card.items ? (
              <ul className="mt-3 space-y-1 text-xs text-ink">
                {card.items.map((item) => (
                  <li key={item}>→ {item}</li>
                ))}
              </ul>
            ) : null}
            {card.contacts ? (
              <dl className="mt-3 space-y-2 text-xs">
                {card.contacts.map((item) => (
                  <div key={item.label}>
                    <dt className="text-muted">{item.label}</dt>
                    <dd className="font-medium text-ink">
                      {item.href ? (
                        <a href={item.href} className="hover:text-embassy">
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            ) : null}
          </article>
        ))}
      </div>
    </div>
  );
}

function BuildingIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 20h16M6 20V8l6-4 6 4v12M10 20v-5h4v5" />
    </svg>
  );
}
