"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Dashboard from "/public/dashboard.png";
import FoodAppImage from "/public/FoodApp.jpg";
import ReptrackImage from "/public/RepTrack.jpg";

const HeroSection = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center gap-12 px-4 py-0 md:py-10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl" />
      </div>

      <div className="max-w-[900px] flex flex-col items-center  gap-6 relative z-10">
        <span className="text-purple-300 font-medium tracking-wide text-sm uppercase px-4 py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full border border-purple-500/20">
          Transform Your Fitness Journey
        </span>

        <h1 className="font-bold text-white lg:text-6xl md:text-5xl text-4xl text-center leading-tight tracking-tight md:text-balance text-pretty px-1">
          A Good Life Starts With{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            Good Health
          </span>
        </h1>

        <p className="text-gray-300 text-center text-lg lg:text-xl max-w-[700px] leading-relaxed">
          Your All-in-One companion in your health and fitness journey.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl font-medium hover:scale-105 transition-all duration-200 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
          >
            Get Started Free
          </Link>
        </div>
      </div>

      <div className="relative w-full max-w-[1200px] h-auto flex flex-row justify-center items-center px-4 z-10 group/container">
        {/* Left Image - Hidden behind, rotates out on hover */}
        <div className="hidden lg:block absolute left-20 bottom-0 w-[190px] transform transition-all translate-x-[280px] duration-700 ease-out rotate-0 opacity-0 group-hover/container:-translate-x-8 group-hover/container:-rotate-12 group-hover/container:opacity-100 z-10">
          <Image
            src={FoodAppImage}
            className="w-full h-auto rounded-xl shadow-2xl shadow-black/40 hover:scale-105 transition-transform duration-300"
            alt="Recipe preview"
          />
        </div>

        {/* Center Main Image */}
        <div className="relative z-20 max-w-[800px]">
          <Image
            src={Dashboard}
            className="w-full h-auto aspect-auto relative rounded-xl hover:scale-105 transition-all  duration-300 ease-in shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/30"
            alt="Fitness dashboard overview"
            priority
          />
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
        </div>

        {/* Right Image - Hidden behind, rotates out on hover */}
        <div className="hidden hover:scale-105 lg:block absolute right-20 bottom-0 w-[190px] transform transition-all -translate-x-[280px] duration-700 ease-out rotate-0 opacity-0 group-hover/container:translate-x-8 group-hover/container:rotate-12 group-hover/container:opacity-100 z-10">
          <Image
            src={ReptrackImage}
            className="w-full h-auto rounded-xl shadow-2xl shadow-black/40 hover:scale-100 transition-transform duration-300"
            alt="Fitness tracking app"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
