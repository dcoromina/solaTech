import React from "react";
import Image from "next/image";
import Dashboard from "/public/dashboard.png";
import RepTrack from "/public/RepTrack.jpg";
import FoodApp from "/public/FoodApp.jpg";

const HeroSections = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center gap-2 px-4">
      <div className="max-w-[800px] flex flex-col items-center gap-2">
        <span className="text-purple-300 font-medium tracking-wide text-sm uppercase px-4 py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full border border-purple-500/20">
          Transform Your Fitness Journey
        </span>

        <h1 className="font-bold text-white lg:text-6xl text-4xl text-center leading-tight tracking-tight px-10 text-pretty">
          A Good Life Starts With{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            Good Health
          </span>
        </h1>

        <p className="text-gray-300 text-center text-lg lg:text-xl max-w-[600px] leading-relaxed text-pretty px-5">
          Empowering your health and fitness journey through cutting-edge
          technology. Track, analyze, and improve your performance like never
          before.
        </p>

        <div className="mt-6">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl font-medium hover:scale-105 transition-all duration-200 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40">
            Get Started Free
          </button>
        </div>
      </div>

      <div className="relative w-full max-w-[1200px] h-auto flex flex-row justify-center px-4">
        <Image
          src={Dashboard}
          className="w-full h-auto aspect-auto relative z-20 rounded-xl hover:scale-105 transition-all hover:z-40 cursor-pointer duration-200 ease-in shadow-xl hover:shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/30"
          alt="Fitness dashboard overview"
        />
      </div>
    </div>
  );
};

export default HeroSections;
