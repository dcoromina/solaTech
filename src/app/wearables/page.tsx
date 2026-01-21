import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { SectionHeader } from "@/components/ui/section-header";
import Image from "next/image";
import { Check, Cpu, Activity, Zap, Shield, HeartPulse } from "lucide-react";

const wearableProducts = [
  {
    category: "Fitness & Wellness",
    id: "fitness",
    products: [
      {
        name: "Sola Band",
        tagline: "Ultra-Lightweight Health Tracking",
        description: "The Sola Band is designed for athletes who need precise data without the bulk. Featuring a minimalist OLED display and multi-spectrum optical sensors.",
        image: "/public/wearable/sola_band.png",
        features: ["Heart Rate & HRV", "Sleep Stages", "O2 Saturation", "5-Day Battery"],
        gradient: "from-cyan-500/20 to-blue-500/20",
        accent: "text-cyan-400"
      },
      {
        name: "Sola Ring",
        tagline: "Discreet Daily Insights",
        description: "Crafted from aerospace-grade titanium, the Sola Ring monitors your health 24/7. It's so light you'll forget you're wearing it, yet powerful enough to predict illness.",
        image: "/public/wearable/sola_ring.png",
        features: ["Body Temperature", "Activity Tracking", "Recovery Score", "Titanium Build"],
        gradient: "from-purple-500/20 to-pink-500/20",
        accent: "text-purple-400"
      }
    ]
  },
  {
    category: "Advanced Prosthetics & Augmentation",
    id: "prosthetics",
    products: [
      {
        name: "NeuroLink Pro",
        tagline: "Neural-Feedback Bionic Limb",
        description: "A breakthrough in prosthetic technology. The NeuroLink Pro offers intuitive control through advanced neural sensors, providing lifelike movement and sensory feedback.",
        image: "/public/wearable/sola_neuro.png",
        features: ["Neural Integration", "Haptic Feedback", "Carbon Fiber Frame", "AI Motion Smoothing"],
        gradient: "from-emerald-500/20 to-teal-500/20",
        accent: "text-emerald-400"
      },
      {
        name: "GaitMaster Exo",
        tagline: "Mobility & Recovery Exoskeleton",
        description: "The GaitMaster Exo empowers individuals with mobility challenges. Its intelligent exoskeleton frame adapts to your gait, providing power and stability where needed.",
        image: "/public/wearable/sola_exo.png",
        features: ["Active Assistance", "Gait Analytics", "Adjustable Torque", "Lightweight Alloy"],
        gradient: "from-blue-500/20 to-indigo-500/20",
        accent: "text-blue-400"
      }
    ]
  }
];

const ecosystemIcons = [
  { name: "Apple Health", icon: "/icons/apple.svg" },
  { name: "Google Fit", icon: "/icons/google-play.svg" }, // Assuming this icon is reused or exists
  // Add more as needed
];

export default function WearablesPage() {
  return (
    <div className="flex flex-col bg-[#030712] min-h-screen text-white">
      <header className="w-full sticky top-0 z-50">
        <Navbar />
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full -z-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                Next-Gen <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Wearables</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Discover the frontier of health technology. From high-performance trackers to neural-integrated bionics.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Showcase */}
        {wearableProducts.map((cat) => (
          <section key={cat.id} className="py-24 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-4">{cat.category}</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {cat.products.map((product) => (
                  <div key={product.name} className="group relative">
                    <div className={`absolute -inset-1 bg-gradient-to-r ${product.gradient} rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200`}></div>
                    <div className="relative bg-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden p-8 flex flex-col h-full">
                      <div className="relative aspect-square mb-8 rounded-2xl overflow-hidden bg-black/40 p-4">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain transform group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      <div className="flex-1 space-y-4">
                        <div className="flex flex-col gap-1">
                          <h3 className="text-3xl font-bold">{product.name}</h3>
                          <span className={`${product.accent} text-sm font-medium tracking-wider uppercase`}>{product.tagline}</span>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                          {product.description}
                        </p>
                        <div className="grid grid-cols-2 gap-3 pt-4">
                          {product.features.map((feature) => (
                            <div key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                              <Check className={`w-4 h-4 ${product.accent}`} />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="mt-8 flex gap-4">
                        <button className={`flex-1 py-4 px-6 rounded-xl font-semibold bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-center`}>
                          View Specs
                        </button>
                        <button className={`flex-1 py-4 px-6 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition-all text-center shadow-lg hover:shadow-cyan-500/20`}>
                          Pre-order
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Integration Section */}
        <section className="py-24 bg-gradient-to-b from-transparent to-blue-500/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Universal Ecosystem Integration</h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Our devices work seamlessly with the platforms you already use. Keep all your health data in one place.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 items-center opacity-70 hover:opacity-100 transition-opacity">
              {/* Placeholders for ecosystem logos */}
              {["Apple Health", "Google Fit", "Oura", "WHOOP", "Strava", "Garmin"].map(name => (
                <div key={name} className="px-6 py-3 bg-white/5 rounded-full border border-white/10 text-gray-300 font-medium hover:bg-white/10 transition-colors">
                  {name}
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
