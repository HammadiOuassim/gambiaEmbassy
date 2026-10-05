"use client";

import { useEffect, useRef, useState } from "react";

const highlights = [
  ["Ambassador Meets Gambian Community", "Doha · Community outreach and consular updates"],
  ["Consular Services Expanded", "Doha · New appointment slots and document support"],
  ["24/7 Emergency Support", "Doha · Help available for citizens in urgent need"],
  ["Mobile consular desk in Al Wakrah", "Doha · Embassy announcement for local appointments"],
  ["Passport checklist updated", "Doha · New document list for renewal requests"],
  ["Community cultural evening", "Doha · Family programme for Gambians in Qatar"],
] as const;

const GAP = 16;

export function HighlightReel() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);
  const startX = useRef<number | null>(null);
  const [index, setIndex] = useState(0);
  const [step, setStep] = useState(0);
  const [rtl, setRtl] = useState(false);
  const [animate, setAnimate] = useState(true);
  const count = highlights.length;
  const cards = [...highlights, ...highlights.slice(0, 3)];

  useEffect(() => {
    const root = document.documentElement;
    setRtl(root.lang.toLowerCase().startsWith("ar") || root.dir === "rtl");
  }, []);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const measure = () => {
      const styles = getComputedStyle(el);
      const pad = parseFloat(styles.paddingLeft) + parseFloat(styles.paddingRight);
      const card = (el.clientWidth - pad - GAP * 2) / 3;
      setStep(card + GAP);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
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
    if (!el) return;
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

  return (
    <div
      ref={viewportRef}
      className="overflow-hidden px-4 pb-14 sm:px-6"
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
        {cards.map(([title, detail], cardIndex) => (
          <article
            key={`${title}-${cardIndex}`}
            className="flex shrink-0 items-center gap-4 rounded-2xl border border-white/15 bg-white/5 px-4 py-4"
            style={{ width: Math.max(step - GAP, 0) }}
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
              <ImageIcon />
            </span>
            <span>
              <span className="block text-sm font-semibold">{title}</span>
              <span className="block text-xs text-white/70">{detail}</span>
            </span>
          </article>
        ))}
      </div>
    </div>
  );
}

function ImageIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="8.5" cy="10" r="1.5" />
      <path d="M21 16l-5-5-9 8" />
    </svg>
  );
}
