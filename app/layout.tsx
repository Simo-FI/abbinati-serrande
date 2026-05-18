import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Riparazione Serrande Milano | Pronto Intervento H24 | Abbinati Serrande",
  description:
    "Pronto intervento serrande Milano H24. Riparazione serrande bloccate, saracinesche, motori e automazioni. Interventi rapidi su Milano città.",
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