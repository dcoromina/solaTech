import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { SectionHeader } from "@/components/ui/section-header";

export default function ContactPage() {
  return (
    <div className="flex flex-col bg-gray-900 min-h-screen">
      <header className="w-full sticky top-0 z-50">
        <Navbar />
      </header>
      <main className="flex-1">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <SectionHeader
              title="Contact Us"
              subtitle="We’d love to hear from you."
              align="left"
            />
            <div className="space-y-4 text-gray-300 max-w-3xl">
              <p>
                Reach out for partnerships, product inquiries, or support. We’ll
                get back to you as soon as possible.
              </p>
              <p className="text-gray-400">Email: contact@solatech.example</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
