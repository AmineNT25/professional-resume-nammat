"use client";

import { useState } from "react";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setLoading(true);
    try {
      const formData = new FormData(form);
      await fetch("https://formspree.io/f/xlgpdbdz", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
    } catch (err) {
      console.error("Error sending message:", err);
    } finally {
      form.reset();
      setShowModal(true);
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="sec">
      <div className="wrap">
        <div className="sec-head gsap-reveal">
          <span className="kicker"><span className="num">05</span> — contact</span>
          <h2 className="sec-title">Let&apos;s build something.</h2>
        </div>

        <div className="contact-grid">
          <form className="ct-form gsap-reveal" onSubmit={handleSubmit} noValidate>
            <div className="ct-field">
              <label htmlFor="cf-name">Name</label>
              <input
                id="cf-name"
                name="name"
                type="text"
                placeholder="Your name"
                autoComplete="name"
                required
              />
            </div>
            <div className="ct-field">
              <label htmlFor="cf-email">Email</label>
              <input
                id="cf-email"
                name="email"
                type="email"
                placeholder="you@domain.com"
                autoComplete="email"
                required
              />
            </div>
            <div className="ct-field">
              <label htmlFor="cf-message">Message</label>
              <textarea
                id="cf-message"
                name="message"
                placeholder="Tell me about the project…"
                required
              />
            </div>
            <div className="ct-form-actions">
              <button className="btn btn-primary" type="submit" disabled={loading}>
                {loading ? (
                  "Sending…"
                ) : (
                  <>Send Message <span className="btn-arrow" aria-hidden="true">→</span></>
                )}
              </button>
            </div>
          </form>

          <aside className="resume-panel gsap-reveal">
            <div className="resume-label">
              <span className="c">//</span> Or download my resume
            </div>
            <div className="resume-btns">
              <a
                className="resume-btn"
                href="/englishResume.pdf"
                download="Ahmed_Amine_Nammat_Resume_EN.pdf"
              >
                <span>Resume EN <span className="down" aria-hidden="true">↓</span></span>
                <span className="meta">PDF · EN</span>
              </a>
              <a
                className="resume-btn"
                href="/frenchResume.pdf"
                download="Ahmed_Amine_Nammat_Resume_FR.pdf"
              >
                <span>Resume FR <span className="down" aria-hidden="true">↓</span></span>
                <span className="meta">PDF · FR</span>
              </a>
            </div>
            <p className="resume-note">
              Prefer a quick chat? Reach me directly via the links below.
            </p>
          </aside>
        </div>
      </div>

      {showModal && (
        <div
          className="ct-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="ct-modal-box">
            <div className="ct-modal-title" id="modal-title">Thank you.</div>
            <p className="ct-modal-text">
              Your message has been sent. I&apos;ll get back to you soon.
            </p>
            <button
              type="button"
              className="ct-modal-btn"
              onClick={() => setShowModal(false)}
            >
              Send a New Message
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
