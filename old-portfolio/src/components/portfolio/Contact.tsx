import { Mail, Phone, MapPin, Github, Linkedin, Code2 } from "lucide-react";

const channels = [
  { icon: Mail, label: "Email", value: "gaurikapareek12@gmail.com", href: "mailto:gaurikapareek12@gmail.com" },
  { icon: MapPin, label: "Location", value: "Jaipur, Rajasthan, India", href: "#" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/gaurika-pareek", href: "https://www.linkedin.com/in/gaurika-pareek/" },
  { icon: Github, label: "GitHub", value: "github.com/GAURIKAPAREEK", href: "https://github.com/GAURIKAPAREEK" },
  { icon: Code2, label: "LeetCode", value: "leetcode.com/gaurikapareek12", href: "https://leetcode.com/u/gaurikaapareek_/" },
];

export function Contact() {
  return (
    <section id="contact" className="section-pad bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display text-5xl md:text-7xl text-balance max-w-3xl">
          Let&apos;s build something <span className="italic text-accent">together</span>
        </h2>
        <p className="mt-6 text-white/70 text-lg max-w-xl">
  Open to new opportunities — "let's connect!"
</p>
<p className="mt-2 text-white/70 text-lg max-w-xl">
  Reach out on any channel below.
</p>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {channels.map((c) => {
            const Icon = c.icon;
            const isExternal = c.href.startsWith("http");
            return (
              <a
                key={c.label}
                href={c.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 border border-white/15 rounded-2xl p-5 hover:bg-white hover:text-black transition-colors"
              >
                <span className="w-11 h-11 rounded-xl bg-white/10 group-hover:bg-black/10 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-widest text-white/55 group-hover:text-black/55">
                    {c.label}
                  </p>
                  <p className="truncate font-medium">{c.value}</p>
                </div>
              </a>
            );
          })}
        </div>

        <footer className="mt-20 pt-8 border-t border-white/15 text-sm text-white/60">
          <span>© {new Date().getFullYear()} Gaurika Pareek. All rights reserved.</span>
        </footer>
      </div>
    </section>
  );
}
