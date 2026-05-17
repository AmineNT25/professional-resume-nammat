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
    <section id="contact">
      <div className="sec-head">
        <span className="sec-num">05</span>
        <div className="sec-rule" />
        <span className="sec-tag">Get in Touch</span>
      </div>

      <div className="ct-headline gsap-reveal">
        Let&apos;s work<br /><em>together.</em>
      </div>

      {/* Contact form */}
      <form onSubmit={handleSubmit} className="ct-form gsap-reveal">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows={5}
        />
        <button type="submit" disabled={loading} className="ct-submit">
          {loading ? "Sending..." : "Send Message →"}
        </button>
      </form>

      {/* Resume downloads */}
      <div className="ct-resume gsap-reveal">
        <span className="ct-resume-label">Download Resume</span>
        <div className="ct-resume-btns">
          <a
            href="/englishResume.pdf"
            download="Ahmed_Amine_Nammat_Resume_EN.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ct-dl-btn"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
            English
          </a>
          <a
            href="/frenchResume.pdf"
            download="Ahmed_Amine_Nammat_Resume_FR.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ct-dl-btn"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
            Français
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="ct-foot">
        <span className="ct-copy">© 2026 Ahmed Amine Nammat. All rights reserved.</span>
        <div className="ct-socials">
          <a
            href="https://github.com/AmineNT25/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ahmed-amine-nammat-473083280"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:ahmedaminenammat021105@gmail.com">Email</a>
        </div>
      </div>

      {/* Success modal */}
      {showModal && (
        <div
          className="ct-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="ct-modal-box">
            <div className="ct-modal-title" id="modal-title">
              Thank you.
            </div>
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
