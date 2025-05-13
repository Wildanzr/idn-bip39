import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full border-b bg-background">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Wallet className="h-6 w-6" />
          <span className="text-lg font-bold">EVM Wallet Generator</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
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
        <div className="ml-4">
          <Button>Buat Wallet</Button>
        </div>
      </div>
    </header>
  );
}
