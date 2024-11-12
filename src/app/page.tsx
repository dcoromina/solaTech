import Navbar from "../components/navbar";
import HeroSection from "../components/Hero";
import Footer from "../components/footer";
import { BentoDemo } from "@/components/bento";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between w-full h-auto space-y-10">
      <header className=" w-full h-1/6  space-y-10">
        <title></title>
      </header>
      <body className="w-full">
        <div id="navSection">
          {" "}
          <Navbar />
        </div>
        <HeroSection />
        <BentoDemo />
        <Footer />
      </body>
    </main>
  );
}
