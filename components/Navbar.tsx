'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/services', label: 'Services' },
  { href: '/realisations', label: 'Réalisations' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Ferme le menu mobile automatiquement si on change de page
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 w-full z-50" style={{ background: 'var(--bordeaux)' }}>
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* LOGO */}
        <Link
          href="/"
          className="font-display text-lg font-bold tracking-[0.15em] uppercase relative z-50 text-white"
        >
          M. Kodja
        </Link>

        {/* NAV DESKTOP */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className="group relative text-[11px] uppercase tracking-[0.2em] font-medium transition-colors duration-300"
                style={{ color: active ? 'var(--gold)' : 'rgba(255,255,255,0.85)' }}
              >
                {l.label}
                <span
                  className="absolute -bottom-2 left-0 h-[1px] transition-all duration-300"
                  style={{
                    background: 'var(--gold)',
                    width: active ? '100%' : '0%',
                  }}
                />
                {!active && (
                  <span
                    className="absolute -bottom-2 left-0 h-[1px] w-0 transition-all duration-300 group-hover:w-full"
                    style={{ background: 'var(--gold)' }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA DESKTOP */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center text-[11px] uppercase tracking-[0.2em] font-semibold px-5 py-2.5 rounded-full transition-transform hover:scale-105"
          style={{ background: 'white', color: 'var(--bordeaux)' }}
        >
          Me contacter
        </Link>

        {/* TOGGLE MOBILE */}
        <button
          className="md:hidden relative z-50 p-1"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
        >
          {open ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
        </button>
      </div>

      {/* MENU MOBILE — PLEIN ÉCRAN */}
      <div
        className={`md:hidden fixed inset-0 flex flex-col items-center justify-center gap-2 transition-opacity duration-300 ${
          open ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        style={{ background: 'var(--bordeaux)' }}
      >
        {links.map((l, i) => {
          const active = pathname === l.href;
          return (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-3 py-3 font-display text-3xl font-semibold transition-colors"
              style={{ color: active ? 'var(--gold)' : 'white' }}
            >
              <span className="font-mono text-xs" style={{ color: 'var(--gold)' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              {l.label}
            </Link>
          );
        })}
        <Link
          href="/contact"
          onClick={() => setOpen(false)}
          className="mt-8 text-[11px] uppercase tracking-[0.2em] font-semibold px-6 py-3 rounded-full"
          style={{ background: 'white', color: 'var(--bordeaux)' }}
        >
          Me contacter
        </Link>
      </div>
    </header>
  );
}