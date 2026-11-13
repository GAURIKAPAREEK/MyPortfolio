import { Section } from "./Section";
import { Trophy, Users, Sparkles, Code2 } from "lucide-react";

const achievements = [
  { icon: Trophy, title: "Google Cloud Career Launchpad", desc: "Completed the Cloud Engineer Track by Google Cloud." },
  { icon: Sparkles, title: "Ranked 4th — InsightX Kaggle Competition", desc: "Built an end-to-end ML regression model from ingestion to evaluation." },
  { icon: Trophy, title: "NPTEL Silver Medallist", desc: "Fundamentals of Object-Oriented Programming (C++, Java, Python)." },
  { icon: Code2, title: "165+ Problems Solved on LeetCode", desc: "Consistent practice across Data Structures and Algorithms." },
  { icon: Trophy, title: "NPTEL Certified", desc: "Data Structures and Algorithms using Java." },
   { icon: Trophy, title: "NPTEL Certified", desc: "The Joy Of Computing using Python" },
   { icon: Trophy, title: "NPTEL Certified", desc: "German." }
  
];

const extra = [
  { icon: Users, title: "Captain — AWS Cloud Club, PIET Jaipur", desc: "Led the club through Academic Year 2024–25, organising workshops and hands-on sessions on AWS." },
  { icon: Users, title: "Content & Hospitality Team — College Cultural Fest", desc: "Volunteered as part of the organising committee for the annual cultural fest, 2024–25." },
];

export function Achievements() {
  return (
    <Section id="achievements"  title="Achievements & Extracurricular">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="font-display text-2xl mb-5 gold-underline inline-block">Achievements</h3>
          <ul className="space-y-4">
            {achievements.map((a, i) => {
              const Icon = a.icon;
              return (
                <li key={i} className="flex gap-4 bg-card border border-border rounded-xl p-5">
                  <Icon className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">{a.title}</p>
                    <p className="text-sm text-muted-foreground mt-1">{a.desc}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h3 className="font-display text-2xl mb-5 gold-underline inline-block">Extracurricular</h3>
          <ul className="space-y-4">
            {extra.map((a, i) => {
              const Icon = a.icon;
              return (
                <li key={i} className="flex gap-4 bg-card border border-border rounded-xl p-5">
                  <Icon className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">{a.title}</p>
                    <p className="text-sm text-muted-foreground mt-1">{a.desc}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Section>
  );
}
