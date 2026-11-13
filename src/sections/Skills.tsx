import { motion } from 'motion/react';
import { Section } from '@/components/Section';
import { skillGroups, sectionMeta } from '@/data/site';

export function Skills() {
  const { icon, eyebrow, title } = sectionMeta.skills;

  return (
    <Section id="skills" eyebrow={eyebrow} title={title} icon={icon}>
      <div className="grid gap-px overflow-hidden rounded-2xl border border-ash-800 bg-ash-800/60 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="group bg-black/60 backdrop-blur-sm p-6 transition-colors hover:bg-ash-950/70 md:p-8"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-ash-800 text-white transition-colors group-hover:border-white group-hover:bg-white group-hover:text-black">
                <group.icon className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                {group.label}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-ash-800/80 bg-black/40 px-3 py-1 font-mono text-xs text-ash-300 transition-colors group-hover:border-ash-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
