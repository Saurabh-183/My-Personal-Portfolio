"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const trail = trailRef.current;
    if (!cursor || !trail) return;

    let mx = 0,
      my = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = mx - 6 + "px";
      cursor.style.top = my - 6 + "px";
      setTimeout(() => {
        trail.style.left = mx - 18 + "px";
        trail.style.top = my - 18 + "px";
      }, 80);
    };

    const onEnter = () => cursor.style.transform = "scale(2.5)";
    const onLeave = () => cursor.style.transform = "scale(1)";

    document.addEventListener("mousemove", onMove);

    const interactables = document.querySelectorAll(
      "a, button, [data-hover]"
    );
    interactables.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      interactables.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] w-3 h-3 rounded-full bg-theme-accent transition-transform duration-100 mix-blend-difference"
        style={{ top: 0, left: 0 }}
      />
      <div
        ref={trailRef}
        className="fixed pointer-events-none z-[9998] w-9 h-9 rounded-full border border-theme-accent opacity-40"
        style={{ top: 0, left: 0, transition: "left 0.12s ease, top 0.12s ease" }}
      />
    </>
  );
}
