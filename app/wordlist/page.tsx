"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { BIP39_WORDLIST } from "@/constants/bip39";
import { useState } from "react";

const WordlistPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredWords = searchTerm
    ? BIP39_WORDLIST.filter((word) => word.includes(searchTerm.toLowerCase()))
    : BIP39_WORDLIST;

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <section className="container mx-auto px-4 py-8 max-w-6xl">
        <h1 className="text-3xl font-bold mb-2">
          Daftar Kata BIP39 Bahasa Indonesia
        </h1>

        <p className="mb-6 text-gray-600">
          Berikut adalah daftar lengkap 2048 kata bahasa Indonesia yang
          digunakan untuk frasa seed mnemonik BIP39.
        </p>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
          <p className="text-sm">
            Kredit: Daftar kata BIP39 bahasa Indonesia ini disusun oleh{" "}
            <a
              href="https://github.com/Adiset/Mnemonik-Bahasa-Indonesia/blob/master/Mnemonik.txt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Adiset di GitHub
            </a>
          </p>
        </div>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Cari kata..."
            className="w-full p-2 border border-gray-300 rounded"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {filteredWords.map((word, index) => (
              <div
                key={index}
                className="p-2 bg-gray-50 rounded text-sm hover:bg-gray-100 transition-colors"
              >
                <span className="text-gray-500 mr-2">
                  {BIP39_WORDLIST.indexOf(word) + 1}.
                </span>
                {word}
              </div>
            ))}
          </div>

          {filteredWords.length === 0 && (
            <p className="text-center py-4">
              Tidak ada kata yang cocok dengan &quot;{searchTerm}&quot;
            </p>
          )}

          <div className="mt-6 text-sm text-gray-500">
            <p>Total kata: {BIP39_WORDLIST.length}</p>
            {searchTerm && <p>Kata yang cocok: {filteredWords.length}</p>}
          </div>
        </div>

        <div className="mt-8 text-sm text-gray-600">
          <h2 className="text-xl font-semibold mb-2">
            Tentang Daftar Kata BIP39
          </h2>
          <p className="mb-2">
            BIP39 (Bitcoin Improvement Proposal 39) mendefinisikan metode untuk
            menghasilkan frasa seed mnemonik menggunakan daftar kata. Frasa ini
            dapat digunakan untuk membuat dompet deterministik untuk mata uang
            kripto.
          </p>
          <p>
            Memiliki daftar kata dalam bahasa asli Anda dapat memudahkan untuk
            mencatat, mengingat, dan memverifikasi frasa seed Anda.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default WordlistPage;
