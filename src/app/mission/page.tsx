import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { SectionHeader } from "@/components/ui/section-header";

export default function MissionPage() {
  return (
    <div className="flex flex-col bg-gray-900 min-h-screen">
      <header className="w-full sticky top-0 z-50">
        <Navbar />
      </header>
      <main className="flex-1">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <SectionHeader
              title="Our Mission"
              subtitle="The core purpose and values driving the company."
              align="left"
            />
            <div className="space-y-4 text-gray-300 max-w-3xl">
              <p>
                We exist to advance healthcare through human-centered
                technology. Our mission is to empower organizations and
                practitioners with reliable, secure, and scalable solutions that
                improve patient outcomes and streamline operations.
              </p>
              <p>
                We combine innovation, quality, and empathy to deliver products
                that make a measurable impact on people’s lives.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
