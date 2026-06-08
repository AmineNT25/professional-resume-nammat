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
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [loaderDone, setLoaderDone] = useState(false);

  // Loader fade-out
  useEffect(() => {
    const loader = loaderRef.current;
    if (!loader) return;
    let tid: ReturnType<typeof setTimeout>;
    (async () => {
      const { gsap } = await import("gsap");
      tid = setTimeout(() => {
        gsap.to(loader, {
          opacity: 0,
          duration: 0.6,
          ease: "power2.inOut",
          onComplete: () => {
            loader.style.display = "none";
            setLoaderDone(true);
          },
        });
      }, 3300);
    })();
    return () => clearTimeout(tid);
  }, []);

  // GSAP scroll reveals — fire after loader clears
  useEffect(() => {
    if (!loaderDone) return;
    let ctx: { revert: () => void } | undefined;
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        document.querySelectorAll(".gsap-reveal").forEach((el) => {
          gsap.from(el, {
            y: 32,
            opacity: 0,
            duration: 1.0,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          });
        });

        gsap.from(".gsap-exp", {
          x: -24,
          opacity: 0,
          duration: 0.8,
          stagger: 0.16,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".exp-list",
            start: "top 82%",
            toggleActions: "play none none none",
          },
        });
      });
    })();
    return () => {
      ctx?.revert();
    };
  }, [loaderDone]);

  // Custom cursor
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

    let cx = -200, cy = -200, rx = -200, ry = -200, rafId: number;

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
      document.querySelectorAll("a, button, .card").forEach(addHover);
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
          <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#nf)" />
      </svg>

      {/* Loader */}
      <div id="loader" ref={loaderRef} aria-hidden="true">
        <div className="loader-bg-n">&gt;</div>
        <div className="loader-content">
          <svg
            width="60" height="60" viewBox="0 0 100 100"
            fill="none" xmlns="http://www.w3.org/2000/svg"
          >
            <polyline
              points="33,33 54,50 33,67"
              stroke="var(--accent)"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="60"
              strokeDashoffset="60"
              style={{ animation: "ldrawChev 0.55s 0.1s cubic-bezier(0.16,1,0.3,1) forwards" }}
            />
            <rect
              x="58" y="62" width="20" height="9" rx="1.5"
              fill="var(--accent)"
              style={{ opacity: 0, animation: "ldrawCursor 0.3s 0.55s ease forwards" }}
            />
          </svg>
          <div className="loader-name">
            <div className="loader-fullname">Ahmed Amine Nammat</div>
            <div className="loader-role">Full Stack Developer</div>
          </div>
          <div className="loader-progress">
            <div className="loader-track">
              <div className="loader-bar-fill" />
            </div>
            <div className="loader-loading-text">Loading</div>
          </div>
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

      <footer className="footer">
        <div className="wrap footer-inner">
          <div className="footer-left">
            <span className="footer-name">Ahmed Amine Nammat</span>
            <span className="footer-meta">Full Stack Developer · Agadir, Morocco · © 2026</span>
          </div>
          <nav className="footer-links" aria-label="Social">
            <a
              className="footer-link"
              href="https://github.com/AmineNT25/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <span className="ext" aria-hidden="true">↗</span>
            </a>
            <a
              className="footer-link"
              href="https://www.linkedin.com/in/ahmed-amine-nammat-473083280"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <span className="ext" aria-hidden="true">↗</span>
            </a>
            <a className="footer-link" href="mailto:ahmedaminenammat021105@gmail.com">
              Email <span className="ext" aria-hidden="true">↗</span>
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
}
