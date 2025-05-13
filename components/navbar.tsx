"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Wallet, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full border-b bg-background">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Wallet className="h-6 w-6" />
          <span className="text-lg font-bold">EVM Wallet Generator</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="ml-auto hidden md:flex gap-6">
          <Link
            href="/"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Beranda
          </Link>
          <Link
            href="wordlist"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Wordlist
          </Link>
          <Link
            href="/privacy-policy"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Kebijakan Privasi
          </Link>
        </nav>

        <div className="ml-auto md:ml-4">
          <Link
            href="/#generate-wallet"
            className="scroll-smooth hidden md:inline-block"
          >
            <Button className="cursor-pointer">Buat Wallet</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="ml-auto md:hidden p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-background border-t">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Beranda
            </Link>
            <Link
              href="wordlist"
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Wordlist
            </Link>
            <Link
              href="/privacy-policy"
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Kebijakan Privasi
            </Link>
            <Link
              href="/#generate-wallet"
              className="scroll-smooth"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button className="w-full cursor-pointer">Buat Wallet</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
