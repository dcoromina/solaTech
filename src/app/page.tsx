import Navbar from "../components/navbar";
import HeroSection from "../components/Hero";
import Footer from "../components/footer";
import BentoGrid from "@/components/bento";
import ClerkComponent from "@/components/clerk-enhanced";
import ClerkData from "@/components/clerk-data";
import ClerkFitness from "@/components/clerk-workout-diet";
import Clerk from "@/components/clerk-integrate";
import { TestimonialsSection } from "@/components/ui/testimonials";
import { StatsSection } from "@/components/ui/stats-section";
import { CTASection } from "@/components/ui/cta-section";
import { FeaturesSection } from "@/components/ui/features-section";

export default function Home() {
  return (
    <main className="flex flex-col bg-gray-900 min-h-screen">
      {/* Header Section */}
      <header className="w-full sticky top-0 z-50">
        <div id="navSection">
          <Navbar />
        </div>
      </header>

      {/* Main Body Section */}
      <section className="w-full flex-1">
        <HeroSection />
        <StatsSection />
        <FeaturesSection />

        {/* Integration Showcase */}
        <div className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <span className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full text-purple-300 font-medium tracking-wide text-sm uppercase border border-purple-500/20 mb-4 inline-block">
                Platform Features
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Seamless Integration
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our modular architecture allows for easy integration with your
                existing systems
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="grid md:grid-rows-2 gap-8">
                <ClerkComponent />
                <ClerkFitness />
              </div>
              <div className="grid gap-8">
                <ClerkData />
                <Clerk />
              </div>
            </div>
          </div>
        </div>

        <TestimonialsSection />
        <BentoGrid />
        <CTASection />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}