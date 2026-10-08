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
<<<<<<< HEAD
=======

import ProductSelect from "@/components/ui/product_select";
>>>>>>> 3051ac14ece559a7e0eee9d5961fd19e199b0cc5
import { FAQSection } from "@/components/ui/faq-section";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col bg-background min-h-screen text-foreground relative">
      {/* Unified Background Gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-purple/15 to-blue/15 blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue/10 to-purple/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-[550px] h-[550px] rounded-full bg-gradient-to-r from-purple/12 to-blue/12 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue/15 to-purple/15 blur-3xl animate-pulse" style={{ animationDuration: '10s' }} />
        <div className="absolute bottom-0 left-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple/10 to-blue/10 blur-3xl" />
      </div>

      {/* Header */}
      <header className="w-full sticky top-0 z-50">
        <div id="navSection">
          <Navbar />
        </div>
      </header>

      <HeroSections />

      <StatsSection />

      <IntegrationSection />

<<<<<<< HEAD
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
=======
      {/* Features */}
      <FeaturesSection />


      {/*      <ProductSelect /> */}
      {/*   <BentoGrid /> */}

      {/* Product Cards */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center mb-10">
            <span className="px-4 py-2 bg-gradient-to-r from-purple/10 to-blue/10 rounded-full text-purple font-medium tracking-wide text-sm uppercase border border-purple/20 inline-block">
              Our Products
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4">
              Explore the Suite
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mt-3">
>>>>>>> 3051ac14ece559a7e0eee9d5961fd19e199b0cc5
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



      <TestimonialsSection />

      <PricingSection />

      {/* FAQ */}
      <FAQSection />

<<<<<<< HEAD
=======
      {/* CTA */}
      <CTASection />

>>>>>>> 3051ac14ece559a7e0eee9d5961fd19e199b0cc5
      {/* Footer */}
      <Footer />
    </div>
  );
}
