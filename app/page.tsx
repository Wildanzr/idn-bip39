import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Wallet, Key } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

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
                <Button size="lg">Buat Wallet Sekarang</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Fitur Utama
                </h2>
                <p className="mx-auto max-w-[700px] text-slate-700 md:text-xl dark:text-slate-400">
                  Buat dan kelola wallet cryptocurrency dengan aman dan mudah
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                  <CardTitle className="text-lg font-medium">
                    Standar BIP39
                  </CardTitle>
                  <Key className="h-5 w-5 text-slate-500" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-700 dark:text-slate-400">
                    Menggunakan standar BIP39 untuk menghasilkan seed phrase
                    dalam bahasa Indonesia yang mudah diingat.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                  <CardTitle className="text-lg font-medium">
                    Kompatibilitas EVM
                  </CardTitle>
                  <Wallet className="h-5 w-5 text-slate-500" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-700 dark:text-slate-400">
                    Kompatibel dengan semua blockchain berbasis EVM seperti
                    Ethereum, Binance Smart Chain, Polygon, dan lainnya.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                  <CardTitle className="text-lg font-medium">
                    Keamanan Tinggi
                  </CardTitle>
                  <Shield className="h-5 w-5 text-slate-500" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-700 dark:text-slate-400">
                    Proses pembuatan wallet yang aman dengan enkripsi tingkat
                    tinggi dan tidak menyimpan data pribadi Anda.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
