import Navbar from "../components/navbar";
import HeroSection from "../components/Hero";
import Footer from "../components/footer";
import BentoGrid from "@/components/bento";
import ClerkComponent from "@/components/clerk-enhanced";
import ClerkData from "@/components/clerk-data";
import ClerkFitness from "@/components/clerk-workout-diet";
import Clerk from "@/components/clerk-integrate";
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
      <main className="flex flex-col items-center justify-between h-auto space-y-10 p-3 fade-in">
        {/* Header Section */}
        <header className="w-full h-auto space-y-10">
          <div id="navSection">
            <Navbar />
          </div>
        </header>

        {/* Main Body Section */}
        <section className="w-full">
          <HeroSection />
          <div className="grid grid-cols-2 w-fit mx-auto">
            <div className="grid grid-rows-2 h-fit">
              {" "}
              <ClerkComponent />
              <ClerkFitness />
            </div>

            <ClerkData />

            <Clerk />
          </div>

          <BentoGrid />
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
