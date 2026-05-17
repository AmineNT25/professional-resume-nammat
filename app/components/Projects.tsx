"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    name: "Healthy Recipe Finder",
    desc: "A web application to help users discover quick, whole-food recipes focused on healthy eating with minimal fuss — clean interface, smart search, and Firebase-backed user data.",
    tech: ["React", "Tailwind", "Firebase", "Netlify"],
    liveUrl: "https://nammathealth.netlify.app/",
    githubUrl: "https://github.com/AmineNT25/Healthy-Recipes-Finder.git",
    image: "/project-healthy-recipe.png",
    imgAlt: "Healthy Recipe Finder",
  },
  {
    name: "Bookshelf",
    desc: "A personal library management app to track reading progress across custom shelves. Integrates with Open Library for search and discovery, with yearly reading goal tracking.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
    liveUrl: "https://bookshelf-nammat.vercel.app/",
    githubUrl: "https://github.com/AmineNT25/bookshelf",
    image: "/bookshelf-project.png",
    imgAlt: "Bookshelf App",
  },
  {
    name: "FinTrack",
    desc: "A personal finance dashboard for tracking income, expenses, and savings goals. Features balance trend charts, category breakdowns, CSV import, and monthly savings rate.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
    liveUrl: "https://fintrack-nammat.vercel.app",
    githubUrl: "https://github.com/AmineNT25/fintrack.git",
    image: "/project-fintrack.png",
    imgAlt: "FinTrack Finance Dashboard",
  },
  {
    name: "Achkid",
    desc: "A tourism platform for discovering Agadir — featuring authentic local experiences, emergency services, getting-around guides, and a provider portal for listing activities.",
    tech: ["React", "TypeScript", "Tailwind", "Vercel"],
    liveUrl: "https://achkid.vercel.app/",
    githubUrl: "https://github.com/AmineNT25/achkid",
    image: "/project-achkid.png",
    imgAlt: "Achkid — Discover Agadir",
  },
  {
    name: "Stochos",
    desc: "A goal-tracking and productivity app that helps users define, monitor, and achieve personal and professional targets. Clean, focused interface designed to keep you on course.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    liveUrl: "https://stochos.vercel.app/",
    githubUrl: "https://github.com/AmineNT25/stochos",
    image: "/stochosDark.png",
    imgAlt: "Stochos — Goal Tracking",
  },
  {
    name: "LocaMat",
    desc: "A Moroccan material rental platform where professionals can find, compare, and rent construction and project equipment across Morocco. Currently in progress.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Node.js"],
    liveUrl: null,
    githubUrl: null,
    localUrl: "/projects/locamat",
    image: "/project-locamat-preview.svg",
    imgAlt: "LocaMat — Equipment Rental",
  },
] as const;

const TOTAL = projects.length;

export default function Projects() {
  const [cur, setCur] = useState(0);
  const busyRef = useRef(false);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);

  // Initialise first slide visible with GSAP
  useEffect(() => {
    (async () => {
      const { gsap } = await import("gsap");
      slidesRef.current.forEach((slide, i) => {
        if (!slide) return;
        gsap.set(slide, { opacity: i === 0 ? 1 : 0 });
        slide.style.pointerEvents = i === 0 ? "all" : "none";
      });
    })();
  }, []);

  // Touch swipe
  const tsxRef = useRef(0);
  const onTouchStart = (e: React.TouchEvent) => { tsxRef.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = tsxRef.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 48) goTo(diff > 0 ? cur + 1 : cur - 1);
  };

  // Keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const rect = document.getElementById("projects")?.getBoundingClientRect();
      if (!rect || rect.top >= window.innerHeight || rect.bottom <= 0) return;
      if (e.key === "ArrowRight") goTo(cur + 1);
      if (e.key === "ArrowLeft") goTo(cur - 1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cur]);

  const goTo = async (next: number) => {
    if (busyRef.current) return;
    next = ((next % TOTAL) + TOTAL) % TOTAL;
    if (next === cur) return;
    busyRef.current = true;

    const { gsap } = await import("gsap");
    const prevSlide = slidesRef.current[cur];
    const nextSlide = slidesRef.current[next];
    if (!prevSlide || !nextSlide) { busyRef.current = false; return; }

    gsap.to(prevSlide, {
      opacity: 0, y: -18, duration: 0.38, ease: "power2.in",
      onComplete: () => {
        prevSlide.style.pointerEvents = "none";
        gsap.set(prevSlide, { y: 0 });
        setCur(next);
        nextSlide.style.pointerEvents = "all";
        gsap.fromTo(
          nextSlide,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.65, ease: "power3.out",
            onComplete: () => { busyRef.current = false; },
          }
        );
      },
    });
  };

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section id="projects">
      <div className="sec-head">
        <span className="sec-num">04</span>
        <div className="sec-rule" />
        <span className="sec-tag">Selected Work</span>
      </div>

      <div
        className="proj-show"
        id="proj-show"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {projects.map((project, i) => (
          <div
            key={i}
            className="proj-slide"
            ref={(el) => { slidesRef.current[i] = el; }}
          >
            {/* Info panel */}
            <div className="proj-info">
              <div className="proj-idx">Project — {pad(i + 1)} / {pad(TOTAL)}</div>
              <h3 className="proj-name">{project.name}</h3>
              <p className="proj-desc">{project.desc}</p>
              <div className="proj-tech">
                {project.tech.map((t) => <span key={t}>{t}</span>)}
              </div>
              <div className="proj-links">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-cta"
                  >
                    View Project →
                  </a>
                )}
                {"localUrl" in project && project.localUrl && (
                  <Link href={project.localUrl} className="proj-cta">
                    View Project →
                  </Link>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-icon-link"
                    aria-label="GitHub"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.76-1.605-2.665-.3-5.467-1.332-5.467-5.931 0-1.31.468-2.381 1.235-3.221-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.84 1.234 1.911 1.234 3.221 0 4.61-2.807 5.628-5.479 5.922.429.369.81 1.096.81 2.21 0 1.595-.014 2.881-.014 3.273 0 .32.216.694.825.576C20.565 22.092 24 17.593 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </a>
                )}
              </div>
            </div>

            {/* Visual panel */}
            <div className="proj-vis">
              <Image
                src={project.image}
                alt={project.imgAlt}
                fill
                className="proj-vis-img"
                sizes="50vw"
              />
              <div className="proj-vis-num">{pad(i + 1)}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Nav bar */}
      <div className="proj-nav">
        <div className="proj-dots">
          {projects.map((_, i) => (
            <div
              key={i}
              className={`proj-dot-item${i === cur ? " on" : ""}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
        <span className="proj-counter">{pad(cur + 1)} / {pad(TOTAL)}</span>
        <div className="proj-btns">
          <button
            className="proj-btn"
            onClick={() => goTo(cur - 1)}
            aria-label="Previous project"
          >
            ←
          </button>
          <button
            className="proj-btn"
            onClick={() => goTo(cur + 1)}
            aria-label="Next project"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
