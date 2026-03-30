"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Header from "./components/Header";
import SmokeParticles from "./components/SmokeParticles";
import Hero from "./components/Hero";
import Story from "./components/Story";
import MenuHighlight from "./components/MenuHighlight";
import Access from "./components/Access";
import Footer from "./components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  const observerCallback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    []
  );

  useEffect(() => {
    if (loading) return;
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    });
    const reveals = mainRef.current?.querySelectorAll(".reveal");
    reveals?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [loading, observerCallback]);

  return (
    <>
      <LoadingScreen visible={loading} />
      <div
        ref={mainRef}
        style={{
          opacity: loading ? 0 : 1,
          transition: "opacity 0.5s ease 0.3s",
        }}
      >
        <Header />
        <SmokeParticles />
        <Hero />
        <Story />
        <MenuHighlight />
        <Access />
        <Footer />
      </div>
    </>
  );
}
