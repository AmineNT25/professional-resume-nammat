"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Stack", href: "#stack" },
  { name: "Experience", href: "#experience" },
  { name: "Work", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const DownloadIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const toggle = () => {
    const next = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(next);
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label="Toggle color theme"
      title="Toggle color theme"
    >
      <svg
        className="icon-moon"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
      </svg>
      <svg
        className="icon-sun"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    </button>
  );
};

const Navbar = () => {
  const navRef = useRef<HTMLElement>(null);
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const onScroll = () => {
      if (window.scrollY > 60) {
        nav.style.paddingTop = "14px";
        nav.style.paddingBottom = "14px";
      } else {
        nav.style.paddingTop = "28px";
        nav.style.paddingBottom = "28px";
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close modal on Escape
  useEffect(() => {
    if (!showResume) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setShowResume(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [showResume]);

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", href);
    }
  };

  return (
    <>
      <nav className="main-nav" ref={navRef} id="main-nav">
        <a href="#hero" className="nav-logo" onClick={(e) => smoothScroll(e, "#hero")}>
          nammat.dev
        </a>
        <div className="nav-right">
          <div className="nav-avail">
            <span className="avail-dot" />
            Available for work
          </div>
          <div className="nav-links">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => smoothScroll(e, link.href)}
              >
                {link.name}
              </a>
            ))}
            <button className="nav-resume" onClick={() => setShowResume(true)}>
              Resume
            </button>
          </div>
          <ThemeToggle />
        </div>
      </nav>

      {/* Resume modal */}
      {showResume && (
        <div
          className="r-modal"
          onClick={() => setShowResume(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-modal-title"
        >
          <div className="r-modal-box" onClick={(e) => e.stopPropagation()}>
            <button
              className="r-modal-close"
              onClick={() => setShowResume(false)}
              aria-label="Close"
            >
              ✕ close
            </button>
            <div className="r-modal-eyebrow">Portfolio — Resume</div>
            <h2 className="r-modal-title" id="resume-modal-title">
              Ahmed Amine<br />Nammat
            </h2>
            <div className="r-modal-rule" />
            <p className="r-modal-sub">Choose your preferred language to download</p>
            <div className="r-modal-btns">
              <a
                href="/englishResume.pdf"
                download="Ahmed_Amine_Nammat_Resume_EN.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="r-dl-btn"
                onClick={() => setShowResume(false)}
              >
                <DownloadIcon />
                English
              </a>
              <a
                href="/frenchResume.pdf"
                download="Ahmed_Amine_Nammat_Resume_FR.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="r-dl-btn"
                onClick={() => setShowResume(false)}
              >
                <DownloadIcon />
                Français
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
