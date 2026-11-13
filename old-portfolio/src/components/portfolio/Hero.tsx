import profileImg from "@/assets/Screenshot 2026-05-12 194107.png";
import { ArrowDownRight, Download, MapPin } from "lucide-react";

const marquee = [
  "C", "C++", "Java", "Python", "JavaScript", "TypeScript",
  "HTML5", "CSS3", "React.js", "Vite", "Tailwind CSS", "Bootstrap", "Material Design", "React Hooks",
  "ETL Pipelines", "JSON Schemas", "SQL", "PostgreSQL", "MySQL", "Pandas", "Scikit-learn",
  "DSA", "OOP", "AI / ML", "DBMS",
  "AWS (EC2, RDS, S3)", "Git", "GitHub", "Vercel", "Netlify",
  "VS Code", "Figma", "Canva",
  "Public Speaking", "Teamwork", "Leadership", "Volunteering",
];

export function Hero() {
  return (
    <section id="top" className="relative pt-28 md:pt-36 pb-20 overflow-hidden">
      {/* Ambient orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -right-24 w-[36rem] h-[36rem] rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute top-40 -left-32 w-[30rem] h-[30rem] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-warm opacity-70" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-[1.3fr_1fr] gap-12 items-center">
        <div>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.02] text-balance tracking-tight">
            GAURIKA <br />
            <span className="text-accent italic">PAREEK</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl text-balance">
            Hi, I&apos;m <span className="text-foreground font-medium">Gaurika Pareek</span> —
            B.Tech CSE &rsquo;27. Passionate about{" "}
            <span className="text-foreground font-medium">C++, DSA, Java, Python &amp; Machine Learning</span>{" "}
            — exploring web development and building real&#8209;world projects.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition shadow-elevated"
            >
              Get in touch <ArrowDownRight className="w-4 h-4" />
            </a>
            <a
              href="public/certificates/GAURIKA_PAREEK_.pdf"
              download="gaurikapareek-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border bg-card/40 backdrop-blur px-6 py-3 rounded-full text-sm font-medium hover:bg-card transition"
            >
              <Download className="w-4 h-4" /> Download Resume
            </a>
          </div>
          <div className="mt-10 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>Based in India · Open to remote roles</span>
          </div>
        </div>

        <div className="relative justify-self-center md:justify-self-end">
          <div className="absolute -inset-4 border border-accent/40 rounded-full" />
          <div className="absolute -inset-10 border border-foreground/10 rounded-full" />
          <div className="absolute -inset-16 border border-foreground/5 rounded-full" />
          <img
            src={profileImg}
            alt="Portrait of Gaurika Pareek"
            className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-elevated"
          />
        </div>
      </div>

      {/* Stats strip */}
      <div className="relative max-w-6xl mx-auto px-6 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/60 border border-border rounded-2xl overflow-hidden backdrop-blur">
          {[
            { k: "200+", v: "LeetCode Solved" },
            { k: "15+", v: "Certifications" },
            { k: "Top 4", v: "Kaggle ML Rank" },
            { k: "9.42", v: "CGPA · B.Tech CSE" },
          ].map((s) => (
            <div key={s.v} className="bg-card/70 px-6 py-6 text-center">
              <div className="font-display text-3xl md:text-4xl text-accent">{s.k}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee */}
      <div className="relative mt-14 border-y border-border/60 bg-card/30 backdrop-blur overflow-hidden">
        <div className="flex gap-12 py-4 animate-[marquee_40s_linear_infinite] whitespace-nowrap">
          {[...marquee, ...marquee].map((m, i) => (
            <span key={i} className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
              {m} <span className="text-accent ml-12">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
