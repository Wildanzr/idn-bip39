import type { Metadata } from "next";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "Kebijakan Privasi | EVM Wallet Generator",
  description:
    "Pelajari bagaimana kami melindungi data Anda di EVM Wallet Generator. Kebijakan privasi kami menjelaskan praktik keamanan dan perlindungan data yang kami terapkan untuk melindungi privasi pengguna saat menggunakan layanan pembuatan wallet berbasis EVM.",
  keywords: [
    "Kebijakan Privasi",
    "Privasi EVM Wallet",
    "Keamanan data wallet",
    "Perlindungan data crypto",
    "Kebijakan keamanan wallet",
    "Privasi blockchain",
    "Kerahasiaan seed phrase",
    "Perlindungan pengguna crypto",
    "Privasi EVM",
    "Keamanan wallet Ethereum",
    "Kebijakan data wallet",
    "Perlindungan privasi blockchain",
    "Keamanan BIP39",
    "Hukum privasi crypto Indonesia",
    "Penanganan data wallet",
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
    title: "Kebijakan Privasi | EVM Wallet Generator",
    description:
      "Pelajari bagaimana kami melindungi data Anda di EVM Wallet Generator. Kebijakan privasi kami menjelaskan praktik keamanan dan perlindungan data untuk melindungi privasi pengguna.",
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
    title: "Kebijakan Privasi | EVM Wallet Generator",
    description:
      "Pelajari bagaimana kami melindungi data Anda di EVM Wallet Generator. Kebijakan privasi kami menjelaskan praktik keamanan dan perlindungan data yang kami terapkan untuk melindungi privasi pengguna saat menggunakan layanan pembuatan wallet berbasis EVM.",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/privacy-policy`,
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Fragment>{children}</Fragment>;
}
