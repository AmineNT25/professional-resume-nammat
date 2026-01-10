"use client";
import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

const InteractiveBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let particles: Particle[] = [];
        let animationFrameId: number;
        let mouse = { x: -1000, y: -1000 };

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        class Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            baseX: number;
            baseY: number;
            density: number;

            constructor() {
                this.x = Math.random() * canvas!.width;
                this.y = Math.random() * canvas!.height;
                this.size = Math.random() * 2 + 1; // Size between 1 and 3
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * -0.5 - 0.2; // Always move up (Anti-gravity)
                this.baseX = this.x;
                this.baseY = this.y;
                this.density = (Math.random() * 30) + 1;
            }

            update() {
                // Antigravity (Upward Float)
                this.y += this.speedY;
                this.x += this.speedX;

                // Reset if off screen
                if (this.y < 0) {
                    this.y = canvas!.height;
                    this.x = Math.random() * canvas!.width;
                }

                // Mouse Interaction (Repulsion)
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const forceDirectionX = dx / distance;
                const forceDirectionY = dy / distance;
                const maxDistance = 150;
                const force = (maxDistance - distance) / maxDistance;
                const directionX = forceDirectionX * force * this.density;
                const directionY = forceDirectionY * force * this.density;

                if (distance < maxDistance) {
                    this.x -= directionX * 3; // Push away
                    this.y -= directionY * 3;
                }
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = resolvedTheme === "dark"
                    ? "rgba(100, 255, 218, 0.2)" // Cyan low opacity
                    : "rgba(13, 148, 136, 0.15)"; // Teal low opacity
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            }
        }

        const initParticles = () => {
            particles = [];
            const numberOfParticles = (canvas.width * canvas.height) / 15000; // Density
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw Particles
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();

                // Connect Particles (Constellation Effect) - Optional, kept subtle
                for (let j = i; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.strokeStyle = resolvedTheme === "dark"
                            ? `rgba(100, 255, 218, ${0.1 - distance / 1000})`
                            : `rgba(13, 148, 136, ${0.1 - distance / 1000})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                        ctx.closePath();
                    }
                }
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);

        handleResize();
        animate();

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [resolvedTheme]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10"
        />
    );
};

export default InteractiveBackground;
