"use client";

import { useEffect, useRef } from "react";

interface HeroProps {
  loaderDone: boolean;
}

const Hero = ({ loaderDone }: HeroProps) => {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!loaderDone) return;

    const root = rootRef.current;
    if (!root) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = root.querySelectorAll<HTMLElement>(".term, .hero-tag, .hero-cta");

    if (prefersReduced) {
      targets.forEach((el) => (el.style.opacity = "1"));
      return;
    }

    let ctx: { revert: () => void } | undefined;

    (async () => {
      try {
        const { gsap } = await import("gsap");
        ctx = gsap.context(() => {
          const tl = gsap.timeline();
          tl.fromTo(".term",     { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" })
            .fromTo(".hero-tag", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.4")
            .fromTo(".hero-cta", { opacity: 0, y: 8 },  { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, "-=0.3");
        }, root);
      } catch {
        targets.forEach((el) => (el.style.opacity = "1"));
      }
    })();

    return () => ctx?.revert();
  }, [loaderDone]);

  const smoothTo = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="hero-section" ref={rootRef}>
      <div className="wrap">
        <div className="term" aria-label="Introduction">
          <span className="term-row term-cmd"><span className="p">&gt;</span>whoami</span>
          <div className="term-row"><h1 className="term-out name">Ahmed Amine Nammat</h1></div>
          <span className="term-row term-cmd"><span className="p">&gt;</span>role</span>
          <span className="term-row"><span className="term-out lg">Full Stack Developer</span></span>
          <span className="term-row term-cmd"><span className="p">&gt;</span>location</span>
          <span className="term-row"><span className="term-out dim">Agadir, Morocco</span></span>
          <span className="term-row term-cmd"><span className="p">&gt;</span>status</span>
          <span className="term-row">
            <span className="term-out dim">
              Available for work <span className="ok">✓</span>
              <span className="term-cursor" aria-hidden="true" />
            </span>
          </span>
        </div>

        <p className="hero-tag">
          Building <em>thoughtful</em> digital experiences — sharp, precise, and built to last.
        </p>

        <div className="hero-cta">
          <a className="btn btn-primary" href="#projects" onClick={smoothTo("projects")}>
            View work <span className="btn-arrow" aria-hidden="true">→</span>
          </a>
          <a className="btn btn-ghost" href="#contact" onClick={smoothTo("contact")}>
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
