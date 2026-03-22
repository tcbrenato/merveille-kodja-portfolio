import { Calendar, Clock, ArrowRight } from 'lucide-react';

const articles = [
  {
    slug: 'role-auxiliaire-pharmacie',
    titre: 'Le rôle méconnu de l\'auxiliaire de pharmacie',
    date: '10 Mars 2026',
    lecture: '4 min',
    cat: 'Pharmacie',
    extrait: 'Bien plus qu\'un simple distributeur de médicaments, l\'auxiliaire de pharmacie est un acteur clé de la santé publique. Découvrez les multiples facettes de ce métier essentiel.'
  },
  {
    slug: 'communication-officinale',
    titre: 'Pourquoi votre pharmacie a besoin d\'une vraie stratégie digitale',
    date: '2 Mars 2026',
    lecture: '5 min',
    cat: 'Communication',
    extrait: 'En 2026, la présence digitale n\'est plus un luxe pour les officines. Voici comment une stratégie de communication bien pensée peut transformer la relation avec vos patients.'
  },
  {
    slug: 'visuels-sante',
    titre: 'Créer des visuels santé percutants sans être graphiste',
    date: '22 Fév 2026',
    lecture: '3 min',
    cat: 'Design',
    extrait: 'La communication visuelle en santé obéit à des règles spécifiques. Quelques principes simples peuvent transformer vos supports et renforcer la confiance de vos patients.'
  },
  {
    slug: 'sensibilisation-paludisme',
    titre: 'Campagnes de sensibilisation en officine : guide pratique',
    date: '15 Fév 2026',
    lecture: '6 min',
    cat: 'Santé Publique',
    extrait: 'Organiser une campagne de sensibilisation efficace en pharmacie demande méthode et créativité. Voici les étapes clés pour maximiser l\'impact de vos actions.'
  },
];

const catColors: Record<string, string> = {
  Pharmacie: 'text-blue-600 bg-blue-50',
  Communication: 'text-orange-600 bg-orange-50',
  Design: 'text-purple-600 bg-purple-50',
  'Santé Publique': 'text-green-600 bg-green-50',
};

export default function Blog() {
  return (
    <>
      <section className="pt-32 pb-16" style={{ background: 'linear-gradient(135deg, var(--cream) 0%, #F0E8E8 100%)', borderBottom: '3px solid var(--bordeaux)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-xs tracking-[0.3em] uppercase font-medium" style={{ color: 'var(--bordeaux)' }}>Insights & Réflexions</span>
          <div className="w-12 h-px my-4" style={{ background: 'var(--bordeaux)' }} />
          <h1 className="font-display text-5xl font-bold mb-4" style={{ color: 'var(--dark)' }}>Blog</h1>
          <p className="text-gray-500 max-w-xl">Pharmacie, communication et créativité — mes réflexions à l'intersection de ces trois univers.</p>
        </div>
      </section>

      <section className="py-20" style={{ background: 'var(--cream)' }}>
        <div className="max-w-6xl mx-auto px-6">

          {/* Article vedette */}
          <div className="mb-12 bg-white border border-gray-100 rounded-sm overflow-hidden grid md:grid-cols-2 card-hover">
            <div className="h-64 md:h-auto flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, var(--bordeaux-dark), var(--bordeaux))' }}>
              <span className="font-display text-8xl font-black text-white/20">01</span>
            </div>
            <div className="p-10 flex flex-col justify-center">
              <span className={`text-xs px-2 py-1 rounded-full font-medium w-fit mb-4 ${catColors[articles[0].cat]}`}>
                {articles[0].cat}
              </span>
              <h2 className="font-display text-2xl font-bold mb-3">{articles[0].titre}</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{articles[0].extrait}</p>
              <div className="flex items-center gap-4 text-xs text-gray-400 mb-6">
                <span className="flex items-center gap-1"><Calendar size={12} />{articles[0].date}</span>
                <span className="flex items-center gap-1"><Clock size={12} />{articles[0].lecture} de lecture</span>
              </div>
              <button className="btn-bordeaux w-fit text-sm flex items-center gap-2">
                Lire l'article <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Autres articles */}
          <div className="grid md:grid-cols-3 gap-8">
            {articles.slice(1).map((a, i) => (
              <div key={i} className="card-hover bg-white border border-gray-100 rounded-sm overflow-hidden">
                <div className="h-36 flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, rgba(123,13,30,0.08), rgba(123,13,30,0.15))' }}>
                  <span className="font-display text-5xl font-black" style={{ color: 'rgba(123,13,30,0.2)' }}>0{i + 2}</span>
                </div>
                <div className="p-6">
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${catColors[a.cat]}`}>{a.cat}</span>
                  <h3 className="font-display text-lg font-bold mt-3 mb-2">{a.titre}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{a.extrait}</p>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span className="flex items-center gap-1"><Calendar size={11} />{a.date}</span>
                    <span className="flex items-center gap-1"><Clock size={11} />{a.lecture}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}