import Image from "next/image";
import Link from "next/link";

export default function ProntoInterventoSerrandePage() {
  return (
    <main className="bg-[#f8fafc] text-[#020617] min-h-screen">

      {/* HERO */}
      <section className="relative overflow-hidden bg-black text-white">

        <div className="absolute inset-0">

          <Image
            src="/images/services/pronto-intervento-serrande-milano.webp"
            alt="Pronto intervento serrande Milano"
            fill
            priority
            className="object-cover opacity-40"
          />

        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-32">

          <div className="max-w-3xl">

            <p className="text-[#f0b429] uppercase tracking-[0.2em] font-bold mb-6 text-sm">
              Pronto Intervento Serrande Milano
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
              Assistenza Serrande H24 Milano
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Interventi urgenti per serrande bloccate,
              saracinesche, motori e aperture immediate
              su Milano e provincia.
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
            Pronto Intervento Serrande a Milano
          </h2>

          <div className="space-y-8 text-lg text-gray-600 leading-relaxed">

            <p>
              Servizio rapido per serrande bloccate,
              saracinesche fuori asse,
              motori guasti e aperture urgenti
              su Milano e provincia.
            </p>

            <p>
              Operiamo H24 con interventi rapidi
              per negozi, garage, attività commerciali
              e abitazioni private.
            </p>

            <p>
              Interveniamo su guasti improvvisi,
              serrande elettriche e manuali,
              sistemi motorizzati e problemi
              di apertura immediata.
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
                src="/images/services/pronto-intervento-serrande-milano.webp"
                alt="Pronto intervento serrande Milano"
                width={800}
                height={600}
                className="w-full h-[260px] object-cover"
              />

            </div>

            <div className="overflow-hidden rounded-[2rem]">

              <Image
                src="/images/gallery/pronto-intervento-citta-studi.webp"
                alt="Intervento urgente serrande Milano"
                width={800}
                height={600}
                className="w-full h-[260px] object-cover"
              />

            </div>

            <div className="overflow-hidden rounded-[2rem]">

              <Image
                src="/images/gallery/serranda-bloccata-loreto.webp"
                alt="Serranda bloccata Milano"
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
            FAQ Pronto Intervento
          </h2>

          <div className="space-y-6">

            <div className="bg-[#f8fafc] rounded-[2rem] p-8">

              <h3 className="text-2xl font-black mb-4">
                Effettuate pronto intervento H24?
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed">
                Sì, operiamo con pronto intervento
                serrande H24 su Milano e provincia
                per urgenze e guasti improvvisi.
              </p>

            </div>

            <div className="bg-[#f8fafc] rounded-[2rem] p-8">

              <h3 className="text-2xl font-black mb-4">
                Intervenite anche nei weekend?
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed">
                Operiamo anche per urgenze
                su serrande e saracinesche
                nei weekend e festivi.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-24 bg-[#020617] text-white">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8">
            Hai Urgenza con una Serranda?
          </h2>

          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Contattaci subito per assistenza rapida
            su Milano e provincia.
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