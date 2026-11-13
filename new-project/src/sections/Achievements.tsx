import { motion } from 'motion/react';
import { Download, ArrowUpRight } from 'lucide-react';
import { Section } from '@/components/Section';
import { achievements, sectionMeta } from '@/data/site';

export function Achievements() {
  const { icon, eyebrow, title } = sectionMeta.achievements;

  return (
    <Section id="achievements" eyebrow={eyebrow} title={title} icon={icon}>
      <div className="divide-y divide-ash-800 border-y border-ash-800">
        {achievements.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="group grid gap-4 py-7 transition-colors hover:bg-ash-950/30 md:grid-cols-12 md:gap-8 md:py-8"
          >
            <div className="font-mono text-sm text-ash-500 md:col-span-2">{item.year}</div>

            <div className="md:col-span-6">
              <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-pretty text-ash-400">{item.description}</p>
            </div>

            <div className="flex flex-col justify-between gap-3 md:col-span-4 md:items-end md:text-right">
              <span className="text-sm text-ash-300">{item.issuer}</span>

              {item.downloads && item.downloads.length > 0 && (
                <div className="flex flex-wrap items-center gap-2">
                  {item.downloads.map((d, dIdx) => (
                    <a
                      key={dIdx}
                      href={d.href}
                      download={d.filename || true}
                      className="inline-flex items-center gap-1.5 rounded-full border border-ash-700 bg-ash-900/60 px-3.5 py-1.5 font-mono text-xs text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black active:scale-95"
                      aria-label={`Download ${d.label}`}
                    >
                      <Download className="h-3.5 w-3.5" />
                      <span>{d.label}</span>
                    </a>
                  ))}
                </div>
              )}

              {item.href && !item.downloads && (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-ash-800 px-3.5 py-1.5 font-mono text-xs text-ash-300 transition-colors hover:border-white hover:text-white"
                >
                  <span>View LeetCode Profile</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 text-center sm:text-left">
        <a
          href="/certificates/all-certificates.zip"
          download="all-certificates.zip"
          className="font-mono text-xs text-ash-500 underline underline-offset-4 transition-colors hover:text-white"
        >
          Download all certificates (ZIP)
        </a>
      </div>
    </Section>
  );
}
