"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import FadeIn from "./components/FadeIn";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <FadeIn delay={100}><Hero /></FadeIn>
        <FadeIn delay={200}><About /></FadeIn>
        <FadeIn delay={200}><Experience /></FadeIn>
        <FadeIn delay={200}><Projects /></FadeIn>
        <FadeIn delay={200}><Contact /></FadeIn>
      </main>
    </>
  );
}
