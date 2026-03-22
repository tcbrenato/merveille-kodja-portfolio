import Link from 'next/link';
import { Instagram, Facebook, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--dark)', color: 'white' }} className="pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 mb-12">
        <div>
  <img src="/logo-white.png" alt="Merveille Kodja" className="h-16 object-contain mb-3" />
  <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
    Auxiliaire de pharmacie & Chargée de communication officinale. Allier santé et communication avec passion.
  </p>
</div>
        <div>
          <h4 className="font-semibold tracking-widest text-xs uppercase mb-5 text-gray-400">Navigation</h4>
          <div className="flex flex-col gap-3">
            {[
              { label: 'Accueil', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'Réalisations', href: '/realisations' },
              { label: 'Blog', href: '/blog' },
              { label: 'Contact', href: '/contact' },
            ].map(item => (
              <Link key={item.label} href={item.href}
                className="text-sm text-gray-300 hover:text-white transition-colors">{item.label}</Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold tracking-widest text-xs uppercase mb-5 text-gray-400">Contact</h4>
          <div className="flex flex-col gap-3">
            <a href="tel:0145213321" className="flex items-center gap-2 text-sm text-gray-300 hover:text-white">
              <Phone size={14} /> 01 45 21 33 21
            </a>
            <a href="tel:0157581116" className="flex items-center gap-2 text-sm text-gray-300 hover:text-white">
              <Phone size={14} /> 01 57 58 11 16
            </a>
            <a href="mailto:kenethemerveillekodja@gmail.com" className="flex items-center gap-2 text-sm text-gray-300 hover:text-white">
              <Mail size={14} /> kenethemerveillekodja@gmail.com
            </a>
          </div>
          <div className="flex gap-4 mt-5">
            <a href="https://www.facebook.com/merveille.kodja.2025" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center border border-gray-700 hover:border-[var(--bordeaux)] hover:bg-[var(--bordeaux)] transition-all rounded-sm">
              <Facebook size={15} />
            </a>
            <a href="https://www.instagram.com/merveillekodja?igsh=cG9ncG9wMjh4cG5s" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center border border-gray-700 hover:border-[var(--bordeaux)] hover:bg-[var(--bordeaux)] transition-all rounded-sm">
              <Instagram size={15} />
            </a>
            <a href="mailto:kenethemerveillekodja@gmail.com"
              className="w-9 h-9 flex items-center justify-center border border-gray-700 hover:border-[var(--bordeaux)] hover:bg-[var(--bordeaux)] transition-all rounded-sm">
              <Mail size={15} />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 border-t border-gray-800 pt-6 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} Merveille Kodja · Tous droits réservés
      </div>
    </footer>
  );
}