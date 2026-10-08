"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiLayout, FiSmile, FiTrendingUp, FiZap, FiShield } from "react-icons/fi";
import { motion } from "framer-motion";

const features = [
  {
    title: "Progress & Performance Analytics",
    description:
      "Track workouts, recovery, and body metrics with AI-driven insights to optimize your training and health.",
    icon: FiTrendingUp,
    gradient: "from-purple-500 to-violet-500",
  },
  {
    title: "Adaptive Programs & Routines",
    description: "Training and wellness plans that auto-adjust to your goals, schedule, and progress.",
    icon: FiLayout,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Wearables & App Integrations",
    description: "Seamless sync with Apple Health, Google Fit, Strava, Oura, Whoop, and more.",
    icon: FiCode,
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    title: "Privacy & Data Security",
    description: "Bank‑level encryption and best‑practice safeguards to protect your health data.",
    icon: FiShield,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Quick Start Assessments",
    description: "Onboard fast with fitness, nutrition, and lifestyle assessments that personalize your plan.",
    icon: FiZap,
    gradient: "from-amber-500 to-orange-500",
  },
  {
    title: "24/7 Expert Consultation",
    description: "Chat with certified coaches, trainers, and dietitians anytime you need guidance.",
    icon: FiSmile,
    gradient: "from-pink-500 to-rose-500",
  },
];

export function FeaturesSection() {
  return (
<<<<<<< HEAD
    <section id="features" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full text-purple-300 font-medium tracking-wide text-sm uppercase border border-purple-500/20 mb-4 inline-block"
          >
            Features & Benefits
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Empower Your Health & Fitness Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
=======
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-gradient-to-r from-purple/10 to-blue/10 rounded-full text-purple font-medium tracking-wide text-sm uppercase border border-purple/20 mb-4 inline-block">
            Features & Benefits
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Empower Your Health & Fitness Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
>>>>>>> 3051ac14ece559a7e0eee9d5961fd19e199b0cc5
            Discover AI-driven tools, personalized guidance, and seamless integrations designed to help you thrive in fitness and wellness.
          </motion.p>
        </div>

<<<<<<< HEAD
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="group relative p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-purple-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/5 backdrop-blur-sm overflow-hidden"
            >
              {/* Hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.05] to-blue-500/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              {/* Corner decoration */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl" />

              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                  {React.createElement(feature.icon, {
                    className: "w-6 h-6 text-white",
                  })}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-blue-300 transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
=======
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              className="group p-8 rounded-3xl bg-card border border-border hover:border-purple/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple/20 backdrop-blur-md hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple/20 to-blue/20 border border-border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:border-purple/30">
                {React.createElement(feature.icon, {
                  className: "w-7 h-7 text-purple group-hover:text-foreground transition-colors duration-300",
                })}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base">
                {feature.description}
              </p>
>>>>>>> 3051ac14ece559a7e0eee9d5961fd19e199b0cc5
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
