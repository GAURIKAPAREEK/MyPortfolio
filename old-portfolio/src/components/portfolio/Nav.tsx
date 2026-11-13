import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-background/85 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <ul className="hidden md:flex items-center gap-6 text-sm text-muted-foreground w-full justify-center">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-accent transition-colors whitespace-nowrap">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="md:hidden flex items-center justify-end w-full">
          <button
            onClick={() => setOpen(!open)}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden backdrop-blur-md bg-background/95 border-b border-border px-6 py-4">
          <ul className="flex flex-col gap-4 text-sm text-muted-foreground">
            {links.map((l) => (
              <li key={l.href}>
                
                 <a href={l.href}
                  className="hover:text-accent transition-colors block py-1"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}