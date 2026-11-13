import { motion } from 'motion/react';
import {
  ArrowDownRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Code2,
  MapPin,
} from 'lucide-react';
import { profile, heroStats } from '@/data/site';

export function Hero() {
  return (
    <section id="home" className="relative w-full pt-20 pb-12 sm:pt-24 sm:pb-16 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/45 backdrop-blur-xl shadow-2xl p-6 sm:p-10 lg:p-12"
        >
          {/* Main Content: 2 Columns (Text Left, Photo Right) */}
          <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-12 items-center">
            {/* Left Column: Bio & Actions */}
            <div className="flex flex-col">
              {/* Mobile Photo: Centered above name with B&W + Stickers */}
              <div className="flex lg:hidden justify-center mb-8 pt-2">
                <div className="relative w-48">
                  <div className="relative rounded-2xl border border-white/20 bg-[#161616] p-3 shadow-2xl transform -rotate-2">
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-gradient-to-b from-neutral-800 to-neutral-950 flex items-end justify-center">
                      <picture className="h-full w-full flex items-end justify-center">
                        <source srcSet="/images/profile_bw.webp" type="image/webp" />
                        <img
                          src="/images/profile_bw.webp"
                          alt="Gaurika Pareek, B.Tech CSE student"
                          className="h-full w-full object-cover object-[center_60%] scale-110"
                          loading="eager"
                          fetchPriority="high"
                        />
                      </picture>
                    </div>

                    {/* Stickers (Mobile) */}
                    <div className="pointer-events-none absolute -top-2.5 -left-2 rounded bg-white px-2.5 py-0.5 font-mono text-[9px] font-extrabold uppercase tracking-wide text-black shadow-md -rotate-6">
                      BUILD
                    </div>
                    <div className="pointer-events-none absolute -top-2.5 -right-2 rounded bg-teal-400 px-2.5 py-0.5 font-mono text-[9px] font-extrabold uppercase tracking-wide text-black shadow-md rotate-6">
                      AI / ML
                    </div>
                    <div className="pointer-events-none absolute top-1/2 -left-3 -translate-y-1/2 rounded bg-white px-2 py-0.5 font-mono text-[8.5px] font-extrabold uppercase text-black shadow-md -rotate-3">
                      CODE
                    </div>
                    <div className="pointer-events-none absolute -bottom-3 -right-2 rounded-lg bg-white px-3 py-1 text-black shadow-lg rotate-1 border border-black/10">
                      <p className="font-sans text-[11px] font-bold leading-tight">Gaurika Pareek</p>
                      <p className="font-mono text-[8px] uppercase tracking-wider text-neutral-600">SOFTWARE &amp; DATA</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Name */}
              <h1 className="display text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white">
                {profile.name}
              </h1>

              {/* Location directly under name with symbol */}
              <div className="mt-3 flex items-center gap-1.5 font-mono text-xs sm:text-sm text-white/60">
                <MapPin className="h-3.5 w-3.5 text-white/50" />
                <span>Jaipur, India</span>
              </div>

              {/* Intro paragraph */}
              <p className="mt-4 max-w-xl text-pretty text-sm sm:text-base leading-relaxed text-white/70">
                {profile.intro}
              </p>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-black transition-all duration-300 hover:bg-ash-200 active:scale-95 font-semibold cursor-pointer shadow-lg"
                >
                  <span>Explore Projects</span>
                  <ArrowDownRight className="h-3.5 w-3.5" />
                </a>

                <a
                  href={profile.resumeUrl}
                  download="Gaurika_Pareek_Resume.pdf"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.08] px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-white backdrop-blur transition-all duration-300 hover:border-white hover:bg-white hover:text-black active:scale-95 cursor-pointer"
                  aria-label="Download Resume"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Resume (PDF)</span>
                </a>

                {/* Social Icon Pills */}
                <div className="flex items-center gap-1.5 ml-1">
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition-all hover:border-white hover:bg-white hover:text-black"
                    aria-label="GitHub Profile"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition-all hover:border-white hover:bg-white hover:text-black"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href={profile.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition-all hover:border-white hover:bg-white hover:text-black"
                    aria-label="LeetCode Profile"
                  >
                    <Code2 className="h-4 w-4" />
                  </a>
                  <a
                    href={`mailto:${profile.email}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition-all hover:border-white hover:bg-white hover:text-black"
                    aria-label="Send Email"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Open to roles line under Explore Projects (All-caps, no emoji) */}
              <div className="mt-4 font-mono text-[11px] sm:text-xs tracking-wider uppercase text-white/60">
                OPEN TO FULL-TIME ROLES IN INDIA AND REMOTE
              </div>
            </div>

            {/* Right Column: Tilted B&W Studio Photo with Tech Stickers (Mahak Kankaria Inspired) */}
            <div className="hidden lg:flex items-center justify-center py-4">
              <div className="relative w-full max-w-[340px]">
                {/* Glow behind */}
                <div className="absolute -inset-4 rounded-3xl bg-teal-500/10 blur-2xl pointer-events-none" />

                {/* Tilted frame with smooth hover transition */}
                <div className="relative rounded-2xl border border-white/15 bg-[#141414] p-3.5 shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                  {/* Studio Photo Container - Sharp Studio B&W */}
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-gradient-to-b from-neutral-800 to-neutral-950 flex items-end justify-center">
                    <picture className="h-full w-full flex items-end justify-center">
                      <source srcSet="/images/profile_bw.webp" type="image/webp" />
                      <img
                        src="/images/profile_bw.webp"
                        alt="Gaurika Pareek, B.Tech CSE student"
                        width={340}
                        height={425}
                        loading="eager"
                        fetchPriority="high"
                        className="h-full w-full object-cover object-[center_60%] scale-110"
                      />
                    </picture>
                  </div>

                  {/* Tech Stack Stickers (Overlapping borders like reference) */}
                  {/* Top-Left: BUILD */}
                  <div className="pointer-events-none absolute -top-3.5 -left-3 rounded-md bg-white px-3.5 py-1 font-mono text-[10px] font-extrabold uppercase tracking-wider text-black shadow-xl transform -rotate-6">
                    BUILD
                  </div>

                  {/* Top-Right: AI / ML */}
                  <div className="pointer-events-none absolute -top-3.5 -right-3 rounded-md bg-teal-400 px-3.5 py-1 font-mono text-[10px] font-extrabold uppercase tracking-wider text-black shadow-xl transform rotate-6">
                    AI / ML
                  </div>

                  {/* Center-Left: CODE */}
                  <div className="pointer-events-none absolute top-1/2 -left-4 -translate-y-1/2 rounded-md bg-white px-3 py-1 font-mono text-[10px] font-extrabold uppercase tracking-wider text-black shadow-xl transform -rotate-3">
                    CODE
                  </div>

                  {/* Center-Right: DATA */}
                  <div className="pointer-events-none absolute top-1/2 -right-4 -translate-y-1/2 rounded-md bg-[#881337] border border-rose-400/30 px-3 py-1 font-mono text-[10px] font-extrabold uppercase tracking-wider text-white shadow-xl transform rotate-3">
                    DATA
                  </div>

                  {/* Profile sticker on bottom-right (like Mahak Kankaria badge) */}
                  <div className="pointer-events-none absolute -bottom-4 -right-2 sm:-right-4 rounded-lg bg-white px-3.5 py-2 text-black shadow-2xl transform rotate-1 border border-black/10">
                    <p className="font-sans text-xs font-bold leading-tight text-black">Gaurika Pareek</p>
                    <p className="font-mono text-[9px] uppercase tracking-wider text-neutral-600 font-semibold">SOFTWARE &amp; DATA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Row: Full-width spanning bottom of the card */}
          <div className="mt-8 sm:mt-10 border-t border-white/10 pt-5 sm:pt-6">
            <div className="flex flex-wrap items-center justify-between sm:justify-start gap-8 sm:gap-14">
              {heroStats.map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="display text-2xl text-white sm:text-3xl">{s.value}</span>
                  <span className="mt-0.5 font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-white/50">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
