'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/services', label: 'Services' },
  { href: '/realisations', label: 'Réalisations' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-white shadow-sm'}`}>
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/">
          <Image src="/logo.png" alt="Merveille Kodja" width={80} height={35} className="object-contain" />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link key={l.href} href={l.href}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-[var(--bordeaux)] ${pathname === l.href ? 'text-[var(--bordeaux)] border-b border-[var(--bordeaux)]' : 'text-[var(--dark)]'}`}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-bordeaux text-sm">Collaborer</Link>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white/98 backdrop-blur-sm border-t px-6 py-6 flex flex-col gap-5">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className={`text-sm font-medium tracking-wide ${pathname === l.href ? 'text-[var(--bordeaux)]' : ''}`}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}