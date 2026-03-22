import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <section className="pt-32 pb-16" style={{ background: 'linear-gradient(135deg, var(--cream) 0%, #F0E8E8 100%)', borderBottom: '3px solid var(--bordeaux)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-xs tracking-[0.3em] uppercase font-medium" style={{ color: 'var(--bordeaux)' }}>Travaillons ensemble</span>
          <div className="w-12 h-px my-4" style={{ background: 'var(--bordeaux)' }} />
          <h1 className="font-display text-5xl font-bold mb-4" style={{ color: 'var(--dark)' }}>Contact & Collaboration</h1>
          <p className="text-gray-500 max-w-xl">Vous avez un projet, une question ou une opportunité de collaboration ? Je suis disponible.</p>
        </div>
      </section>

      <section className="py-20" style={{ background: 'var(--cream)' }}>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">

          {/* Infos contact */}
          <div>
            <h2 className="font-display text-3xl font-bold mb-2">Prenons contact</h2>
            <div className="section-line" />
            <p className="text-gray-600 leading-relaxed mb-10">
              Disponible pour des missions de communication officinale, création de visuels, rédaction de contenus santé ou tout projet à l'intersection de la pharmacie et de la communication.
            </p>

            <div className="flex flex-col gap-6 mb-10">
              <div className="flex items-start gap-4 p-5 bg-white border border-gray-100 rounded-sm">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-sm" style={{ background: 'var(--bordeaux)' }}>
                  <Phone size={18} color="white" />
                </div>
                <div>
                  <div className="font-semibold text-sm mb-1">Téléphone & WhatsApp</div>
                  <a href="tel:0145213321" className="text-gray-600 text-sm block hover:text-[var(--bordeaux)] transition-colors">01 45 21 33 21</a>
                  <a href="tel:0157581116" className="text-gray-600 text-sm block hover:text-[var(--bordeaux)] transition-colors">01 57 58 11 16</a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-white border border-gray-100 rounded-sm">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-sm" style={{ background: 'var(--bordeaux)' }}>
                  <Mail size={18} color="white" />
                </div>
                <div>
                  <div className="font-semibold text-sm mb-1">Email</div>
                  <a href="mailto:kenethemerveillekodja@gmail.com" className="text-gray-600 text-sm hover:text-[var(--bordeaux)] transition-colors">
                    kenethemerveillekodja@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-white border border-gray-100 rounded-sm">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-sm" style={{ background: 'var(--bordeaux)' }}>
                  <MapPin size={18} color="white" />
                </div>
                <div>
                  <div className="font-semibold text-sm mb-1">Localisation</div>
                  <p className="text-gray-600 text-sm">Cotonou, Bénin</p>
                  <p className="text-gray-500 text-xs mt-1">Pharmacie Tanto Le Joker · AKPAKPA</p>
                </div>
              </div>
            </div>

            <h3 className="font-semibold text-sm tracking-widest uppercase text-gray-400 mb-4">Réseaux sociaux</h3>
            <div className="flex gap-3 flex-wrap">
              <a href="https://facebook.com/MerveilleKodja" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 bg-white border border-gray-200 text-sm font-medium hover:border-[var(--bordeaux)] hover:text-[var(--bordeaux)] transition-all">
                <Facebook size={16} /> Facebook
              </a>
              <a href="https://instagram.com/MerveilleKodja" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 bg-white border border-gray-200 text-sm font-medium hover:border-[var(--bordeaux)] hover:text-[var(--bordeaux)] transition-all">
                <Instagram size={16} /> Instagram
              </a>
              <a href="https://wa.me/22901452133321" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 bg-white border border-gray-200 text-sm font-medium hover:border-[var(--bordeaux)] hover:text-[var(--bordeaux)] transition-all">
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>
          </div>

          <div className="bg-white p-10 border border-gray-100 rounded-sm shadow-sm">
  <h3 className="font-display text-2xl font-bold mb-6">Envoyer un message</h3>
  <form name="contact" method="POST" data-netlify="true" className="flex flex-col gap-5">
    <input type="hidden" name="form-name" value="contact" />
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label className="text-xs font-medium tracking-wide uppercase text-gray-500 block mb-2">Prénom</label>
        <input type="text" name="prenom" placeholder="Jean" required className="w-full border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[var(--bordeaux)] transition-colors rounded-sm" />
      </div>
      <div>
        <label className="text-xs font-medium tracking-wide uppercase text-gray-500 block mb-2">Nom</label>
        <input type="text" name="nom" placeholder="Dupont" required className="w-full border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[var(--bordeaux)] transition-colors rounded-sm" />
      </div>
    </div>
    <div>
      <label className="text-xs font-medium tracking-wide uppercase text-gray-500 block mb-2">Email</label>
      <input type="email" name="email" placeholder="jean@exemple.com" required className="w-full border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[var(--bordeaux)] transition-colors rounded-sm" />
    </div>
    <div>
      <label className="text-xs font-medium tracking-wide uppercase text-gray-500 block mb-2">Téléphone</label>
      <input type="tel" name="telephone" placeholder="+229 00 00 00 00" className="w-full border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[var(--bordeaux)] transition-colors rounded-sm" />
    </div>
    <div>
      <label className="text-xs font-medium tracking-wide uppercase text-gray-500 block mb-2">Sujet</label>
      <select name="sujet" className="w-full border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[var(--bordeaux)] transition-colors rounded-sm bg-white">
        <option>Communication officinale</option>
        <option>Création de visuels</option>
        <option>Rédaction de contenus</option>
        <option>Gestion réseaux sociaux</option>
        <option>Autre</option>
      </select>
    </div>
    <div>
      <label className="text-xs font-medium tracking-wide uppercase text-gray-500 block mb-2">Message</label>
      <textarea rows={5} name="message" placeholder="Décrivez votre projet ou votre demande..." required className="w-full border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[var(--bordeaux)] transition-colors rounded-sm resize-none" />
    </div>
    <button type="submit" className="btn-bordeaux text-center w-full">
      Envoyer le message
    </button>
    <p className="text-xs text-gray-400 text-center">Ou écrivez directement sur WhatsApp pour une réponse plus rapide</p>
  </form>
</div>

        </div>
      </section>
    </>
  );
}