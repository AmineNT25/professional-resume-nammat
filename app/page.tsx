"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const loaderFillRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [loaderDone, setLoaderDone] = useState(false);

  useEffect(() => {
    const loader = loaderRef.current;
    const fill = loaderFillRef.current;
    if (!loader || !fill) return;

    (async () => {
      const { gsap } = await import("gsap");

      gsap.to(fill, {
        x: "0%",
        duration: 1.4,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.to(loader, {
            opacity: 0,
            duration: 0.55,
            ease: "power2.inOut",
            onComplete: () => {
              loader.style.display = "none";
              setLoaderDone(true);
            },
          });
        },
      });
    })();
  }, []);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const isFine = window.matchMedia("(pointer: fine)").matches;
    if (!isFine) {
      dot.style.display = "none";
      ring.style.display = "none";
      return;
    }

    document.body.style.cursor = "none";

    let cx = -200, cy = -200;
    let rx = -200, ry = -200;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      cx = e.clientX;
      cy = e.clientY;
      dot.style.left = cx + "px";
      dot.style.top = cy + "px";
    };

    const loop = () => {
      rx += (cx - rx) * 0.11;
      ry += (cy - ry) * 0.11;
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
      rafId = requestAnimationFrame(loop);
    };
    loop();

    document.addEventListener("mousemove", onMove);

    const tracked = new WeakSet<Element>();
    const addHover = (el: Element) => {
      if (tracked.has(el)) return;
      tracked.add(el);
      el.addEventListener("mouseenter", () => ring.classList.add("big"));
      el.addEventListener("mouseleave", () => ring.classList.remove("big"));
    };

    const updateHovers = () => {
      document.querySelectorAll("a, button, .proj-btn").forEach(addHover);
    };
    updateHovers();

    const obs = new MutationObserver(updateHovers);
    obs.observe(document.body, { childList: true, subtree: true });

    document.addEventListener("mousedown", () => ring.classList.add("press"));
    document.addEventListener("mouseup", () => ring.classList.remove("press"));

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
      obs.disconnect();
      document.body.style.cursor = "";
    };
  }, []);

  return (
    <>
      {/* Noise overlay */}
      <svg
        className="noise-layer"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <filter id="nf">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.72"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#nf)" />
      </svg>

      {/* Loader */}
      <div id="loader" ref={loaderRef} aria-hidden="true">
        <div className="loader-mark">nammat.dev</div>
        <div className="loader-track">
          <div className="loader-fill" ref={loaderFillRef} />
        </div>
      </div>

      {/* Custom cursor */}
      <div className="c-dot" ref={dotRef} aria-hidden="true" />
      <div className="c-ring" ref={ringRef} aria-hidden="true">
        <span className="c-label">View</span>
      </div>

      <Navbar />
      <main>
        <Hero loaderDone={loaderDone} />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
