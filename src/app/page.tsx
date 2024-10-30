import Image from "next/image";
import Navbar from "../components/navbar";
import HeroSection from "../components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between w-full h-svh ">
      <header className=" w-full h-svh  space-y-10">
        <Navbar />
        <HeroSection />
      </header>
      <body></body>
    </main>
  );
}
