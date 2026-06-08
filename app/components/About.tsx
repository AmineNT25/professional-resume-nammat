"use client";

const About = () => {
  return (
    <section id="about" className="sec">
      <div className="wrap">
        <div className="sec-head gsap-reveal">
          <span className="kicker"><span className="num">01</span> — about</span>
          <h2 className="sec-title">A developer who sweats the details.</h2>
        </div>

        <div className="about-grid">
          <div className="about-body gsap-reveal">
            <p>
              I&apos;m a <strong>Full Stack Developer</strong> based in Agadir, Morocco, focused on
              building fast, accessible, and genuinely useful web applications — from the database
              to the last pixel.
            </p>
            <p>
              I care about clean architecture, precise interfaces, and the small interactions most
              people never notice but everyone feels. I work across the modern JavaScript stack and
              pick the right tool for the job rather than the trendiest one.
            </p>
            <div className="chips">
              <span className="chip"><span className="lead">›</span>React</span>
              <span className="chip"><span className="lead">›</span>Next.js</span>
              <span className="chip"><span className="lead">›</span>TypeScript</span>
              <span className="chip"><span className="lead">›</span>Node.js</span>
              <span className="chip"><span className="lead">›</span>Laravel</span>
              <span className="chip"><span className="lead">›</span>Tailwind</span>
            </div>
          </div>

          <dl className="about-meta gsap-reveal">
            <div className="meta-row">
              <dt>Based in</dt>
              <dd>Agadir, Morocco</dd>
            </div>
            <div className="meta-row">
              <dt>Focus</dt>
              <dd>Full Stack · Web Apps</dd>
            </div>
            <div className="meta-row">
              <dt>Availability</dt>
              <dd><span className="ok">●</span> Open to Remote</dd>
            </div>
            <div className="meta-row">
              <dt>Languages</dt>
              <dd>EN · FR · AR</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default About;
