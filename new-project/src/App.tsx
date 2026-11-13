import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Skills } from '@/sections/Skills';
import { Experience } from '@/sections/Experience';
import { Projects } from '@/sections/Projects';
import { Achievements } from '@/sections/Achievements';
import { Contact } from '@/sections/Contact';

export default function App() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const p = max > 0 ? h.scrollTop / max : 0;
      gsap.to(bar, { scaleX: p, duration: 0.1, overwrite: true });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="relative min-h-screen text-white">
      {/* Global Live Background behind all sections down to footer */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <video
          className="h-full w-full object-cover hidden md:block motion-reduce:hidden"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/video/poster.jpg"
        >
          <source src="/video/background.mp4" type="video/mp4" />
        </video>
        <img
          src="/video/poster.jpg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover block md:hidden motion-reduce:block"
        />
        {/* Dark overlay for readability across the entire site */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-transparent to-black/85" />
      </div>

      <div className="grain" />
      <div
        ref={barRef}
        className="fixed left-0 top-0 z-[60] h-[2px] w-full origin-left bg-white"
        style={{ transform: 'scaleX(0)' }}
      />

      <div className="relative z-10 flex min-h-screen flex-col">
        <Header />

        <main className="flex-1">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Achievements />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}
