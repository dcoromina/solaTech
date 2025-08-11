import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { SectionHeader } from "@/components/ui/section-header";

export default function RepTrackPage() {
  return (
    <div className="flex flex-col bg-gray-900 min-h-screen">
      <header className="w-full sticky top-0 z-50">
        <Navbar />
      </header>
      <main className="flex-1">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <SectionHeader
              title="RepTrack"
              subtitle="Track your workouts in a simpler way."
              align="left"
            />
            <div className="space-y-4 text-gray-300 max-w-3xl">
              <p>
                A streamlined workout tracker focused on clarity and
                performance. Log sets, reps, and progress effortlessly on any
                device.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
