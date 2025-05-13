import type { Metadata } from "next";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "Wordlist BIP39 Indonesia | EVM Wallet Generator",
  description:
    "Daftar lengkap kata-kata BIP39 dalam Bahasa Indonesia untuk pembuatan seed phrase yang aman. Gunakan wordlist resmi untuk membuat dan memulihkan wallet Ethereum dan blockchain EVM lainnya.",
  keywords: [
    "Wordlist BIP39",
    "Kata BIP39 Indonesia",
    "Seed phrase Indonesia",
    "Daftar kata wallet",
    "Wordlist Ethereum",
    "BIP39 bahasa Indonesia",
    "Kata pemulihan wallet",
    "Recovery phrase",
    "Mnemonic BIP39",
    "Frasa benih",
    "Kata kunci wallet",
    "Daftar kata kriptografi",
    "Standar BIP39",
    "Wordlist EVM",
    "Keamanan wallet",
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
    title: "Wordlist BIP39 Indonesia | EVM Wallet Generator",
    description:
      "Daftar lengkap kata-kata BIP39 dalam Bahasa Indonesia untuk pembuatan seed phrase yang aman. Gunakan wordlist resmi untuk membuat dan memulihkan wallet Ethereum dan blockchain EVM lainnya.",
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
    title: "Wordlist BIP39 Indonesia | EVM Wallet Generator",
    description:
      "Daftar lengkap kata-kata BIP39 dalam Bahasa Indonesia untuk pembuatan seed phrase yang aman. Gunakan wordlist resmi untuk membuat dan memulihkan wallet Ethereum dan blockchain EVM lainnya.",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/wordlist`,
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
