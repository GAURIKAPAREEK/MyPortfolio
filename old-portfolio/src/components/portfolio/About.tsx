import { Section } from "./Section";

export function About() {
  return (
    <Section id="about"  title="Objective">
      <div className="space-y-5 text-lg leading-relaxed text-foreground/85 max-w-4xl">
        <p>
          I am <span className="font-medium text-foreground">Gaurika Pareek</span>,
          a final&#8209;year B.Tech Computer Science student at Poornima Institute of
          Engineering &amp; Technology (PIET), Jaipur. I am passionate about web
          development and programming, working primarily with{" "}
          <span>
            C++, Java, Python and modern JavaScript frameworks
          </span>
          .
        </p>
        <p>
          As I was an active member of the <span className="font-medium">Student Council</span>{" "}
          and college community, I gained leadership, organisational and
          event&#8209;management skills — balancing technical growth with community
          building.
        </p>
        <p>
 
          I had contributed to many projects,
          participated in various hackathons and  Kaggle ML competition which has sharpened my
          problem&#8209;solving and full&#8209;stack engineering skills. I&apos;m
          eager to connect with professionals, learn from industry experts and
          contribute to impactful products.
        </p>
      </div>

      <dl className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          ["Status", "Open to full-time SDE / Frontend roles"],
          ["Education", "B.Tech CSE · PIET Jaipur · CGPA 9.42"],
          ["Focus", "AI / ML · Full-Stack · DSA · OOP's"],
          ["Location", " India · Open to remote"],
        ].map(([k, v]) => (
          <div
            key={k}
            className="border border-border rounded-2xl p-5 bg-card hover:border-accent/60 transition-colors"
          >
            <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {k}
            </dt>
            <dd className="mt-2 font-medium text-foreground">{v}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
