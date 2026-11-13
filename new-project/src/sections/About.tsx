import { motion } from 'motion/react';
import { Section } from '@/components/Section';
import { aboutParagraphs, sectionMeta, profile } from '@/data/site';

export function About() {
  const { icon, eyebrow, title } = sectionMeta.about;

  return (
    <Section id="about" eyebrow={eyebrow} title={title} icon={icon}>
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-7">
          <div className="space-y-6">
            {aboutParagraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className={`text-pretty text-lg leading-relaxed text-ash-300 md:text-xl ${
                  i === 0 ? 'text-white' : ''
                }`}
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>

        <div className="md:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="space-y-px overflow-hidden rounded-2xl border border-ash-800"
          >
            {[
              { k: 'Name', v: profile.name },
              { k: 'Degree', v: 'B.Tech CSE (2023–2027)' },
              { k: 'College', v: 'PIET, Jaipur' },
              { k: 'CGPA', v: '9.4 / 10 (till 6th sem)' },
              { k: 'Status', v: 'Open to Full-Time & Remote Roles' },
              { k: 'Location', v: profile.location },
              { k: 'Focus', v: 'DSA · Web · AI/ML · Data Eng · SDE' },
            ].map((row) => (
              <div
                key={row.k}
                className="flex items-center justify-between bg-ash-950/40 px-5 py-4 transition-colors hover:bg-ash-900/60"
              >
                <span className="font-mono text-[11px] uppercase tracking-widest text-ash-500">
                  {row.k}
                </span>
                <span className="text-sm font-medium text-white text-right">{row.v}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
