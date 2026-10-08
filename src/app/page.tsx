"use client";
import Navbar from "../components/navbar";
import HeroSections from "../components/Hero";
import Footer from "../components/footer";
import ClerkComponent from "@/components/clerk-enhanced";
import ClerkData from "@/components/clerk-data";
import ClerkFitness from "@/components/clerk-workout-diet";
import ClerkPro from "@/components/clerk-pro";
import { StatsSection } from "@/components/ui/stats-section";
import { FeaturesSection } from "@/components/ui/features-section";
import { IntegrationSection } from "@/components/ui/integration";
import { FAQSection } from "@/components/ui/faq-section";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col bg-gray-900 min-h-screen">
      {/* Header */}
      <header className="w-full sticky top-0 z-50 ">
        <div id="navSection">
          <Navbar />
        </div>
      </header>

      <HeroSections />

      <StatsSection />

      <IntegrationSection />

      {/* Product Cards */}
      <section className="py-20 md:py-28 bg-gray-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-b from-purple-500/5 to-transparent blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center mb-14">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full text-purple-300 font-medium tracking-wide text-sm uppercase border border-purple-500/20 inline-block"
            >
              Our Products
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-3xl md:text-5xl font-bold text-white mt-5"
            >
              Explore the Suite
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto mt-4"
            >
              Powerful tools to help you build, track, and grow.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
            <ClerkComponent />
            <ClerkFitness />
            <ClerkData />
            <ClerkPro />
          </div>
        </div>
      </section>

      {/* Features */}
      <FeaturesSection />

      {/* FAQ */}
      <FAQSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
