"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type NewsItem = {
  tag: string;
  tone: string;
  date: string;
  title: string;
  image: string;
};

const GAP = 16;
const VISIBLE = 4;

export function NewsReel({ items }: { items: NewsItem[] }) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);
  const startX = useRef<number | null>(null);
  const [index, setIndex] = useState(0);
  const [step, setStep] = useState(0);
  const [rtl, setRtl] = useState(false);
  const [animate, setAnimate] = useState(true);
  const count = items.length;
  const cards = [...items, ...items.slice(0, VISIBLE)];

  useEffect(() => {
    const root = document.documentElement;
    setRtl(root.lang.toLowerCase().startsWith("ar") || root.dir === "rtl");
  }, []);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const measure = () => {
      const card = (el.clientWidth - GAP * (VISIBLE - 1)) / VISIBLE;
      setStep(card + GAP);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || count <= VISIBLE) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current >= count ? current : current + 1));
    }, 4000);
    return () => window.clearInterval(timer);
  }, [count]);

  useEffect(() => {
    if (index < count) return;
    const timer = window.setTimeout(() => {
      setAnimate(false);
      setIndex(0);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimate(true));
      });
    }, 700);
    return () => window.clearTimeout(timer);
  }, [index, count]);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el || count <= VISIBLE) return;
    let locked = false;
    const onWheel = (event: WheelEvent) => {
      const horizontal = Math.abs(event.deltaX) > Math.abs(event.deltaY);
      if (!horizontal) return;
      event.preventDefault();
      if (locked) return;
      locked = true;
      const forward = rtl ? event.deltaX < 0 : event.deltaX > 0;
      const current = indexRef.current;
      if (!forward && current <= 0) {
        setAnimate(false);
        setIndex(count - 1);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setAnimate(true));
        });
      } else {
        setAnimate(true);
        setIndex(forward ? Math.min(current + 1, count) : current - 1);
      }
      window.setTimeout(() => {
        locked = false;
      }, 700);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [count, rtl]);

  indexRef.current = index;

  function move(forward: boolean) {
    if (count <= VISIBLE) return;
    const current = indexRef.current;
    if (!forward && current <= 0) {
      setAnimate(false);
      setIndex(count - 1);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimate(true));
      });
      return;
    }
    setAnimate(true);
    setIndex(forward ? Math.min(current + 1, count) : current - 1);
  }

  const cardWidth = Math.max(step - GAP, 0);

  return (
    <div
      ref={viewportRef}
      className="mt-8 overflow-hidden pb-2"
      onPointerDown={(event) => {
        startX.current = event.clientX;
      }}
      onPointerUp={(event) => {
        if (startX.current == null) return;
        const delta = event.clientX - startX.current;
        startX.current = null;
        if (Math.abs(delta) < 40) return;
        move(rtl ? delta > 0 : delta < 0);
      }}
    >
      <div
        className={`flex ${animate ? "transition-transform duration-700 ease-in-out" : ""}`}
        style={{
          gap: GAP,
          transform: `translateX(${(rtl ? 1 : -1) * index * step}px)`,
        }}
      >
        {cards.map((item, cardIndex) => (
          <article
            key={`${item.title}-${cardIndex}`}
            className="shrink-0 rounded-3xl border border-black/5 bg-white p-4 text-ink"
            style={{ width: cardWidth }}
          >
            <span className={`inline-flex rounded-full px-2.5 py-1 text-xs ${item.tone}`}>{item.tag}</span>
            <p className="mt-3 text-xs text-muted">{item.date}</p>
            <h3 className="mt-1 line-clamp-2 h-11 text-base font-semibold leading-snug text-ink">
              {item.title}
            </h3>
            <Image
              src={item.image}
              alt=""
              width={272}
              height={160}
              className="mt-4 h-40 w-full rounded-xl object-cover"
            />
            <p className="mt-3 text-sm text-embassy">Read full update →</p>
          </article>
        ))}
      </div>
    </div>
  );
}
