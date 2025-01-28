import Navbar from "../components/navbar";
import HeroSection from "../components/Hero";
import Footer from "../components/footer";
import { BentoDemo } from "@/components/bento";
import ClerkComponent from "@/components/clerk";
import Head from "next/head";

export default function Home() {
  return (
    <>
      {/* Metadata */}
      <Head>
        <title>SolaTech</title>
        <meta
          name="Sola Technologies"
          content="Website for a health and fitness"
        />
      </Head>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-between w-full h-auto space-y-10 p-3">
        {/* Header Section */}
        <header className="w-full h-auto space-y-10">
          <div id="navSection">
            <Navbar />
          </div>
        </header>

        {/* Main Body Section */}
        <section className="w-full ">
          <HeroSection />

          <ClerkComponent />
          <BentoDemo />
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
