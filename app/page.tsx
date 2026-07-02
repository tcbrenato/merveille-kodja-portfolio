import Link from 'next/link';
import {
  ArrowRight, GraduationCap, Clock3, Palette, TrendingUp,
  Megaphone, PenTool, CalendarRange, Briefcase, Pill, Ticket,
} from 'lucide-react';

const pourquoi = [
  {
    icon: GraduationCap,
    titre: 'Formée & Diplômée',
    desc: 'Licence 3 en Information et Communication (UAC), formation Marketing Digital & Community Management (CRF Perfection).',
  },
  {
    icon: Clock3,
    titre: 'Toujours à l\'écoute',
    desc: 'Calendriers éditoriaux tenus, délais respectés — plusieurs structures accompagnées en parallèle.',
  },
  {
    icon: Palette,
    titre: 'Créations sur-mesure',
    desc: 'Visuels, affiches et identité de marque pensés pour le secteur et le public de chaque structure.',
  },
  {
    icon: TrendingUp,
    titre: 'Veille & Performance',
    desc: 'E-réputation suivie, stratégie de contenu ajustée aux résultats, pas seulement à l\'esthétique.',
  },
];

const services = [
  {
    icon: Megaphone,
    titre: 'Community Management',
    desc: 'Animation quotidienne des réseaux sociaux, modération et relation communauté.',
    img: '/service-community.jpg',
  },
  {
    icon: PenTool,
    titre: 'Création de Contenu & Design',
    desc: 'Visuels, affiches et supports de marque, conçus pour chaque plateforme.',
    img: '/service-design.jpg',
  },
  {
    icon: CalendarRange,
    titre: 'Stratégie Éditoriale',
    desc: 'Calendriers de publication et lignes éditoriales adaptés à chaque secteur.',
    img: '/service-strategie.jpg',
  },
];

