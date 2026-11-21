import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title:
    "Dari Flowchart Sampai Ruang QC: Catatan Perjalanan Kuliah Informatika & UI/UX - Moch Naufal Ar Karim",
  description:
    "Catatan pengalaman nyata Moch Naufal Ar Karim, mahasiswa Informatika: belajar algoritma, titik balik semester 4 di mobile & web bisnis, meramu referensi desain, magang Diskominfo hingga eksplorasi ReactBits.",
  authors: [{ name: "Moch Naufal Ar Karim" }],
  keywords: [
    "Moch Naufal Ar Karim",
    "Learning in Public",
    "UI/UX Designer",
    "Quality Check",
    "Informatika",
    "Diskominfo",
    "ReactBits",
    "Next.js",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`dark scroll-smooth ${plusJakarta.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-[#09090B] text-[#FAFAFA] font-sans antialiased selection:bg-zinc-800 selection:text-zinc-100">
        {children}
      </body>
    </html>
  );
}
