import Link from 'next/link';
import { Pill, Megaphone, Palette, FileText, Share2, BarChart3, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Pill,
    categorie: 'Pharmacie',
    titre: 'Auxiliaire de Pharmacie',
    desc: 'Accueil et conseil des patients, dispensation des médicaments sur ordonnance, gestion rigoureuse des stocks et respect des protocoles de délivrance.',
    items: ['Dispensation des médicaments', 'Conseil au comptoir', 'Gestion des ordonnances', 'Contrôle et suivi des stocks', 'Sensibilisation santé publique'],
  },
  {
    icon: Megaphone,
    categorie: 'Communication',
    titre: 'Communication Officinale',
    desc: 'Stratégie de communication sur-mesure pour les officines pharmaceutiques : de la présence digitale à la gestion de la réputation.',
    items: ['Stratégie de communication', 'Gestion des réseaux sociaux', 'Campagnes de sensibilisation', 'Relation client & fidélisation', 'Communication de crise'],
  },
  {
    icon: Palette,
    categorie: 'Création',
    titre: 'Création de Visuels',
    desc: 'Conception de supports visuels professionnels adaptés au secteur pharmaceutique et médical, alliant esthétique et clarté du message.',
    items: ['Posts réseaux sociaux', 'Affiches et flyers', 'Bannières digitales', 'Identité visuelle officinale', 'Supports de sensibilisation'],
  },
  {
    icon: FileText,
    categorie: 'Rédaction',
    titre: 'Rédaction de Contenus',
    desc: 'Production de contenus informatifs et engageants sur des thèmes de santé, pharmaceutique et bien-être pour vos supports de communication.',
    items: ['Articles de blog santé', 'Newsletters officinales', 'Fiches conseils patients', 'Textes pour réseaux sociaux', 'Scripts vidéo'],
  },
  {
    icon: Share2,
    categorie: 'Digital',
    titre: 'Gestion des Réseaux Sociaux',
    desc: 'Prise en main complète de vos réseaux sociaux : planning éditorial, publication, modération et reporting mensuel.',
    items: ['Calendrier éditorial', 'Création et publication', 'Modération communauté', 'Rapport de performance', 'Veille concurrentielle'],
  },
  {
    icon: BarChart3,
    categorie: 'Conseil',
    titre: 'Audit Communication',
    desc: 'Analyse complète de votre communication existante et recommandations stratégiques pour optimiser votre image et votre visibilité.',
    items: ['Audit de présence digitale', 'Analyse de la concurrence', 'Recommandations stratégiques', 'Plan d\'action détaillé', 'Suivi et ajustements'],
  },
];

export default function Services() {
  return (
    <>
      <section className="pt-32 pb-16" style={{ background: 'linear-gradient(135deg, var(--cream) 0%, #F0E8E8 100%)', borderBottom: '3px solid var(--bordeaux)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-xs tracking-[0.3em] uppercase font-medium" style={{ color: 'var(--bordeaux)' }}>Ce que je propose</span>
          <div className="w-12 h-px my-4" style={{ background: 'var(--bordeaux)' }} />
          <h1 className="font-display text-5xl font-bold mb-4" style={{ color: 'var(--dark)' }}>Mes Services</h1>
          <p className="text-gray-500 max-w-xl leading-relaxed">
            Une double compétence pharmaceutique et communicationnelle au service de votre officine et de vos projets créatifs.
          </p>
        </div>
      </section>

      <section className="py-20" style={{ background: 'var(--cream)' }}>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="card-hover bg-white p-8 border border-gray-100 rounded-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-sm"
                  style={{ background: 'var(--bordeaux)' }}>
                  <s.icon size={20} color="white" />
                </div>
                <div>
                  <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--bordeaux)' }}>{s.categorie}</span>
                  <h3 className="font-display text-xl font-bold">{s.titre}</h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{s.desc}</p>
              <ul className="flex flex-col gap-2">
                {s.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--bordeaux)' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 text-center" style={{ background: 'var(--bordeaux)' }}>
        <div className="max-w-xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Un projet en tête ?</h2>
          <p className="text-white/70 mb-8">Discutons de vos besoins et construisons quelque chose d'exceptionnel ensemble.</p>
          <Link href="/contact" className="bg-white px-8 py-3 font-semibold inline-flex items-center gap-2 hover:bg-gray-100 transition-colors" style={{ color: 'var(--bordeaux)' }}>
            Me contacter <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}