import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EVM Wallet Generator | Buat Wallet Ethereum dengan Standar BIP39",
  description:
    "Buat wallet Ethereum dan blockchain EVM lainnya dengan aman menggunakan standar BIP39 dalam bahasa Indonesia. Kompatibel dengan semua blockchain berbasis EVM seperti Ethereum, Binance Smart Chain, Polygon, dan lainnya.",
  keywords: [
    "EVM Wallet Generator",
    "Wallet Ethereum",
    "Standar BIP39",
    "BIP39 Indonesia",
    "Blockchain EVM",
    "Binance Smart Chain",
    "Polygon",
    "Wallet Crypto",
    "Keamanan Wallet",
    "Seed phrase Indonesia",
    "Buat wallet crypto",
    "Enkripsi tingkat tinggi",
    "Web3 Indonesia",
    "Cryptocurrency wallet",
    "Dompet digital blockchain",
  ],
  creator: "EVM Wallet Generator",
  authors: {
    name: "EVM Wallet Generator",
    url: process.env.NEXT_PUBLIC_APP_URL,
  },
  publisher: "EVM Wallet Generator",
  applicationName: "EVM Wallet Generator",
  twitter: {
    card: "summary_large_image",
    title: "EVM Wallet Generator | Buat Wallet Ethereum dengan Standar BIP39",
    description:
      "Buat wallet Ethereum dan blockchain EVM lainnya dengan aman menggunakan standar BIP39 dalam bahasa Indonesia. Kompatibel dengan semua blockchain berbasis EVM.",
    creator: "evmwalletgen",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL}/idn-bip39.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
  openGraph: {
    title: "EVM Wallet Generator | Buat Wallet Ethereum dengan Standar BIP39",
    description:
      "Buat wallet Ethereum dan blockchain EVM lainnya dengan aman menggunakan standar BIP39 dalam bahasa Indonesia. Kompatibel dengan semua blockchain berbasis EVM seperti Ethereum, Binance Smart Chain, Polygon, dan lainnya.",
    url: `${process.env.NEXT_PUBLIC_APP_URL}`,
    siteName: "EVM Wallet Generator",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL}/idn-bip39.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
