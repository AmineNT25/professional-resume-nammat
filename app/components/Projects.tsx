"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";

type Project = {
  idx: string;
  name: string;
  desc: string;
  tech: readonly string[];
  liveUrl: string;
  githubUrl: string;
  preview: string;
  previewType: "image" | "video";
};

const projects: Project[] = [
  {
    idx: "001",
    name: "Healthy Recipe Finder",
    desc: "A web app to discover quick, whole-food recipes with smart search and Firebase-backed user data.",
    tech: ["React", "Firebase", "Tailwind", "Netlify"],
    liveUrl: "https://nammathealth.netlify.app/",
    githubUrl: "https://github.com/AmineNT25/Healthy-Recipes-Finder",
    preview: "/preview-healthy-recipe.png",
    previewType: "image",
  },
  {
    idx: "002",
    name: "Achkid",
    desc: "Tourism platform for discovering Agadir — local experiences, emergency services, and a provider portal.",
    tech: ["React", "TypeScript", "Tailwind", "Vercel"],
    liveUrl: "https://achkid.vercel.app/",
    githubUrl: "https://github.com/AmineNT25/achkid",
    preview: "/preview-achkid.png",
    previewType: "image",
  },
  {
    idx: "003",
    name: "Customise Phone",
    desc: "Interactive phone customization app — pick colors, materials, and accessories to build your ideal device with a live 3D preview.",
    tech: ["Next.js", "Three.js", "Tailwind", "Vercel"],
    liveUrl: "https://customise-back-phone.vercel.app/",
    githubUrl: "https://github.com/AmineNT25/customise-phone",
    preview: "/preview-customise-phone.mp4",
    previewType: "video",
  },
  {
    idx: "004",
    name: "Kreli",
    desc: "Moroccan material rental platform — find, compare, and rent construction equipment across Morocco.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Node.js"],
    liveUrl: "https://kreli.vercel.app/",
    githubUrl: "https://github.com/youssefsina/Kreli",
    preview: "/preview-kreli.png",
    previewType: "image",
  },
];

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
        {project.previewType === "video" ? (
          <video
            className="lightbox-media"
            src={project.preview}
            autoPlay
            loop
            muted
            playsInline
            controls
          />
        ) : (
          <div className="lightbox-scroll">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="lightbox-img"
              src={project.preview}
              alt={`${project.name} preview`}
            />
          </div>
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
