"use client";
import Navbar from "../components/navbar";
import HeroSections from "../components/Hero";
import Footer from "../components/footer";
import BentoGrid from "@/components/bento";
import ClerkComponent from "@/components/clerk-enhanced";
import ClerkData from "@/components/clerk-data";
import ClerkFitness from "@/components/clerk-workout-diet";
import ClerkPro from "@/components/clerk-pro";
import Clerk from "@/components/clerk-integrate";
import { TestimonialsSection } from "@/components/ui/testimonials";
import { StatsSection } from "@/components/ui/stats-section";
import { CTASection } from "@/components/ui/cta-section";
import { FeaturesSection } from "@/components/ui/features-section";
import { PricingSection } from "@/components/ui/pricing-section";
import { AboutSection } from "@/components/ui/about-section";
import { SecuritySection } from "@/components/ui/security-section";
import { IntegrationSection } from "@/components/ui/integration";
import { ProductShowcase } from "@/components/ui/product-showcase";
import ProductSelect from "@/components/ui/product_select";
import { FAQSection } from "@/components/ui/faq-section";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col bg-gray-900 min-h-screen">
      {/* Header */}
      <header className="w-full sticky top-0 z-50 ">
        <div id="navSection">
          <Navbar />
        </div>
      </header>

      {/* Hero */}
      <HeroSections />

      {/* Stats */}
      <StatsSection />
{/*<ProductSelect /> */}

      {/* Product Showcase Sections */}
      <ProductShowcase />

      {/* Integrations */}
      <IntegrationSection />

      {/* Product Cards */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full text-purple-300 font-medium tracking-wide text-sm uppercase border border-purple-500/20 inline-block">
              Our Products
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
              Explore the Suite
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mt-3">
              Powerful tools to help you build, track, and grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
            <ClerkComponent />
            <ClerkFitness />
            <ClerkData />
            <ClerkPro/>
          </div>
        </div>
      </section>

      {/* Features */}
      <FeaturesSection />

      {/* FAQ */}
      <FAQSection />

      {/* CTA Header */}
      <section className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-2">
            <span className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full text-purple-300 font-medium tracking-wide text-sm uppercase border border-purple-500/20 inline-block">
              Get Started
            </span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
