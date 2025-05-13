import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PrivacyPolicy() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 max-w-3xl mx-auto">
            <div className="space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Kebijakan Privasi
                </h1>
                <p className="text-slate-700 dark:text-slate-400">
                  Terakhir diperbarui: 13 Mei 2025
                </p>
              </div>

              <div className="space-y-6 text-slate-700 dark:text-slate-400">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Pendahuluan</h2>
                  <p>
                    EVM Wallet Generator (&quot;kami&quot;, &quot;kita&quot;,
                    atau &quot;aplikasi kami&quot;) berkomitmen untuk melindungi
                    privasi Anda. Kebijakan Privasi ini menjelaskan bagaimana
                    kami mengumpulkan, menggunakan, dan melindungi informasi
                    Anda saat Anda menggunakan layanan kami.
                  </p>
                </div>

                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">
                    Informasi yang Kami Kumpulkan
                  </h2>
                  <p>
                    <strong>
                      Kami tidak mengumpulkan atau menyimpan seed phrase, kunci
                      pribadi, atau informasi wallet Anda.
                    </strong>
                    Semua proses pembuatan wallet dilakukan secara lokal di
                    perangkat Anda.
                  </p>
                </div>

                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Keamanan Data</h2>
                  <p>
                    Keamanan data Anda sangat penting bagi kami. Aplikasi kami
                    dirancang dengan prinsip keamanan:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      Semua proses pembuatan wallet dilakukan secara lokal di
                      perangkat Anda
                    </li>
                    <li>
                      Kami tidak menyimpan seed phrase atau kunci pribadi Anda
                      di server kami
                    </li>
                    <li>
                      Kami menggunakan enkripsi untuk melindungi data yang
                      ditransmisikan
                    </li>
                    <li>
                      Aplikasi kami mengikuti praktik keamanan terbaik industri
                    </li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Penggunaan Cookies</h2>
                  <p>
                    Aplikasi kami tidak menggunakan cookies atau teknologi
                    pelacakan lainnya. Semua proses dilakukan secara lokal di
                    perangkat Anda, dan kami tidak melacak atau mengumpulkan
                    data tentang penggunaan aplikasi oleh pengguna.
                  </p>
                </div>

                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">
                    Perubahan pada Kebijakan Privasi
                  </h2>
                  <p>
                    Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke
                    waktu. Kami akan memberi tahu Anda tentang perubahan apa pun
                    dengan memposting Kebijakan Privasi baru di halaman ini dan
                    memperbarui tanggal &quot;terakhir diperbarui&quot; di
                    bagian atas halaman ini.
                  </p>
                </div>

                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Hubungi Kami</h2>
                  <p>
                    Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini,
                    silakan hubungi kami di:
                  </p>
                  <p>
                    Email:{" "}
                    <a
                      className="text-blue-500 underline"
                      href="mailto:hellodanzr@gmail.com"
                    >
                      hellodanzr@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <Link href="/">
                  <Button variant="outline">Kembali ke Beranda</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
