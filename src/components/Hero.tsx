"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
<<<<<<< HEAD
import { motion } from "framer-motion";
import Dashboard from "/public/dashboard.png";
import FoodAppImage from "/public/FoodApp.jpg";
import ReptrackImage from "/public/RepTrack.jpg";
=======
import Dashboard from "../../public/dashboard.png";
import FoodAppImage from "../../public/FoodApp.jpg";
import ReptrackImage from "../../public/RepTrack.jpg";
import { motion } from "framer-motion";
>>>>>>> 3051ac14ece559a7e0eee9d5961fd19e199b0cc5

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const HeroSection = () => {
  return (
<<<<<<< HEAD
    <div className="min-h-[80vh] flex flex-col items-center justify-center gap-12 px-4 py-0 md:py-10 relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(168,85,247,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.4) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-violet-500/10 to-cyan-500/10 blur-3xl"
        />
      </div>

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-purple-400/40"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        />
      ))}

      <div className="max-w-[900px] flex flex-col items-center gap-6 relative z-10">
        <motion.span
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-purple-300 font-medium tracking-wide text-sm uppercase px-4 py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full border border-purple-500/20 backdrop-blur-sm"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse" />
          Transform Your Fitness Journey
        </motion.span>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-bold text-white lg:text-7xl md:text-5xl text-4xl text-center leading-tight tracking-tight md:text-balance text-pretty px-1"
        >
          A Good Life Starts With{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-blue-500 animate-gradient bg-[length:200%_auto]">
=======
    <div className="min-h-[70vh] flex flex-col items-center justify-center gap-12 px-4  mt-20 md:py-10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-purple/20 to-blue/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue/20 to-purple/20 blur-3xl" />
      </div>

      <div className="max-w-[900px] flex flex-col items-center  gap-6 relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-purple-500 font-medium tracking-wide text-sm uppercase px-4 py-2 bg-gradient-to-r from-purple/10 to-blue/10 rounded-full border border-purple/20"
        >
          Transform Your Fitness Journey
        </motion.span>

        {/*      <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-purple-300 font-medium tracking-wide text-sm uppercase px-4 py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full border border-purple-500/20"
        >
          Transform Your Fitness Journey
        </motion.span> */}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-bold text-foreground lg:text-6xl md:text-5xl text-4xl text-center leading-tight tracking-tight md:text-balance text-pretty px-1"
        >
          A Good Life Starts With{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple via-cyan to-blue">
>>>>>>> 3051ac14ece559a7e0eee9d5961fd19e199b0cc5
            Good Health
          </span>
        </motion.h1>

        <motion.p
<<<<<<< HEAD
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-gray-300 text-center text-lg lg:text-xl max-w-[700px] leading-relaxed"
=======
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground text-center text-lg lg:text-xl max-w-[700px] leading-relaxed"
>>>>>>> 3051ac14ece559a7e0eee9d5961fd19e199b0cc5
        >
          Your All-in-One companion in your health and fitness journey.
        </motion.p>

        <motion.div
<<<<<<< HEAD
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-6 flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/contact"
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl font-medium hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 overflow-hidden"
=======
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/JOINNOW"
            className="px-8 py-4 bg-gradient-to-r from-purple to-blue text-primary rounded-xl font-medium hover:scale-105 transition-all duration-200 shadow-lg shadow-purple/25 hover:shadow-purple/40"
>>>>>>> 3051ac14ece559a7e0eee9d5961fd19e199b0cc5
          >
            <span className="relative z-10">Get Started Free</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
<<<<<<< HEAD
          <Link
            href="#features"
            className="px-8 py-4 bg-white/5 text-white rounded-xl font-medium hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 backdrop-blur-sm"
          >
            Learn More
          </Link>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex items-center gap-6 mt-4 text-sm text-gray-400"
        >
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Free trial
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            No credit card
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Cancel anytime
          </span>
=======
>>>>>>> 3051ac14ece559a7e0eee9d5961fd19e199b0cc5
        </motion.div>
      </div>

      <motion.div
<<<<<<< HEAD
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative w-full max-w-[1200px] h-auto flex flex-row justify-center items-center px-4 z-10 group/container"
      >
        {/* Left Image - Hidden behind, rotates out on hover */}
        <div className="hidden lg:block absolute left-20 bottom-0 w-[190px] transform transition-all translate-x-[280px] duration-700 ease-out rotate-0 opacity-0 group-hover/container:-translate-x-8 group-hover/container:-rotate-12 group-hover/container:opacity-100 z-10">
=======
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative w-full max-w-[1200px] h-auto flex justify-center items-center mt-10 perspective-1000 group/cards"
      >
        {/* Left Image - Fans out to left */}
        <div className="absolute z-10 top-1/2 left-1/2 w-[100px] sm:w-[160px] md:w-[230px] scale-75 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out group-hover/cards:-translate-x-[40%] sm:group-hover/cards:-translate-x-[80%] md:group-hover/cards:-translate-x-[230%] group-hover/cards:-rotate-12 group-hover/cards:scale-95">
>>>>>>> 3051ac14ece559a7e0eee9d5961fd19e199b0cc5
          <Image
            src={FoodAppImage}
            className="w-full h-auto rounded-xl shadow-2xl shadow-black/40 border border-border"
            alt="Food App"
          />
        </div>

<<<<<<< HEAD
        {/* Center Main Image */}
        <div className="relative z-20 max-w-[800px]">
          <Image
            src={Dashboard}
            className="w-full h-auto aspect-auto relative rounded-xl hover:scale-[1.02] transition-all duration-500 ease-out shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/30"
            alt="Fitness dashboard overview"
            priority
          />
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl opacity-0 group-hover/container:opacity-100 transition-opacity duration-500 -z-10" />
          {/* Reflection/shine effect */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
        </div>

        {/* Right Image - Hidden behind, rotates out on hover */}
        <div className="hidden hover:scale-105 lg:block absolute right-20 bottom-0 w-[190px] transform transition-all -translate-x-[280px] duration-700 ease-out rotate-0 opacity-0 group-hover/container:translate-x-8 group-hover/container:rotate-12 group-hover/container:opacity-100 z-10">
=======
        {/* Right Image - Fans out to right */}
        <div className="absolute z-10 top-1/2 left-1/2 w-[100px] sm:w-[160px] md:w-[230px] scale-75 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out group-hover/cards:translate-x-[40%] sm:group-hover/cards:translate-x-[80%] md:group-hover/cards:translate-x-[140%] group-hover/cards:rotate-12 group-hover/cards:scale-95">
>>>>>>> 3051ac14ece559a7e0eee9d5961fd19e199b0cc5
          <Image
            src={ReptrackImage}
            className="w-full h-auto rounded-xl shadow-2xl shadow-black/40 border border-border"
            alt="Rep Tracker"
          />
        </div>
<<<<<<< HEAD
=======

        {/* Center Main Image - Stays scale */}
        <div className="relative z-20 w-full h-full max-w-[800px] transition-transform duration-500 ease-out group-hover/cards:scale-105 group-hover/cards:z-30">
          <Image
            src={Dashboard}
            className="w-full h-auto aspect-auto rounded-xl shadow-2xl shadow-purple/20 group-hover/cards:shadow-purple/40 border border-border"
            alt="Dashboard"
            priority
          />
        </div>
>>>>>>> 3051ac14ece559a7e0eee9d5961fd19e199b0cc5
      </motion.div>
    </div>
  );
};

export default HeroSection;