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
import { PricingSection } from "@/components/ui/pricing-section";
import { AboutSection } from "@/components/ui/about-section";
import { SecuritySection } from "@/components/ui/security-section";
import { IntegrationSection } from "@/components/ui/integration";
import { FAQSection } from "@/components/ui/faq-section";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col bg-gray-900 min-h-screen">
      {/* Main Content */}
      <div className="flex flex-col bg-gray-900 pt-3">
        {/* Header Section */}
        <header className="w-full  sticky top-0 z-50 ">
          <div id="navSection">
            <Navbar />
          </div>
        </header>

        {/* Integration Showcase */}
        <div className="py-0 bg-gray-900">
          <div className="max-w-7xl mx-auto px-0 sm:px-6">
            <HeroSection />
            <StatsSection />
            <IntegrationSection />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
              <ClerkComponent />
              <ClerkComponent />
              <ClerkFitness />
              <ClerkData />
            </div>
          </div>
        </div>
        <FeaturesSection />
        {/*           <TestimonialsSection />*/}
        {/* <BentoGrid /> */}

        <section>
          {/*  <SecuritySection /> */}

          {/* <TestimonialsSection /> */}

          {/*  <PricingSection /> */}

          {/* Bento Grid - Additional Features 
          <BentoGrid />
*/}
          <FAQSection />

          {/* maybe put it in enterprise or something like that
          <CTASection /> */}
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}
