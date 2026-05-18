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
        {children}
      </body>
    </html>
  );
}