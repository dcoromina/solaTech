import Image from "next/image";
import Navbar from "../components/navbar";
import HeroSection from "../components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between w-full h-svh">
      <header className=" w-full h-svh bg-gradient-to-r from-[#8B4FC7] to-[#4262DB]">
        <Navbar></Navbar>
        <HeroSection></HeroSection>
      </header>
      <body></body>
    </main>
  );
}
