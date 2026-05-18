import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Riparazione Serrande Milano H24 | Abbinati Serrande",

  description:
    "Pronto intervento serrande e saracinesche a Milano. Riparazione serrande bloccate, motori, automazioni e saracinesche per negozi. Operativi H24 su Milano e provincia.",

  keywords: [
    "riparazione serrande Milano",
    "serrande Milano",
    "pronto intervento serrande Milano",
    "saracinesche Milano",
    "motore serranda Milano",
    "riparazione saracinesche Milano",
  ],

  openGraph: {
    title:
      "Riparazione Serrande Milano H24 | Abbinati Serrande",

    description:
      "Pronto intervento serrande e saracinesche a Milano. Operativi H24 su Milano e provincia.",

    url: "https://abbinatiserrande.it",

    siteName: "Abbinati Serrande",

    locale: "it_IT",

    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={inter.className}>
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Abbinati Serrande",
      image: "https://abbinatiserrande.it/favicon.png",
      url: "https://abbinatiserrande.it",
      telephone: "+393395337287",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Via Padova 19",
        addressLocality: "Milano",
        postalCode: "20127",
        addressCountry: "IT",
      },
      areaServed: "Milano",
      priceRange: "€€",
      description:
        "Pronto intervento serrande e saracinesche a Milano H24.",
    }),
  }}
/>
        {children}
      </body>
    </html>
  );
}