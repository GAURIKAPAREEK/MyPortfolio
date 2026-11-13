import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';
import { Section } from '@/components/Section';
import { experience, sectionMeta } from '@/data/site';
import {
  DataCoreVisual,
  ServerMonolithVisual,
  FrontendPrismVisual,
} from '@/components/Experience3D';

const visuals = [DataCoreVisual, ServerMonolithVisual, FrontendPrismVisual];

export function Experience() {
  const { icon, eyebrow, title } = sectionMeta.experience;

  return (
    <Section id="experience" eyebrow={eyebrow} title={title} icon={icon}>
      <div className="space-y-16 lg:space-y-24">
        {experience.map((item, i) => {
          const Visual = visuals[i] ?? (() => null);
          const isEven = i % 2 === 0;

          return (
            <motion.div
              key={item.role + item.org}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-8 lg:grid-cols-12 lg:gap-12 items-center"
            >
              {/* 3D Animated Floating Visual */}
              <div
                className={`w-full lg:col-span-5 order-2 flex items-center justify-center ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <Visual />
              </div>

              {/* Role Details Glass Card */}
              <div
                className={`w-full lg:col-span-7 order-1 ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <div className="relative rounded-3xl border border-white/10 bg-black/45 p-6 sm:p-8 lg:p-10 backdrop-blur-xl shadow-2xl">
                  {/* Period & Location header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] uppercase tracking-widest text-ash-400 mb-4">
                    <span>{item.period}</span>
                    <span className="flex items-center gap-1 text-white/50">
                      <MapPin className="h-3 w-3" />
                      {item.location}
                    </span>
                  </div>

                  {/* Role Title & Org */}
                  <h3 className="display text-2xl sm:text-3xl lg:text-4xl text-white">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm sm:text-base font-semibold text-teal-300">
                    {item.org}
                  </p>

                  {/* Summary */}
                  <p className="mt-4 text-pretty text-sm sm:text-base leading-relaxed text-white/70">
                    {item.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="mt-5 space-y-2.5">
                    {item.points.map((pt, j) => (
                      <li key={j} className="flex gap-2.5 text-xs sm:text-sm text-ash-300">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-400/80 shadow-[0_0_8px_rgba(45,212,191,0.6)]" />
                        <span className="leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack chips */}
                  <div className="mt-6 flex flex-wrap gap-2 pt-5 border-t border-white/10">
                    {item.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[11px] text-white/80 hover:border-white/25 transition-colors"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
