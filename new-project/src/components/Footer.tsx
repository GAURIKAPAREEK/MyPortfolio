import { profile, nav } from '@/data/site';

export function Footer() {
  const go = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-ash-800 px-6 py-12 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <button onClick={() => go('#home')} className="text-left cursor-pointer">
              <span className="text-base font-semibold text-white">{profile.name}</span>
            </button>
            <p className="mt-3 text-pretty text-sm leading-relaxed text-ash-400">
              {profile.title} · {profile.status}
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-10 gap-y-2.5 sm:grid-cols-3">
            {nav.map((link) => (
              <button
                key={link.href}
                onClick={() => go(link.href)}
                className="text-left text-sm text-ash-400 transition-colors hover:text-white cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-ash-800/80 pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-xs text-ash-500">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs text-ash-500">
            Designed &amp; Developed by Gaurika Pareek
          </p>
        </div>
      </div>
    </footer>
  );
}
