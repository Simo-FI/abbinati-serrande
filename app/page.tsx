"use client";

import { useState } from "react";

import {
  Phone,
  MessageCircle,
  Clock3,
  ShieldCheck,
  Menu,
} from "lucide-react";

export default function Home() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <main className="bg-[#f3f4f6] text-[#111827] min-h-screen overflow-x-hidden">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

          <div className="flex items-center gap-14">

  {/* LOGO */}
  <div>

    <h2 className="text-2xl font-black tracking-tight text-white">
      ABBINATI
    </h2>

    <p className="text-xs tracking-[0.3em] text-gray-300">
      SERRANDE
    </p>

  </div>

  {/* MENU */}
  <nav className="hidden lg:flex items-center gap-8 text-white font-medium">

    <a
      href="#"
      className="hover:text-[#f0b429] transition"
    >
      Home
    </a>

    <a
      href="#"
      className="hover:text-[#f0b429] transition"
    >
      Servizi
    </a>

    <a
      href="#"
      className="hover:text-[#f0b429] transition"
    >
      Chi Siamo
    </a>

    <a
      href="#"
      className="hover:text-[#f0b429] transition"
    >
      Contatti
    </a>

  </nav>

</div>

          <div className="flex items-center gap-4">

  {/* MOBILE MENU BUTTON */}
  <button
    onClick={() => setMobileMenuOpen(true)}
    className="lg:hidden bg-[#f0b429] text-black p-4 rounded-2xl shadow-2xl"
  >
    <Menu size={28} />
  </button>

  {/* DESKTOP CTA */}
  <a
    href="tel:+393000000000"
    className="hidden lg:flex bg-[#f0b429] hover:bg-[#ffcc4d] transition text-black font-bold px-6 py-4 rounded-2xl items-center gap-2 shadow-2xl"
  >
    <Phone size={18} />

    <span>
      Chiama Ora
    </span>

  </a>

</div>

        </div>
      </header>

      {/* HERO PREMIUM */}
<section className="relative min-h-[92vh] flex items-center overflow-hidden bg-black">

  {/* BACKGROUND IMAGE */}
  <div className="absolute inset-0">

    <img
      src="/hero-serranda.webp"
      alt="Serranda Milano"
     className="w-full h-full object-cover scale-105"
    />

    {/* OVERLAY */}
    <div className="absolute inset-0 bg-[#020617]/55"></div>

    {/* GRADIENT */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/95 via-[#020617]/75 to-[#020617]/20"></div>

  </div>

  {/* CONTENT */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">

    <div className="max-w-2xl">

      <div className="inline-flex items-center gap-3 bg-white/10 border border-white/10 backdrop-blur px-5 py-3 rounded-full mb-8">

  <div className="w-2 h-2 rounded-full bg-[#f0b429]"></div>

  <p className="text-[#f0b429] font-bold uppercase tracking-[0.15em] text-sm">
    Pronto Intervento Serrande Milano H24
  </p>

</div>

      <h1 className="text-white text-5xl md:text-7xl xl:text-[88px] font-black leading-[0.92] tracking-tight mb-8">
        Riparazione Serrande e Saracinesche a Milano
      </h1>

      <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-12 max-w-xl">
        Interventi rapidi su serrande bloccate,
        saracinesche, serrande elettriche
        e motori guasti.
        Operativi su tutta Milano, 24 ore su 24.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-14">

  <a
    href="tel:+393357988607"
    className="bg-[#f0b429] hover:bg-[#ffcc4d] transition text-black font-black px-9 py-5 rounded-2xl flex items-center justify-center gap-3 shadow-[0_20px_60px_rgba(240,180,41,0.35)] text-lg"
  >
    <Phone size={22} />
    Chiama Ora
  </a>

  <a
    href="https://wa.me/393357988607"
    target="_blank"
    className="border border-white/15 bg-white/5 backdrop-blur hover:bg-white hover:text-black transition text-white font-bold px-9 py-5 rounded-2xl flex items-center justify-center gap-3 text-lg"
  >
    <MessageCircle size={22} />
    WhatsApp
  </a>

</div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white">

        <div className="border border-white/10 bg-white/5 backdrop-blur p-5 rounded-2xl">

          <Clock3 className="text-[#f0b429] mb-4" />

          <h3 className="font-bold mb-2">
            Intervento Rapido
          </h3>

          <p className="text-sm text-gray-400">
            Arrivo rapido su Milano
          </p>

        </div>

        <div className="border border-white/10 bg-white/5 backdrop-blur p-5 rounded-2xl">

          <ShieldCheck className="text-[#f0b429] mb-4" />

          <h3 className="font-bold mb-2">
            Disponibili H24
          </h3>

          <p className="text-sm text-gray-400">
            Assistenza continua
          </p>

        </div>

        <div className="border border-white/10 bg-white/5 backdrop-blur p-5 rounded-2xl">

          <ShieldCheck className="text-[#f0b429] mb-4" />

          <h3 className="font-bold mb-2">
            Tecnici Esperti
          </h3>

          <p className="text-sm text-gray-400">
            20+ anni esperienza
          </p>

        </div>

        <div className="border border-white/10 bg-white/5 backdrop-blur p-5 rounded-2xl">

          <ShieldCheck className="text-[#f0b429] mb-4" />

          <h3 className="font-bold mb-2">
            Prezzi Chiari
          </h3>

          <p className="text-sm text-gray-400">
            Preventivi trasparenti
          </p>

        </div>

      </div>

    </div>

  </div>
  {/* TRUST BAR */}
  <div className="relative z-10 mt-20">

    <div className="max-w-6xl mx-auto px-4">

      <div className="grid grid-cols-2 md:grid-cols-4 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur">

        <div className="p-4 md:p-8 border-b md:border-b-0 md:border-r border-white/10">

          <p className="text-[#f0b429] text-xl md:text-3xl font-black mb-2">
            20+
          </p>

          <p className="text-white font-semibold">
            Anni di esperienza
          </p>

        </div>

        <div className="p-4 md:p-8 border-b md:border-b-0 md:border-r border-white/10">

          <p className="text-[#f0b429] text-xl md:text-3xl font-black mb-2">
            H24
          </p>

          <p className="text-white font-semibold">
            Disponibilità continua
          </p>

        </div>

        <div className="p-4 md:p-8 md:border-r border-white/10">

          <p className="text-[#f0b429] text-xl md:text-3xl font-black mb-2">
            Milano
          </p>

          <p className="text-white font-semibold">
            Operativi in città
          </p>

        </div>

        <div className="p-4 md:p-8">

          <p className="text-[#f0b429] text-xl md:text-3xl
           font-black mb-2">
            Fast
          </p>

          <p className="text-white font-semibold">
            Intervento rapido
          </p>

        </div>

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

              <h3 className="text-2xl md:text-3xl font-black mb-4">
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