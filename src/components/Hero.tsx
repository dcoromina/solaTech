"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Dashboard from "/public/dashboard.png";
import FoodAppImage from "/public/FoodApp.jpg";
import ReptrackImage from "/public/RepTrack.jpg";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center gap-12 px-4 py-0 md:py-10 relative overflow-hidden">
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
          className="font-bold text-white lg:text-7xl md:text-6xl text-5xl text-center leading-tight tracking-tighter md:text-balance text-pretty px-1"
        >
          A Good Life Starts With{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 animate-gradient-x bg-300%">
            Good Health
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-300 text-center text-lg lg:text-xl max-w-[700px] leading-relaxed tracking-wide"
        >
          Your All-in-One companion in your health and fitness journey.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/JOINNOW"
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl shadow-purple-500/30 hover:shadow-purple-500/50 ring-1 ring-white/20"
          >
            Get Started Free
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative w-full max-w-[1200px] h-auto flex flex-row justify-center items-center px-4 z-10 group/container"
      >
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
      </motion.div>
    </div>
  );
};

export default HeroSection;
