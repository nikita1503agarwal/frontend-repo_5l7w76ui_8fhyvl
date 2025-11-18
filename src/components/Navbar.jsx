import { useState } from 'react';

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-md">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="text-white text-lg font-semibold tracking-tight">
              <span className="sr-only">Portfolio</span>
              <span className="inline-flex items-center gap-2">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-blue-400 animate-pulse"></span>
                <span>My Portfolio</span>
              </span>
            </a>

            <button
              aria-label="Toggle Menu"
              className="sm:hidden inline-flex items-center justify-center rounded-md p-2 text-blue-200 hover:text-white hover:bg-white/10 transition-colors duration-200"
              onClick={() => setOpen((o) => !o)}
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {open ? (
                  <path d="M18 6 6 18M6 6l12 12" />
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>

            <ul className="hidden sm:flex items-center gap-6">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="group relative text-sm text-blue-100 hover:text-white transition-colors duration-200"
                  >
                    <span className="relative inline-block py-2 px-1">
                      {l.label}
                      <span className="absolute left-1/2 -bottom-0.5 h-0.5 w-0 -translate-x-1/2 rounded-full bg-blue-400 transition-all duration-300 group-hover:w-full" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {open && (
            <ul className="sm:hidden px-4 pb-4 flex flex-col gap-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 text-blue-100 hover:text-white hover:bg-white/10 transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
