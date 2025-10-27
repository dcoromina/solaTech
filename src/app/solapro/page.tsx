import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/section-header";

export default function SolaProPage() {
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
                <li className="text-white">SolaPro</li>
              </ol>
            </nav>
          </div>
        </div>
        {/* Hero */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <span className="px-6 py-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full text-blue-300 font-semibold tracking-wide text-sm uppercase border border-blue-500/30 inline-block backdrop-blur-sm">
                  For Health Professionals
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Deliver Better Care with
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> SolaPro</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                  A toolkit for clinics and practitioners to streamline care and operations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" prefetch className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl" role="button">
                    Book a Demo
                  </Link>
                  <Link href="/about" prefetch className="px-8 py-4 border-2 border-blue-500/30 text-blue-300 font-semibold rounded-xl hover:bg-blue-500/10 transition-all duration-300" role="button">
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="relative group order-first lg:order-last">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 backdrop-blur-sm border border-gray-700/50">
                  <Image
                    src="/dashboard.png"
                    alt="SolaPro"
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

        {/* Capabilities */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader title="Capabilities" subtitle="Everything you need to run your practice." align="left" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {[
                { title: "Patient Management", desc: "Records, notes, plans, and outcomes in one place." },
                { title: "Scheduling & Billing", desc: "Appointments, reminders, payments, and insurance." },
                { title: "Collaboration", desc: "Secure messaging and team workflows." },
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
