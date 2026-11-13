import { Section } from "./Section";
import {
  Code2, Database, Palette, Cloud, GitBranch, Wrench, Brain, Users,
} from "lucide-react";

const groups = [
  {
    title: "Languages",
    icon: Code2,
    items: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript"],
  },
  {
    title: "Frontend",
    icon: Palette,
    items: ["HTML5", "CSS3", "React.js", "Vite", "Tailwind CSS", "Bootstrap", "Material Design", "React Hooks", "Responsive Design"],
  },
  {
    title: "Backend & Data Engineering",
    icon: Database,
    items: ["ETL pipelines", "JSON schemas", "MySQL", "Pandas", "Scikit-learn"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    items: ["AWS (EC2, RDS, S3)", "Vercel", "Netlify"],
  },
  {
    title: "Version Control",
    icon: GitBranch,
    items: ["Git", "GitHub"],
  },
  {
    title: "Tools",
    icon: Wrench,
    items: ["VS Code", "Figma", "Canva", "AutoCAD"],
  },
  {
    title: "Coursework",
    icon: Brain,
    items: ["Data Structures & Algorithms", "OOP's", "AI / ML", "DBMS"],
  },
  {
    title: "Soft Skills",
    icon: Users,
    items: ["Public Speaking", "Teamwork", "Leadership", "Volunteering", "Event Management"],
  },
];

export function Skills() {
  return (
    <Section id="skills"  title="Skills & Tools">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {groups.map(({ title, icon: Icon, items }) => (
          <div
            key={title}
            className="bg-card border border-border rounded-2xl p-6 hover:border-accent/60 transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </span>
              <h3 className="font-display text-xl">{title}</h3>
            </div>
            <ul className="flex flex-wrap gap-2">
              {items.map((s) => (
                <li
                  key={s}
                  className="text-sm px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
