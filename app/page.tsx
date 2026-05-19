"use client";

import { useState } from "react";
import Image from "next/image";

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
    <main className="bg-[#f3f4f6] text-[#111827] min-h-screen overflow-x-hidden scroll-smooth">
{/* MOBILE MENU DRAWER */}
{mobileMenuOpen && (

  <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm lg:hidden">

    <div className="absolute top-0 right-0 h-full w-[85%] bg-[#020617] border-l border-white/10 p-8 flex flex-col">

      {/* TOP */}
      <div className="flex items-center justify-between mb-12">

        <div>

          <h2 className="text-2xl font-black tracking-tight text-white">
            ABBINATI
          </h2>

          <p className="text-xs tracking-[0.3em] text-gray-400">
            SERRANDE
          </p>

        </div>

        <button
          onClick={() => setMobileMenuOpen(false)}
          className="text-white text-4xl leading-none"
        >
          ×
        </button>

      </div>

      {/* MENU LINKS */}
      <div className="flex flex-col gap-6 text-white text-2xl font-bold">

        <a
          href="#home"
          onClick={() => setMobileMenuOpen(false)}
          className="hover:text-[#f0b429] transition"
        >
          Home
        </a>

        <a
          href="#servizi"
          onClick={() => setMobileMenuOpen(false)}
          className="hover:text-[#f0b429] transition"
        >
          Servizi
        </a>

        <a
          href="#servizi"
          onClick={() => setMobileMenuOpen(false)}
          className="hover:text-[#f0b429] transition"
        >
          Chi Siamo
        </a>

        <a
          href="#contatti"
          onClick={() => setMobileMenuOpen(false)}
          className="hover:text-[#f0b429] transition"
        >
          Contatti
        </a>

      </div>

      {/* CTA */}
      <div className="mt-auto">

        <a
          href="tel:+393395337287"
          className="bg-[#f0b429] text-black font-black rounded-2xl px-6 py-5 flex items-center justify-center gap-3 text-lg"
        >
          <Phone size={22} />
          Chiama Subito
        </a>

      </div>

    </div>

  </div>

)}
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
      href="#home"
      className="hover:text-[#f0b429] transition"
    >
      Home
    </a>

    <a
      href="#servizi"
      className="hover:text-[#f0b429] transition"
    >
      Servizi
    </a>

    <a
      href="#servizi"
      className="hover:text-[#f0b429] transition"
    >
      Chi Siamo
    </a>

    <a
      href="#contatti"
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
    href="tel:+393395337287"
    className="hidden lg:flex bg-[#f0b429] hover:bg-[#ffcc4d] transition text-black font-bold px-6 py-4 rounded-2xl items-center gap-2 shadow-2xl"
  >
    <Phone size={18} />

    <span>
      Chiama subito
    </span>

  </a>

</div>

        </div>
      </header>

      {/* HERO PREMIUM */}
<section
  id="home"
  className="relative min-h-[92vh] flex items-center overflow-hidden bg-black"
>

  {/* BACKGROUND IMAGE */}
  <div className="absolute inset-0">

    <Image
  src="/hero-serranda.webp"
  alt="Riparazione serrande Milano"
  fill
  priority
  className="object-cover scale-105"
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
    href="tel:+393395337287"
    className="bg-[#f0b429] hover:bg-[#ffcc4d] transition text-black font-black px-9 py-5 rounded-2xl flex items-center justify-center gap-3 shadow-[0_20px_60px_rgba(240,180,41,0.35)] text-lg"
  >
    <Phone size={22} />
    Chiama subito
  </a>

  <a
    href="https://wa.me/393395337287"
    target="_blank"
    className="border border-white/15 bg-white/5 backdrop-blur hover:bg-white hover:text-black transition text-white font-bold px-9 py-5 rounded-2xl flex items-center justify-center gap-3 text-lg"
  >
    <MessageCircle size={22} />
    WhatsApp rapido
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
      <section
  id="servizi"
  className="py-24 bg-white"
