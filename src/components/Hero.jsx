import React from "react";
import Image from "next/image";
import Dashboard from "/public/dashboard.png";
import RepTrack from "/public/RepTrack.jpg";
import FoodApp from "/public/FoodApp.jpg";

const HeroSection = () => {
  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center gap-10 px-4 ">
      <div className="max-w-[800px] flex flex-col items-center gap-3">
        <span className="text-purple-300 font-medium tracking-wide text-sm uppercase">
          Transform Your Fitness Journey
        </span>

        <h1 className="font-bold font-mono text-white lg:text-6xl text-4xl text-center leading-tight">
          A Good Life Starts With{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            Good Health
          </span>
        </h1>

        <p className="text-gray-400 text-center text-lg lg:text-xl max-w-[600px]">
          Empowering your health and fitness journey through cutting-edge
          technology. Track, analyze, and improve your performance like never
          before.
        </p>

        <div className=" mt-4">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl font-medium hover:scale-105 transition-all duration-200 shadow-lg shadow-purple-500/25">
            Get Started Free
          </button>
        </div>
      </div>

      <div className="relative w-full max-w-[1200px] h-auto flex flex-row justify-center px-4">
        <Image
          src={Dashboard}
          className="w-12/12 h-auto aspect-auto relative z-20 rounded-xl hover:scale-105 transition-all hover:z-40 cursor-pointer duration-200 ease-in shadow-xl hover:shadow-2xl shadow-emerald-500/10 hover:shadow-emerald-500/20"
          alt="Fitness dashboard overview"
        />
      </div>
    </div>
  );
};

export default HeroSection;
