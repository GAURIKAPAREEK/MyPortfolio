import { motion } from 'motion/react';
import { ArrowUpRight, Github } from 'lucide-react';
import { Section } from '@/components/Section';
import { projects, sectionMeta } from '@/data/site';

export function Projects() {
  const { icon, eyebrow, title } = sectionMeta.projects;

  return (
    <Section id="projects" eyebrow={eyebrow} title={title} icon={icon}>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: (i % 2) * 0.1, duration: 0.6 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-ash-800 bg-ash-950/30 p-8 transition-all duration-500 hover:border-ash-600 hover:bg-ash-900/40 md:p-10"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white/[0.02] blur-3xl transition-opacity duration-500 group-hover:bg-white/[0.05]" />

            <div className="relative">
              <div className="mb-6 flex items-start justify-between">
                <span className="font-mono text-xs text-ash-400">
                  {project.period}
                </span>

                <div className="flex items-center gap-2">
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-ash-800 text-ash-400 transition-all hover:border-white hover:bg-white hover:text-black active:scale-95"
                      aria-label={`GitHub Repository for ${project.title}`}
                      title="GitHub Repository"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}

                  {project.href && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-ash-800 text-ash-400 transition-all hover:border-white hover:bg-white hover:text-black active:scale-95"
                      aria-label={`Live Demo of ${project.title}`}
                      title="Live Demo"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>

              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-ash-500">
                {project.tagline}
              </p>
              <h3 className="display text-2xl text-white md:text-3xl">{project.title}</h3>
              <p className="mt-4 text-pretty leading-relaxed text-ash-400">
                {project.description}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-ash-800 px-3 py-1 font-mono text-xs text-ash-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
