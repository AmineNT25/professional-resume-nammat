"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import type { CSSProperties } from "react";
import { createPortal } from "react-dom";

type Project = {
  idx: string;
  name: string;
  desc: string;
  tech: readonly string[];
  liveUrl: string;
  githubUrl: string;
  // Static preview / poster image. Used on its own when `video` is absent,
  // and as the video poster when a video is present.
  image?: string;
  // Optional inline video preview (mp4/webm). When present it replaces the
  // static image as the default visible media in the card.
  video?: string;
};

const projects: Project[] = [
  {
    idx: "001",
    name: "Healthy Recipe Finder",
    desc: "A web app to discover quick, whole-food recipes with smart search and Firebase-backed user data.",
    tech: ["React", "Firebase", "Tailwind", "Netlify"],
    liveUrl: "https://nammathealth.netlify.app/",
    githubUrl: "https://github.com/AmineNT25/Healthy-Recipes-Finder",
    image: "/preview-healthy-recipe.png",
    video: "/preview-healthy-recipe.mp4",
  },
  {
    idx: "002",
    name: "Achkid",
    desc: "Tourism platform for discovering Agadir — local experiences, emergency services, and a provider portal.",
    tech: ["React", "TypeScript", "Tailwind", "Vercel"],
    liveUrl: "https://achkid.vercel.app/",
    githubUrl: "https://github.com/AmineNT25/achkid",
    image: "/preview-achkid.png",
    video: "/preview-achkid.mp4",
  },
  {
    idx: "003",
    name: "Customise Phone",
    desc: "Interactive phone customization app — pick colors, materials, and accessories to build your ideal device with a live 3D preview.",
    tech: ["Next.js", "Three.js", "Tailwind", "Vercel"],
    liveUrl: "https://customise-back-phone.vercel.app/",
    githubUrl: "https://github.com/AmineNT25/customise-phone",
    video: "/preview-customise-phone.mp4",
  },
  {
    idx: "004",
    name: "Kreli",
    desc: "Moroccan material rental platform — find, compare, and rent construction equipment across Morocco.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Node.js"],
    liveUrl: "https://kreli.vercel.app/",
    githubUrl: "https://github.com/youssefsina/Kreli",
    image: "/preview-kreli.png",
    video: "/preview-kreli.mp4",
  },
];

// Fixed aspect-ratio media frame so the card never shifts layout when it
// swaps between the poster image and the playing video.
const mediaFrameStyle: CSSProperties = {
  position: "relative",
  width: "100%",
  aspectRatio: "16 / 10",
  borderRadius: "8px",
  overflow: "hidden",
  background: "var(--surface-2)",
  border: "1px solid var(--border)",
};

const mediaFillStyle: CSSProperties = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
};

/**
 * Renders the card's default visible media.
 * - With a `video`: the video is the default media (poster = image), muted,
 *   looped, inline. Playback only starts once the card is in the viewport
 *   (IntersectionObserver) and pauses + resets when it leaves. Hover / tap
 *   resumes it if it was paused.
 * - Without a `video`: falls back to the static image only.
 */
function ProjectMedia({ project }: { project: Project }) {
  const frameRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const inViewRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    const frame = frameRef.current;
    if (!video || !frame) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        inViewRef.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          if (!prefersReduced) video.play().catch(() => {});
        } else {
          video.pause();
          video.currentTime = 0;
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(frame);
    return () => observer.disconnect();
  }, []);

  // Hover / tap: resume playback if it was paused while still on screen.
  // (The card's existing mouseenter/mouseleave listeners in page.tsx only
  // drive the custom cursor ring, so this doesn't duplicate them.)
  const resume = useCallback(() => {
    const video = videoRef.current;
    if (video && video.paused && inViewRef.current) {
      video.play().catch(() => {});
    }
  }, []);

  if (!project.video) {
    if (!project.image) return null;
    return (
      <div style={mediaFrameStyle} className="card-media">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={`${project.name} preview`}
          style={mediaFillStyle}
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div
      ref={frameRef}
      style={mediaFrameStyle}
      className="card-media"
      onMouseEnter={resume}
      onTouchStart={resume}
    >
      <video
        ref={videoRef}
        src={project.video}
        poster={project.image}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={`${project.name} preview animation`}
        style={mediaFillStyle}
      >
        {project.name} preview video
      </video>
    </div>
  );
}

function Lightbox({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!mounted) return null;

  return createPortal(
    <div
      className="lightbox-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} preview`}
    >
      <div className="lightbox-box" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose} aria-label="Close preview">
          ✕
        </button>
        <div className="lightbox-title">
          <span className="lightbox-idx">{project.idx}</span>
          {project.name}
        </div>
        {project.video ? (
          <video
            className="lightbox-media"
            src={project.video}
            poster={project.image}
            autoPlay
            loop
            muted
            playsInline
            controls
            aria-label={`${project.name} preview animation`}
          />
        ) : (
          project.image && (
            <div className="lightbox-scroll">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="lightbox-img"
                src={project.image}
                alt={`${project.name} preview`}
              />
            </div>
          )
        )}
      </div>
    </div>,
    document.body
  );
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const openPreview = useCallback((project: Project) => {
    setActiveProject(project);
  }, []);

  const closePreview = useCallback(() => {
    setActiveProject(null);
  }, []);

  return (
    <section id="projects" className="sec">
      <div className="wrap">
        <div className="sec-head gsap-reveal">
          <span className="kicker"><span className="num">04</span> — work</span>
          <h2 className="sec-title">Selected projects.</h2>
        </div>

        <div className="proj-grid">
          {projects.map((project) => (
            <article key={project.idx} className="card gsap-reveal">
              <ProjectMedia project={project} />

              <div className="card-top">
                <div>
                  <div className="card-idx">{project.idx}</div>
                  <h3 className="card-name">{project.name}</h3>
                </div>
                <button
                  className="card-arrow-btn"
                  onClick={() => openPreview(project)}
                  aria-label={`Preview ${project.name}`}
                >
                  <span aria-hidden="true">↗</span>
                </button>
              </div>

              <p className="card-desc">{project.desc}</p>

              <div className="card-tags">
                {project.tech.map((t) => (
                  <span key={t} className="card-tag">{t}</span>
                ))}
              </div>

              <div className="card-links">
                {project.liveUrl && (
                  <a
                    className="card-link"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live <span className="ext" aria-hidden="true">↗</span>
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    className="card-link"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code <span className="ext" aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeProject && (
        <Lightbox project={activeProject} onClose={closePreview} />
      )}
    </section>
  );
}
