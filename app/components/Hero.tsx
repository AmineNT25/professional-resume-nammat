"use client";

import { useEffect, useRef } from "react";

interface HeroProps {
  loaderDone: boolean;
}

const Hero = ({ loaderDone }: HeroProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroBodyRef = useRef<HTMLDivElement>(null);
  const initiated = useRef(false);

  // Three.js particle field
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let rafId: number;
    let renderer: import("three").WebGLRenderer | null = null;

    (async () => {
      const THREE = await import("three");

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
      camera.position.z = 8;

      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
      renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
      renderer.setSize(window.innerWidth, window.innerHeight);

      const mobile = window.innerWidth < 768;
      const COUNT = mobile ? 900 : 2200;

      const pos  = new Float32Array(COUNT * 3);
      const orig = new Float32Array(COUNT * 3);
      const vel  = new Float32Array(COUNT * 3);
      const ph   = new Float32Array(COUNT);

      for (let i = 0; i < COUNT; i++) {
        const x = (Math.random() - 0.5) * 26;
        const y = (Math.random() - 0.5) * 17;
        const z = (Math.random() - 0.5) * 7;
        pos[i * 3]     = orig[i * 3]     = x;
        pos[i * 3 + 1] = orig[i * 3 + 1] = y;
        pos[i * 3 + 2] = orig[i * 3 + 2] = z;
        ph[i] = Math.random() * Math.PI * 2;
      }

      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));

      const mat = new THREE.PointsMaterial({
        color: 0xc4b49e,
        size: mobile ? 0.036 : 0.024,
        transparent: true,
        opacity: 0.62,
        sizeAttenuation: true,
      });

      const pts = new THREE.Points(geo, mat);
      scene.add(pts);

      const mouse = { x: 0, y: 0 };
      let heroVisible = true;

      const onMouseMove = (e: MouseEvent) => {
        mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
      };
      document.addEventListener("mousemove", onMouseMove);

      const heroEl = document.getElementById("hero");
      const heroObs = new IntersectionObserver(
        (entries) => { heroVisible = entries[0].isIntersecting; },
        { threshold: 0 }
      );
      if (heroEl) heroObs.observe(heroEl);

      let t = 0;
      const animate = () => {
        rafId = requestAnimationFrame(animate);
        if (!heroVisible) return;

        t += 0.001;
        const arr = pts.geometry.attributes.position.array as Float32Array;
        const mx = mouse.x * 9;
        const my = mouse.y * 6;

        for (let i = 0; i < COUNT; i++) {
          const ix = i * 3, iy = i * 3 + 1, iz = i * 3 + 2;
          arr[iy] += Math.sin(t * 0.9 + ph[i]) * 0.00075;

          const dx = arr[ix] - mx;
          const dy = arr[iy] - my;
          const d  = Math.sqrt(dx * dx + dy * dy);
          const R  = 3.2;
          if (d < R && d > 0.001) {
            const f = (1 - d / R) * 0.038;
            vel[ix] += (dx / d) * f;
            vel[iy] += (dy / d) * f;
          }

          vel[ix] += (orig[ix] - arr[ix]) * 0.0022;
          vel[iy] += (orig[iy] - arr[iy]) * 0.0022;
          vel[iz] += (orig[iz] - arr[iz]) * 0.0022;

          vel[ix] *= 0.93;
          vel[iy] *= 0.93;
          vel[iz] *= 0.93;

          arr[ix] += vel[ix];
          arr[iy] += vel[iy];
          arr[iz] += vel[iz];
        }

        pts.geometry.attributes.position.needsUpdate = true;
        pts.rotation.y += 0.00006;
        renderer!.render(scene, camera);
      };
      animate();

      const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer!.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener("resize", onResize);

      // Cleanup stored on the ref so it can be called on unmount
      (canvas as any).__cleanup = () => {
        document.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("resize", onResize);
        heroObs.disconnect();
        cancelAnimationFrame(rafId);
        renderer!.dispose();
      };
    })();

    return () => {
      cancelAnimationFrame(rafId);
      if ((canvas as any).__cleanup) (canvas as any).__cleanup();
    };
  }, []);

  // Hero entrance + parallax (runs when loader finishes)
  useEffect(() => {
    if (!loaderDone || initiated.current) return;
    initiated.current = true;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline();

      tl.from("nav.main-nav", { opacity: 0, y: -16, duration: 0.6, ease: "power3.out" })
        .from(".hero-name .lni", {
          y: "110%",
          duration: 1.1,
          stagger: 0.09,
          ease: "power4.out",
        }, "-=0.3")
        .from(".hero-eyebrow", { opacity: 0, y: 14, duration: 0.7, ease: "power3.out" }, "-=0.9")
        .from(".hero-role",    { opacity: 0, y: 10, duration: 0.7, ease: "power3.out" }, "-=0.6")
        .from(".hero-scroll",  { opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.4");

      // Parallax
      gsap.to("#hero-body", {
        y: -70, opacity: 0, ease: "none",
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "55% top",
          scrub: true,
        },
      });
      gsap.to("#pcanvas", {
        opacity: 0, ease: "none",
        scrollTrigger: {
          trigger: "#hero",
          start: "15% top",
          end: "60% top",
          scrub: true,
        },
      });

      // Scroll reveals for other sections
      document.querySelectorAll(".gsap-reveal").forEach((el) => {
        gsap.from(el, {
          y: 44, opacity: 0, duration: 1.1, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 87%", toggleActions: "play none none none" },
        });
      });

      gsap.from(".gsap-exp", {
        x: -32, opacity: 0, duration: 0.85, stagger: 0.16, ease: "power3.out",
        scrollTrigger: { trigger: ".exp-list", start: "top 82%", toggleActions: "play none none none" },
      });
    })();
  }, [loaderDone]);

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("work");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="hero">
      <canvas ref={canvasRef} id="pcanvas" />
      <div className="hero-body" id="hero-body" ref={heroBodyRef}>
        <div className="hero-eyebrow">
          <div className="hero-eyebrow-bar" />
          <span className="hero-eyebrow-text">Full Stack Developer — Morocco</span>
        </div>
        <h1 className="hero-name">
          <span className="ln"><span className="lni">Ahmed</span></span>
          <span className="ln"><span className="lni">Amine</span></span>
          <span className="ln"><span className="lni">Nammat</span></span>
        </h1>
        <p className="hero-role">Building thoughtful digital experiences</p>
      </div>
      <div className="hero-scroll" aria-hidden="true">
        <span className="scroll-word">Scroll</span>
        <div className="scroll-track" />
      </div>
    </section>
  );
};

export default Hero;
