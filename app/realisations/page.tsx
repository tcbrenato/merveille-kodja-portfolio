import { Palette, Megaphone, FileText, ExternalLink } from 'lucide-react';

const realisations = [
  { cat: 'Communication', icon: Megaphone, titre: 'Campagne Sensibilisation Paludisme', desc: 'Création d\'une campagne digitale de sensibilisation au paludisme pour une officine de Cotonou. Affiches, posts réseaux sociaux et fiches conseils.', tags: ['Communication', 'Santé', 'Digital'] },
  { cat: 'Visuel', icon: Palette, titre: 'Identité Visuelle Officinale', desc: 'Conception de l\'identité visuelle complète d\'une pharmacie : logo, palette de couleurs, templates posts et supports imprimés.', tags: ['Design', 'Branding', 'Pharmacie'] },
  { cat: 'Rédaction', icon: FileText, titre: 'Blog Santé & Bien-être', desc: 'Rédaction d\'une série d\'articles informatifs sur les médicaments courants, leurs usages et précautions pour patients.', tags: ['Rédaction', 'Santé', 'Blog'] },
  { cat: 'Visuel', icon: Palette, titre: 'Posts Réseaux Sociaux', desc: 'Création d\'un pack de 30 visuels thématiques pour les réseaux sociaux d\'une pharmacie, couvrant différentes thématiques de santé.', tags: ['Design', 'Social Media'] },
  { cat: 'Communication', icon: Megaphone, titre: 'Newsletter Mensuelle', desc: 'Mise en place d\'une newsletter mensuelle patients pour une officine : conception, rédaction et envoi automatisé.', tags: ['Email', 'Communication', 'Fidélisation'] },
  { cat: 'Visuel', icon: Palette, titre: 'Affiches & Flyers Santé', desc: 'Conception d\'affiches et flyers pour campagnes de vaccination et journées mondiales de la santé.', tags: ['Print', 'Design', 'Santé'] },
];

const catColors: Record<string, string> = {
  Communication: 'bg-blue-50 text-blue-700',
  Visuel: 'bg-purple-50 text-purple-700',
  Rédaction: 'bg-green-50 text-green-700',
};

export default function Realisations() {
  return (
    <>
      <section className="pt-32 pb-16" style={{ background: 'linear-gradient(135deg, var(--cream) 0%, #F0E8E8 100%)', borderBottom: '3px solid var(--bordeaux)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-xs tracking-[0.3em] uppercase font-medium" style={{ color: 'var(--bordeaux)' }}>Mon travail</span>
          <div className="w-12 h-px my-4" style={{ background: 'var(--bordeaux)' }} />
          <h1 className="font-display text-5xl font-bold mb-4" style={{ color: 'var(--dark)' }}>Réalisations</h1>
          <p className="text-gray-500 max-w-xl">Des projets concrets alliant expertise pharmaceutique et créativité communicationnelle.</p>
        </div>
      </section>

      <section className="py-20" style={{ background: 'var(--cream)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {realisations.map((r, i) => (
              <div key={i} className="card-hover bg-white border border-gray-100 rounded-sm overflow-hidden group">
                <div className="h-44 flex items-center justify-center relative overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, var(--bordeaux-dark), var(--bordeaux))' }}>
                  <r.icon size={48} color="white" className="opacity-30" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity"
                    style={{ background: 'white' }} />
                  <div className="absolute top-3 right-3">
                    <ExternalLink size={16} color="white" className="opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="p-6">
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${catColors[r.cat]}`}>{r.cat}</span>
                  <h3 className="font-display text-lg font-bold mt-3 mb-2">{r.titre}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{r.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {r.tags.map(t => (
                      <span key={t} className="text-xs px-2 py-1 rounded-sm border border-gray-200 text-gray-500">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center p-12 border-2 border-dashed border-gray-200 rounded-sm">
            <Palette size={32} className="mx-auto mb-4" style={{ color: 'var(--bordeaux)' }} />
            <h3 className="font-display text-xl font-bold mb-2">D'autres projets arrivent…</h3>
            <p className="text-gray-500 text-sm">Portfolio en cours d'enrichissement. Revenez bientôt !</p>
          </div>
        </div>
      </section>
    </>
  );
}