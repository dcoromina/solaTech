import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { SectionHeader } from "@/components/ui/section-header";

export default function WearablesPage() {
  return (
    <div className="flex flex-col bg-gray-900 min-h-screen">
      <header className="w-full sticky top-0 z-50">
        <Navbar />
      </header>
      <main className="flex-1">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <SectionHeader
              title="Wearables"
              subtitle="Devices to use with our solutions."
              align="left"
            />
            <div className="space-y-4 text-gray-300 max-w-3xl">
              <p>
                We integrate with popular wearable ecosystems to provide a
                seamless experience. Support includes Apple Health, Google Fit,
                Oura, WHOOP, Strava, MyFitnessPal, and more.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
