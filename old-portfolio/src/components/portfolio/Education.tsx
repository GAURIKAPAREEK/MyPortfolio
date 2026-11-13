import { Section } from "./Section";
import { GraduationCap } from "lucide-react";

const items = [
  {
    icon: GraduationCap,
    degree: "B.Tech in Computer Science",
    school: "Poornima Institute of Engineering and Technology (PIET), Jaipur",
    period: "2023 — 2027",
    detail: "CGPA: 9.42 / 10 (till 5th semester) · Coursework: DSA, OOP, AI/ML, DBMS.",
  },
];

export function Education() {
  return (
    <Section id="education"  title="Education">
      <div className="space-y-5">
        {items.map((it, i) => {
          const Icon = it.icon;
          return (
            <div
              key={i}
              className="bg-card border border-border rounded-2xl p-6 md:p-7 grid md:grid-cols-[auto_1fr_auto] gap-5 items-start hover:shadow-soft hover:border-accent/60 transition-all"
            >
              <span className="w-12 h-12 rounded-xl bg-foreground text-background flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </span>
              <div>
                <h3 className="font-display text-2xl">{it.degree}</h3>
                <p className="text-accent mt-0.5 font-medium">{it.school}</p>
                <p className="mt-2 text-foreground/75">{it.detail}</p>
              </div>
              <span className="text-xs uppercase tracking-widest text-muted-foreground md:text-right">
                {it.period}
              </span>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
