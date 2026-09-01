import { useEffect, useState } from 'react';
import { camp } from '../data/camp';

const links = [
  { href: '#about', label: 'About' },
  { href: '#details', label: 'Details' },
  { href: '#register', label: 'Register' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`on-deep sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-white/10 bg-steel-950/90 backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5"
      >
        <a href="#top" className="flex items-center gap-3 rounded-lg">
          <img src="/media/pic.png" alt="" className="h-10 w-auto" />
          <span className="font-display text-lg font-bold tracking-wide text-white">
            {camp.name}
          </span>
        </a>

        <div className="hidden items-center gap-1 sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-steel-100 transition hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#register"
            className="ml-2 rounded-full bg-sun-400 px-5 py-2 text-sm font-bold text-steel-950 shadow-lg shadow-sun-500/20 transition hover:bg-sun-300"
          >
            Sign up
          </a>
        </div>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="rounded-lg p-2 text-steel-100 transition hover:bg-white/10 sm:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d={menuOpen ? 'M6 6l12 12M18 6L6 18' : 'M4 7h16M4 12h16M4 17h16'}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div id="mobile-nav" className="border-t border-white/10 bg-steel-950/95 sm:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-5 py-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-steel-100 transition hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
