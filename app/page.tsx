import Link from 'next/link';
import { ArrowRight, Pill, Megaphone, Palette, Award, MapPin, Phone } from 'lucide-react';

const competences = [
  { icon: Pill, titre: 'Auxiliaire de Pharmacie', desc: 'Dispensation des médicaments, conseil patient, gestion des stocks et ordonnances.' },
  { icon: Megaphone, titre: 'Communication Officinale', desc: 'Stratégie de communication, création de contenu et gestion de la présence digitale d\'officine.' },
  { icon: Palette, titre: 'Création Visuelle', desc: 'Conception de visuels percutants pour réseaux sociaux, affiches et supports pharmaceutiques.' },
  { icon: Award, titre: 'Formation Diplômante', desc: 'Licence en Communication & Information · Diplôme d\'Auxiliaire de Pharmacie.' },
];

const stats = [
  { value: '2+', label: 'Ans d\'expérience' },
  { value: '100%', label: 'Engagement' },
  { value: 'Bi', label: 'Double expertise' },
  { value: '∞', label: 'Créativité' },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="min-h-screen flex items-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--cream) 0%, #F5EDE8 100%)' }}>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5" style={{ background: 'radial-gradient(circle at 70% 50%, var(--bordeaux), transparent 60%)' }} />
        <div className="absolute bottom-0 left-0 w-96 h-96 opacity-5 rounded-full" style={{ background: 'var(--bordeaux)', filter: 'blur(80px)' }} />

        <div className="max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div className="animate-fade-up">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-px" style={{ background: 'var(--bordeaux)' }} />
              <span className="text-xs tracking-[0.3em] uppercase font-medium" style={{ color: 'var(--bordeaux)' }}>
                Portfolio Professionnel
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-2 text-[var(--dark)]">
  Merveille
</h1>
<h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 shimmer-text">
  Kodja
</h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-3 max-w-md">
              Auxiliaire de Pharmacie &amp; Chargée de Communication Officinale
            </p>
            <p className="text-sm text-gray-500 mb-8 flex items-center gap-2">
            
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/services" className="btn-bordeaux">Découvrir mes services <ArrowRight size={16} className="inline ml-2" /></Link>
              <Link href="/contact" className="btn-outline">Me contacter</Link>
            </div>
          </div>

          <div className="animate-fade-up delay-2 flex justify-center">
  <div className="relative">
    <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4"
      style={{ borderColor: 'var(--bordeaux)', boxShadow: '0 20px 60px rgba(123,13,30,0.25)' }}>
      <img src="/merveille.jpg" alt="Merveille Kodja" className="w-full h-full object-cover object-top" />
    </div>
    <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full border-4 border-white flex items-center justify-center"
      style={{ background: 'var(--cream)', boxShadow: '0 8px 30px rgba(123,13,30,0.2)' }}>
      <Pill size={32} style={{ color: 'var(--bordeaux)' }} />
    </div>
    <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full border-4 border-white flex items-center justify-center"
      style={{ background: 'var(--bordeaux)', boxShadow: '0 8px 30px rgba(123,13,30,0.3)' }}>
      <Palette size={18} color="white" />
    </div>
  </div>
</div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: 'var(--bordeaux)' }} className="py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {stats.map(s => (
            <div key={s.label}>
              <div className="font-display text-4xl font-bold mb-1">{s.value}</div>
              <div className="text-sm opacity-70 tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* COMPÉTENCES */}
      <section className="py-24" style={{ background: 'var(--cream)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <span className="text-xs tracking-[0.3em] uppercase font-medium" style={{ color: 'var(--bordeaux)' }}>Ce que je fais</span>
            <div className="section-line" />
            <h2 className="font-display text-4xl font-bold text-[var(--dark)]">Mes Compétences</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {competences.map((c, i) => (
              <div key={i} className="card-hover p-8 bg-white border border-gray-100 rounded-sm">
                <div className="w-12 h-12 flex items-center justify-center mb-5 rounded-sm"
                  style={{ background: 'rgba(123,13,30,0.08)' }}>
                  <c.icon size={22} style={{ color: 'var(--bordeaux)' }} />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{c.titre}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* À PROPOS */}
      <section className="py-24" style={{ background: 'var(--light-gray)' }}>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs tracking-[0.3em] uppercase font-medium" style={{ color: 'var(--bordeaux)' }}>À propos</span>
            <div className="section-line" />
            <h2 className="font-display text-4xl font-bold mb-6">Double expertise,<br />une seule passion</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Titulaire d'une licence en <strong>Communication et Information</strong> et d'une formation diplômante en <strong>Auxiliaire de Pharmacie</strong>, je suis l'alliance rare entre la rigueur du domaine médical et la créativité de la communication.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Actuellement en stage à la <strong>Pharmacie Tanto Le Joker</strong> à Cotonou, je mets en pratique cette double compétence pour valoriser les officines à travers des stratégies de communication efficaces et des visuels professionnels.
            </p>
            <Link href="/services" className="btn-bordeaux">Voir mes services</Link>
          </div>
          <div className="flex flex-col gap-4">
            {['Dispensation & conseil pharmaceutique', 'Gestion des ordonnances et stocks', 'Communication sur réseaux sociaux', 'Création de visuels & affiches', 'Rédaction de contenus santé', 'Stratégie de marque pour officines'].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-sm border-l-4" style={{ borderColor: 'var(--bordeaux)' }}>
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: 'var(--bordeaux)' }} />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ background: 'var(--dark)' }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-display text-4xl font-bold text-white mb-4">Prêt à collaborer ?</h2>
          <p className="text-gray-400 mb-8">Que ce soit pour une communication officinale ou un projet créatif, discutons ensemble.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/contact" className="btn-bordeaux">Démarrer un projet</Link>
            <a href="tel:0145213321" className="btn-outline" style={{ color: 'white', borderColor: '#4B4B4B' }}>
              <Phone size={15} className="inline mr-2" />01 45 21 33 21
            </a>
          </div>
        </div>
      </section>
    </>
  );
}