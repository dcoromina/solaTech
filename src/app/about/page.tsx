import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { AboutSection } from "@/components/ui/about-section";

export default function AboutPage() {
  return (
    <div className="flex flex-col bg-gray-900 min-h-screen">
      <header className="w-full sticky top-0 z-50">
        <Navbar />
      </header>
      <main className="flex-1">
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
