"use client";

import { useEffect } from "react";

interface HeroProps {
  loaderDone: boolean;
}

const Hero = ({ loaderDone }: HeroProps) => {
  useEffect(() => {
    if (!loaderDone) return;

    (async () => {
      const { gsap } = await import("gsap");
      const tl = gsap.timeline();
      tl.from(".hero-status", { opacity: 0, y: 10, duration: 0.5, ease: "power3.out" })
        .from(".term", { opacity: 0, y: 14, duration: 0.7, ease: "power3.out" }, "-=0.25")
        .from(".hero-tag", { opacity: 0, y: 10, duration: 0.6, ease: "power3.out" }, "-=0.4")
        .from(".hero-cta", { opacity: 0, y: 8, duration: 0.5, ease: "power3.out" }, "-=0.3");
    })();
  }, [loaderDone]);

  const smoothTo = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="hero-section">
      <div className="wrap">
        <div className="term" aria-label="Introduction">
          <span className="term-row term-cmd"><span className="p">&gt;</span>whoami</span>
          <span className="term-row"><span className="term-out name">Ahmed Amine Nammat</span></span>
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

        <h1 className="hero-tag">
          Building <em>thoughtful</em> digital experiences — sharp, precise, and built to last.
        </h1>

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