>

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
                <Image
  src="/images/services/serranda-bloccata-milano.webp"
  alt="Riparazione serranda bloccata Milano"
  width={800}
  height={600}
  className="w-full h-[260px] object-cover"
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
                <Image
  src="/images/services/motore-serranda-milano.webp"
  alt="Riparazione motore serranda Milano"
  width={800}
  height={600}
  className="w-full h-[260px] object-cover"
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
                <Image
  src="/images/services/saracinesca-negozio-milano.webp"
  alt="Saracinesca negozio Milano"
  width={800}
  height={600}
  className="w-full h-[260px] object-cover"
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
                <Image
  src="/images/services/pronto-intervento-serrande-milano.webp"
  alt="Pronto intervento serrande Milano"
  width={800}
  height={600}
  className="w-full h-[260px] object-cover"
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
                  href="tel:+393395337287"
                  className="bg-[#f0b429] hover:opacity-90 transition text-black font-bold px-8 py-5 rounded-2xl flex items-center justify-center gap-3 text-lg"
                >
                  <Phone size={22} />
                  Chiama subito
                </a>

                <a
                  href="https://wa.me/393395337287"
                  target="_blank"
                  className="border border-white/20 hover:bg-white hover:text-black transition font-bold px-8 py-5 rounded-2xl flex items-center justify-center gap-3 text-lg"
                >
                  <MessageCircle size={22} />
                  WhatsApp rapido
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>
      {/* MOBILE STICKY CTA */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 flex gap-3 z-50 md:hidden">

        <a
          href="tel:+393395337287"
          className="flex-1 bg-[#111827] text-white rounded-2xl py-4 font-bold flex items-center justify-center gap-2"
        >
          <Phone size={20} />
          Chiama
        </a>

        <a
          href="https://wa.me/393395337287"
          target="_blank"
          className="flex-1 bg-[#f0b429] text-black rounded-2xl py-4 font-bold flex items-center justify-center gap-2"
        >
          <MessageCircle size={20} />
          WhatsApp rapido
        </a>

      </div>
      {/* SEO CONTENT */}
<section className="py-24 bg-white">

  <div className="max-w-5xl mx-auto px-6">

    <div className="mb-16">

      <p className="text-[#f0b429] font-bold uppercase tracking-[0.15em] mb-4 text-sm">
        Riparazione Serrande Milano
      </p>

      <h2 className="text-4xl md:text-6xl font-black leading-tight text-[#020617] mb-8">
        Pronto Intervento Serrande e Saracinesche a Milano H24
      </h2>

      <p className="text-lg text-gray-600 leading-relaxed mb-6">
        Abbinati Serrande opera su Milano e provincia con
        interventi rapidi per riparazione serrande bloccate,
        saracinesche per negozi, motori serrande e automazioni.
        Effettuiamo pronto intervento H24 per attività commerciali,
        garage, negozi e abitazioni private.
      </p>

      <p className="text-lg text-gray-600 leading-relaxed mb-6">
        Interveniamo su serrande manuali ed elettriche,
        sostituzione molle serrande, riparazione motori,
        sblocco serrande e manutenzione saracinesche
        su tutta Milano.
      </p>

      <p className="text-lg text-gray-600 leading-relaxed">
        Operativi in zone come Porta Romana, Loreto,
        Città Studi, Navigli, Brera, Duomo e Milano Centrale
        con assistenza professionale e interventi rapidi.
      </p>

    </div>

  </div>

</section>
      {/* GALLERY */}
<section className="py-24 bg-[#f8fafc]">

  <div className="max-w-7xl mx-auto px-6">

    {/* TITLE */}
    <div className="max-w-3xl mb-16">

      <p className="text-[#f0b429] font-bold uppercase tracking-[0.15em] mb-4 text-sm">
        Lavori Eseguiti
      </p>

      <h2 className="text-4xl md:text-6xl font-black leading-tight text-[#020617] mb-6">
        Interventi Recenti a Milano
      </h2>

      <p className="text-lg text-gray-600 leading-relaxed">
        Alcuni interventi reali effettuati su serrande,
        saracinesche e motori a Milano e provincia.
      </p>

    </div>

    {/* GRID */}
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">

      {/* IMAGE 1 */}
      <div className="group overflow-hidden rounded-[2rem]">

        <Image
  src="/images/gallery/riparazione-serranda-porta-romana.webp"
  alt="Riparazione serranda Porta Romana Milano"
  width={800}
  height={600}
  className="w-full h-[260px] object-cover transition duration-500 group-hover:scale-110"
/>

      </div>

      {/* IMAGE 2 */}
      <div className="group overflow-hidden rounded-[2rem]">

        <Image
  src="/images/gallery/motore-serranda-navigli.webp"
  alt="Motore serranda Navigli Milano"
  width={800}
  height={600}
  className="w-full h-[260px] object-cover transition duration-500 group-hover:scale-110"
/>

      </div>

      {/* IMAGE 3 */}
      <div className="group overflow-hidden rounded-[2rem]">

        <Image
  src="/images/gallery/saracinesca-duomo-milano.webp"
  alt="Saracinesca Duomo Milano"
  width={800}
  height={600}
  className="w-full h-[260px] object-cover transition duration-500 group-hover:scale-110"
/>

      </div>

      {/* IMAGE 4 */}
      <div className="group overflow-hidden rounded-[2rem]">

        <Image
  src="/images/gallery/pronto-intervento-citta-studi.webp"
  alt="Pronto intervento serrande Città Studi Milano"
  width={800}
  height={600}
  className="w-full h-[260px] object-cover transition duration-500 group-hover:scale-110"
/>

      </div>

      {/* IMAGE 5 */}
      <div className="group overflow-hidden rounded-[2rem]">

        <Image
  src="/images/gallery/serranda-bloccata-loreto.webp"
  alt="Serranda bloccata Loreto Milano"
  width={800}
  height={600}
  className="w-full h-[260px] object-cover transition duration-500 group-hover:scale-110"
/>

      </div>

      {/* IMAGE 6 */}
      <div className="group overflow-hidden rounded-[2rem]">

        <Image
  src="/images/gallery/riparazione-serranda-porta-romana.webp"
  alt="Riparazione serranda Porta Romana Milano"
  width={800}
  height={600}
  className="w-full h-[260px] object-cover transition duration-500 group-hover:scale-110"
/>

      </div>

    </div>

  </div>

</section>
{/* FAQ */}
<section className="py-24 bg-white">

  <div className="max-w-5xl mx-auto px-6">

    <div className="mb-16">

      <p className="text-[#f0b429] font-bold uppercase tracking-[0.15em] mb-4 text-sm">
        FAQ Serrande Milano
      </p>

      <h2 className="text-4xl md:text-6xl font-black leading-tight text-[#020617] mb-8">
        Domande Frequenti
      </h2>

    </div>

    <div className="space-y-6">

      {/* FAQ 1 */}
      <div className="bg-[#f8fafc] rounded-[2rem] p-8">

        <h3 className="text-2xl font-black text-[#020617] mb-4">
          Quanto costa riparare una serranda a Milano?
        </h3>

        <p className="text-gray-600 leading-relaxed text-lg">
          Il costo dipende dal tipo di guasto, dal motore,
          dalla serranda e dall’intervento necessario.
          Effettuiamo sopralluoghi e preventivi chiari
          per riparazione serrande e saracinesche a Milano.
        </p>

      </div>

      {/* FAQ 2 */}
      <div className="bg-[#f8fafc] rounded-[2rem] p-8">

        <h3 className="text-2xl font-black text-[#020617] mb-4">
          Effettuate pronto intervento serrande H24?
        </h3>

        <p className="text-gray-600 leading-relaxed text-lg">
          Sì, operiamo con pronto intervento H24
          per serrande bloccate, saracinesche,
          motori serrande e aperture urgenti
          su Milano e provincia.
        </p>

      </div>

      {/* FAQ 3 */}
      <div className="bg-[#f8fafc] rounded-[2rem] p-8">

        <h3 className="text-2xl font-black text-[#020617] mb-4">
          Intervenite anche su serrande elettriche?
        </h3>

        <p className="text-gray-600 leading-relaxed text-lg">
          Interveniamo su serrande elettriche,
          automazioni, motori serrande,
          centraline e sistemi di apertura
          per negozi, garage e abitazioni.
        </p>

      </div>

      {/* FAQ 4 */}
      <div className="bg-[#f8fafc] rounded-[2rem] p-8">

        <h3 className="text-2xl font-black text-[#020617] mb-4">
          In quali zone di Milano operate?
        </h3>

        <p className="text-gray-600 leading-relaxed text-lg">
          Operiamo su tutta Milano:
          Navigli, Brera, Loreto,
          Porta Romana, Duomo,
          Città Studi, Milano Centrale
          e provincia.
        </p>

      </div>

    </div>

  </div>

</section>
      {/* FOOTER */}
<footer
  id="contatti"
  className="bg-[#020617] border-t border-white/10"
>

  <div className="max-w-7xl mx-auto px-6 py-16">

    <div className="grid lg:grid-cols-3 gap-12">

      {/* BRAND */}
      <div>

        <h2 className="text-3xl font-black text-white mb-2">
          ABBINATI
        </h2>

        <p className="text-sm tracking-[0.3em] text-gray-400 mb-6">
          SERRANDE
        </p>

        <p className="text-gray-400 leading-relaxed max-w-md">
          Pronto intervento serrande e saracinesche a Milano.
          Operativi su tutta Milano con interventi rapidi,
          riparazioni professionali e assistenza H24.
        </p>

      </div>

      {/* CONTACTS */}
      <div>

        <h3 className="text-white font-bold text-xl mb-6">
          Contatti
        </h3>

        <div className="flex flex-col gap-4 text-gray-400">

          <a
            href="tel:+393395337287"
            className="hover:text-[#f0b429] transition"
          >
            +39 339 533 7287
          </a>

          <a
            href="https://wa.me/393395337287"
            target="_blank"
            className="hover:text-[#f0b429] transition"
          >
            WhatsApp rapido
          </a>

          <p>
            Via Padova 19<br />
            20127 Milano
          </p>

        </div>

      </div>

      {/* COMPANY */}
      <div>

        <h3 className="text-white font-bold text-xl mb-6">
          Azienda
        </h3>

        <div className="flex flex-col gap-4 text-gray-400">

          <p>
            Abbinati Srl
          </p>

          <p>
            P.IVA 03694660964
          </p>

          <p>
            Operativi H24
          </p>

          <p>
            Milano e provincia
          </p>

        </div>

      </div>

    </div>

    {/* BOTTOM */}
    <div className="border-t border-white/10 mt-14 pt-8 flex flex-col md:flex-row gap-4 justify-between text-sm text-gray-500">

      <p>
        © 2026 Abbinati Srl - Tutti i diritti riservati
      </p>

      <p>
        Pronto Intervento Serrande Milano
      </p>

    </div>

  </div>

</footer>
    </main>
  );
}