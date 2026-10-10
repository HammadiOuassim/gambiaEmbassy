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
            className="flex w-72 shrink-0 flex-col rounded-2xl border border-black/10 bg-white p-4 text-ink shadow-[0_6px_14px_rgba(15,23,42,0.13)]"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-embassy-soft text-embassy">
              <ServiceIcon title={card.title} />
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

function ServiceIcon({ title }: { title: string }) {
  const iconClass = "h-4 w-4";

  if (title === "Passport & Travel Documents") {
    return (
      <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M9 7h6M9 11h6M9 15h4" />
      </svg>
    );
  }

  if (title === "Visas & Entry Regulations") {
    return (
      <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <circle cx="12" cy="12" r="8" />
        <path d="M4 12h16M12 4a12 12 0 0 1 0 16M12 4a12 12 0 0 0 0 16" />
      </svg>
    );
  }

  if (title === "Certificates and Document Assistance") {
    return (
      <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <path d="M7 3h8l3 3v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
        <path d="M15 3v4h4M9 11h6M9 14h4M10 17l2 4 2-4" />
      </svg>
    );
  }

  if (title === "Civil Registration") {
    return (
      <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2" />
        <path d="M3.5 20a5.5 5.5 0 0 1 11 0M15 14.5a4.5 4.5 0 0 1 5.5 4.4" />
      </svg>
    );
  }

  if (title === "Consular Assistance") {
    return (
      <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" />
        <path d="m6.3 6.3 3.6 3.6m4.2 0 3.6-3.6m0 11.4-3.6-3.6m-4.2 0-3.6 3.6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
      <path d="M9 12h6M12 9v6" />
    </svg>
  );
}
