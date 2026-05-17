"use client";

const Experience = () => {
  return (
    <>
      {/* ===== STACK ===== */}
      <section id="stack" className="sec">
        <div className="sec-head">
          <span className="sec-num">02</span>
          <div className="sec-rule" />
          <span className="sec-tag">Tech Stack</span>
        </div>
        <div className="sk-grid">
          {[
            {
              label: "Frontend",
              items: ["React / Next.js", "TypeScript", "Tailwind CSS", "Three.js / WebGL", "Framer Motion"],
            },
            {
              label: "Backend",
              items: ["Node.js / Express", "Laravel / PHP", "PostgreSQL", "MongoDB / MySQL", "REST / GraphQL"],
            },
            {
              label: "Tools & DevOps",
              items: ["Git / GitHub", "Docker", "Linux / Bash", "Figma", "Vercel / Render"],
            },
          ].map((col) => (
            <div key={col.label} className="sk-col gsap-reveal">
              <div className="sk-col-label">{col.label}</div>
              <div className="sk-items">
                {col.items.map((item) => (
                  <div key={item} className="sk-item">{item}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== EXPERIENCE ===== */}
      <section id="experience" className="sec">
        <div className="sec-head">
          <span className="sec-num">03</span>
          <div className="sec-rule" />
          <span className="sec-tag">Experience</span>
        </div>
        <div className="exp-list">
          <div className="exp-item gsap-exp">
            <div className="exp-period">2023 — Present</div>
            <div>
              <div className="exp-role">Web Development Technician</div>
              <div className="exp-company">OFPPT – CMC Souss Massa</div>
              <p className="exp-desc">
                Specialized training in modern web development at OFPPT, covering full-stack development, RESTful API design, database modelling, and cloud deployment pipelines. Completed intensive study of React, Next.js, Node.js, and Laravel.
              </p>
              <a
                href="https://udemy.com/certificate/UC-2c6749df-3fd6-4f8b-885e-9a5d27629e49/"
                target="_blank"
                rel="noopener noreferrer"
                className="exp-link"
              >
                View Certificate →
              </a>
            </div>
          </div>
          <div className="exp-item gsap-exp">
            <div className="exp-period">2024 — Present</div>
            <div>
              <div className="exp-role">Freelance Developer</div>
              <div className="exp-company">Independent</div>
              <p className="exp-desc">
                Building custom web applications for clients — specialising in performant React frontends paired with robust backend APIs and scalable database architectures. Projects include tourism platforms, finance tools, and productivity apps.
              </p>
            </div>
          </div>
          <div className="exp-item gsap-exp">
            <div className="exp-period">Core Skills</div>
            <div>
              <div className="exp-role">Competencies</div>
              <div className="exp-company">Technical & Professional</div>
              <p className="exp-desc">
                REST APIs · CRUD Operations · Responsive Design · MVC Architecture · Agile Methodology · Tailwind CSS 4 · NextJS 15 · ReactJS 19 · Node.js · Express · MongoDB · MySQL · Git
              </p>
              <p className="exp-desc" style={{ marginTop: "12px" }}>
                Languages: Arabic (Native) · French (Fluent) · English (Fluent)
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
