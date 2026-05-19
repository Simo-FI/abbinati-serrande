import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title:
    "Motori Serrande Milano | Riparazione e Automazioni",

  description:
    "Assistenza motori serrande Milano. Riparazione motori, automazioni, centraline e sistemi elettrici per serrande e saracinesche.",

  keywords: [
    "motori serrande Milano",
    "automazioni serrande Milano",
    "riparazione motore serranda Milano",
    "motore saracinesca Milano",
  ],
};

export default function MotoriSerrandeMilanoPage() {
  return (
    <main className="bg-[#f8fafc] text-[#020617] min-h-screen">

      {/* HERO */}
      <section className="relative overflow-hidden bg-black text-white">

        <div className="absolute inset-0">

          <Image
            src="/images/services/motore-serranda-milano.webp"
            alt="Motori serrande Milano"
            fill
            priority
            className="object-cover opacity-40"
          />

        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-32">

          <div className="max-w-3xl">

            <p className="text-[#f0b429] uppercase tracking-[0.2em] font-bold mb-6 text-sm">
              Motori Serrande Milano
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
              Riparazione Motori Serrande Milano
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Assistenza professionale per motori serrande,
              automazioni e sistemi elettrici
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
            Motori Serrande e Automazioni a Milano
          </h2>

          <div className="space-y-8 text-lg text-gray-600 leading-relaxed">

            <p>
              Effettuiamo riparazione motori serrande
              e automazioni per serrande elettriche
              su Milano e provincia.
            </p>

            <p>
              Interveniamo su motori bloccati,
              sistemi di apertura guasti,
              centraline e automazioni
              per negozi, garage e abitazioni.
            </p>

            <p>
              Operativi con pronto intervento rapido
              per sostituzione motori serrande,
              manutenzione e ripristino sistemi elettrici.
            </p>

          </div>

        </div>

      </section>
{/* TECHNICAL CONTENT */}
<section className="pb-24">

  <div className="max-w-5xl mx-auto px-6">

    <div className="bg-white rounded-[2rem] p-10 md:p-14">

      <h2 className="text-4xl md:text-5xl font-black mb-8">
        Assistenza Motori Serrande e Automazioni
      </h2>

      <div className="space-y-6 text-lg text-gray-600 leading-relaxed">

        <p>
          Effettuiamo assistenza su motori serrande,
          automazioni elettriche e sistemi
          di apertura per negozi,
          garage e abitazioni private.
        </p>

        <p>
          Interveniamo su motori bloccati,
          serrande elettriche fuori asse,
          centraline guaste e problematiche
          di apertura e chiusura automatizzata.
        </p>

        <p>
          Operiamo con componenti professionali
          e interventi rapidi su Milano
          per ridurre disagi e fermo attività.
        </p>

      </div>

    </div>

  </div>

</section>
      {/* GALLERY */}
<section className="pb-24">

  <div className="max-w-7xl mx-auto px-6">

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

      <div className="overflow-hidden rounded-[2rem]">

        <Image
          src="/images/gallery/motori-serrande/motore-serranda-loreto-milano.webp"
          alt="Motore serranda Loreto Milano"
          width={800}
          height={600}
          className="w-full aspect-[4/3] object-cover rounded-[2rem]"
        />

      </div>

      <div className="overflow-hidden rounded-[2rem]">

        <Image
          src="/images/gallery/motori-serrande/automazione-serranda-milano-centro.webp"
          alt="Automazione serranda Milano centro"
          width={800}
          height={600}
          className="w-full aspect-[4/3] object-cover rounded-[2rem]"
        />

      </div>

      <div className="overflow-hidden rounded-[2rem]">

        <Image
          src="/images/gallery/motori-serrande/riparazione-motore-serranda-navigli.webp"
          alt="Riparazione motore serranda Navigli Milano"
          width={800}
          height={600}
          className="w-full aspect-[4/3] object-cover rounded-[2rem]"
        />

      </div>

      <div className="overflow-hidden rounded-[2rem]">

        <Image
          src="/images/gallery/motori-serrande/motore-serranda-porta-romana.webp"
          alt="Motore serranda Porta Romana Milano"
          width={800}
          height={600}
          className="w-full aspect-[4/3] object-cover rounded-[2rem]"
        />

      </div>

      <div className="overflow-hidden rounded-[2rem]">

        <Image
          src="/images/gallery/motori-serrande/assistenza-serranda-elettrica-milano.webp"
          alt="Assistenza serranda elettrica Milano"
          width={800}
          height={600}
          className="w-full aspect-[4/3] object-cover rounded-[2rem]"
        />

      </div>

      <div className="overflow-hidden rounded-[2rem]">

        <Image
          src="/images/gallery/motori-serrande/centralina-serranda-brera-milano.webp"
          alt="Centralina serranda Brera Milano"
          width={800}
          height={600}
          className="w-full aspect-[4/3] object-cover rounded-[2rem]"
        />

      </div>

    </div>

  </div>

</section>
      {/* FAQ */}
      <section className="py-24 bg-white">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl md:text-5xl font-black mb-14">
            FAQ Motori Serrande
          </h2>

          <div className="space-y-6">

            <div className="bg-[#f8fafc] rounded-[2rem] p-8">

              <h3 className="text-2xl font-black mb-4">
                Riparate motori serrande elettriche?
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed">
                Sì, interveniamo su motori serrande,
                automazioni e sistemi elettrici
                per serrande manuali ed elettriche.
              </p>

            </div>

            <div className="bg-[#f8fafc] rounded-[2rem] p-8">

              <h3 className="text-2xl font-black mb-4">
                Effettuate sostituzione motori?
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed">
                Effettuiamo sostituzione motori serrande
                e installazione sistemi automatizzati
                per negozi e garage.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-24 bg-[#020617] text-white">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl md:text-6xl font-black leading-tight mb-8">
            Problemi con il Motore della Serranda?
          </h2>

          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Contattaci per assistenza rapida
            su motori serrande e automazioni a Milano.
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