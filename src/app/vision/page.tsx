import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { SectionHeader } from "@/components/ui/section-header";

export default function VisionPage() {
  return (
    <div className="flex flex-col bg-gray-900 min-h-screen">
      <header className="w-full sticky top-0 z-50">
        <Navbar />
      </header>
      <main className="flex-1">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <SectionHeader
              title="Our Vision"
              subtitle="Long-term goals and aspirations for transforming healthcare."
              align="left"
            />
            <div className="space-y-4 text-gray-300 max-w-3xl">
              <p>
                We envision a world where healthcare experiences are seamless,
                data-driven, and deeply personal. Technology should enhance
                human connection in care—not replace it.
              </p>
              <p>
                By building an interoperable ecosystem, we aim to accelerate
                innovation and deliver better outcomes at global scale.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
