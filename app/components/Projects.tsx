"use client";

const projects = [
  {
    idx: "001",
    name: "Healthy Recipe Finder",
    desc: "A web app to discover quick, whole-food recipes with smart search and Firebase-backed user data.",
    tech: ["React", "Firebase", "Tailwind", "Netlify"],
    liveUrl: "https://nammathealth.netlify.app/",
    githubUrl: "https://github.com/AmineNT25/Healthy-Recipes-Finder",
  },
  {
    idx: "002",
    name: "Bookshelf",
    desc: "Personal library manager with Open Library integration, reading progress tracking, and yearly goal monitoring.",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
    liveUrl: "https://bookshelf-nammat.vercel.app/",
    githubUrl: "https://github.com/AmineNT25/bookshelf",
  },
  {
    idx: "003",
    name: "FinTrack",
    desc: "Personal finance dashboard with trend charts, category breakdowns, CSV import, and monthly savings tracking.",
    tech: ["Next.js", "TypeScript", "Supabase", "Charts"],
    liveUrl: "https://fintrack-nammat.vercel.app",
    githubUrl: "https://github.com/AmineNT25/fintrack",
  },
  {
    idx: "004",
    name: "Achkid",
    desc: "Tourism platform for discovering Agadir — local experiences, emergency services, and a provider portal.",
    tech: ["React", "TypeScript", "Tailwind", "Vercel"],
    liveUrl: "https://achkid.vercel.app/",
    githubUrl: "https://github.com/AmineNT25/achkid",
  },
  {
    idx: "005",
    name: "Stochos",
    desc: "Goal-tracking and productivity app to define, monitor, and achieve personal and professional targets.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    liveUrl: "https://stochos.vercel.app/",
    githubUrl: "https://github.com/AmineNT25/stochos",
  },
  {
    idx: "006",
    name: "Customise Phone",
    desc: "Interactive phone customization app — pick colors, materials, and accessories to build your ideal device with a live 3D preview.",
    tech: ["React", "Node.js", "Tailwind", "Vercel"],
    liveUrl: "https://customise-back-phone.vercel.app/",
    githubUrl: "https://github.com/AmineNT25/customise-phone",
  },
  {
    idx: "007",
    name: "LocaMat",
    desc: "Moroccan material rental platform — find, compare, and rent construction equipment across Morocco.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Node.js"],
    liveUrl: null as string | null,
    githubUrl: null as string | null,
    localUrl: "/projects/locamat" as string,
  },
] as const;

export default function Projects() {
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
                <span className="card-arrow" aria-hidden="true">↗</span>
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
                {"localUrl" in project && project.localUrl && (
                  <a className="card-link" href={project.localUrl}>
                    View <span className="ext" aria-hidden="true">↗</span>
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
    </section>
  );
}
