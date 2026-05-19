import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title:
    "Saracinesche Negozi Milano | Riparazione e Assistenza",

  description:
    "Riparazione saracinesche negozi Milano. Assistenza professionale per attività commerciali, serrande negozi e sistemi di chiusura.",

  keywords: [
    "saracinesche negozi Milano",
    "riparazione saracinesche Milano",
    "saracinesca negozio Milano",
    "serrande negozi Milano",
  ],
};

export default function SaracinescheNegoziMilanoPage() {
  return (
    <main className="bg-[#f8fafc] text-[#020617] min-h-screen">

      {/* HERO */}
      <section className="relative overflow-hidden bg-black text-white">

        <div className="absolute inset-0">

          <Image
            src="/images/services/saracinesca-negozio-milano.webp"
            alt="Saracinesche negozi Milano"
            fill
            priority
            className="object-cover opacity-40"
          />

        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-32">

          <div className="max-w-3xl">

            <p className="text-[#f0b429] uppercase tracking-[0.2em] font-bold mb-6 text-sm">
              Saracinesche Negozi Milano
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
              Riparazione Saracinesche Negozi Milano
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Assistenza professionale per saracinesche,
              negozi, attività commerciali e sistemi
              di chiusura su Milano e provincia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">

              <a
                href="tel:+393395337287"
                className="bg-[#f0b429] hover:bg-[#ffcc4d] transition text-black font-black px-8 py-5 rounded-2xl text-lg flex items-center justify-center"
              >
                Chiama Subito
              </a>

              <a
                href="https://wa.me/393395337287"
                target="_blank"
                className="border border-white/20 hover:bg-white hover:text-black transition px-8 py-5 rounded-2xl text-lg flex items-center justify-center"
              >
                WhatsApp Rapido
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* CONTENT */}
      <section className="py-24">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl md:text-5xl font-black mb-10">
            Assistenza Saracinesche Commerciali a Milano
          </h2>

          <div className="space-y-8 text-lg text-gray-600 leading-relaxed">

            <p>
              Effettuiamo riparazione saracinesche
              per negozi, attività commerciali
              e locali su Milano e provincia.
            </p>

            <p>
              Interveniamo su saracinesche bloccate,
              guasti improvvisi, sistemi motorizzati,
              problemi di apertura e chiusura.
            </p>

            <p>
              Operativi con pronto intervento rapido
              per attività commerciali, showroom,
              garage e negozi in tutta Milano.
            </p>

          </div>

        </div>

      </section>

      {/* GALLERY */}
      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">

            <div className="overflow-hidden rounded-[2rem]">

              <Image
                src="/images/services/saracinesca-negozio-milano.webp"
                alt="Saracinesca negozio Milano"
                width={800}
                height={600}
                className="w-full h-[260px] object-cover"
              />

            </div>

            <div className="overflow-hidden rounded-[2rem]">

              <Image
                src="/images/gallery/saracinesca-duomo-milano.webp"
                alt="Saracinesca negozio Duomo Milano"
                width={800}
                height={600}
                className="w-full h-[260px] object-cover"
              />

            </div>

            <div className="overflow-hidden rounded-[2rem]">

              <Image
                src="/images/gallery/riparazione-serranda-brera.webp"
                alt="Riparazione saracinesca Brera Milano"
                width={800}
                height={600}
                className="w-full h-[260px] object-cover"
              />

            </div>

          </div>

        </div>

      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl md:text-5xl font-black mb-14">
            FAQ Saracinesche Negozi
          </h2>

          <div className="space-y-6">

            <div className="bg-[#f8fafc] rounded-[2rem] p-8">

              <h3 className="text-2xl font-black mb-4">
                Riparate saracinesche per negozi?
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed">
                Sì, effettuiamo riparazioni e manutenzione
                su saracinesche commerciali e sistemi
                di chiusura per negozi e attività.
              </p>

            </div>

            <div className="bg-[#f8fafc] rounded-[2rem] p-8">

              <h3 className="text-2xl font-black mb-4">
                Effettuate interventi urgenti?
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed">
                Operiamo con pronto intervento rapido
                su Milano per saracinesche bloccate
                e aperture urgenti.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-24 bg-[#020617] text-white">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8">
            Hai Problemi con una Saracinesca?
          </h2>

          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Contattaci per assistenza rapida
            su saracinesche negozi e attività commerciali.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <a
              href="tel:+393395337287"
              className="bg-[#f0b429] hover:bg-[#ffcc4d] transition text-black font-black px-8 py-5 rounded-2xl text-lg"
            >
              Chiama Subito
            </a>

            <Link
              href="/"
              className="border border-white/20 hover:bg-white hover:text-black transition px-8 py-5 rounded-2xl text-lg"
            >
              Torna alla Home
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}