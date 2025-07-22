import type { Metadata } from "next";
import { Lobster, Roboto_Condensed } from 'next/font/google';
import "./globals.css";

const lobster = Lobster({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-lobster'
});

const robotoCondensed = Roboto_Condensed({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto-condensed'
});

export const metadata: Metadata = {
  title: "Josué Soares | Desenvolvedor Web",
  description: "Portfólio profissional",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={`${lobster.variable} ${robotoCondensed.variable}`}>
      <body className="font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}