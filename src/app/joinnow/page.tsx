import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

const storeButtons = [
  {
    id: "ios",
    eyebrow: "Download on the",
    label: "App Store",
    icon: "/icons/apple.svg",
    href: "https://apps.apple.com",
  },
  {
    id: "android",
    eyebrow: "Get it on",
    label: "Google Play",
    icon: "/icons/google-play.svg",
    href: "https://play.google.com/store",
  },
];

const pathways = [
  {
    title: "Start as a Club",
    description: "Launch your community hub for teams, gyms, and hybrid programs.",
    href: "/solaclub",
    badge: "Coaches & Communities",
  },
  {
    title: "Start as a Pro",
    description: "Unlock client management, premium content, and direct-to-athlete tools.",
    href: "/solapro",
    badge: "Creators & Trainers",
  },
];

export default function JoinNowPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-900 text-white">
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-gray-900/80 backdrop-blur">
        <Navbar />
      </header>

      <main className="grid flex-1 grid-cols-1 lg:grid-cols-2">
        {/* Store badges */}
        <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-blue-600/20">
          <div className="pointer-events-none absolute -left-16 top-10 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
          <div className="pointer-events-none absolute bottom-10 right-8 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="relative z-10 flex h-full flex-col justify-center gap-8 px-6 py-16 sm:px-12">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-widest text-purple-200">
              Instant Redirect
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </div>
            <div className="space-y-4">
              <p className="text-sm text-gray-300">Sola App</p>
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
                Take the experience with you.
              </h1>
              <p className="max-w-xl text-lg text-gray-200">
                Choose your store and keep coaching, measuring, and engaging your people on the go.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              {storeButtons.map((button) => (
                <Link
                  key={button.id}
                  href={button.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-6 py-4 shadow-lg shadow-indigo-900/20 transition hover:-translate-y-0.5 hover:bg-white/20"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-black/50">
                    <Image src={button.icon} alt={button.label} width={28} height={28} />
                  </span>
                  <span className="flex flex-col text-left leading-tight">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-gray-300">
                      {button.eyebrow}
                    </span>
                    <span className="text-lg font-semibold group-hover:text-white">{button.label}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Path selection */}
        <section className="flex h-full items-center border-t border-white/5 bg-gray-900/80 p-6 sm:p-12 lg:border-l lg:border-t-0">
          <div className="w-full max-w-xl space-y-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold sm:text-4xl">Pick where you want to start.</h2>
              <p className="text-base text-gray-400">
                Whether you&apos;re building a club or training one-on-one, we route you to the best onboarding experience.
              </p>
            </div>
            <div className="space-y-4">
              {pathways.map((pathway) => (
                <Link
                  key={pathway.title}
                  href={pathway.href}
                  className="group flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-purple-400/70 hover:bg-white/10"
                >
                  <span className="inline-flex w-fit rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-widest text-gray-300">
                    {pathway.badge}
                  </span>
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h3 className="text-2xl font-semibold">{pathway.title}</h3>
                      <p className="text-gray-300">{pathway.description}</p>
                    </div>
                    <span className="text-sm font-semibold text-purple-300 transition group-hover:translate-x-1 group-hover:text-purple-200">
                      Continue →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            <p className="text-sm text-gray-500">
              Need something else?{" "}
              <Link href="/contact" className="text-purple-300 underline-offset-4 hover:underline">
                Talk with our team
              </Link>
              .
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
