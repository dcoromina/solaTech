import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/section-header";

export default function SolaClubPage() {
  return (
    <div className="flex flex-col bg-gray-900 min-h-screen">
      <header className="w-full sticky top-0 z-50">
        <Navbar />
      </header>
      <main className="flex-1">
        {/* Breadcrumbs */}
        <div className="py-3 border-b border-white/10 bg-gray-900/60 sticky top-[64px] z-40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="text-sm text-gray-400">
              <ol className="flex items-center gap-2">
                <li>
                  <Link href="/" prefetch className="hover:text-white">Home</Link>
                </li>
                <li aria-hidden="true" className="text-gray-500">/</li>
                <li className="text-white">SolaClub</li>
              </ol>
            </nav>
          </div>
        </div>
        {/* Hero */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <span className="px-6 py-3 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full text-green-300 font-semibold tracking-wide text-sm uppercase border border-green-500/30 inline-block backdrop-blur-sm">
                  Coaches & Communities
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Grow Your Community with
                  <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"> SolaClub</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                  Plan programs, manage clients, and deliver premium content—all in one hub.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" prefetch className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-xl hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl" role="button">
                    Get Started
                  </Link>
                  <Link href="/about" prefetch className="px-8 py-4 border-2 border-green-500/30 text-green-300 font-semibold rounded-xl hover:bg-green-500/10 transition-all duration-300" role="button">
                    Learn More
                  </Link>
                </div>
                {/* Store badges */}
                <div className="flex sm:items-center justify-start flex-row flex-wrap gap-3">
                  <button aria-label="Download on the App Store" className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white hover:bg-white/10 transition-colors shadow-sm">
                    <Image src="/icons/apple.svg" alt="Apple" width={24} height={24} className="w-6 h-6" />
                    <div className="flex flex-col leading-tight text-left">
                      <span className="text-[10px] uppercase tracking-wide text-gray-300">Download on the</span>
                      <span className="text-sm font-semibold">App Store</span>
                    </div>
                  </button>
                  <button aria-label="Get it on Google Play" className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white hover:bg-white/10 transition-colors shadow-sm">
                    <Image src="/icons/google-play.svg" alt="Google Play" width={24} height={24} className="w-6 h-6" />
                    <div className="flex flex-col leading-tight text-left">
                      <span className="text-[10px] uppercase tracking-wide text-gray-300">Get it on</span>
                      <span className="text-sm font-semibold">Google Play</span>
                    </div>
                  </button>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 backdrop-blur-sm border border-gray-700/50">
                  <Image
                    src="/FoodApp.jpg"
                    alt="SolaClub App"
                    width={600}
                    height={400}
                    priority
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="rounded-2xl shadow-2xl h-[500px] w-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader title="What You Get" subtitle="Built to scale your coaching business." align="left" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {[
                { title: "Programs & Content", desc: "Publish workouts, challenges, and premium content." },
                { title: "Client Management", desc: "Track progress, chat, and manage memberships." },
                { title: "Community & Events", desc: "Host events and keep your members engaged." },
                { title: "Integrations", desc: "Sync with Apple Health, Strava, and more." },
              ].map((f, i) => (
                <div key={i} className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-sm p-8 border border-white/10 shadow-lg">
                  <h3 className="text-xl font-semibold text-white mb-3">{f.title}</h3>
                  <p className="text-gray-300">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
