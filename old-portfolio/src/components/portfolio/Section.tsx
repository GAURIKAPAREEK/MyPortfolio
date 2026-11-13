import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="section-pad">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            {eyebrow ? (
              <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3">
                {eyebrow}
              </p>
            ) : null}
            <h2 className="font-display text-4xl md:text-5xl text-balance">
              {title}
            </h2>
          </div>
          <div className="hidden md:block flex-1 hairline mb-3" />
        </div>
        {children}
      </div>
    </section>
  );
}
