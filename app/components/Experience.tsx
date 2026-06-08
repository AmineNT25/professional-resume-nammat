"use client";

const Experience = () => {
  return (
    <>
      {/* ===== STACK ===== */}
      <section id="stack" className="sec">
        <div className="wrap">
          <div className="sec-head gsap-reveal">
            <span className="kicker"><span className="num">02</span> — stack</span>
            <h2 className="sec-title">Tools I reach for.</h2>
          </div>
          <div className="stack-grid">
            <div className="stack-col gsap-reveal">
              <h3>Frontend</h3>
              <div className="chips">
                <span className="chip">React</span>
                <span className="chip">Next.js</span>
                <span className="chip">TypeScript</span>
                <span className="chip">JavaScript</span>
                <span className="chip">Tailwind CSS</span>
                <span className="chip">HTML5</span>
                <span className="chip">CSS3</span>
              </div>
            </div>
            <div className="stack-col gsap-reveal">
              <h3>Backend</h3>
              <div className="chips">
                <span className="chip">Node.js</span>
                <span className="chip">Laravel</span>
                <span className="chip">PHP</span>
                <span className="chip">Express</span>
                <span className="chip">MySQL</span>
                <span className="chip">MongoDB</span>
                <span className="chip">REST APIs</span>
              </div>
            </div>
            <div className="stack-col gsap-reveal">
              <h3>Tools</h3>
              <div className="chips">
                <span className="chip">Git</span>
                <span className="chip">GitHub</span>
                <span className="chip">VS Code</span>
                <span className="chip">Figma</span>
                <span className="chip">Postman</span>
                <span className="chip">Vercel</span>
                <span className="chip">Docker</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCE ===== */}
      <section id="experience" className="sec">
        <div className="wrap">
          <div className="sec-head gsap-reveal">
            <span className="kicker"><span className="num">03</span> — experience</span>
            <h2 className="sec-title">Where I&apos;ve been building.</h2>
          </div>
          <div className="exp-list">
            <article className="exp-item gsap-exp">
              <div className="exp-when">2023 — <span className="now">present</span></div>
              <div>
                <h3 className="exp-role">Web Development Technician</h3>
                <div className="exp-org">OFPPT · CMC Souss Massa</div>
                <p className="exp-desc">
                  Training and building full-stack web projects across the modern stack — practicing
                  clean architecture, version control, and shipping real, working applications from
                  spec to deployment.
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
            </article>
            <article className="exp-item gsap-exp">
              <div className="exp-when">2024 — <span className="now">present</span></div>
              <div>
                <h3 className="exp-role">Freelance Developer</h3>
                <div className="exp-org">Self-employed · Remote</div>
                <p className="exp-desc">
                  Designing and developing web applications for clients end to end — translating
                  requirements into precise, maintainable interfaces and APIs, with an eye on
                  performance and long-term upkeep.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
