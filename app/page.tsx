import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import GenerateWallet from "./_components/generate-wallet";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  EVM Wallet Generator
                </h1>
                <p className="mx-auto max-w-[700px] text-slate-700 md:text-xl dark:text-slate-400">
                  Buat wallet Ethereum dan blockchain EVM lainnya dengan aman
                  menggunakan standar BIP39 dalam bahasa Indonesia.
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg" asChild>
                  <a href="#generate-wallet" className="scroll-smooth">
                    Buat Wallet Sekarang
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Generate Wallet Section */}
        <section
          id="generate-wallet"
          className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900/50"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Buat Wallet Anda
                </h2>
                <p className="mx-auto max-w-[700px] text-slate-700 md:text-lg dark:text-slate-400">
                  Generate wallet Ethereum dan blockchain EVM lainnya dengan
                  cepat dan aman
                </p>
              </div>
            </div>
            <GenerateWallet />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
