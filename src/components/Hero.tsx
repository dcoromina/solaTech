"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Dashboard from "../../public/dashboard.png";
import FoodAppImage from "../../public/FoodApp.jpg";
import ReptrackImage from "../../public/RepTrack.jpg";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center gap-12 px-4  mt-20 md:py-10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl" />
      </div>

      <div className="max-w-[900px] flex flex-col items-center  gap-6 relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-purple-300 font-medium tracking-wide text-sm uppercase px-4 py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full border border-purple-500/20"
        >
          Transform Your Fitness Journey
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-bold text-white lg:text-6xl md:text-5xl text-4xl text-center leading-tight tracking-tight md:text-balance text-pretty px-1"
        >
          A Good Life Starts With{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            Good Health
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-300 text-center text-lg lg:text-xl max-w-[700px] leading-relaxed"
        >
          Your All-in-One companion in your health and fitness journey.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/JOINNOW"
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl font-medium hover:scale-105 transition-all duration-200 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
          >
            Get Started Free
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative w-full max-w-[1200px] h-auto flex justify-center items-center mt-10 perspective-1000 group/cards"
      >
        {/* Left Image - Fans out to left */}
        <div className="absolute z-10 top-1/2 left-1/2 w-[200px] md:w-[230px] scale-75 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out group-hover/cards:-translate-x-[40%] md:group-hover/cards:-translate-x-[230%] group-hover/cards:-rotate-12 group-hover/cards:scale-95">
          <Image
            src={FoodAppImage}
            className="w-full h-auto rounded-xl shadow-2xl shadow-black/40 border border-white/10"
            alt="Food App"
          />
        </div>

        {/* Right Image - Fans out to right */}
        <div className="absolute z-10 top-1/2 left-1/2 w-[200px] md:w-[230px] scale-75 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out group-hover/cards:translate-x-[40%] md:group-hover/cards:translate-x-[140%] group-hover/cards:rotate-12 group-hover/cards:scale-95">
          <Image
            src={ReptrackImage}
            className="w-full h-auto rounded-xl shadow-2xl shadow-black/40 border border-white/10"
            alt="Rep Tracker"
          />
        </div>

        {/* Center Main Image - Stays scale */}
        <div className="relative z-20 w-full h-full max-w-[800px] transition-transform duration-500 ease-out group-hover/cards:scale-105 group-hover/cards:z-30">
          <Image
            src={Dashboard}
            className="w-full h-auto aspect-auto rounded-xl shadow-2xl shadow-purple-500/20 group-hover/cards:shadow-purple-500/40 border border-white/10"
            alt="Dashboard"
            priority
          />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;