import { Section } from "./Section";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Inventory Billing System",
    desc: "Designed JSON schemas, CRUD operations and an ETL pipeline for inventory transformation. Built a scalable React architecture with real-time stock synchronisation and Vercel deployment.",
    stack: ["Vite", "React", "TypeScript", "Tailwind CSS", "JSON"],
    repo: "https://github.com/GAURIKAPAREEK/Billing-System",
    period: "Jun 2025",
  },
  {
    title: "InsightX — ML Regression Model",
    desc: "Engineered an end-to-end machine learning pipeline from data ingestion to evaluation. Ranked 4th in the InsightX Kaggle competition.",
    stack: ["Python", "Pandas", "Scikit-learn", "Kaggle"],
    repo: "",
    period: "Jan 2026",
  },
  {
    title: "Faculty Leave Management System",
    desc: "Implemented client-side persistence and multi-entity rendering for faculty, schedule and attendance records.",
    stack: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/GAURIKAPAREEK/Faculty-Leave-Management-System",
    period: "Sep 2024",
  },
];

export function Projects() {
  return (
    <Section id="projects"  title="Projects">
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group relative bg-card border border-border rounded-2xl p-7 shadow-soft hover:shadow-elevated hover:border-accent/60 transition-all duration-300 hover:-translate-y-1 flex flex-col"
          >
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="font-display text-2xl">{p.title}</h3>
              <span className="text-xs uppercase tracking-widest text-muted-foreground shrink-0">
                {p.period}
              </span>
            </div>
            <p className="mt-3 text-foreground/75 leading-relaxed">{p.desc}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="text-xs px-2.5 py-1 border border-border rounded-full text-muted-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
            {p.repo && (
              <div className="mt-6 flex items-center gap-4 text-sm">
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
                >
                  <Github className="w-4 h-4" /> Repository
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
