"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";

const highlights = [
  {
    title: "H.E. Ambassador with Gambian community in Doha",
    detail: "Doha · Community gathering",
    image: "/news-4.jpg",
    alt: "Gambian community gathered for a cultural programme",
  },
  {
    title: "Staff assisting a citizen",
    detail: "Doha · New appointment slots and document support",
    image: "/news-1.jpg",
    alt: "Embassy staff assisting a citizen at the consular desk",
  },
  {
    title: "Support/helpline visual",
    detail: "Doha · Help available for citizens in urgent need",
    image: "/card-consular.jpg",
    alt: "Citizen welcomed at the Embassy reception",
  },
] as const;

const GAP = 16;

export function HighlightReel() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);
  const startX = useRef<number | null>(null);
  const [index, setIndex] = useState(0);
  const [step, setStep] = useState(0);
  const [rtl, setRtl] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [visible, setVisible] = useState(1);
  const count = highlights.length;
  const cards = [...highlights, ...highlights.slice(0, visible)];

  useEffect(() => {
    const root = document.documentElement;
    setRtl(root.lang.toLowerCase().startsWith("ar") || root.dir === "rtl");
  }, []);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const tablet = window.matchMedia("(min-width: 640px)");
    const update = () => setVisible(desktop.matches ? 3 : tablet.matches ? 2 : 1);
    update();
    desktop.addEventListener("change", update);
    tablet.addEventListener("change", update);
    return () => {
      desktop.removeEventListener("change", update);
      tablet.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    setIndex(0);
  }, [visible]);

  useLayoutEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const measure = () => {
      const styles = getComputedStyle(el);
      const pad = parseFloat(styles.paddingLeft) + parseFloat(styles.paddingRight);
      const card = (el.clientWidth - pad - GAP * (visible - 1)) / visible;
      setStep(card + GAP);
    };
    measure();
    setAnimate(true);
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [visible]);

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
      className="relative z-10 shrink-0 overflow-hidden px-4 pt-2 pb-6 sm:px-6"
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
            className="flex w-full shrink-0 items-center gap-4 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2rem)/3)]"
          >
            <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
              <Image src={item.image} alt={item.alt} fill sizes="64px" className="object-cover" />
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-semibold">{item.title}</span>
              <span className="block text-xs text-white/70">{item.detail}</span>
            </span>
          </article>
        ))}
      </div>
    </div>
  );
}

