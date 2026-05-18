import {
  Phone,
  MessageCircle,
  Clock3,
  ShieldCheck,
} from "lucide-react";

export default function Home() {
  return (
    <main className="bg-[#f3f4f6] text-[#111827] min-h-screen">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/90 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <div>
            <h2 className="text-2xl font-black tracking-tight">
              ABBINATI
            </h2>
            <p className="text-xs tracking-[0.3em] text-gray-500">
              SERRANDE
            </p>
          </div>

          <a
            href="tel:+393000000000"
            className="bg-[#f0b429] hover:opacity-90 transition px-5 py-3 rounded-xl font-bold flex items-center gap-2"
          >
            <Phone size={18} />
            <span className="hidden sm:block">
              Chiama Ora
            </span>
          </a>

        </div>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-14 lg:py-24">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}
          <div>

            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Clock3 size={16} />
              Operativi su Milano città
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight mb-8">
              Riparazione Serrande e Saracinesche a Milano
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 max-w-xl">
              Pronto intervento su serrande bloccate,
              serrande elettriche, motori,
              molle e saracinesche per negozi e attività commerciali.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">

              <a
                href="tel:+393000000000"
                className="bg-[#111827] hover:opacity-90 transition text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Chiama Ora
              </a>

              <a
                href="https://wa.me/393000000000"
                target="_blank"
                className="bg-white border border-gray-300 hover:border-black transition px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>

            </div>

            {/* TRUST */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">

              <div className="bg-white p-5 rounded-2xl border border-gray-200">
                <ShieldCheck className="text-[#f0b429] mb-3" />
                <h3 className="font-bold mb-1">
                  20+ anni esperienza
                </h3>
                <p className="text-sm text-gray-500">
                  Operativi su Milano
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-200">
                <ShieldCheck className="text-[#f0b429] mb-3" />
                <h3 className="font-bold mb-1">
                  Interventi rapidi
                </h3>
                <p className="text-sm text-gray-500">
                  Assistenza professionale
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-200">
                <ShieldCheck className="text-[#f0b429] mb-3" />
                <h3 className="font-bold mb-1">
                  Preventivi chiari
                </h3>
                <p className="text-sm text-gray-500">
                  Nessuna sorpresa
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="relative">

            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl relative">

              <img
  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1400&auto=format&fit=crop"
  alt="Riparazione serrande Milano"
  className="w-full h-full object-cover brightness-75"
/>

<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

            </div>

            {/* FLOATING CARD */}
            <div className="absolute -bottom-6 left-6 bg-white p-6 rounded-2xl shadow-2xl max-w-sm border border-gray-200">

              <p className="font-bold text-lg mb-2">
                Pronto intervento rapido
              </p>

              <p className="text-gray-600 leading-relaxed">
                Assistenza professionale per serrande,
                saracinesche e motori su Milano città.
              </p>

            </div>

          </div>

        </div>

      </section>
            {/* SERVICES */}
      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-14">

            <p className="text-[#f0b429] font-bold uppercase tracking-wide mb-3">
              I nostri servizi
            </p>

            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Soluzioni professionali per ogni esigenza
            </h2>

            <p className="text-lg text-gray-600 max-w-2xl">
              Interventi rapidi e professionali su serrande,
              saracinesche, motori e automazioni a Milano città.
            </p>

          </div>

          {/* CARDS */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

            {/* CARD 1 */}
            <div className="group bg-[#f8f8f8] rounded-3xl overflow-hidden border border-gray-200 hover:shadow-2xl transition duration-300">

              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop"
                  alt="Riparazione serrande"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-4">
                  Riparazione Serrande
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  Interventi rapidi su serrande bloccate,
                  danneggiate o fuori asse.
                </p>

                <a
                  href="#"
                  className="font-bold text-[#f0b429]"
                >
                  Scopri di più →
                </a>

              </div>

            </div>

            {/* CARD 2 */}
            <div className="group bg-[#f8f8f8] rounded-3xl overflow-hidden border border-gray-200 hover:shadow-2xl transition duration-300">

              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1200&auto=format&fit=crop"
                  alt="Motori serrande"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-4">
                  Motori e Automazioni
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  Installazione e riparazione motori
                  per serrande automatiche.
                </p>

                <a
                  href="#"
                  className="font-bold text-[#f0b429]"
                >
                  Scopri di più →
                </a>

              </div>

            </div>

            {/* CARD 3 */}
            <div className="group bg-[#f8f8f8] rounded-3xl overflow-hidden border border-gray-200 hover:shadow-2xl transition duration-300">

              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop"
                  alt="Sostituzione serrande"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-4">
                  Sostituzione Serrande
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  Sostituzione serrande usurate
                  con soluzioni moderne e sicure.
                </p>

                <a
                  href="#"
                  className="font-bold text-[#f0b429]"
                >
                  Scopri di più →
                </a>

              </div>

            </div>

            {/* CARD 4 */}
            <div className="group bg-[#f8f8f8] rounded-3xl overflow-hidden border border-gray-200 hover:shadow-2xl transition duration-300">

              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop"
                  alt="Manutenzione serrande"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-4">
                  Manutenzione
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  Controlli periodici per garantire
                  sicurezza e affidabilità.
                </p>

                <a
                  href="#"
                  className="font-bold text-[#f0b429]"
                >
                  Scopri di più →
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>
            {/* CTA SECTION */}
      <section className="py-20 bg-[#111827] text-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="rounded-[2rem] overflow-hidden bg-gradient-to-r from-[#0f172a] to-[#1e293b] p-10 lg:p-16">

            <div className="grid lg:grid-cols-2 gap-10 items-center">

              {/* LEFT */}
              <div>

                <p className="text-[#f0b429] uppercase font-bold tracking-wide mb-4">
                  Serranda bloccata?
                </p>

                <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6">
                  Chiama ora per un intervento immediato
                </h2>

                <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                  Operativi su Milano città per pronto intervento
                  su serrande, saracinesche e automazioni.
                </p>

              </div>

              {/* RIGHT */}
              <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">

                <a
                  href="tel:+393000000000"
                  className="bg-[#f0b429] hover:opacity-90 transition text-black font-bold px-8 py-5 rounded-2xl flex items-center justify-center gap-3 text-lg"
                >
                  <Phone size={22} />
                  Chiama Ora
                </a>

                <a
                  href="https://wa.me/393000000000"
                  target="_blank"
                  className="border border-white/20 hover:bg-white hover:text-black transition font-bold px-8 py-5 rounded-2xl flex items-center justify-center gap-3 text-lg"
                >
                  <MessageCircle size={22} />
                  WhatsApp
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>
      {/* MOBILE STICKY CTA */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 flex gap-3 z-50 md:hidden">

        <a
          href="tel:+393000000000"
          className="flex-1 bg-[#111827] text-white rounded-2xl py-4 font-bold flex items-center justify-center gap-2"
        >
          <Phone size={20} />
          Chiama
        </a>

        <a
          href="https://wa.me/393000000000"
          target="_blank"
          className="flex-1 bg-[#f0b429] text-black rounded-2xl py-4 font-bold flex items-center justify-center gap-2"
        >
          <MessageCircle size={20} />
          WhatsApp
        </a>

      </div>
            {/* FOOTER */}
      <footer className="bg-[#0f172a] text-white pt-20 pb-32 md:pb-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-12 border-b border-white/10 pb-14">

            {/* BRAND */}
            <div>

              <h3 className="text-3xl font-black mb-4">
                ABBINATI
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Specialisti nella riparazione,
                sostituzione e manutenzione di serrande,
                saracinesche e motori a Milano.
              </p>

            </div>

            {/* LINKS */}
            <div>

              <h4 className="font-bold text-lg mb-5">
                Link Utili
              </h4>

              <ul className="space-y-3 text-gray-400">

                <li>
                  <a href="#">
                    Home
                  </a>
                </li>

                <li>
                  <a href="#">
                    Servizi
                  </a>
                </li>

                <li>
                  <a href="#">
                    Interventi
                  </a>
                </li>

                <li>
                  <a href="#">
                    Contatti
                  </a>
                </li>

              </ul>

            </div>

            {/* SERVICES */}
            <div>

              <h4 className="font-bold text-lg mb-5">
                Servizi
              </h4>

              <ul className="space-y-3 text-gray-400">

                <li>Riparazione Serrande</li>
                <li>Motori Serrande</li>
                <li>Sostituzione Serrande</li>
                <li>Pronto Intervento</li>

              </ul>

            </div>

            {/* CONTACT */}
            <div>

              <h4 className="font-bold text-lg mb-5">
                Contatti
              </h4>

              <ul className="space-y-3 text-gray-400">

                <li>02 1234 5678</li>
                <li>info@abbinatiserrande.it</li>
                <li>Milano città</li>
                <li>Disponibili H24</li>

              </ul>

            </div>

          </div>

          {/* BOTTOM */}
          <div className="pt-8 text-sm text-gray-500 flex flex-col md:flex-row justify-between gap-4">

            <p>
              © 2026 Abbinati Serrande Milano
            </p>

            <div className="flex gap-6">

              <a href="#">
                Privacy Policy
              </a>

              <a href="#">
                Cookie Policy
              </a>

            </div>

          </div>

        </div>

      </footer>
    </main>
  );
}