const parcours = [
  {
    icon: Briefcase,
    periode: 'En cours',
    titre: 'Community Manager & Graphiste — Indépendante',
    lieu: 'Cotonou',
    desc: 'Communication digitale complète pour une structure de vente de produits cosmétiques : calendrier éditorial, création de contenus, animation quotidienne des réseaux sociaux, visuels pour plusieurs structures.',
  },
  {
    icon: Pill,
    periode: 'Juin 2025 — en cours',
    titre: 'Caissière & Chargée de vente',
    lieu: 'Pharmacie Tanto Le Joker, Cotonou',
    desc: 'Conseil clientèle et vente de produits pharmaceutiques et parapharmaceutiques, gestion de la relation client et de la caisse.',
  },
  {
    icon: Ticket,
    periode: 'Nov. — déc. 2025',
    titre: 'Chargée d\'accueil & Vente de billets',
    lieu: 'ADAC — « Je suis Photogénique »',
    desc: 'Accueil, orientation et gestion des flux du public lors d\'événements culturels, vente et contrôle de billets.',
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="pt-20 pb-24" style={{ background: 'var(--paper, #FAF7F3)' }}>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span
              className="inline-block text-xs tracking-[0.2em] uppercase font-semibold mb-6 px-3 py-1.5 rounded-full"
              style={{ color: 'var(--bordeaux)', background: 'rgba(107,22,38,0.08)' }}
            >
              Community Manager & Graphiste
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold leading-[1.05] mb-6" style={{ color: 'var(--ink, #1C1815)' }}>
              Donnez de la voix<br />
              <span style={{ color: 'var(--bordeaux)' }}>à votre marque.</span>
            </h1>
            <p className="text-lg leading-relaxed mb-10 max-w-md" style={{ color: 'var(--ink-soft, #5A5450)' }}>
              Community Manager et graphiste indépendante à Cotonou. Je pilote la présence
              digitale de plusieurs structures : stratégie éditoriale, création de contenus,
              animation de communautés — et le conseil pharmaceutique au comptoir, au quotidien.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-bordeaux">
                Discutons de votre projet <ArrowRight size={16} className="inline ml-2" />
              </Link>
              <Link href="/services" className="btn-outline">Mes services</Link>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src="/merveille.jpg" alt="Merveille Kodja" className="w-full aspect-[4/3] object-cover object-top" />
            </div>
          </div>
        </div>
      </section>

      {/* POURQUOI MOI */}
      <section className="py-24" style={{ background: 'var(--light-gray, #F4F2EF)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs tracking-[0.3em] uppercase font-semibold" style={{ color: 'var(--bordeaux)' }}>
              Pourquoi moi
            </span>
            <h2 className="font-display text-4xl font-bold mt-3" style={{ color: 'var(--ink, #1C1815)' }}>
              Une double expertise, une seule exigence
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pourquoi.map((p, i) => (
              <div
                key={i}
                className="p-7 bg-white rounded-xl border transition-shadow hover:shadow-lg"
                style={{ borderColor: 'rgba(107,22,38,0.15)' }}
              >
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center mb-5"
                  style={{ background: 'rgba(107,22,38,0.08)' }}
                >
                  <p.icon size={20} style={{ color: 'var(--bordeaux)' }} />
                </div>
                <h3 className="font-display text-lg font-bold mb-2" style={{ color: 'var(--ink, #1C1815)' }}>{p.titre}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft, #5A5450)' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CE QUE JE PROPOSE */}
      <section className="py-24" style={{ background: 'var(--paper, #FAF7F3)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div>
              <span className="text-xs tracking-[0.3em] uppercase font-semibold" style={{ color: 'var(--bordeaux)' }}>
                Ce que je propose
              </span>
              <h2 className="font-display text-4xl font-bold mt-3" style={{ color: 'var(--ink, #1C1815)' }}>
                Des solutions complètes<br />pour votre présence digitale
              </h2>
            </div>
            <Link href="/services" className="text-sm font-semibold underline" style={{ color: 'var(--bordeaux)' }}>
              Voir tous mes services →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="relative rounded-xl overflow-hidden group h-72 flex items-end"
                style={{
                  background: `linear-gradient(155deg, var(--bordeaux) 0%, #3D0C15 100%)`,
                }}
              >
                {/* Remplace ce div par <img src={s.img} .../> une fois ton visuel ajouté dans /public */}
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.08]">
                  <s.icon size={120} className="text-white" />
                </div>
                <div className="relative p-6">
                  <s.icon size={18} className="text-white/80 mb-2" />
                  <h3 className="font-display text-xl font-bold text-white mb-1">{s.titre}</h3>
                  <p className="text-sm text-white/75 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs mt-4" style={{ color: 'var(--ink-soft, #5A5450)' }}>
            * Bloc temporaire en dégradé bordeaux. Remplace-le par une vraie photo dès que tu en as une (voir commentaire dans le code).
          </p>
        </div>
      </section>

      {/* MES RÉALISATIONS — bande sombre */}
      <section className="py-24" style={{ background: 'var(--ink, #1C1815)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs tracking-[0.3em] uppercase font-semibold" style={{ color: 'var(--gold, #B08D57)' }}>
              Mes réalisations
            </span>
            <h2 className="font-display text-4xl font-bold italic text-white mt-3">
              Aperçu du travail
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className="rounded-lg overflow-hidden aspect-[3/4] flex items-center justify-center border border-white/10"
                style={{ background: 'linear-gradient(160deg, #2A211D 0%, #1C1815 100%)' }}
              >
                {/* Remplace ce div par <img src={`/realisation-${n}.jpg`} .../> une fois ta capture ajoutée */}
                <span className="text-white/25 text-xs tracking-widest uppercase">Réalisation {n}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-white/40 mt-4 text-center">
            * Blocs temporaires. Remplace-les par 4 captures de tes visuels / posts / affiches réels dès que tu les as.
          </p>
        </div>
      </section>

      {/* MON PARCOURS — remplace les faux témoignages */}
      <section className="py-24" style={{ background: 'var(--light-gray, #F4F2EF)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs tracking-[0.3em] uppercase font-semibold" style={{ color: 'var(--bordeaux)' }}>
              Mon parcours
            </span>
            <h2 className="font-display text-4xl font-bold mt-3" style={{ color: 'var(--ink, #1C1815)' }}>
              Du terrain à l'écran
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {parcours.map((p, i) => (
              <div key={i} className="bg-white rounded-xl p-7 border-t-4" style={{ borderColor: 'var(--bordeaux)' }}>
                <p.icon size={22} style={{ color: 'var(--bordeaux)' }} className="mb-4" />
                <span className="text-xs font-semibold tracking-wide" style={{ color: 'var(--gold, #B08D57)' }}>{p.periode}</span>
                <h3 className="font-display text-lg font-bold mt-1 mb-1" style={{ color: 'var(--ink, #1C1815)' }}>{p.titre}</h3>
                <p className="text-xs mb-4" style={{ color: 'var(--ink-soft, #5A5450)' }}>{p.lieu}</p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft, #5A5450)' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ background: 'var(--bordeaux)' }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-display text-4xl font-bold text-white mb-4">
            Prête à donner de la visibilité à votre marque ?
          </h2>
          <p className="text-white/75 mb-10">
            Community management, création de contenu ou stratégie éditoriale — parlons de votre projet.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white font-semibold px-8 py-4 rounded-full transition-transform hover:scale-105"
            style={{ color: 'var(--bordeaux)' }}
          >
            Démarrer un projet <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}