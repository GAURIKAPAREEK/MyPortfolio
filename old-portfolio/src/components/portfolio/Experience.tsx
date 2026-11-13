import { Section } from "./Section";
import { Briefcase } from "lucide-react";

const items = [
  {
    role: "Software Developer Intern",
    org: "Vaibhav Global Limited",
    period: "June 2025 — July 2025",
    location: "Jaipur,Rajasthan",
    points: [
      "Designed and implemented RESTful APIs with JSON-based schemas and CRUD operations for inventory systems.",
      "Built an ETL pipeline processing 10k+ records, reducing billing errors by 95% and improving data accuracy.",
      "Engineered scalable data flow with real-time stock synchronisation.",
      "Followed SDLC practices and participated in code reviews and debugging for backend modules.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    org: "QDOM Technologies",
    period: "June 2024",
    location: "Jaipur,Rajasthan",
    points: [
      "Developed a responsive electric-car e-commerce website using HTML, CSS and JavaScript.",
      "Built reusable, responsive UI components with React, improving maintainability and cross-browser compatibility.",
      "Optimised UI layouts and styling, improving page performance by 25% and enhancing user experience.",
    ],
  },
  {
    role: "Data Engineer Intern",
    org: "Celebal Technologies",
    period: "June 2026 — Present",
    location: "Remote",
    points: [
      "Working on Python & Data Processing concepts such as CSV files, filtering, grouping and data transformations.",
      "Building SQL & Data Analysis concepts including joins, aggregations, subqueries, CTEs and window functions.",
      "Collaborating with developers to design algorithms and system flowcharts for enterprise modules.",
      "Learning Data Engineering fundamentals such as data cleaning, missing value handling, data exploration, Apache Spark basics and data pipeline planning.",
    ],
  },
];

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="relative border-l border-border ml-3">
        {items.map((it, i) => (
          <li key={i} className="pl-8 pb-12 last:pb-0 relative">
            <span className="absolute -left-[13px] top-1 w-6 h-6 rounded-full bg-background border border-accent flex items-center justify-center">
              <Briefcase className="w-3 h-3 text-accent" />
            </span>

            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-2xl">{it.role}</h3>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                {it.period}
              </span>
            </div>

            <div className="mt-1">
              <p className="text-accent font-medium">{it.org}</p>
              <p className="text-sm text-muted-foreground">{it.location}</p>
            </div>

            <ul className="mt-3 space-y-2 text-foreground/80 leading-relaxed max-w-3xl list-disc pl-5">
              {it.points.map((p, j) => (
                <li key={j}>{p}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
