import Link from "next/link";
import { Wallet } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-6 py-8 md:h-24 md:flex-row md:py-0">
        <div className="flex items-center gap-2">
          <Wallet className="h-5 w-5" />
          <span className="text-sm font-medium">EVM Wallet Generator</span>
        </div>

        <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <Link href="/" className="text-xs hover:underline underline-offset-4">
            Beranda
          </Link>
          <Link
            href="/wordlist"
            className="text-xs hover:underline underline-offset-4"
          >
            Wordlist
          </Link>
          <Link
            href="/privacy-policy"
            className="text-xs hover:underline underline-offset-4"
          >
            Kebijakan Privasi
          </Link>
        </nav>

        <div className="text-xs text-center md:text-left text-muted-foreground">
          © 2025 EVM Wallet Generator. Hak Cipta Dilindungi.
        </div>
      </div>
    </footer>
  );
}
