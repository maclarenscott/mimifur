import type { Metadata } from "next";
import { Inter, Libre_Franklin } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
});

const libreFranklin = Libre_Franklin({
  subsets: ['latin'],
  variable: '--font-libre-franklin'
});

export const metadata: Metadata = {
  title: "Mimifur Technologies Limited | Canadian Software Solutions",
  description: "Professional software solutions provider specializing in government contracts. Based in Canada.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${libreFranklin.variable} scroll-smooth`}>
      <body className="font-inter bg-white text-gray-900">
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
