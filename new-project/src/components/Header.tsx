import { useEffect, useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { nav, profile } from '@/data/site';
import { useActiveSection } from '@/hooks/useSection';

const ids = nav.map((n) => n.href.replace('#', ''));

export function Header() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(ids);

  const go = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 pointer-events-none">
        <div className="pointer-events-auto flex items-center justify-between gap-1.5 sm:gap-2.5 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:border-white/20 hover:bg-black/75">
          
          {/* Desktop Nav Items */}
          <nav className="hidden items-center gap-1 sm:flex">
            {nav.map((link) => {
              const isActive = active === link.href.replace('#', '');
              return (
                <button
                  key={link.href}
                  onClick={() => go(link.href)}
                  className={`relative rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
                    isActive ? 'text-black font-semibold' : 'text-ash-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-white"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              );
            })}
          </nav>

          <span className="hidden sm:block h-4 w-px bg-white/15" aria-hidden="true" />

          {/* Resume Download Pill */}
          <a
            href={profile.resumeUrl}
            download="Gaurika_Pareek_Resume.pdf"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 font-mono text-xs font-medium text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black active:scale-95"
            aria-label="Download Resume"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white sm:hidden cursor-pointer"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl sm:hidden flex flex-col justify-center items-center"
          >
            <nav className="flex flex-col items-center justify-center gap-2">
              {nav.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * i }}
                  onClick={() => go(link.href)}
                  className="display py-2 text-2xl text-white cursor-pointer hover:text-ash-400 transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}

              <motion.a
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.04 * nav.length }}
                href={profile.resumeUrl}
                download="Gaurika_Pareek_Resume.pdf"
                onClick={() => setOpen(false)}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-white backdrop-blur transition-all active:scale-95"
              >
                <Download className="h-4 w-4" />
                <span>Download Resume</span>
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
