"use client";

const About = () => {
  return (
    <section id="about" className="sec">
      <div className="sec-head">
        <span className="sec-num">01</span>
        <div className="sec-rule" />
        <span className="sec-tag">About</span>
      </div>
      <div className="ab-grid">
        <div>
          <h2 className="ab-heading gsap-reveal">
            Crafting code<br />with <em>intention</em>
          </h2>
        </div>
        <div className="ab-right">
          <p className="ab-bio gsap-reveal">
            I&apos;m Ahmed Amine Nammat — a Full Stack Developer and Web Development Technician at OFPPT, with strong knowledge in frontend and backend development.
          </p>
          <p className="ab-bio gsap-reveal">
            I build end-to-end applications that are fast, accessible, and a pleasure to use — turning complex problems into simple, elegant solutions.
          </p>
          <div className="ab-chips gsap-reveal">
            <span className="ab-chip">React</span>
            <span className="ab-chip">Next.js</span>
            <span className="ab-chip">TypeScript</span>
            <span className="ab-chip">Node.js</span>
            <span className="ab-chip">Laravel</span>
            <span className="ab-chip">Tailwind</span>
            <span className="ab-chip">Open to Remote</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
